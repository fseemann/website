<template>
  <main class="my-16">
    <h2 class="font-bold text-xl sm:text-2xl">Blog</h2>
    <ol class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-16">
        <li v-for="blogEntry in blogEntries" :key="blogEntry.title">
          <card-blog-entry :blog-entry="blogEntry" />
        </li>
    </ol>
  </main>
</template>

<script setup>
const blogEntries = await queryContent("blog")
  .only(['title', 'description', 'writtenAt', 'thumbnail', 'thumbnailAlt', '_path'])
  .sort({ writtenAt: -1 })
  .find()
</script>
