<template>
  <div class="min-h-screen bg-slate-900">
    <div
      class="mx-auto max-w-screen-lg px-8 py-16 text-slate-400 antialiased font-sans"
    >
      <slot />
      <footer class="text-sm leading-relaxed">
        <p>© 2022 Felix Seemann</p>
        <nav aria-label="Legal">
          <p>
            Mein
            <nuxt-link
              to="imprint"
              class="underline"
            >Impressum</nuxt-link
            >
          </p>
        </nav>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'default'
}
</script>

<style scoped>

</style>