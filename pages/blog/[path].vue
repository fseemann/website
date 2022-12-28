<template>
  <main class="py-16">
    <article>
      <ContentDoc :path="path" v-slot="{doc}">
        <p class="text-neutral-600 dark:text-neutral-200">{{ dateFormat.format(doc.writtenAt) }}</p>
        <ContentRenderer
          class="mt-4 prose prose-pre:bg-slate-50 dark:prose-pre:bg-neutral-800 dark:prose-invert sm:prose-lg lg:prose-xl"
          :value="doc" />
      </ContentDoc>
    </article>
  </main>
</template>

<script setup>
import { useDateFormat } from "~/shared/useDateFormat";

const route = useRoute();
const dateFormat = useDateFormat();

const path = route.path.charAt(route.path.length - 1) === "/" ? route.path.substr(0, route.path.length - 1) : route.path;

</script>