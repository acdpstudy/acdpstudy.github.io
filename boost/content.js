
window.CONTENT = {
  version: "boost-v8",

  appOrder: ["ig", "tt", "sc"],
  apps: {
    ig: { label: "Instagram", icon: "ai-ig" },
    tt: { label: "TikTok", icon: "ai-tt" },
    sc: { label: "Snapchat", icon: "ai-sc" }
  },

  ui: {
    unitOf: "Muster {x} von {n}",
    exerciseOf: "Übung {x} von {n}",
    steps: ["Antwort", "Was passiert", "Erklärung"],
    screenTag: "Nachgestellt",
    statusTime: "21:42",
    fallbackNote: "Bei {app} funktioniert das genauso.",
    lockLabel: "Sperrbildschirm",
    predictionRight: "Deine Antwort: richtig.",
    predictionWrong: "Deine Antwort: {a}. Richtig wäre: {c}.",
    labelWas: "So funktioniert es",
    labelWirkung: "Warum es wirkt",
    labelZweck: "Wozu es dient",
    labelRegel: "So kannst du gegensteuern",
    btnFix: "Antwort festlegen",
    btnTry: "Zeig, was passiert",
    btnExplain: "Zur Erklärung",
    btnNextUnit: "Nächstes Muster",
    btnToExercises: "Zu den Übungen",
    btnCheck: "Auflösen",
    next: "Weiter",
    back: "Zurück",
    yourPrediction: "Deine Antwort: {a}",
    yourSelection: "Deine Auswahl: {n} Meldung(en)",
    multiHint: "Du kannst eine oder mehrere Meldungen antippen.",
    reviewNote: "Diesen Schritt hast du schon abgeschlossen. Deine Antwort bleibt gespeichert.",
    markPrefix: "Markierung: ",
    spotPrefix: "Stelle ",
    selectedByYou: "von dir getippt",
    missing: "Bitte beantworte diese Frage.",
    missingOwn: "Bitte schreib deine eigene Formulierung auf."
  },

  start: {
    title: "So läuft die Schulung ab",
    lead: "In dieser kurzen Schulung geht es darum, wie Social-Media-Apps gebaut sind.",
    points: [
      "Es kommen **4 Muster** aus deinen Apps.",
      "Jedes Muster hat **3 Schritte:** ① Antwort ② Was passiert ③ Erklärung",
      "Am Ende kommen **2 kurze Übungen**.",
      "Dauer: etwa **10 Minuten**."
    ],
    note: "Die Screens sind nachgestellt. Du bist nicht in der echten App.",
    button: "Zum ersten Muster"
  },

  patterns: [
    {
      id: 1,
      key: "endloses-scrollen",
      order: ["tt", "ig", "sc"],
      question: "Wie viele Beiträge kommen noch, bis der Feed zu Ende ist?",
      options: ["Ungefähr 20", "Ungefähr 200", "Es gibt kein Ende"],
      correct: 3,
      name: "Endloses Scrollen (Infinite Scroll)",
      short: "Endloses Scrollen",
      satz: "Der Feed hat kein Ende, deshalb fehlt ein Signal zum Aufhören.",
      was: "Der Feed hat kein Ende und keine Seitenzahlen. Während du scrollst, lädt die App im Hintergrund schon die nächsten Beiträge nach.",
      wirkung: "Ohne Ende fehlt ein Signal zum Aufhören (Stopping Cue), wie das Ende eines Kapitels oder einer Folge. Aufhören wird so zu einer aktiven Entscheidung, und die schiebt man leicht immer weiter auf.",
      zweck: "Mehr Zeit im Feed heißt mehr Platz für Werbung zwischen den Beiträgen.",
      regel: "Wenn du merkst, dass du schon eine Weile scrollst, ohne etwas Bestimmtes zu suchen, dann kannst du kurz anhalten und bewusst entscheiden: weiter oder Schluss.",
      variants: {
        tt: {
          screen: "tiktok-feed",
          ctxA: "TikTok, For You Page. Du bist bei Video 40.",
          ctxB: "Du hast weitergewischt. Das nächste Video war schon geladen.",
          tryText: "Gleich siehst du, was passiert, wenn du weiterwischst.",
          hint: "Hier könnte der Feed enden. Stattdessen lädt die App beim Scrollen immer neue Beiträge nach.",
          markLabel: "Unterkante des Beitrags, der Übergang zum nächsten Beitrag",
          data: {
            posts: [
              { user: "@jonas.r", caption: "Morgenrunde im Park, 7 km. #laufen", likes: "12,4K", comments: "318", asset: "video-jonas-lauf" },
              { user: "@mia.kocht", caption: "Pasta in 10 Minuten. #rezept", likes: "12,4K", comments: "318", asset: "video-mia-pasta" },
              { user: "", caption: "", likes: "", comments: "", asset: "video-weiter" }
            ],
            share: "Teilen",
            nav: ["Start", "Suche", "Plus", "Inbox", "Profil"]
          }
        },
        ig: {
          screen: "ig-feed",
          ctxA: "Dein Instagram-Feed. Du bist bei Beitrag 40.",
          ctxB: "Du hast weitergescrollt. Der nächste Beitrag war schon geladen.",
          tryText: "Gleich siehst du, was passiert, wenn du weiterscrollst.",
          hint: "Hier könnte der Feed enden. Stattdessen lädt die App beim Scrollen immer neue Beiträge nach.",
          markLabel: "Der nächste Beitrag, den die App schon nachgeladen hat",
          data: {
            stories: false,
            scrollFeed: true,
            posts: [
              { user: "lena_k", line: "♡ 92 · Sonntag am Meer", asset: "foto-hund" },
              { user: "mia.kocht", line: "♡ 1.204 · Pasta in 10 Minuten", asset: "foto-mia-pasta" },
              { user: "tom.reist", line: "♡ 856 · Lissabon im Oktober", asset: "foto-tom-lissabon" }
            ],
            mark: "seam-1"
          }
        }
      }
    },

    {
      id: 4,
      key: "autoplay",
      order: ["ig", "tt", "sc"],
      question: "Was passiert mit dem nächsten Video, wenn du weiterscrollst?",
      options: ["Es bleibt stehen, bis du auf Play tippst", "Es läuft sofort los, mit Ton", "Die App fragt, ob du es sehen willst"],
      correct: 2,
      name: "Automatischer Start (Autoplay)",
      short: "Automatischer Start (Autoplay)",
      satz: "Videos laufen von selbst los, Weiterschauen ist die Voreinstellung.",
      was: "Videos starten von selbst, sobald sie im Bild sind, und laufen in Schleife. Einen Play-Knopf gibt es nicht.",
      wirkung: "Die App macht Weiterschauen zur Voreinstellung. Menschen bleiben meist bei der Voreinstellung (Default-Effekt): Anfangen kostet nichts, nur Aufhören braucht eine Entscheidung.",
      zweck: "Videos, die von selbst starten, werden seltener übersprungen. Das bringt mehr Sehzeit und mehr Werbung.",
      regel: "Wenn du merkst, dass du nur weiterschaust, weil das nächste Video schon läuft, dann kannst du kurz anhalten und bewusst entscheiden: weiterschauen oder weglegen.",
      variants: {
        ig: {
          screen: "reels",
          ctxA: "Instagram Reels. Ein Video läuft gerade.",
          ctxB: "Du hast weitergescrollt. Das nächste Video läuft schon.",
          tryText: "Gleich siehst du, was nach dem Weiterscrollen passiert.",
          hint: "Das Video ist von selbst gestartet und beginnt am Ende von vorn. Du musst nichts tun, damit es weiterläuft.",
          markLabel: "Fortschrittsbalken des Videos, es läuft bereits",
          data: {
            videos: [
              { user: "@tom.reist", caption: "Lissabon im Oktober, 24 Grad. #reisen", asset: "video-tom-lissabon", progress: 60 },
              { user: "@mia.kocht", caption: "Pasta in 10 Minuten. #rezept", asset: "video-mia-pasta" }
            ],
            loopSeconds: 4
          }
        },
        tt: {
          screen: "reels",
          ctxA: "TikTok, For You Page. Ein Video läuft gerade.",
          ctxB: "Du hast weitergescrollt. Das nächste Video läuft schon.",
          tryText: "Gleich siehst du, was nach dem Weiterscrollen passiert.",
          hint: "Das Video ist von selbst gestartet und beginnt am Ende von vorn. Du musst nichts tun, damit es weiterläuft.",
          markLabel: "Fortschrittsbalken des Videos, es läuft bereits",
          data: {
            videos: [
              { user: "@tom.reist", caption: "Lissabon im Oktober, 24 Grad. #reisen", asset: "video-tom-lissabon", progress: 60, likes: "8.911", comments: "204" },
              { user: "@mia.kocht", caption: "Pasta in 10 Minuten. #rezept", asset: "video-mia-pasta", likes: "12,4K", comments: "318" }
            ],
            loopSeconds: 4,
            share: "Teilen",
            nav: ["Start", "Suche", "Plus", "Inbox", "Profil"]
          }
        }
      }
    },

    {
      id: 3,
      key: "empfehlungen-nach-schwaeche",
      order: ["ig", "tt", "sc"],
      question: "Warum siehst du mia.kocht ganz oben, obwohl du ihr nicht folgst?",
      options: ["Weil viele sie mögen", "Weil du bei so etwas länger hängen bleibst", "Zufall"],
      correct: 2,
      name: "Empfehlungen nach Schwäche (Guilty-Pleasure Recommendations)",
      short: "Empfehlungen nach Schwäche",
      satz: "Die App zeigt dir mehr von dem, wobei du hängen bleibst, auch wenn du es eigentlich nicht willst.",
      was: "Zwischen Beiträgen von Konten, denen du folgst, zeigt die App Inhalte fremder Konten, nur mit „Vorgeschlagen“ markiert. Ausgewählt werden sie danach, wie lange du bei ähnlichen Inhalten hängen bleibst.",
      wirkung: "Die Auswahl folgt deinem Verhalten, nicht deinen Absichten: Was dich kurz fesselt, bekommst du öfter, auch wenn du es eigentlich nicht sehen willst. Weil die Vorschläge so gut passen, halten wir sie für unseren eigenen Geschmack.",
      zweck: "Passende Vorschläge halten dich länger im Feed. Die For You Page bei TikTok besteht nur daraus.",
      regel: "Wenn dir die App etwas von einem Konto zeigt, dem du nicht folgst, dann kannst du dich kurz fragen: Will ich das gerade sehen?",
      variants: {
        ig: {
          screen: "ig-feed",
          ctxA: "Dein Instagram-Feed. Du folgst mia.kocht nicht.",
          ctxB: "mia.kocht steht ganz oben, obwohl du ihr nicht folgst.",
          tryText: "Gleich siehst du, warum der Beitrag von mia.kocht oben steht.",
          hint: "Du folgst mia.kocht nicht. Die App zeigt dir den Beitrag, weil du bei Kochvideos lange hängen bleibst. Einziger Hinweis: das kleine „Vorgeschlagen“.",
          markLabel: "Der vorgeschlagene Beitrag von mia.kocht",
          data: {
            posts: [
              { user: "mia.kocht", suggested: "Vorgeschlagen", line: "♡ 1.204 · Pasta in 10 Minuten", asset: "foto-mia-pasta" },
              { user: "tom.reist", line: "♡ 856 · Lissabon im Oktober", asset: "foto-tom-lissabon" },
              { user: "jonas.r", line: "♡ 41 · Erste Vorlesung im Semester", asset: "foto-hoersaal" }
            ],
            mark: "post-0",
            markPlace: "inside"
          }
        },
        tt: {
          screen: "tiktok-feed",
          question: "Warum zeigt dir die App gerade dieses Video, obwohl du ihr nicht folgst?",
          ctxA: "TikTok, For You Page. Du folgst @mia.kocht nicht.",
          was: "Auf der For You Page zeigt dir die App fast nur Videos von Konten, denen du nicht folgst. Ausgewählt werden sie danach, wie lange du bei ähnlichen Videos hängen bleibst.",
          ctxB: "Das Video stammt von einem Konto, dem du nicht folgst.",
          tryText: "Gleich siehst du, warum die App dir dieses Video zeigt.",
          hint: "Auf der For You Page wählt die App jedes Video danach aus, wie lange du bei ähnlichen Videos geblieben bist.",
          markLabel: "Reiter „Für dich“ oben im Screen",
          data: {
            static: true,
            tabs: ["Folge ich", "Für dich"],
            activeTab: 1,
            mark: "tab-1",
            posts: [
              { user: "@mia.kocht", caption: "Pasta in 10 Minuten. #rezept", likes: "12,4K", comments: "318", asset: "video-mia-pasta", followPlus: true }
            ],
            share: "Teilen",
            nav: ["Start", "Suche", "Plus", "Inbox", "Profil"]
          }
        }
      }
    },

    {
      id: 6,
      key: "rueckhol-benachrichtigungen",
      always: true,
      type: "multi",
      name: "Rückhol-Benachrichtigungen (Recapture Notifications)",
      short: "Rückhol-Benachrichtigungen",
      satz: "Die meisten Meldungen schickt die App selbst, damit du sie wieder öffnest.",
      was: "Auf dem Sperrbildschirm sehen alle Meldungen gleich aus. Nur wenige kommen von Menschen. Die meisten verschickt die App von sich aus, und das ist ab Werk eingeschaltet.",
      wirkung: "Eine Meldung, die nach einer persönlichen Nachricht aussieht, weckt Neugier und die Sorge, etwas zu verpassen (Fear of Missing Out). Ob wirklich jemand etwas von dir will, siehst du erst, wenn die App schon offen ist.",
      zweck: "Jede Meldung ist ein Anlass, die App wieder zu öffnen. Mehr Meldungen, mehr Besuche.",
      regel: "Wenn eine Meldung nicht von einer Person kommt, dann kannst du bewusst entscheiden, ob du die App jetzt öffnen willst, statt einfach draufzutippen.",
      variants: {
        lock: {
          screen: "lockscreen",
          ctxA: "Dein Sperrbildschirm am Abend mit sieben Meldungen.",
          ctxAsk: "Tipp die Meldungen an, die von einer Person kommen.",
          ctxB: "2 von 7 Meldungen kamen von einer Person.",
          ctxBYou: "Du hast {n} angetippt.",
          tryText: "Gleich siehst du, welche Meldungen wirklich von einer Person kamen.",
          resultLine: "Richtig angetippt: {x} von 2. Falsch angetippt: {y}.",
          markLabel: "Meldungen mit Absender",
          data: {
            time: "21:42",
            labelHuman: "von einer Person",
            labelApp: "von der App",
            times: ["21:40", "21:36", "21:31", "21:12", "20:55", "20:20", "19:48"],
            humanPositions: [1, 4]
          }
        }
      },
      pools: {
        ig: {
          human: [
            "lena_k hat dir eine Nachricht gesendet",
            "jonas.r hat dich in einem Kommentar erwähnt",
            "tom.reist hat dir ein Reel geschickt"
          ],
          app: [
            "mia.kocht hat 3 neue Reels gepostet, die du verpasst hast",
            "Angesagt bei dir: Beiträge, die dir gefallen könnten",
            "lena_k hat zum ersten Mal seit Langem etwas gepostet",
            "Sieh dir an, was jonas.r und 4 andere heute geteilt haben",
            "Deine Erinnerungen von vor einem Jahr warten auf dich"
          ]
        },
        tt: {
          human: [
            "jonas.r hat dein Video kommentiert",
            "mia.kocht hat dir eine Nachricht geschickt"
          ],
          app: [
            "Neue Videos für dich: Das könnte dir gefallen",
            "Du hast 12 Videos von Konten verpasst, denen du folgst",
            "Jemand, dem du folgst, ist gerade live",
            "Angesagt heute: Diese Sounds sind gerade beliebt",
            "Dein Video von gestern hat neue Aufrufe"
          ]
        },
        sc: {
          human: [
            "lena_k hat dir einen Snap gesendet",
            "tom.reist hat dir eine Nachricht geschickt"
          ],
          app: [
            "Sieh dir an, was heute in deiner Story-Übersicht ist",
            "Neue Spotlight-Videos für dich",
            "Deine Erinnerungen von heute vor 2 Jahren",
            "jonas.r hat eine neue Story gepostet",
            "Schau dir an, was deine Freunde heute posten"
          ]
        }
      }
    }
  ],

  recognition: [
    {
      id: "W1",
      type: "spots",
      ctx: "Ein neuer Screen. Tipp die Nummern an, hinter denen ein Muster aus der Schulung steckt.",
      noPatternLabel: "kein bekanntes Muster",
      feedbackScore: "{k} von {n} gefunden.",
      variants: {
        ig: {
          app: "Instagram",
          screen: "ig-feed",
          ctx: "Ein neuer Screen: Du bist ganz unten im Feed angekommen. Tipp die Nummern an, hinter denen ein Muster aus der Schulung steckt.",
          spotDefs: [
            { key: "sugg-0", pattern: 3, label: "„Vorgeschlagen“ neben mia.kocht" },
            { key: "save-0", pattern: null, label: "Merken-Symbol" },
            { key: "load", pattern: 1, label: "der Ladekreis: Der Feed lädt von selbst neue Beiträge nach" }
          ],
          data: {
            stories: false,
            loadMore: true,
            posts: [
              { user: "mia.kocht", suggested: "Vorgeschlagen", line: "♡ 1.204 · Pasta in 10 Minuten", asset: "foto-mia-pasta" }
            ],
            more: { user: "tom.reist", asset: "foto-tom-lissabon" }
          }
        },
        tt: {
          app: "TikTok",
          screen: "tt-w1",
          ctx: "Ein neuer Screen: Du wischst gerade durch die For You Page. Tipp die Nummern an, hinter denen ein Muster aus der Schulung steckt.",
          spotDefs: [
            { key: "tab-1", pattern: 3, label: "der Reiter „Für dich“" },
            { key: "share", pattern: null, label: "Teilen" },
            { key: "peek", pattern: 1, label: "das nächste Video, das unten schon bereitliegt" }
          ],
          data: {
            post: { user: "@tom.reist", caption: "Lissabon im Oktober, 24 Grad. #reisen", likes: "8.911", comments: "204", asset: "video-tom-lissabon" },
            next: { user: "@mia.kocht", caption: "Pasta in 10 Minuten. #rezept", asset: "video-mia-pasta" },
            share: "Teilen",
            nav: ["Start", "Suche", "Plus", "Inbox", "Profil"]
          }
        }
      }
    },
    {
      id: "W2",
      type: "cards",
      app: "",
      ctx: "{count} Meldungen von deinem Sperrbildschirm. Von wem kommt jede: von einer Person oder von der App?",
      labelHuman: "Von einer Person",
      labelApp: "Von der App",
      feedbackScore: "{k} von {n} richtig eingeordnet.",
      verdictRight: "Richtig",
      verdictWrong: "Falsch",
      cardPool: [
        { app: "ig", human: true, text: "anna.s hat auf deine Story reagiert", why: "anna.s hat selbst reagiert." },
        { app: "tt", human: false, text: "Jemand, dem du folgst, hat etwas Neues gepostet. Sieh es dir an.",
          why: "Kein Mensch hat diese Meldung geschrieben. Die App verschickt sie automatisch, und es steht nicht einmal ein Name dabei." },
        { app: "ig", human: false, text: "Du hast heute noch nicht in deinen Feed geschaut. Sieh nach, was neu ist.",
          why: "Die App erinnert dich daran, sie zu öffnen." },
        { app: "sc", human: true, text: "mara.w hat dir einen Snap gesendet", why: "mara.w hat dir selbst einen Snap geschickt." },
        { app: "sc", human: false, text: "Du hast neue Spotlight-Videos verpasst. Schau rein!",
          why: "Die App meldet sich von selbst, um dich zurückzuholen." },
        { app: "tt", human: true, text: "mara.w hat auf deinen Kommentar geantwortet", why: "mara.w hat dir selbst geantwortet." },
        { app: "tt", human: false, text: "Deine For You Page wurde aktualisiert. Schau dir die neuen Videos an.",
          why: "Die App meldet sich von selbst, um dich zurückzuholen." }
      ]
    }
  ],

  einordnung: {
    title: "Warum diese Funktionen eingebaut sind",
    text: [
      "**Das Geschäftsmodell:** Die Apps sind kostenlos und verdienen an Werbung. Je mehr Zeit du dort verbringst, desto mehr Werbung siehst du. Die Funktionen aus der Schulung sind deshalb Absicht und stecken in ähnlicher Form in allen großen Social-Media-Apps.",
      "**Auch die EU sieht das kritisch:** In vorläufigen Feststellungen gegen TikTok (Februar 2026) sowie Instagram und Facebook (Juli 2026) nennt die EU-Kommission unter anderem endloses Scrollen, Autoplay, Push-Benachrichtigungen und personalisierte Empfehlungen als Gestaltung, die abhängig machen kann.",
      "**Es liegt nicht an dir:** Die Funktionen nutzen bekannte psychologische Mechanismen, etwa unvorhersehbare Belohnungen oder die Sorge, etwas zu verpassen. Dass sie wirken, hat nichts mit fehlender Selbstdisziplin zu tun.",
      "Wer die Mechanismen kennt, erkennt sie leichter im Alltag."
    ],
    button: "Weiter"
  },

  zusammenfassung: {
    title: "Die vier Muster aus deiner Schulung",
    scores: "Deine Antworten: {x} von {n} richtig. In den Übungen: {y} von {max} Punkten.",
    rulesTitle: "So kannst du gegensteuern",
    outroG3: "Was du daraus machst, entscheidest du selbst.",
    outroEnd: "Danke, dass du dir die Schulung angesehen hast.",
    buttonEnd: "Fertig"
  },

  assets: {
    "video-jonas-lauf": "linear-gradient(180deg, #4f7ea3 0%, #8fb3cc 55%, #c9d3cf 100%)",
    "video-mia-pasta": "linear-gradient(160deg, #8a4a32 0%, #c9804f 50%, #e5b27c 100%)",
    "video-tom-lissabon": "linear-gradient(170deg, #1f4e6b 0%, #4c8fb0 45%, #e7c9a0 100%)",
    "video-weiter": "linear-gradient(180deg, #3c5a3f 0%, #6f9468 60%, #b9cf9f 100%)",
    "foto-tom-lissabon": "linear-gradient(160deg, #3f6b4d 0%, #7fa88a 55%, #d7e4c4 100%)",
    "foto-mia-pasta": "linear-gradient(135deg, #e3b07a 0%, #c9804f 55%, #8a4a32 100%)",
    "foto-weiter": "linear-gradient(135deg, #7b6aa8 0%, #a99bd0 60%, #d9d2ee 100%)",
    "foto-hund": "linear-gradient(135deg, #c9b58f 0%, #e3d6bd 60%, #f2ece0 100%)",
    "foto-hoersaal": "linear-gradient(135deg, #6b5a4a 0%, #9c8670 60%, #d5c6b2 100%)"
  }
};
