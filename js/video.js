
(function (PS) {
  'use strict';

  const VIDEO_DURATION_SECONDS = 134; // 02:14
  const TICK_INTERVAL_MS = 300;       // acelerado para fins de demonstração

  let elapsed = 0; // segundos já reproduzidos (permite pausar e retomar)

  function pad(value) {
    return String(value).padStart(2, '0');
  }

  PS.videoToggle = function () {
    const playBtn = PS.$('video-play-btn');
    const progressBar = PS.$('video-progress-bar');
    const statusText = PS.$('video-status-text');
    const timer = PS.$('video-timer');

    if (PS.state.isVideoPlaying) {
      PS.state.isVideoPlaying = false;
      clearInterval(PS.state.videoProgressInterval);
      playBtn.textContent = '▶';
      statusText.textContent = 'Vídeo pausado. Clique para retomar.';
      return;
    }

    PS.state.isVideoPlaying = true;
    playBtn.textContent = '⏸';
    statusText.textContent = 'Reproduzindo: Dicas práticas contra o Deletion Delay...';

    if (elapsed >= VIDEO_DURATION_SECONDS) elapsed = 0; // reinício após o fim

    PS.state.videoProgressInterval = setInterval(function () {
      elapsed++;

      const percent = Math.min((elapsed / VIDEO_DURATION_SECONDS) * 100, 100);
      progressBar.style.width = percent + '%';
      timer.textContent = pad(Math.floor(elapsed / 60)) + ':' + pad(elapsed % 60);

      if (elapsed >= VIDEO_DURATION_SECONDS) {
        clearInterval(PS.state.videoProgressInterval);
        PS.state.isVideoPlaying = false;
        playBtn.textContent = '↺';
        statusText.textContent = 'Vídeo finalizado! Compartilhe esta ideia com amigos.';
      }
    }, TICK_INTERVAL_MS);
  };
})(window.PhotoSafe = window.PhotoSafe || {});
