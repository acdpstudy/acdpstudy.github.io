(function () {
  "use strict";
  var T = window.ITEMS.R;
  var S = window.ITEMS.scales;
  var STUDY_APPS = ["ig", "tt", "sc"];

  window.PAGES_R = {
    wave: "R",
    start: "R-01",
    pages: [
      {
        id: "R-01",
        items: [
          { type: "title", text: T.r01.title },
          { type: "text", text: T.r01.text },
          { type: "doclink", label: T.r01.infoLink, href: T.r01.infoHref },
          { type: "check", key: "EW01", label: T.r01.EW01, required: true },
          { type: "check", key: "EW02", label: T.r01.EW02, required: true }
        ],
        next: function () { return "R-02"; }
      },
      {
        id: "R-02",
        items: [
          { type: "title", text: T.r02.title },
          { type: "radio", key: "SC01", label: T.r02.SC01, options: S.janein, required: true },
          { type: "multi", key: "SC03", label: T.r02.SC03, options: T.r02.SC03_options, required: true },
          { type: "radio", key: "SC04", label: T.r02.SC04, options: T.r02.SC04_options, required: true }
        ],
        after: function (answers, ctx) {
          var os = answers.SC04;
          var apps = STUDY_APPS.filter(function (k) { return (answers.SC03 || []).indexOf(k) >= 0; });
          if (os === "ios" || os === "android") ctx.os = os;
          ctx.apps = apps;
          window.DB.saveProfile(ctx.code, (os === "ios" || os === "android") ? os : null, apps.length ? apps : null);
        },
        next: function (answers) {
          var apps = answers.SC03 || [];
          var out = answers.SC01 === "nein" ||
                    (apps.length === 1 && apps[0] === "keine") || apps.length === 0 ||
                    answers.SC04 === "anderes";
          return out ? "R-X" : "R-03";
        }
      },
      {
        id: "R-X",
        terminal: true,
        onEnter: function (ctx) {
          window.DB.saveEvent(ctx.code, "R", "R-X", "SCREEN_OUT", true, null, ctx.pilot);
        },
        items: [
          { type: "title", text: T.rx.title },
          { type: "text", text: T.rx.text }
        ]
      },
      {
        id: "R-03",
        items: [
          { type: "title", text: T.r03.title },
          { type: "number", key: "DE01", label: T.r03.DE01, min: 18, max: 99, required: true },
          { type: "radio", key: "DE02", label: T.r03.DE02, options: T.r03.DE02_options, required: true },
          { type: "select", key: "DE06", label: T.r03.DE06, options: T.r03.DE06_options, required: true,
            textLabel: T.r03.DE06_text, textRequired: true },
          { type: "textinput", key: "DE03", label: T.r03.DE03, required: true, visibleIf: { key: "DE06", equals: "studium" } },
          { type: "number", key: "DE04", label: T.r03.DE04, min: 1, max: 40, required: true, visibleIf: { key: "DE06", equals: "studium" } },
          { type: "radio", key: "DE05", label: T.r03.DE05, options: T.r03.DE05_options, required: true, visibleIf: { key: "DE06", equals: "studium" } }
        ],
        next: function () { return "R-04"; }
      },
      {
        id: "R-04",
        items: [
          { type: "title", text: T.r04.title },
          { type: "text", text: T.r04.text },
          { type: "email", key: "EM01", label: T.r04.EM01, required: true, error: T.r04.error },
          { type: "email", key: "EM02", label: T.r04.EM02, required: true, error: T.r04.error,
            sameAs: "EM01", mismatch: T.r04.mismatch },
          { type: "hint", text: T.r04.hinweis }
        ],
        after: function (answers, ctx) {
          window.DB.saveEmail(ctx.code, answers.EM01);
        },
        skipEventKeys: ["EM01", "EM02"],
        extraEvents: [{ key: "EM_SAVED", value: true }],
        next: function () { return "R-05"; }
      },
      {
        id: "R-05",
        items: [
          { type: "title", text: T.r05.title },
          { type: "text", text: T.r05.text }
        ],
        finishWave: true,
        nextLabel: T.r05.button,
        next: function () { return "END"; }
      }
    ]
  };
})();
