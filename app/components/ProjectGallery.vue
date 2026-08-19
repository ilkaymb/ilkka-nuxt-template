<script setup lang="ts">
import type { Project } from '~/data/projects'
import { site } from '~/data/site'

const props = defineProps<{ project: Project }>()
const emit = defineEmits<{ close: [] }>()

const { locale } = useLocale()

const media = computed(() => props.project.gallery && props.project.gallery.length > 0
  ? props.project.gallery
  : [{ type: 'image' as const, src: props.project.image }])

const index = ref(0)
const showFullText = ref(false)

const current = computed(() => media.value[index.value])
const isGithubOnly = computed(() => props.project.link.includes('github.com'))

function next() {
  index.value = (index.value + 1) % media.value.length
}
function prev() {
  index.value = (index.value - 1 + media.value.length) % media.value.length
}
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" @click.self="emit('close')">
    <div class="w-full max-w-4xl max-h-[90vh] bg-ink-900 border border-ink-700 rounded-xl overflow-hidden flex flex-col">
      <div class="flex items-center justify-between px-5 py-4 border-b border-ink-700 shrink-0">
        <h3 class="text-lg font-bold text-white">{{ project.title }}</h3>
        <button class="text-ink-300 hover:text-white" :aria-label="site.actions.close[locale]" @click="emit('close')">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div class="relative bg-black flex items-center justify-center shrink-0" style="height: min(50vh, 420px)">
        <video v-if="current.type === 'video'" :src="current.src" controls autoplay muted loop class="max-h-full max-w-full" />
        <img v-else :src="current.src" :alt="current.label?.[locale] ?? project.title" class="max-h-full max-w-full object-contain" />

        <button v-if="media.length > 1" class="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center" @click="prev">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button v-if="media.length > 1" class="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center" @click="next">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        <p v-if="current.label" class="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 text-xs text-white font-mono">
          {{ current.label[locale] }}
        </p>
      </div>

      <div v-if="media.length > 1" class="flex gap-2 px-5 py-3 overflow-x-auto border-b border-ink-700 shrink-0">
        <button
          v-for="(item, i) in media"
          :key="item.src"
          class="shrink-0 w-14 h-10 rounded border-2 overflow-hidden"
          :class="i === index ? 'border-brand' : 'border-ink-700 opacity-60 hover:opacity-100'"
          @click="index = i"
        >
          <video v-if="item.type === 'video'" :src="item.src" class="w-full h-full object-cover" muted />
          <img v-else :src="item.src" class="w-full h-full object-cover" :alt="item.label?.[locale] ?? ''" />
        </button>
      </div>

      <div class="px-5 py-4 overflow-y-auto">
        <p v-if="project.longDescription" class="text-sm text-ink-300 leading-relaxed" :class="{ 'line-clamp-3': !showFullText }">
          {{ project.longDescription[locale] }}
        </p>
        <button
          v-if="project.longDescription"
          class="mt-2 text-xs font-mono uppercase text-brand-light hover:text-brand"
          @click="showFullText = !showFullText"
        >
          {{ showFullText ? site.actions.showLess[locale] : site.actions.showAll[locale] }}
        </button>

        <div class="mt-4 flex flex-wrap gap-2">
          <a
            v-if="!isGithubOnly"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand hover:bg-brand-light text-white text-xs font-semibold transition-colors"
          >
            {{ site.actions.visitProject[locale] }}
          </a>
          <a
            v-if="project.githubLink || isGithubOnly"
            :href="project.githubLink ?? project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-ink-700 text-white text-xs font-semibold hover:border-brand transition-colors"
          >
            {{ site.actions.viewGithub[locale] }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
