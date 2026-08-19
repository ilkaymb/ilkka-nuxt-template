// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Ilkka — Yazılım Çözümleri',
      htmlAttrs: { lang: 'tr' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      meta: [
        {
          name: 'description',
          content: 'Ilkka, web ve mobil uygulamalar, e-ticaret altyapıları ve yapay zeka destekli otomasyonlar üreten bir yazılım çözümleri stüdyosudur.',
        },
      ],
    },
  },
})
