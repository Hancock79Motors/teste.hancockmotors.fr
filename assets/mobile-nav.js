/**
 * Fullscreen mobile nav — Hancock Motors
 * CSS-driven open/close — no setTimeout race conditions.
 * Works with: #menu-btn, #menu-close, #mobile-menu, .mob-link, .mob-footer
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
      '  background: #050B20;',
      '  background-image:',
      '    radial-gradient(ellipse 70% 50% at 85% 0%, rgba(229,36,39,0.16) 0%, transparent 60%),',
      '    radial-gradient(ellipse 60% 50% at 0% 100%, rgba(229,36,39,0.10) 0%, transparent 55%),',
      '    radial-gradient(ellipse 90% 90% at 50% 50%, rgba(13,21,48,0.6) 0%, transparent 70%);',
      '  opacity: 0;',
      '  pointer-events: none;',
      '  transition: opacity .35s cubic-bezier(.25,.8,.25,1);',
      '  -webkit-backdrop-filter: blur(0);',
      '  backdrop-filter: blur(0);',
      '}',
      '#mobile-menu::before {',
      '  content: "";',
      '  position: absolute; inset: 0;',
      '  background-image:',
      '    linear-gradient(transparent 95%, rgba(255,255,255,0.04) 95%),',
      '    linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.04) 95%);',
      '  background-size: 64px 64px;',
      '  pointer-events: none;',
      '  opacity: .5;',
      '  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%);',
      '  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%);',
      '}',
      '#mobile-menu.is-open { opacity: 1; pointer-events: auto; }',
      '#mobile-menu .mob-link, #mobile-menu .mob-footer {',
      '  opacity: 0;',
      '  transform: translateY(18px);',
      '  transition: opacity .5s cubic-bezier(.25,.8,.25,1), transform .5s cubic-bezier(.25,.8,.25,1), color .2s ease;',
      '}',
      '#mobile-menu.is-open .mob-link, #mobile-menu.is-open .mob-footer {',
      '  opacity: 1; transform: translateY(0);',
      '}',
      '#mobile-menu.is-open .mob-link:nth-of-type(1) { transition-delay: .08s; }',
      '#mobile-menu.is-open .mob-link:nth-of-type(2) { transition-delay: .14s; }',
      '#mobile-menu.is-open .mob-link:nth-of-type(3) { transition-delay: .20s; }',
      '#mobile-menu.is-open .mob-link:nth-of-type(4) { transition-delay: .26s; }',
      '#mobile-menu.is-open .mob-link:nth-of-type(5) { transition-delay: .32s; }',
      '#mobile-menu.is-open .mob-link:nth-of-type(6) { transition-delay: .38s; }',
      '#mobile-menu.is-open .mob-footer:nth-of-type(1) { transition-delay: .42s; }',
      '#mobile-menu.is-open .mob-footer:nth-of-type(2) { transition-delay: .48s; }',
      '#mobile-menu .mob-link {',
      '  position: relative;',
      '  transition: transform .35s cubic-bezier(.25,.8,.25,1), opacity .5s cubic-bezier(.25,.8,.25,1);',
      '}',
      '#mobile-menu .mob-link::after {',
      '  content: "";',
      '  position: absolute; left: 0; bottom: -1px;',
      '  width: 0; height: 1px;',
      '  background: linear-gradient(90deg, #E52427, transparent);',
      '  transition: width .4s cubic-bezier(.25,.8,.25,1);',
      '}',
      '#mobile-menu .mob-link:active::after { width: 100%; }',
      '#mobile-menu .mob-link:active { transform: translateX(6px); }',
      '#mobile-menu .mob-link:active span:last-child { color: #E52427; }',
      '@media (hover: hover) {',
      '  #mobile-menu .mob-link:hover::after { width: 100%; }',
      '  #mobile-menu .mob-link:hover { transform: translateX(6px); }',
      '  #mobile-menu .mob-link:hover span:last-child { color: #E52427; }',
      '}',
      '#menu-btn {',
      '  position: relative;',
      '  width: 44px; height: 44px;',
      '  display: inline-flex; align-items: center; justify-content: center;',
      '}',
      '#menu-btn svg { transition: transform .3s cubic-bezier(.25,.8,.25,1); }',
      '#menu-btn:active svg { transform: scale(.92); }',
      '#menu-close { transition: transform .3s cubic-bezier(.25,.8,.25,1); }',
      '#menu-close:hover { transform: rotate(90deg); }'
    ].join('\n');
    document.head.appendChild(s);
  }

  /* Wipe legacy inline styles so the CSS class can take over */
  menu.style.opacity = '';
  menu.style.pointerEvents = '';
  menu.style.background = '';
  menu.style.transition = '';
  menu.querySelectorAll('.mob-link, .mob-footer').forEach(function (el) {
    el.style.opacity = '';
    el.style.transform = '';
    el.style.transition = '';
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

  menu.querySelectorAll('.mob-link').forEach(function (el) {
    el.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });
})();
