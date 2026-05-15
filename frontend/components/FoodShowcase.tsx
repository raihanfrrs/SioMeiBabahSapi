"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const FoodShowcase = () => {
  const { foods } = siteContent;

  return (
    <section id="foods" className="py-24 md:pt-48 md:pb-32 bg-brand-cream border-t border-brand-dark/5 flex justify-center">
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex justify-between items-end mb-16 md:mb-24 border-b border-brand-dark/5 pb-6 md:pb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial font-medium text-brand-dark">
            The Savor Collection
          </h2>
          <Link 
            href="/#shop" 
            className="hidden sm:block text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark/30 hover:text-brand-dark transition-colors border-b border-transparent hover:border-brand-dark"
          >
            View Shop
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-12">
          {foods.map((food) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 md:gap-10 group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[30px] md:rounded-none overflow-hidden bg-brand-beige">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-3 px-2 md:px-0">
                <h3 className="text-2xl md:text-3xl font-editorial font-medium text-brand-dark">
                  {food.name}
                </h3>
                <p className="text-[10px] md:text-[11px] font-bold text-brand-dark/30 uppercase tracking-[0.2em]">
                  {food.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View Shop Link */}
        <div className="mt-16 sm:hidden flex justify-center">
          <Link 
            href="/#shop" 
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark/40 border border-brand-dark/10 px-10 py-4 rounded-full"
          >
            View Shop
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;
