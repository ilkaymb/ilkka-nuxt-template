# Ilkka

Ilkka, kurgusal bir yazılım çözümleri stüdyosunun ana sayfası: Ana Sayfa, Projelerimiz ve Bize Ulaşın bölümlerinden oluşan tek sayfalık, iki dilli (TR/EN) bir site. Nuxt 3, TypeScript ve Tailwind CSS ile sıfırdan yazıldı.

## Geliştirme

```bash
npm install
npm run dev
```

Site [http://localhost:3000](http://localhost:3000) adresinde açılır.

## Yapı

- `app/pages/index.vue` — tek sayfalık site
- `app/components/` — Header, Hero, Projects, ProjectCard, ProjectGallery, Contact, Footer
- `app/data/` — proje ve site metinleri (bilingual)
- `app/composables/useLocale.ts` — TR/EN dil durumu

## Build

```bash
npm run build
```
