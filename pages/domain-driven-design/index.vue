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
    <div class='mb-16'>
      <div class='mx-auto max-w-screen-md'>
        <SvgDddLayers />
      </div>
    </div>
    <div class='px-4 py-16 bg-yellow-400'>
      <h3 class='inline-block pb-4 uppercase text-white font-bold text-4xl'>Infrastructure</h3>
      <div class='mt-2 grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-4'>
      <pre>
<code class='language-kotlin'>
class TimeRecordController {
  fun findTimeRecords(): List&lt;TimeRecordDto&gt; {
    val timeRecords = service.listTimeRecords()
    return timeRecords.map(this::toDto)
  }
}
</code>
      </pre>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam dolorem eaque, expedita ipsa ipsum
          nam possimus quidem vero voluptates.</p>
      </div>
    </div>
    <div class='px-4 py-16 bg-blue-400'>
      <h3 class='inline-block pb-4 uppercase text-white font-bold text-4xl'>Application</h3>
    </div>
    <div class='px-4 py-16 bg-green-400'>
      <h3 class='inline-block pb-4 uppercase text-white font-bold text-4xl'>Domain</h3>
    </div>
  </main>
</template>