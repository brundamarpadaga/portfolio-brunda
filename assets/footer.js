// Shared site footer, injected into <footer id="site-footer"></footer>.
// Edit this file to change the footer on every page at once.
(function () {
  var FOOTER_HTML = [
    '<div class="footer-content">',
    '  <a class="footer-link" href="https://linkedin.com/in/brundamarpadaga" target="_blank" rel="noopener">',
    '    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z"/></svg>',
    '    <span>linkedin.com/in/brundamarpadaga</span>',
    '  </a>',
    '  <a class="footer-link" href="mailto:brundamarpadaga@gmail.com">',
    '    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13zm2.2.5 7.8 5.98L19.8 6H4.2zM20 7.83l-7.6 5.83a.75.75 0 0 1-.8 0L4 7.83V18h16V7.83z"/></svg>',
    '    <span>brundamarpadaga@gmail.com</span>',
    '  </a>',
    '</div>'
  ].join('\n');

  function renderFooter() {
    var target = document.getElementById('site-footer');
    if (target) {
      target.innerHTML = FOOTER_HTML;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
})();
