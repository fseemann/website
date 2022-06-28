<template>
  <div class="min-h-screen bg-slate-900">
    <div
      class="mx-auto max-w-screen-lg px-8 py-16 text-slate-400 antialiased font-sans"
    >
      <NuxtPage />
      <footer class="text-sm leading-relaxed">
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
    { name: 'description', content: 'Freelancer website.' },
    { name: 'author', content: 'Felix Seemann' },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
    },
  ],
})
</script>
