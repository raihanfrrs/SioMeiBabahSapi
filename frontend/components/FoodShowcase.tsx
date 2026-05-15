"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const FoodShowcase = () => {
  const { foods } = siteContent;

  return (
    <section id="foods" className="pt-48 pb-32 bg-brand-cream border-t border-brand-dark/5 flex justify-center mb-20">
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex justify-between items-baseline mb-24 border-b border-brand-dark/5 pb-8">
          <h2 className="text-5xl md:text-6xl font-editorial font-medium text-brand-dark">
            The Savor Collection
          </h2>
          <Link 
            href="/#shop" 
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark/30 hover:text-brand-dark transition-colors border-b border-transparent hover:border-brand-dark"
          >
            View Shop
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {foods.map((food) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-10 group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-beige">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-editorial font-medium text-brand-dark">
                  {food.name}
                </h3>
                <p className="text-[11px] font-bold text-brand-dark/30 uppercase tracking-[0.2em]">
                  {food.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;
