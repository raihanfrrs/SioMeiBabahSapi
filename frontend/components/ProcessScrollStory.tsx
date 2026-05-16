"use client";

import React, { useRef, useEffect } from "react";
import { siteContent } from "@/data/siteContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProcessScrollStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { processSteps, macroTextures } = siteContent;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Animate annotations
      const annotations = gsap.utils.toArray<HTMLElement>('.annotation-box');
      annotations.forEach((box) => {
        gsap.fromTo(box, 
          { opacity: 0, x: -30 },
          { 
            opacity: 1, 
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: box,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });
      
      // Parallax images
      const images = gsap.utils.toArray<HTMLElement>('.parallax-img');
      images.forEach((img) => {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="process" className="relative w-full bg-brand-cream z-20">
      {/* Macro Textures Intro */}
      {macroTextures.map((macro, idx) => (
        <div key={`macro-${idx}`} className="relative h-[80vh] md:h-[100dvh] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img 
              src={macro.image} 
              alt={macro.label} 
              className="parallax-img w-full h-[120%] object-cover object-center -top-[10%]"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 annotation-box text-center">
            <p className="text-white font-editorial text-2xl md:text-5xl tracking-wide">{macro.label}</p>
          </div>
        </div>
      ))}

      {/* The Process Journey */}
      <div className="py-24 md:py-48 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col gap-32 md:gap-64">
        {processSteps.map((step, idx) => (
          <div key={step.number} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
            
            <div className="w-full md:w-1/2 relative aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src={step.image} 
                alt={step.title} 
                className="parallax-img absolute w-full h-[120%] -top-[10%] object-cover"
              />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <span className="text-brand-accent font-semibold tracking-[0.2em] mb-4 text-sm">{step.number}</span>
              <h3 className="text-4xl md:text-6xl font-editorial text-brand-dark mb-6 leading-tight">{step.title}</h3>
              <p className="text-brand-dark/70 text-lg leading-relaxed mb-12 max-w-md">
                {step.text}
              </p>
              
              {/* Savor Style Annotation Line */}
              <div className="annotation-box flex items-center gap-4 text-brand-dark">
                <div className="h-[1px] w-12 bg-brand-dark/30" />
                <span className="text-xs font-bold uppercase tracking-widest">{step.annotation}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessScrollStory;
