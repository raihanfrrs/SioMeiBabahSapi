"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EditorialStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".editorial-text", 
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        }
      );
      
      gsap.fromTo(".editorial-image",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.5, ease: "power2.out",
          scrollTrigger: {
            trigger: ".editorial-image",
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-brand-cream py-32 md:py-64 px-6 md:px-12 flex flex-col items-center justify-center min-h-[100dvh]">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-32">
        
        {/* Left: Large Editorial Heading */}
        <div className="w-full md:w-5/12 flex justify-start">
          <h2 className="editorial-text text-[64px] md:text-[100px] leading-[0.85] font-editorial text-brand-dark tracking-tighter">
            Terinspirasi <br /> dari <br />
            <span className="italic text-brand-accent">resep warisan</span>
          </h2>
        </div>

        {/* Middle: Small Minimal Image */}
        <div className="w-2/3 md:w-3/12 flex justify-center">
          <div className="editorial-image relative aspect-[3/4] w-full max-w-[240px] overflow-hidden">
            <img 
              src="/images/process-step-1.png" 
              alt="Artisan making siomay" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Right: Small text block */}
        <div className="w-full md:w-4/12 flex flex-col items-start md:items-end text-left md:text-right">
          <p className="editorial-text text-brand-dark/80 font-medium leading-relaxed max-w-[240px] mb-8">
            Dibuat dari bahan pilihan dan racikan autentik untuk menjaga rasa yang hangat, gurih, dan berkesan.
          </p>
          <button className="editorial-text text-xs font-bold uppercase tracking-[0.2em] border-b border-brand-dark pb-1 text-brand-dark hover:text-brand-accent hover:border-brand-accent transition-colors">
            Lihat Proses
          </button>
        </div>

      </div>
    </section>
  );
};

export default EditorialStory;
