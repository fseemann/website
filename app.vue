<template>
  <div class="bg-white dark:bg-slate-900">
    <div
      class="min-h-screen mx-auto max-w-screen-lg px-8 py-8 text-stone-800 dark:text-slate-100 antialiased font-sans leading-snug flex flex-col"
    >
      <header>
        <nav class="flex justify-between">
          <div>
            <NuxtLink class="font-bold text-xl sm:text-2xl" to="/">Felix Seemann</NuxtLink>
          </div>
          <div class="flex items-center space-x-4 sm:space-x-8">
            <NuxtLink to="/blog">Blog</NuxtLink>
            <input-toggle v-model="darkMode">
              <svg-moon class="w-4" />
            </input-toggle>
          </div>
        </nav>
      </header>
      <NuxtPage />
      <div class="mt-auto">
        <footer class="mt-16 flex justify-between">
          <p>© 2022 Felix Seemann</p>
          <nav aria-label="Legal">
            <nuxt-link
              to="imprint"
              class="underline"
            >Imprint
            </nuxt-link
            >
          </nav>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Felix Seemann",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "keywords",
      content:
        "Software development, Domain-Driven Design, Freelancer, Kotlin, Java, Vue"
    },
    { name: "description", content: "Freiberuflicher Full-Stack Developer und Domain-Driven Design Spezialist." },
    { name: "author", content: "Felix Seemann" }
  ],
  script: [
    { src: 'https://platform.twitter.com/widgets.js', charSet: 'utf-8' }
  ]
});

const colorMode = useColorMode();

const darkMode = computed({
  get () {
    return colorMode.preference === "dark"
  },
  set (newValue) {
    colorMode.preference = newValue ? "dark" : "light"
  }
})

</script>
