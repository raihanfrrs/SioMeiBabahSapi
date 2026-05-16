"use client";

import React, { useRef, useEffect } from "react";
import { siteContent } from "@/data/siteContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProcessStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { processSteps } = siteContent;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Timeline Line Animation
      gsap.fromTo(".process-timeline-line", 
        { scaleY: 0 },
        { 
          scaleY: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: ".process-steps-container",
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      );

      // Reveal images and text
      const steps = gsap.utils.toArray<HTMLElement>('.process-step');
      steps.forEach((step) => {
        const img = step.querySelector('.process-img-container');
        const content = step.querySelector('.process-content');
        
        gsap.fromTo(img, 
          { clipPath: "inset(100% 0% 0% 0%)", scale: 1.1 },
          { 
            clipPath: "inset(0% 0% 0% 0%)", 
            scale: 1,
            duration: 1.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
            }
          }
        );

        gsap.fromTo(content,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            delay: 0.3,
            ease: "expo.out",
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="process" className="relative w-full bg-brand-cream section-py-lg z-20">
      
      {/* Background Section Label */}
      <div className="absolute top-20 left-10 md:left-20 hidden lg:block overflow-hidden">
        <span className="ui-label opacity-20 text-[80px] leading-none select-none">Method</span>
      </div>

      <div className="container-custom relative process-steps-container">
        
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-brand-dark/5 hidden md:block origin-top process-timeline-line" />

        <div className="flex flex-col gap-40 md:gap-64">
          {processSteps.map((step, idx) => (
            <div 
              key={step.number} 
              className="process-step grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center min-h-[70vh] md:min-h-[80vh] relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-10">
                <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(199,146,62,0.5)]" />
                <div className="h-12 w-[1px] bg-brand-accent/20" />
              </div>

              {/* Image Section - 4 Columns */}
              <div className={`order-1 ${idx % 2 === 0 ? 'md:col-span-4 md:col-start-1' : 'md:col-span-4 md:col-start-9'} w-full`}>
                <div className="process-img-container relative aspect-[3/4] w-full overflow-hidden shadow-2xl">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="absolute w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-dark/5" />
                </div>
                <p className="mt-6 ui-label text-[9px] opacity-40 text-brand-dark tracking-[0.3em]">
                  {step.annotation.split('─')[1]?.trim() || step.annotation}
                </p>
              </div>
              
              {/* Content Section - 4 Columns */}
              <div className={`order-2 ${idx % 2 === 0 ? 'md:col-span-4 md:col-start-8' : 'md:col-span-4 md:col-start-2'} flex flex-col items-start process-content`}>
                <div className="flex items-center gap-6 mb-10 group">
                  <span className="text-brand-accent font-bold tracking-[0.4em] text-xs uppercase">{step.number}</span>
                  <div className="h-[1px] w-16 bg-brand-accent/40 transition-all duration-700 group-hover:w-24" />
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-editorial text-brand-dark mb-10 leading-[0.85] tracking-tighter">
                  {step.title.split(' ').map((word, i) => (
                    <span key={i} className={i % 3 === 2 ? "italic text-brand-accent" : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </h3>
                
                <div className="max-w-sm space-y-8">
                  <p className="text-brand-dark/70 text-lg leading-relaxed">
                    {step.text}
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <div className="h-[1px] w-full bg-brand-dark/5" />
                    <div className="flex items-center justify-between">
                      <span className="ui-label text-[9px] text-brand-accent">Traditional Method</span>
                      <span className="ui-label text-[9px] text-brand-dark/40 italic">Handcrafted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessStory;
