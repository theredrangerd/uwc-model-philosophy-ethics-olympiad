/**
 * Model Philosophy Ethics Olympiad (MPEO) — Official Application Logic
 * 
 * Features:
 * 1. Adaptive Tier Detection (Full Cinematic vs. Mobile Lite Mode)
 * 2. Cinematic Splash Screen Transition
 * 3. Interactive Match Stepper (4-Step Round Walkthrough)
 * 4. Scroll-Driven Timeline Progress & Node Lighting
 * 5. Grand Finals Countdown Timer (Target: August 29, 2026)
 * 6. Google Apps Script Express Interest Form Handler
 * 7. FAQ Accordion & Mobile Navigation
 */

// ==========================================================================
// CONFIGURATION
// ==========================================================================
const CONFIG = {
  // Deployed Google Apps Script Web App URL from apps-script-setup.md
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwZeeUwlYovp4CllKug5dhBnjgB2_piJbbJZUPQik-KUgyDUKQNffVtV3CefA2ttnZ3Jw/exec',
  GRAND_FINALS_DATE: new Date('2026-08-29T09:00:00+08:00')
};

// ==========================================================================
// 1. ADAPTIVE TIER DETECTION
// ==========================================================================
const isLiteMode = (
  window.matchMedia('(max-width: 768px)').matches ||
  window.matchMedia('(pointer: coarse)').matches ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
  (navigator.connection && ['slow-2g', '2g', '3g'].includes(navigator.connection.effectiveType))
);

if (isLiteMode) {
  document.body.classList.add('lite-mode');
}

// ==========================================================================
// 2. CINEMATIC SPLASH SCREEN
// ==========================================================================
const splashScreen = document.getElementById('splash-screen');
const splashEnterBtn = document.getElementById('splash-enter-btn');

function dismissSplash() {
  if (!splashScreen || splashScreen.classList.contains('dismissed')) return;
  splashScreen.classList.add('dismissed');
  
  // Clean up splash from accessibility tree after transition
  setTimeout(() => {
    splashScreen.style.display = 'none';
  }, 900);
}

if (splashEnterBtn) {
  splashEnterBtn.addEventListener('click', dismissSplash);
}

// Dismiss on scroll or keydown
window.addEventListener('wheel', (e) => {
  if (e.deltaY > 20) dismissSplash();
}, { passive: true });

window.addEventListener('keydown', (e) => {
  if (['Enter', 'Space', 'ArrowDown'].includes(e.code)) {
    dismissSplash();
  }
});

// Auto-dismiss on mobile or touch start after brief interaction
window.addEventListener('touchstart', () => {
  if (isLiteMode) {
    dismissSplash();
  }
}, { passive: true });

// ==========================================================================
// 3. INTERACTIVE MATCH STEPPER (4-STEP ROUND)
// ==========================================================================
const matchSteps = {
  1: {
    title: '1. Presentation of Position',
    desc: 'Team A presents their structured philosophical stance on an unannounced ethical case study, articulating conflicting values, identifying key stakeholders, and applying relevant moral frameworks.',
    principles: [
      'Articulate primary moral conflict and stakeholder interests',
      'Apply rigorous philosophical frameworks (e.g., Deontology, Utilitarianism, Virtue Ethics)',
      'Address counter-arguments and acknowledge moral trade-offs'
    ],
    tactics: 'Clarity of thought and consistency of reasoning are evaluated above theatrical oratory. Avoid dogmatism; embrace intellectual nuance.'
  },
  2: {
    title: '2. Collaborative Response',
    desc: 'Team B presents a collaborative commentary on Team A’s position. Rather than attacking, Team B identifies overlooked moral perspectives and strengthens the shared inquiry.',
    principles: [
      'Identify overlooked perspectives and moral dimensions',
      'Pose constructive questions that elevate inquiry without hostility',
      'Acknowledge strengths and robust points in Team A’s presentation'
    ],
    tactics: 'Never seek to demolish the other team. The judges award points for constructive synthesis and collaborative advancement.'
  },
  3: {
    title: '3. Synthesis & Commentary',
    desc: 'Team A responds directly to Team B’s feedback, demonstrating agility, intellectual humility, and willingness to refine their view in light of new insights.',
    principles: [
      'Directly address the nuances raised by Team B',
      'Integrate valid points into an updated ethical position',
      'Demonstrate intellectual humility and agile reasoning'
    ],
    tactics: 'Refining your view in light of thoughtful feedback is a sign of strength, not weakness, in the Ethics Olympiad.'
  },
  4: {
    title: '4. Judges’ Socratic Q&A',
    desc: 'A panel of university philosophers, ethicists, and legal scholars engages both teams in a stimulating 10-minute dialogue testing depth and logical consistency.',
    principles: [
      'Defend logical consistency under direct expert scrutiny',
      'Unpack underlying meta-ethical and epistemic assumptions',
      'Balance team contributions across all participating speakers'
    ],
    tactics: 'Judges probe edge-cases and moral boundaries. Stay grounded in your chosen frameworks and maintain calm, precise logic.'
  }
};

