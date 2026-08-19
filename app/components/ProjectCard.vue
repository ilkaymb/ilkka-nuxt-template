<script setup lang="ts">
import type { Project } from '~/data/projects'
import { site } from '~/data/site'

const props = defineProps<{ project: Project }>()

const { locale } = useLocale()

const isGithubOnly = props.project.link.includes('github.com')
</script>

<template>
  <article
    class="group overflow-hidden bg-ink-900 border border-ink-700 hover:border-brand/60 transition-colors duration-200 rounded-xl flex flex-col"
  >
    <NuxtLink :to="`/projects/${project.slug}`" class="block">
      <div class="relative">
        <img
          :src="project.image"
          :alt="project.title"
          loading="lazy"
          class="w-full h-44 sm:h-48 object-cover object-top"
        />
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/50">
          <span class="px-3 py-1.5 rounded-md bg-white text-black text-xs font-semibold">{{ site.actions.showAll[locale] }}</span>
        </div>
      </div>

      <div class="p-5 sm:p-6 border-t border-ink-700">
        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-brand-light transition-colors">{{ project.title }}</h3>
        <p class="text-ink-300 text-sm leading-relaxed mb-4 line-clamp-2">{{ project.description[locale] }}</p>

        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-2 py-0.5 border border-ink-700 rounded text-[10px] text-ink-300 font-mono"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </NuxtLink>

    <div class="px-5 sm:px-6 pb-5 sm:pb-6 mt-auto flex flex-wrap gap-2">
      <a
        v-if="!isGithubOnly"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-ink-700 text-xs font-medium text-ink-300 hover:text-white hover:border-brand transition-colors"
      >
        {{ site.actions.visitProject[locale] }}
      </a>
      <a
        v-if="project.githubLink || isGithubOnly"
        :href="project.githubLink ?? project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-ink-700 text-xs font-medium text-ink-300 hover:text-white hover:border-brand transition-colors"
      >
        {{ site.actions.viewGithub[locale] }}
      </a>
    </div>
  </article>
</template>
