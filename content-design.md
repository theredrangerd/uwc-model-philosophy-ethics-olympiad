# Model Philosophy Ethics Olympiad (MPEO) — Content & Information Architecture Plan

> **Document Version:** 1.5 *(Priority-First Edition: Corrected Grand Finals Date, CIMS-Deferred Registration, Local Interest Capture, Student Voice & QR Booth Integration)*
> **Event Target:** LifeCon Student Society & Club Recruitment Fair
> **Target Audience:** High school students (Grades 9–12), prospective debaters, philosophy enthusiasts, and students with no prior experience seeking an intellectual, collaborative, and competitive community.
> **Primary Goal:** Drive awareness, celebrate tournament prestige, demystify ethical debate, and maximize interest capture during LifeCon through captivating visual storytelling and fast, priority-first mobile access.

---

## 1. Strategic Goals & Key Messaging

### 1.1 Core Objectives
1. **Drive High-Conversion Recruitment for LifeCon**: Capture prospective students' interest immediately with bold visual presentation, clear value propositions, and a QR-code fast-path — recognizing most visitors reach this site by scanning a code at the booth on a phone, not browsing a desktop.
2. **Celebrate Elite Accomplishments**:
   - 🥈 **2nd Place** — *TKE Ethics Fall Invitational*
   - 🥉 **3rd Place (Bronze Medalist / Finalist Award)** — *Senior School Ethics Olympiad*
   - 🌐 **Exclusive Qualification & Invitation to the International Grand Finals** — **August 29, 2026** — to compete against top regional champions globally. *(Upcoming, not yet completed — copy must read as anticipation/countdown, not a past result.)*
3. **Give the Achievement a Human Voice**: Pair the accomplishments/timeline narrative with a short first-person quote from a competing team member (interview pending) — statistics alone intrigue less than a peer's voice describing what it actually felt like.
4. **Demystify the Competition Format ("Anatomy of a Match")**: Show that Ethics Olympiad is not adversarial fighting, but a structured, 4-step collaborative dialogue that anyone can learn.
5. **Eliminate the "Intimidation Barrier"**: Prominently feature the poster's key assurance: **"No prior experience needed — No matter what your experience of philosophy or ethics is, you'll still be able to participate and learn alongside others."**
6. **Illustrate the Pathway to Victory ("The Road to Grand Finals" Timeline)**: Map out how weekly Wednesday workshops lead directly to national podiums and international qualification, with clear onboarding for the **2027 Senior Ethics Olympiad**.
7. **Priority Information Above the Fold**: Meeting time/place, the QR code, and the accomplishments headline must all be reachable without deep scrolling — a booth visitor who only sees the first screen should still walk away knowing what MPEO is, when it meets, and how to act.
8. **Correctly Route Registration vs. Interest**: This site does **not** perform official registration. Official sign-up happens on the school's **CIMS** activity portal. This site's own form is a lightweight, secondary **"express interest"** capture (email only, sent via a Google Apps Script Web App to a shared Google Sheet — see Section 13) for students who want a follow-up nudge — not a replacement for CIMS.

---

## 2. Information Architecture (Site Map)

