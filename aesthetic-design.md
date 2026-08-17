# Model Philosophy Ethics Olympiad (MPEO) — Aesthetic & Visual Design Specification

> **Document Version:** 1.5 *(Adaptive Edition: Cinematic Splash, Kinetic Fall, Parallax Hero, Visual Timeline, Match Architecture & Mobile Performance Tiering)*  
> **Target Event:** LifeCon Student Recruitment  
> **Project Scope:** Official Informational & Recruitment Web Platform  
> **Design Thesis:** *Classical Socratic Academia meets Modern High-End Editorial Motion*

---

## 1. Executive Aesthetic Overview

The visual identity of the **Model Philosophy Ethics Olympiad (MPEO)** website marries the stoic, timeless beauty of classical Greco-Roman academia with cutting-edge digital motion design. Built upon a sophisticated slate-grey and obsidian foundation (`#0E1013` / `#171A1F`), the platform leverages rich textural paper surfaces, classical engravings (the crowned Socrates bust and Lady Justice), and jaw-dropping cinematic animations engineered to immediately captivate prospective students at LifeCon.

```
┌─────────────────────────────────────────────────────────────────────────┐
│ [LAYER 0: CINEMATIC SPLASH]                                             │
│                  M O D E L   P H I L O S O P H Y                        │
│                  E T H I C S   O L Y M P I A D                          │
│        (Full-Screen Monumental Typography • Staggered Kinetic Fall)     │
├─────────────────────────────────────────────────────────────────────────┤
│ [LAYER 1: PARALLAX HERO ON SCROLL]                                      │
│  • Deep Bg (0.15x): Greek Column Watermarks & Translucent Laurel Vines  │
│  • Mid (0.45x): Glowing Gold Stars (✦) & Shimmer Particle Dust          │
│  • Foreground (1.0x): Framed Squad Photo, Award Badges & Highlights     │
├─────────────────────────────────────────────────────────────────────────┤
│ [LAYER 2: INTERACTIVE VISUAL TIMELINE]                                  │
│  • Illuminated Gold Spine with Pulsing Milestone Nodes                  │
│  • 2nd Place TKE ➔ 3rd Place Senior Olympiad ➔ Grand Finals Invitation  │
├─────────────────────────────────────────────────────────────────────────┤
│ [LAYER 3: 4-STEP MATCH ANATOMY STEPPER]                                 │
│  • Sequential Step Cards with Socratic Dialogue Time Indicators         │
│  • Dual-Hairline Framed Cards with Soft Ambient Slate Lighting          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Core Design Principles
1. **Cinematic First Impression**: An unmissable, full-screen opening splash screen with monumental typography that shatters / kinetic-falls away into the sticky header upon user interaction.
2. **Multi-Layer Parallax Depth**: Smooth, inertial scroll-driven parallax that creates an immersive, three-dimensional physical sensation as students navigate through the site.
3. **Illuminated Journey Architecture**: A glowing timeline track mapping our path from Math Block 204 to the International Grand Finals.
4. **Refined Slate-Monochrome with Metallic Sheen**: A predominantly rich graphite/slate-grey palette punctuated by dynamic metallic light sweeps (Olympic Gold, Silver, Bronze) on tournament honors.
5. **Editorial Gravitas**: Dual-hairline architectural borders, classical serif typography, and authentic stippled philosopher engravings derived from the official poster (`ethic olympiad poster mpeo.png`).
6. **Mobile-First Reality, Desktop-First Spectacle**: The cinematic motion design is real, but it is a Tier-A experience reserved for desktop/high-power viewing. The actual primary audience — a phone scanning a QR code at a LifeCon table — gets an explicit "Lite Mode" tier: static fades instead of physics, no scroll-jacking parallax, no cursor-tracked effects, and a sub-2.5s load target. See §4.6.

---

## 2. Color System & Design Tokens

The site embraces a sleek dark-slate aesthetic with warm cream/parchment accents and metallic awards.

### 2.1 Color Palette Matrix

| Token Name | Hex Code | HSL | Semantic Role |
| :--- | :--- | :--- | :--- |
| `--color-bg-primary` | `#0E1013` | `216°, 15%, 7%` | Obsidian dark canvas for splash screen & high-contrast dark sections |
| `--color-bg-secondary` | `#16191E` | `218°, 14%, 10%` | Elevated card and container background |
| `--color-bg-slate-card` | `#21252C` | `218°, 14%, 15%` | Interactive card surfaces with soft ambient lighting |
| `--color-bg-parchment` | `#F6F4ED` | `45°, 30%, 95%` | Warm antique paper background for editorial light modules |
| `--color-bg-card-light` | `#FFFFFF` | `0°, 0%, 100%` | Crisp parchment card surfaces with soft drop shadows |
| `--color-border-subtle` | `rgba(255, 255, 255, 0.08)` | — | Hairline card borders and dividers |
| `--color-border-parchment` | `#D8D2C4` | `41°, 20%, 81%` | Editorial dual-hairline borders on light sections |
| `--color-gold-primary` | `#D4AF37` | `46°, 65%, 52%` | Classical Olympic Gold / Grand Finals highlight / Crown accent |
| `--color-gold-hover` | `#F3CE5E` | `45°, 86%, 66%` | Button hover state and luminous highlights |
| `--color-gold-glow` | `rgba(212, 175, 55, 0.25)`| — | Radial ambient glow behind trophies and milestone nodes |
| `--color-silver` | `#C0C7D0` | `213°, 14%, 78%` | 2nd Place TKE Invitational badge & secondary metallic |
| `--color-bronze` | `#CD7F32` | `29°, 61%, 50%` | 3rd Place Senior Ethics Olympiad Bronze Medalist badge |
| `--color-olive-laurel` | `#4F6052` | `131°, 10%, 34%` | Watermark laurel foliage, tag pills, leaf motifs |
| `--color-text-primary` | `#F5F6F8` | `220°, 14%, 97%` | Primary text on dark backgrounds |
| `--color-text-secondary` | `#A8B0BC` | `216°, 10%, 70%` | Secondary labels and metadata |
| `--color-text-dark` | `#1A1D20` | `210°, 10%, 11%` | Primary body text on parchment surfaces |
| `--color-text-muted-dark`| `#5A626C` | `213°, 9%, 39%` | Subtitles and annotations on light surfaces |

