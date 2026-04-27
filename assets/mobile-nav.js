/**
 * Fullscreen mobile nav — Hancock Motors
 * CSS-driven open/close with explicit JS fallback for link visibility.
 */
(function () {
  'use strict';

  var menu    = document.getElementById('mobile-menu');
  var openBtn = document.getElementById('menu-btn');
  if (!menu || !openBtn) return;
  var closeBtn = document.getElementById('menu-close');

  /* Inject styles once per page */
  if (!document.getElementById('mobile-nav-styles')) {
    var s = document.createElement('style');
    s.id = 'mobile-nav-styles';
    s.textContent = [
      '#mobile-menu {',
      '  background: #050B20 !important;',
      '  background-image:',
      '    radial-gradient(ellipse 70% 50% at 85% 0%, rgba(229,36,39,0.18) 0%, transparent 60%),',
      '    radial-gradient(ellipse 60% 50% at 0% 100%, rgba(229,36,39,0.10) 0%, transparent 55%) !important;',
      '  opacity: 0 !important;',
      '  pointer-events: none !important;',
      '  transition: opacity .35s cubic-bezier(.25,.8,.25,1) !important;',
      '}',
      '#mobile-menu::before {',
      '  content: ""; position: absolute; inset: 0; pointer-events: none;',
      '  background-image:',
      '    linear-gradient(transparent 95%, rgba(255,255,255,0.04) 95%),',
      '    linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.04) 95%);',
      '  background-size: 64px 64px;',
      '  opacity: .5;',
      '  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%);',
      '  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%);',
      '}',
      '#mobile-menu.is-open { opacity: 1 !important; pointer-events: auto !important; }',
      '#mobile-menu .mob-link, #mobile-menu .mob-footer {',
      '  opacity: 0;',
      '  transform: translateY(18px);',
      '  transition: opacity .5s cubic-bezier(.25,.8,.25,1), transform .5s cubic-bezier(.25,.8,.25,1), color .2s ease;',
      '}',
      '#mobile-menu.is-open .mob-link, #mobile-menu.is-open .mob-footer {',
      '  opacity: 1 !important; transform: translateY(0) !important;',
      '}',
      '#mobile-menu .mob-link { position: relative; }',
      '#mobile-menu .mob-link::after {',
      '  content: ""; position: absolute; left: 0; bottom: -1px;',
      '  width: 0; height: 1px;',
      '  background: linear-gradient(90deg, #E52427, transparent);',
      '  transition: width .4s cubic-bezier(.25,.8,.25,1);',
      '}',
      '#mobile-menu .mob-link:active::after { width: 100%; }',
      '#mobile-menu .mob-link:active { transform: translateX(6px) !important; }',
      '#mobile-menu .mob-link:active span:last-child { color: #E52427; }',
      '@media (hover: hover) {',
      '  #mobile-menu .mob-link:hover::after { width: 100%; }',
      '  #mobile-menu .mob-link:hover { transform: translateX(6px) !important; }',
      '  #mobile-menu .mob-link:hover span:last-child { color: #E52427; }',
      '}',
      '#menu-close { transition: transform .3s cubic-bezier(.25,.8,.25,1); }',
      '@media (hover: hover) { #menu-close:hover { transform: rotate(90deg); } }'
    ].join('\n');
    document.head.appendChild(s);
  }

  /* Wipe any conflicting inline styles left from older versions */
  ['opacity', 'pointerEvents', 'background', 'transition'].forEach(function (k) { menu.style[k] = ''; });
  var allItems = menu.querySelectorAll('.mob-link, .mob-footer');
  allItems.forEach(function (el) {
    el.style.opacity = '';
    el.style.transform = '';
    el.style.transition = '';
  });

  /* Apply staggered transition-delays directly to elements (more reliable than nth-of-type) */
  var links   = menu.querySelectorAll('.mob-link');
  var footers = menu.querySelectorAll('.mob-footer');
  links.forEach(function (el, i) {
    el.style.transitionDelay = (0.08 + i * 0.06) + 's';
  });
  var base = 0.08 + links.length * 0.06;
  footers.forEach(function (el, i) {
    el.style.transitionDelay = (base + i * 0.06) + 's';
  });

  function openMenu() {
    document.body.style.overflow = 'hidden';
    menu.setAttribute('aria-hidden', 'false');
    menu.classList.add('is-open');
  }
  function closeMenu() {
    document.body.style.overflow = '';
    menu.setAttribute('aria-hidden', 'true');
    menu.classList.remove('is-open');
  }

  openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  links.forEach(function (el) { el.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });
})();
