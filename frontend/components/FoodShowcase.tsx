"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const FoodShowcase = () => {
  const { foods } = siteContent;

  return (
    <section id="menu" className="py-64 bg-brand-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-48"
        >
          <span className="ui-label mb-8 block">Daftar Menu</span>
          <h2 className="editorial-xl mb-10">Menu Andalan Kami</h2>
          <p className="text-2xl text-brand-dark/50 max-w-2xl mx-auto font-light leading-relaxed">
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
                <div className="absolute top-6 right-6 z-10">
                  <span className="bg-brand-cream/90 backdrop-blur-md px-6 py-2 rounded-full text-brand-peanut font-bold text-sm shadow-xl">
                    {food.price}
                  </span>
                </div>
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-brand-cream text-brand-dark text-[10px] font-bold uppercase tracking-widest px-8 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                    Pesan via WhatsApp
                  </span>
                </div>
              </div>
              <h3 className="text-4xl font-editorial mb-3 text-brand-dark group-hover:text-brand-peanut transition-colors duration-300">
                {food.name}
              </h3>
              <p className="text-brand-dark/60 font-light leading-relaxed text-lg">
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
