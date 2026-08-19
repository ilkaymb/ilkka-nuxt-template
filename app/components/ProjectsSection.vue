<script setup lang="ts">
import { projects } from '~/data/projects'
import { site } from '~/data/site'

const { locale } = useLocale()
</script>

<template>
  <section class="bg-ink-950 pt-32 pb-24 sm:pt-40 sm:pb-32">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="max-w-2xl mx-auto text-center mb-14">
        <p class="text-brand-light text-sm font-mono uppercase tracking-wider mb-3">{{ site.projectsSection.eyebrow[locale] }}</p>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{{ site.projectsSection.title[locale] }}</h1>
        <p class="text-ink-300">{{ site.projectsSection.description[locale] }}</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </div>
    </div>
  </section>
</template>
