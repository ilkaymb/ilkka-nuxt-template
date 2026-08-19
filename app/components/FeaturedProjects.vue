<script setup lang="ts">
import { projects } from '~/data/projects'
import { site } from '~/data/site'

const { locale } = useLocale()
const featured = projects.slice(0, 3)
</script>

<template>
  <section class="bg-ink-950 py-24 sm:py-32 border-t border-ink-800">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
        <div class="max-w-xl">
          <p class="text-brand-light text-sm font-mono uppercase tracking-wider mb-3">{{ site.projectsSection.eyebrow[locale] }}</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">{{ site.projectsSection.title[locale] }}</h2>
          <p class="text-ink-300">{{ site.projectsSection.description[locale] }}</p>
        </div>
        <NuxtLink
          to="/projects"
          class="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-ink-700 hover:border-brand text-white text-sm font-semibold transition-colors"
        >
          {{ site.hero.ctaPrimary[locale] }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <ProjectCard v-for="project in featured" :key="project.slug" :project="project" />
      </div>
    </div>
  </section>
</template>
