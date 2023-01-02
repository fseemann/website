<template>
  <main class="py-16">
    <article>
      <p class="text-neutral-600 dark:text-neutral-200">{{ dateFormat.format(doc.writtenAt) }}</p>
      <ContentRenderer
        class="mt-4 prose prose-neutral prose-pre:bg-slate-50 dark:prose-pre:bg-neutral-800 dark:prose-invert sm:prose-lg lg:prose-xl"
        :value="doc" />
    </article>
  </main>
</template>

<script setup>
const route = useRoute();
const dateFormat = useDateFormat();

const path = route.path.charAt(route.path.length - 1) === "/" ? route.path.substr(0, route.path.length - 1) : route.path;

const doc = await queryContent()
  .where({ _path: path })
  .findOne()
  .catch(() => {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found"
    });
  })

const head = useBlogHead(doc)

onBeforeRouteLeave(() => {
  head.dispose()
})
</script>