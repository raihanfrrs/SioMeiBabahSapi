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
    headline: "Siomay Sapi Premium yang Lembut, Gurih, dan Siap Dikirim Hangat",
    subheadline: "Dibuat harian dari daging sapi pilihan, cocok untuk camilan, keluarga, atau hidangan praktis.",
    cta: "PESAN SEKARANG",
    imagePlaceholder: "/images/siomay-hero-premium.png",
  },
  foods: [
    {
      id: 1,
      name: "Siomay Sapi Original",
      price: "Rp 45.000 / 5 pcs",
      image: "/images/siomay-steamed.png",
      description: "Siomay sapi handmade dengan tekstur lembut, isian gurih, dan aroma kukusan hangat.",
    },
    {
      id: 2,
      name: "Siomay Sapi Goreng",
      price: "Rp 48.000 / 5 pcs",
      image: "/images/siomay-fried-gold.png",
      description: "Varian goreng dengan bagian luar renyah dan isian sapi yang tetap juicy di dalam.",
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Dari Daging Sapi Pilihan",
      text: "Menggunakan daging sapi pilihan dengan komposisi yang tepat agar menghasilkan rasa gurih dan tekstur juicy.",
      image: "/images/process-beef.png",
      annotation: "Daging sapi pilihan ─ tekstur juicy"
    },
    {
      number: "02",
      title: "Diracik Menjadi Isian Gurih",
      text: "Daging diolah bersama racikan bumbu keluarga untuk menciptakan rasa yang dalam, lembut, dan tidak berlebihan.",
      image: "/images/process-dough.png",
      annotation: "Isian sapi gurih ─ resep keluarga"
    },
    {
      number: "03",
      title: "Dibentuk Handmade Setiap Hari",
      text: "Setiap butir siomay dibentuk secara teliti agar teksturnya tetap rapi, padat, dan nyaman saat disantap.",
      image: "/images/macro-steamer.png",
      annotation: "Handmade harian ─ bentuk presisi"
    },
    {
      number: "04",
      title: "Dikukus Hingga Matang Sempurna",
      text: "Proses pengukusan menjaga kelembutan siomay dan membuat aromanya tetap hangat saat disajikan.",
      image: "/images/process-plating.png",
      annotation: "Kukusan hangat ─ matang sempurna"
    },
  ],
  macroTextures: [
    {
      id: 1,
      image: "/images/macro-sauce.png", // Using the generated artifact placeholder
      label: "Dibuat harian dari daging pilihan"
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
    { id: 3, image: "/images/macro-sauce.png", caption: "Steamed to perfection" },
    { id: 4, image: "/images/process-dough.png", caption: "Heritage recipe" },
  ],
  closingCta: {
    headline: "Rasa warisan, dibuat hangat untuk hari ini",
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
        title: "Rahasia Cita Rasa Sapi Gurih yang Juicy",
        excerpt: "Mengapa komposisi daging pilihan dan teknik pengukusan harian menjadi kunci kelezatan siomay kami.",
        date: "10 MEI 2026",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
        alt: "Siomay sapi premium",
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
