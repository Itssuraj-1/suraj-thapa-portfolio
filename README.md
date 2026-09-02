# Suraj Thapa — Portfolio

A static personal portfolio site: light body with a dark navy hero/contact
"bookend," blue/violet/cyan/amber accents used as actual category coding, not
just decoration. No build step — plain HTML/CSS/JS, so it deploys directly to
GitHub Pages or Cloudflare Pages.

Every CSS and JS file is split by what it does (one file per section, one file
per feature) and commented throughout, so you can find and edit any single
piece — e.g. "just the skills section" or "just the project filter" — without
scrolling through one giant file.

## Files

```
index.html      All page content and structure (heavily commented)
css/
  00-base.css              Design tokens (colors/type/spacing), reset, buttons, tags
  01-nav.css               Nav bar + scroll progress bar
  02-hero.css              Hero: gradient mesh, grid, floating cards
  03-intro.css             Short statement section after the hero
  04-work.css              Projects: filter, featured project, cards, GitHub repos
  05-about.css             Story + snapshot facts
  06-skills.css            Skills grid (color-coded groups)
  07-philosophy.css        "How I build" 4-step process
  08-certifications.css    Certification placeholder cards
  09-beyond.css            "Beyond code" pills
  10-journey.css           Education timeline
  11-contact.css           Contact section (dark, matches hero)
  12-footer.css            Footer
  13-modal.css             Project detail popup
  14-responsive.css        All breakpoints, together, loaded last
  15-reduced-motion.css    Accessibility motion override, loaded last
js/
  01-scroll-progress.js    Fills the top progress bar + nav background
  02-nav-toggle.js         Mobile hamburger menu
  03-cv-download.js        Wires up the two "Download CV" buttons
  04-hero-interaction.js   Cursor-follow grid effect in the hero
  05-project-filter.js     All/Web/Software/E-commerce filter pills
  06-project-modal.js      Project data + detail popup (EDIT THIS to change project content)
  07-skill-tooltip.js      Shows a skill's description on hover/focus
  08-main.js               Repo language dot colors, loaded last
assets/
  images/
    suraj-profile.jpg          <- add your real photo here (see below)
    projects/                  <- add real project screenshots here
    certificates/               <- add certificate images here
  Suraj-Thapa-CV.pdf           <- add your CV PDF here (see below)
```

## Color system

Defined once, at the top of `css/00-base.css` — change a value there and it
updates everywhere:

- **Navy** (`--navy`) — the dark hero, contact, and footer sections
- **Blue** (`--blue`) — primary buttons + "Web" category
- **Violet** (`--violet`) — "Software" category
- **Cyan** (`--cyan`) — "E-commerce" category
- **Amber** (`--amber`) — "Creative" skills + certification highlight

The same color always means the same category everywhere (project tags,
skill-group borders, the project detail modal's top edge, timeline dots) —
that's deliberate, so the color isn't just decoration.

## What's real vs. placeholder

Everything is now filled in with what you've provided — your real photo,
real project screenshots, real certificates, and your LinkedIn — nothing
invented. Specifically:

- **Photo** — `assets/images/suraj-profile.jpg` is your real portrait,
  resized for the web (the original was 6MB; it's ~90KB now).
- **LaptopSathi** — homepage screenshot (rendered from your PDF) and the
  product-page screenshot are both in the featured card and its detail
  modal gallery.
- **Student Registration System** — your real interface screenshot.
- **Blog Management System** — your four "Haerin" screenshots (home, write,
  analytics, profile) are in the card and detail modal; the description was
  rewritten to match what those screens actually show.
- **Certifications** — both cards now show the real issuer and date range
  from your certificates, with a "View certificate" link to the full image.
- **LinkedIn** — added to the footer, contact section, and mobile nav.

One thing still missing:

- **CV PDF** — add `assets/Suraj-Thapa-CV.pdf` for the two "Download CV"
  buttons to work. Until then they show a friendly "check back soon" message
  instead of a broken download.

## Deploying (matches your Cloudflare setup)

Since you already registered **thapasuraj8848.com.np** and pointed it at
Cloudflare's nameservers, the simplest path is **Cloudflare Pages**:

1. Push this folder to a GitHub repo (e.g. `Itssuraj-1/portfolio`).
2. In the Cloudflare dashboard -> **Workers & Pages** -> **Create application** ->
   **Pages** -> **Connect to Git**, select the repo.
3. Build settings: framework preset **None**, build command **empty**, output
   directory `/` (this is a static site, nothing to build).
4. After the first deploy, go to the Pages project -> **Custom domains** -> add
   `thapasuraj8848.com.np` (and `www` if you want it). Since the domain's
   nameservers are already on Cloudflare, it should verify automatically.

GitHub Pages works the same way if you'd rather use that: enable Pages on the
repo (Settings -> Pages -> Deploy from branch -> `main` / root), then add the
custom domain there instead.

## Editing content later

- **New project** -> duplicate a `.project-card` block in `index.html`, add a
  matching entry to the `projectData` object at the top of
  `js/06-project-modal.js` for the detail modal, and pick which existing
  accent color (`blue`/`violet`/`cyan`) or a new one it should use.
- **New GitHub repo to feature** -> add a `.repo-card` link in the "More from
  GitHub" grid in `index.html`, with a `data-lang="..."` attribute; add a
  matching color in the `languageColors` object in `js/08-main.js` if it's a
  new language.
- **New certification** -> replace a `.cert-card` in the Certifications
  section of `index.html` with the real name, issuer, and date once you have
  them.
- **Change any color** -> edit the variables at the top of `css/00-base.css`
  only — every section pulls its colors from there.
