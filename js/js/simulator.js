
(function (PS) {
  'use strict';

  const PHOTO_TYPES = ['parque', 'festa', 'documento'];

  const VIEWERS = {
    vovo:     { label: '👵 Vovó Maria',          email: 'vovo.maria@familia.com' },
    primo:    { label: '🧒 Primo Lucas',         email: 'lucas.games@escola.com' },
    estranho: { label: '👤 Estranho / Link Direto', email: null }
  };

  const CLASS_PHOTO_ACTIVE = 'p-2.5 rounded-xl border-2 border-kid-sky bg-sky-50 text-center transition';
  const CLASS_PHOTO_IDLE = 'p-2.5 rounded-xl border border-gray-300 bg-white text-center hover:bg-sky-50 transition';

  const CLASS_BADGE_OK = 'text-xs px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 font-bold';
  const CLASS_BADGE_BLOCKED = 'text-xs px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 font-bold';
  const CLASS_HTTP_OK = 'font-mono bg-green-600/40 text-green-300 px-2 py-0.5 rounded';
  const CLASS_HTTP_BLOCKED = 'font-mono bg-red-600/40 text-red-300 px-2 py-0.5 rounded';


  function updateDisplay() {
    const data = PS.data.photoDatabase[PS.state.selectedPhotoType];
    const exifEl = PS.$('sim-screen-exif-status');

    PS.$('sim-screen-emoji').textContent = data.emoji;
    PS.$('sim-screen-filename').textContent = data.name;

    if (PS.state.isExifStripped) {
      exifEl.textContent = '✓ Metadados limpos (Localização ocultada com sucesso)';
      exifEl.className = 'text-xs text-teal-400 mt-1';
    } else {
      exifEl.textContent = '⚠️ Perigo: GPS e modelo da câmera expostos no cabeçalho!';
      exifEl.className = 'text-xs text-amber-400 mt-1 font-bold';
    }
  }

  function setAccessUI(granted) {
    PS.state.hasActivePermission = granted;

    PS.$('sim-forbidden-overlay').classList.toggle('hidden', granted);

    const badge = PS.$('sim-status-badge');
    badge.textContent = granted ? '● Acesso Liberado' : '● Acesso 403 Bloqueado';
    badge.className = granted ? CLASS_BADGE_OK : CLASS_BADGE_BLOCKED;

    const httpCode = PS.$('sim-http-code');
    httpCode.textContent = granted ? 'HTTP 200 OK' : 'HTTP 403 FORBIDDEN';
    httpCode.className = granted ? CLASS_HTTP_OK : CLASS_HTTP_BLOCKED;
  }


  PS.simSelectPhoto = function (type) {
    if (PHOTO_TYPES.indexOf(type) === -1) return;

    PS.state.selectedPhotoType = type;
    PHOTO_TYPES.forEach(function (t) {
      PS.$('sim-pick-' + t).className = t === type ? CLASS_PHOTO_ACTIVE : CLASS_PHOTO_IDLE;
    });

    updateDisplay();
    PS.logAudit("[UPLOAD] Arquivo '" + PS.data.photoDatabase[type].name + "' selecionado pelo usuário.");
  };

  PS.simToggleExif = function () {
    PS.state.isExifStripped = PS.$('chk-strip-exif').checked;
    updateDisplay();

    if (PS.state.isExifStripped) {
      PS.logAudit('[EXIF] Sanitização ativada: Metadados GPS e Tags EXIF expurgadas com sucesso.');
    } else {
      PS.logAudit('[ALERTA] Sanitização desativada: Imagem contém coordenadas GPS nos metadados!');
    }
  };

  PS.simRevoke = function () {
    setAccessUI(false);
    PS.logAudit('[REVOGAÇÃO DINÂMICA] Token invalidado. Linha deletada em PERMISSAO_ACESSO. Retornando HTTP 403.');
  };

  PS.simGrantToSelected = function () {
    const key = PS.$('sim-target-user').value;
    const viewer = VIEWERS[key];
    if (!viewer) return;

    PS.$('sim-user-label').innerHTML = 'Visualizador atual: <strong>' + viewer.label + '</strong>';

    if (viewer.email) {
      PS.logAudit('[PERMISSÃO] Autorizado acesso explícito para: ' + viewer.email);
      setAccessUI(true);
    } else {
      PS.logAudit('[ZERO TRUST] Tentativa de acesso não registrado. Analisando token...');
      PS.simRevoke();
    }
  };

  PS.simPurge = function () {
    PS.simRevoke();
    PS.logAudit('[DELETION PURGE] Executando remoção física do storage S3 e expurgo imediato do cache (Zero Delay).');
    PS.logAudit('[CONFIRMAÇÃO] Arquivo completamente destruído sem persistência residual.');
  };

  PS.simRestore = function () {
    setAccessUI(true);
    PS.logAudit('[RESTAURAÇÃO] Permissão revalidada para testes acadêmicos.');
  };

  PS.simUpdateDisplay = updateDisplay;
})(window.PhotoSafe = window.PhotoSafe || {});
