
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta Modo Infantil (Aventura & Estímulo)
        kid: {
          yellow: '#FFC83B',
          orange: '#FF7A59',
          sky: '#4EA8DE',
          turquoise: '#2EC4B6',
          bg: '#FFF9E6',
          dark: '#1E293B'
        },
        // Paleta Modo Terceira Idade (Clareza, Alto Contraste & WCAG AAA)
        senior: {
          blue: '#2A6FDB',
          green: '#15883E',
          amber: '#D97706',
          bg: '#F8F9FA',
          card: '#FFFFFF',
          text: '#0F172A'
        }
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  }
};
