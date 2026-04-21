/* ================================================================
   render.js — all DOM rendering functions
   Depends on: data.js (NOTES, LANG_COLORS), translations.js (t, currentLang)
================================================================ */

// Holds the last rendered repo list so setLang() can re-render on switch
let currentRepos = STATIC_REPOS;

function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(
      currentLang === "fr" ? "fr-FR" : "en-GB",
      { year: "numeric", month: "short", day: "2-digit" }
    );
  } catch {
    return iso;
  }
}

/* ---- archive table header (re-rendered on lang switch) ---- */
function renderIndexHead() {
  const head = document.getElementById("idx-head");
  if (!head) return;
  head.innerHTML = `
    <div>${t("idx.head.no")}</div>
    <div>${t("idx.head.project")}</div>
    <div>${t("idx.head.note")}</div>
    <div>${t("idx.head.lang")}</div>
    <div>${t("idx.head.updated")}</div>
    <div></div>
  `;
}

/* ---- language breakdown bars ---- */
function renderLanguages(repos) {
  const counts = {};
  repos.forEach(r => {
    const l = r.lang || "—";
    counts[l] = (counts[l] || 0) + 1;
  });

  const total   = repos.length;
  const entries = Object.entries(counts).sort(([, a], [, b]) => b - a);
  const grid    = document.getElementById("lang-grid");

  grid.innerHTML = entries.map(([lang, n], i) => {
    const pct   = Math.round((n / total) * 100);
    const color = LANG_COLORS[lang] || "var(--amber)";
    const word  = n === 1 ? t("lang.repos") : t("lang.repos_pl");
    return `
      <div class="lang-row">
        <div class="lang-idx">L/${String(i + 1).padStart(2, "0")}</div>
        <div class="lang-name">${lang}</div>
        <div class="lang-bar">
          <div class="lang-bar-fill"
               style="--w:${pct}%; background:${color}; animation-delay:${i * 150}ms;"></div>
        </div>
        <div class="lang-count">
          <div>${n} ${word}</div>
          <div class="lang-pct">${pct}%</div>
        </div>
      </div>
    `;
  }).join("");
}

/* ---- full repository archive table ---- */
function renderArchive(repos) {
  const body = document.getElementById("idx-body");

  body.innerHTML = repos.map((r, i) => {
    const note  = NOTES[r.name] || "<em>—</em>";
    const lang  = r.lang || "—";
    const color = LANG_COLORS[lang] || "var(--amber)";
    const badge = r.home
      ? ` <span style="color:var(--sage); font-size:11px; font-family:var(--mono); vertical-align:super;">&bull;&nbsp;live</span>`
      : "";
    return `
      <a class="idx-row"
         href="${r.url}"
         target="_blank"
         rel="noopener"
         aria-label="${r.name} on GitHub">
        <div class="idx-num">${String(i + 1).padStart(2, "0")}</div>
        <div class="idx-name">${r.name}${badge}</div>
        <div class="idx-desc">${note}</div>
        <div class="idx-lang"><span class="sw" style="background:${color}"></span>${lang}</div>
        <div class="idx-date">${fmtDate(r.updated)}</div>
        <div class="idx-arrow">&#x2197;</div>
      </a>
    `;
  }).join("");
}

/* ---- GitHub bio in the about section ---- */
function updateBio(ghBio) {
  const el = document.getElementById("about-bio");
  if (!el) return;
  // Bio is in French — show as-is in FR, use the EN prose fallback otherwise
  el.innerHTML = currentLang === "fr" ? ghBio : t("about.p1");
}

/* ---- master render call ---- */
function render(repos) {
  currentRepos = repos;
  renderIndexHead();
  renderLanguages(repos);
  renderArchive(repos);
}
