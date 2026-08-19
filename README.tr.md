# Ilkka

*[English](README.md)*

**[ilkka.vercel.app](https://ilkka.vercel.app)**

![Ilkka ekran görüntüsü](docs/screenshot.png)

Kurgusal bir yazılım stüdyosu ana sayfası: "bir ajans kursaydım nasıl dururdu" fikri. İki dilli (TR/EN), Vue öğrenme alıştırması olarak Nuxt 3 ile sıfırdan yazıldı. Lorem Ipsum dolu, eski bir Next.js "homepage template" reposu olarak başladı, temelden yeniden kuruldu.

Bu repo bir GitHub template'i, "Use this template" butonuyla kendi projenizin başlangıcı olarak kullanabilirsiniz.

## Özellikler

- **Çok sayfalı yapı**: Ana Sayfa, Projelerimiz (`/projects`), her proje için ayrı detay sayfası (`/projects/[slug]`) ve Bize Ulaşın (`/contact`)
- **İki dilli**: TR/EN arası anlık geçiş, `localStorage`'da hatırlanır
- **3D hero sahnesi**: Three.js ile çizilen, faredeki hareketi yumuşak bir gecikmeyle takip eden kırmızı wireframe. Sunucu tarafında hiç render edilmez ve `prefers-reduced-motion` açıkken hiç yüklenmez, ilk sayfa yüklemesini etkilemez
- **Galeri/video görüntüleyici**: her proje sayfasında modal yerine tam sayfa görsel/video galerisi

## Teknolojiler

Nuxt 3 · Vue 3 · TypeScript · Tailwind CSS · Three.js

## Geliştirme

```bash
npm install
npm run dev
```

Site [http://localhost:3000](http://localhost:3000) adresinde açılır.

## Yapı

- `app/pages/`: `index.vue` (ana sayfa), `projects/index.vue` (portfolyo), `projects/[slug].vue` (proje detayı), `contact.vue`
- `app/components/`: `SiteHeader`, `HeroSection`, `HeroScene.client.vue` (3D sahne), `FeaturedProjects`, `ProjectsSection`, `ProjectCard`, `ContactSection`, `SiteFooter`
- `app/data/`: proje ve site metinleri (bilingual)
- `app/composables/useLocale.ts`: TR/EN dil durumu

## Build

```bash
npm run build
```
