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
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
            }
          }
        );

        gsap.fromTo(content,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 70%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="process" className="relative w-full bg-brand-cream section-py-lg z-20">
      <div className="container-custom flex flex-col gap-32 md:gap-48">
        {processSteps.map((step, idx) => (
          <div 
            key={step.number} 
            className={`process-step grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center min-h-[70vh] md:min-h-[85vh]`}
          >
            {/* Image Section - 5 Columns */}
            <div className={`order-1 ${idx % 2 === 0 ? 'md:col-span-5 md:col-start-1' : 'md:col-span-5 md:col-start-8'} w-full`}>
              <div className="process-img-container relative aspect-[4/5] w-full overflow-hidden reveal-img-container shadow-2xl">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="absolute w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Content Section - 4 Columns */}
            <div className={`order-2 ${idx % 2 === 0 ? 'md:col-span-4 md:col-start-8' : 'md:col-span-4 md:col-start-2'} flex flex-col items-start process-content`}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-brand-accent font-bold tracking-[0.3em] text-xs uppercase">{step.number}</span>
                <div className="h-[1px] w-12 bg-brand-accent/30" />
              </div>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-editorial text-brand-dark mb-8 leading-[1.1] tracking-tight">
                {step.title}
              </h3>
              
              <p className="text-brand-dark/70 text-lg leading-relaxed mb-12">
                {step.text}
              </p>
              
              <div className="flex items-center gap-4 text-brand-dark">
                <div className="h-[1px] w-8 bg-brand-dark/20" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
                  {step.annotation}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessStory;
