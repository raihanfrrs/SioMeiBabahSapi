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
      
      panels.forEach((panel, i) => {
        const img = panel.querySelector('.macro-img');
        const content = panel.querySelector('.macro-content');
        
        // Pinned effect for each panel
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: i === panels.length - 1 ? true : false,
          scrub: true,
        });

        // Smooth fade/scale for image
        gsap.fromTo(img, 
          { scale: 1.15, opacity: 0.6 },
          { 
            scale: 1, 
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          }
        );

        // Content reveal
        gsap.fromTo(content,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 35%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      data-nav-theme="dark"
      className="relative w-full z-30"
    >
      {macroTextures.map((macro, idx) => (
        <div key={`macro-${idx}`} className="macro-panel relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-dark">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={macro.image} 
              alt={macro.label} 
              className="macro-img w-full h-full object-cover object-center brightness-50 contrast-125"
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
          </div>
          
          <div className="relative z-10 macro-content text-center px-6 flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-6">
              <div className="h-[1px] w-12 bg-brand-accent/60" />
              <span className="ui-label text-brand-accent tracking-[0.6em] uppercase text-[10px] font-bold">
                {idx === 0 ? "The Beginning" : "The Process"}
              </span>
            </div>
            
            <h2 className="text-white font-editorial text-6xl md:text-8xl lg:text-[120px] tracking-tighter leading-[0.82] max-w-6xl drop-shadow-2xl">
              {idx === 0 ? (
                <>Dari kacang <br /> <span className="italic text-brand-cream/90">pilihan</span></>
              ) : (
                <>Dikukus perlahan <br /> <span className="italic text-brand-cream/90">hingga lembut</span></>
              )}
            </h2>
            
            <div className="mt-8">
              <div className="w-1 h-1 bg-brand-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(199,146,62,1)]" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MacroTexture;
