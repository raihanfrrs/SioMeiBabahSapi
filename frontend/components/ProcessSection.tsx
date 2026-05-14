"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const ProcessSection = () => {
  const { processSteps } = siteContent;

  return (
    <section className="relative py-32 bg-brand-cream overflow-hidden">
      {/* Bamboo Texture Overlay */}
      <div className="absolute inset-0 bg-bamboo opacity-[0.03] z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-24">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full md:w-1/2"
          >
            <span className="text-brand-peanut font-bold uppercase tracking-widest text-[10px] mb-6 block">Our Craft</span>
            <h2 className="text-5xl md:text-7xl font-editorial text-brand-dark mb-8 leading-tight">
              Dari resep sederhana menjadi rasa yang selalu dirindukan.
            </h2>
            <p className="text-xl text-brand-dark/70 mb-12 font-light leading-relaxed">
              Sio Mei Babah Sapi hadir untuk membawa siomay ke level yang lebih premium, tetap familiar, tapi punya karakter rasa yang kuat dan berbeda.
            </p>
            <button className="border border-brand-brown text-brand-brown px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-brown hover:text-brand-cream transition-all duration-500 shadow-xl">
              Kenali Proses Kami
            </button>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="w-full md:w-1/2 space-y-10"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="group flex items-start gap-10 p-8 rounded-[32px] bg-white shadow-[0_10px_30px_rgba(42,33,28,0.05)] hover:shadow-[0_20px_50px_rgba(199,146,62,0.1)] transition-all duration-500"
              >
                <span className="text-5xl font-editorial text-brand-peanut/30 group-hover:text-brand-peanut font-bold transition-colors duration-500">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-brand-dark/60 font-light leading-relaxed text-sm">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