---

## 3. Typography Hierarchy

```
Display & Splash Titles: "Cinzel" / "Playfair Display" / "Bodoni Moda" (All-Caps, Tracked, Monumental)
Editorial Subheadings:   "Cormorant Garamond" (Classic Italic, Serif Elegance)
Body & Data Text:        "Spectral" / "Inter" (Crisp, High Legibility across all screens)
Badges & Timelines:      "Outfit" / Tracked Small-Caps Serif
```

### 3.1 Typographic Scale & Styles

| Level | Font Family | Size (Desktop / Mobile) | Weight | Letter Spacing | Styling |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cinematic Splash** | `Cinzel` / `Bodoni` | `72px / 40px` | `800` | `+0.12em` | Monumental Uppercase (`MODEL PHILOSOPHY ETHICS OLYMPIAD`) |
| **Hero Master Title** | `Cinzel` | `54px / 32px` | `700` | `+0.08em` | Uppercase with dual-line borders |
| **Section Header** | `Cinzel` | `36px / 26px` | `600` | `+0.05em` | Uppercase with flanking gold stars (`✦`) |
| **Dark Box Header** | `Cinzel` | `20px / 18px` | `600 Italic` | `+0.10em` | Uppercase (`2026 COMPETITIONS`, `SOCIETY HIGHLIGHTS`) |
| **Timeline Node Head** | `Cinzel` / `Playfair`| `22px / 18px` | `700` | `+0.04em` | Milestone title & tournament name |
| **Match Step Title** | `Playfair Display` | `20px / 17px` | `600` | `+0.02em` | Step Name (`1. Ethical Presentation (5 min)`) |
| **Parchment Subhead** | `Playfair Display` | `22px / 19px` | `600 Italic` | `0` | Title Case (`No prior experience needed`) |
| **Body Text** | `Spectral` / `Inter` | `16px / 15px` | `400` | `+0.01em` | Line height `1.65` for effortless reading |
| **Logistics Header** | `Cinzel` | `18px / 16px` | `600 Italic` | `+0.06em` | Uppercase (`WEDNESDAY 3-4:30 • MATH BLOCK ROOM 204`) |
| **Contact Labels** | `Spectral` | `14px / 13px` | `500 Italic` | `0` | Name in Small-Caps + Email link |

