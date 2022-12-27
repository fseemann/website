<template>
  <p class="mt-2 max-w-lg">
    I’m a Full-Stack Developer with a focus on
    Software Architecture and Domain-Driven Design.
  </p>
  <main>
    <div class="my-16">
      <h2 class="font-bold text-2xl">Blog</h2>
      <ol class="mt-4 grid sm:grid-cols-2 gap-16">
        <ContentNavigation :query="query" v-slot="{ navigation }">
          <li class="space-y-4" v-for="blogEntry in navigation[0].children" :key="blogEntry.title">
            <img class="w-full" src="@/assets/svg/one-to-many.svg" alt="Image of a OneToMany-Relation">
            <div>
              <h2 class="text-xl font-bold">{{ blogEntry.title }}</h2>
              <p class="mt-2">{{ blogEntry.description }}</p>
            </div>
            <div>
              <NuxtLink class="font-bold underline" :to="blogEntry._path">
                Read blog entry
              </NuxtLink>
            </div>
            <p class="text-slate-400">{{ dateFormat.format(blogEntry.writtenAt) }}</p>
          </li>
        </ContentNavigation>
      </ol>
    </div>
    <div class="mt-16">
      <h2 class="font-bold text-2xl">Get in touch</h2>
      <a
        class="mt-4 inline-block px-3 py-4 border border-emerald-500 bg-emerald-500 text-white rounded font-bold tracking-wide"
        href="mailto:fseemann@mail.de"
      >
        fseemann@mail.de
      </a>
      <p class="mt-4">I am based in germany but feel free to contact me regardless of your country.</p>
    </div>
  </main>
</template>

<script setup>
import { useDateFormat } from "~/shared/useDateFormat";

const query = queryContent("blog");
const dateFormat = useDateFormat();
</script>