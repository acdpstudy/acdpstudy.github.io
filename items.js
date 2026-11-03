window.ITEMS = {

  scales: {
    janein: [
      { v: "ja", label: "Ja" },
      { v: "nein", label: "Nein" }
    ]
  },

  frame: {
    waitTitle: "Geschafft für heute – vielen Dank!",
    waitT1Text: "Danke, dass du dir die Zeit genommen hast. Deine Antworten helfen uns sehr.\n\n**Wie es weitergeht:** Am %datum%, schicken wir dir per Mail den Link zum nächsten Fragebogen (etwa %dauer_t1% Minuten). Er ist dann eine Woche lang offen, bis %ende%.\n\n**Warum er wichtig ist:** Erst mit deinen Antworten in den nächsten Fragebögen können wir die Studie auswerten. Wir freuen uns sehr, wenn du wieder dabei bist.",
    waitT2Text: "Danke für deine Antworten!\n\n**Wie es weitergeht:** Am %datum%, schicken wir dir per Mail den Link zum letzten Fragebogen (etwa %dauer_t2% Minuten). Er ist dann eine Woche lang offen, bis %ende%.",
    t1MissedTitle: "Schön, dass du da bist",
    t1MissedText: "Der Zeitraum für den zweiten Fragebogen ist leider vorbei. Das ist nicht schlimm: Am %datum%, schicken wir dir den Link zum letzten Fragebogen (etwa %dauer_t2% Minuten). Er ist dann eine Woche lang offen, bis %ende%.",
    pilotSkip: "Pilot: Wartezeit überspringen",
    transitionTitle: "Danke für deine Antworten!",
    transitionText: "Gleich startet eine kurze Schulung zu digitalen Themen.",
    transitionButton: "Weiter",
    doneTitle: "Vielen Dank für deine Teilnahme",
    doneText: "Du hast alles geschafft. Danke für deine Zeit und deine Unterstützung!",
    t2MissedTitle: "Danke für deine Teilnahme",
    t2MissedText: "Der Zeitraum für diesen Fragebogen ist vorbei. Danke für deine Teilnahme.",
    offerText: "**Zum Schluss ein Angebot:** Wenn du magst, kannst du dir jetzt noch eine kurze Schulung ansehen: wie Social-Media-Apps gebaut sind, damit man sie länger und öfter nutzt. Sie dauert etwa %dauer_schulung% Minuten und ist freiwillig. Deine Antworten darin werten wir nicht aus.",
    offerButton: "Schulung ansehen",
    postDoneText: "Danke, dass du dir auch die Schulung angesehen hast.",
    unknownCodeTitle: "Code unbekannt",
    unknownCodeText: "Diesen Code kennen wir nicht. Prüfe den Link aus deiner Mail oder gib deinen Code ein.",
    codeInputLabel: "Dein Code (6 Zeichen)",
    codeInputButton: "Weiter",
    startTitle: "Studie zu Social-Media-Apps",
    startHaveCode: "Ich habe schon einen Code",
    t0MissedTitle: "Danke für dein Interesse",
    t0MissedText: "Die Anmeldung zur Studie ist inzwischen geschlossen. Danke trotzdem für dein Interesse.",
    offlineHint: "Die Verbindung ist schwach. Deine Antworten werden gespeichert, sobald sie wieder besteht.",
    noConnectionRegister: "Gerade besteht keine Verbindung zum Server. Bitte öffne die Seite später noch einmal; für die Anmeldung wird eine Internetverbindung benötigt.",
    registrationClosed: "Die Anmeldung zur Studie ist leider geschlossen.",
    registrationClosedTitle: "Vielen Dank!"
  },

  R: {
    r01: {
      title: "Willkommen zur Studie",
      text: "**Worum es geht:** Wir untersuchen, wie Menschen Social-Media-Apps nutzen und wie sie deren Gestaltung wahrnehmen. Die Studie läuft an [anonymisiert].\n\n**Ablauf:**\n• Heute: Anmeldung, ein Fragebogen und bei den meisten eine kurze Schulung zu digitalen Themen (zusammen etwa %dauer_t0% Minuten)\n• Nach etwa 2 und nach etwa 5 Wochen: je ein kurzer Fragebogen (etwa %dauer_t1% Minuten)\n\nWelche Schulung du bekommst und wann, entscheidet der Zufall. Manche bekommen ihre Schulung erst am Ende der Studie.\n\nDanke, dass du dir die Zeit nimmst und uns unterstützt!",
      infoLink: "Teilnahmeinformation und Datenschutz",
      infoHref: "teilnahme.html",
      EW01: "Ich habe die Teilnahmeinformation gelesen und willige ein, an der Studie teilzunehmen.",
      EW02: "Ich habe die Datenschutzinformation gelesen und willige in die beschriebene Verarbeitung meiner Daten ein. Ich kann das jederzeit widerrufen."
    },
    r02: {
      title: "Teilnahmevoraussetzungen",
      SC01: "Bist du 18 Jahre alt oder älter?",
      SC03: "Welche dieser Apps nutzt du an einem normalen Tag mindestens einmal?",
      SC03_options: [
        { v: "ig", label: "Instagram" },
        { v: "tt", label: "TikTok" },
        { v: "sc", label: "Snapchat" },
        { v: "keine", label: "keine davon täglich", exclusive: true }
      ],
      SC04: "Welches Smartphone hast du?",
      SC04_options: [
        { v: "ios", label: "iPhone" },
        { v: "android", label: "Android" },
        { v: "anderes", label: "anderes" }
      ]
    },
    rx: {
      title: "Vielen Dank für dein Interesse",
      text: "Für diese Studie suchen wir Personen ab 18 Jahren, die Instagram, TikTok oder Snapchat täglich auf einem iPhone oder Android-Smartphone nutzen. Das trifft bei dir nicht zu, deshalb endet die Teilnahme an dieser Stelle. Vielen Dank für dein Interesse."
    },
    r03: {
      title: "Angaben zu dir",
      DE01: "Alter",
      DE02: "Geschlecht",
      DE02_options: [
        { v: "weiblich", label: "weiblich" }, { v: "maennlich", label: "männlich" },
        { v: "divers", label: "divers" }, { v: "keine_angabe", label: "keine Angabe" }
      ],
      DE06: "Was ist deine hauptsächliche Tätigkeit?",
      DE06_options: [
        { v: "studium", label: "Studium" },
        { v: "ausbildung", label: "Ausbildung" },
        { v: "vollzeit", label: "Angestellt in Vollzeit" },
        { v: "teilzeit", label: "Angestellt in Teilzeit" },
        { v: "selbststaendig", label: "Selbstständig" },
        { v: "arbeitssuche", label: "Auf Arbeitssuche" },
        { v: "sonstiges", label: "Sonstiges", text: true }
      ],
      DE06_text: "Welche?",
      DE03: "Studiengang",
      DE04: "Fachsemester",
      DE05: "Hochschule",
      DE05_options: [
        { v: "uni", label: "[Universität anonymisiert]" },
        { v: "andere", label: "andere, nämlich", text: true }
      ]
    },
    r04: {
      title: "Deine E-Mail-Adresse",
      text: "**Wofür:** Wir schicken dir die Links zu den beiden weiteren Fragebögen und, falls nötig, eine Erinnerung.\n\n**Datenschutz:** Deine Adresse wird getrennt von deinen Antworten gespeichert, nur für diese Studie genutzt, nicht weitergegeben und nach Studienende gelöscht.",
      EM01: "E-Mail-Adresse",
      EM02: "E-Mail-Adresse wiederholen",
      hinweis: "Wir nutzen deine Adresse nur für die Erinnerungen an die zwei weiteren Fragebögen. Keine Werbung, kein Newsletter.",
      error: "Das sieht nicht nach einer E-Mail-Adresse aus. Bitte prüfe die Eingabe.",
      mismatch: "Die beiden Adressen stimmen nicht überein."
    },
    r05: {
      title: "Anmeldung abgeschlossen",
      text: "Du bist angemeldet. Es geht jetzt mit dem ersten Fragebogen weiter.",
      button: "Weiter"
    }
  }
};

