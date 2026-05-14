"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const FoodShowcase = () => {
  const { foods } = siteContent;

  return (
    <section className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-editorial mb-6">Menu Andalan Kami</h2>
          <p className="text-xl text-brand-dark/60 max-w-2xl mx-auto">
            Pilihan siomay dan pelengkap favorit untuk berbagai selera.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {foods.map((food) => (
            <motion.div
              key={food.id}
              variants={fadeInUp}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] mb-8 shadow-[0_20px_50px_rgba(42,33,28,0.1)] group-hover:shadow-[0_40px_80px_rgba(199,146,62,0.2)] transition-all duration-500">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="glass-card text-brand-dark text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Lihat Detail
                  </span>
                </div>
              </div>
              <h3 className="text-4xl font-editorial mb-2 text-brand-dark group-hover:text-brand-peanut transition-colors duration-300">
                {food.name}
              </h3>
              <p className="text-brand-peanut font-bold uppercase tracking-widest text-[10px] mb-4">
                {food.tagline}
              </p>
              <p className="text-brand-dark/60 font-light leading-relaxed">
                {food.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FoodShowcase;
