<template>
  <div :class="{ 'dark': state.darkMode }">
    <div class="bg-white dark:bg-slate-900">
      <div
        class="min-h-screen mx-auto max-w-screen-lg px-8 py-16 text-stone-800 dark:text-slate-100 antialiased font-sans flex flex-col"
      >
        <header>
          <nav class="flex justify-between">
            <div>
              <NuxtLink class="font-bold text-2xl" to="/">Felix Seemann</NuxtLink>
            </div>
            <div class="flex items-center space-x-8">
              <label class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" v-model="state.darkMode">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-2"><svg-moon class="w-4"/></span>
              </label>
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
  ]
});

const state = reactive({ darkMode: false })
watch(() => state.darkMode, (newValue) => {
  localStorage.setItem('darkMode', newValue === true ? 'on' : 'off')
})

onMounted(() => {
  state.darkMode = localStorage.getItem('darkMode') === 'on'
})

</script>
