"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CraftSection = () => {
  return (
    <section className="bg-brand-cream pt-24 md:pt-24 pb-32 md:pb-48 border-t border-brand-dark/5 flex justify-center">
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 md:gap-10"
        >
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark/30">Keahlian Kami</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-editorial font-medium leading-[1.05] text-brand-dark">
            Dibuat Tangan <br /> dengan Presisi.
          </h2>
          <p className="text-sm md:text-base text-brand-dark/50 leading-relaxed max-w-sm font-medium">
            Kami percaya bahwa siomay yang sempurna dimulai dari pemilihan daging sapi terbaik dan teknik melipat kulit yang dipelajari selama bertahun-tahun. Setiap butir siomay adalah karya seni rasa.
          </p>
          <Link 
            href="/#process" 
            className="flex items-center gap-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/40 hover:text-brand-dark transition-all group"
          >
            Pelajari Proses Kami
            <span className="w-12 h-[1px] bg-brand-dark/20 group-hover:w-16 group-hover:bg-brand-dark transition-all" />
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square md:aspect-[4/5] rounded-[40px] md:rounded-none overflow-hidden"
        >
          <img
            src="/images/siomay-craft.png"
            alt="Proses Pembuatan Siomay"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CraftSection;
