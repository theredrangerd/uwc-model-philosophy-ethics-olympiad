# Model Philosophy Ethics Olympiad (MPEO) — Resources & Socratic Archive Aesthetic Specification

> **Document Version:** 1.0 *(The Socratic Athenaeum Edition)*  
> **Document Name:** `resources-aesthetic.md`  
> **Target Audience:** Curious prospective members, active squad competitors, philosophy debaters, and educators seeking deep intellectual materials.  
> **Design Thesis:** *The Oxford Athenaeum meets High-End Editorial Digital Dossier Room*

---

## 1. Executive Vision & Philosophy

### 1.1 Shift in Purpose: From Recruitment Hook to Academic Depth
The main landing page (`index.html`) is engineered for rapid recruitment at LifeCon: high visual impact, fast scanning, tournament prestige, and a clear call-to-action to register on CIMS. 

**The Resources Tab / Socratic Archive serves a fundamentally different purpose:**
- It is the destination for the **curious 10–20%** of students who want to look under the hood.
- It moves beyond slogans to provide **real substance**: authentic past tournament case packs, classroom lecture decks, philosophical framework toolkits, and annotated round breakdowns.
- The aesthetic must feel like entering a private, illuminated scholarly archive—intellectually serious, visually captivating, distraction-free, and meticulously organized.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       MPEO SOCRATIC ATHENAEUM ARCHITECTURE                  │
├─────────────────────────────────────────────────────────────────────────────┤
│  [HERO & ARCHIVE NAV]                                                       │
│   • Vault Overview: Case Packs • Lecture Slides • Frameworks • Round Drills │
│   • Global Search & Topic Filter (AI, Bioethics, Climate, Law, Governance)  │
├─────────────────────────────────────────────────────────────────────────────┤
│  [SECTION 1: OFFICIAL TOURNAMENT CASE PACKS & DOSSIERS]                     │
│   • Curated PDF Case Briefs with Dual-Mode View (Fast Digest vs Full PDF)   │
│   • Split-Screen Dossier Reader (Case Narrative + Stakeholder Blueprint)   │
├─────────────────────────────────────────────────────────────────────────────┤
│  [SECTION 2: WORKSHOP SLIDES & TRAINING DECKS]                              │
│   • Embedded Class Slideshows (Responsive Deck Player + Lecture Notes)      │
│   • Annotated Slide Walkthroughs for Competition Strategy                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  [SECTION 3: PHILOSOPHICAL FRAMEWORK CHEATSHEETS & TOOLKITS]                │
│   • Quick-Reference Deontological, Utilitarian, Virtue & Care Ethics Cards │
│   • Printable 1-Page Case Analysis Framework (PDF download)                 │
├─────────────────────────────────────────────────────────────────────────────┤
│  [SECTION 4: PRACTICE DELIBERATION SUITE]                                   │
│   • 5-Minute Presentation Timer • Random Case Generator • Rubric Breakdown  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Aesthetics & Visual Identity

### 2.1 Moodboard: *The Dark-Mode Socratic Athenaeum*
- **Tone**: Sophisticated, scholarly, rigorous, yet deeply modern and accessible.
- **Palette**: Deep Obsidian (`#0E1013`) and Slate Graphite (`#16191E`, `#21252C`), accented by Warm Antique Parchment (`#F6F4ED`) for reading cards and Olympic Gold (`#D4AF37`) for highlights.
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

## 3. Brainstorming: How to Display Case PDFs

Displaying multi-page PDF case packs cleanly on a web page is challenging if done with a raw browser embed. Here are four tailored display mechanisms evaluated for MPEO:

### Option A: The Split-Screen Dossier Reader (Recommended Desktop Experience)
- **Concept**: A two-pane layout inspired by professional research databases and legal dossier platforms.
  - **Left Pane (40% width)**: Structured web summary (The Core Moral Friction, Primary Stakeholders, Key Ethical Tensions, Guiding Questions).
  - **Right Pane (60% width)**: An embedded, scrollable PDF viewer with page navigation, zoom controls, pop-out full-screen button, and direct `.pdf` download link.
