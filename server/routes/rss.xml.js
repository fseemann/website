import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  console.log('test')
  const docs = await serverQueryContent(event, {
    only: ['title', 'description', 'writtenAt', '_path'],
    sort: { writtenAt: -1 },
    limit: 5,
  }).find()

  console.log(docs)
  console.log('finished')

  const basePath = 'https://www.felixseemann.de'

  const items = docs
    .map(
      (doc) => `
  <item>
    <title>${doc.title}</title>
    <link>${basePath}/blog${doc._path}</link>
    <description>${doc.description}</description>
  </item>
  `
    )
    .reduce((acc, cur) => {
      return acc + cur
    }, '')

  return `
  <?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
  <channel>
  <title>Felix Seemann</title>
  <link>${basePath}</link>
  <description>Software engineering blog.</description>
  ${items}
  </channel>
  </rss>
  `
})
