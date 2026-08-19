<script setup lang="ts">
import { site } from '~/data/site'

const { locale } = useLocale()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink-950 border-t border-ink-800 py-10">
    <div class="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2.5">
        <img src="/logo-mark.svg" alt="Ilkka logo" class="w-4 h-6" />
        <div class="leading-tight">
          <p class="text-sm font-bold text-white">{{ site.name }}</p>
          <p class="text-xs text-ink-500">{{ site.footer.tagline[locale] }}</p>
        </div>
      </div>
      <p class="text-xs text-ink-500 font-mono">© {{ year }} {{ site.name }} — {{ site.footer.rights[locale] }}</p>
    </div>
  </footer>
</template>
