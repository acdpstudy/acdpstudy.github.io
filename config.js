window.STUDY_CONFIG = {
  DEMO_GROUP: "G4",

  SUPABASE_URL: "",
  SUPABASE_ANON_KEY: "",

  STORAGE_BUCKET: "screenshots",

  TIMEZONE: "Europe/Berlin",
  WINDOWS: {
    R:  { from: "2026-10-01T00:00:00", to: "2099-12-31T23:59:59" },
    T0: { from: "2026-10-01T00:00:00", to: "2099-12-31T23:59:59" }
  },

  DAUER_T0_MIN: "25",
  DAUER_T0_FRAGEBOGEN_MIN: "12",
  DAUER_T1_MIN: "10",
  DAUER_T2_MIN: "10",
  DAUER_SCHULUNG_MIN: "10",

  SURVEY_VERSION: "survey-v5",
  SEND_VERSION: true,

  CONTACT_EMAIL: "",

  CODE_ALPHABET: "23456789ABCDEFGHJKLMNPQRSTUVWXYZ",
  CODE_LENGTH: 6,

  MAX_UPLOAD_MB: 10,
  MAX_FILES_PER_UPLOAD: 3,
  ALLOWED_UPLOAD_TYPES: ["image/jpeg", "image/png", "image/heic", "image/heif", "image/webp"],

  RETRY_DELAYS_SECONDS: [1, 3, 9]
};
