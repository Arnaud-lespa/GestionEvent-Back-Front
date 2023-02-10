/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#C3BEFF',
      'pink': '#ff49db',
      'orange': '#F87060',
      'green': '#13ce66',
      'yellow': '#E9F993',
      'light': '#DEC4A1',
      'gray-dark': '#202020',
      'gray': '#272727',
      'gray-light': '#d3dce6',
      'white' : '#f5f5f5',
      'glass' : 'rgba(96, 96, 96, 0.59)'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      roboto: ['Roboto', 'serif'],
    },
    
    extend : {

    backgroundImage : {
      'hero-pattern': "url('/assets/images/hero.jpg')",
      'hero-login': "url('/assets/images/login.svg')",
      'card-grandiant' : "linear-gradient(90deg, rgba(195,190,255,1) 0%, rgba(222,196,161,1) 100%)"

      },
    
      boxShadow : {
        'log' : ' 0 4px 30px rgba(0, 0, 0, 0.1)',
        'event' : '20px 20px 81px #151515,-20px -20px 81px #393939',
      }
    }
  },
  plugins: [],
}
