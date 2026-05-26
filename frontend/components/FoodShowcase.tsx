"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import ProtectedBackgroundImage from "@/components/ProtectedBackgroundImage";

export default function FoodShowcase() {
  const { foods, menuIntro } = siteContent as any;
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Focus trap & Escape key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProduct) {
        setSelectedProduct(null);
      }
    };
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  return (
    <>
      <section 
        id="foods" 
        data-nav-theme="light"
        className="section-shell bg-brand-cream relative w-full"
      >
        <div className="section-inner flex flex-col items-center">
          
          {/* Header Section */}
          <div className="flex flex-col w-full" style={{ marginBottom: "20px" }}>
            <span 
              className="text-brand-accent uppercase text-xs font-bold"
              style={{ letterSpacing: "0.35em", marginBottom: "14px" }}
            >
              {menuIntro.label}
            </span>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
              <div className="flex flex-col">
                <h2 
                  className="text-5xl md:text-7xl lg:text-[80px] font-editorial text-brand-dark tracking-tighter leading-[0.85]"
                  style={{ marginBottom: "20px" }}
                >
                  {menuIntro.headline.replace("Collection", "")} <br className="hidden md:block" />
                  <span className="italic text-brand-accent font-normal">Collection</span>
                </h2>
                <p 
                  className="text-[#4b0705]/80 font-medium text-[15px] md:text-[16px] max-w-md leading-relaxed"
                  style={{ marginBottom: "24px" }}
                >
                  {menuIntro.subheadline}
                </p>
              </div>
            </div>
          </div>

          {/* Small Strip */}
          <div 
            className="flex items-center justify-center w-full border-y border-[#4b0705]/10"
            style={{ paddingTop: "16px", paddingBottom: "16px", marginTop: "8px", marginBottom: "28px" }}
          >
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-[#4b0705]/70 text-center">
              {menuIntro.banner}
            </span>
          </div>
  
          {/* Product Grid */}
          <div 
            className="flex flex-col md:flex-row justify-center items-stretch w-full"
            style={{ gap: "32px", marginTop: "24px" }}
          >
            {foods.map((food: any, i: number) => {
              const waLink = `https://wa.me/6281333903187?text=${encodeURIComponent(food.whatsappText)}`;
              return (
                <motion.div
                  key={food.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                  className="group flex flex-col bg-[#FDF8EE] border border-[#4b0705]/10 rounded-[8px] hover:-translate-y-1 hover:shadow-xl hover:border-[#4b0705]/25 transition-all duration-300 overflow-hidden w-full md:w-[360px]"
                  style={{ padding: "clamp(18px, 2.5vw, 24px)" }}
                >
                  {/* Product Image with Badge */}
                  <div 
                    className="relative overflow-hidden rounded-[6px] bg-brand-beige"
                    style={{ aspectRatio: "4/5", marginBottom: "24px" }}
                  >
                    <div 
                      className="absolute top-3 left-3 z-10 bg-[#4b0705] text-[#F4EBDD] font-bold uppercase tracking-wider rounded-full shadow-sm"
                      style={{ fontSize: "10px", padding: "6px 12px" }}
                    >
                      {food.badge}
                    </div>
                     <ProtectedBackgroundImage
                      src={food.image}
                      alt={food.name}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  
                  {/* Product Title */}
                  <h3 
                    className="text-3xl md:text-[32px] font-editorial text-brand-dark leading-[1.1] tracking-tight"
                    style={{ marginBottom: "8px" }}
                  >
                    {food.name}
                  </h3>
                  
                  {/* Product Price */}
                  <div className="flex items-center" style={{ marginBottom: "16px" }}>
                    <p className="text-[#C7923E] font-bold text-[16px] md:text-[18px] tracking-wide">
                      {food.price}
                    </p>
                  </div>
                  
                  {/* Product Description */}
                  <p 
                    className="text-brand-dark/75 text-[14px] md:text-[15px] leading-relaxed font-medium"
                    style={{ marginBottom: "24px" }}
                  >
                    {food.shortDescription}
                  </p>

                  {/* Push Button to Bottom */}
                  <div className="flex flex-col" style={{ marginTop: "auto", paddingTop: "8px" }}>
                    <div 
                      className="flex items-center text-[#4b0705]/60 font-bold uppercase tracking-wider"
                      style={{ gap: "8px", fontSize: "11px", marginBottom: "16px" }}
                    >
                      <span className="rounded-full bg-[#4b0705]/40" style={{ width: "6px", height: "6px" }} />
                      {food.label}
                    </div>
                    
                    <button 
                      onClick={() => setSelectedProduct(food)}
                      className="w-full inline-flex items-center justify-center border border-[#4b0705]/20 text-[#4b0705] font-bold tracking-wide rounded-[8px] transition-colors duration-300 hover:bg-[#4b0705]/5"
                      style={{ fontSize: "13px", padding: "12px 18px", minHeight: "44px", marginBottom: "12px" }}
                    >
                      Lihat Detail
                    </button>

                    <a 
                      href={waLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center bg-[#4b0705] text-[#F4EBDD] font-bold tracking-wide rounded-[8px] transition-colors duration-300 hover:bg-[#3a0504]"
                      style={{ fontSize: "13px", padding: "14px 18px", minHeight: "48px" }}
                    >
                      {food.buttonText}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal Detail Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#1F140F]/80 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
              aria-hidden="true"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="relative w-full max-w-[1000px] bg-[#FDF8EE] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
              style={{ maxHeight: "calc(100vh - 40px)", border: "1px solid rgba(199, 146, 62, 0.2)" }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 md:top-6 md:right-6 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/70 backdrop-blur hover:bg-white text-[#4b0705] transition-all shadow-sm hover:shadow-md"
                aria-label="Tutup modal"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Left: Image Container */}
              <div className="w-full md:w-[45%] bg-brand-beige relative flex-shrink-0" style={{ minHeight: "350px" }}>
                <div 
                  className="absolute top-5 left-5 md:top-6 md:left-6 z-10 bg-[#4b0705] text-[#F4EBDD] font-bold uppercase tracking-wider rounded-full shadow-sm"
                  style={{ fontSize: "11px", padding: "8px 14px" }}
                >
                  {selectedProduct.badge}
                </div>
                <ProtectedBackgroundImage
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>

              {/* Right: Content Container */}
              <div className="w-full md:w-[55%] flex flex-col overflow-y-auto" style={{ padding: "clamp(32px, 5vw, 44px)" }}>
                <div className="flex flex-col" style={{ marginBottom: "28px" }}>
                  <h2 id="modal-title" className="text-3xl lg:text-4xl font-editorial text-brand-dark leading-tight" style={{ marginBottom: "12px" }}>
                    {selectedProduct.name}
                  </h2>
                  <p className="text-[#C7923E] font-bold text-lg md:text-xl tracking-wide" style={{ marginBottom: "20px" }}>
                    {selectedProduct.price}
                  </p>
                  <p className="text-brand-dark/80 text-[15px] md:text-[16px]" style={{ lineHeight: "1.65" }}>
                    {selectedProduct.longDescription}
                  </p>
                </div>

                <div className="flex flex-col gap-0 mb-8">
                  <div className="flex flex-col border-b border-[#4b0705]/10 py-4">
                    <span className="text-[11px] uppercase tracking-widest font-bold text-[#4b0705]/50" style={{ marginBottom: "8px" }}>Isi Pack</span>
                    <span className="font-sans text-[15px] text-[#4b0705]" style={{ lineHeight: "1.65" }}>{selectedProduct.pack}</span>
                  </div>
                  <div className="flex flex-col border-b border-[#4b0705]/10 py-4">
                    <span className="text-[11px] uppercase tracking-widest font-bold text-[#4b0705]/50" style={{ marginBottom: "8px" }}>Format</span>
                    <span className="font-sans text-[15px] text-[#4b0705]" style={{ lineHeight: "1.65" }}>{selectedProduct.format}</span>
                  </div>
                  <div className="flex flex-col border-b border-[#4b0705]/10 py-4">
                    <span className="text-[11px] uppercase tracking-widest font-bold text-[#4b0705]/50" style={{ marginBottom: "8px" }}>Cara Penyajian</span>
                    <span className="font-sans text-[15px] text-[#4b0705]" style={{ lineHeight: "1.65" }}>{selectedProduct.serving}</span>
                  </div>
                  <div className="flex flex-col border-b border-[#4b0705]/10 py-4">
                    <span className="text-[11px] uppercase tracking-widest font-bold text-[#4b0705]/50" style={{ marginBottom: "8px" }}>Cocok Untuk</span>
                    <span className="font-sans text-[15px] text-[#4b0705]" style={{ lineHeight: "1.65" }}>{selectedProduct.suitableFor}</span>
                  </div>
                  <div className="flex flex-col border-b border-[#4b0705]/10 py-4">
                    <span className="text-[11px] uppercase tracking-widest font-bold text-[#4b0705]/50" style={{ marginBottom: "8px" }}>Penyimpanan</span>
                    <span className="font-sans text-[15px] text-[#4b0705]" style={{ lineHeight: "1.65" }}>{selectedProduct.storage}</span>
                  </div>
                  {selectedProduct.b2bNote && (
                    <div className="flex flex-col py-4">
                      <span className="text-[11px] uppercase tracking-widest font-bold text-[#4b0705]/50" style={{ marginBottom: "8px" }}>Info B2B</span>
                      <span className="font-sans text-[15px] text-[#4b0705]" style={{ lineHeight: "1.65" }}>{selectedProduct.b2bNote}</span>
                    </div>
                  )}
                </div>

                <div className="mt-auto w-full" style={{ paddingTop: "32px", paddingBottom: "16px" }}>
                  <a 
                    href={`https://wa.me/6281333903187?text=${encodeURIComponent(selectedProduct.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-[#4b0705] text-[#F4EBDD] font-bold tracking-widest uppercase rounded-xl transition-all duration-300 hover:bg-[#3a0504] hover:shadow-lg hover:-translate-y-0.5"
                    style={{ fontSize: "14px", padding: "0 36px", minHeight: "56px" }}
                  >
                    {selectedProduct.id === "frozen" ? "Diskusikan Supply via WhatsApp" : "Pesan via WhatsApp"}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