window.ITEMS.T0 = {
  t01: {
    title: "Der erste Fragebogen",
    text: "**Was dich erwartet:**\n• ein Screenshot deiner Bildschirmzeit\n• nachgestellte Screens aus Social-Media-Apps, die du kurz einschätzt\n• Fragen zu deiner Social-Media-Nutzung und zu dir\n\n**Dauer:** etwa %dauer_t0_fragebogen% Minuten.\n\nEs gibt keine richtigen oder falschen Antworten. Antworte so, wie es für dich stimmt."
  },
  t04: {
    schritte_ios: [
      "Öffne **Einstellungen** → **Bildschirmzeit**.",
      "Tippe auf **Alle App- & Websiteaktivitäten anzeigen**.",
      "Wähle oben **Woche**. Wische über das Diagramm nach rechts, bis die **letzte Woche** angezeigt wird.",
      "Tippe unter „Meistgenutzt“ auf **Kategorien anzeigen** und dann auf **Soziale Netzwerke**.",
      "Mach einen **Screenshot**. Passt nicht alles auf einen, scroll weiter und mach einen zweiten."
    ],
    zusatz_ios: "Je nach iOS-Version heißt die Kategorie auch „Soziale Netze“.",
    schritte_android: [
      "Öffne **Einstellungen** → **Digital Wellbeing** (je nach Hersteller auch „Digitales Wohlbefinden“).",
      "Tippe auf das **Diagramm** mit deiner Bildschirmzeit.",
      "Stell auf die **Wochenansicht** um, falls es sie gibt, und wähle die **letzte Woche**.",
      "Mach einen **Screenshot** der App-Liste, auf dem deine Social-Media-Apps (**Instagram, TikTok, Snapchat**) mit ihren Zeiten zu sehen sind. Passt nicht alles auf einen, scroll weiter und mach einen zweiten."
    ],
    zusatz_android: "Android sortiert nicht nach Kategorien. Uns reichen die Zeiten dieser Apps.",
    letzteWoche: "**Wichtig:** Mit „letzte Woche“ meinen wir die volle Woche von Montag bis Sonntag vor heute.",
    desktopHinweis: "**Du bist gerade am Computer?** Deine Bildschirmzeit steht nur auf deinem Handy. Den Screenshot machst du am Handy. Scanne dafür den QR-Code mit der Handy-Kamera: Er öffnet deinen persönlichen Link. Lade den Screenshot am Handy hoch und mach danach hier am Computer weiter – lade diese Seite dazu einmal neu.",
    desktopLinkLabel: "Dein persönlicher Link",
    SU01: "Konntest du den Screenshot machen?",
    SU02_label: "Screenshot hochladen (bis 3 Dateien, je 10 MB)",
    SU02_hinweis_leer: "Ohne Screenshot fehlt uns der wichtigste Wert. Falls das Hochladen gerade nicht möglich ist, kannst du trotzdem weitermachen.",
    SU03: "Warum nicht?",
    SU03_options: [
      { v: "aus", label: "Die Bildschirmzeit war bei mir ausgeschaltet." },
      { v: "finde_nicht", label: "Ich finde die Ansicht nicht." },
      { v: "upload", label: "Das Hochladen funktioniert nicht." },
      { v: "moechte_nicht", label: "Ich möchte keinen Screenshot hochladen." },
      { v: "anderes", label: "Anderer Grund:", text: true }
    ]
  },
  erkennen: {
    title: "Nachgestellte Screens",
    instruktion: "Du siehst jetzt {n} nachgestellte Screens aus Social-Media-Apps. Meist ist ein Element rot umrahmt. Sag uns, ob es aus deiner Sicht versucht, dein Verhalten zu beeinflussen. Nicht jedes Element tut das.",
    ERa: "Versucht das rot umrahmte Element, dein Verhalten zu beeinflussen?",
    ERa_ohneRahmen: "Das nächste Video startet von selbst. Versucht die App damit, dein Verhalten zu beeinflussen?",
    ERa_options: [
      { v: "ja", label: "Ja" },
      { v: "nein", label: "Nein" },
      { v: "weiss_nicht", label: "Weiß nicht" }
    ],
    ERb: "Wie? Beschreibe in einem Satz, was das Element macht und wozu es dient.",
    ERb_ohneRahmen: "Wie? Beschreibe in einem Satz, was die App da macht und wozu.",
    ERc: "Was sind deine Gedanken dazu?",
    screenOf: "Screen {x} von {n}"
  },
  t17: {
    AK02: "Findest du es in Ordnung, dass die App das so macht?",
    AK02_skala: [
      { v: 1, label: "gar nicht in Ordnung" }, { v: 2, label: "eher nicht in Ordnung" }, { v: 3, label: "teils, teils" },
      { v: 4, label: "eher in Ordnung" }, { v: 5, label: "völlig in Ordnung" }
    ]
  },
  smscf: {
    title: "Deine Social-Media-Nutzung",
    instruktion: "Mit Social Media meinen wir hier Instagram, TikTok und Snapchat. Wie oft gibst du dem Verlangen nach, sie zu nutzen, obwohl deine Nutzung in diesem Moment …",
    skala: [
      { v: 1, label: "fast nie" }, { v: 2, label: "selten" }, { v: 3, label: "manchmal" },
      { v: 4, label: "oft" }, { v: 5, label: "sehr oft" }
    ],
    ATT02: "Dies ist eine Kontrollfrage. Bitte wähle hier „selten“.",
    ATT02_richtig: 2,
    ATT03: "Dies ist eine Kontrollfrage. Bitte wähle hier „oft“.",
    ATT03_richtig: 4,
    SF01_01: "… mit anderen Zielen in Konflikt steht (zum Beispiel: etwas für Uni oder Arbeit erledigen)?",
    SF01_02: "… dazu führt, dass du deine Zeit weniger effizient nutzt?",
    SF01_03: "… dazu führt, dass du andere Dinge aufschiebst, die du tun willst oder musst?"
  },
  kg: {
    title: "Deine Apps in der letzten Woche",
    KG01: "Wie sehr hattest du in der letzten Woche das Gefühl, selbst zu bestimmen, wie du deine Zeit in [App] verbringst?",
    KG01_skala: [
      { v: 1, label: "überhaupt nicht" }, { v: 2, label: "wenig" }, { v: 3, label: "teilweise" },
      { v: 4, label: "überwiegend" }, { v: 5, label: "völlig" }
    ]
  },
  sk: {
    title: "Über dich",
    instruktion: "Wie sehr treffen die folgenden Aussagen auf dich zu?",
    skala: [
      { v: 1, label: "völlig unzutreffend" }, { v: 2, label: "eher unzutreffend" },
      { v: 3, label: "teils, teils" }, { v: 4, label: "eher zutreffend" }, { v: 5, label: "trifft ganz genau zu" }
    ],
    ATT01: "Dies ist eine Kontrollfrage. Bitte wähle hier „eher unzutreffend“.",
    ATT01_richtig: 2,
    umpolen: [2, 3, 4, 5, 7],
    items: [
      "Ich bin gut darin, Versuchungen zu widerstehen.",
      "Es fällt mir schwer, schlechte Gewohnheiten abzulegen.",
      "Ich bin faul.",
      "Ich wünschte, ich hätte mehr Selbstdisziplin.",
      "Angenehme Aktivitäten und Vergnügen hindern mich manchmal daran, meine Arbeit zu machen.",
      "Ich kann effektiv auf langfristige Ziele hinarbeiten.",
      "Manchmal kann ich mich selbst nicht daran hindern, etwas zu tun, obwohl ich weiß, dass es falsch ist.",
      "Andere würden sagen, dass ich eine eiserne Selbstdisziplin habe."
    ]
  },

  asrs: {
    title: "Konzentration im Alltag",
    instruktion: "Wie oft traf das in den letzten 6 Monaten auf dich zu? Wähle jeweils die Antwort, die am besten beschreibt, wie du dich gefühlt und verhalten hast.",
    skala: [
      { v: 0, label: "Nie" }, { v: 1, label: "Selten" }, { v: 2, label: "Manchmal" },
      { v: 3, label: "Oft" }, { v: 4, label: "Sehr oft" }
    ],
    auffaelligAb: [2, 2, 2, 3, 3, 3],
    items: [
      "Wie oft hast du Probleme, die letzten Details eines Projekts abzuschließen, nachdem die schwierigen Teile abgeschlossen sind?",
      "Wie oft hast du Schwierigkeiten, Dinge zu ordnen, wenn du eine Aufgabe hast, die Organisation erfordert?",
      "Wie oft hast du Probleme, dich an Termine oder Verpflichtungen zu erinnern?",
      "Wie oft vermeidest oder verschiebst du es, eine Aufgabe zu beginnen, die viel Nachdenken erfordert?",
      "Wie oft bist du zappelig oder bewegst die Hände oder Füße, wenn du lange Zeit sitzen musst?",
      "Wie oft fühlst du dich übermäßig aktiv und unter dem Zwang, Dinge zu tun, als ob du von einem Motor angetrieben wärst?"
    ]
  },
  fomo: {
    title: "Freunde und Erlebnisse",
    instruktion: "Wie sehr treffen die folgenden Aussagen auf dich und deinen Alltag zu? Antworte so, wie es wirklich ist, und nicht so, wie es sein sollte.",
    skala: [
      { v: 1, label: "trifft überhaupt nicht auf mich zu" }, { v: 2, label: "trifft ein wenig auf mich zu" },
      { v: 3, label: "trifft teilweise auf mich zu" }, { v: 4, label: "trifft stark auf mich zu" },
      { v: 5, label: "trifft voll und ganz auf mich zu" }
    ],
    items: [
      "Ich befürchte, dass andere lohnendere Erlebnisse haben als ich.",
      "Ich befürchte, dass meine Freunde lohnendere Erlebnisse haben als ich.",
      "Ich mache mir Sorgen, wenn ich erfahre, dass meine Freunde ohne mich Spaß haben.",
      "Ich werde unruhig, wenn ich nicht weiß, was meine Freunde gerade machen.",
      "Es ist mir wichtig, die Insider-Witze meiner Freunde zu verstehen.",
      "Manchmal frage ich mich, ob ich zu viel Zeit damit verbringe, auf dem Laufenden zu bleiben.",
      "Es stört mich, wenn ich eine Gelegenheit verpasse, mich mit Freunden zu treffen.",
      "Wenn ich eine schöne Zeit habe, ist es mir wichtig, die Einzelheiten online zu teilen (z. B. in einer Story).",
      "Es stört mich, wenn ich ein geplantes Treffen verpasse.",
      "Wenn ich im Urlaub bin, verfolge ich weiter, was meine Freunde machen."
    ]
  },
  srbai: {
    title: "Gewohnheiten",
    instruktion: "Instagram, TikTok oder Snapchat zu öffnen ist für mich etwas, …",
    skala: [
      { v: 1, label: "stimme überhaupt nicht zu" }, { v: 2, label: "stimme eher nicht zu" },
      { v: 3, label: "teils, teils" }, { v: 4, label: "stimme eher zu" }, { v: 5, label: "stimme voll zu" }
    ],
    items: [
      "… das ich automatisch tue.",
      "… das ich tue, ohne mich bewusst daran erinnern zu müssen.",
      "… das ich tue, ohne nachzudenken.",
      "… mit dem ich anfange, ohne zu bemerken, dass ich es tue."
    ]
  },

  offen: {
    title: "Eine offene Frage",
    diktat: "Tipp: Du kannst deine Antworten auch einsprechen. Tippe dazu auf das Mikrofon-Symbol deiner Tastatur.",
    QU01: "Welche Funktionen in deinen Apps sorgen deiner Meinung nach dafür, dass du sie länger oder öfter nutzt? Nenne alles, was dir einfällt."
  }
};

