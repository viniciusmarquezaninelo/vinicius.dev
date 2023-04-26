/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './components/**/*.tsx',
    'index.html'
  ],
  theme: {
    extend: {
      colors: {
        back: '#1f1f38',
        primary: '',
        secondary: '#4db5ff',
        cards: '#2c2c6c',
        linhatempo: '#181a1b',
        circles: '#322625;'
      }
    },
  },
  plugins: [],
}

