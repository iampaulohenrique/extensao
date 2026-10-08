
(function (PS) {
  'use strict';

  const THEMES = {
    senior: {
      classes: {
        'app-body': 'bg-[#F8F9FA] text-[#0F172A] font-inter antialiased transition-colors duration-300',
        'btn-mode-kid': 'px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 transition-all flex items-center gap-1.5',
        'btn-mode-senior': 'px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all bg-[#2A6FDB] text-white shadow-sm',
        'brand-title': 'text-xl font-bold tracking-tight text-[#2A6FDB]',
        'logo-icon-box': 'w-11 h-11 rounded-2xl bg-blue-100 text-[#2A6FDB] flex items-center justify-center shadow-inner text-2xl',
        'hero-section': 'relative overflow-hidden rounded-3xl bg-white border-2 border-[#2A6FDB] p-6 md:p-10 shadow-md transition-all duration-300',
        'hero-tag-text': 'text-[#2A6FDB] font-semibold text-xs',
        'hero-title': 'text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight',
        'hero-desc': 'text-base md:text-lg text-[#0F172A] leading-relaxed font-sans',
        'mascot-tip': 'mt-3 text-xs bg-blue-50 text-blue-900 border border-blue-200 p-2.5 rounded-xl font-medium',
        'hero-btn-play': 'px-6 py-3 rounded-2xl bg-[#2A6FDB] text-white font-bold shadow-md hover:bg-blue-700 active:scale-95 transition-all flex items-center gap-2',
        'hero-btn-sim': 'px-6 py-3 rounded-2xl bg-[#15883E] text-white font-bold shadow-md hover:bg-green-700 active:scale-95 transition-all flex items-center gap-2'
      },
      content: {
        'hero-tag-icon': '👓',
        'hero-tag-text': 'Modo Acessível Terceira Idade - Alta Legibilidade',
        'hero-title': 'Proteja suas memórias e sua família no mundo digital',
        'hero-desc': 'Compartilhar fotos com netos e amigos pelo celular é uma alegria. No entanto, golpistas usam detalhes de nossas fotos (como faturas, endereços e rotinas) para criar armadilhas. Aprenda de forma simples e tranquila como manter suas imagens em segurança.',
        'mascot-avatar': '🧑‍🏫',
        'mascot-name': 'Professor Paulo (Guia de Segurança)',
        'mascot-quote': '"A internet não esquece com facilidade. Só compartilhe aquilo que você mostraria para um desconhecido na praça."',
        'mascot-tip': '🛡️ Dica de ouro: Nunca tire foto do comprovante de aposentadoria ou do cartão de crédito.'
      }
    },

    kid: {
      classes: {
        'app-body': 'bg-[#FFF9E6] text-[#1E293B] font-fredoka antialiased transition-colors duration-300',
        'btn-mode-kid': 'px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all bg-kid-yellow text-kid-dark shadow-sm',
        'btn-mode-senior': 'px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 transition-all flex items-center gap-1.5',
        'brand-title': 'text-xl font-bold tracking-tight text-kid-orange',
        'logo-icon-box': 'w-11 h-11 rounded-2xl bg-kid-yellow flex items-center justify-center shadow-inner text-2xl',
        'hero-section': 'relative overflow-hidden rounded-3xl bg-gradient-to-r from-kid-yellow/30 via-kid-sky/20 to-kid-orange/20 border-2 border-kid-yellow p-6 md:p-10 shadow-lg transition-all duration-300',
        'hero-tag-text': '',
        'hero-title': 'text-3xl md:text-4xl lg:text-5xl font-extrabold text-kid-dark leading-tight',
        'hero-desc': 'text-base md:text-lg text-gray-700 leading-relaxed font-sans',
        'mascot-tip': 'mt-3 text-xs bg-kid-turquoise/20 text-teal-800 p-2 rounded-xl font-medium',
        'hero-btn-play': 'px-6 py-3 rounded-2xl bg-kid-orange text-white font-bold shadow-lg hover:brightness-105 active:scale-95 transition-transform flex items-center gap-2',
        'hero-btn-sim': 'px-6 py-3 rounded-2xl bg-kid-sky text-white font-bold shadow-lg hover:brightness-105 active:scale-95 transition-transform flex items-center gap-2'
      },
      content: {
        'hero-tag-icon': '⚡',
        'hero-tag-text': 'Missão Proteção Ativa na Internet',
        'hero-title': 'Você sabe para onde vão suas fotos depois do clique?',
        'hero-desc': 'Compartilhar momentos com quem a gente ama é muito legal! Mas quando uma foto cai na internet, ela pode carregar segredos perigosos como o local da sua escola, a placa da sua casa ou até informações bancárias. Venha aprender a proteger seus momentos com o <strong class="text-kid-orange font-bold">PhotoSafe</strong>!',
        'mascot-avatar': '🤖',
        'mascot-name': 'Pixel, o Robô Guardião',
        'mascot-quote': '"Lembre-se: foto na rede pública é como colar um cartaz no meio da rua!"',
        'mascot-tip': '💡 Dica rápida: nunca tire foto mostrando a fachada da sua casa!'
      }
    }
  };

  /**
   * Aplica um tema à página.
   * @param {'kid'|'senior'} themeName
   */
  PS.switchTheme = function (themeName) {
    const theme = THEMES[themeName];
    if (!theme) return;

    PS.state.theme = themeName;

    Object.keys(theme.classes).forEach(function (id) {
      const el = PS.$(id);
      if (el) el.className = theme.classes[id];
    });

    Object.keys(theme.content).forEach(function (id) {
      const el = PS.$(id);
      if (el) el.innerHTML = theme.content[id];
    });
  };
})(window.PhotoSafe = window.PhotoSafe || {});
