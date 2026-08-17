# Model Philosophy Ethics Olympiad (MPEO) — Resources & Socratic Archive Aesthetic Specification

> **Document Version:** 2.0 *(Selected Architecture Edition: Split-Screen Dossier Reader & Google Slides Engine)*  
> **Document Path:** `documentation/resources-aesthetic.md`  
> **Target Audience:** Curious prospective members, active squad competitors, philosophy debaters, and educators seeking deep intellectual materials.  
> **Design Thesis:** *The Oxford Athenaeum meets High-End Editorial Digital Dossier Room*

---

## 1. Executive Vision & Philosophy

### 1.1 Shift in Purpose: From Recruitment Hook to Academic Depth
The main landing page (`index.html`) is engineered for rapid recruitment at LifeCon: high visual impact, fast scanning, tournament prestige, and a clear call-to-action to register on CIMS. 

**The Resources Tab / Socratic Archive serves a fundamentally different purpose:**
- It is the destination for the **curious 10–20%** of students who want to look under the hood.
- It moves beyond marketing slogans to provide **real academic substance**: authentic past tournament case packs, classroom lecture decks, philosophical framework toolkits, and annotated round breakdowns.
- The aesthetic must feel like entering a private, illuminated scholarly archive—intellectually serious, visually captivating, distraction-free, and meticulously organized.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       MPEO SOCRATIC ATHENAEUM ARCHITECTURE                  │
├─────────────────────────────────────────────────────────────────────────────┤
│  [HERO & ARCHIVE NAV]                                                       │
│   • Vault Overview: Case Packs • Lecture Slides • Frameworks • Round Drills │
│   • Global Search & Topic Filter (AI, Bioethics, Climate, Law, Governance)  │
├─────────────────────────────────────────────────────────────────────────────┤
│  [SECTION 1: SPLIT-SCREEN CASE DOSSIER & PDF VIEWER]                        │
│   • Left Pane (40%): Socratic Case Digest, Stakeholders & Dilemma Blueprint │
│   • Right Pane (60%): Embedded PDF Viewer with Page Navigation & Download   │
├─────────────────────────────────────────────────────────────────────────────┤
│  [SECTION 2: CLASSROOM WORKSHOP SLIDESHOWS (GOOGLE SLIDES ENGINE)]          │
│   • Responsive 16:9 Embedded Deck Player with Dual-Hairline Gold Frame      │
│   • Full-Screen Toggle, Deck Selector, Accompanying Speaker/Judge Notes     │
├─────────────────────────────────────────────────────────────────────────────┤
│  [SECTION 3: PHILOSOPHICAL FRAMEWORK CHEATSHEETS & TOOLKITS]                │
│   • Quick-Reference Deontological, Utilitarian, Virtue & Care Ethics Cards │
│   • Printable 1-Page Case Analysis Framework Matrix                         │
├─────────────────────────────────────────────────────────────────────────────┤
│  [SECTION 4: PRACTICE DELIBERATION SUITE]                                   │
│   • 5-Minute Presentation Timer • Random Case Generator • Rubric Breakdown  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Aesthetics & Visual Identity

### 2.1 Moodboard: *The Dark-Mode Socratic Athenaeum*
- **Tone**: Sophisticated, scholarly, rigorous, yet deeply modern and accessible.
- **Palette**: Deep Obsidian (`#0E1013`) and Slate Graphite (`#16191E`, `#21252C`), accented by Warm Antique Parchment (`#F6F4ED`) for reading surfaces and Olympic Gold (`#D4AF37`) for highlights.
- **Atmosphere**: Subtle background column watermarks, fine dual-hairline gold borders, glowing amber/gold category tags, and crisp serif headings that evoke classic academic publishing.
- **Readability Priority**: High contrast, optimized line lengths (65–75 characters), comfortable typography sizing, and generous whitespace for long-form case analysis.

### 2.2 Typographic Hierarchy for Long-Form Reading

