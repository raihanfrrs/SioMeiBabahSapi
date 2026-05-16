"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const { hero } = siteContent;
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Pin the hero section so the next section slides over it
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });
      
      // Subtle parallax on the background image
      gsap.to(".hero-bg", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-end">
      
      {/* --- BACKGROUND VISUALS --- */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={hero.imagePlaceholder} media="(min-width: 1024px)" />
          <img 
            src={hero.imagePlaceholder} 
            alt="Siomay Babah Sapi" 
            className="hero-bg w-full h-full object-cover object-[65%_center] lg:object-center brightness-[0.85] scale-105"
            loading="eager"
          />
        </picture>
        
        {/* Refined Gradient Overlays */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black/50 via-black/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* --- CONTENT AREAS --- */}
      
      {/* Mobile & Tablet Content */}
      <div className="relative z-20 px-6 pb-16 md:px-12 md:pb-24 lg:hidden">
        <div className="flex flex-col items-start gap-8 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-[58px] leading-[0.88] tracking-[-0.03em] font-editorial text-white md:text-[88px]">
              Siomay Sapi <br /> 
              <span className="italic opacity-90">Resep Warisan</span>
            </h1>
            
            <p className="text-base md:text-lg text-white/80 max-w-[280px] md:max-w-md font-medium leading-relaxed">
              Gurih, lembut, dan dibuat dengan daging sapi pilihan serta bumbu kacang autentik.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link
              href="/#menu"
              className="inline-flex items-center justify-center rounded-sm bg-brand-cream px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-brand-dark transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Pesan Sekarang
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Desktop Content */}
      <div className="relative z-20 hidden lg:flex container-custom h-full items-end pb-32">
        <div className="grid grid-cols-12 w-full gap-12 items-end">
          {/* Left: Heading & Subheadline grouped */}
          <div className="col-span-8 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-[140px] font-editorial text-white leading-[0.85] tracking-tighter drop-shadow-2xl">
                Siomay Sapi <br />
                <span className="italic text-brand-cream/90">Resep Warisan</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg text-white/80 max-w-md leading-relaxed font-medium"
            >
              {hero.subheadline}
            </motion.p>
          </div>

          {/* Right: CTA aligned with text flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="col-span-4 flex justify-end pb-4"
          >
            <Link 
              href="/#menu"
              className="group relative inline-flex items-center justify-center bg-brand-cream text-brand-dark px-16 py-6 rounded-sm text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-500 hover:bg-brand-dark hover:text-brand-cream shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">{hero.cta}</span>
              <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
