# Model Philosophy Ethics Olympiad (MPEO) — Aesthetic & Visual Design Specification

> **Document Version:** 1.1 *(Updated to reflect the official `ethic olympiad poster mpeo.png` master design)*  
> **Target Event:** LifeCon Student Recruitment  
> **Project Scope:** Official Informational & Recruitment Web Platform  
> **Design Thesis:** *Classical Socratic Academia meets Modern Editorial Elegance*

---

## 1. Executive Aesthetic Overview

The visual identity of the **Model Philosophy Ethics Olympiad (MPEO)** website bridges classical philosophical tradition with contemporary academic excellence, derived directly from the official **`ethic olympiad poster mpeo.png`**. 

The design aesthetic combines rich dark obsidian/slate header blocks with warm textured parchment, classical Greco-Roman motifs (the crowned Socrates engraving, Lady Justice with scales, olive/laurel leaf watermarks), sharp editorial double-line framing, and four-point celestial stars (`✦`). The digital platform translates this authoritative print editorial into an interactive, high-converting digital experience for LifeCon.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    ETHICS OLYMPIAD  •  * MPEO *                         │
│   ═══════════════════════════════════════════════════════════════════   │
│             M O D E L   P H I L O S O P H Y   E T H I C S               │
│                     O L Y M P I A D   ✦                                 │
│   ═══════════════════════════════════════════════════════════════════   │
│   [✦ WEDNESDAY 3-4:30 | MATH BLOCK 204]    [ 2026 COMPETITIONS ]        │
│   [   Framed Team Photograph          ]    [ SOCIETY HIGHLIGHTS ]       │
│   [   Lady Justice & Scales Feature   ]    [ Crowned Philosopher Bust ] │
└─────────────────────────────────────────────────────────────────────────┘
```

### Core Design Principles
1. **Classical Academic Authority**: High-contrast Didot/Cinzel serif typography, tracked uppercase headlines, and crisp dual-hairline framing evoke the prestige of classical philosophical salons and academic journals.
2. **Prestige & Accomplishment**: Dark charcoal trophy cards with metallic gold, silver, and bronze accents highlighting our **2nd Place TKE Invitational**, **3rd Place Senior Ethics Olympiad (Bronze Medalist)**, and **International Grand Finals Invitation**.
3. **Approachable & Non-Intimidating**: Clean card layouts and warm parchment tones ensure complex moral philosophies feel exciting, modern, and welcoming ("No prior experience needed").
4. **Cohesive Visual Motifs**: Stippled engravings, scales of justice, crown emblems, laurel foliage watermarks, and rosette asterisks (`* MPEO *`) directly carried over from the official poster.

---

## 2. Color System & Design Tokens

The palette is derived directly from the poster's high-contrast charcoal black, cream/parchment paper, bronze/gold awards, and laurel greenery.

### 2.1 Color Palette Matrix

| Token Name | Hex Code | HSL | Semantic Role |
| :--- | :--- | :--- | :--- |
| `--color-bg-primary` | `#0E1013` | `216°, 15%, 7%` | Obsidian dark canvas for hero headers & high-contrast cards |
| `--color-bg-secondary` | `#171A1F` | `218°, 13%, 10%` | Elevated dark container / badge background |
| `--color-bg-parchment` | `#F6F4ED` | `45°, 30%, 95%` | Warm antique paper background for editorial light sections |
| `--color-bg-card-light` | `#FFFFFF` | `0°, 0%, 100%` | Crisp parchment card surfaces with soft shadows |
| `--color-border-dark` | `#2D3139` | `220°, 12%, 20%` | Framing lines on dark surfaces |
| `--color-border-parchment` | `#D8D2C4` | `41°, 20%, 81%` | Editorial dual-hairline borders on light sections |
| `--color-gold-primary` | `#D4AF37` | `46°, 65%, 52%` | Classical Olympic Gold / Grand Finals highlight / Crown accent |
| `--color-gold-hover` | `#F3CE5E` | `45°, 86%, 66%` | Button hover state and luminous highlights |
| `--color-silver` | `#C0C7D0` | `213°, 14%, 78%` | 2nd Place TKE Invitational badge & secondary metallic |
| `--color-bronze` | `#CD7F32` | `29°, 61%, 50%` | 3rd Place Senior Ethics Olympiad Bronze Medalist badge |
| `--color-olive-laurel` | `#4F6052` | `131°, 10%, 34%` | Watermark laurel foliage, tag pills, leaf motifs |
| `--color-charcoal-box` | `#22252A` | `218°, 9%, 15%` | Poster-accurate dark callout box background |
| `--color-text-primary` | `#F5F6F8` | `220°, 14%, 97%` | Primary text on dark backgrounds |
| `--color-text-secondary` | `#A8B0BC` | `216°, 10%, 70%` | Secondary labels and metadata |
| `--color-text-dark` | `#1A1D20` | `210°, 10%, 11%` | Primary body text on parchment surfaces |
| `--color-text-muted-dark`| `#5A626C` | `213°, 9%, 39%` | Subtitles and annotations on light surfaces |

