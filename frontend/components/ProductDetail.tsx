"use client";

import React from "react";
import Image from "next/image";
import Script from "next/script";

interface ProductDetailProps {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  priceNumeric: string;
  pack: string;
  format: string;
  serving: string;
  suitableFor: string;
  storage: string;
  whatsappMessage: string;
}

export default function ProductDetail({
  id,
  name,
  image,
  description,
  price,
  priceNumeric,
  pack,
  format,
  serving,
  suitableFor,
  storage,
  whatsappMessage
}: ProductDetailProps) {
  const whatsappNumber = "6281333903187";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    image: `https://siomeibabahsapi.my.id${image}`,
    description,
    brand: {
      "@type": "Brand",
      name: "Sio Mei Babah Sapi"
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: priceNumeric,
      availability: "https://schema.org/InStock",
      url: `https://siomeibabahsapi.my.id/produk/${id}`
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream relative pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <Script id={`json-ld-product-${id}`} type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
          <Image src={image} alt={`${name} siomay sapi premium`} fill className="object-cover" priority />
        </div>
        <div className="flex flex-col">
          <h1 className="font-editorial text-5xl md:text-6xl text-brand-dark mb-6">{name}</h1>
          <p className="text-xl text-brand-dark/80 mb-8 leading-relaxed">{description}</p>
          
          <div className="bg-white/40 backdrop-blur-md rounded-xl p-6 md:p-8 mb-8 border border-brand-accent/20">
            <h2 className="text-3xl font-editorial text-brand-dark mb-2">{price}</h2>
            <div className="h-px w-full bg-brand-accent/20 my-4" />
            
            <ul className="space-y-4 text-brand-dark/80">
              <li><strong className="text-brand-dark">Isi Pack:</strong> {pack}</li>
              <li><strong className="text-brand-dark">Format:</strong> {format}</li>
              <li><strong className="text-brand-dark">Cara Penyajian:</strong> {serving}</li>
              <li><strong className="text-brand-dark">Cocok Untuk:</strong> {suitableFor}</li>
              <li><strong className="text-brand-dark">Penyimpanan:</strong> {storage}</li>
            </ul>
          </div>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-dark text-brand-cream py-4 px-8 rounded-full font-bold uppercase tracking-wider hover:bg-brand-peanut transition-colors"
          >
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
