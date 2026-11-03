(function () {
  "use strict";
  var T0 = window.ITEMS.T0;
  var T = window.ITEMS.T12;
  var K = window.PAGEKIT;

  function buildWave(wave) {
    return function (ctx) {
      var p = wave + "-";
      var pages = [];
      pages.push({ id: p + "01", items: [
        { type: "title", text: T.startTitle },
        { type: "text", text: wave === "T1" ? T.startT1 : T.startT2 }
      ] });
      pages.push(K.screenshotPage(p + "02", { letzteWoche: true }));
      var att = wave === "T1"
        ? { key: "ATT02", text: T0.smscf.ATT02, richtig: T0.smscf.ATT02_richtig, after: 2 }
        : { key: "ATT03", text: T0.smscf.ATT03, richtig: T0.smscf.ATT03_richtig, after: 2 };
      pages.push(K.smscfPage(p + "03", wave, att));
      pages.push(K.kgPage(p + "04"));
      pages.push({ id: p + "05", items: [
        { type: "title", text: T.shTitle },
        { type: "multi", key: "SH01", label: T.SH01, options: T.SH01_options, required: true },
        { type: "upload", key: "SH02", label: T.SH02,
          visibleIf: { key: "SH01", when: function (v) {
            return Array.isArray(v) && v.length > 0 && !(v.length === 1 && v[0] === "nichts");
          } } }
      ] });
      if (wave === "T1") {
        K.recognitionPages(wave, p + "06", ctx).forEach(function (pg) { pages.push(pg); });
      } else {
        pages.push({ id: p + "06", items: [
          { type: "title", text: T.qu03Title },
          { type: "hint", text: T0.offen.diktat, touchOnly: true },
          { type: "textarea", key: "QU03", label: T.QU03, rows: 5 }
        ] });
        K.recognitionPages(wave, p + "07", ctx).forEach(function (pg) { pages.push(pg); });
        pages.push({ id: p + "08", items: [
          { type: "title", text: T.schlussTitle },
          { type: "hint", text: T0.offen.diktat, touchOnly: true },
          { type: "textarea", key: "QU04", label: T.QU04, rows: 5 }
        ] });
      }
      pages[pages.length - 1].finishWave = true;
      K.chain(pages);
      return { wave: wave, start: pages[0].id, pages: pages };
    };
  }

  window.PAGES_T1 = { wave: "T1", build: buildWave("T1") };
  window.PAGES_T2 = { wave: "T2", build: buildWave("T2") };
})();
