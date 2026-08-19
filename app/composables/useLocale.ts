export type Locale = 'tr' | 'en'

const locale = ref<Locale>('tr')
let initialized = false

export function useLocale() {
  if (!initialized && import.meta.client) {
    initialized = true
    const stored = window.localStorage.getItem('ilkka-locale')
    if (stored === 'tr' || stored === 'en') {
      locale.value = stored
    }
  }

  function setLocale(next: Locale) {
    locale.value = next
    if (import.meta.client) {
      window.localStorage.setItem('ilkka-locale', next)
    }
  }

  return { locale, setLocale }
}
