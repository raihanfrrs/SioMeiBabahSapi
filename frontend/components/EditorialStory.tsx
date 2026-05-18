"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EditorialStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".editorial-reveal", 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.15, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
      
      gsap.fromTo(".editorial-img-reveal",
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".editorial-img-reveal",
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      data-nav-theme="light"
      className="w-full bg-[#f4eadc] border-y border-brand-dark/10 section-editorial-philosophy overflow-hidden flex justify-center"
    >
      <div className="section-inner px-6 md:px-10 lg:px-16 w-full flex flex-col justify-center">
        <div className="grid grid-cols-12 gap-10 md:gap-14 lg:gap-20 xl:gap-24 items-center w-full">
          
          {/* Left: Large Editorial Heading (col-span-12 lg:col-span-4) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col items-start editorial-reveal mb-8 lg:mb-0">
            <span className="text-brand-accent tracking-[0.35em] uppercase text-xs font-bold mb-4">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] leading-[0.95] font-editorial text-brand-dark tracking-tight">
              Terinspirasi <br /> dari <br />
              <span className="italic text-brand-accent font-normal">resep warisan</span>
            </h2>
          </div>

          {/* Middle: Elevated Artisan Portrait Image (col-span-12 md:col-span-6 lg:col-span-3) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex justify-center editorial-reveal w-full mb-8 md:mb-0">
            <div className="editorial-img-reveal relative aspect-[3/4] w-full max-w-[280px] lg:max-w-full overflow-hidden shadow-md rounded-sm border border-brand-dark/10 transition-transform duration-500 ease-out hover:scale-[1.02] cursor-pointer">
              <img 
                src="/images/editorial-artisan.png" 
                alt="Artisan making siomay" 
                className="w-full h-full object-cover brightness-[0.95]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-dark/5" />
            </div>
          </div>

          {/* Right: Small text block (col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-9) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-9 flex flex-col items-start justify-center editorial-reveal">
            <p className="text-brand-dark/80 text-base md:text-[17px] font-sans leading-relaxed max-w-[320px]">
              Setiap butir adalah janji kualitas, dibuat dari bahan pilihan dan racikan autentik untuk menjaga kehangatan rasa warisan leluhur.
            </p>
            <a
              href="/#process"
              className="group relative inline-flex items-center text-xs font-bold uppercase tracking-[0.25em] text-[#4a0907] transition-all py-3 px-1 mt-6"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#c48b58]">
                Lihat Proses
              </span>
              <span className="absolute bottom-0 left-0 h-[1.5px] bg-[#c48b58] w-full transform origin-left transition-transform duration-500 scale-x-100 group-hover:scale-x-0" />
              <span className="absolute bottom-0 left-0 h-[1.5px] bg-[#4a0907] w-full transform origin-right transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorialStory;
