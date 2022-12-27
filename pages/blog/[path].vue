<template>
  <main class="py-16">
    <article>
      <ContentDoc :path="route.path" v-slot="{doc}">
        <p class="text-slate-200">{{ dateFormat.format(doc.writtenAt) }}</p>
        <ContentRenderer class="mt-4 prose prose-invert sm:prose-lg lg:prose-xl" :value="doc" />
      </ContentDoc>
    </article>
  </main>
</template>

<script setup>
import { useDateFormat } from "~/shared/useDateFormat";

const route = useRoute();
const dateFormat = useDateFormat();
</script>