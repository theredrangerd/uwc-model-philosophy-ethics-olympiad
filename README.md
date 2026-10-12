# Model Philosophy Ethics Olympiad (MPEO)

Official recruitment and information website for the **Model Philosophy Ethics Olympiad** society at UWC South East Asia. It is built for LifeCon, the student society fair. Most visitors arrive by scanning a QR code on their phone at the booth, so the site is mobile-first.

**Repository:** https://github.com/theredrangerd/ethics-olympiad-site

## What's on the site

### Landing page (`index.html`)

A single-page recruitment site with these sections:

| Section | Purpose |
|---|---|
| Hero | Society intro, 2026 competition spotlight, UWC Ethics Olympiad countdown, key actions |
| About | What the Ethics Olympiad is, and that no prior experience is needed |
| Match Format | Interactive 4-step walkthrough of an Olympiad round |
| Accomplishments | Medals and results, including the Grand Finals finalist placement |
| Journey | Scroll-driven timeline of the road to Grand Finals |
| Why Join | Value proposition for prospective members |
| Leadership | Student leadership slides (gated behind UWC sign-in) |
| FAQ | Accordion of common questions |
| Logistics | CIMS registration guide and QR code |
| Express Interest | Email capture form for a follow-up reminder |

### Resources & Case Vault (`cases.html`)

A companion page with ethics reading, case material and links for people who want more depth than the recruitment page gives.

## Tech stack

There is no build step and no dependencies to install. It is plain HTML, CSS and vanilla JavaScript.

```
index.html        Landing page
cases.html        Resources & Case Vault page
style.css         Main styles
resources.css     Styles for the resources page
app.js            Landing page logic
cases.js          Resources page logic
assets/           Logos, crests, engravings, QR code, resource files
documentation/    Design and setup specs
```

### Notable behavior (`app.js`)

- **Adaptive performance tiering:** a lite mode switches off heavy cinematic effects on small screens, touch devices, low-memory devices and `prefers-reduced-motion`.
- **Cinematic splash screen** and parallax hero on full-tier devices.
- **Interactive match stepper** that walks through a round in 4 steps.
- **Scroll-driven timeline** with progress and node lighting.
- **Countdown** to the next event (`CONFIG.NEXT_EVENT_DATE`).
- **FAQ accordion** and mobile navigation.
- **Express Interest form** that POSTs to a Google Apps Script Web App.

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

The site is static and deploys on **GitHub Pages**. The `.nojekyll` file turns off Jekyll processing. Pushing to `main` publishes the site.

## Configuration

| Setting | Location | Notes |
|---|---|---|
| Next event date | `app.js` → `CONFIG.NEXT_EVENT_DATE` | Drives the hero countdown |
| Interest form endpoint | `app.js` and `cases.js` → `CONFIG.APPS_SCRIPT_URL` | Deployed Google Apps Script Web App |

The interest form needs a backend because a static site has nowhere to store submissions. Setup instructions are in [`documentation/apps-script-setup.md`](documentation/apps-script-setup.md).

## Privacy

Student names, emails and photos have been removed from the site. The team photo and leadership slides are embedded from UWC-hosted files and require a UWC Google sign-in to view. Do not commit personal student data to this repository.

## Documentation

| Document | Contents |
|---|---|
| [`content-design.md`](documentation/content-design.md) | Content strategy, messaging and information architecture |
| [`aesthetic-design.md`](documentation/aesthetic-design.md) | Visual identity, motion design and mobile performance tiers |
| [`resources-aesthetic.md`](documentation/resources-aesthetic.md) | Design spec for the Resources & Case Vault page |
| [`apps-script-setup.md`](documentation/apps-script-setup.md) | Google Apps Script backend setup for the interest form |

## Design

The visual theme is classical Socratic academia meets modern editorial motion. It uses a slate and obsidian palette with gold accents, and classical engravings of Socrates and Lady Justice.

## Registration

Official registration happens on **CIMS**, not on this site. The Express Interest form is only a reminder list for people who want a follow-up before the next weekly meeting.
