"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

const FoodShowcase = () => {
  const { foods } = siteContent;

  return (
    <section 
      id="foods" 
      data-nav-theme="light"
      className="bg-brand-cream border-t border-[#2a140d]/10 flex justify-center pt-28 md:pt-36 lg:pt-44 pb-32 md:pb-40 lg:pb-52"
    >
      <div className="container-custom">
        {/* Editorial Marker */}
        <div className="flex flex-col items-center mb-24">
          <div className="h-16 w-[1px] bg-brand-accent/30 mb-8" />
          <span className="ui-label text-brand-accent tracking-[0.4em] uppercase text-[10px] font-bold">Pilihan Menu</span>
        </div>
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 border-b border-[#2a140d]/10 pb-12 gap-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-6xl md:text-8xl lg:text-[100px] font-editorial text-brand-dark tracking-tighter leading-[0.85]">
              The Babah Sapi <br /><span className="italic text-brand-accent">Collection</span>
            </h2>
          </div>
          <Link 
            href="/#menu" 
            className="flex flex-col items-start md:items-end group pb-4"
          >
            <span className="ui-label text-[10px] mb-3 group-hover:text-brand-accent transition-colors font-bold uppercase tracking-widest">Digital Menu</span>
            <div className="relative text-sm font-bold uppercase tracking-[0.3em] text-brand-dark flex items-center gap-6">
              <span className="whitespace-nowrap">View Full Menu</span>
              <div className="h-[1px] w-12 bg-brand-dark transition-all duration-700 group-hover:w-20 group-hover:bg-brand-accent" />
            </div>
          </Link>
        </div>
 
        {/* Grid / Carousel Container */}
        <div className="relative -mx-6 md:-mx-10 lg:mx-0 overflow-hidden">
          <div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar gap-12 md:gap-16 lg:gap-20 pb-12 px-6 md:px-10 lg:px-0">
            {foods.map((food, i) => (
              <motion.div
                key={food.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="min-w-[85%] sm:min-w-[48%] lg:min-w-0 snap-start flex flex-col gap-10 md:gap-12 group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-beige shadow-2xl border border-brand-dark/5 rounded-sm">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 brightness-[0.95] group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                </div>
                
                <div className="flex flex-col gap-8">
                  <h3 className="text-4xl md:text-5xl font-editorial text-brand-dark leading-none tracking-tight">
                    {food.name}
                  </h3>
                  
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="h-[1px] w-8 bg-brand-accent/40" />
                      <p className="ui-label text-brand-accent font-bold tracking-widest text-base">
                        {food.price}
                      </p>
                    </div>
                    <p className="text-brand-dark/70 text-lg leading-relaxed max-w-[320px] font-medium">
                      {food.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
 
        {/* Mobile View Shop Link */}
        <div className="mt-16 md:hidden flex justify-center">
          <Link 
            href="/#menu" 
            className="w-full text-center border border-brand-dark/20 py-6 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-dark rounded-md bg-[#f4eadc] shadow-md"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;
