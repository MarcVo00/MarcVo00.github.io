/* ================================================================
   main.js — GitHub API refresh, clock, scroll reveals, boot
   Depends on: data.js, translations.js, render.js
================================================================ */

/* ---- live GitHub API refresh ---- */
async function liveRefresh() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GH_USER}`,
            { headers: { Accept: "application/vnd.github+json" } }),
      fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`,
            { headers: { Accept: "application/vnd.github+json" } }),
    ]);

    if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

    const [user, data] = await Promise.all([userRes.json(), reposRes.json()]);

    // show bio from GitHub profile
    if (user.bio) updateBio(user.bio);

    // override static notes with any descriptions set on GitHub
    data.forEach(r => { if (r.description) NOTES[r.name] = r.description; });

    const repos = data.map(r => ({
      name:    r.name,
      lang:    r.language || "—",
      stars:   r.stargazers_count,
      size:    r.size,
      updated: r.pushed_at || r.updated_at,
      url:     r.html_url,
      home:    r.homepage || null,
    }));

    render(repos);
    applyLang(); // re-translate any newly rendered markup

    const stamp = document.getElementById("fetchstamp");
    if (stamp) {
      const locale = currentLang === "fr" ? "fr-FR" : "en-GB";
      stamp.innerHTML = `${t("foot.stamp.prefix")} live &mdash; ${new Date().toLocaleString(locale)}`;
    }
  } catch (err) {
    console.info("GitHub API unreachable — using static snapshot.", err);
  }
}

/* ---- live clock in the nav ---- */
function tickClock() {
  const el = document.getElementById("now");
  if (!el) return;
  const d  = new Date();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  el.textContent = `${hh}:${mm}:${ss}`;
}

/* ---- IntersectionObserver scroll reveals ---- */
function setupReveals() {
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }),
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ---- boot ---- */
document.addEventListener("DOMContentLoaded", () => {
  // wire lang toggle buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // initial render with static data
  render(STATIC_REPOS);
  applyLang();
  setupReveals();

  // clock
  tickClock();
  setInterval(tickClock, 1000);

  // year in footer
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach(el => { el.textContent = year; });

  // async live refresh
  liveRefresh();
});