> **Reordering rationale (v1.5):** Logistics and the QR/registration pathway have been moved up to position 3 — immediately after the hero — so that a visitor who never scrolls past the first two screens still gets the what/when/where/how-to-act essentials. Deeper explanatory and curriculum content now follows, for the smaller audience that scrolls further.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           1. HEADER & NAVIGATION                             │
│   [Logo: Ω MPEO]   About   Accomplishments   Journey   Format   Topics   Team│ [Register on CIMS]
├─────────────────────────────────────────────────────────────────────────────┤
│                    2. INTRO SPLASH & PARALLAX HERO                          │
│   • Cinematic Typography Intro (Full Tier) / Fast Static Fade (Lite Tier)   │
│   • Top Banner: ETHICS OLYMPIAD • * MPEO *                                  │
│   • Pill Tag: WEDNESDAY 3-4:30 | MATH BLOCK ROOM 204                        │
│   • Spotlight Left: High-Res Squad Photograph + CTAs                        │
│   • Spotlight Right: 2026 Competitions Box & Society Highlights             │
├─────────────────────────────────────────────────────────────────────────────┤
│              3. KEY LOGISTICS, QR CODE & HOW TO REGISTER                    │
│   • Day/Time: Every Wednesday, 3:00 PM – 4:30 PM                            │
│   • Location: Math Block, Room 204                                          │
│   • QR Code Panel (booth scan target — see 3.3)                             │
│   • "Register on CIMS" — informational only, no live signup on this site    │
│   • Express Interest mini-form (email only, sent to Google Sheet — Sec. 13) │
├─────────────────────────────────────────────────────────────────────────────┤
│                   4. WHAT IS THE ETHICS OLYMPIAD?                           │
│   • Verbatim Poster Text: Competition & Cooperation in Real-World Dilemmas   │
│   • Core Distinctions vs. Traditional Debate (Depth, Nuance, Consensus)     │
│   • Lady Justice Sculpture & Scales Feature                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                   5. OUR ACCOMPLISHMENTS (HALL OF PRESTIGE)                 │
│   🥈 2nd Place – TKE Ethics Fall Invitational                               │
│   🥉 3rd Place – Senior School Ethics Olympiad (Bronze Medal Finalist)      │
│   🌐 International Grand Finals — August 29, 2026 (Upcoming)                │
├─────────────────────────────────────────────────────────────────────────────┤
│                   6. STUDENT VOICE (TESTIMONIAL SPOTLIGHT)                  │
│   • Short first-person quote from a competing team member                   │
│   • [PENDING: awaiting interview content]                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│            7. THE ROAD TO GRAND FINALS (VISUAL JOURNEY TIMELINE)            │
│   • Milestone 1: Weekly Foundations (Math Block 204)                        │
│   • Milestone 2: TKE Fall Invitational (Silver Podium)                      │
│   • Milestone 3: Senior School Ethics Olympiad (Bronze Medalist)            │
│   • Milestone 4: International Grand Finals — August 29, 2026 (Upcoming)    │
│   • Milestone 5: 2027 Senior Ethics Olympiad (Your Stage!)                  │
├─────────────────────────────────────────────────────────────────────────────┤
│            8. ANATOMY OF A MATCH (DEMYSITFYING THE 4-STEP ROUND)            │
│   • Step 1: Ethical Presentation (5 min)                                    │
│   • Step 2: Collaborative Response (3 min)                                  │
│   • Step 3: Deepening Dialogue & Commentary (3 min)                         │
│   • Step 4: Judges' Socratic Q&A (10 min)                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                   9. TOPICS & ETHICAL CURRICULUM                            │
│   • Ethics of AI                          • Biomedical Ethics               │
│   • Animal Rights                         • Personhood                      │
│   • Ethic of War                          • Rawlsian Justice                │
│   • Aristotelian Virtue Ethics            • Kantian Deontology              │
│   • Utilitarianism                        • Care Ethics                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                   10. SOCIETY HIGHLIGHTS & WHY JOIN?                        │
│   • No Prior Experience Needed             • 2027 Competition Preparation   │
│   • Leadership & University Profile        • Welcoming Community            │
├─────────────────────────────────────────────────────────────────────────────┤
│                   11. LEADERSHIP TEAM CONTACT DETAILS                       │
│   • [student], [student], [student], [student], [student]                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                   12. FREQUENTLY ASKED QUESTIONS (FAQ)                      │
│   • Key Questions on Novices, Tournaments, Format, and Time Commitments     │
├─────────────────────────────────────────────────────────────────────────────┤
│                   13. EXPRESS YOUR INTEREST (EMAIL CAPTURE)                 │
│   • Single-field email form, stored locally on the viewing device           │
├─────────────────────────────────────────────────────────────────────────────┤
│                           14. FOOTER                                        │
│   • Affiliation Notice, Ethics Olympiad Links, Copyright                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Section-by-Section Content & Copywriting Plan

