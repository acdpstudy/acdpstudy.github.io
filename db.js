(function () {
  "use strict";

  var CFG = window.STUDY_CONFIG;
  var QUEUE_KEY = "study-queue-v1";
  var sb = null;
  var statusCb = function () {};
  var flushing = false;
  var urlParams = new URLSearchParams(location.search);
  var dryParam = urlParams.get("dry") === "1";

  if (!dryParam && CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY && window.supabase) {
    var baseUrl = CFG.SUPABASE_URL.replace(/\/(rest|auth|storage)\/v1\/?$/, "").replace(/\/+$/, "");
    sb = window.supabase.createClient(baseUrl, CFG.SUPABASE_ANON_KEY);
  }

  function readQueue() {
    try { return JSON.parse(localStorage.getItem(QUEUE_KEY)) || []; }
    catch (e) { return []; }
  }
  function writeQueue(q) {
    try { localStorage.setItem(QUEUE_KEY, JSON.stringify(q)); } catch (e) {}
  }
  function enqueue(job) {
    var q = readQueue();
    q.push(job);
    writeQueue(q);
    statusCb("offline", q.length);
  }

  async function flushQueue() {
    if (!sb || flushing) return;
    var q = readQueue();
    if (!q.length) return;
    flushing = true;
    try {
      while (q.length) {
        await runJob(q[0]);
        q.shift();
        writeQueue(q);
      }
      statusCb("online", 0);
    } catch (e) {
    } finally {
      flushing = false;
    }
  }
  window.addEventListener("online", function () { flushQueue(); });

  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  async function runJob(job) {
    if (!sb) throw new Error("keine Verbindung konfiguriert");
    var res;
    if (job.kind === "insert") {
      res = await sb.from(job.table).insert(job.row);
    } else if (job.kind === "rpc") {
      res = await sb.rpc(job.fn, job.args);
    } else {
      throw new Error("unbekannter Job");
    }
    if (res.error) throw res.error;
    return res.data;
  }

  async function withRetry(job, queueOnFail) {
    if (!sb) {
      if (queueOnFail) enqueue(job);
      return { ok: false, dry: true, error: new Error("keine Verbindung konfiguriert") };
    }
    var delays = CFG.RETRY_DELAYS_SECONDS || [1, 3, 9];
    var lastErr = null;
    for (var i = 0; i <= delays.length; i++) {
      try {
        var data = await runJob(job);
        statusCb("online", readQueue().length);
        flushQueue();
        return { ok: true, data: data };
      } catch (e) {
        lastErr = e;
        if (e && (e.code === "23505" || e.code === "409")) {
          return { ok: false, conflict: true, error: e };
        }
        if (i < delays.length) await sleep(delays[i] * 1000);
      }
    }
    if (queueOnFail) enqueue(job);
    return { ok: false, error: lastErr };
  }

  var DRY_KEY = "study-dry-progress";
  var DRY_ALLOC = "study-dry-allocation";
  var DRY_LOG = "study-dry-events";
  function dryState() {
    try { return JSON.parse(localStorage.getItem(DRY_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function drySave(s) {
    try { localStorage.setItem(DRY_KEY, JSON.stringify(s)); } catch (e) {}
  }

  function berlinParts(d) {
    var p = {};
    new Intl.DateTimeFormat("en-GB", { timeZone: CFG.TIMEZONE, year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, weekday: "short" })
      .formatToParts(d).forEach(function (x) { p[x.type] = x.value; });
    return p;
  }
  function berlinMidnight(y, m, d) {
    var t = Date.UTC(y, m - 1, d);
    var p = berlinParts(new Date(t));
    var wall = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute, +p.second);
    return new Date(t - (wall - t));
  }
  function schedule(from) {
    var p = berlinParts(new Date(from));
    var dow = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }[p.weekday];
    var y = +p.year, mo = +p.month, d = +p.day + (8 - dow);
    var at = function (plus) { return berlinMidnight(y, mo, d + plus); };
    var end = function (plus) { return new Date(at(plus).getTime() - 1000); };
    return {
      t1_opens: at(7).toISOString(), t1_closes: end(14).toISOString(),
      t2_opens: at(28).toISOString(), t2_closes: end(35).toISOString()
    };
  }
  var fakeNow = null;
  (function () {
    var m = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/.exec(urlParams.get("jetzt") || "");
    if (m) fakeNow = berlinMidnight(+m[1], +m[2], +m[3]).getTime() + ((+m[4] || 0) * 60 + (+m[5] || 0)) * 60000;
  })();
  function now() { return (!sb && fakeNow) ? fakeNow : Date.now(); }

  var BAG = ["G1", "G1", "G1", "G2", "G2", "G2", "G2", "G2", "G2", "G2",
    "G3", "G3", "G3", "G3", "G3", "G3", "G3", "G4", "G4", "G4"];
  function dryAssign(d, force) {
    if (d.grp) return d.grp;
    if (d.pilot) {
      d.grp = ["G1", "G2", "G3", "G4"].indexOf(force) >= 0 ? force : BAG[Math.floor(Math.random() * 20)];
    } else {
      var a; try { a = JSON.parse(localStorage.getItem(DRY_ALLOC)) || []; } catch (e) { a = []; }
      if (!a.length) {
        a = BAG.slice();
        for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
      }
      d.grp = a.shift();
      try { localStorage.setItem(DRY_ALLOC, JSON.stringify(a)); } catch (e) {}
    }
    d.assigned_at = new Date(now()).toISOString();
    Object.assign(d, schedule(now()));
    if (d.grp === "G1") d.intervention_at = d.assigned_at;
    return d.grp;
  }


  function randomCode() {
    var a = CFG.CODE_ALPHABET, out = "";
    var buf = new Uint32Array(CFG.CODE_LENGTH);
    (window.crypto || {}).getRandomValues ? crypto.getRandomValues(buf)
      : buf.forEach(function (_, i) { buf[i] = Math.floor(Math.random() * 1e9); });
    for (var i = 0; i < CFG.CODE_LENGTH; i++) out += a[buf[i] % a.length];
    return out;
  }

  async function createParticipant(pilot) {
    if (!sb) {
      var dryCode = randomCode();
      drySave({ pilot: !!pilot });
      try { localStorage.removeItem(DRY_LOG); } catch (e) {}
      return { ok: true, code: dryCode, dry: true };
    }
    for (var attempt = 0; attempt < 5; attempt++) {
      var code = randomCode();
      var res = await withRetry(
        { kind: "insert", table: "participants", row: { code: code, pilot: !!pilot } },
        false
      );
      if (res.ok) return { ok: true, code: code };
      if (!res.conflict) return { ok: false, error: res.error };
    }
    return { ok: false, error: new Error("Code-Erzeugung fehlgeschlagen") };
  }

  async function progress(code) {
    if (!sb) {
      var d = dryState();
      var out = { exists: true, dry: true, os: d.os || null, apps: d.apps || [], pilot: !!d.pilot, last_pages: d.last_pages || {} };
      ["r_done", "t0_done", "boost_done", "t1_done", "t2_done", "post_done", "grp", "assigned_at",
        "intervention_at", "t1_opens", "t1_closes", "t2_opens", "t2_closes"].forEach(function (k) { out[k] = d[k] || null; });
      return { ok: true, dry: true, data: out };
    }
    var res = await withRetry({ kind: "rpc", fn: "progress", args: { p_code: code } }, false);
    if (!res.ok) return { ok: false, error: res.error };
    return { ok: true, data: res.data };
  }

  function saveEvent(code, wave, page, key, value, pageSeconds, pilot, version) {
    if (!sb) {
      var d = dryState();
      d.last_pages = d.last_pages || {};
      d.last_pages[wave] = page;
      d.pilot = d.pilot || !!pilot;
      drySave(d);
      try {
        var log = JSON.parse(localStorage.getItem(DRY_LOG)) || [];
        log.push({ wave: wave, page: page, key: key, value: value === undefined ? null : value,
          secs: pageSeconds == null ? null : Math.round(pageSeconds), version: version || CFG.SURVEY_VERSION });
        localStorage.setItem(DRY_LOG, JSON.stringify(log));
      } catch (e) {}
      return Promise.resolve({ ok: true, dry: true });
    }
    var row = {
      code: code, wave: wave, page: page, key: key,
      value: value === undefined ? null : value,
      page_seconds: pageSeconds == null ? null : Math.round(pageSeconds),
      client_ts: new Date().toISOString(),
      pilot: !!pilot
    };
    if (CFG.SEND_VERSION) row.version = version || CFG.SURVEY_VERSION || null;
    return withRetry({ kind: "insert", table: "events", row: row }, true);
  }

  function saveEmail(code, email) {
    if (!sb) return Promise.resolve({ ok: true, dry: true });
    return withRetry({ kind: "rpc", fn: "save_email", args: { p_code: code, p_email: email } }, true);
  }

  function saveProfile(code, os, apps) {
    if (!sb) {
      var d = dryState();
      if (os) d.os = os;
      if (apps) d.apps = apps;
      drySave(d);
      return Promise.resolve({ ok: true, dry: true });
    }
    return withRetry({
      kind: "rpc", fn: "save_profile",
      args: { p_code: code, p_os: os || null, p_apps: apps || null }
    }, true);
  }

  function markDone(code, wave) {
    if (!sb) {
      var d = dryState();
      if (wave === "INTERVENTION") {
        if (["G2", "G3", "G4"].indexOf(d.grp) >= 0 && !d.intervention_at) {
          d.intervention_at = new Date(now()).toISOString();
          Object.assign(d, schedule(now()));
        }
      } else if (!d[wave.toLowerCase() + "_done"]) {
        d[wave.toLowerCase() + "_done"] = new Date(now()).toISOString();
      }
      drySave(d);
      return Promise.resolve({ ok: true, dry: true });
    }
    return withRetry({ kind: "rpc", fn: "mark_done", args: { p_code: code, p_wave: wave } }, true);
  }

  async function assignGroup(code, force) {
    if (!sb) {
      var d = dryState();
      var g = dryAssign(d, force);
      drySave(d);
      return { ok: true, dry: true, grp: g };
    }
    var res = await withRetry({ kind: "rpc", fn: "assign_group", args: { p_code: code, p_force: force || null } }, false);
    if (!res.ok) return { ok: false, error: res.error };
    return { ok: true, grp: res.data };
  }

  async function uploadScreenshot(code, wave, file, nr) {
    if (!sb) return { ok: true, dry: true, path: code + "/" + wave + "/trocken-" + (nr || 1) };
    var m = /\.([A-Za-z0-9]{2,5})$/.exec(String(file.name || ""));
    var ext = m ? m[1].toLowerCase() : (String(file.type || "").split("/")[1] || "bin").replace(/[^a-z0-9]/g, "");
    var path = code + "/" + wave + "/" + Date.now() + "-" + (nr || 1) + "." + ext;
    var delays = CFG.RETRY_DELAYS_SECONDS || [1, 3, 9];
    var lastErr = null;
    for (var i = 0; i <= delays.length; i++) {
      var res = await sb.storage.from(CFG.STORAGE_BUCKET).upload(path, file, { upsert: false });
      if (!res.error) { statusCb("online", readQueue().length); return { ok: true, path: path }; }
      lastErr = res.error;
      var st = Number(res.error.status || res.error.statusCode) || 0;
      if (st >= 400 && st < 500 && st !== 408 && st !== 429) break;
      if (i < delays.length) await sleep(delays[i] * 1000);
    }
    return { ok: false, error: lastErr };
  }

  window.DB = {
    ready: !!sb,
    dry: !sb,
    now: now,
    schedule: schedule,
    assignGroup: assignGroup,
    createParticipant: createParticipant,
    progress: progress,
    saveEvent: saveEvent,
    saveEmail: saveEmail,
    saveProfile: saveProfile,
    markDone: markDone,
    uploadScreenshot: uploadScreenshot,
    flushQueue: flushQueue,
    queueLength: function () { return readQueue().length; },
    onStatus: function (fn) { statusCb = fn || function () {}; }
  };
})();
