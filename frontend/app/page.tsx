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

function cleanSchema(obj: any) {
  return JSON.parse(JSON.stringify(obj, (key, value) => {
    return (value === null || value === undefined) ? undefined : value;
  }));
}

const productsData = [
  {
    name: "Sio Mei Original",
    price: 35000,
    image: "https://siomeibabahsapi.my.id/images/sio-mei-original-siomay-sapi-premium.png",
    description: "Versi klasik dengan kulit lembut dan isian sapi gurih, cocok disajikan hangat.",
    rating: null,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Sio Mei Goreng",
    price: 38000,
    image: "https://siomeibabahsapi.my.id/images/sio-mei-goreng-renyah.png",
    description: "Bagian luar lebih renyah dengan isian sapi yang tetap lembut di dalam.",
    rating: null,
    reviewCount: 0,
    reviews: []
  },
  {
    name: "Paket Sio Mei Frozen",
    price: 30000,
    image: "https://siomeibabahsapi.my.id/images/paket-sio-mei-frozen.png",
    description: "Kemasan beku praktis untuk disimpan, siap dikukus atau digoreng kapan saja.",
    rating: null,
    reviewCount: 0,
    reviews: []
  }
];

export default function Home() {
  const { progress, isReady } = useInitialPreload();

  const productSchemas = productsData.map((product) => ({
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Babah Sapi"
    },
    "aggregateRating": (product.rating && product.reviewCount > 0) ? {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    } : undefined,
    "review": (product.reviews && product.reviews.length > 0) ? product.reviews.map((r: any) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating
      },
      "author": {
        "@type": "Person",
        "name": r.author
      }
    })) : undefined,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": product.price,
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "url": "https://siomeibabahsapi.my.id/#foods",
      "seller": {
        "@type": "Organization",
        "name": "Sio Mei Babah Sapi"
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "ID",
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
        "merchantReturnDays": 0
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "currency": "IDR",
          "value": 0
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "ID"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 3,
            "unitCode": "DAY"
          }
        }
      }
    }
  }));

  const jsonLdData = cleanSchema({
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
      ...productSchemas,
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
  });

  return (
    <SmoothScroll>
      <Script 
        id="json-ld" 
        type="application/ld+json" 
        strategy="beforeInteractive" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} 
      />
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
