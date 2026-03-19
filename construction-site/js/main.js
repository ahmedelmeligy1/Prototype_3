/* =========================================
   CONSTRUCTION CO. — SHARED SCRIPTS
   ========================================= */

// ── NAV SCROLL EFFECT ──────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── MOBILE MENU ────────────────────────────
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  // close on link click
  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    })
  );
}

// ── ACTIVE NAV LINK ────────────────────────
(function setActiveLink() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === 'index.html' && href === '#home')) {
      a.classList.add('active');
    }
  });
})();

// ── REVEAL ON SCROLL ───────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

// ── WHATSAPP CONTACT FORM ──────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name    = document.getElementById('name')?.value.trim()    || '';
    const phone   = document.getElementById('phone')?.value.trim()   || '';
    const service = document.getElementById('service')?.value        || '';
    const message = document.getElementById('message')?.value.trim() || '';

    // ← Replace with your WhatsApp number (international format, no +)
    const waNumber = '201000000000';

    const text =
      `Hello, I'm ${name}.\n` +
      `📞 Phone: ${phone}\n` +
      (service ? `🔧 Service needed: ${service}\n` : '') +
      `💬 Message: ${message}`;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    // Reset form & show confirmation
    contactForm.reset();
    const toast = document.getElementById('toast');
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3500);
    }
  });
}

// ── STATS COUNTER ANIMATION ────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    el.textContent = Math.round(ease * target) + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const counters = document.querySelectorAll('[data-target]');
if (counters.length) {
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));
}
