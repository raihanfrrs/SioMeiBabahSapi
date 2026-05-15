"use client";

import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/data/siteContent";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CinematicProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { processSteps } = siteContent;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Dashed line animation
      gsap.fromTo(
        ".process-line",
        { height: 0 },
        {
          height: "100%",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );

      // Card reveals
      processSteps.forEach((_, i) => {
        gsap.fromTo(
          `.process-step-${i}`,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: `.process-step-${i}`,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [processSteps]);

  return (
    <section id="proses" ref={containerRef} className="relative py-32 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto text-center mb-64">
          <span className="ui-label mb-8 block">Our Craftsmanship</span>
          <h2 className="editorial-xl text-brand-dark">
            Seni Membuat <br /> <span className="italic text-brand-peanut">Siomay Sempurna.</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Connecting Line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-brand-peanut/20 z-0 hidden md:block">
            <div className="process-line w-full bg-brand-peanut origin-top" />
          </div>

          <div className="space-y-64 md:space-y-96">
            {processSteps.map((step, i) => (
              <div 
                key={step.number} 
                className={`process-step-${i} relative flex flex-col md:flex-row items-center gap-12 md:gap-24 z-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Media Container */}
                <div className="w-full md:w-3/5 aspect-video md:aspect-[16/10] rounded-[60px] overflow-hidden shadow-2xl relative group">
                  <video
                    src={step.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors duration-500" />
                  <div className="absolute top-10 left-10 bg-brand-cream/90 backdrop-blur-md px-8 py-3 rounded-full text-brand-peanut font-bold text-sm tracking-widest shadow-2xl">
                    Step {step.number}
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-2/5 text-left space-y-10 px-6">
                  <h3 className="text-5xl md:text-7xl font-editorial text-brand-dark leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-2xl text-brand-dark/50 font-light leading-relaxed">
                    {step.text}
                  </p>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    className="h-[1px] bg-brand-peanut/40" 
                  />
                </div>
                
                {/* Visual anchor point for the line */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-peanut rounded-full z-20 hidden md:block shadow-[0_0_20px_rgba(199,146,62,0.5)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicProcess;
