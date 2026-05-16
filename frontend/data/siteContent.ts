export const siteContent = {
  navigation: [
    { label: "Proses", href: "/#process" },
    { label: "Menu", href: "/#foods" },
    { label: "Kualitas", href: "/#core" },
    { label: "Misi", href: "/#mission" },
    { label: "Jurnal", href: "/#journal" },
    { label: "Kontak", href: "/#contact" },
  ],
  hero: {
    headline: "Siomay Sapi Premium dari Resep Warisan",
    subheadline: "Gurih, lembut, dan bumbu kacang yang autentik.",
    cta: "PESAN SEKARANG",
    imagePlaceholder: "/images/siomay-hero-premium.png",
  },
  foods: [
    {
      id: 1,
      name: "Siomay Sapi Original",
      price: "Rp 45.000 — 5 Pcs",
      image: "/images/siomay-steamed.png",
      description: "Siomay sapi murni dengan tekstur lembut dan rasa gurih alami.",
    },
    {
      id: 2,
      name: "Siomay Sapi Goreng",
      price: "Rp 48.000 — 5 Pcs",
      image: "/images/siomay-fried-gold.png",
      description: "Varian goreng yang krispi di luar namun tetap juicy di dalam.",
    },
    {
      id: 3,
      name: "Bumbu Kacang Spesial",
      price: "Rp 25.000 — 250ml",
      image: "/images/macro-sauce.png",
      description: "Bumbu kacang rahasia Babah Sapi dengan rempah pilihan.",
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Dari Daging Sapi Pilihan",
      text: "Hanya menggunakan daging sapi premium dengan proporsi lemak yang tepat untuk tekstur juicy.",
      image: "/images/process-beef.png",
      annotation: "Daging sapi pilihan ─ tekstur lembut"
    },
    {
      number: "02",
      title: "Ke Adonan Lembut",
      text: "Diolah dan diuleni secara hati-hati untuk menghasilkan kekenyalan yang pas tanpa menghilangkan serat daging.",
      image: "/images/process-dough.png",
      annotation: "Adonan kalis ─ kenyal & juicy"
    },
    {
      number: "03",
      title: "Dikukus Perlahan",
      text: "Proses pengukusan dilakukan dengan suhu terkontrol untuk menjaga kelembutan dan kesegaran daging.",
      image: "/images/macro-steamer.png",
      annotation: "Suhu stabil ─ aroma khas"
    },
    {
      number: "04",
      title: "Disajikan Autentik",
      text: "Kombinasi rempah dan bumbu kacang rahasia yang disiram kental, menyempurnakan rasa warisan.",
      image: "/images/process-plating.png",
      annotation: "Bumbu kacang ─ racikan autentik"
    },
  ],
  macroTextures: [
    {
      id: 1,
      image: "/images/macro-sauce.png", // Using the generated artifact placeholder
      label: "From perfectly roasted peanuts"
    },
    {
      id: 2,
      image: "/images/macro-steamer.png", // Using the generated artifact placeholder
      label: "Steamed to tender perfection"
    }
  ],
  gallery: [
    { id: 1, image: "/images/editorial-artisan.png", caption: "The art of folding" },
    { id: 2, image: "/images/process-beef.png", caption: "Premium beef selection" },
    { id: 3, image: "/images/macro-sauce.png", caption: "Authentic peanut sauce" },
    { id: 4, image: "/images/process-dough.png", caption: "Heritage recipe" },
  ],
  closingCta: {
    headline: "Rasa warisan, dibuat untuk hari ini",
    image: "/images/siomay-closing.png",
    ctaText: "Pesan Sekarang"
  },
  journal: {
    title: "Jurnal Babah Sapi",
    subtitle: "Cerita tentang dedikasi, warisan rasa, dan filosofi di balik setiap butir siomay kami.",
    posts: [
      {
        id: 1,
        title: "Perjalanan Menemukan Tekstur Sempurna",
        excerpt: "Bagaimana kami bereksperimen selama berbulan-bulan untuk mendapatkan kekenyalan yang pas.",
        date: "15 MEI 2026",
        image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800",
        alt: "Proses pembuatan siomay",
      },
      {
        id: 2,
        title: "Rahasia di Balik Saus Kacang yang Autentik",
        excerpt: "Mengapa kacang tanah sangrai dan rempah pilihan adalah kunci dari kelezatan saus kami.",
        date: "10 MEI 2026",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
        alt: "Saus kacang tradisional",
      },
      {
        id: 3,
        title: "Warisan Resep dari Generasi ke Generasi",
        excerpt: "Menjaga keaslian rasa di tengah gempuran tren kuliner modern.",
        date: "05 MEI 2026",
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
        alt: "Resep warisan keluarga",
      },
    ],
  },
  footer: {
    social: [
      { label: "Instagram", href: "#" },
      { label: "WhatsApp", href: "#" },
    ],
    legal: ["Kebijakan Privasi", "Syarat & Ketentuan"],
    support: ["Pengiriman", "Reseller"],
    navigation: ["Proses", "Menu", "Jurnal"],
    statement: "Menghadirkan kelezatan siomay sapi premium melalui keahlian tangan dan bahan-bahan terbaik.",
    copyright: "© 2026 Sio Mei Babah Sapi. Hak Cipta Dilindungi."
  },
};