---

## 4. Signature Animation & Motion Architecture

### 4.1 The Cinematic Entrance & Kinetic Text Fall
- **Initial State (0% Scroll / Page Load)**:
  - The viewport is dominated by a deep obsidian background with an ambient golden radial vignette.
  - The monumental title **`MODEL PHILOSOPHY ETHICS OLYMPIAD`** glows in high-contrast ivory and polished gold serif characters with subtle breathing luminescence.
  - A discreet pulsating prompt at the bottom: `[ SCROLL TO DELIBERATE  ↓ ]`.

- **Kinetic Physics-Driven Fall Transition (On Scroll / Interaction)**:
  - As the user initiates downward scroll, the massive headline splits into individual character tokens (`M`, `O`, `D`, `E`, `L`, ...).
  - Each letter is assigned an individual physics mass and slight pseudo-random 3D rotational tilt (`rotateX`, `rotateZ`, `translateY`).
  - **The Kinetic Drop**: The characters tumble downward with natural gravity acceleration (`ease-in` transitioning into a damped rebound), dissolving into subtle stardust particles as they cascade off-screen.
  - **Seamless Morph**: Simultaneously, the streamlined compact title logo smoothly docks into the sticky glassmorphism navbar at the top of the screen (`opacity: 0 -> 1; translateY: -20px -> 0px`).

### 4.2 Multi-Layer Parallax Hero Scroll
As the landing splash completes its kinetic exit, the page glides into the Parallax Hero stage composed of 3 distinct spatial layers:

```
[Layer 0: Deep Background (Speed: 0.15x)]
- Greek Doric column line art & translucent laurel watermarks drift slowly upward.

[Layer 1: Mid-Ground Elements (Speed: 0.45x)]
- Floating classical stars (✦) and soft gold bokeh particles drifting with inertial lag.
- The dual-hairline gold border rules drawing themselves outward horizontally.

[Layer 2: Foreground Focal Plane (Speed: 1.0x)]
- Left: High-resolution squad photo in front of the campus globe sculpture, emerging with a gentle 3D perspective tilt.
- Right: Dark charcoal spotlight boxes (`2026 COMPETITIONS`, `SOCIETY HIGHLIGHTS`) elevating into position with crisp easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
```

### 4.3 Visual Journey Timeline Animation ("The Road to Grand Finals")
- **Illuminated Vertical Spine**: A glowing golden vertical connecting line that dynamically fills downwards as the user scrolls into view (`height: 0% -> 100%`).
- **Pulsing Milestone Nodes**:
  - Each phase card (Phase 1 Foundations -> Phase 2 TKE 🥈 -> Phase 3 Senior Olympiad 🥉 -> Phase 4 Grand Finals 🌐 -> Phase 5 2027 Roster) lights up sequentially when the scroll line reaches its node.
  - Nodes feature metallic medal icons with a radiant ambient pulse glow (`box-shadow: 0 0 25px var(--color-gold-glow)`).

### 4.4 Match Format Stepper & Round Walkthrough
- **4-Step Sequential Connected Flow**:
  - Cards arranged in a clean horizontal/vertical progression with step numbers (`01`, `02`, `03`, `04`) in tracked small-caps gold serif.
  - **Time Badge Pill**: Glowing amber badge indicating the exact time limit for each phase (`5 MIN`, `3 MIN`, `3 MIN`, `10 MIN`).
  - **Hover / Active State**: Hovering over a step illuminates the card with a soft slate glow and reveals key tactical goals for that phase.