### Section 1: Header & Sticky Navigation
- **Left Branding**: `Ω MODEL PHILOSOPHY ETHICS OLYMPIAD`
- **Navigation Links**:
  - `About MPEO` (`#about`)
  - `Accomplishments` (`#accomplishments`)
  - `Our Journey` (`#journey`)
  - `Match Format` (`#format`)
  - `Topics Covered` (`#curriculum`)
  - `Logistics` (`#logistics`)
  - `Leadership` (`#leadership`)
  - `FAQ` (`#faq`)
- **Primary Header CTA**:
  - `Register on CIMS` (`#logistics`) — scrolls to the logistics panel rather than performing a registration action; see 3.3 for the informational-only framing.

---

### Section 2: Intro Splash & Parallax Hero
- **Cinematic Text Reveal**: Full-tier devices get the monumental kinetic-fall title (see `aesthetic-design.md` §4.1); Lite-tier devices (most booth visitors) get a fast static fade straight into hero content — see `aesthetic-design.md` §4.6.
- **Top Bar Tag**:
  `ETHICS OLYMPIAD  •  * MPEO *`
- **Master Headline (H1)**:
  `MODEL PHILOSOPHY ETHICS OLYMPIAD ✦`
- **Logistics Pill**:
  `✦ WEDNESDAY 3-4:30  •  MATH BLOCK ROOM 204 ✦`
- **Lead Subtitle**:
  *Deliberate on society's most pressing moral dilemmas. Develop sharp philosophical reasoning, collaborative discourse skills, and compete at national and international levels.*
- **Two-Column Hero Grid**:
  - **Left Column**:
    - High-resolution team photo in front of the campus globe sculpture.
    - Tag: *"MPEO Competitive Squad — 2026 Season"*
    - Action CTAs: `[Register on CIMS]` `[Explore Accomplishments]`
    - Small print under the CTA row: *"Official sign-up happens on your school's CIMS portal — this site is here to inform, not to register you."*
  - **Right Column (Poster-Accurate Spotlight Box)**:
    - **Box 1: `2026 COMPETITIONS`**
      *"Two HS teams from MPEO competed in the international Senior Ethics Olympiad; one of which achieved a bronze medal finalist award. Our team is now headed to the International Grand Finals on August 29, 2026."*
    - **Box 2: `SOCIETY HIGHLIGHTS`**
      - **No prior experience needed**: *"No matter what your experience of philosophy or ethics is, you'll still be able to participate and learn alongside others."*
      - **2026 UWC Ethics Olympiad**: *"If you join this academic year you will immediately get competition experience and possible awards."*

---

### Section 3: Key Logistics, QR Code & How to Register *(New — moved up for priority access)*
- **Section Tag**: `START HERE`
- **Section Title**: `Meet Us. Scan In. Register on CIMS.`
- **Rationale**: This section is placed directly after the hero specifically so a visitor who came from the LifeCon booth QR code — and who may not scroll further — still gets everything actionable in one screen.

**3.1 Meeting Details**
- 📅 **Every Wednesday | 3:00 PM – 4:30 PM**
- 📍 **Math Block, Room 204**
- *"No prior experience needed — first-timers welcome every week."*

**3.2 How to Actually Register**
- Primary framing: *"This website is informational. To officially join MPEO, register through **CIMS** (your school's activity portal at `https://webapps.uwcsea.edu.sg/cims/Activities/Student`) — search "Model Philosophy Ethics Olympiad" or find us under the Philosophy/Debate category."*
- CTA button: `Register on CIMS ↗` (styled as the primary gold CTA linking directly to `https://webapps.uwcsea.edu.sg/cims/Activities/Student` in a new tab).

