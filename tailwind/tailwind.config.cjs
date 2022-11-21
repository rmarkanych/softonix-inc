/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      ...colors,
      primary: '#5B5F62',
      blue: '#2E476B',
      gray: '#6b7280',
      orange: '#F66F4D',
      yellow: '#FAF8ED',
      mainTitle: '#2D3134',
      locationColor: '#FDFEFF',
      locationTxt: '#9498A4'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      sen: ['Sen', 'sans-serif']
    },
    extend: {
      boxShadow: {
        '3xl': '0px 24px 90px rgba(192, 188, 161, 0.22)'
      }
    }
  },
  plugins: []
}
