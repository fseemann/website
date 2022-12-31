export default defineNuxtRouteMiddleware((to, from) => {
  if (to == null || to.path.includes('/blog/')) {
    // Head will be set by the blog post through nuxt content
    return
  }

  // Reset head
  useHead({
    title: 'Felix Seemann',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        name: 'keywords',
        content: 'Domain-Driven Design, DDD, Software Development, Blog',
      },
      {
        name: 'description',
        content:
          'Freelance full-stack developer and domain-driven design specialist.',
      },
      { name: 'author', content: 'Felix Seemann' },
    ],
    link: [
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'Felix Seemann',
        href: 'https://www.felixseemann.de/rss.xml',
      },
    ],
  })
})
