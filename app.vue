<template>
  <NuxtPage />
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
        'Software development, Domain-Driven Design, Freelancer, Kotlin, Java, Vue'
    },
    { name: 'description', content: 'Freiberuflicher Full-Stack Developer und Domain-Driven Design Spezialist.' },
    { name: 'author', content: 'Felix Seemann' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
    }
  ]
})
</script>
