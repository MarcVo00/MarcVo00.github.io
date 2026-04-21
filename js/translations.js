/* ================================================================
   translations.js — all UI strings in FR and EN + i18n helpers
================================================================ */

const T = {
  fr: {
    /* nav */
    "nav.work":    "Travaux",
    "nav.stack":   "Stack",
    "nav.archive": "Archive",
    "nav.about":   "À propos",

    /* hero */
    "hero.eyebrow":         "Index &mdash; 001 &mdash; Portfolio de Marc Vo",
    "hero.title":           "Je fabrique<br /><span class=\"italic\">des choses</span><br />discrètes qui <span class=\"italic\">pensent.</span>",
    "hero.label.from":      "Basé à",
    "hero.val.from":        "Suisse &middot; Ancien étudiant HEG",
    "hero.label.current":   "En ce moment",
    "hero.val.current":     "Je code de petits <em style=\"color:var(--amber);font-style:italic\">agents</em> qui regardent les marchés &amp; modèlent des pages.",
    "hero.label.langs":     "Langages",
    "hero.label.catalogue": "Catalogue",
    "hero.btn.work":        "Voir les projets",
    "hero.btn.github":      "Ouvrir sur GitHub",
    "hero.status":          "// en construction",
    "hero.stat.repos":      "Dépôts publics",
    "hero.stat.langs":      "Langages",
    "hero.stat.years":      "Ans de code",

    /* section 002 — spotlight */
    "s002.index": "<span class=\"num\">002</span> Sélection",
    "s002.title": "Trois récentes <span class=\"italic\">expériences</span>",
    "s002.lede":  "Les dernières semaines ont été une série de petits prototypes liés à l&rsquo;IA. Un agent de surveillance boursière, une expérience web sur Gemma, et un outil de gestion &mdash; le seul déployé sur le web.",
    "spot1.tag":       "Récent / 2026-04",
    "spot1.desc":      "Un agent qui surveille les marchés financiers selon un planning, journalise les mises à jour et affiche la dernière actualisation sur un tableau de bord. Python avec un scheduler façon systemd.",
    "spot1.link":      "Dépôt",
    "spot2.tag":       "Agents / 2026-04",
    "spot2.desc":      "Une expérience HTML qui intègre un petit modèle de langage directement dans la page — mi-maquette UI, mi-banc d&rsquo;essai d&rsquo;inférence locale.",
    "spot2.link":      "Dépôt",
    "spot3.tag":       "En ligne / 2024",
    "spot3.desc":      "Le projet le plus volumineux de l&rsquo;archive. Un outil de sélection de méthodologie pour la gestion de projet — le seul dépôt actuellement déployé sur le web.",
    "spot3.link.repo": "Dépôt",
    "spot3.link.live": "En ligne",

    /* section 003 — languages */
    "s003.index": "<span class=\"num\">003</span> Répartition",
    "s003.title": "Une palette de <span class=\"italic\">quatre langages</span>",
    "s003.lede":  "Principalement Python pour les agents et les back-ends, TypeScript pour les applications web modernes, JavaScript pour les prototypes rapides, HTML pour les esquisses. Le profil de quelqu&rsquo;un qui passe de la recherche à l&rsquo;interface.",
    "lang.repos": "dépôt",
    "lang.repos_pl": "dépôts",

    /* section 004 — archive */
    "s004.index":       "<span class=\"num\">004</span> Archive",
    "s004.title":       "L&rsquo;<span class=\"italic\">index</span> complet",
    "s004.lede":        "Tous les dépôts publics, du plus récent au plus ancien. Cliquez une ligne pour l&rsquo;ouvrir sur GitHub. Les données se rafraîchissent en direct à chaque chargement.",
    "idx.head.no":      "N°",
    "idx.head.project": "Projet",
    "idx.head.note":    "Note",
    "idx.head.lang":    "Langage",
    "idx.head.updated": "Màj",

    /* section 005 — about */
    "s005.index": "<span class=\"num\">005</span> À propos",
    "s005.title": "La <span class=\"italic\">personne</span> derrière le pseudo",
    "about.p1":   "Marc fabrique de petits <em>agents discrets</em> &mdash; des programmes qui observent quelque chose, réfléchissent un peu, et ne parlent que quand c&rsquo;est utile.",
    "about.p2":   "L&rsquo;archive ressemble à un <em>Wunderkammer</em> : un sélecteur de méthodologie de ses années HEG, une app de jeux de cartes, un tower defense Naruto dans le navigateur, un prototype de cercle de thé &mdash; et, récemment, une série d&rsquo;agents construits sur Gemma et des données de marché.",
    "about.p3":   "La bio sur GitHub vient d&rsquo;arriver. Avant, le silence semblait volontaire. Le code, c&rsquo;est la bio.",
    "kv.repos":   "Dépôts publics",
    "kv.langs":   "Langages",
    "kv.since":   "Sur GitHub depuis",
    "kv.active":  "Mois le plus actif",
    "kv.live":    "Déploiements en ligne",
    "kv.pattern": "Tendance émergente",

    /* footer */
    "foot.col.colophon":  "Colophon",
    "foot.col.elsewhere": "Liens",
    "foot.col.index":     "Index",
    "foot.col.meta":      "Méta",
    "foot.sig":           "Composé en Fraunces (serif variable) et JetBrains Mono. Données chargées en direct depuis l&rsquo;API GitHub publique à chaque visite, avec un instantané statique en secours.",
    "foot.top":           "&uarr; Haut de page",
    "foot.copy":          "Marc Vo &mdash; Toutes les expériences s&rsquo;appartiennent.",
    "foot.stamp.prefix":  "Tiré de github.com/MarcVo00 &mdash;",
  },

  en: {
    /* nav */
    "nav.work":    "Work",
    "nav.stack":   "Stack",
    "nav.archive": "Archive",
    "nav.about":   "About",

    /* hero */
    "hero.eyebrow":         "Index &mdash; 001 &mdash; Portfolio of Marc Vo",
    "hero.title":           "Building<br /><span class=\"italic\">quiet</span> things<br />that <span class=\"italic\">think.</span>",
    "hero.label.from":      "Working from",
    "hero.val.from":        "Switzerland &middot; HEG alumnus",
    "hero.label.current":   "Currently",
    "hero.val.current":     "Writing small <em style=\"color:var(--amber);font-style:italic\">agents</em> that watch markets &amp; model pages.",
    "hero.label.langs":     "Languages",
    "hero.label.catalogue": "Catalogue",
    "hero.btn.work":        "See recent work",
    "hero.btn.github":      "Open on GitHub",
    "hero.status":          "// shipping",
    "hero.stat.repos":      "Public repos",
    "hero.stat.langs":      "Languages",
    "hero.stat.years":      "Years coding",

    /* section 002 — spotlight */
    "s002.index": "<span class=\"num\">002</span> Spotlight",
    "s002.title": "Three recent <span class=\"italic\">experiments</span>",
    "s002.lede":  "The last few weeks have been a run of small, AI-adjacent prototypes. A stock-watching agent, a Gemma-powered web experiment, and a working methodology app &mdash; the only one deployed to the open web.",
    "spot1.tag":       "Latest / 2026-04",
    "spot1.desc":      "A background agent that watches equities on a schedule, logs refreshes, and surfaces the last refresh on a simple dashboard. Python with a systemd-style scheduler.",
    "spot1.link":      "Repo",
    "spot2.tag":       "Agents / 2026-04",
    "spot2.desc":      "An HTML-forward experiment wiring a small language model into the page itself &mdash; part UI sketch, part local inference test-bed.",
    "spot2.link":      "Repo",
    "spot3.tag":       "Live / 2024",
    "spot3.desc":      "The largest project in the archive. A methodology-selection tool for project management &mdash; the only repo currently deployed to the web.",
    "spot3.link.repo": "Repo",
    "spot3.link.live": "Live",

    /* section 003 — languages */
    "s003.index": "<span class=\"num\">003</span> Breakdown",
    "s003.title": "A four-language <span class=\"italic\">palette</span>",
    "s003.lede":  "Mostly Python for agents and back-ends, TypeScript for modern web apps, JavaScript for quick prototypes, HTML for sketches. The shape of someone who moves between research and interface.",
    "lang.repos":    "repo",
    "lang.repos_pl": "repos",

    /* section 004 — archive */
    "s004.index":       "<span class=\"num\">004</span> Archive",
    "s004.title":       "The complete <span class=\"italic\">index</span>",
    "s004.lede":        "Every public repository, most recent first. Click a row to open it on GitHub. Data refreshes live from the GitHub API on every page load.",
    "idx.head.no":      "No.",
    "idx.head.project": "Project",
    "idx.head.note":    "Note",
    "idx.head.lang":    "Lang",
    "idx.head.updated": "Updated",

    /* section 005 — about */
    "s005.index": "<span class=\"num\">005</span> About",
    "s005.title": "The <span class=\"italic\">person</span> behind the handle",
    "about.p1":   "Marc is a developer drawn to <em>quiet automation</em> &mdash; small programs that watch something, think a little, and tell you only what matters.",
    "about.p2":   "The archive reads like a <em>Wunderkammer</em>: a methodology selector from his HEG years, a trading-card app, a Naruto tower defense in the browser, a tea circle prototype &mdash; and, most recently, a run of agents built on top of Gemma and market data.",
    "about.p3":   "The GitHub bio just arrived. Before that, the silence felt deliberate. The work&rsquo;s the bio.",
    "kv.repos":   "Public repos",
    "kv.langs":   "Languages",
    "kv.since":   "On GitHub since",
    "kv.active":  "Most active month",
    "kv.live":    "Live deployments",
    "kv.pattern": "Pattern emerging",

    /* footer */
    "foot.col.colophon":  "Colophon",
    "foot.col.elsewhere": "Elsewhere",
    "foot.col.index":     "Index",
    "foot.col.meta":      "Meta",
    "foot.sig":           "Set in Fraunces (variable serif) and JetBrains Mono. Data pulled live from the public GitHub API on every page load, with a static fallback so the site works offline.",
    "foot.top":           "&uarr; Back to top",
    "foot.copy":          "Marc Vo &mdash; All experiments own themselves.",
    "foot.stamp.prefix":  "Pulled from github.com/MarcVo00 &mdash;",
  },
};

// Detect browser language, fall back to EN
let currentLang = localStorage.getItem("lang") ||
  (navigator.language.startsWith("fr") ? "fr" : "en");

function t(key) {
  return (T[currentLang]?.[key]) ?? (T.en[key] ?? key);
}

function applyLang() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const val = t(el.dataset.i18n);
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLang();
  // re-render dynamic sections that are language-sensitive
  if (typeof renderIndexHead === "function") renderIndexHead();
  if (typeof currentRepos !== "undefined") render(currentRepos);
}
