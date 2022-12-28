<template>
  <div class="bg-white dark:bg-neutral-900">
    <div
      class="min-h-screen mx-auto max-w-screen-lg px-8 py-8 text-neutral-800 dark:text-neutral-100 antialiased font-sans leading-snug flex flex-col"
    >
      <header>
        <nav>
          <div class="flex justify-between">
            <div>
              <NuxtLink class="font-bold text-xl sm:text-2xl" to="/">Felix Seemann</NuxtLink>
            </div>
            <div class="flex items-center space-x-4 sm:space-x-8">
              <NuxtLink class="invisible sm:visible" to="/blog">Blog</NuxtLink>
              <input-toggle v-model="darkMode">
                <svg-moon class="w-4" />
              </input-toggle>
            </div>
          </div>
          <div class="mt-4 sm:hidden space-x-4">
            <NuxtLink class="underline" to="/">Home</NuxtLink>
            <NuxtLink class="underline" to="/blog">Blog</NuxtLink>
          </div>
        </nav>
      </header>
      <NuxtPage />
      <div class="mt-auto">
        <footer class="mt-16 flex justify-between">
          <p>© 2022 Felix Seemann</p>
          <nav aria-label="Legal">
            <nuxt-link
              to="/imprint"
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
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    {
      name: "keywords",
      content:
        "Domain-Driven Design, Software Architecture, Blog"
    },
    { name: "description", content: "Freelance full-stack developer and domain-driven design specialist." },
    { name: "author", content: "Felix Seemann" }
  ]
});

const colorMode = useColorMode();

const darkMode = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(newValue) {
    colorMode.preference = newValue ? "dark" : "light";
  }
});

</script>
