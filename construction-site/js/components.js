/* =========================================
   SHARED COMPONENTS — NAV & FOOTER
   Injected via components.js on every page
   ========================================= */

function injectNav() {
  const navHTML = `
  <nav class="nav">
    <div class="nav-inner">
      <a href="../index.html" class="nav-logo">
        <div class="nav-logo-icon">BC</div>
        <div class="nav-logo-text">Build<span>Core</span></div>
      </a>
      <div class="nav-links">
        <a href="../index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="projects.html">Projects</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="nav-cta">
        <a href="contact.html" class="btn btn-gold">Get a Quote</a>
      </div>
      <button class="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu">
      <a href="../index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="projects.html">Projects</a>
      <a href="contact.html">Contact</a>
      <a href="contact.html" style="color:var(--gold)">Get a Quote →</a>
    </div>
  </nav>`;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
}

function injectNavHome() {
  const navHTML = `
  <nav class="nav">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-icon">BC</div>
        <div class="nav-logo-text">Build<span>Core</span></div>
      </a>
      <div class="nav-links">
        <a href="index.html">Home</a>
        <a href="pages/about.html">About</a>
        <a href="pages/services.html">Services</a>
        <a href="pages/projects.html">Projects</a>
        <a href="pages/contact.html">Contact</a>
      </div>
      <div class="nav-cta">
        <a href="pages/contact.html" class="btn btn-gold">Get a Quote</a>
      </div>
      <button class="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu">
      <a href="index.html">Home</a>
      <a href="pages/about.html">About</a>
      <a href="pages/services.html">Services</a>
      <a href="pages/projects.html">Projects</a>
      <a href="pages/contact.html">Contact</a>
      <a href="pages/contact.html" style="color:var(--gold)">Get a Quote →</a>
    </div>
  </nav>`;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
}

function injectFooter(prefix = '../') {
  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="nav-logo">
            <div class="nav-logo-icon">BC</div>
            <div class="nav-logo-text">Build<span>Core</span></div>
          </div>
          <p>Building the future with precision, integrity, and craftsmanship. Your vision, our expertise.</p>
          <div class="social-links" style="margin-top:1.2rem">
            <a href="https://facebook.com/" target="_blank" title="Facebook">f</a>
            <a href="https://instagram.com/" target="_blank" title="Instagram">in</a>
            <a href="https://linkedin.com/" target="_blank" title="LinkedIn">li</a>
            <a href="https://wa.me/201000000000" target="_blank" title="WhatsApp">w</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="${prefix}index.html">Home</a></li>
            <li><a href="${prefix}pages/about.html">About Us</a></li>
            <li><a href="${prefix}pages/services.html">Services</a></li>
            <li><a href="${prefix}pages/projects.html">Projects</a></li>
            <li><a href="${prefix}pages/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:estimating@buildcore.com">estimating@buildcore.com</a></li>
            <li><a href="tel:+201000000000">+20 100 000 0000</a></li>
            <li><a href="#">123 Industrial St, Cairo</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 BuildCore Construction. All rights reserved.</span>
        <span>Built with precision &amp; purpose.</span>
      </div>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}
