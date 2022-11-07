<script setup>
import Prism from '../../shared/prism'

onMounted(() => Prism.highlightAll())
</script>

<template>
  <main class='py-16 min-h-screen bg-slate-900'>
    <div class='mx-auto max-w-screen-lg px-8 py-16 text-slate-400 antialiased font-sans'>
      <h2 class='font-bold text-2xl leading-relaxed md:text-4xl md:leading-loose text-slate-100'>Interactive
        Domain-Driven Design template</h2>
      <p class='text-lg leading-relaxed md:text-xl md:leading-loose'>This is a visual guide on the tactical patterns of
        Domain-Driven Design. You can traverse through the code by
        clicking on methods and read the explanations provided by code documentation or pop-overs.</p>
    </div>
    <div>
      <pre>
<code class='language-kotlin'>
class TimeRecordController {
  fun findTimeRecords(): TimeRecordDto {
    val timeRecords = service.listTimeRecords()
    return timeRecords.map(this::toDto)
  }
}
</code>
      </pre>
    </div>
  </main>
</template>