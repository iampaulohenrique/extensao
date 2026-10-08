(function (PS) {
  'use strict';


  const actions = {
    'scroll-top':      function () { window.scrollTo({ top: 0, behavior: 'smooth' }); },
    'set-theme':       function (el) { PS.switchTheme(el.dataset.theme); },
    'font-size':       function (el) { PS.changeFontSize(Number(el.dataset.delta)); },
    'open-modal':      function (el) { PS.openModal(el.dataset.target); },
    'close-modal':     function (el) { PS.closeModal(el.dataset.target); },

    'quiz-answer':     function (el) { PS.quizAnswer(el.dataset.answer === 'true'); },
    'quiz-next':       function () { PS.quizNext(); },
    'quiz-restart':    function () { PS.quizRestart(); },

    'sim-pick':        function (el) { PS.simSelectPhoto(el.dataset.photo); },
    'sim-revoke':      function () { PS.simRevoke(); },
    'sim-purge':       function () { PS.simPurge(); },
    'sim-restore':     function () { PS.simRestore(); },

    'video-toggle':    function () { PS.videoToggle(); }
  };

  function handleClick(event) {
    const trigger = event.target.closest('[data-action]');
    if (!trigger) return;

    const handler = actions[trigger.dataset.action];
    if (handler) handler(trigger);
  }

  function handleModalBackdropClick(event) {
    if (event.target.hasAttribute('data-modal')) {
      PS.closeModal(event.target.id);
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') PS.closeAllModals();
  }

  function init() {
    document.addEventListener('click', handleClick);
    document.addEventListener('click', handleModalBackdropClick);
    document.addEventListener('keydown', handleKeydown);

    PS.$('chk-strip-exif').addEventListener('change', PS.simToggleExif);
    PS.$('sim-target-user').addEventListener('change', PS.simGrantToSelected);

    PS.quizInit();
    PS.simUpdateDisplay();
    PS.logAudit('PhotoSafe WebApp carregado com sucesso (Sprint 8 USJT).');
  }

  document.addEventListener('DOMContentLoaded', init);
})(window.PhotoSafe = window.PhotoSafe || {});