- **Pros**: Gives instant scannability on the left while providing verbatim official tournament documents on the right.
- **Mobile Fallback**: Stacks vertically (Summary card first, followed by an "Open Full Official Case PDF" button and lightweight preview).

### Option B: The "Dossier Card & Modal Reader" System
- **Concept**: Beautiful grid of dark slate document cards. Each card displays:
  - Official Tournament Stamp (e.g. `✦ Senior Ethics Olympiad 2025 Case Pack`)
  - Case Title & Dilemma Subtitle
  - Tag Pills (e.g. `🧬 Bioethics`, `🤖 AI Governance`, `⏱ 4-Page PDF`)
  - 2-sentence executive summary
  - Two buttons: `📖 Interactive Web Digest` and `📥 Download Official PDF (1.2 MB)`
- **Interaction**: Clicking `Interactive Web Digest` opens a distraction-free dark modal with tabbed exploration (Scenario, Stakeholder Matrix, Framework Application, Model Match Analysis).
- **Pros**: Clean, fast-loading, highly responsive on all devices, doesn't bog down browser memory.

### Option C: Dual-Mode Switcher ("Interactive Digest" ⟷ "Original Case Pack")
- **Concept**: At the top of the case explorer, a toggle button allows students to switch view modes:
  - **View Mode 1: Interactive Web Cards** (Tailored for fast reading, rich UI elements, interactive accordion sections).
  - **View Mode 2: Official Document Archive** (List of all downloadable competition case packs organized by year/season with file size, table of contents preview, and direct PDF downloads).
- **Pros**: Satisfies both the student wanting a quick 2-minute overview and the student printing the official 20-page pack for squad practice.

### Option D: Embedded Micro-Reader (PDF.js / Iframe with Custom Dark HUD)
- **Concept**: A custom-styled container wrapping the PDF with an MPEO-themed top toolbar:
  - Page indicator (`Page 1 of 6`)
  - `Zoom In / Out`
  - `Copy Citation`
  - `Toggle Dark/Light Mode Inversion` (for reading scanned papers at night)
  - `Download Original PDF`
- **Pros**: Immersive feeling of an authentic intelligence dossier room.

---

## 4. Brainstorming: How to Display Classroom Slideshows

During club training, coaches and student leaders present slide decks on case analysis frameworks, round timing, objection handling, and moral philosophy. Here are ways to showcase these decks:

### Option 1: Embedded Responsive Google Slides / Canva / PPT Player
- **Mechanism**: Use a responsive 16:9 container with an `iframe` embedding the published presentation link (Google Slides / OneDrive / Canva).
- **Aesthetic Treatment**: Wrap the iframe in a dual-hairline gold frame with a sleek dark header bar (`✦ Workshop Deck: Introduction to Socratic Rebuttal & Care Ethics`).
- **Interactive Controls**: Include a toolbar beneath the slide deck with:
  - `⏮ Previous Slide` / `Next Slide ⏭`
  - `Full Screen Toggle ⛶`
  - `Download Presentation (.PDF / .PPTX)`
  - `View Accompanying Speaker Notes`

### Option 2: Slide-by-Slide Annotated Deck Walker
- **Mechanism**: A custom JavaScript carousel where key slides are rendered as high-resolution cards with accompanying student-leader commentary alongside each slide.
- **Example Layout**:
  - Left: Slide visual preview.
  - Right: "What the judges look for on this step", key terminology, and common pitfalls.
- **Pros**: Adds significant academic value beyond just dumping raw slides.

