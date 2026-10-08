
(function (PS) {
  'use strict';

  const POINTS_PER_CORRECT = 25;
  const MIN_STARS = 1;
  let initialMarkup = '';

  function renderScenario() {
    const scenario = PS.data.quizScenarios[PS.state.quizIndex];

    PS.$('quiz-feedback-box').classList.add('hidden');
    PS.$('quiz-actions').classList.remove('opacity-40', 'pointer-events-none');

    PS.$('quiz-progress-text').textContent =
      'Cenário ' + (PS.state.quizIndex + 1) + ' de ' + PS.data.quizScenarios.length;
    PS.$('quiz-photo-emoji').textContent = scenario.emoji;
    PS.$('quiz-photo-desc').textContent = scenario.title + ' — ' + scenario.desc;
    PS.$('quiz-question-prompt').textContent =
      'Você acha recomendável compartilhar este registro nas redes sociais?';

    const badge = PS.$('quiz-photo-badge');
    if (scenario.hasGps) {
      badge.classList.remove('hidden');
      badge.textContent = 'GPS ATIVADO';
    } else {
      badge.classList.add('hidden');
    }
  }

  function showFinalScreen() {
    PS.$('quiz-container').innerHTML =
      '<div class="text-center py-8 space-y-4 fade-in">' +
        '<span class="text-6xl">🏆</span>' +
        '<h3 class="text-2xl font-bold text-gray-900">Parabéns! Desafio Concluído!</h3>' +
        '<p class="text-sm text-gray-600 max-w-md mx-auto">' +
          'Você acumulou <strong>' + PS.state.score + ' pontos</strong> e agora está muito mais preparado para navegar com privacidade e evitar golpes digitais.' +
        '</p>' +
        '<div class="pt-2">' +
          '<button type="button" data-action="quiz-restart" class="px-6 py-2.5 bg-kid-orange hover:bg-orange-600 text-white font-bold rounded-xl shadow">' +
            'Jogar Novamente ↺' +
          '</button>' +
        '</div>' +
      '</div>';
  }

  PS.quizInit = function () {
    initialMarkup = PS.$('quiz-container').innerHTML;
    renderScenario();
  };

  PS.quizAnswer = function (userSaidCanPost) {
    const scenario = PS.data.quizScenarios[PS.state.quizIndex];
    const feedbackBox = PS.$('quiz-feedback-box');
    const feedbackIcon = PS.$('feedback-icon');
    const feedbackTitle = PS.$('feedback-title');
    const feedbackExplanation = PS.$('feedback-explanation');

    PS.$('quiz-actions').classList.add('opacity-40', 'pointer-events-none');
    feedbackBox.classList.remove('hidden');

    if (userSaidCanPost === scenario.canPost) {
      PS.state.score += POINTS_PER_CORRECT;
      feedbackIcon.textContent = '🌟';
      feedbackTitle.textContent = 'Muito bem! Decisão Corretíssima!';
      feedbackTitle.className = 'font-bold text-base text-green-700';
      feedbackBox.className = 'mt-4 p-4 rounded-xl border border-green-300 bg-green-50 transition-all fade-in';
      feedbackExplanation.textContent = scenario.feedbackCorrect;
    } else {
      feedbackIcon.textContent = '⚠️';
      feedbackTitle.textContent = 'Atenção redobrada!';
      feedbackTitle.className = 'font-bold text-base text-amber-700';
      feedbackBox.className = 'mt-4 p-4 rounded-xl border border-amber-300 bg-amber-50 transition-all fade-in';
      feedbackExplanation.textContent = scenario.feedbackWrong;
      if (PS.state.stars > MIN_STARS) PS.state.stars--;
    }

    PS.$('quiz-score').textContent = PS.state.score;
    PS.$('quiz-stars').textContent = '⭐'.repeat(PS.state.stars);
  };

  PS.quizNext = function () {
    PS.state.quizIndex++;
    if (PS.state.quizIndex >= PS.data.quizScenarios.length) {
      showFinalScreen();
    } else {
      renderScenario();
    }
  };

  PS.quizRestart = function () {
    PS.state.quizIndex = 0;
    PS.state.score = 0;
    PS.state.stars = 3;

    PS.$('quiz-container').innerHTML = initialMarkup;
    PS.$('quiz-score').textContent = PS.state.score;
    PS.$('quiz-stars').textContent = '⭐'.repeat(PS.state.stars);
    renderScenario();
  };
})(window.PhotoSafe = window.PhotoSafe || {});
