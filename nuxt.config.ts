export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/color-mode'],
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
  colorMode: {
    classSuffix: '',
    fallback: 'light',
  },
})
