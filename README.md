# Marc Vo — Portfolio

Personal portfolio site built as a static, single-page site that pulls live data from the GitHub API.

## Structure

```
Portfolio/
├── index.html   — markup and page structure
├── style.css    — all styling (CSS variables, layout, animations)
└── app.js       — data snapshot + live API refresh + render logic
```

## How it works

- On load, the page renders immediately using a **static snapshot** of repo data embedded in `app.js` — no network needed.
- A **live refresh** then runs in the background via the public GitHub API (`api.github.com/users/MarcVo00/repos`). If it succeeds, the archive and language breakdown update silently.
- The `NOTES` object in `app.js` holds the per-repo descriptions (GitHub repos have no descriptions set). If you add descriptions directly on GitHub, the live refresh will pick them up automatically.

## Customization

| What | Where |
|------|-------|
| Repo descriptions | `NOTES` object in `app.js` |
| Language colors | `LANG_COLORS` object in `app.js` |
| Spotlight cards | Hardcoded in `index.html` — edit the three `.spot` articles |
| About text | `#about` section in `index.html` |
| Color palette | CSS variables at the top of `style.css` |
| Fonts | Google Fonts `<link>` in `index.html` (Fraunces + JetBrains Mono) |

## Deploy

**GitHub Pages** (recommended — becomes `https://marcvo00.github.io`)

1. Create a repo named `MarcVo00.github.io` on GitHub
2. Push the three files to `main`
3. Settings → Pages → Source: `main` / `/ (root)`
4. Live in ~60 seconds

**Vercel**

Drag and drop the `Portfolio/` folder onto [vercel.com/new](https://vercel.com/new). Done.

## Tech

- Vanilla HTML / CSS / JS — zero dependencies, zero build step
- [Fraunces](https://fonts.google.com/specimen/Fraunces) variable serif
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) monospace
- GitHub REST API v3 (public, no auth required)
