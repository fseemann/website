<template>
  <div class="min-h-screen bg-slate-900">
    <div class="mx-auto max-w-screen-lg px-8 py-16 text-slate-400 antialiased font-sans">
      <div class="py-16">
        <header>
          <h1 class="font-bold text-6xl leading-loose text-slate-100">Felix Seemann 👋</h1>
          <p class="text-xl leading-loose">
            <span class="text-slate-100 font-bold">Full-Stack Developer</span> und
            <span class="text-slate-100 font-bold">Domain-Driven Design Spezialist</span>
            mit 7+ Jahren Berufserfahrung.</p>
        </header>
        <main class="text-xl leading-loose space-y-16 mt-16">
          <p>
            Ich schreibe webbasierte Geschäftsanwendung in Kotlin / Java und Vue. Dabei wende ich technische Pattern aus
            Domain-Driven Design an, um Geschäftslogik von technischen Abhängigkeiten zu befreien und verschiede
            Anwendungsfälle lose über Events zu verbinden. Dabei teste ich die Anwendungsfälle über qualitative
            Integrationstests.
          </p>
          <p>
            Mir ist es wichtig einfache Lösungen zu produzieren und nehme ich mir vorab Zeit über ein gutes Konzept
            nachzudenken. Ich vermeide deswegen magische Frameworks, die mir die Kontrolle über den wichtigsten Teil
            meiner Anwendung entreißen (JPA 😡).
          </p>
          <p>
            Zuletzt habe ich mit Ktor, Spring, JakartaEE, REST, GraphQL, MongoDB, MySQL, RabbitMQ, Vue, Nuxt und
            Tailwind
            gearbeitet.
          </p>
          <p>
            Bei der CodeFabrik GmbH, meinem jüngsten Arbeitergeber, konnte ich an zwei öffentlichen (neben weiteren
            internen) Projekten arbeiten. Schaut euch gerne <a href="https://github.com/CodeFabrikGmbH/scenarios-kotlin"
                                                               target="_blank" class="underline">scenarios-kotlin</a>,
            eine
            Bibliothek für lesbare
            Integrationstests, und <a href="https://www.zeitfabrik.de/" target="_blank" class="underline">ZeitFabrik</a>,
            ein Produkt zur Zeiterfassung und
            Projektabrechnung, an. Auch einen
            <a href="https://www.code-fabrik.com/2021/03/10/the-definitive-guide-to-software-architecture"
               target="_blank" class="underline">Blogeintrag über Softwarearchitektur</a> habe ich geschrieben. 🎉
          </p>
          <p>
            Ich unterstütze Ihr Team und teile mein Wissen über die Entwicklung wartbarer Software, indem ich eine
            mehrschichtige Softwarearchitektur und Aggregat Designprinzipien mit loser Kopplung über Domain-Events
            anwende.
          </p>
          <div>
            <a class="inline-block px-6 py-4 border border-blue-700 bg-blue-700 text-blue-100 rounded rounded-md font-bold tracking-wide"
               href="mailto:fseemann@mail.de">
              Kontakt aufnehmen
            </a>
          </div>
        </main>
      </div>
      <footer class="text-sm leading-relaxed">
        <p>© 2022 Felix Seemann</p>
        <p>Mein <a href="/" class="underline">Impressum</a></p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: 'Felix Seemann',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true},
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'},
  ],
})
</script>