---

## 3. Typography System & Font Pairings

```
Display & Master Titles: "Cinzel" / "Playfair Display" / "Bodoni Moda" (All-Caps, Tracked, High-Contrast)
Editorial Subheadings:   "Cormorant Garamond" (Classic Italic, Serif Elegance)
Body & Data Text:        "Spectral" / "Inter" (Crisp, High Legibility across all screens)
Badges & Logistics:      "Outfit" / Tracked Small-Caps Serif
```

### 3.1 Typographic Hierarchy & Specifications

| Element | Font | Size (Desktop / Mobile) | Weight | Letter Spacing | Styling |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Top Banner Tag** | `Cinzel` | `14px / 12px` | `600` | `+0.25em` | Uppercase (`ETHICS OLYMPIAD • * MPEO *`) |
| **Master Headline** | `Cinzel` / `Bodoni` | `54px / 34px` | `700` | `+0.08em` | Uppercase (`MODEL PHILOSOPHY ETHICS OLYMPIAD`) |
| **Section Title** | `Cinzel` | `36px / 26px` | `600` | `+0.05em` | Uppercase with side hairline rules (`— SECTION —`) |
| **Dark Box Header** | `Cinzel` | `20px / 18px` | `600 Italic` | `+0.10em` | Uppercase (`2026 COMPETITIONS`, `SOCIETY HIGHLIGHTS`) |
| **Parchment Subheads**| `Playfair Display` | `22px / 19px` | `600 Italic` | `0` | Title Case (`No prior experience needed`) |
| **Body (Editorial)** | `Spectral` / `Inter` | `16px / 15px` | `400` | `+0.01em` | Line height `1.65` for optimal readability |
| **Logistics Header** | `Cinzel` | `18px / 16px` | `600 Italic` | `+0.06em` | Uppercase (`WEDNESDAY 3-4:30 • MATH BLOCK ROOM 204`) |
| **Contact Details** | `Spectral` | `14px / 13px` | `500 Italic` | `0` | Name in Small-Caps + Email link |

---

## 4. Visual Motifs, Iconography & Graphic Assets

Derived directly from `ethic olympiad poster mpeo.png` and associated project media:

1. **The Crowned Socratic Bust**:
   - High-detail stippled/woodcut engraving of the classical philosopher crowned with a hand-drawn crown doodle, symbolizing intellectual mastery and competitive victory.
   - Positioned as an editorial hallmark illustration in the highlights / curriculum area.
2. **Lady Justice & The Scales (`⚖`)**:
   - Dramatic bronze sculpture of Lady Justice blindfolded holding the balanced scales.
   - Vector scales emblem inside a dark hexagon badge used for moral deliberation callouts.
3. **Double-Line Framing Dividers**:
   - Thick-and-thin parallel rules framing the master title and section breaks, matching the classic poster header.
4. **Four-Point Classical Stars (`✦`) & Rosette Asterisks (`*`)**:
   - Star ornaments flanking dates, room numbers, and category titles.
5. **Team Globe Photograph**:
   - High-resolution team photo in front of the campus stainless-steel globe sculpture, framed with thin dark borders and a gold laurel ribbon.
6. **Laurel Leaf Watermarks**:
   - Translucent olive leaf branch illustrations (`opacity: 0.12`) framing the outer margins of parchment sections.

---

## 5. UI Component Architecture & Layout Specifications

### 5.1 Top Bar & Header (`<TopBanner>` & `<Navbar>`)
- **Top Announcement Bar**:
  - Dark obsidian strip: `ETHICS OLYMPIAD` • `* MPEO *` • `LIFECON 2026 RECRUITMENT`.
