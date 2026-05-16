"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

const FoodShowcase = () => {
  const { foods } = siteContent;

  return (
    <section id="foods" className="bg-brand-cream border-t border-brand-dark/5 flex justify-center">
      <div className="container-custom">
        {/* Header */}
        <div className="flex justify-between items-end mb-20 md:mb-32 border-b border-brand-dark/10 pb-10">
          <div className="flex flex-col gap-4">
            <span className="text-brand-accent font-bold tracking-[0.4em] text-[10px] uppercase">Selections</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-editorial text-brand-dark tracking-tighter">
              The Babah Sapi <br /><span className="italic">Collection</span>
            </h2>
          </div>
          <Link 
            href="/#shop" 
            className="hidden md:block group relative text-xs font-bold uppercase tracking-[0.4em] text-brand-dark"
          >
            <span className="relative z-10">View Menu</span>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-accent scale-x-100 group-hover:scale-x-0 transition-transform duration-500 origin-left" />
          </Link>
        </div>

        {/* Grid / Carousel Container */}
        <div className="relative -mx-6 md:-mx-10 lg:mx-0 overflow-hidden">
          <div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar gap-10 md:gap-16 pb-12 px-6 md:px-10 lg:px-0">
            {foods.map((food, i) => (
              <motion.div
                key={food.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="min-w-[85%] sm:min-w-[48%] lg:min-w-0 snap-start flex flex-col gap-8 md:gap-10 group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-beige shadow-xl">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-3xl md:text-4xl font-editorial text-brand-dark leading-none">
                      {food.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] w-8 bg-brand-accent/30" />
                    <p className="text-[11px] font-bold text-brand-accent uppercase tracking-[0.3em]">
                      {food.price}
                    </p>
                  </div>
                  <p className="text-brand-dark/60 text-sm leading-relaxed mt-2 max-w-[280px]">
                    {food.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View Shop Link */}
        <div className="mt-16 md:hidden flex justify-center">
          <Link 
            href="/#shop" 
            className="w-full text-center border border-brand-dark/20 py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark"
          >
            View Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;
