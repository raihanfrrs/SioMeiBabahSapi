"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { fadeInUp, textReveal } from "@/lib/animations";

const Hero = () => {
  const { hero } = siteContent;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src={hero.videoPlaceholder}
          alt="Siomay Sapi Premium"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="overflow-hidden mb-4">
          <motion.h1
            variants={textReveal}
            initial="initial"
            animate="animate"
            className="text-6xl md:text-9xl font-editorial text-brand-cream"
          >
            {hero.title}
          </motion.h1>
        </div>
        
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-brand-cream/90 max-w-2xl mx-auto mb-12 font-light"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
        >
          <button className="bg-brand-yellow text-brand-dark px-10 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-brand-cream hover:scale-105 transition-all duration-300 shadow-xl">
            {hero.cta}
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-brand-cream/0 via-brand-cream/50 to-brand-cream/0" />
      </motion.div>
    </section>
  );
};

export default Hero;
