/**
 * Dados estáticos da aplicação (conteúdo do quiz e fotos do simulador).
 * Separar dados da lógica facilita manutenção e futura integração com API.
 */
(function (PS) {
  'use strict';

  /** Cenários do quiz "Pode Postar ou Dá Ruim?" */
  const quizScenarios = [
    {
      id: 1,
      title: 'Foto no portão da escola com uniforme',
      desc: 'A foto mostra claramente o logotipo da escola, o nome bordado na camisa e a rua da saída.',
      emoji: '🏫',
      hasGps: true,
      canPost: false,
      feedbackCorrect: 'Excelente! Nunca compartilhe fotos com o símbolo da escola ou nome visível. Isso protege você de pessoas mal-intencionadas saberem seus horários e trajetos.',
      feedbackWrong: 'Cuidado! O uniforme e o endereço dão pistas exatas da sua localização diária para qualquer desconhecido.'
    },
    {
      id: 2,
      title: 'Piquenique no quintal sem pontos de referência',
      desc: 'Uma foto divertida brincando com o cachorrinho na grama, com céu ao fundo e sem placas de rua ou metadados de GPS.',
      emoji: '🐶',
      hasGps: false,
      canPost: true,
      feedbackCorrect: 'Mandou muito bem! Momentos descontraídos sem exibir documentos, endereços ou uniformes são ótimos e seguros para amigos próximos!',
      feedbackWrong: 'Na verdade, essa foto é segura! Não há dados pessoais nem locais sensíveis identificáveis.'
    },
    {
      id: 3,
      title: 'Comemoração com cartão do banco na mesa',
      desc: 'Selfie comemorando um almoço em família, mas o cartão bancário ou fatura ficou visível em cima da mesa.',
      emoji: '💳',
      hasGps: false,
      canPost: false,
      feedbackCorrect: 'Olho vivo! Golpistas podem usar até os 4 últimos dígitos e o nome impresso para aplicar golpes telefônicos ou de falso Pix.',
      feedbackWrong: 'Atenção máxima! Documentos, faturas e cartões em segundo plano geram fraudes financeiras gravíssimas.'
    },
    {
      id: 4,
      title: 'Foto de viagem postada após voltar para casa',
      desc: 'Foto linda na praia, publicada quando a família já está em segurança de volta ao lar e sem transmissão ao vivo.',
      emoji: '🏖️',
      hasGps: false,
      canPost: true,
      feedbackCorrect: 'Estratégia de mestre! Postar lembranças depois de voltar da viagem evita avisar que sua residência está vazia.',
      feedbackWrong: 'Essa postura é segura: publicar fotos de férias após retornar é uma recomendação oficial de segurança física e digital!'
    }
  ];

  /** Fotos disponíveis no simulador do sistema */
  const photoDatabase = {
    parque:    { name: 'passeio_parque_domingo.jpg', emoji: '🌳', desc: 'Foto em área pública com amigos' },
    festa:     { name: 'aniversario_familia.png',    emoji: '🎂', desc: 'Foto de celebração íntima' },
    documento: { name: 'recibo_e_documento.jpg',     emoji: '📄', desc: 'Comprovante com dados restritos' }
  };

  PS.data = { quizScenarios, photoDatabase };
})(window.PhotoSafe = window.PhotoSafe || {});
