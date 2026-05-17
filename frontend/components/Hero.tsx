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
    <section 
      ref={containerRef} 
      data-nav-theme="dark"
      className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-end"
    >
      
      {/* --- BACKGROUND VISUALS --- */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={hero.imagePlaceholder} media="(min-width: 1024px)" />
          <img 
            src={hero.imagePlaceholder} 
            alt="Siomay Babah Sapi" 
            className="hero-bg w-full h-full object-cover object-[65%_center] lg:object-center brightness-[0.75] scale-105"
            loading="eager"
          />
        </picture>
        
        {/* Refined Gradient Overlays */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* --- CONTENT AREAS --- */}
      
      {/* Mobile & Tablet Content */}
      <div className="relative z-20 px-8 pb-28 md:px-16 md:pb-40 lg:hidden">
        <div className="flex flex-col items-start gap-8 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-[62px] leading-[0.85] tracking-[-0.03em] font-editorial text-white md:text-[100px]">
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
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/#menu"
              className="inline-flex items-center justify-center rounded-md bg-[#f4eadc] px-8 py-4 text-sm font-medium tracking-[0.08em] text-[#2a140d] shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Pesan Sekarang
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Desktop Content */}
      <div className="relative z-20 hidden lg:flex container-custom h-full items-end pb-64">
        <div className="grid grid-cols-12 w-full gap-16 items-end">
          {/* Left: Heading & Subheadline grouped */}
          <div className="col-span-8 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <h1 className="text-[140px] font-editorial text-white leading-[0.82] tracking-tighter drop-shadow-2xl">
                Siomay Sapi <br />
                <span className="italic text-brand-cream/90">Resep Warisan</span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-lg leading-relaxed font-medium">
                {hero.subheadline}
              </p>
            </motion.div>
          </div>

          {/* Right: CTA aligned with text flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-4 flex justify-end pb-4"
          >
            <Link 
              href="/#menu"
              className="inline-flex items-center justify-center rounded-md bg-[#f4eadc] px-10 py-5 text-base font-semibold tracking-[0.08em] text-[#2a140d] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {hero.cta}
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
