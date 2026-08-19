export type Bilingual = { tr: string; en: string }
export type GalleryItem = { type: 'image' | 'video'; src: string; label?: Bilingual }

export interface Project {
  slug: string
  title: string
  description: Bilingual
  longDescription?: Bilingual
  technologies: string[]
  image: string
  link: string
  githubLink?: string
  gallery?: GalleryItem[]
}

export const projects: Project[] = [
  {
    slug: 'nivorai',
    title: 'NIVORAI',
    description: {
      tr: 'Kendi sunucumuzda barındırdığımız kişisel verimlilik uygulaması. Kanban panosu, takvim, finans, fitness, ruh hali ve alışkanlık takipçilerini bir araya getiriyor. React 19 web uygulaması, Express/Prisma/PostgreSQL API ve React Native mobil uygulamasından oluşan bir monorepo olarak geliştirdik.',
      en: 'Self-hosted personal productivity suite covering Kanban, calendar, and finance/fitness/mood/habit trackers. Monorepo with a React 19 web app, an Express/Prisma/PostgreSQL API, and a React Native mobile app.',
    },
    longDescription: {
      tr: 'Nivorai, aksi halde beş ayrı uygulamaya dağılacak her şeyi tek panelde toplar: görev yöneticisi, not defteri, günlük, alışkanlık takipçisi, ruh hali kaydı, finans takipçisi, odak zamanlayıcısı. Her pazar, yapay zeka asistanı haftanın gerçekte nasıl geçtiğini okur ve değerlendirmeyi kullanıcının kendi tonunda yazar.',
      en: 'Nivorai is one app for everything you would otherwise scatter across five: task manager, notebook, journal, habit tracker, mood log, finance tracker, focus timer. Every Sunday, an AI assistant reads what actually happened across the week and writes the review in the user\'s own voice.',
    },
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'React Native', 'Docker'],
    image: '/images/projects/NIVORAI.png',
    link: 'https://www.nivorai.app/',
    gallery: [
      { type: 'video', src: '/projects/nivorai/demo.mp4', label: { tr: 'Tanıtım', en: 'Demo' } },
      { type: 'image', src: '/projects/nivorai/dashboard.png', label: { tr: 'Panel', en: 'Dashboard' } },
      { type: 'image', src: '/projects/nivorai/kanban.png', label: { tr: 'Kanban panosu', en: 'Kanban board' } },
      { type: 'image', src: '/projects/nivorai/focus.png', label: { tr: 'Odak zamanlayıcı', en: 'Focus timer' } },
      { type: 'image', src: '/projects/nivorai/canvas.png', label: { tr: 'Canvas şablonları', en: 'Canvas templates' } },
      { type: 'image', src: '/projects/nivorai/goal-roadmap.png', label: { tr: 'Hedeften AI yol haritası', en: 'AI goal to roadmap' } },
    ],
  },
  {
    slug: 'linknown',
    title: 'LINKNOWN',
    description: {
      tr: 'Link kısaltma ve QR kod platformu. Gizlilik dostu tıklama analitiği, bot filtreli yönlendirme, şifre korumalı linkler ve kod yazmadan link-in-bio sayfa oluşturucusu içeriyor.',
      en: 'Link shortening and QR code platform with privacy-safe click analytics, bot-filtered redirects, password-protected links, and a no-code link-in-bio page builder.',
    },
    longDescription: {
      tr: 'LINKNOWN, uzun ve dağınık bir URL\'yi saniyeler içinde temiz bir kısa linke ya da taranabilir bir QR koda dönüştürür. Her linkte gerçek analitik var: toplam tıklama, gizlilik dostu benzersiz ziyaretçi sayısı, mobil-masaüstü dağılımı ve tarih aralığına göre filtrelenebilir bir grafik.',
      en: 'LINKNOWN turns a long, messy URL into a clean short link or a scannable QR code in seconds. Every link comes with real analytics: total clicks, privacy-safe unique visitors, a mobile vs. desktop split, and a filterable chart.',
    },
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Hetzner'],
    image: '/images/projects/LINKNOWN.png',
    link: 'https://www.linknown.com/',
    gallery: [
      { type: 'video', src: '/projects/linknown/demo.mp4', label: { tr: 'Tanıtım', en: 'Demo' } },
      { type: 'image', src: '/projects/linknown/01-homepage.png', label: { tr: 'Ana sayfa', en: 'Homepage' } },
      { type: 'image', src: '/projects/linknown/06-create-with-result.png', label: { tr: 'Link kısaltma', en: 'Shorten a link' } },
      { type: 'image', src: '/projects/linknown/07-create-qr.png', label: { tr: 'QR kod oluşturma', en: 'Generate a QR code' } },
      { type: 'image', src: '/projects/linknown/09-analytics.png', label: { tr: 'Tıklama analitiği', en: 'Click analytics' } },
      { type: 'image', src: '/projects/linknown/11-template-store.png', label: { tr: 'Sayfa şablonları', en: 'Page templates' } },
      { type: 'image', src: '/projects/linknown/12-page-editor.png', label: { tr: 'Sayfa editörü', en: 'Page editor' } },
      { type: 'image', src: '/projects/linknown/13-page-published.png', label: { tr: 'Sayfa yayınlama', en: 'Publish a page' } },
      { type: 'image', src: '/projects/linknown/14-public-page.png', label: { tr: 'Canlı sayfa', en: 'Live page' } },
    ],
  },
  {
    slug: 'quizcupid',
    title: 'QuizCupid',
    description: {
      tr: 'Üyelik gerektirmeyen, ücretsiz, iki dilli (TR/EN) aşk testleri ve çift oyunları platformu. Next.js 16 ve Sanity CMS ile geliştirdik, 3D oyun sahneleri için React Three Fiber kullandık.',
      en: 'Free, bilingual (TR/EN) love-test and couple-game platform with no signup required. Built with Next.js 16 and Sanity CMS, with React Three Fiber powering the 3D game scenes.',
    },
    longDescription: {
      tr: 'QuizCupid, "acaba uyumlu muyuz?" sorusunu 60 saniyede cevaplıyor. Altı aşk testinden birini seç, birkaç soruyu cevapla, kişiye özel bir sonuç kartı kazan. Dört çift oyunu da eğlenceye eğlence katıyor: animasyonlu 3D kalpli aşkmetre, "seviyor sevmiyor" yaprak koparma sahnesi, çevirmeli çark ve mayın tarlası oyunu.',
      en: 'QuizCupid turns "are we compatible?" into a 60-second answer. Pick from six love tests, answer a handful of questions, and get a personalized result card. Four couple games add a playful layer, from an animated 3D love-meter to a spinning decision wheel.',
    },
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS', 'Three.js'],
    image: '/images/projects/QUIZCUPID.png',
    link: 'https://quizcupid.net/',
    gallery: [
      { type: 'video', src: '/projects/quizcupid/demo.mp4', label: { tr: 'Tanıtım', en: 'Demo' } },
      { type: 'image', src: '/projects/quizcupid/homepage.png', label: { tr: 'Ana sayfa', en: 'Homepage' } },
      { type: 'image', src: '/projects/quizcupid/love-test-result.png', label: { tr: 'Aşk testi sonuç kartı', en: 'Love test result card' } },
      { type: 'image', src: '/projects/quizcupid/love-meter.png', label: { tr: 'Aşkmetre', en: 'Love Meter' } },
      { type: 'image', src: '/projects/quizcupid/wheel.png', label: { tr: 'Çark Çevir', en: 'Spin the Wheel' } },
      { type: 'image', src: '/projects/quizcupid/daisy.png', label: { tr: 'Seviyor Sevmiyor', en: 'Loves Me, Loves Me Not' } },
      { type: 'image', src: '/projects/quizcupid/minefield.png', label: { tr: 'Mayın Tarlası', en: 'Minefield party game' } },
      { type: 'image', src: '/projects/quizcupid/blog.png', label: { tr: 'Blog', en: 'Blog' } },
    ],
  },
  {
    slug: 'convoscore',
    title: 'ConvoScore',
    description: {
      tr: 'Statik "Bize Ulaşın" formunun yerine geçen bir chatbot. Ziyaretçiyle gerçek bir sohbet kurar, bilgilerini Gemini ile çıkarır ve her talebi ekibe ulaşmadan önce puanlar.',
      en: 'A chatbot that replaces the static "Contact Sales" form. It has a real conversation with the visitor, pulls out their details with Gemini, and scores every lead before the team sees it.',
    },
    longDescription: {
      tr: 'Statik iletişim formları iyi dönüşmüyor. ConvoScore bu formun yerine bir chat widget\'ı koyuyor, ziyaretçiyle gerçek bir insanla konuşur gibi sohbet ediyor, bu sırada Gemini konuşmadan ad, şirket, unvan, sebep ve aciliyet gibi bilgileri anlık olarak çıkarıyor. Herkes kayıt olup kendi chatbot\'unu ve panelini alabiliyor, tek bir script etiketiyle sitesine ekleyip yayına alabiliyor.',
      en: 'Static contact forms don\'t convert well. ConvoScore replaces the form with a chat widget that talks to the visitor like a person would, while Gemini pulls structured details out of the conversation as it happens. It\'s a real multi-tenant product: anyone can register and drop one script tag into their site to go live.',
    },
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Vercel', 'Google Gemini'],
    image: '/images/projects/CONVOSCORE.png',
    link: 'https://www.convoscore.com/',
    gallery: [
      { type: 'video', src: '/projects/convoscore/demo.mp4', label: { tr: 'Tanıtım', en: 'Demo' } },
      { type: 'image', src: '/projects/convoscore/landing.png', label: { tr: 'Ana sayfa', en: 'Landing page' } },
      { type: 'image', src: '/projects/convoscore/chat-completed.png', label: { tr: 'Canlı Gemini konuşması', en: 'Live Gemini conversation' } },
      { type: 'image', src: '/projects/convoscore/admin-leads.png', label: { tr: 'Skorlanmış talepler', en: 'Scored requests' } },
      { type: 'image', src: '/projects/convoscore/lead-detail.png', label: { tr: 'Talep detayı ve transkript', en: 'Request detail & transcript' } },
      { type: 'image', src: '/projects/convoscore/playground.png', label: { tr: 'Tıkla-düzenle chat tasarımcısı', en: 'Click-to-edit chat designer' } },
      { type: 'image', src: '/projects/convoscore/demo-embed.png', label: { tr: 'Canlı domain önizleme ve gömme', en: 'Live domain preview & embed' } },
    ],
  },
  {
    slug: 'kou-statistics-showcase',
    title: 'KOU Statistics Showcase',
    description: {
      tr: 'Bir üniversite istatistik panelinin örnek/portföy amaçlı yeniden tasarımı: React 19\'a yükseltildi, grafik renk paleti markayla birleştirildi ve mobilden masaüstüne tam responsive hale getirildi.',
      en: 'Sample/portfolio redesign of a university statistics dashboard: upgraded to React 19, unified chart color palette, and made fully responsive from mobile to desktop.',
    },
    longDescription: {
      tr: 'Kurgusal bir üniversitenin sayılarını gösteren tek sayfalık bir istatistik vitrin sayfası: öğrenci sayıları, fakülte dağılımları, akademik personel donut grafiği, kütüphane istatistikleri ve arge grafikleri. Grafik renk sistemini ortak bir marka paleti etrafında yeniden kurduk ve bir dizi mobil taşma sorununu tek seferde çözen global bir düzeltme ekledik.',
      en: 'A single-page statistics showcase for a fictional university\'s numbers: student counts, faculty distributions, an academic staff donut chart, library stats, and R&D charts. We rebuilt the chart color system around a shared brand palette and resolved a cluster of mobile overflow issues at once.',
    },
    technologies: ['React 19', 'rsuite', 'Victory', 'react-icons', 'react-countup'],
    image: '/images/projects/kouStatisticsShowcase.png',
    link: 'https://kou-statistics-showcase.vercel.app/',
    githubLink: 'https://github.com/ilkaymb/kou-statistics-showcase',
    gallery: [
      { type: 'image', src: '/projects/kou-statistics-showcase/hero.png', label: { tr: 'Açılış ekranı', en: 'Opening screen' } },
      { type: 'image', src: '/projects/kou-statistics-showcase/program-sayisi.png', label: { tr: 'Program dağılım kartları', en: 'Program distribution cards' } },
      { type: 'image', src: '/projects/kou-statistics-showcase/akademik-personel.png', label: { tr: 'Akademik personel grafiği', en: 'Academic staff chart' } },
      { type: 'image', src: '/projects/kou-statistics-showcase/lisans-ogrenci.png', label: { tr: 'Fakülteye göre lisans dağılımı', en: 'Undergraduate distribution by faculty' } },
      { type: 'image', src: '/projects/kou-statistics-showcase/fakulte-carousel.png', label: { tr: 'Fakülte carousel', en: 'Faculty carousel' } },
      { type: 'image', src: '/projects/kou-statistics-showcase/uluslararasi.png', label: { tr: 'Uluslararası öğrenciler', en: 'International students' } },
    ],
  },
  {
    slug: 'vb-ecommerce',
    title: 'VB Ecommerce',
    description: {
      tr: 'Full-stack e-ticaret sitesi (Angular + ASP.NET Core + MySQL). Kategori bazlı gezinme, sepet, JWT ile kimlik doğrulamalı giriş ve ürün/kategori/kullanıcı rolü yönetimi için tam bir admin paneli içeriyor.',
      en: 'Full-stack e-commerce site (Angular + ASP.NET Core + MySQL). Category browsing, cart, JWT-authenticated login, and a full admin panel for products, categories, and user roles.',
    },
    longDescription: {
      tr: 'Bir bankacılık müşterisi için geliştirdiğimiz: ASP.NET Core 8 REST API ve MySQL ile beslenen bir Angular 16 mağazası. Müşteriler kategoriye göre gezinir, marka ve fiyata göre filtreler, sepet üzerinden satın alır. Adminler için tam bir arka ofis var, hepsi JWT doğrulaması arkasında. Demo giriş: admin1 / Admin1234 (admin), musteri1 / Musteri123 (müşteri).',
      en: 'Built for a banking-sector client: an Angular 16 storefront backed by an ASP.NET Core 8 REST API and MySQL. Customers browse by category, filter by brand and price, and check out through a cart. Admins get a full back office, all gated behind JWT auth. Demo login: admin1 / Admin1234 (admin), musteri1 / Musteri123 (customer).',
    },
    technologies: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'MySQL', 'JWT'],
    image: '/images/projects/vbHomePage.png',
    link: 'https://vb-ecommerce-ilkaymbs-projects.vercel.app',
    githubLink: 'https://github.com/ilkaymb/VB-Ecommerce-Client-Angular',
    gallery: [
      { type: 'video', src: '/projects/vb-ecommerce/demo.mp4', label: { tr: 'Tanıtım', en: 'Demo' } },
      { type: 'image', src: '/projects/vb-ecommerce/homepage.png', label: { tr: 'Ana sayfa', en: 'Homepage' } },
      { type: 'image', src: '/projects/vb-ecommerce/products.png', label: { tr: 'Kategori ve filtreler', en: 'Category browsing & filters' } },
      { type: 'image', src: '/projects/vb-ecommerce/product-detail.png', label: { tr: 'Ürün detayı', en: 'Product detail' } },
      { type: 'image', src: '/projects/vb-ecommerce/admin-panel.png', label: { tr: 'Admin paneli', en: 'Admin panel' } },
      { type: 'image', src: '/projects/vb-ecommerce/add-product.png', label: { tr: 'Ürün ekleme', en: 'Add product' } },
      { type: 'image', src: '/projects/vb-ecommerce/user-management.png', label: { tr: 'Kullanıcı ve rol yönetimi', en: 'User & role management' } },
    ],
  },
  {
    slug: 'laptop-ecommerce',
    title: 'Laptop E-Ticaret Sitesi',
    description: {
      tr: 'Dinamik ürün listeleri ve güvenli ödeme özelliklerine sahip full-stack e-ticaret sitesi.',
      en: 'Full-stack e-commerce site with dynamic product listings and secure checkout.',
    },
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/images/projects/laptopEcommerce.jpeg',
    link: 'https://github.com/ilkaymb/Laptop_Ecommerce_Website_React_Node.js_MongoDB',
  },
  {
    slug: 'card-creator',
    title: 'Kart Oluşturucu',
    description: {
      tr: 'Görsel olarak UI kartı tasarlayıp kullanıma hazır Next.js bileşen kodu dışa aktaran bir araç.',
      en: 'Design UI cards visually and export ready-to-use Next.js component code.',
    },
    technologies: ['Next.js', 'React', 'Bootstrap'],
    image: '/images/projects/cardCreator.png',
    link: 'https://card-creator-seven.vercel.app/',
  },
  {
    slug: 'youtube-clone',
    title: 'Youtube Klon',
    description: {
      tr: 'HTML, CSS ve JavaScript kullanılarak yapılan YouTube arayüz klonu.',
      en: 'YouTube interface clone built with HTML, CSS, and JavaScript.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/projects/youtubeCloneImage.png',
    link: 'https://github.com/ilkaymb/Youtube-clone-html-css-javascript',
  },
  {
    slug: 'embedded-lab',
    title: 'Gömülü Sistemler Laboratuvarı',
    description: {
      tr: 'Bir üniversite gömülü sistemler laboratuvarı için geliştirilen React projesi.',
      en: 'React project built for a university embedded systems lab.',
    },
    technologies: ['React', 'JavaScript'],
    image: '/images/projects/embedLab.jpeg',
    link: 'https://github.com/ilkaymb/kou-embeded-lab-mainpage-project',
  },
  {
    slug: 'password-generator',
    title: 'Şifre Oluşturucu',
    description: {
      tr: 'C# ve Windows Forms kullanılarak geliştirilmiş masaüstü şifre oluşturucu.',
      en: 'Desktop password generator built with C# and Windows Forms.',
    },
    technologies: ['C#', 'Windows Forms'],
    image: '/images/projects/passwordGenerator.png',
    link: 'https://github.com/ilkaymb/Password-Generator-Sifre-Olusturucu',
  },
  {
    slug: 'calculator',
    title: 'Hesap Makinesi',
    description: {
      tr: 'C# ve Windows Forms kullanılarak geliştirilmiş masaüstü hesap makinesi.',
      en: 'Desktop calculator built with C# and Windows Forms.',
    },
    technologies: ['C#', 'Windows Forms'],
    image: '/images/projects/calculater.png',
    link: 'https://github.com/ilkaymb/Basic-Calculator-Basit-Hesap-Makinesi',
  },
  {
    slug: 'xox',
    title: 'XOX Masaüstü Uygulaması',
    description: {
      tr: 'C# ve Windows Forms kullanılarak geliştirilmiş iki kişilik XOX (tic-tac-toe) oyunu.',
      en: 'Two-player XOX (Tic-Tac-Toe) game built with C# and Windows Forms.',
    },
    technologies: ['C#', 'Windows Forms'],
    image: '/images/projects/xox.png',
    link: 'https://github.com/ilkaymb/XOX-2-Kisilik-Oyun',
  },
]