**3.3 QR Code Panel**
- Reserved layout space for a **QR code image**, currently a **placeholder** — the real code encodes the live site URL itself (e.g. the GitHub Pages link) and can't be generated until the site is actually deployed. Ship the placeholder graphic now; swap in the real QR image as a drop-in asset once the site is live, no layout change needed.
- Placeholder treatment: a simple bordered square with a corner-tick frame and centered label text (e.g. `QR CODE — COMING SOON`) in the same gold/slate palette, so it doesn't look broken or unfinished on first glance.
- Framing caption above/below the code: `Scan to visit MPEO online` (since the QR encodes the site itself, not a separate CIMS link — CIMS registration is reached *through* the site, not a second QR).
- Visual treatment: see `aesthetic-design.md` for the classical dual-hairline frame styling to keep the QR panel visually consistent with the rest of the site rather than looking like a bare pasted image.

**3.4 Express Interest (short form)**
- A secondary, lower-emphasis prompt: *"Want a reminder before our next meeting? Leave your email — no commitment, no CIMS replacement."*
- Full mechanism and copy specified in **Section 13** (kept as one canonical form spec, surfaced here via anchor link `#interest` and repeated near the footer for visitors who scroll all the way down).

---

### Section 4: What is the Ethics Olympiad?
- **Section Tag**: `CIVIL DISCOURSE & PHILOSOPHY`
- **Section Title**: `What is the Ethics Olympiad?`
- **Core Verbatim Statement (from Official Poster)**:
  > *"The Ethics Olympiad, an event characterised by competition and cooperation, enables students to engage in discussions on current, real-life ethical dilemmas.*
  >
  > *The activity encourages students to deliberate on moral issues together, mirroring the complex moral and political interactions of our society. Students participating in this activity will be taught in a way that prepares them for attending the competition. They will be able to understand more about philosophical theories and how ethics plays a role in the real world, while also applying them to debates to challenge each other's thinking."*
- **Key Distinctions from Standard Debate**:
  - **Constructive, Not Combative**: You are rewarded for discovering common ground, recognizing moral blind spots, and strengthening arguments rather than shouting over opponents.
  - **Real-World Case Deliberation**: Tackle genuine bioethical, technological, and geopolitical crises crafted by international scholars.
  - **Judged by Experts**: Scored by philosophy professors, ethicists, and legal scholars who evaluate reasoning consistency rather than theatrical rhetoric.

---

### Section 5: Our Accomplishments (The Hall of Prestige)
- **Section Tag**: `PROVEN COMPETITIVE SUCCESS`
- **Section Title**: `Our Accomplishments & Global Stage Invitation`
- **Lead Copy**:
  *In the 2026 competition circuit, MPEO proved its standing as one of the premier philosophy and ethics delegations in the region:*
- **Three Award Showcases**:
  1. 🥈 **2nd Place — TKE Ethics Fall Invitational**
     - *Silver Finish in a grueling tournament against elite regional debate squads, demonstrating mastery of spontaneous moral triage and multi-framework analysis.*
  2. 🥉 **3rd Place (Bronze Medalist / Finalist Award) — Senior School Ethics Olympiad**
     - *Out of dozens of competing high school teams, MPEO advanced to the grand podium, celebrated for analytical rigor and exceptional team cohesion.*
  3. 🌐 **Special Invitation: The International Grand Finals — August 29, 2026**
     - *Following our stellar regional performance, our team earned an official bid to the International Grand Finals to represent our school against champion schools worldwide. Copy must read as anticipation/countdown ("our team competes on August 29") — not as a completed result, since the event is still upcoming as of this writing.*

---

### Section 6: Student Voice (Testimonial Spotlight) *(New)*
- **Section Tag**: `IN THEIR OWN WORDS`
- **Section Title**: `Why Our Team Members Compete`
- **Status**: **Content pending** — a short first-person quote (2–4 sentences) will be sourced from an interview with a current competing team member. Placeholder structure below; replace bracketed text once the interview is complete.
- **Placeholder Layout**:
  > *"[Quote pending interview — e.g., what it felt like walking into their first round, what surprised them about the format, or why they'd tell a first-timer to join.]"*
  > — **[Name]**, MPEO Competitive Team
