
(function (PS) {
  'use strict';


  PS.state = {
    theme: 'kid', 
    fontSizeDelta: 0,
    quizIndex: 0,
    score: 0,
    stars: 3,
    selectedPhotoType: 'parque',
    isExifStripped: true,
    hasActivePermission: true,
    isVideoPlaying: false,
    videoProgressInterval: null
  };

  PS.$ = function (id) {
    return document.getElementById(id);
  };

  const FONT_BASE_PX = 16;
  const FONT_STEP_PX = 2;
  const FONT_DELTA_MIN = -2;
  const FONT_DELTA_MAX = 4;

  PS.changeFontSize = function (direction) {
    const next = PS.state.fontSizeDelta + direction;
    PS.state.fontSizeDelta = Math.max(FONT_DELTA_MIN, Math.min(FONT_DELTA_MAX, next));

    const targetSize = FONT_BASE_PX + PS.state.fontSizeDelta * FONT_STEP_PX;
    document.documentElement.style.setProperty('--base-font-size', targetSize + 'px');
  };


  PS.openModal = function (id) {
    const modal = PS.$(id);
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.setAttribute('aria-hidden', 'false');
  };

  PS.closeModal = function (id) {
    const modal = PS.$(id);
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.setAttribute('aria-hidden', 'true');
  };


  PS.closeAllModals = function () {
    document.querySelectorAll('[data-modal]').forEach(function (modal) {
      PS.closeModal(modal.id);
    });
  };


  PS.logAudit = function (message) {
    const logContainer = PS.$('sim-audit-log');
    if (!logContainer) return;

    const timeStr = new Date().toTimeString().split(' ')[0];
    const entry = document.createElement('div');
    entry.textContent = '[' + timeStr + '] ' + message;

    logContainer.appendChild(entry);
    logContainer.scrollTop = logContainer.scrollHeight;
  };
})(window.PhotoSafe = window.PhotoSafe || {});
