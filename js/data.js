/* ================================================================
   data.js — static repo snapshot, descriptions, language colors
   Updated: 2026-04-21
================================================================ */

const GH_USER = "MarcVo00";

// Snapshot of public repos — used immediately on page load so the
// site works without a network connection. The live refresh in main.js
// will overwrite this with up-to-date data when the API responds.
const STATIC_REPOS = [
  { name: "StockAgent",           lang: "Python",     stars: 0, size: 149,   updated: "2026-04-20", url: "https://github.com/MarcVo00/StockAgent",           home: null },
  { name: "GemmaAgent",           lang: "HTML",       stars: 0, size: 372,   updated: "2026-04-16", url: "https://github.com/MarcVo00/GemmaAgent",           home: null },
  { name: "KaraOrKey",            lang: "Python",     stars: 0, size: 5768,  updated: "2026-04-13", url: "https://github.com/MarcVo00/KaraOrKey",            home: null },
  { name: "TCGsApp",              lang: "TypeScript", stars: 0, size: 389,   updated: "2026-04-13", url: "https://github.com/MarcVo00/TCGsApp",              home: null },
  { name: "NarutoTD_Web",         lang: "JavaScript", stars: 0, size: 38,    updated: "2026-04-09", url: "https://github.com/MarcVo00/NarutoTD_Web",         home: null },
  { name: "CercleDuThePrototype", lang: "HTML",       stars: 0, size: 1628,  updated: "2026-04-09", url: "https://github.com/MarcVo00/CercleDuThePrototype", home: null },
  { name: "OrdiApp",              lang: "TypeScript", stars: 0, size: 496,   updated: "2025-08-20", url: "https://github.com/MarcVo00/OrdiApp",              home: null },
  { name: "selGestionApp",        lang: "JavaScript", stars: 0, size: 95258, updated: "2024-06-24", url: "https://github.com/MarcVo00/selGestionApp",        home: null },
  { name: "OpenAiProj_HEG_63-51", lang: "Python",     stars: 0, size: 92,    updated: "2023-12-21", url: "https://github.com/MarcVo00/OpenAiProj_HEG_63-51", home: null },
  { name: "BiProject",            lang: "—",          stars: 0, size: 3398,  updated: "2023-10-16", url: "https://github.com/MarcVo00/BiProject",            home: null },
];

// Short descriptions shown in the archive table.
// These are overridden automatically if a description is set on GitHub.
const NOTES = {
  "StockAgent":           "Python-based stock-watching agent with a scheduler & refresh log.",
  "GemmaAgent":           "HTML-forward experiment wiring a small language model into the page.",
  "KaraOrKey":            "Python app for karaoke key detection and musical analysis.",
  "TCGsApp":              "TypeScript app for browsing & organising trading-card collections.",
  "NarutoTD_Web":         "A Naruto-themed tower-defense prototype running in the browser.",
  "CercleDuThePrototype": "UI prototype for a small tea-circle / salon concept.",
  "OrdiApp":              "TypeScript utility app — early sketch.",
  "selGestionApp":        "Methodology-selector for project management. Largest repo; deployed live.",
  "OpenAiProj_HEG_63-51": "School project (HEG) exploring the OpenAI API.",
  "BiProject":            "Business-intelligence coursework — oldest piece in the archive.",
};

// Color assigned to each language in bars and dots.
const LANG_COLORS = {
  Python:     "#e8a457",
  TypeScript: "#7aa58c",
  JavaScript: "#f3b464",
  HTML:       "#b85a6d",
  "—":        "#8a7d72",
};
