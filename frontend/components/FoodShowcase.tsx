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
      className="bg-brand-cream border-t border-brand-dark/10 section-editorial-collection flex justify-center w-full"
    >
      <div className="section-inner px-6 md:px-10 lg:px-16 w-full flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col mb-12 md:mb-16 w-full">
          <span className="text-brand-accent tracking-[0.35em] uppercase text-xs font-bold mb-4">
            PREMIUM MENU
          </span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full pb-6 border-b border-brand-dark/10">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-editorial text-brand-dark tracking-tighter leading-[0.9] space-y-2">
              The Babah Sapi <br />
              <span className="italic text-brand-accent font-normal">Collection</span>
            </h2>
            <Link 
              href="/#menu" 
              className="flex flex-col items-start md:items-end group pb-2"
            >
              <span className="text-[10px] mb-2 group-hover:text-brand-accent transition-colors font-bold uppercase tracking-widest text-brand-dark/60">Digital Menu</span>
              <div className="relative text-xs font-bold uppercase tracking-[0.3em] text-brand-dark flex items-center gap-4">
                <span className="whitespace-nowrap">View Full Menu</span>
                <div className="h-[1px] w-8 bg-brand-dark transition-all duration-300 group-hover:w-12 group-hover:bg-brand-accent" />
              </div>
            </Link>
          </div>
        </div>
 
        {/* Product Grid (Responsive, mathematical alignment, no overlaps) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full mt-4">
          {foods.map((food, i) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="premium-product-card group"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-beige border border-brand-dark/5 rounded-sm mb-6">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 brightness-[0.95] group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
              </div>
              
              {/* Product Title */}
              <h3 className="text-3xl md:text-4xl font-editorial text-brand-dark leading-none tracking-tight mb-3">
                {food.name}
              </h3>
              
              {/* Product Price */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-6 bg-brand-accent/40" />
                <p className="text-brand-accent font-bold tracking-widest text-sm uppercase">
                  {food.price}
                </p>
              </div>
              
              {/* Product Description */}
              <p className="text-brand-dark/70 text-base leading-relaxed font-medium flex-grow mb-6">
                {food.description}
              </p>

              {/* Product CTA */}
              <div className="pt-2">
                <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#4a0907] transition-all group-hover:text-brand-accent">
                  Order Now <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
 
        {/* Mobile View Shop Link */}
        <div className="mt-12 sm:hidden flex justify-center w-full">
          <Link 
            href="/#menu" 
            className="w-full text-center border border-brand-dark/20 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-dark rounded-md bg-[#f4eadc] shadow-md animate-pulse"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;
