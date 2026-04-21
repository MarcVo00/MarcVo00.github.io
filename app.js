/* ================================================================
   Marc Vo — Portfolio JS
   Ships with a static snapshot of repo data (works offline/rate-limited).
   Attempts a live refresh from the GitHub API on every page load.
================================================================ */

const GH_USER = "MarcVo00";

// Static snapshot (fetched 2026-04-21) — keeps the site functional
// without a network connection or when the API rate-limit is hit.
const STATIC_REPOS = [
  { name: "StockAgent",           lang: "Python",     stars: 0, size: 149,   updated: "2026-04-20", url: "https://github.com/MarcVo00/StockAgent",           home: null },
  { name: "GemmaAgent",           lang: "HTML",       stars: 0, size: 372,   updated: "2026-04-16", url: "https://github.com/MarcVo00/GemmaAgent",           home: null },
  { name: "KaraOrKey",            lang: "Python",     stars: 0, size: 5768,  updated: "2026-04-13", url: "https://github.com/MarcVo00/KaraOrKey",            home: null },
  { name: "TCGsApp",              lang: "TypeScript", stars: 0, size: 389,   updated: "2026-04-13", url: "https://github.com/MarcVo00/TCGsApp",              home: null },
  { name: "NarutoTD_Web",         lang: "JavaScript", stars: 0, size: 38,    updated: "2026-04-09", url: "https://github.com/MarcVo00/NarutoTD_Web",         home: null },
  { name: "CercleDuThePrototype", lang: "HTML",       stars: 0, size: 1628,  updated: "2026-04-09", url: "https://github.com/MarcVo00/CercleDuThePrototype", home: null },
  { name: "OrdiApp",              lang: "TypeScript", stars: 0, size: 496,   updated: "2025-08-20", url: "https://github.com/MarcVo00/OrdiApp",              home: null },
  { name: "selGestionApp",        lang: "JavaScript", stars: 0, size: 95258, updated: "2024-06-24", url: "https://github.com/MarcVo00/selGestionApp",        home: "https://selection-optimale-methodologie-gestion-projet-app.vercel.app" },
  { name: "OpenAiProj_HEG_63-51", lang: "Python",     stars: 0, size: 92,    updated: "2023-12-21", url: "https://github.com/MarcVo00/OpenAiProj_HEG_63-51", home: null },
  { name: "BiProject",            lang: "—",          stars: 0, size: 3398,  updated: "2023-10-16", url: "https://github.com/MarcVo00/BiProject",            home: null },
];

// Inferred descriptions — GitHub repos have no descriptions set.
// Update these as you add descriptions on GitHub; they'll be overridden
// automatically once the live API refresh picks them up.
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
  "BiProject":            "Business-intelligence coursework — the oldest piece in the archive.",
};

const LANG_COLORS = {
  Python:     "#e8a457",
  TypeScript: "#7aa58c",
  JavaScript: "#f3b464",
  HTML:       "#b85a6d",
  "—":        "#5c5449",
};

/* ---- helpers ---- */

function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      year: "numeric", month: "short", day: "2-digit",
    });
  } catch {
    return iso;
  }
}

function fmtSize(kb) {
  return kb >= 1024 ? (kb / 1024).toFixed(1) + " MB" : kb + " KB";
}

/* ---- render: language breakdown ---- */

function renderLanguages(repos) {
  const counts = {};
  repos.forEach(r => {
    const l = r.lang || "—";
    counts[l] = (counts[l] || 0) + 1;
  });

  const total = repos.length;
  const entries = Object.entries(counts).sort(([, a], [, b]) => b - a);
  const grid = document.getElementById("lang-grid");

  grid.innerHTML = entries.map(([lang, n], i) => {
    const pct   = Math.round((n / total) * 100);
    const color = LANG_COLORS[lang] || "var(--amber)";
    return `
      <div class="lang-row">
        <div class="lang-idx">L/${String(i + 1).padStart(2, "0")}</div>
        <div class="lang-name">${lang}</div>
        <div class="lang-bar">
          <div class="lang-bar-fill"
               style="--w:${pct}%; background:${color}; animation-delay:${i * 150}ms;"></div>
        </div>
        <div class="lang-count">
          <div>${n} repo${n === 1 ? "" : "s"}</div>
          <div class="lang-pct">${pct}%</div>
        </div>
      </div>
    `;
  }).join("");
}

/* ---- render: archive table ---- */

function renderArchive(repos) {
  const body = document.getElementById("idx-body");

  body.innerHTML = repos.map((r, i) => {
    const note  = NOTES[r.name] || "<em>(no description yet)</em>";
    const lang  = r.lang || "—";
    const color = LANG_COLORS[lang] || "var(--amber)";
    const badge = r.home
      ? ' <span style="color:var(--sage);font-size:11px;font-family:var(--mono);vertical-align:super;">&bull;&nbsp;live</span>'
      : "";
    return `
      <a class="idx-row"
         href="${r.url}"
         target="_blank"
         rel="noopener"
         aria-label="Open ${r.name} on GitHub">
        <div class="idx-num">${String(i + 1).padStart(2, "0")}</div>
        <div class="idx-name">${r.name}${badge}</div>
        <div class="idx-desc">${note}</div>
        <div class="idx-lang">
          <span class="sw" style="background:${color}"></span>${lang}
        </div>
        <div class="idx-date">${fmtDate(r.updated)}</div>
        <div class="idx-arrow">&#x2197;</div>
      </a>
    `;
  }).join("");
}

function render(repos) {
  renderLanguages(repos);
  renderArchive(repos);
}

/* ---- live refresh from GitHub API ---- */

async function liveRefresh() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`,
      { headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);

    const data = await res.json();
    const repos = data.map(r => ({
      name:    r.name,
      lang:    r.language || "—",
      stars:   r.stargazers_count,
      size:    r.size,
      updated: r.pushed_at || r.updated_at,
      url:     r.html_url,
      home:    r.homepage || null,
    }));

    // Surface any descriptions the user has since added on GitHub
    data.forEach(r => { if (r.description) NOTES[r.name] = r.description; });

    render(repos);

    const stamp = document.getElementById("fetchstamp");
    if (stamp) stamp.innerHTML = `live &mdash; ${new Date().toLocaleString()}`;
  } catch (err) {
    console.info("GitHub API unreachable, using static snapshot.", err);
  }
}

/* ---- clock ---- */

function tickClock() {
  const el = document.getElementById("now");
  if (!el) return;
  const d  = new Date();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  el.textContent = `${hh}:${mm}:${ss} LOCAL`;
}

/* ---- scroll reveals ---- */

function setupReveals() {
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ---- boot ---- */

document.addEventListener("DOMContentLoaded", () => {
  render(STATIC_REPOS);
  setupReveals();
  tickClock();
  setInterval(tickClock, 1000);

  const year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = year;
  });

  liveRefresh();
});
