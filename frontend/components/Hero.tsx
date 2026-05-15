"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const Hero = () => {
  const { hero } = siteContent;

  return (
    <section className="relative h-[110vh] w-full bg-brand-dark overflow-hidden flex flex-col justify-between py-32 px-6 md:px-24">
      {/* 1. Cinematic Background (Video + Image Fallback) */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          <img
            src="/images/hero-siomay.png"
            alt="Hero Siomay"
            className="w-full h-full object-cover opacity-30"
          />
          <video
            src={hero.videoPlaceholder}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark/80" />
      </div>

      {/* 2. Top Header (Subtle Brand Label) */}
      <div className="relative z-10 flex justify-between items-start w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="ui-label text-brand-cream/40">Established 2024</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-right"
        >
          <span className="ui-label text-brand-cream/40 tracking-[0.6em]">Sio Mei Babah Sapi</span>
        </motion.div>
      </div>

      {/* 3. Middle - White Space (Editorial Pacing) */}
      <div className="flex-grow" />

      {/* 4. Bottom Section - Asymmetrical Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="md:w-2/3">
          <h1 className="editorial-xl text-brand-cream leading-[0.85]">
            {hero.headline.split(", ").map((part, i) => (
              <React.Fragment key={i}>
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.5 + i * 0.2,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="block"
                >
                  {part}{i === 0 ? "," : ""}
                </motion.span>
              </React.Fragment>
            ))}
          </h1>
        </div>

        <div className="md:w-1/3 flex flex-col items-start md:items-end gap-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg text-brand-cream/50 max-w-xs md:text-right font-light leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <button className="group flex items-center gap-6 text-brand-cream hover:text-brand-peanut transition-all duration-500">
              <span className="h-[1px] w-12 bg-brand-cream/30 group-hover:w-20 group-hover:bg-brand-peanut transition-all duration-500" />
              <span className="ui-label tracking-[0.3em]">{hero.cta} — MENU</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* 5. Curved Transition Mask (The Savor Secret) */}
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-brand-cream curve-mask z-20" />
    </section>
  );
};

export default Hero;