### Option 3: Tabbed Deck Library (By Workshop Theme)
- Group presentations into 4 foundational curriculum modules:
  1. **Deck 01: The Match Format & Scoring Rubric** (Understanding what judges reward vs penalize).
  2. **Deck 02: Moral Frameworks Applied** (How to deploy Kant, Mill, Aristotle, and Gilligan without sounding dogmatic).
  3. **Deck 03: Crafting the 5-Minute Presentation** (Structuring opening clarity and thesis statements).
  4. **Deck 04: The Art of Socratic Commentary** (Constructive critiques that build collaborative consensus).

---

## 5. Proposed Information Architecture for Resources Hub

```
================================================================================
MPEO RESOURCES & SOCRATIC ARCHIVE (PAGE / TAB LAYOUT)
================================================================================

[1. ATHENAEUM HERO & SEARCH HUB]
   ├── Section Pill: ✦ SCHOLARLY ARCHIVE • COMPETITION VAULT ✦
   ├── Title: SOCRATIC RESOURCES & CASE ARCHIVE
   ├── Subtitle: Official case packs, workshop slide decks, philosophical frameworks,
   │             and scoring rubrics from our competitive seasons.
   ├── Archive Quick-Metrics:
   │     [8 Featured Cases] • [4 Workshop Decks] • [6 Framework Guides] • [1 Master Rubric]
   └── Global Filter & Search Bar:
         [ 🔍 Search topics, ethical terms, or case titles... ]
         [ All (18) ] [ Case Packs (8) ] [ Slide Decks (4) ] [ Frameworks (5) ] [ Rubrics (1) ]

--------------------------------------------------------------------------------
[2. FEATURED CASE SPOTLIGHT (CURRENT SEASON CASE STUDY)]
   ├── Hero Split Card:
   │     ├── Left: "Case of the Month / Grand Finals Focus"
   │     │         • Summary, Core Tension, Philosophical Anchor
   │     │         • Interactive Scenario Breakdown
   │     └── Right: Live Document Embed / High-Res Case Dossier Preview
   └── Action: [ Open Full Split-Screen Dossier ] [ Download Case PDF ↗ ]

--------------------------------------------------------------------------------
[3. TOURNAMENT CASE VAULT (INTERACTIVE GRID + PDF DOWNLOADS)]
   ├── Filter Tabs: [ All Cases ] [ AI & Tech ] [ Bioethics ] [ Climate ] [ Law & Rights ]
   ├── Case Card Matrix (Cards with Dual CTAs: "Interactive Read" + "PDF Download")
   │     ├── Case 01: The Autonomous Triage Protocol (AI / Bioethics)
   │     ├── Case 02: De-Extinction & Ecological Hubris (Environmental Ethics)
   │     ├── Case 03: Right to Forget vs. Public Record (Digital Human Rights)
   │     ├── Case 04: Mitochondrial Gene Replacement (Reproductive Bioethics)
   │     ├── Case 05: Deepfake Satire & Democratic Integrity (Media Ethics)
   │     ├── Case 06: Geoengineering the Stratosphere (Intergenerational Justice)
   │     ├── Case 07: Autonomous Lethal Drone Strikes (Military Ethics & Jus in Bello)
   │     └── Case 08: Posthumous Brain-Computer Data Rights (Personhood & Privacy)
   └── Case Pack Downloads Bar:
         • [ 📥 Download Senior Olympiad 2025 Official Case Pack (All 8 Cases, PDF) ]
         • [ 📥 Download TKEthics Invitational Case Compendium (PDF) ]

--------------------------------------------------------------------------------
[4. WORKSHOP SLIDESHOWS & CLASSROOM DECKS]
   ├── Section Subhead: ✦ TRAINING WORKSHOPS & CLASSROOM SLIDES ✦
   ├── Featured Slideshow Player (Embedded Google Slides / PPT Viewer):
   │     ├── "Workshop 01: Mastering the 4-Step Match Anatomy"
   │     └── Controls: Slide navigation, full-screen mode, speaker notes toggle
   ├── Slideshow Deck Selector (Interactive Carousel of Available Decks):
   │     ├── Deck A: Introduction to Socratic Deliberation
   │     ├── Deck B: Applying Moral Frameworks Under Time Pressure
   │     ├── Deck C: How to Handle Judges' Q&A with Poise
   │     └── Deck D: Fallacies to Avoid in Ethical Discourse
   └── Actions: [ Open in Google Slides ↗ ] [ Download Deck as PDF ]

--------------------------------------------------------------------------------
[5. PHILOSOPHICAL FRAMEWORK CHEATSHEETS (STUDY TOOLKIT)]
   ├── 6 Quick-Reference Study Cards:
   │     1. Utilitarianism (Bentham & Mill: Hedonic Calculus vs Rule Utility)
   │     2. Kantian Deontology (The Categorical Imperative & Humanity Formulation)
   │     3. Aristotelian Virtue Ethics (The Golden Mean & Eudaimonia)
   │     4. Care Ethics (Carol Gilligan: Relational Interdependence & Empathy)
   │     5. Rawlsian Justice (The Veil of Ignorance & Difference Principle)
   │     6. Bioethical Principles (Autonomy, Beneficence, Non-Maleficence, Justice)
   └── Downloadable 1-Page "Deliberation Framework Matrix" Cheat Sheet (PDF)

--------------------------------------------------------------------------------
[6. OFFICIAL SCORING RUBRIC & JUDGING CRITERIA GUIDE]
   ├── Interactive Score Breakdown (How rounds are won):
   │     • Clarity of Central Ethical Position (1–10)
   │     • Depth of Philosophical Principles & Nuance (1–10)
   │     • Recognition of Trade-offs & Opposing Arguments (1–10)
   │     • Collaborative Spirit & Constructive Engagement (1–10)
   │     • Response to Judges' Probing Questions (1–10)
   └── "What Judges Look For vs What Judges Penalize" Comparison Table

--------------------------------------------------------------------------------
[7. SCRIPTED SAMPLE ROUND WALKTHROUGH]
   ├── Audio/Visual or Verbatim Transcript:
   │     "Listen / Read a Model 5-Minute Presentation from our 2025 Team"
   └── Step-by-step commentary showing judge scoring annotations.
================================================================================
```

