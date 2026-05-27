"use client";

import Script from "next/script";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSummary from "@/components/ProductSummary";
import MacroTexture from "@/components/MacroTexture";
import WhySioMei from "@/components/WhySioMei";
import FoodShowcase from "@/components/FoodShowcase";
import HowToEnjoy from "@/components/HowToEnjoy";
import BehindTheScene from "@/components/BehindTheScene";
import B2BSupply from "@/components/B2BSupply";
import PartnerNote from "@/components/PartnerNote";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import ClosingCTA from "@/components/ClosingCTA";
import FooterLuxury from "@/components/FooterLuxury";
import SmoothScroll from "@/components/SmoothScroll";
import { useInitialPreload } from "@/hooks/useInitialPreload";
import BrandedPreloader from "@/components/BrandedPreloader";

export default function Home() {
  const { progress, isReady } = useInitialPreload();

  return (
    <SmoothScroll>
      <Script id="json-ld" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "name": "Sio Mei Babah Sapi",
            "url": "https://siomeibabahsapi.my.id",
            "logo": "https://siomeibabahsapi.my.id/images/sio-mei-original-siomay-sapi-premium.png",
            "email": "siomeibabahsapi@gmail.com",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+6281333903187",
                "contactType": "customer service",
                "areaServed": "ID",
                "availableLanguage": ["Indonesian"]
              }
            ]
          },
          {
            "@type": "FoodEstablishment",
            "name": "Sio Mei Babah Sapi",
            "image": "https://siomeibabahsapi.my.id/images/sio-mei-original-siomay-sapi-premium.png",
            "email": "siomeibabahsapi@gmail.com",
            "telephone": "+6281333903187",
            "url": "https://siomeibabahsapi.my.id",
            "menu": "https://siomeibabahsapi.my.id/#foods",
            "servesCuisine": "Siomay Sapi"
          },
          {
            "@type": "OfferCatalog",
            "name": "Menu Sio Mei Babah Sapi",
            "itemListElement": [
              {
                "@type": "Product",
                "name": "Sio Mei Original",
                "image": "https://siomeibabahsapi.my.id/images/sio-mei-original-siomay-sapi-premium.png",
                "description": "Versi klasik dengan kulit lembut dan isian sapi gurih, cocok disajikan hangat.",
                "brand": {
                  "@type": "Brand",
                  "name": "Sio Mei Babah Sapi"
                },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "IDR",
                  "price": "35000",
                  "availability": "https://schema.org/InStock",
                  "url": "https://siomeibabahsapi.my.id/#foods"
                }
              },
              {
                "@type": "Product",
                "name": "Sio Mei Goreng",
                "image": "https://siomeibabahsapi.my.id/images/sio-mei-goreng-renyah.png",
                "description": "Bagian luar lebih renyah dengan isian sapi yang tetap lembut di dalam.",
                "brand": {
                  "@type": "Brand",
                  "name": "Sio Mei Babah Sapi"
                },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "IDR",
                  "price": "38000",
                  "availability": "https://schema.org/InStock",
                  "url": "https://siomeibabahsapi.my.id/#foods"
                }
              },
              {
                "@type": "Product",
                "name": "Paket Sio Mei Frozen",
                "image": "https://siomeibabahsapi.my.id/images/paket-sio-mei-frozen.png",
                "description": "Kemasan beku praktis untuk disimpan, siap dikukus atau digoreng kapan saja.",
                "brand": {
                  "@type": "Brand",
                  "name": "Sio Mei Babah Sapi"
                },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "IDR",
                  "price": "30000",
                  "availability": "https://schema.org/InStock",
                  "url": "https://siomeibabahsapi.my.id/#foods"
                }
              }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Apakah Sio Mei bisa dikirim dalam kondisi frozen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ya. Sio Mei tersedia dalam pilihan frozen sehingga dapat disimpan dan diolah kembali dengan cara dikukus atau digoreng sesuai kebutuhan."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah bisa dipesan untuk acara atau jumlah banyak?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bisa. Kami menerima pesanan untuk kebutuhan keluarga, acara, reseller, restoran, cafe, bar, club, maupun kebutuhan operasional F&B lainnya."
                }
              },
              {
                "@type": "Question",
                "name": "Bagaimana cara menyajikan Sio Mei?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sio Mei dapat disajikan dengan cara dikukus untuk tekstur lembut, digoreng untuk sensasi renyah, atau disimpan frozen untuk stok praktis."
                }
              },
              {
                "@type": "Question",
                "name": "Resep apa yang digunakan untuk Sio Mei Babah Sapi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sio Mei Babah Sapi menggunakan resep turun-temurun keluarga yang disesuaikan dengan standar produksi modern, sehingga rasa tetap gurih, tekstur konsisten, dan proses pembuatannya tetap higienis."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah tersedia harga untuk reseller atau B2B?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tersedia. Untuk kebutuhan reseller, restoran, cafe, bar, club, atau event, harga dan skema supply dapat didiskusikan sesuai jumlah dan kebutuhan."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah produk sudah siap dikirim?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Produk dapat disiapkan sesuai pesanan. Untuk pemesanan personal maupun jumlah besar, silakan hubungi WhatsApp agar kami dapat menyesuaikan jadwal produksi dan pengiriman."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah Sio Mei menggunakan daging sapi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ya. Sio Mei Babah Sapi dibuat dengan isian sapi pilihan, diracik agar memiliki tekstur padat, lembut, dan gurih saat disantap."
                }
              }
            ]
          }
        ]
      }) }} />
      <BrandedPreloader progress={progress} isReady={isReady} />
      <main className="min-h-screen bg-brand-cream relative overflow-hidden noise-overlay">
        <Navbar />
        
        {/* Sequence: Hero -> Summary -> Why Us -> Menu -> How to Enjoy -> BTS -> B2B -> Testimonials -> FAQ -> Closing -> Footer */}
        <div className="relative z-10">
          <Hero />
        </div>
        
        <div className="relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
          <MacroTexture />
          <ProductSummary />
          <WhySioMei />
        </div>
        
        <div className="relative z-30 bg-brand-cream">
          <FoodShowcase />
          <HowToEnjoy />
        </div>
        
        <div className="relative z-40 bg-brand-cream">
          <BehindTheScene />
          <B2BSupply />
          <PartnerNote />
        </div>

        <div className="relative z-40 bg-brand-cream">
          <TestimonialSection />
          <FAQSection />
        </div>
        
        <div className="relative z-50">
          <ClosingCTA />
          <FooterLuxury />
        </div>
      </main>
    </SmoothScroll>
  );
}
