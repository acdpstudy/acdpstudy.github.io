(function () {
  "use strict";
  var T = window.ITEMS.FB;

  window.PAGES_FB = {
    wave: "FB",
    start: "FB-01",
    pages: [
      {
        id: "FB-01",
        items: [
          { type: "title", text: T.title },
          { type: "notice", text: T.hinweis },
          { type: "hint", text: window.ITEMS.T0.offen.diktat, touchOnly: true },
          { type: "textarea", key: "FB03", label: T.FB03, rows: 3 },
          { type: "textarea", key: "FB04", label: T.FB04, rows: 3 },
          { type: "textarea", key: "FB06", label: T.FB06, rows: 3 }
        ],
        extraEvents: [{ key: "FB_DONE", value: true }],
        next: function () { return "END"; }
      }
    ]
  };
})();
