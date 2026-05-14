"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { fadeInUp, textReveal } from "@/lib/animations";

const SteamEffect = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="steam-particle"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${60 + Math.random() * 20}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-screen w-full flex items-center bg-brand-cream overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-bamboo z-0" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 pt-20">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1 rounded-full bg-brand-peanut/10 text-brand-peanut text-xs font-bold uppercase tracking-widest mb-6"
          >
            Fresh dibuat setiap hari
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              variants={textReveal}
              initial="initial"
              animate="animate"
              className="text-6xl md:text-8xl font-editorial text-brand-dark leading-[0.9]"
            >
              Siomay Sapi <br />
              <span className="text-brand-peanut">Premium.</span>
            </motion.h1>
          </div>
          
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            className="text-xl text-brand-dark/80 max-w-lg mb-10 font-light leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="bg-brand-brown text-brand-cream px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-peanut transition-all duration-500 shadow-2xl">
              {hero.cta}
            </button>
          </motion.div>
        </div>

        {/* Right: Cinematic Visual */}
        <div className="w-full md:w-1/2 relative h-[500px] md:h-[700px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(42,33,28,0.3)]"
          >
            <img
              src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=1200"
              alt="Siomay Sapi Premium Close-up"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
            
            {/* Steam Effect Component */}
            <SteamEffect />
          </motion.div>
          
          {/* Floating Elements (Sauce/Particles) */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-brand-peanut/20 rounded-full blur-3xl"
          />
        </div>
      </div>

      {/* Decorative Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-cream to-transparent z-10" />
    </section>
  );
};

export default Hero;
