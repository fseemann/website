/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.vue', './pages/**/*.vue', './components/**/*.vue'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
