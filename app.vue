<template>
  <div class="bg-slate-900">
    <div
      class="min-h-screen mx-auto max-w-screen-lg px-8 py-16 text-slate-400 antialiased font-sans flex flex-col"
    >
      <header>
        <nav class="flex justify-between text-slate-100">
          <div>
            <NuxtLink class="font-bold text-2xl" to="/">Felix Seemann</NuxtLink>
            <p class="mt-4 leading-relaxed max-w-lg">
              <span class="text-slate-100 font-bold">Full-Stack Developer</span> und
              <span class="text-slate-100 font-bold"
              >Domain-Driven Design Spezialist</span
              >
              mit 7+ Jahren Berufserfahrung.
            </p>
          </div>
          <div class="flex items-start space-x-6">
            <NuxtLink class="font-medium" to="/blog">Blog</NuxtLink>
            <a href="mailto:fseemann@mail.de" class="font-medium">Contact</a>
          </div>
        </nav>
      </header>
      <NuxtPage />
      <footer class="text-sm leading-relaxed mt-auto">
        <p>© 2022 Felix Seemann</p>
        <nav aria-label="Legal">
          <p>
            Mein
            <nuxt-link
              to="imprint"
              class="underline"
              >Impressum</nuxt-link
            >
          </p>
        </nav>
      </footer>
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
