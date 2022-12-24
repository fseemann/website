/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.vue', './pages/**/*.vue'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
