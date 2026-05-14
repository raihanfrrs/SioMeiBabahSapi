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
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-8">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-500" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="bg-brand-yellow text-brand-dark text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Lihat Detail
                  </span>
                </div>
              </div>
              <h3 className="text-3xl font-editorial mb-2">{food.name}</h3>
              <p className="text-brand-yellow font-bold uppercase tracking-widest text-xs mb-4">
                {food.tagline}
              </p>
              <p className="text-brand-dark/70 font-light">
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
