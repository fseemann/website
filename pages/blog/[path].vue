<template>
  <main class="py-16">
    <article>
      <ContentDoc :path="route.path" v-slot="{doc}">
        <p class="text-stone-600 dark:text-slate-200">{{ dateFormat.format(doc.writtenAt) }}</p>
        <ContentRenderer class="mt-4 prose prose-pre:bg-slate-50 dark:prose-pre:bg-slate-800 dark:prose-invert sm:prose-lg lg:prose-xl" :value="doc" />
      </ContentDoc>
    </article>
  </main>
</template>

<script setup>
import { useDateFormat } from "~/shared/useDateFormat";

const route = useRoute();
const dateFormat = useDateFormat();
</script>