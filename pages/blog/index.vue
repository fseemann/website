<template>
<div>
  <ol v-for="blogEntry in blogEntries" v-bind:key="blogEntry.title"><li class="">
    <NuxtLink class="block p-6 border border-slate-50 rounded-xl" :to="blogEntry._path">
      <h2>{{ blogEntry.title }}</h2>
      <span>{{ formatDate(blogEntry.writtenAt) }}</span>
      <p>{{ blogEntry.description }}</p>
    </NuxtLink>
  </li></ol>
</div>
</template>

<script setup>
const blogEntries = await queryContent('blog').find()
const dateFormatter = Intl.DateTimeFormat()

const formatDate = (date) => dateFormatter.format(new Date(date))
</script>