---

## 6. UI/UX Interaction Details & Micro-Delights

1. **Document Preview Hover Effect**: Hovering over a case PDF card provides a subtle 3D tilt with an illuminated gold rim and a preview badge showing page count and reading time.
2. **Instant Search with Fuzzy Filtering**: Typing in the search bar dynamically filters cases, slide decks, and frameworks in real-time with zero latency.
3. **Copy Citation & Dilemma Button**: A 1-click button to copy the case synopsis formatted as a formal academic citation or practice prompt for team prep.
4. **"Deliberate a Random Case" Generator**: An interactive gold dice button that randomly pulls a case from the archive with an animated shuffle effect for squad practice drills.
5. **Print-Optimized Stylesheet**: Adding CSS `@media print` rules so students can click `Print Case Dossier` directly from the browser for physical practice sessions without dark backgrounds consuming printer toner.

---

## 7. Implementation Strategy & Next Steps

1. **Phase 1: Architecture Review (This Document)**: Confirm the layout, PDF presentation method, and slideshow integration approach.
2. **Phase 2: Asset Collection**:
   - Collect actual case pack PDFs (e.g., Senior Ethics Olympiad official release).
   - Collect class slideshows (export as PDF or grab Google Slides embed URLs).
   - Gather any past squad case notes or presentations.
3. **Phase 3: Integration into the Site**:
   - Upgrade `cases.html` into the unified **Socratic Archive & Resources Hub**, or link a dedicated `resources.html` from the top navigation.
   - Implement the PDF preview cards, document download drawers, and interactive slide deck viewer.
4. **Phase 4: Responsive Verification & Polish**: Ensure seamless reading on mobile (for students studying on phones) and rich dual-pane features on desktop.