| Role | Font Family | Size (Desktop / Mobile) | Weight / Style | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Archive Header** | `Cinzel` | `44px / 28px` | `700` All-Caps | Monumental section titles |
| **Case / Deck Titles** | `Playfair Display` | `24px / 20px` | `600` Title Case | Editorial case headlines |
| **Philosophical Quotes** | `Cormorant Garamond` | `20px / 17px` | `500` Italic | Dilemma epigraphs and judge insights |
| **Case Body & Analysis**| `Spectral` / `Inter` | `16px / 15px` | `400` Regular (1.7 line height) | Extended narrative reading |
| **Metadata & Code Tags**| `Outfit` / `Inter` | `12px / 11px` | `600` Uppercase Tracked | Tags, durations, tournament origins |

---

## 3. Case PDF Architecture: The Split-Screen Dossier Reader

*(Selected Implementation: Option A)*

### 3.1 Design Specification
The case reader employs a synchronized **two-pane split layout** inspired by high-end legal research suites and academic intelligence dossiers:

```
┌────────────────────────────────────────┬────────────────────────────────────────┐
│ LEFT PANE: SOCRATIC CASE DIGEST (40%)  │ RIGHT PANE: EMBEDDED PDF VIEWER (60%)  │
├────────────────────────────────────────┼────────────────────────────────────────┤
│ ✦ CASE 01 • Senior Olympiad 2025       │ [TOOLBAR: Zoom In/Out | Page 1/4 | 📥] │
│ ────────────────────────────────────── │ ┌────────────────────────────────────┐ │
│ The Autonomous Triage Protocol         │ │                                    │ │
│                                        │ │   OFFICIAL COMPETITION CASE PACK   │ │
│ 📖 THE CORE MORAL FRICTION             │ │   SENIOR ETHICS OLYMPIAD 2025      │ │
│ Maximizing QALYs vs Deontological      │ │                                    │ │
│ Non-Discrimination in Emergency ICUs.  │ │   Case 1: The Autonomous Triage... │ │
│                                        │ │                                    │ │
│ 👥 PRIMARY STAKEHOLDERS                │ │   [Verbatim Official Case PDF]     │ │
│ • Critically ill patients & families   │ │                                    │ │
│ • ICU Clinical Ethics Board            │ │                                    │ │
│ • Healthcare Algorithmic Regulators    │ │                                    │ │
│                                        │ │                                    │ │
│ ⚖️ GUIDING SOCRATIC QUESTIONS          │ │                                    │ │
│ 1. Is algorithmic triage ever truly   │ │                                    │ │
│    morally neutral?                    │ │                                    │ │
│ 2. How to account for past disparity?  │ │                                    │ │
│                                        │ └────────────────────────────────────┘ │
│ [ Copy Case Prompt ] [ Print Dossier ] │ [ 📥 Download Official PDF (1.2 MB) ]  │
└────────────────────────────────────────┴────────────────────────────────────────┘
```

### 3.2 Key Technical & UX Capabilities
1. **Left Pane (Curated Digest)**:
   - **Executive Dilemma Synopsis**: Crisp 3-sentence summary of the factual background and ethical stakes.
   - **Stakeholder Impact Grid**: Identifies who bears the harms, who enjoys the benefits, and whose rights are at stake.
   - **Ethical Friction Matrix**: Explains how Utilitarianism, Deontology, and Care Ethics collide in this specific case.
   - **Guiding Questions for Practice**: Official questions assigned to teams by tournament organizers.
2. **Right Pane (Live PDF Engine)**:
   - Built using a responsive `<iframe src="path/to/case.pdf#toolbar=1&navpanes=0">` or `<object data="path/to/case.pdf" type="application/pdf">`.
   - **Integrated Top HUD**: Page navigation, zoom toggle, fullscreen popout (`⛶`), and direct PDF download link.
   - **No-Lag Loading**: Lightweight progressive loading with fallback download button for legacy mobile browsers.
3. **Mobile Adaptive Behavior**:
   - On screens `< 992px`, the layout smoothly transitions from side-by-side split into a stacked accordion:
     - First, the structured summary card with key takeaway pills.
     - Followed by a direct "View Official Case PDF" button and responsive viewer drawer.

### 3.3 Authentic Tournament Case Pack Repository (`assets/ethicsresources/`)

The archive directly links and embeds three authentic, official competition case sets collected from our tournament campaigns:

| Tournament Case Pack | File Location | Size | Associated Team Milestone |
| :--- | :--- | :--- | :--- |
| **Senior High School Ethics Olympiad 2026 Case Set** | `assets/ethicsresources/EthicsOlympiadSHSCases2026.pdf` | `534 KB` | 🥉 **3rd Place Bronze Medalist** / Finalist Award |
| **TKEthics Fall 2025 Invitational Case Set** | `assets/ethicsresources/2025 TKEthics Fall CASE SET.pdf` | `449 KB` | 🥈 **2nd Place Invitational** Silver Trophy |
| **TKEthics International Grand Final 2026 Case Set** | `assets/ethicsresources/Case Set_ TKEthics International Grand Final 2026.pdf` | `314 KB` | 🌐 **International Grand Finals** Bid (Aug 29, 2026) |

Each case in our interactive explorer is mapped directly to its official source page within these three PDF case sets, enabling students to read our structured Socratic breakdown on the left while viewing or downloading the verbatim tournament prompt on the right.

---

## 4. Classroom Slideshow Architecture: Interactive Presentation Engine

*(Selected Implementation: Embedded Presentation Player — Canva & Web Slides)*

### 4.1 Design Specification
Training slide decks used in weekly club meetings (Math Block Room 204) are showcased in a responsive, branded presentation theatre.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ✦ FEATURED WORKSHOP DECK: ETHICS OLYMPIAD TRAINING & STRATEGY ✦             │
├─────────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │                  CANVA / WEB PRESENTATION PLAYER EMBED                  │ │
│ │                         (16:9 Aspect Ratio)                             │ │
│ │                                                                         │ │
│ │               https://www.canva.com/design/DAHDJAJqyf4/...              │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ [⏮ Prev Slide] [Next Slide ⏭]   [⛶ Fullscreen]   [🔗 Open on Canva ↗]       │
├─────────────────────────────────────────────────────────────────────────────┤
│ 💡 SQUAD STRATEGY & JUDGE RUBRIC CORRELATION                                │
│ • "Focus on clear thesis statement in minute 1. Judges reward intellectual  │
│   humility and trade-off acknowledgement over rigid stubbornness."          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Active Presentation Assets
- **Primary Workshop Deck (Canva)**:
  - **Live URL**: `https://www.canva.com/design/DAHDJAJqyf4/USw1uX0zH_7bXgzmmbaBqg/view`
  - **Embed Source**: `https://www.canva.com/design/DAHDJAJqyf4/USw1uX0zH_7bXgzmmbaBqg/view?embed`
  - **Container**: 16:9 CSS aspect ratio box wrapped in a dark slate card with dual-hairline gold architectural borders (`rgba(212, 175, 55, 0.3)`).

### 4.3 Core Features
1. **Responsive 16:9 Frame**: Custom container with CSS `aspect-ratio: 16 / 9`, `border-radius: 12px`, and hardware-accelerated rendering.
2. **Integrated Player Controls**:
   - Built-in slide forward/backward navigation.
   - 1-click **Full Screen Toggle (`⛶`)**.
   - Direct link to **"Open on Canva ↗"** or download presentation copy.
3. **Companion Speaker & Judge Notes**: An expandable accordion below the deck highlighting varsity tips on scoring high points in tournament rounds.

---

## 5. Micro-Delights & Interactive Enhancements

The Resources Hub includes specialized micro-delights engineered for intellectual engagement:

### 5.1 🎲 "Deliberate a Random Case" Generator
- A prominent gold-embossed button with dice icon (`🎲 Deliberate a Random Case`).
- When clicked, triggers an animated 0.4s shuffle across the case library and opens the split-screen reader with a freshly selected dilemma for squad practice sessions.

### 5.2 📋 1-Click "Copy Case Prompt & Citation"
- Quickly copies formatted text to the clipboard:
  > *"Case Study: The Autonomous Triage Protocol (Senior Ethics Olympiad 2025). Core Friction: Utilitarian QALYs vs Deontological Non-Discrimination."*
- Perfect for students pasting prompts into Discord, Google Docs, or team prep sheets.