- **Design intent**: This should sit visually adjacent to the Accomplishments section (either directly below it or as a pull-quote overlay) so the achievement stats are immediately followed by a human voice — pairing the "what we won" with "what it was like," which does more to intrigue a skimming student than another stat card.
- **Action needed from leadership**: confirm interviewee, get quote + name/grade, and confirm they're comfortable being quoted/named on a public site.

---

### Section 7: The Road to Grand Finals (Visual Journey Timeline)
- **Section Tag**: `PROVEN TRAJECTORY & YOUR PATHWAY`
- **Section Title**: `From Wednesday Workshops to the World Championship`
- **Lead Copy**:
  *Every champion on our roster started with zero philosophy background in Math Block 204. Here is how our season unfolds:*

- **Timeline Milestones**:
  1. 🏛️ **Phase 1: Foundations & Socratic Salons (Term 1)**
     *Weekly Wednesday sessions in Math Block 204. Master the 10 core frameworks, run practice case deliberations, and build unbreakable team chemistry.*
  2. 🥈 **Phase 2: TKE Ethics Fall Invitational (November 2025)**
     *Our squad earned **2nd Place Overall**, going undefeated through preliminary rounds with razor-sharp deconstruction of bioethics cases.*
  3. 🥉 **Phase 3: Senior School Ethics Olympiad (May 2026)**
     *Competed against the strongest teams across the continent, securing the **Bronze Medalist / Finalist Award** before an international panel of judges.*
  4. 🌐 **Phase 4: The International Grand Finals — August 29, 2026**
     *Invited to the highest echelon of competitive ethics, our team will represent our school against global champions on the international stage.*
  5. 🏆 **Phase 5: In-School Ethics Olympiad (November 2026 — Your First Arena!)**
     *Organised directly by our student leadership team right here at school. Sign up early to gain immediate tournament experience, debate live dilemmas, and contend for awards soon in Term 1.*
  6. 🚀 **Phase 6: The 2027 Senior Ethics Olympiad (Your Next Stage!)**
     *Receive direct mentorship from our medalists, refine your argumentative agility, and earn your place on our 2027 international championship competition roster.*

---

### Section 8: Anatomy of a Match (Demystifying the 4-Step Round)
- **Section Tag**: `HOW IT WORKS`
- **Section Title**: `Anatomy of an Ethics Olympiad Round`
- **Lead Copy**:
  *Wondering what actually happens during an Ethics Olympiad match? Unlike high-pressure adversarial debates, matches follow a civil, deeply collaborative 4-part dialogue:*

- **The 4-Step Architecture**:
  1. 🎤 **Step 1: Presentation of Position (5 Minutes)**
     *Team A presents their ethical stance on an unannounced case study, articulating conflicting values, identifying stakeholders, and applying philosophical frameworks.*
  2. 🤝 **Step 2: Collaborative Response (3 Minutes)**
     *Team B does not attack—they identify overlooked nuances, suggest alternative moral considerations, and ask clarifying questions to elevate the inquiry.*
  3. ⚖️ **Step 3: Synthesis & Commentary (3 Minutes)**
     *Team A responds directly to Team B's feedback, demonstrating flexibility and acknowledging constructive additions.*
  4. 🎓 **Step 4: Judges' Socratic Dialogue (10 Minutes)**
     *A panel of university philosophers and ethics experts engages both teams in a stimulating Q&A to test logical consistency and ethical depth.*

---

### Section 9: Topics Covered (The Philosophical Curriculum)
- **Section Tag**: `KNOWLEDGE & TOPICS`
- **Section Title**: `Topics & Ethical Theories Covered`
- **Lead Copy**:
  *At MPEO, you will master classical ethical frameworks and apply them to 21st-century dilemmas:*

