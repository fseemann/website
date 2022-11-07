<template>
  <main class='py-16'>
    <div>
      <h2 class='font-bold text-2xl leading-relaxed md:text-4xl md:leading-loose text-slate-100'>Interactive
        Domain-Driven Design template</h2>
      <p class='text-lg leading-relaxed md:text-xl md:leading-loose'>This is a visual guide on the tactical patterns of
        Domain-Driven Design. You can traverse through the code by
        clicking on methods and read the explanations provided by code documentation or pop-overs.</p>
    </div>
    <div>
      <pre>
<code lang='kotlin'>
class TimeRecordController {
  fun findTimeRecords(): TimeRecordDto {
    val timeRecords = service.<NuxtLink class='outline-none ring' to='#list-time-records'>listTimeRecords()</NuxtLink>
    return timeRecords.map(this::toDto)
  }
}
</code>
      </pre>
    </div>
  </main>
</template>