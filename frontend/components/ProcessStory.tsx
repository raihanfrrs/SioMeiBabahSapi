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
      // Step content reveals
      const steps = gsap.utils.toArray<HTMLElement>('.process-step');
      steps.forEach((step) => {
        const img = step.querySelector('.process-img-container');
        const content = step.querySelector('.process-content');
        const timelineItem = step.querySelector('.process-timeline-item');
        
        gsap.fromTo(img, 
          { opacity: 0, scale: 1.05 },
          { 
            opacity: 1, 
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
            }
          }
        );

        gsap.fromTo(content,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
            }
          }
        );

        gsap.fromTo(timelineItem,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
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
      className="relative bg-[#f4eadc] overflow-hidden py-28 md:py-36 lg:py-44 pb-32 md:pb-40 lg:pb-48 z-20"
    >
      
      {/* Background Section Label */}
      <div className="absolute top-20 left-10 md:left-20 hidden lg:block overflow-hidden">
        <span className="ui-label opacity-10 text-[80px] leading-none select-none text-brand-dark">Method</span>
      </div>

      <div className="container-custom relative">
        <div className="flex flex-col gap-12 md:gap-0">
          {processSteps.map((step, idx) => {
            const isTextLeft = (idx + 1) % 2 === 0;

            const imageBlock = (
              <div className="w-full max-w-[460px] mx-auto">
                <div className="process-img-container relative aspect-[4/5] w-full overflow-hidden shadow-xl rounded-sm">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="absolute w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-dark/5" />
                </div>
                <p className="mt-4 ui-label text-[9px] opacity-40 text-brand-dark tracking-[0.2em] uppercase font-bold text-center md:text-left">
                  {step.annotation.split('─')[1]?.trim() || step.annotation}
                </p>
              </div>
            );

            const timelineBlock = (
              <div className="hidden md:flex h-full flex-col items-center justify-center relative py-6">
                <div className="absolute top-0 bottom-0 w-[1px] bg-[#2a140d]/15" />
                <div className="process-timeline-item w-12 h-12 rounded-full border border-[#2a140d]/20 bg-[#f4eadc] flex items-center justify-center z-10 shadow-sm">
                  <span className="text-[12px] font-bold text-brand-dark tracking-widest">{step.number}</span>
                </div>
              </div>
            );

            const textBlock = (
              <div className="w-full max-w-[420px] mx-auto">
                <div className="process-content flex flex-col justify-center">
                  <div className="flex items-center gap-6 mb-4 md:hidden">
                    <span className="text-brand-accent font-bold tracking-[0.5em] text-sm uppercase">{step.number}</span>
                    <div className="h-[1px] w-12 bg-brand-accent/40" />
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl lg:text-[54px] font-editorial text-brand-dark leading-[1.0] tracking-tighter">
                    {step.title.split(' ').map((word, i) => (
                      <span key={i} className={i % 3 === 2 ? "italic text-brand-accent font-normal" : ""}>
                        {word}{" "}
                      </span>
                    ))}
                  </h3>
                  
                  <div className="mt-6 space-y-6">
                    <p className="text-brand-dark/70 text-base md:text-lg leading-relaxed font-medium">
                      {step.text}
                    </p>
                    <div className="flex flex-col gap-4 pt-4 border-t border-brand-dark/5">
                      <div className="flex items-center justify-between">
                        <span className="ui-label text-[9px] text-brand-accent uppercase font-bold">Traditional Method</span>
                        <span className="ui-label text-[9px] text-brand-dark/40 italic font-bold">Handcrafted</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );

            return (
              <div 
                key={step.number} 
                className={`process-step flex w-full max-w-[1050px] mx-auto items-center justify-center min-h-[72vh] gap-10 lg:gap-14 py-12 md:py-20 md:grid md:grid-cols-[minmax(0,420px)_72px_minmax(0,460px)] ${
                  isTextLeft ? "flex-col-reverse" : "flex-col"
                }`}
              >
                {isTextLeft ? (
                  <>
                    {textBlock}
                    {timelineBlock}
                    {imageBlock}
                  </>
                ) : (
                  <>
                    {imageBlock}
                    {timelineBlock}
                    {textBlock}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessStory;