- **Curriculum Grid (10 Core Poster Modules)**:
  1. **Ethics of AI**: Algorithmic bias, autonomous decision systems, synthetic intelligence rights, and automated warfare.
  2. **Biomedical Ethics**: CRISPR gene editing, organ triage allocation, human enhancement, and end-of-life decisions.
  3. **Animal Rights**: Sentience, speciesism, moral patienthood, and industrial agricultural ethics.
  4. **Personhood**: Criteria for moral status, consciousness, and the boundaries of legal personhood.
  5. **Ethic of War**: *Jus ad bellum* (just cause) and *jus in bello* (proportionality, distinction, non-combatant immunity).
  6. **Rawlsian Justice**: John Rawls' *Veil of Ignorance*, the difference principle, and designing a fair society.
  7. **Aristotelian Virtue Ethics**: Moral character, the pursuit of *eudaimonia* (human flourishing), *telos*, and the Golden Mean.
  8. **Kantian Deontology**: Immanuel Kant's duty-based ethics, the Categorical Imperative, and universalizability.
  9. **Utilitarianism**: Jeremy Bentham and John Stuart Mill's consequentialist framework, utility maximization, and higher vs. lower pleasures.
  10. **Care Ethics**: Nel Noddings' relational approach prioritizing empathy, interpersonal compassion, and community care.

---

### Section 10: Society Highlights & Why Join MPEO?
- **Highlight Cards**:
  1. **No Prior Experience Needed**: Open to everyone. We build your confidence and debate skills from ground zero.
  2. **November Olympiad & Awards**: Compete soon after joining! Our leadership team is organising an in-school Ethics Olympiad this November so you gain early competition experience and contend for awards.
  3. **Premier Academic Profile**: Build high-level critical thinking, oral persuasion, and philosophical literacy recognized by top global universities.
  4. **Dynamic & Supportive Community**: Join a vibrant group of passionate thinkers where intellectual debate is fun, collaborative, and friendly.

---

### Section 11: Leadership Team Contact Details
- **Section Title**: `Leadership Team Contact Details`
- **Lead Text**: *Have questions or want to learn more? Reach out to any of our student leaders directly via email:*
- **Leadership Contacts (Exact Roster from Poster)**:
  - **[student]** (Grade 11) — `[email removed]`
  - **[student]** (Grade 12) — `[email removed]`
  - **[student]** (Grade 11) — `[email removed]`
  - **[student]** (Grade 12) — `[email removed]`
  - **[student]** (Grade 10) — `[email removed]`
  - **[student]** (Grade 11) — `[email removed]`

---

### Section 12: Frequently Asked Questions (FAQ)

1. **Q: Do I need any previous experience with philosophy or debate?**
   *A: Absolutely not! Our society welcomes students of all experience levels. We guide you step-by-step through every ethical framework and competition strategy.*

2. **Q: How does Ethics Olympiad differ from Model United Nations (MUN) or traditional debate?**
   *A: In traditional debate, the goal is to defeat an opponent by defending a rigid assigned stance. In Ethics Olympiad, teams are judged on philosophical rigor, depth of analysis, nuance, and constructive, civil collaboration.*

3. **Q: How can I earn a spot on the competitive team for tournaments?**
   *A: We run internal practice scrimmages using official competition case packs. All interested members are encouraged to try out, and teams are formed based on enthusiasm, teamwork, and critical thinking.*

4. **Q: What happens at a typical Wednesday meeting?**
   *A: We explore an exciting philosophical theory or real-world controversy, break into small groups to analyze a case study, and run a friendly mini-deliberation round.*

5. **Q: When is the earliest I can compete and win awards in Ethics Olympiad?**
   *A: Very soon! Our student leadership team is organising an internal Ethics Olympiad right here at school around November. Signing up early on CIMS ensures you get hands-on training, early tournament experience, and an opportunity to compete for awards in Term 1 before the 2027 Senior Ethics Olympiad season begins.*

