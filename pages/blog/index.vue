<template>
  <div>
    <ol class="grid grid-cols-2 gap-8">
      <ContentNavigation :query="query" v-slot="{ navigation }">
        <li class="space-y-4" v-for="blogEntry in navigation[0].children" :key="blogEntry.title">
          <img class="w-full" src="@/assets/svg/one-to-many.svg" alt="Image of a OneToMany-Relation">
          <div>
            <h2 class="text-xl font-bold text-slate-100">{{ blogEntry.title }}</h2>
            <p class="mt-2 text-slate-100">{{ blogEntry.description }}</p>
          </div>
          <div>
            <NuxtLink class="font-bold text-slate-100 underline" :to="blogEntry._path">
              Read blog entry
            </NuxtLink>
          </div>
          <p class="text-slate-400">{{ formatDate(blogEntry.writtenAt) }}</p>
        </li>
      </ContentNavigation>
    </ol>
  </div>
</template>

<script setup>
const query = queryContent("blog");
const dateFormatter = Intl.DateTimeFormat([], { dateStyle: "medium" });

const formatDate = (date) => dateFormatter.format(new Date(date));
</script>