### 4.5 Micro-Animations & Interactive Sheens
1. **Metallic Foil Light Sweep**:
   - On the **Accomplishments** cards, a diagonal linear-gradient sheen (`rgba(255,255,255,0.3)`) sweeps smoothly across the cards when they enter the viewport or on mouse hover.
2. **Crowned Socrates Bust Parallax Float**:
   - The classical crowned philosopher illustration gently tilts in 3D space tracking cursor movement (`perspective: 1000px; rotateY(calc(var(--mouse-x) * 8deg))`).
3. **Lady Justice Scales Equilibrium Motion**:
   - The vector scales icon (`⚖`) performs a subtle harmonic oscillation (swaying ±2 degrees) on scroll, settling into perfect equilibrium.
4. **Dual-Hairline Frame Reveal**:
   - Section headers expand their dual-line framing rules horizontally from center (`transform: scaleX(0) -> scaleX(1)`) via intersection observer triggers.

### 4.6 Adaptive Performance Tiering: "Full Cinematic" vs. "Lite Mode"

The realistic primary traffic source for this site is a **phone scanning a QR code at a LifeCon table**, over convention wifi, for a 5–10 second glance before moving to the next booth. The full motion spec in 4.1–4.5 is designed for a desktop/kiosk viewing context and is the *wrong default* for that scenario — scroll-jacking parallax, letter-physics splashes, and cursor-tracked 3D tilt either can't run on a touch device (no cursor) or actively slow down the first thing a prospective member sees. Rather than scaling the cinematic experience down uniformly, the site ships two explicit rendering tiers and selects between them before first paint.

**Tier Detection (evaluated once, before hero render):**
```
IS_LITE_MODE = (
     matchMedia('(max-width: 768px)').matches
  OR matchMedia('(pointer: coarse)').matches
  OR matchMedia('(prefers-reduced-motion: reduce)').matches
  OR navigator.deviceMemory <= 4                 // when available
  OR navigator.connection?.effectiveType in ['slow-2g','2g','3g']  // when available
)
```
`prefers-reduced-motion` always wins regardless of device class — a desktop user with that setting gets Lite Mode too. Detection runs synchronously in a tiny inline `<head>` script (no framework dependency) so there is no flash of the wrong tier.

**Tier A — Full Cinematic (desktop, high-power devices, fast network):**
Everything specified in 4.1–4.5 as written: kinetic letter-fall splash, 3-layer parallax, cursor-tracked bust tilt, continuous pulse/oscillation loops, foil sweep on hover.

**Tier B — Lite Mode (mobile, touch, reduced-motion, low-memory, or slow connection):**
| Full Cinematic Behavior | Lite Mode Replacement |
| :--- | :--- |
| Kinetic letter-physics splash, tumble + dissolve | Single CSS `opacity`/`translateY` fade-in of the static title (~400ms, one easing curve, no per-letter JS) directly into the hero — no separate splash phase blocking content |
| 3-layer scroll-driven parallax (0.15x / 0.45x / 1.0x) | Layers render as a normal static stacked layout; no scroll-position transform listeners at all |
| Cursor-tracked 3D bust tilt (`rotateY` from mouse-x) | Static illustration; tilt logic doesn't even load (no pointer to track on touch) |
| Continuous scales oscillation, pulsing timeline nodes | One-time reveal animation on scroll-into-view (IntersectionObserver, fires once), then settles — no infinite loop running in the background |
| Metallic foil hover-sweep on cards | Sweep plays once on first viewport entry instead of on hover (touch has no hover state) |
| Dual-hairline scaleX reveal | Kept as-is — cheap, one-shot, no perf cost |

**Asset & bundle discipline for Lite Mode:**
- All parallax/physics/tilt logic lives in a separate module that Tier A dynamically `import()`s at runtime — Tier B never downloads that JS at all, not even unused.
- Hero squad photo and philosopher-etching images ship as responsive `srcset` sets; mobile gets a compressed variant (target ≤150KB) instead of the desktop high-res source.
- Font loading capped at 2 families on Lite Mode (drop the tertiary display face) with `font-display: swap` so text is never blocked on font fetch over convention wifi.