const stepperTabs = document.querySelectorAll('.stepper-tab');
const stepTitle = document.getElementById('step-title');
const stepDesc = document.getElementById('step-desc');
const stepPrinciples = document.getElementById('step-principles');
const stepTacticsText = document.getElementById('step-tactics-text');

stepperTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const stepNum = tab.getAttribute('data-step');
    if (!matchSteps[stepNum]) return;

    // Update active tab UI
    stepperTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    // Update content with smooth fade
    const content = matchSteps[stepNum];
    if (stepTitle) stepTitle.textContent = content.title;
    if (stepDesc) stepDesc.textContent = content.desc;
    if (stepTacticsText) stepTacticsText.textContent = content.tactics;

    if (stepPrinciples) {
      stepPrinciples.innerHTML = '';
      content.principles.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p;
        stepPrinciples.appendChild(li);
      });
    }
  });
});

// ==========================================================================
// 4. SCROLL-DRIVEN TIMELINE PROGRESS
// ==========================================================================
const timelineContainer = document.getElementById('timeline-container');
const timelineProgressBar = document.getElementById('timeline-progress-bar');
const timelineItems = document.querySelectorAll('.timeline-item');

function updateTimeline() {
  if (!timelineContainer || !timelineProgressBar) return;

  const rect = timelineContainer.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const top = rect.top;
  const height = rect.height;

  if (top < windowHeight && top + height > 0) {
    const progress = Math.min(Math.max((windowHeight * 0.7 - top) / height, 0), 1);
    timelineProgressBar.style.height = `${progress * 100}%`;

    timelineItems.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < windowHeight * 0.75) {
        item.classList.add('active');
      }
    });
  }
}

window.addEventListener('scroll', updateTimeline, { passive: true });
updateTimeline();

// ==========================================================================
// 5. GRAND FINALS COUNTDOWN TIMER
// ==========================================================================
const cdDays = document.getElementById('cd-days');
const cdHours = document.getElementById('cd-hours');
const cdMins = document.getElementById('cd-mins');
const cdSecs = document.getElementById('cd-secs');

function updateCountdown() {
  const now = new Date();
  const diff = CONFIG.GRAND_FINALS_DATE - now;

  if (diff <= 0) {
    if (cdDays) cdDays.textContent = '00';
    if (cdHours) cdHours.textContent = '00';
    if (cdMins) cdMins.textContent = '00';
    if (cdSecs) cdSecs.textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  if (cdDays) cdDays.textContent = String(days).padStart(2, '0');
  if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
  if (cdMins) cdMins.textContent = String(mins).padStart(2, '0');
  if (cdSecs) cdSecs.textContent = String(secs).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ==========================================================================
// 6. FAQ ACCORDION
// ==========================================================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close other items
    faqItems.forEach(otherItem => {
      otherItem.classList.remove('active');
      const otherBtn = otherItem.querySelector('.faq-question-btn');
      if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
    });

    if (!isActive) {
      item.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ==========================================================================
// 7. GOOGLE APPS SCRIPT FORM HANDLER
// ==========================================================================
const interestForm = document.getElementById('interest-form');
const interestEmail = document.getElementById('interest-email');
const interestSubmitBtn = document.getElementById('interest-submit-btn');
const interestStatus = document.getElementById('interest-status');

if (interestForm) {
  interestForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = interestEmail.value.trim();

    if (!input) {
      showFormStatus('Please enter your school ID or email address.', 'error');
      return;
    }

    // Auto-complete school domain if only username prefix is entered
    const email = input.includes('@') ? input : `${input}@gapps.uwcsea.edu.sg`;

    // Set loading state
    interestSubmitBtn.disabled = true;
    const originalText = interestSubmitBtn.textContent;
    interestSubmitBtn.textContent = 'Submitting...';

    if (CONFIG.APPS_SCRIPT_URL) {
      try {
        await fetch(CONFIG.APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ email: email, timestamp: new Date().toISOString() })
        });

        showFormStatus('Got it — added to our interest list. See you Wednesday!', 'success');
        interestForm.reset();
      } catch (err) {
        console.error('Apps Script Submission Error:', err);
        showFormStatus('Hmm, that didn’t go through — please try again or email a student leader directly.', 'error');
      } finally {
        interestSubmitBtn.disabled = false;
        interestSubmitBtn.textContent = originalText;
      }
    } else {
      // Graceful local feedback when Web App URL is not yet configured
      setTimeout(() => {
        showFormStatus('Got it — added to our interest list. See you Wednesday!', 'success');
        interestSubmitBtn.disabled = false;
        interestSubmitBtn.textContent = originalText;
        interestForm.reset();
      }, 500);
    }
  });
}

function showFormStatus(msg, type) {
  if (!interestStatus) return;
  interestStatus.textContent = msg;
  interestStatus.className = `form-status-msg ${type}`;
}

// ==========================================================================
// 8. MOBILE NAVIGATION DRAWER
// ==========================================================================
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navMenu.classList.toggle('active', isOpen);
    mobileToggle.textContent = isOpen ? '✕' : '☰';
  });

  // Close menu when clicking on any navigation link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open', 'active');
      mobileToggle.textContent = '☰';
    });
  });
}
