"use client";

import React, { useRef, useEffect } from "react";
import { siteContent } from "@/data/siteContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MacroTexture = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { macroTextures } = siteContent;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.macro-panel');
      if (panels.length < 2) return;

      const firstPanel = panels[0];
      const secondPanel = panels[1];

      const firstImg = firstPanel.querySelector('.macro-img');
      const firstContent = firstPanel.querySelector('.macro-content');
      
      const secondImg = secondPanel.querySelector('.macro-img');
      const secondContent = secondPanel.querySelector('.macro-content');

      // Create main cinematic pinned timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: true,
          anticipatePin: 1,
        }
      });

      // Initial state
      gsap.set(secondPanel, { opacity: 0 });
      gsap.set(firstImg, { scale: 1.05 });
      gsap.set(secondImg, { scale: 1.15 });

      // Build transition sequence
      tl.to(firstContent, {
        y: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      }, 0)
      .to(firstImg, {
        scale: 1.12,
        opacity: 0.2,
        duration: 1,
        ease: "power2.inOut"
      }, 0)
      .to(secondPanel, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      }, 0.2)
      .to(secondImg, {
        scale: 1.05,
        duration: 1.2,
        ease: "power2.inOut"
      }, 0.2)
      .fromTo(secondContent, {
        y: 60,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut"
      }, 0.4);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      data-nav-theme="dark"
      className="relative w-full h-screen overflow-hidden bg-brand-dark z-30"
    >
      {macroTextures.map((macro, idx) => (
        <div 
          key={`macro-${idx}`} 
          className={`macro-panel absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center bg-brand-dark ${
            idx === 0 ? "z-10" : "z-20"
          }`}
        >
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={macro.image} 
              alt={macro.label} 
              className="macro-img w-full h-full object-cover object-center brightness-[0.35] contrast-125"
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
          </div>
          
          <div className="relative z-10 macro-content text-center px-6 flex flex-col items-center gap-8 max-w-6xl">
            <div className="flex flex-col items-center gap-4">
              <div className="h-[1px] w-12 bg-brand-accent/60" />
              <span className="ui-label text-brand-accent tracking-[0.6em] uppercase text-[10px] font-bold">
                {idx === 0 ? "The Beginning" : "The Process"}
              </span>
            </div>
            
            <h2 className="text-white font-editorial text-5xl md:text-7xl lg:text-[100px] tracking-tighter leading-[0.9] max-w-5xl drop-shadow-2xl">
              {idx === 0 ? (
                <>Dari kacang <br /> <span className="italic text-brand-cream/90">pilihan</span></>
              ) : (
                <>Dikukus perlahan <br /> <span className="italic text-brand-cream/90">hingga lembut</span></>
              )}
            </h2>
            
            <div className="mt-6">
              <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(199,146,62,1)]" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MacroTexture;
