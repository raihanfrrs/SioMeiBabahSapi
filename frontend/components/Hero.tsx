"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const Hero = () => {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden mb-20 md:mb-80">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={hero.imagePlaceholder} 
          alt="Hero Background" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 items-center md:items-end gap-10 md:gap-12 pb-24 md:pb-48">
        {/* Left Side - Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-editorial text-brand-cream leading-[0.9] tracking-tighter drop-shadow-2xl">
            {hero.headline}
          </h1>
        </motion.div>

        {/* Right Side - Subtext & CTA */}
        <div className="md:col-span-5 flex flex-col items-start md:items-end md:text-right gap-8 md:gap-12 pb-6 md:pb-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xs sm:text-sm text-brand-cream/80 max-w-[280px] leading-relaxed font-medium"
          >
            {hero.subheadline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto bg-brand-cream text-brand-dark px-12 md:px-16 py-4 rounded-sm text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-brand-dark hover:text-brand-cream transition-all duration-500 shadow-2xl">
              {hero.cta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
