export const useBlogHead = (doc) =>
  useHead({
    title: doc.title,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { name: 'title', content: doc.title },
      { name: 'description', content: doc.description },
      { name: 'author', content: 'Felix Seemann' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: `https://www.felixseemann.de${doc._path}`,
      },
      { property: 'og:title', content: doc.title },
      { property: 'og:description', content: doc.description },
      {
        property: 'og:image',
        content: `https://www.felixseemann.de${doc.head.image.src}`,
      },
      { property: 'og:image:width', content: doc.head.image.width },
      { property: 'og:image:height', content: doc.head.image.height },
      { property: 'og:image:alt', content: doc.head.image.alt },

      { property: 'twitter:card', content: 'summary_large_image' },
      {
        property: 'twitter:url',
        content: `https://www.felixseemann.de${doc._path}`,
      },
      { property: 'twitter:title', content: doc.title },
      { property: 'twitter:description', content: doc.description },
      {
        property: 'twitter:image',
        content: `https://www.felixseemann.de${doc.head.image.src}`,
      },
      { property: 'twitter:image:width', content: doc.head.image.width },
      { property: 'twitter:image:height', content: doc.head.image.height },
      { property: 'twitter:image:alt', content: doc.head.image.alt },
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

export const useDefaultHead = () =>
  useHead({
    title: 'Felix Seemann',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
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