**Target budget (Lite Mode, throttled Fast 3G):** Largest Contentful Paint < 2.5s, total JS ≤ 150KB gzipped before the hero is interactive. The goal is that a student scanning the booth QR code sees the title, the accomplishments, and a CTA before they'd plausibly walk away — the cinematic version is a reward for desktop visitors doing a deeper look later, not a gate in front of the mobile-first audience that actually drives sign-ups.

---

## 5. UI Component Architecture & Layout Specifications

### 5.1 Top Bar & Header (`<TopBanner>` & `<Navbar>`)
- **Top Banner**: Obsidian strip: `ETHICS OLYMPIAD` • `* MPEO *` • `LIFECON 2026 RECRUITMENT`.
- **Glassmorphism Navbar**:
  - Left: Omega Crest (`Ω`) + `MODEL PHILOSOPHY ETHICS OLYMPIAD`.
  - Center: Clean navigation links (`About`, `Accomplishments`, `Journey`, `Format`, `Topics`, `Logistics`, `Team`, `FAQ`).
  - Right: `Register on CIMS` gold pill CTA with radiant hover glow — links/scrolls to the Logistics & QR panel (§5.4a), not a live registration action; see `content-design.md` §3.2.

### 5.2 Hero & Master Title Block (`<Hero>`)
- **Poster-Accurate Layout with Parallax Depth**:
  - Dual horizontal rules enclosing `MODEL PHILOSOPHY ETHICS OLYMPIAD ✦`.
  - Meeting time pill: `✦ WEDNESDAY 3-4:30 | MATH BLOCK ROOM 204 ✦`.
  - **Left**: Framed squad photograph with metallic laurel badge and `Register on CIMS` / `Explore Accomplishments` buttons, plus small-print clarifying the site is informational (registration happens on CIMS).
  - **Right**:
    - **`2026 COMPETITIONS` Box**: Senior Ethics Olympiad Bronze Medalist & TKE Invitational highlights.
    - **`SOCIETY HIGHLIGHTS` Box**: Verbatim poster text regarding competition preparation and welcoming all experience levels.

### 5.3 Accomplishments & International Grand Finals Spotlight (`<Accomplishments>`)
- **Visual Design**: Multi-tier pedestal cards:
  1. 🥈 **2nd Place** — *TKE Ethics Fall Invitational* (Silver leaf badge with light-sweep effect).
  2. 🥉 **3rd Place** — *Senior School Ethics Olympiad* (Bronze Medalist / Finalist ribbon).
  3. 🌐 **International Grand Finals — August 29, 2026** — Global champion stage feature with gold foil shimmer border. **Copy/animation must read as anticipation (countdown-style), not a completed result** — the event postdates the TKE and Senior Olympiad results but is still upcoming.

### 5.3a Student Voice Spotlight (`<TestimonialQuote>`) — *New*
- **Visual Design**: A single large pull-quote module placed directly beneath the Accomplishments cards — oversized italic serif quotation mark in gold, quote in `Cormorant Garamond` italic, attribution in tracked small-caps below.
- **Content status**: Quote and name are **pending an interview** with a competing team member — component ships with the placeholder copy from `content-design.md` §Section 6 until real content is supplied. Do not launch with the placeholder visible to LifeCon visitors.
- **Rationale**: Placed immediately after the medal cards so the achievement stats are followed by a human voice before the visitor's attention moves on.

### 5.4 Road to Grand Finals Visual Timeline (`<Timeline>`)
- **Visual Design**: Sleek dark slate cards positioned along an illuminated gold track, complete with tournament dates, podium trophies, a pulsing "upcoming" state on the **August 29, 2026 Grand Finals** node (distinct visual treatment from the completed TKE/Senior Olympiad nodes — e.g. an animated countdown chip rather than a static checkmark), and a highlight node for the upcoming **2027 Senior Ethics Olympiad**.

