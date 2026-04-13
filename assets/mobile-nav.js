/**
 * Fullscreen mobile nav — Hancock Motors
 * Handles overlay open/close with stagger animation.
 * Works with: #menu-btn, #menu-close, #mobile-menu,
 *             .mob-link, .mob-footer
 */
(function () {
  'use strict';

  var menu    = document.getElementById('mobile-menu');
  var openBtn = document.getElementById('menu-btn');
  var closeBtn;
  if (!menu || !openBtn) return;
  closeBtn = document.getElementById('menu-close');

  var links     = Array.prototype.slice.call(menu.querySelectorAll('.mob-link'));
  var footerEls = Array.prototype.slice.call(menu.querySelectorAll('.mob-footer'));
  var isOpen    = false;
  var hideTimer = null;

  function openMenu() {
    if (isOpen) return;
    isOpen = true;
    clearTimeout(hideTimer);
    document.body.style.overflow = 'hidden';
    menu.setAttribute('aria-hidden', 'false');
    menu.style.pointerEvents = 'auto';

    /* Reset all animated elements before entry */
    links.concat(footerEls).forEach(function (el) {
      el.style.transition = 'none';
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(24px)';
    });

    /* Fade in the overlay backdrop */
    requestAnimationFrame(function () {
      menu.style.transition = 'opacity .3s ease';
      menu.style.opacity    = '1';

      /* Stagger nav links */
      links.forEach(function (el, i) {
        setTimeout(function () {
          el.style.transition = 'opacity .4s ease, transform .4s ease';
          el.style.opacity    = '1';
          el.style.transform  = 'translateY(0)';
        }, 80 + i * 65);
      });

      /* Footer items follow the last link */
      var base = 80 + links.length * 65;
      footerEls.forEach(function (el, i) {
        setTimeout(function () {
          el.style.transition = 'opacity .35s ease, transform .35s ease';
          el.style.opacity    = '1';
          el.style.transform  = 'translateY(0)';
        }, base + i * 55);
      });
    });
  }

  function closeMenu() {
    if (!isOpen) return;
    isOpen = false;
    menu.style.transition = 'opacity .25s ease';
    menu.style.opacity    = '0';
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      if (!isOpen) menu.style.pointerEvents = 'none';
    }, 260);
  }

  openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  links.forEach(function (el) {
    el.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });
})();
