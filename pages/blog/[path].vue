<template>
  <main class="py-16">
    <article class="prose prose-invert sm:prose-lg lg:prose-xl">
      <ContentDoc :path="route.path" />
    </article>
  </main>
</template>

<script setup>
const route = useRoute();
console.log(route.path)
</script>