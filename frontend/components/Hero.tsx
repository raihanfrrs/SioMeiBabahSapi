"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const Hero = () => {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-end lg:justify-center lg:items-center lg:mb-80">
      
      {/* --- BACKGROUND VISUALS --- */}
      {/* Mobile/Tablet Savor Background */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img 
          src={hero.imagePlaceholder} 
          alt="Siomay Babah Sapi" 
          className="w-full h-full object-cover object-[58%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/45 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/65 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Desktop Original Background */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img 
          src={hero.imagePlaceholder} 
          alt="Hero Background" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* --- CONTENT AREAS --- */}
      
      {/* Mobile & Tablet Content (Savor Style) */}
      <div className="absolute left-0 right-0 bottom-12 px-5 z-20 flex flex-col items-start md:bottom-16 md:px-10 lg:hidden">
        <div className="flex flex-col items-start gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[54px] leading-[0.86] tracking-[-0.04em] font-editorial font-normal normal-case text-white md:text-[78px] md:leading-[0.86]">
              Siomay sapi <br /> 
              resep warisan
            </h1>
          </motion.div>

          <div className="flex flex-col items-start gap-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-base md:text-lg text-white/90 max-w-[280px] md:max-w-md font-medium"
            >
              Gurih, lembut, dan dibuat dengan daging sapi pilihan serta bumbu kacang autentik.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link
                href="/#menu"
                className="inline-flex items-center justify-center rounded-md bg-[#f3eadc] px-6 py-4 text-sm font-medium tracking-wide text-[#32160f] transition-transform active:scale-95 shadow-xl"
              >
                Pesan Sekarang
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Content (Original Style) */}
      <div className="relative z-10 hidden lg:grid max-w-7xl w-full px-20 grid-cols-12 items-end gap-12 pb-48">
        {/* Left Side - Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-7"
        >
          <h1 className="text-[120px] font-editorial text-brand-cream leading-[0.9] tracking-tighter drop-shadow-2xl">
            {hero.headline}
          </h1>
        </motion.div>

        {/* Right Side - Subtext & CTA */}
        <div className="col-span-5 flex flex-col items-end text-right gap-12 pb-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm text-brand-cream/80 max-w-[280px] leading-relaxed font-medium"
          >
            {hero.subheadline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button className="bg-brand-cream text-brand-dark px-16 py-4 rounded-sm text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-brand-dark hover:text-brand-cream transition-all duration-500 shadow-2xl">
              {hero.cta}
            </button>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
