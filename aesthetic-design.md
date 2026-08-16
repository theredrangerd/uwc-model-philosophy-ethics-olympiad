# Model Philosophy Ethics Olympiad (MPEO) — Aesthetic & Visual Design Specification

> **Document Version:** 1.3 *(Comprehensive Edition: Cinematic Splash, Kinetic Fall, Parallax Hero, Visual Timeline & Match Motion Architecture)*  
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
│ [LAYER 3: 4-STEP MATCH ANATOMY & CASE ARCHIVE]                          │
│  • Sequential Step Cards with Socratic Dialogue Time Indicators         │
│  • Textured Parchment Case Brief Accordions & Dual-Hairline Borders     │
└─────────────────────────────────────────────────────────────────────────┘
```

### Core Design Principles
1. **Cinematic First Impression**: An unmissable, full-screen opening splash screen with monumental typography that shatters / kinetic-falls away into the sticky header upon user interaction.
2. **Multi-Layer Parallax Depth**: Smooth, inertial scroll-driven parallax that creates an immersive, three-dimensional physical sensation as students navigate through the site.
3. **Illuminated Journey Architecture**: A glowing timeline track mapping our path from Math Block 204 to the International Grand Finals.
4. **Refined Slate-Monochrome with Metallic Sheen**: A predominantly rich graphite/slate-grey palette punctuated by dynamic metallic light sweeps (Olympic Gold, Silver, Bronze) on tournament honors.
5. **Editorial Gravitas**: Dual-hairline architectural borders, classical serif typography, and authentic stippled philosopher engravings derived from the official poster (`ethic olympiad poster mpeo.png`).

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

### 4.4 Match Format Stepper & Interactive Round Walkthrough
- **4-Step Sequential Connected Flow**:
  - Cards arranged in a clean horizontal/vertical progression with step numbers (`01`, `02`, `03`, `04`) in tracked small-caps gold serif.
  - **Time Badge Pill**: Glowing amber badge indicating the exact time limit for each phase (`5 MIN`, `3 MIN`, `3 MIN`, `10 MIN`).
  - **Hover / Active State**: Hovering over a step illuminates the card with a soft slate glow and reveals practical tactical tips for that round phase.

### 4.5 Micro-Animations & Interactive Sheens
1. **Metallic Foil Light Sweep**:
   - On the **Accomplishments** cards, a diagonal linear-gradient sheen (`rgba(255,255,255,0.3)`) sweeps smoothly across the cards when they enter the viewport or on mouse hover.
2. **Crowned Socrates Bust Parallax Float**:
   - The classical crowned philosopher illustration gently tilts in 3D space tracking cursor movement (`perspective: 1000px; rotateY(calc(var(--mouse-x) * 8deg))`).
3. **Lady Justice Scales Equilibrium Motion**:
   - The vector scales icon (`⚖`) performs a subtle harmonic oscillation (swaying ±2 degrees) on scroll, settling into perfect equilibrium.
4. **Dual-Hairline Frame Reveal**:
   - Section headers expand their dual-line framing rules horizontally from center (`transform: scaleX(0) -> scaleX(1)`) via intersection observer triggers.

---

## 5. UI Component Architecture & Layout Specifications

### 5.1 Top Bar & Header (`<TopBanner>` & `<Navbar>`)
- **Top Banner**: Obsidian strip: `ETHICS OLYMPIAD` • `* MPEO *` • `LIFECON 2026 RECRUITMENT`.
- **Glassmorphism Navbar**:
  - Left: Omega Crest (`Ω`) + `MODEL PHILOSOPHY ETHICS OLYMPIAD`.
  - Center: Clean navigation links (`About`, `Accomplishments`, `Journey`, `Format`, `Topics`, `Logistics`, `Team`, `FAQ`).
  - Right: `Join MPEO at LifeCon` gold pill CTA with radiant hover glow.

### 5.2 Hero & Master Title Block (`<Hero>`)
- **Poster-Accurate Layout with Parallax Depth**:
  - Dual horizontal rules enclosing `MODEL PHILOSOPHY ETHICS OLYMPIAD ✦`.
  - Meeting time pill: `✦ WEDNESDAY 3-4:30 | MATH BLOCK ROOM 204 ✦`.
  - **Left**: Framed squad photograph with metallic laurel badge and instant registration buttons.
  - **Right**:
    - **`2026 COMPETITIONS` Box**: Senior Ethics Olympiad Bronze Medalist & TKE Invitational highlights.
    - **`SOCIETY HIGHLIGHTS` Box**: Verbatim poster text regarding competition preparation and welcoming all experience levels.

### 5.3 Accomplishments & International Grand Finals Spotlight (`<Accomplishments>`)
- **Visual Design**: Multi-tier pedestal cards:
  1. 🥈 **2nd Place** — *TKE Ethics Fall Invitational* (Silver leaf badge with light-sweep effect).
  2. 🥉 **3rd Place** — *Senior School Ethics Olympiad* (Bronze Medalist / Finalist ribbon).
  3. 🌐 **International Grand Finals Invitation** — Global champion stage feature with gold foil shimmer border.

### 5.4 Road to Grand Finals Visual Timeline (`<Timeline>`)
- **Visual Design**: Sleek dark slate cards positioned along an illuminated gold track, complete with tournament dates, podium trophies, and a highlight node for the upcoming **2027 Senior Ethics Olympiad**.

### 5.5 Anatomy of a Match Stepper (`<MatchFormat>`)
- **Visual Design**: 4 connected editorial cards displaying the round sequence (Presentation, Response, Commentary, Judges' Q&A) with duration badges and philosopher commentary notes.

### 5.6 Ethical Frameworks & Curriculum Grid (`<Curriculum>`)
- **Layout**: 10 interactive theory cards matching the poster's exact syllabus:
  - *Ethics of AI*, *Biomedical Ethics*, *Animal Rights*, *Personhood*, *Ethic of War*, *Rawlsian Justice*, *Aristotelian Virtue Ethics*, *Kantian Deontology*, *Utilitarianism*, *Care Ethics*.
- **Visual Style**: Dark slate cards with engraved philosopher thumbnails and hover elevation.

### 5.7 The Dilemma Archive (`<CaseBriefs>`)
- **Visual Design**: Dual-hairline framed parchment cards presenting real competition dilemmas (Autonomous Medical Triage & CRISPR Gene Drives) with expandable ethical tension breakdowns.

### 5.8 Logistics, Calendar Sync & Booth QR Modal (`<Logistics>` & `<BoothModal>`)
- **Parchment Bulletin Module**:
  - Time: **Wednesdays 3:00 PM – 4:30 PM**
  - Room: **Math Block, Room 204**
  - 1-Tap Google Calendar & Apple Calendar (`.ics`) sync buttons.
  - Interactive "Show Booth QR Code" modal for instant sharing among students.

### 5.9 Leadership Team Grid (`<Leadership>`)
- **Profile cards for all 5 Student Leaders**:
  - [student] (`[email removed]`)
  - [student] (`[email removed]`)
  - [student] (`[email removed]`)
  - [student] (`[email removed]`)
  - [student] (`[email removed]`)

---

## 6. Asset Mapping Table

| File Name in `existing resources/` | Visual Asset Role | Target Site Component |
| :--- | :--- | :--- |
| `ethic olympiad poster mpeo.png` | **Master Design Reference** | Overall stylistic baseline & layout guide |
| `EthicsOlympiadHorizontalLogo.jpg` | Official Brand Logo | Header & partner accreditation bar |
| `Screenshot 2026-08-16 at 3.15.46 PM.png` | Team Photo (High-Res) | Hero image showcase & team section |
| `Screenshot 2026-08-16 at 3.42.21 PM.png` | Omega Crest Emblem (`Ω`) | Brand logo, watermark, and favicon |
| `Screenshot 2026-08-16 at 3.14.07 PM.png` | Philosopher Etchings | Theory cards (Bentham, Aristotle, etc.) |
