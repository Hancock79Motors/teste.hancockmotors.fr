/**
 * Shifting Dropdown Nav — Hancock Motors
 * Vanilla JS port of the ShiftingDropDown React component.
 * Works with #shift-nav-group, [data-shift-tab], #shift-overlay,
 * #shift-nub, and [data-content] elements.
 *
 * Overlay centers itself under the active tab button.
 */
(function () {
  'use strict';

  var selected = null;

  /* Direction between previous and next tab (for slide animation) */
  function dir(prev, next) {
    if (prev === null || next === null) return null;
    return prev > next ? 'r' : 'l';
  }

  /**
   * Move the overlay so it is centred under the active tab.
   * The nub is pinned to the overlay's horizontal centre (always points
   * at the tab since the overlay moves to sit under it).
   */
  function positionOverlay(id) {
    var nub = document.getElementById('shift-nub');
    var ov  = document.getElementById('shift-overlay');
    var tab = document.getElementById('shift-tab-' + id);
    var ng  = document.getElementById('shift-nav-group');
    if (!nub || !ov || !tab || !ng) return;

    var tabRect = tab.getBoundingClientRect();
    var ngRect  = ng.getBoundingClientRect();
    var ovWidth = ov.offsetWidth;

    /* Centre of the tab, relative to the nav group's left edge */
    var tabCenterInNav = tabRect.left + tabRect.width / 2 - ngRect.left;

    /* Desired overlay left = centred under tab */
    var ovLeft = tabCenterInNav - ovWidth / 2;

    /* Clamp: keep overlay inside viewport with 8px margin */
    var absLeft = ngRect.left + ovLeft;
    if (absLeft < 8) {
      ovLeft = 8 - ngRect.left;
    }
    var absRight = ngRect.left + ovLeft + ovWidth;
    if (absRight > window.innerWidth - 8) {
      ovLeft = window.innerWidth - 8 - ovWidth - ngRect.left;
    }

    ov.style.left = ovLeft + 'px';

    /* Nub at the centre of the overlay (which is already under the tab) */
    nub.style.left = (ovWidth / 2) + 'px';
  }

  /* Activate a tab: show overlay, animate panel, position under tab */
  function show(id) {
    var d = dir(selected, id);
    selected = id;

    var ov = document.getElementById('shift-overlay');
    if (!ov) return;

    ov.style.opacity       = '1';
    ov.style.transform     = 'translateY(0)';
    ov.style.pointerEvents = 'auto';

    /* Position after overlay is visible so offsetWidth is accurate */
    requestAnimationFrame(function () { positionOverlay(id); });

    /* Show correct content panel with directional slide */
    ov.querySelectorAll('[data-content]').forEach(function (panel) {
      if (+panel.dataset.content === id) {
        panel.hidden = false;
        var startX = d === 'l' ? '72px' : d === 'r' ? '-72px' : '0px';
        panel.style.cssText = 'opacity:0;transform:translateX(' + startX + ');transition:none';
        panel.offsetHeight; /* force reflow */
        panel.style.cssText = 'opacity:1;transform:translateX(0);transition:opacity .22s ease,transform .22s ease';
      } else {
        panel.hidden = true;
        panel.style.cssText = '';
      }
    });

    /* Update tab button visual state */
    document.querySelectorAll('[data-shift-tab]').forEach(function (btn) {
      var isActive = +btn.dataset.shiftTab === id;
      btn.style.background = isActive ? 'rgba(255,255,255,0.07)' : '';
      var svg = btn.querySelector('svg[data-chevron]');
      if (svg) svg.style.transform = isActive ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  }

  /* Deactivate: hide overlay, reset tabs */
  function hide() {
    selected = null;

    var ov = document.getElementById('shift-overlay');
    if (!ov) return;

    ov.style.opacity   = '0';
    ov.style.transform = 'translateY(8px)';
    setTimeout(function () {
      if (selected === null) ov.style.pointerEvents = 'none';
    }, 220);

    document.querySelectorAll('[data-shift-tab]').forEach(function (btn) {
      btn.style.background = '';
      var svg = btn.querySelector('svg[data-chevron]');
      if (svg) svg.style.transform = 'rotate(0deg)';
    });
  }

  /* Boot */
  function init() {
    var ng = document.getElementById('shift-nav-group');
    if (!ng) return;

    ng.querySelectorAll('[data-shift-tab]').forEach(function (btn) {
      btn.addEventListener('mouseenter', function () { show(+btn.dataset.shiftTab); });
    });

    ng.addEventListener('mouseleave', hide);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