window.ITEMS.FB = {
  title: "Rückmeldung (nur Testpersonen)",
  hinweis: "Diese Seite sehen nur Testpersonen im Pilotmodus.",
  FB03: "Was davon war neu für dich?",
  FB04: "Was war unklar?",
  FB06: "Was war überflüssig?"
};

window.ITEMS.T12 = {
  startTitle: "Willkommen zurück",
  startT1: "Schön, dass du wieder dabei bist! Das ist der zweite Fragebogen. Er dauert etwa %dauer_t1% Minuten.",
  startT2: "Schön, dass du wieder dabei bist! Das ist der letzte Fragebogen der Studie. Er dauert etwa %dauer_t2% Minuten.",
  shTitle: "Geänderte Einstellungen",
  SH01: "Hast du in den letzten Wochen etwas an deinem Handy oder in deinen Apps geändert?",
  SH01_options: [
    { v: "zeitlimit", label: "Zeitlimit für eine App gesetzt" },
    { v: "benachrichtigungen", label: "Benachrichtigungen einer App ausgeschaltet" },
    { v: "geloescht", label: "eine App gelöscht" },
    { v: "startbildschirm", label: "eine App vom Startbildschirm entfernt" },
    { v: "autoplay", label: "Autoplay oder Ähnliches in den App-Einstellungen geändert" },
    { v: "nichts", label: "nichts davon", exclusive: true },
    { v: "anderes", label: "anderes", text: true }
  ],
  SH02: "Magst du einen Screenshot davon hochladen?",
  qu03Title: "Eine offene Frage",
  schlussTitle: "Eine letzte Frage",
  QU03: "Hat sich in den letzten Wochen etwas daran verändert, wie du deine Apps nutzt oder wie du sie wahrnimmst? Wenn ja, was und warum?",
  QU04: "Was glaubst du, wollte diese Studie herausfinden?"
};
