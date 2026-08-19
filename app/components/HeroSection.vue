<script setup lang="ts">
import { site } from '~/data/site'

const { locale } = useLocale()
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-ink-950 pt-32 pb-24 sm:pt-40 sm:pb-32">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
    <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-brand/20 blur-[120px] pointer-events-none" />

    <div class="relative container mx-auto px-4 sm:px-6">
      <div class="max-w-3xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-brand/40 bg-brand/10">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-light" />
          <span class="text-xs font-mono uppercase tracking-wider text-brand-light">{{ site.hero.eyebrow[locale] }}</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-balance">
          {{ site.hero.title[locale] }}
        </h1>

        <p class="mt-6 text-base sm:text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
          {{ site.hero.description[locale] }}
        </p>

        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand hover:bg-brand-light text-white text-sm font-semibold transition-colors"
          >
            {{ site.hero.ctaPrimary[locale] }}
          </a>
          <a
            href="#contact"
            class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md border border-ink-700 hover:border-ink-500 text-white text-sm font-semibold transition-colors"
          >
            {{ site.hero.ctaSecondary[locale] }}
          </a>
        </div>
      </div>

      <div class="mt-20 grid grid-cols-3 gap-4 max-w-xl mx-auto border-t border-ink-700 pt-10">
        <div v-for="stat in site.stats" :key="stat.value" class="text-center">
          <p class="text-2xl sm:text-3xl font-bold text-white">{{ stat.value }}</p>
          <p class="mt-1 text-xs sm:text-sm text-ink-300">{{ stat.label[locale] }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
