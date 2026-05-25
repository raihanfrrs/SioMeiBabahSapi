export const siteContent = {
  navigation: [
    { label: "Proses", href: "/#process" },
    { label: "Menu", href: "/#foods" },
    { label: "Kualitas", href: "/#core" },
    { label: "Cerita", href: "/#mission" },
  ],
  hero: {
    label: "SIO MEI BY BABAH SAPI",
    headline: "Sio Mei Sapi Premium, Hangatnya Langsung Terasa",
    subheadline: "Siomay sapi handmade dengan isian gurih dan tekstur lembut. Tersedia original, goreng, dan frozen sesuai kebutuhan Anda.",
    cta: "Pesan Sio Mei Sekarang",
    highlight: "Original siap santap • Goreng renyah • Frozen praktis",
    imagePlaceholder: "/images/siomay-hero-premium.png",
  },
  macroTexture: {
    label: "TEKSTUR YANG BIKIN NAGIH",
    headline: "Lembut di luar, padat di dalam.",
    description: "Setiap gigitan menghadirkan kulit siomay yang lembut, isian sapi yang padat, dan rasa gurih yang mudah dinikmati kapan saja.",
    cta: "Lihat Varian Sio Mei",
  },
  foods: [
    {
      id: 1,
      name: "Sio Mei Original",
      price: "Rp 35.000 / 5 pcs",
      image: "/images/siomay-steamed.png",
      description: "Versi klasik dengan kulit lembut and isian sapi gurih, cocok disantap hangat.",
      meta: "Kukus klasik",
      buttonText: "Pesan Original"
    },
    {
      id: 2,
      name: "Sio Mei Goreng",
      price: "Rp 38.000 / 5 pcs",
      image: "/images/siomay-fried-gold.png",
      description: "Bagian luar lebih renyah dengan isian sapi yang tetap lembut di dalam.",
      meta: "Goreng renyah",
      buttonText: "Pesan Goreng"
    },
    {
      id: 3,
      name: "Paket Sio Mei Frozen",
      price: "Rp 30.000 / 5 pcs",
      image: "/images/siomay-frozen.png",
      description: "Kemasan beku praktis untuk disimpan, siap dikukus atau digoreng kapan saja.",
      meta: "Stok frozen",
      buttonText: "Pesan Frozen"
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Daging Dipilih dengan Teliti",
      text: "Komposisi daging disiapkan untuk menghasilkan isian yang padat, gurih, dan tetap nyaman saat disantap.",
      image: "/images/ground-beef.png",
      annotation: "KOMPOSISI SAPI ─ Rasa lebih utuh",
      labelLeft: "BEEF PREP",
      labelRight: "BALANCED TEXTURE"
    },
    {
      number: "02",
      title: "Adonan Diracik Hingga Menyatu",
      text: "Bumbu dan daging diolah perlahan agar rasa meresap rata sebelum Sio Mei dibentuk satu per satu.",
      image: "/images/process-dough-2.png",
      annotation: "ADONAN SIO MEI ─ Diracik merata",
      labelLeft: "MIXING PROCESS",
      labelRight: "RACIKAN KHAS"
    },
    {
      number: "03",
      title: "Nikmat Dikukus",
      text: "Cara klasik untuk mendapatkan aroma hangat, kulit lembut, dan rasa siomay sapi yang lebih natural.",
      image: "/images/macro-steamer-2.png",
      annotation: "KUKUS HANGAT ─ Lembut dan wangi",
      labelLeft: "STEAMED OPTION",
      labelRight: "AROMA HANGAT"
    },
    {
      number: "04",
      title: "Renyah Saat Digoreng",
      text: "Untuk sensasi berbeda, Sio Mei bisa digoreng hingga keemasan dengan bagian luar renyah dan isian tetap juicy.",
      image: "/images/siomay-fried.png",
      annotation: "GORENG RENYAH ─ Keemasan di luar",
      labelLeft: "FRIED OPTION",
      labelRight: "CRISPY BITE"
    },
    {
      number: "05",
      title: "Praktis dalam Kemasan Frozen",
      text: "Dikemas beku secara higienis agar mudah disimpan dan siap diolah kapan saja di rumah.",
      image: "/images/siomay-frozen-2.png",
      annotation: "FROZEN PACK ─ Siap stok di rumah",
      labelLeft: "FROZEN PRODUCT",
      labelRight: "EASY STOCK"
    },
  ],
  macroTextures: [
    {
      id: 1,
      image: "/images/macro-sauce.png",
      label: "Dibuat segar dari daging pilihan"
    },
    {
      id: 2,
      image: "/images/macro-steamer.png",
      label: "Steamed to tender perfection"
    }
  ],
  philosophy: {
    label: "OUR PHILOSOPHY",
    headline: "Terinspirasi dari resep warisan",
    description: "Nama Sio Mei kami maknai sebagai kelezatan sederhana: dibuat dengan tangan, dijaga rasanya, dan disajikan untuk momen makan yang terasa dekat.",
    quote: "“Bukan sekadar siomay, tetapi rasa rumahan yang dibuat lebih rapi, lebih hangat, dan lebih berkesan.”",
    badges: ["Resep Keluarga", "Dibentuk Manual", "Rasa Konsisten"],
    cta: "Kenali Cerita Sio Mei"
  },
  galleryIntro: {
    label: "BEHIND THE SCENE",
    headline: "The Making of Babah Sapi",
    subheadline: "Kami memperlihatkan prosesnya agar pelanggan tahu apa yang mereka pesan: area kerja yang rapi, adonan yang terukur, dan produk yang dicek sebelum dikemas.",
    footerNote: "Siap untuk pesanan keluarga, acara, hingga kebutuhan jumlah banyak.",
    cta: "Tanya Ketersediaan Pesanan"
  },
  gallery: [
    { id: 1, image: "/images/bts-hygiene.png", label: "Higienis Sejak Awal", caption: "Area kerja, alat, and tangan dijaga bersih selama proses." },
    { id: 2, image: "/images/process-beef.png", label: "Racikan Sapi Terukur", caption: "Adonan disiapkan untuk menjaga tekstur padat tanpa kehilangan kelembutan." },
    { id: 3, image: "/images/bts-folded.png", label: "Dilipat Satu per Satu", caption: "Setiap bentuk dibuat manual agar tampil rapi and tetap berkarakter." },
    { id: 4, image: "/images/bts-quality.png", label: "Dicek Sebelum Dikemas", caption: "Setiap porsi diperiksa agar tampilan, tekstur, and kualitas tetap terjaga." },
  ],
  menuIntro: {
    label: "MENU PILIHAN",
    headline: "The Sio Mei Collection",
    subheadline: "Pilih varian sesuai cara menikmati Anda: original hangat, goreng renyah, atau frozen praktis untuk stok di rumah.",
    banner: "Melayani pesanan satuan dan jumlah banyak sesuai kebutuhan"
  },
  closingCta: {
    label: "SIAP UNTUK PESANAN ANDA",
    headline: "Sio Mei untuk keluarga, acara, dan stok di rumah",
    subheadline: "Pilih varian yang Anda mau, tentukan jumlah pesanan, lalu kami bantu proses pemesanan melalui WhatsApp.",
    ctaText: "Mulai Pesan via WhatsApp",
    image: "/images/siomay-closing.png",
    signals: ["Original, goreng, dan frozen", "Bisa pesan banyak", "Proses higienis"]
  },
  journal: {
    title: "Apa Kata Mereka Tentang Sio Mei",
    subtitle: "Cerita singkat dari pelanggan yang sudah mencoba Sio Mei Babah Sapi.",
    posts: [
      {
        id: 1,
        title: "“Tekstur Juicy yang Mengesankan”",
        excerpt: "“Siomay sapi dengan rasa daging yang sangat terasa dan juicy. Kulitnya tipis dan lembut. Sangat direkomendasikan untuk keluarga.” — Ibu Amalia, Jakarta",
        date: "PELANGGAN SETIA",
        image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800",
        alt: "Pelanggan menikmati siomay",
      },
      {
        id: 2,
        title: "“Cita Rasa Rumahan yang Premium”",
        excerpt: "“Kami memesan Sio Mei original dan goreng untuk acara keluarga. Semua memuji rasa gurih alaminya yang pas tanpa penyedap berlebihan.” — Bpk. Rian, Bandung",
        date: "ACARA KELUARGA",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
        alt: "Sio Mei sajian keluarga",
      },
      {
        id: 3,
        title: "“Pengiriman Hangat & Higienis”",
        excerpt: "“Dipesan pagi hari, sampai di rumah dalam kondisi masih hangat terbungkus rapi. Sangat praktis untuk sarapan atau camilan sore.” — dr. Sarah, Tangerang",
        date: "PESANAN SEGAR",
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800",
        alt: "Pengiriman siomay sapi hangat",
      },
    ],
  },
  footer: {
    social: [
      { label: "WhatsApp", href: "https://wa.me/6281333903187?text=Halo%20Babah%20Sapi%2C%20saya%20ingin%20pesan%20Sio%20Mei.%0ABoleh%20dibantu%20info%20menu%2C%20harga%2C%20dan%20cara%20pemesanannya%3F%0A%0ANama%3A%0AAlamat%20pengiriman%3A%0ACatatan%3A%0A%0ATerima%20kasih." },
    ],
    newsletterTitle: "Dapatkan kabar dari dapur Babah Sapi",
    newsletterCopy: "Info menu, ketersediaan pesanan, dan cerita singkat seputar Sio Mei kami.",
    newsletterCta: "Gabung Info Babah Sapi",
    legal: ["Press Kit", "Kebijakan Privasi", "Syarat & Ketentuan"],
    email: "hello@babahsapi.com",
    copyright: "© 2026 Sio Mei Babah Sapi. Hak Cipta Dilindungi."
  },
};