- **Glassmorphism Nav Bar**:
  - Left: Omega Laurel logo + `MPEO`.
  - Center: Nav links (`About`, `Accomplishments`, `Curriculum`, `Logistics`, `Team`, `FAQ`).
  - Right: `Join MPEO at LifeCon` gold accent pill CTA.

### 5.2 Hero & Master Title Block (`<Hero>`)
- **Poster-Accurate Master Header**:
  - Dual horizontal rules enclosing `MODEL PHILOSOPHY ETHICS OLYMPIAD ✦`.
- **Two-Column Interactive Hero Grid**:
  - **Left**: Meeting time badge (`✦ WEDNESDAY 3–4:30 | MATH BLOCK ROOM 204 ✦`), framed squad photo in front of the globe sculpture, and direct registration CTAs.
  - **Right**: Dark charcoal spotlight cards:
    - **2026 Competitions Summary**: Highlighting the Bronze Medal Finalist award at Senior Ethics Olympiad, Silver at TKE Invitational, and Grand Finals Invitation.
    - **Society Highlights**: Direct quote on competitive preparation & inclusive community.

### 5.3 Accomplishments & International Grand Finals Spotlight (`<Accomplishments>`)
- **Visual Design**: Multi-tier pedestal cards:
  1. 🥈 **2nd Place** — *TKE Ethics Fall Invitational* (Silver leaf emblem).
  2. 🥉 **3rd Place** — *Senior School Ethics Olympiad* (Bronze Medalist / Finalist ribbon).
  3. 🌐 **International Grand Finals Invitation** — Global champion stage feature with gold foil shimmer border.

### 5.4 Ethical Frameworks & Curriculum Grid (`<Curriculum>`)
- **Layout**: 6 interactive theory cards matching the poster's exact syllabus:
  - **Utilitarianism** (Bentham & Mill — Consequentialism, utility, higher/lower pleasures)
  - **Kantian Deontology** (Kant — Categorical Imperative, universalizability, duty)
  - **Aristotelian Virtue Ethics** (Aristotle — Telos, eudaimonia, Golden Mean)
  - **Care Ethics** (Nel Noddings — Relational empathy, compassion)
  - **Rawlsian Justice** (John Rawls — Veil of Ignorance, fairness)
  - **Ethics of War & Applied Ethics** (Just War theory, AI Ethics, Bioethics, Animal Rights, Personhood)
- **Visual Style**: Charcoal cards with philosopher portrait thumbnails and interactive flip/expand drawer for thought experiments.

### 5.5 Interactive "Socratic Crucible" Dilemma Sampler (`<InteractiveCrucible>`)
- A fast 30-second moral dilemma widget designed for students visiting the LifeCon booth on mobile or desktop to cast a vote and see real-time philosophical breakdowns.

### 5.6 Logistics & Society Highlights (`<Logistics>`)
- **Parchment Bulletin Module**:
  - Time: **Wednesdays 3:00 PM – 4:30 PM**
  - Room: **Math Block, Room 204**
  - "No prior experience needed" assurance banner.
  - Preparation pipeline for the **2027 Senior Ethics Olympiad**.

### 5.7 Leadership Team Grid (`<Leadership>`)
- **Cards for all 5 Student Leaders** (with name styling, email links, and role badges):
  - [student] (`[email removed]`)
  - [student] (`[email removed]`)
  - [student] (`[email removed]`)
  - [student] (`[email removed]`)
  - [student] (`[email removed]`)

### 5.8 LifeCon Recruitment Form & Floating CTA Bar
- Sticky recruitment bottom bar + full registration form with grade selector and topic interests.

---

## 6. Asset Mapping Table

| File Name in `existing resources/` | Visual Asset Role | Target Site Component |
| :--- | :--- | :--- |
| `ethic olympiad poster mpeo.png` | **Master Design Reference** | Overall stylistic baseline & layout guide |
| `EthicsOlympiadHorizontalLogo.jpg` | Official Brand Logo | Header & partner accreditation bar |
| `Screenshot 2026-08-16 at 3.15.46 PM.png` | Team Photo (High-Res) | Hero image showcase & team section |
| `Screenshot 2026-08-16 at 3.42.21 PM.png` | Omega Crest Emblem (`Ω`) | Brand logo, watermark, and favicon |
| `Screenshot 2026-08-16 at 3.14.07 PM.png` | Philosopher Etchings | Theory cards (Bentham, Aristotle, etc.) |
