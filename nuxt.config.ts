export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/color-mode', '@nuxt/image-edge'],
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
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
    navigation: {
      fields: ['description', 'writtenAt', 'thumbnail', 'thumbnailAlt'],
    },
  },
  colorMode: {
    classSuffix: '',
    fallback: 'light',
  },
})
