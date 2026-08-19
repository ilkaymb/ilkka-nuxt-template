<script setup lang="ts">
import { site } from '~/data/site'

const { locale } = useLocale()

const form = reactive({ name: '', email: '', message: '' })
const status = ref<'idle' | 'sending' | 'sent'>('idle')

function submit() {
  if (!form.name || !form.email || !form.message) return
  status.value = 'sending'
  const subject = encodeURIComponent(`Ilkka: ${form.name}`)
  const body = encodeURIComponent(`${form.message}\n\n${form.email}`)
  window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`
  setTimeout(() => {
    status.value = 'sent'
  }, 600)
}
</script>

<template>
  <section class="relative bg-ink-950 pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
    <div class="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />

    <div class="relative container mx-auto px-4 sm:px-6">
      <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
        <div>
          <p class="text-brand-light text-sm font-mono uppercase tracking-wider mb-3">{{ site.contact.eyebrow[locale] }}</p>
          <h1 class="text-3xl sm:text-4xl font-bold text-white mb-4">{{ site.contact.title[locale] }}</h1>
          <p class="text-ink-300 leading-relaxed mb-8">{{ site.contact.description[locale] }}</p>

          <div>
            <p class="text-xs font-mono uppercase tracking-wider text-ink-500 mb-3">{{ site.contact.directTitle[locale] }}</p>
            <div class="flex flex-col gap-2 text-sm">
              <a :href="`mailto:${site.contact.email}`" class="text-ink-300 hover:text-brand-light transition-colors">{{ site.contact.email }}</a>
              <a :href="site.contact.github" target="_blank" rel="noopener noreferrer" class="text-ink-300 hover:text-brand-light transition-colors">GitHub</a>
              <a :href="site.contact.linkedin" target="_blank" rel="noopener noreferrer" class="text-ink-300 hover:text-brand-light transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <form class="bg-ink-900 border border-ink-700 rounded-xl p-6 sm:p-8 flex flex-col gap-4" @submit.prevent="submit">
          <div>
            <label class="block text-xs font-mono uppercase text-ink-500 mb-1.5">{{ site.contact.nameLabel[locale] }}</label>
            <input
              v-model="form.name"
              type="text"
              required
              :placeholder="site.contact.namePlaceholder[locale]"
              class="w-full bg-ink-950 border border-ink-700 rounded-md px-3.5 py-2.5 text-white text-sm placeholder:text-ink-500 focus:outline-none focus:border-brand transition-colors"
            />
          </div>
          <div>
            <label class="block text-xs font-mono uppercase text-ink-500 mb-1.5">{{ site.contact.emailLabel[locale] }}</label>
            <input
              v-model="form.email"
              type="email"
              required
              :placeholder="site.contact.emailPlaceholder[locale]"
              class="w-full bg-ink-950 border border-ink-700 rounded-md px-3.5 py-2.5 text-white text-sm placeholder:text-ink-500 focus:outline-none focus:border-brand transition-colors"
            />
          </div>
          <div>
            <label class="block text-xs font-mono uppercase text-ink-500 mb-1.5">{{ site.contact.messageLabel[locale] }}</label>
            <textarea
              v-model="form.message"
              required
              rows="4"
              :placeholder="site.contact.messagePlaceholder[locale]"
              class="w-full bg-ink-950 border border-ink-700 rounded-md px-3.5 py-2.5 text-white text-sm placeholder:text-ink-500 focus:outline-none focus:border-brand transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            :disabled="status !== 'idle'"
            class="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand hover:bg-brand-light disabled:opacity-60 text-white text-sm font-semibold transition-colors"
          >
            {{ status === 'sending' ? site.contact.sending[locale] : site.contact.send[locale] }}
          </button>

          <p v-if="status === 'sent'" class="text-sm text-brand-light">{{ site.contact.sent[locale] }}</p>
        </form>
      </div>
    </div>
  </section>
</template>