### 5.4a Logistics & QR Registration Panel (`<LogisticsQR>`) — *New, moved up in page order*
- **Placement**: Immediately after the Hero, before the "What is the Ethics Olympiad?" explainer — see `content-design.md` §2 site map rationale (priority information above the fold).
- **Visual Design**: Parchment bulletin module (as in the former §5.7) extended with a **QR code panel**:
  - A framed square reserved for a QR code image, **placeholder for now** (`QR CODE — COMING SOON` label in-frame) — the real code will encode the deployed site's own URL and can only be generated once it's live (e.g. on GitHub Pages); swap-in is a drop-in asset replacement, no layout change. Styled with the same dual-hairline gold corner-tick frame used on section header reveals, so the placeholder reads as designed rather than broken/pasted-in.
  - Caption above/below the code: `Scan to Visit MPEO Online`.
  - Directly below the QR panel: the compact `Express Interest` email field (see §5.9) as a secondary, lower-emphasis action.
- Time: **Wednesdays 3:00 PM – 4:30 PM**
- Room: **Math Block, Room 204**
- "No prior experience needed" assurance banner retained from the original module.

### 5.5 Anatomy of a Match Stepper (`<MatchFormat>`)
- **Visual Design**: 4 connected editorial cards displaying the round sequence (Presentation, Response, Commentary, Judges' Q&A) with duration badges and philosopher commentary notes.

### 5.6 Ethical Frameworks & Curriculum Grid (`<Curriculum>`)
- **Layout**: 10 interactive theory cards matching the poster's exact syllabus:
  - *Ethics of AI*, *Biomedical Ethics*, *Animal Rights*, *Personhood*, *Ethic of War*, *Rawlsian Justice*, *Aristotelian Virtue Ethics*, *Kantian Deontology*, *Utilitarianism*, *Care Ethics*.
- **Visual Style**: Dark slate cards with engraved philosopher thumbnails and hover elevation.

### 5.8 Leadership Team Grid (`<Leadership>`)
- **Profile cards for Student Leaders with Grade Badges**:
  - [student] (Grade 11) — `[email removed]`
  - [student] (Grade 12) — `[email removed]`
  - [student] (Grade 11) — `[email removed]`
  - [student] (Grade 12) — `[email removed]`
  - [student] (Grade 10) — `[email removed]`
  - [student] (Grade 11) — `[email removed]`

### 5.9 Express Interest Mini-Form (`<ExpressInterest>`) — *Revised, replaces the old full LifeCon sign-up form*
- **Visual Design**: A single-field, low-emphasis inline form — one email input + `Notify Me ✦` gold-outline button (not solid-fill, to visually subordinate it to the primary `Register on CIMS` CTA). Appears twice: compact, under the QR panel (§5.4a), and repeated in the footer for visitors who scroll all the way down.
- **Mechanism**: On submit, the form does a `fetch(POST)` to a Google Apps Script Web App deployment URL, which appends the email as a new row in a shared Google Sheet (and optionally emails a leadership alias). No backend hosting required — works from a static GitHub Pages site. See `content-design.md` §13 for the full setup steps and trade-offs. This replaces the earlier `localStorage`-only draft, which never actually reached leadership from a visitor's own device.
- **Confirmation state**: On successful submit, swap the form for a brief inline message (`"Got it — added to our interest list. See you Wednesday!"`) with a soft gold checkmark fade-in — no page reload, no modal.

---

## 6. Asset Mapping Table

| File Name in `existing resources/` | Visual Asset Role | Target Site Component |
| :--- | :--- | :--- |
| `ethic olympiad poster mpeo.png` | **Master Design Reference** | Overall stylistic baseline & layout guide |
| `EthicsOlympiadHorizontalLogo.jpg` | Official Brand Logo | Header & partner accreditation bar |
| `Screenshot 2026-08-16 at 3.15.46 PM.png` | Team Photo (High-Res) | Hero image showcase & team section |
| `Screenshot 2026-08-16 at 3.42.21 PM.png` | Omega Crest Emblem (`Ω`) | Brand logo, watermark, and favicon |
| `Screenshot 2026-08-16 at 3.14.07 PM.png` | Philosopher Etchings | Theory cards (Bentham, Aristotle, etc.) |
