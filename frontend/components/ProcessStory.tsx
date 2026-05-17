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
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            delay: 0.2,
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
    <section 
      ref={containerRef} 
      id="process" 
      data-nav-theme="light"
      className="relative w-full bg-brand-cream z-20"
    >
      
      {/* Background Section Label */}
      <div className="absolute top-20 left-10 md:left-20 hidden lg:block overflow-hidden">
        <span className="ui-label opacity-20 text-[80px] leading-none select-none">Method</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative process-steps-container">
        
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-brand-dark/5 hidden md:block origin-top process-timeline-line" />

        <div className="flex flex-col">
          {processSteps.map((step, idx) => {
            const isTextLeft = (idx + 1) % 2 === 0; // Even steps (02, 04) text left

            return (
              <div 
                key={step.number} 
                className="process-step relative min-h-[100vh] w-full flex items-center justify-center py-20 md:py-32"
              >
                {/* Timeline Dot - Exact Viewport Midpoint */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-50">
                  <div className="w-4 h-4 rounded-full bg-brand-accent shadow-[0_0_20px_rgba(199,146,62,0.6)]" />
                </div>

                <div className={`w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-32 ${isTextLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Left/Right Container - The Heading Axis */}
                  <div className="w-full md:w-[45%] flex flex-col justify-center order-2 md:order-none relative">
                    <div className="process-content">
                      {/* Step Header */}
                      <div className="flex items-center gap-6 mb-6">
                        <span className="text-brand-accent font-bold tracking-[0.5em] text-sm uppercase">{step.number}</span>
                        <div className="h-[1px] w-12 bg-brand-accent/40" />
                      </div>
                      
                      {/* The Heading - The absolute anchor for centering */}
                      <h3 className="text-5xl md:text-6xl lg:text-[70px] font-editorial text-brand-dark leading-[0.8] tracking-tighter">
                        {step.title.split(' ').map((word, i) => (
                          <span key={i} className={i % 3 === 2 ? "italic text-brand-accent" : ""}>
                            {word}{" "}
                          </span>
                        ))}
                      </h3>
                      
                      {/* The Narrative - Positioned BELOW the heading, but we'll use a negative margin or specific container to keep the heading centered */}
                      <div className="md:absolute md:top-[calc(100%+3rem)] md:left-0 w-full max-w-sm space-y-6 hidden md:block">
                        <p className="text-brand-dark/70 text-lg leading-relaxed font-medium">
                          {step.text}
                        </p>
                        <div className="flex flex-col gap-4 pt-4 border-t border-brand-dark/5">
                          <div className="flex items-center justify-between">
                            <span className="ui-label text-[10px] text-brand-accent uppercase font-bold">Traditional Method</span>
                            <span className="ui-label text-[10px] text-brand-dark/40 italic font-bold">Handcrafted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right/Left Container - The Image Anchor */}
                  <div className="w-full md:w-[45%] flex flex-col items-center justify-center order-1 md:order-none">
                    <div className="relative w-full">
                      <div className="process-img-container relative aspect-[4/5] w-full overflow-hidden shadow-2xl rounded-sm">
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="absolute w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-brand-dark/5" />
                      </div>
                      <p className={`mt-8 ui-label text-[10px] opacity-40 text-brand-dark tracking-[0.2em] uppercase font-bold w-full ${isTextLeft ? 'text-left' : 'text-right'}`}>
                        {step.annotation.split('─')[1]?.trim() || step.annotation}
                      </p>
                    </div>
                  </div>

                </div>
                
                {/* Mobile Narrative */}
                <div className="w-full mt-10 md:hidden px-4">
                  <p className="text-brand-dark/70 text-base leading-relaxed font-medium">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessStory;
