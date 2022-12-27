<template>
  <div>
    <ol class="grid grid-cols-2 gap-8">
      <ContentNavigation :query="query" v-slot="{ navigation }">
        <li class="space-y-4" v-for="blogEntry in navigation[0].children" :key="blogEntry.title">
          <img class="w-full" src="@/assets/svg/one-to-many.svg" alt="Image of a OneToMany-Relation">
          <div>
            <h2 class="text-xl font-bold">{{ blogEntry.title }}</h2>
            <p class="mt-2">{{ blogEntry.description }}</p>
          </div>
          <div>
            <NuxtLink class="font-bold text-slate-100 underline" :to="blogEntry._path">
              Read blog entry
            </NuxtLink>
          </div>
          <p class="text-stone-600 dark:text-slate-400">{{ dateFormat.format(blogEntry.writtenAt) }}</p>
        </li>
      </ContentNavigation>
    </ol>
  </div>
</template>

<script setup>
import { useDateFormat } from "~/shared/useDateFormat";

const query = queryContent("blog");
const dateFormat = useDateFormat();
</script>