6. **Q: Can I participate if I also have sports or music commitments?**
   *A: Yes! Our regular society meetings run on Wednesdays, and we offer flexible participation tracks for students balancing multiple activities.*

7. **Q: Does filling out the email form on this site register me for MPEO?**
   *A: No. This site's email form only adds you to our interest list — it is not an official membership registration. To officially join, register through CIMS.*

---

### Section 13: Express Your Interest (Email Capture) *(Revised — now backed by Google Apps Script, replaces both the old full LifeCon sign-up form and the earlier localStorage draft)*
- **Section Tag**: `STAY IN THE LOOP`
- **Form Heading**: `Express Your Interest`
- **Lead Copy**: *"Not ready to commit on CIMS yet? Leave your email and we'll follow up before our next Wednesday session. This isn't official registration — just a quick way for us to reach you."*
- **Field**: Single input — `Email Address [Email, required]`
- **Submit Button**: `Notify Me ✦`
- **Confirmation Micro-copy** (on submit): `"Got it — added to our interest list. See you Wednesday!"`
- **Error Micro-copy** (on network/script failure): `"Hmm, that didn't go through — try again, or just email a leader directly (see below)."` — always keep the leadership email list visible nearby as a fallback.

**Mechanism: Google Apps Script Web App (no backend hosting required)**
Since the site itself is static (GitHub Pages), submissions are sent to a small Google Apps Script bound to a Google Sheet in MPEO's Workspace — this replaces the earlier `localStorage`-only draft, which only ever reached a single device and never actually left the visitor's browser.

1. **Sheet + Script Setup (one-time, by a leader with Workspace access)**:
   - Create a Google Sheet (e.g. `MPEO Interest List`) with columns: `Timestamp`, `Email`.
   - In that Sheet, open **Extensions → Apps Script** and add a `doPost(e)` function that reads the submitted email from the request, appends a new row with `new Date()` and the email, and returns a JSON success response.
   - **Deploy → New deployment → Web app**, execute as *Me*, access to *Anyone* (required so the public static site can call it unauthenticated) — this produces a stable `https://script.google.com/macros/s/.../exec` URL.
   - Optional: have the same script call `MailApp.sendEmail(...)` to notify a leadership email alias on every new submission, so no one has to remember to check the Sheet.
2. **Site-side call**: The Express Interest form does a `fetch(POST)` with the email to that deployment URL (`mode: 'no-cors'` or a JSON body per Apps Script's expected content type — exact request shape to be finalized at implementation time) instead of touching `localStorage`. On a successful response, show the confirmation micro-copy above.
3. **Where it lands**: Every submission — from *any* visitor's own phone, not just a shared kiosk device — appears as a new row in the shared Google Sheet in real time, viewable by any leader with Sheet access. This is the fix for the earlier `localStorage` limitation.

**Trade-offs to be aware of:**
- The web app URL is technically public (needed for a static site to POST to it) — it should only ever accept an email string and write it to the Sheet, nothing more sensitive.
- Google may show a one-time "unverified app" warning during the *setup* flow (to the developer, not to site visitors) — this is normal for personal/Workspace Apps Script deployments and doesn't affect visitors submitting the form.
- Apps Script has generous but non-infinite quotas (well beyond LifeCon-scale traffic) and may need periodic redeployment if permissions are revoked — worth a quick test submission the morning of LifeCon.
- Keeps everything inside the school's existing Google Workspace rather than routing student email addresses through a third-party SaaS.

---

### Section 14: Footer
- **Title**: Model Philosophy Ethics Olympiad Society (MPEO)
- **School & Affiliation**: High School Student Society • Affiliated with the International Ethics Olympiad.
- **Copyright**: `© 2026 Model Philosophy Ethics Olympiad Society. All rights reserved.`
- **Repeated micro-CTA**: `Register on CIMS ✦` + a compact repeat of the Express Interest email field for visitors who scrolled all the way down without acting earlier.