### 5.3 ⚡ Instant Fuzzy Search & Theme Filters
- Real-time search indexing titles, keywords, ethical traditions (e.g. `Rawls`, `CRISPR`, `Triage`, `Geoengineering`), and stakeholder names.
- Instant topic filter pills with live counts: `🤖 AI & Tech (2)`, `🧬 Bioethics (2)`, `🌿 Environmental (2)`, `🏛️ Law & Governance (1)`, `🎭 Media & Free Speech (1)`.

### 5.4 🖨️ Clean Print-Ready Stylesheet
- `@media print` optimization removing dark backgrounds, sticky headers, and heavy shadows so students can print case dossiers and framework summaries on standard A4 paper with zero ink waste.

### 5.5 3D Card Hover Depth & Glow
- Subtle mouse-tracking perspective tilt on case cards with soft golden ambient backlight (`box-shadow: 0 12px 32px rgba(212, 175, 55, 0.15)`).

---

## 6. Information Architecture & Content Outline

```
================================================================================
RESOURCES & SOCRATIC ARCHIVE — COMPLETE SECTION MAP
================================================================================

[1. ATHENAEUM HERO & SEARCH HUB]
   ├── Title: SOCRATIC RESOURCES & CASE ARCHIVE
   ├── Tagline: Official case packs, workshop slide decks, philosophical toolkits,
   │            and scoring rubrics from our competitive seasons.
   ├── Stats Bar: 8 Featured Cases • 4 Workshop Decks • 6 Frameworks • 1 Master Rubric
   └── Search & Category Filter Bar

[2. SPLIT-SCREEN CASE DOSSIER & PDF VIEWER]
   ├── Left Pane: Structured Takeaways (Dilemma, Stakeholders, Frameworks, Questions)
   ├── Right Pane: Embedded PDF Viewer + Download & Fullscreen Controls
   └── Case Navigation: [← Previous Case] [Case 1 of 8] [Next Case →]

[3. TOURNAMENT CASE PACK REPOSITORY]
   ├── Grid of Downloadable Official Case Compendiums:
   │     • Senior School Ethics Olympiad 2025 Case Pack (PDF)
   │     • TKEthics Invitational Case Compendium (PDF)
   │     • Grand Finals International Case Briefing (PDF)
   └── Quick-download cards with file sizes and page counts

[4. CLASSROOM WORKSHOP SLIDESHOWS (GOOGLE SLIDES ENGINE)]
   ├── Responsive 16:9 Embedded Deck Player
   ├── Deck Carousel Selector (Format, Frameworks, Judge Q&A, Socratic Critique)
   └── Accompanying Leader Commentary & Speaker Notes

[5. PHILOSOPHICAL FRAMEWORK CHEATSHEETS]
   ├── 6 High-Impact Framework Reference Cards:
   │     1. Utilitarianism (Act vs Rule • Bentham/Mill)
   │     2. Kantian Deontology (Categorical Imperative • Humanity as an End)
   │     3. Aristotelian Virtue Ethics (Eudaimonia • The Golden Mean)
   │     4. Care Ethics (Carol Gilligan • Relational Interdependence)
   │     5. Rawlsian Justice (Veil of Ignorance • Difference Principle)
   │     6. Bioethics Quartet (Autonomy, Beneficence, Non-Maleficence, Justice)
   └── Downloadable 1-Page "Deliberation Matrix" Cheat Sheet (PDF)

[6. OFFICIAL SCORING RUBRIC & JUDGING GUIDE]
   ├── Interactive 5-Criteria Rubric Breakdown (Points, Expectations, High-Score Tips)
   └── "What Wins Rounds vs What Loses Rounds" Comparison Table
================================================================================
```

---

## 7. Implementation Roadmap

1. **Step 1**: Organize documentation into `/documentation/` folder (Completed).
2. **Step 2**: Receive and catalog actual case PDFs and Google Slides URLs/embed codes from the club team.
3. **Step 3**: Upgrade `cases.html` into the complete **Resources & Socratic Archive** page implementing the Split-Screen Dossier Reader, Google Slides Player, and Micro-Delights.
4. **Step 4**: Verify responsive performance across mobile and desktop.
