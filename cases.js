/**
 * Model Philosophy Ethics Olympiad (MPEO) — Socratic Resources & Case Vault Logic
 * 
 * Features:
 * 1. Smooth Scrolling to Resource Hub Anchors
 * 2. Mobile Navigation Menu Toggle
 * 3. Google Apps Script School ID / Email Express Interest Form Handler
 */

const CONFIG = {
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwZeeUwlYovp4CllKug5dhBnjgB2_piJbbJZUPQik-KUgyDUKQNffVtV3CefA2ttnZ3Jw/exec'
};

document.addEventListener('DOMContentLoaded', () => {

  // 2. Smooth scroll for all internal hash links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 3. Mobile Menu Toggle
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

  // 4. Google Apps Script Express Interest Form Handler
  const interestForm = document.getElementById('interest-form');
  const interestEmail = document.getElementById('interest-email');
  const interestSubmitBtn = document.getElementById('interest-submit-btn');
  const interestStatus = document.getElementById('interest-status');

  function showFormStatus(msg, type) {
    if (!interestStatus) return;
    interestStatus.textContent = msg;
    interestStatus.className = `bento-interest-status ${type}`;
    setTimeout(() => {
      if (type === 'success') {
        interestStatus.textContent = '';
        interestStatus.className = 'bento-interest-status';
      }
    }, 6000);
  }

  if (interestForm && interestEmail && interestSubmitBtn) {
    interestForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = interestEmail.value.trim();

      if (!input) {
        showFormStatus('Please enter your School ID or email address.', 'error');
        return;
      }

      // Auto-complete UWCSEA school domain if username prefix is entered
      const email = input.includes('@') ? input : `${input}@gapps.uwcsea.edu.sg`;

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

          showFormStatus('Got it — added to our workshop interest list. See you Wednesday!', 'success');
          interestForm.reset();
        } catch (err) {
          console.error('Apps Script Submission Error:', err);
          showFormStatus('Submission issue — please try again or register directly on CIMS.', 'error');
        } finally {
          interestSubmitBtn.disabled = false;
          interestSubmitBtn.textContent = originalText;
        }
      } else {
        showFormStatus('Got it — added to our workshop interest list. See you Wednesday!', 'success');
        interestSubmitBtn.disabled = false;
        interestSubmitBtn.textContent = originalText;
        interestForm.reset();
      }
    });
  }
});
