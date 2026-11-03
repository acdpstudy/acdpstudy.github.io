(function () {
  "use strict";
  var T = window.ITEMS.T0;
  var K = window.PAGEKIT;

  function build(ctx) {
    var pages = [];
    pages.push({ id: "T0-01", items: [
      { type: "title", text: T.t01.title },
      { type: "text", text: T.t01.text }
    ] });
    pages.push(K.screenshotPage("T0-02"));
    pages.push(K.smscfPage("T0-03", "T0", null));
    pages.push(K.kgPage("T0-04"));
    pages.push(K.scalePage("T0-05", "T0", T.sk, "SK01",
      { at: 4, key: "ATT01", text: T.sk.ATT01, richtig: T.sk.ATT01_richtig }));
    var asrs = K.scalePage("T0-06", "T0", T.asrs, "AS01");
    asrs.after = function (answers, c) {
      var sum = 0, pos = 0;
      T.asrs.items.forEach(function (_, i) {
        var v = answers["AS01_0" + (i + 1)];
        if (typeof v !== "number") return;
        sum += v;
        if (v >= T.asrs.auffaelligAb[i]) pos++;
      });
      window.DB.saveEvent(c.code, "T0", "T0-06", "AS01_sum", sum, null, c.pilot);
      window.DB.saveEvent(c.code, "T0", "T0-06", "AS01_pos", pos, null, c.pilot);
    };
    pages.push(asrs);
    pages.push(K.scalePage("T0-07", "T0", T.fomo, "FO01"));
    pages.push(K.scalePage("T0-08", "T0", T.srbai, "SR01"));
    pages.push({ id: "T0-09", items: [
      { type: "title", text: T.offen.title },
      { type: "hint", text: T.offen.diktat, touchOnly: true },
      { type: "textarea", key: "QU01", label: T.offen.QU01, rows: 5 }
    ] });
    K.recognitionPages("T0", "T0-10", ctx).forEach(function (p) { pages.push(p); });
    pages[pages.length - 1].finishWave = true;
    K.chain(pages);
    return { wave: "T0", start: "T0-01", pages: pages, backTo: { def: "PAGES_R", page: "R-05" } };
  }

  window.PAGES_T0 = { wave: "T0", build: build };
})();
