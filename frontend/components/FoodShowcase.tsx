"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { LazyImage } from "@/components/LazyImage";

const FoodShowcase = () => {
  const { foods } = siteContent;

  const badges = ["Best Seller", "Favorit"];
  const microInfos = ["Dibuat harian", "Pesan via WhatsApp"];

  return (
    <section 
      id="foods" 
      data-nav-theme="light"
      className="bg-brand-cream border-t border-brand-dark/10 w-full flex justify-center"
      style={{
        paddingTop: "max(20px, 2vw)", // scales nicely to ~96px on desktop
        paddingBottom: "max(20px, 2vw)" // scales nicely to ~112px on desktop
      }}
    >
      <div 
        className="w-full mx-auto flex flex-col"
        style={{
          maxWidth: "1180px",
          paddingLeft: "clamp(20px, 4vw, 32px)",
          paddingRight: "clamp(20px, 4vw, 32px)"
        }}
      >
        
        {/* Header Section */}
        <div className="flex flex-col w-full" style={{ marginBottom: "20px" }}>
          {/* Label PREMIUM MENU */}
          <span 
            className="text-brand-accent uppercase text-xs font-bold"
            style={{ letterSpacing: "0.35em", marginBottom: "14px" }}
          >
            PREMIUM MENU
          </span>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
            <div className="flex flex-col">
              <h2 
                className="text-5xl md:text-7xl lg:text-[80px] font-editorial text-brand-dark tracking-tighter leading-[0.85]"
                style={{ marginBottom: "20px" }}
              >
                The Babah Sapi <br className="hidden md:block" />
                <span className="italic text-brand-accent font-normal">Collection</span>
              </h2>
              <p 
                className="text-[#4b0705]/80 font-medium text-[15px] md:text-[16px] max-w-md leading-relaxed"
                style={{ marginBottom: "24px" }}
              >
                Dipilih dari bahan terbaik, dibuat harian, dan siap dipesan hangat melalui WhatsApp.
              </p>
            </div>
            
            <Link 
              href="/#menu" 
              className="inline-flex items-center justify-center border border-[#4b0705]/30 hover:border-[#4b0705] text-[#4b0705] px-6 py-3 rounded-md text-[11px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 w-full md:w-auto text-center"
              style={{ marginBottom: "24px" }}
            >
              Lihat Menu Lengkap
            </Link>
          </div>
        </div>

        {/* Small Strip */}
        <div 
          className="flex items-center justify-center w-full border-y border-[#4b0705]/10"
          style={{ paddingTop: "16px", paddingBottom: "16px", marginTop: "8px", marginBottom: "28px" }}
        >
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-[#4b0705]/70 text-center">
            Dibuat Setiap Hari • Menerima Pesanan Banyak Sesuai Permintaan
          </span>
        </div>
 
        {/* Product Grid */}
        <div 
          className="flex flex-col md:flex-row justify-center items-stretch w-full"
          style={{ gap: "32px", marginTop: "24px" }}
        >
          {foods.map((food, i) => (
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
                  {badges[i % badges.length]}
                </div>
                 <LazyImage
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
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
                {food.description}
              </p>

              {/* Push Button to Bottom */}
              <div className="flex flex-col" style={{ marginTop: "auto", paddingTop: "8px" }}>
                <div 
                  className="flex items-center text-[#4b0705]/60 font-bold uppercase tracking-wider"
                  style={{ gap: "8px", fontSize: "11px", marginBottom: "16px" }}
                >
                  <span className="rounded-full bg-[#4b0705]/40" style={{ width: "6px", height: "6px" }} />
                  {microInfos[i % microInfos.length]}
                </div>
                
                <a 
                  href="https://wa.me/628123456789" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-[#4b0705] text-[#F4EBDD] font-bold tracking-wide rounded-[8px] transition-colors duration-300 hover:bg-[#3a0504]"
                  style={{ fontSize: "13px", padding: "14px 18px", minHeight: "48px" }}
                >
                  Pesan via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;
