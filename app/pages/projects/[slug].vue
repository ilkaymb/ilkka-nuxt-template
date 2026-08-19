<script setup lang="ts">
import { projects } from '~/data/projects'
import { site } from '~/data/site'

const route = useRoute()
const { locale } = useLocale()

const project = computed(() => projects.find((p) => p.slug === route.params.slug))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

useHead({ title: `Ilkka · ${project.value.title}` })

const media = computed(() => {
  const p = project.value!
  return p.gallery && p.gallery.length > 0 ? p.gallery : [{ type: 'image' as const, src: p.image }]
})

const index = ref(0)
watch(() => route.params.slug, () => { index.value = 0 })

const current = computed(() => media.value[index.value])
const isGithubOnly = computed(() => project.value!.link.includes('github.com'))

const otherProjects = computed(() => projects.filter((p) => p.slug !== project.value!.slug).slice(0, 3))

function next() {
  index.value = (index.value + 1) % media.value.length
}
function prev() {
  index.value = (index.value - 1 + media.value.length) % media.value.length
}
</script>

<template>
  <div v-if="project" class="min-h-screen bg-ink-950 font-sans antialiased">
    <SiteHeader />
    <main class="pt-28 sm:pt-36 pb-24">
      <div class="container mx-auto px-4 sm:px-6 max-w-5xl">
        <NuxtLink to="/projects" class="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-white transition-colors mb-8">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          {{ site.projectsSection.title[locale] }}
        </NuxtLink>

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">{{ project.title }}</h1>
        <div class="flex flex-wrap gap-1.5 mb-8">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-2.5 py-1 border border-ink-700 rounded text-xs text-ink-300 font-mono"
          >
            {{ tech }}
          </span>
        </div>

        <div class="relative bg-black border border-ink-700 rounded-xl overflow-hidden flex items-center justify-center" style="height: min(60vh, 520px)">
          <video v-if="current.type === 'video'" :key="current.src" :src="current.src" controls autoplay muted loop class="max-h-full max-w-full" />
          <img v-else :key="current.src" :src="current.src" :alt="current.label?.[locale] ?? project.title" class="max-h-full max-w-full object-contain" />

          <button v-if="media.length > 1" class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center" @click="prev">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button v-if="media.length > 1" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center" @click="next">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </button>

          <p v-if="current.label" class="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 text-xs text-white font-mono">
            {{ current.label[locale] }}
          </p>
        </div>

        <div v-if="media.length > 1" class="flex gap-2 mt-3 overflow-x-auto pb-2">
          <button
            v-for="(item, i) in media"
            :key="item.src"
            class="shrink-0 w-16 h-11 rounded border-2 overflow-hidden"
            :class="i === index ? 'border-brand' : 'border-ink-700 opacity-60 hover:opacity-100'"
            @click="index = i"
          >
            <video v-if="item.type === 'video'" :src="item.src" class="w-full h-full object-cover" muted />
            <img v-else :src="item.src" class="w-full h-full object-cover" :alt="item.label?.[locale] ?? ''" />
          </button>
        </div>

        <div class="grid lg:grid-cols-3 gap-10 mt-10">
          <p class="lg:col-span-2 text-ink-300 leading-relaxed whitespace-pre-line">
            {{ project.longDescription?.[locale] ?? project.description[locale] }}
          </p>

          <div class="flex flex-col gap-3 h-fit">
            <a
              v-if="!isGithubOnly"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-brand hover:bg-brand-light text-white text-sm font-semibold transition-colors"
            >
              {{ site.actions.visitProject[locale] }}
            </a>
            <a
              v-if="project.githubLink || isGithubOnly"
              :href="project.githubLink ?? project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-ink-700 hover:border-brand text-white text-sm font-semibold transition-colors"
            >
              {{ site.actions.viewGithub[locale] }}
            </a>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 max-w-5xl mt-20 pt-10 border-t border-ink-800">
        <p class="text-sm font-mono uppercase tracking-wider text-ink-500 mb-6">{{ site.projectsSection.title[locale] }}</p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <ProjectCard v-for="p in otherProjects" :key="p.slug" :project="p" />
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
