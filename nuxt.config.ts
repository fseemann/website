export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/tailwind.css'],
  content: {
    highlight: {
      preload: ['java'],
      theme: 'github-dark',
    },
    navigation: {
      fields: ['description', 'writtenAt'],
    },
  },
})
