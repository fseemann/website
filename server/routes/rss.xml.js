import { Feed } from 'feed'
import { serverQueryContent } from '#content/server'

const basePath = 'https://www.felixseemann.de'

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event, {
    only: ['title', 'description', 'writtenAt', '_path'],
    sort: { writtenAt: -1 },
    limit: 5,
  }).find()

  const feed = new Feed({
    title: 'Felix Seemann',
    description: 'Software engineering blog.',
    id: basePath,
    link: basePath,
    language: 'en',
    favicon: basePath + '/favicon.ico',
    copyright: 'All rights reserved 2022, Felix Seemann',
    feedLinks: {
      rss: basePath + '/rss.xml',
    },
    author: {
      name: 'Felix Seemann',
      email: 'fseemann@mail.de',
      link: basePath,
    },
  })

  docs.forEach((doc) => {
    feed.addItem({
      title: doc.title,
      id: basePath + doc._path,
      link: basePath + doc._path,
      description: doc.description,
      date: new Date(doc.writtenAt),
    })
  })

  return feed.rss2()
})
