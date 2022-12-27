<template>
  <div class="bg-slate-900">
    <div
      class="min-h-screen mx-auto max-w-screen-lg px-8 py-16 text-slate-100 antialiased font-sans flex flex-col"
    >
      <header>
        <nav class="flex justify-between">
          <div>
            <NuxtLink class="font-bold text-2xl" to="/">Felix Seemann</NuxtLink>
          </div>
          <div class="flex items-start space-x-6">
            <NuxtLink class="font-medium" to="/blog">Blog</NuxtLink>
            <a href="mailto:fseemann@mail.de" class="font-medium">Contact</a>
          </div>
        </nav>
        <p class="mt-2 max-w-lg">
          I’m a Full-Stack Developer with a focus on
          Software Architecture and Domain-Driven Design.
        </p>
      </header>
      <NuxtPage />
      <div class="mt-auto">
      <footer class="mt-16 flex justify-between">
        <p>© 2022 Felix Seemann</p>
        <nav aria-label="Legal">
            <nuxt-link
              to="imprint"
              class="underline"
              >Imprint</nuxt-link
            >
        </nav>
      </footer>
    </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Felix Seemann',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {
      name: 'keywords',
      content:
        'Software development, Domain-Driven Design, Freelancer, Kotlin, Java, Vue',
    },
    { name: 'description', content: 'Freiberuflicher Full-Stack Developer und Domain-Driven Design Spezialist.' },
    { name: 'author', content: 'Felix Seemann' },
  ],
})
</script>
