<template>
<section class="space-y-4">
  <img class="w-full rounded max-h-32 object-cover" width="411" height="160" :src="blogEntry.thumbnail" :alt="blogEntry.thumbnailAlt" />
  <div>
    <h2 class="text-xl font-bold">{{ blogEntry.title }}</h2>
    <p class="mt-2">{{ blogEntry.description }}</p>
  </div>
  <div>
    <NuxtLink class="font-bold underline" :to="blogEntry._path">
      Read blog entry
    </NuxtLink>
  </div>
  <p class="text-neutral-600 dark:text-neutral-200">{{ dateFormat.format(blogEntry.writtenAt) }}</p>
</section>
</template>

<script setup>
defineProps(['blogEntry'])
const dateFormat = useDateFormat();
</script>
