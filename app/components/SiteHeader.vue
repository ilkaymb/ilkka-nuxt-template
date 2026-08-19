<script setup lang="ts">
import { site } from '~/data/site'

const { locale, setLocale } = useLocale()
const mobileOpen = ref(false)

const links = [
  { to: '/', label: site.nav.home },
  { to: '/projects', label: site.nav.projects },
  { to: '/contact', label: site.nav.contact },
]

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ink-950/85 border-b border-ink-700">
    <nav class="container mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2.5 group" @click="closeMobile">
        <img src="/logo-mark.svg" alt="Ilkka logo" class="w-6 h-8 shrink-0" />
        <span class="text-lg font-bold tracking-wide text-white group-hover:text-brand-light transition-colors">{{ site.name }}</span>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-ink-300 hover:text-white transition-colors"
          active-class="text-white"
        >
          {{ link.label[locale] }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3">
        <div class="hidden sm:flex gap-1 border border-ink-700 rounded-md p-0.5">
          <button
            v-for="l in (['tr', 'en'] as const)"
            :key="l"
            class="px-2.5 py-1 rounded text-xs font-mono uppercase transition-colors"
            :class="locale === l ? 'bg-brand text-white' : 'text-ink-300 hover:text-white'"
            @click="setLocale(l)"
          >
            {{ l }}
          </button>
        </div>
        <NuxtLink
          to="/contact"
          class="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-brand hover:bg-brand-light text-white text-sm font-semibold transition-colors"
        >
          {{ site.nav.contact[locale] }}
        </NuxtLink>
        <button
          class="md:hidden text-ink-300 hover:text-white"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </nav>

    <div v-if="mobileOpen" class="md:hidden border-t border-ink-700 bg-ink-950 px-4 py-4 flex flex-col gap-1">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="py-2.5 text-sm font-medium text-ink-300 hover:text-white transition-colors"
        active-class="text-white"
        @click="closeMobile"
      >
        {{ link.label[locale] }}
      </NuxtLink>
      <div class="flex gap-1 border border-ink-700 rounded-md p-0.5 w-fit mt-2">
        <button
          v-for="l in (['tr', 'en'] as const)"
          :key="l"
          class="px-2.5 py-1 rounded text-xs font-mono uppercase transition-colors"
          :class="locale === l ? 'bg-brand text-white' : 'text-ink-300 hover:text-white'"
          @click="setLocale(l)"
        >
          {{ l }}
        </button>
      </div>
    </div>
  </header>
</template>
