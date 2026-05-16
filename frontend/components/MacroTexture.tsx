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
        const text = panel.querySelector('.macro-text');
        
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
          { scale: 1.1, opacity: 0.8 },
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

        // Text synchronization
        gsap.fromTo(text,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 40%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full z-30">
      {macroTextures.map((macro, idx) => (
        <div key={`macro-${idx}`} className="macro-panel relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-dark">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={macro.image} 
              alt={macro.label} 
              className="macro-img w-full h-full object-cover object-center"
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 macro-text text-center px-6">
            <h2 className="text-white font-editorial text-4xl md:text-7xl lg:text-8xl tracking-tight leading-tight">
              {macro.label.split('─').map((part, i) => (
                <span key={i} className={i === 1 ? "italic opacity-80 block md:inline" : ""}>
                  {part} {i === 0 && <br className="md:hidden" />}
                </span>
              ))}
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MacroTexture;
