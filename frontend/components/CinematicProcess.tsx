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
    <section id="proses" ref={containerRef} className="relative py-32 bg-brand-cream overflow-hidden flex justify-center">
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-6xl mx-auto text-center mb-64">
          <span className="ui-label mb-8 block">Our Craftsmanship</span>
          <h2 className="font-editorial text-6xl md:text-8xl text-brand-dark leading-[0.95] tracking-tight">
            Seni Membuat <br /> <span className="italic text-brand-peanut">Siomay Sempurna.</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Winding Connecting Line (SVG) */}
          <div className="absolute left-0 top-0 w-full h-full z-0 hidden md:block pointer-events-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 1200"
              fill="none"
              preserveAspectRatio="none"
              className="opacity-30"
            >
              <motion.path
                d="M 350 80 
                   C 350 250, 50 250, 50 400 
                   C 50 550, 350 550, 350 700 
                   C 350 850, 50 850, 50 1000"
                stroke="#C7923E"
                strokeWidth="1.5"
                strokeDasharray="8 12"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div>
            {processSteps.map((step, i) => (
              <div 
                key={step.number} 
                className={`process-step-${i} pb-20 md:pb-[100px] relative flex flex-col md:flex-row items-center gap-12 md:gap-24 z-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Media Container */}
                <div className="w-full md:w-3/5 aspect-video md:aspect-[16/10] rounded-[60px] overflow-hidden shadow-2xl relative group z-20">
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
