<template>
  <main>
    <div class="my-16">
      <ol class="mt-4 grid sm:grid-cols-2 gap-16">
        <ContentNavigation :query="query" v-slot="{ navigation }">
          <li v-for="blogEntry in navigation[0].children" :key="blogEntry.title">
            <h2 class="font-bold text-xl sm:text-2xl">Latest blog post</h2>
            <card-blog-entry class="mt-4" :blog-entry="blogEntry" />
          </li>
        </ContentNavigation>
        <li>
          <h2 class="font-bold text-xl sm:text-2xl">About me</h2>
          <div class="mt-4 sm:flex sm:space-x-4">
            <img class="mb-4 sm:mb-0 rounded max-w-16 max-h-32 object-cover" width="196" height="144" src="/img/felix-seemann.webp" alt="Self-portrait" />
            <p class="flex-1">I am a full-stack developer with a focus on software architecture following
              Domain-Driven Design.</p>
          </div>
          <p class="my-4">I enjoy writing web-based business applications in Java, Kotlin and Vue. I apply technical
            patterns from Domain-Driven Design to free business logic from technical dependencies and loosely couple use
            cases via domain events to create complex but still maintainable applications.</p>
          <p>Learning more about software design and growing my skills to create <span
            class="text-emerald-800 dark:text-emerald-200">performant und maintainable software is
            my passion.</span></p>
        </li>
      </ol>
    </div>
    <div class="mt-16">
      <h2 class="font-bold text-xl sm:text-2xl">Get in touch</h2>
      <p class="mt-4">
        <a
          class="inline-flex underline"
          href="mailto:fseemann@mail.de"
          aria-label="Link to mail"
        >
          <svg-envelope class="w-4" />
          <span class="ml-1">fseemann@mail.de</span>
        </a>
      </p>
      <p class="mt-4">
        <a class="inline-flex underline" href="https://twitter.com/felix_seemann" aria-label="Link to twitter" target="_blank">
          <svg-twitter class="w-4" />
          <span class="ml-1">felix_seemann</span>
        </a>
      </p>
      <p class="mt-4">I am based in Germany but feel free to contact me regardless of your country.</p>
    </div>
  </main>
</template>

<script setup>
const query = queryContent("blog").limit(1).sort({ writtenAt: -1 });
</script>