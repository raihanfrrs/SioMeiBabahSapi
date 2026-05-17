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
      className="w-full bg-[#f4eadc] pt-28 md:pt-36 lg:pt-44 pb-32 md:pb-40 lg:pb-48 overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Editorial Heading (col-span-5) */}
          <div className="col-span-12 md:col-span-5 flex flex-col items-start editorial-reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-8 bg-brand-accent/40" />
              <span className="ui-label text-brand-accent tracking-[0.5em] uppercase text-[10px] font-bold">Our Philosophy</span>
            </div>
            
            <h2 className="text-[54px] md:text-[64px] lg:text-[82px] leading-[0.9] font-editorial text-brand-dark tracking-tight">
              Terinspirasi <br /> dari <br />
              <span className="italic text-brand-accent font-normal">resep warisan</span>
            </h2>
          </div>

          {/* Middle: Elevated Image (col-span-3) */}
          <div className="col-span-12 md:col-span-3 flex justify-center editorial-reveal">
            <div className="editorial-img-reveal relative aspect-[3/4] w-full max-w-[320px] overflow-hidden shadow-xl rounded-sm border border-brand-dark/10">
              <img 
                src="/images/editorial-artisan.png" 
                alt="Artisan making siomay" 
                className="w-full h-full object-cover brightness-[0.95]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-dark/5" />
            </div>
          </div>

          {/* Right: Small text block (col-span-4) */}
          <div className="col-span-12 md:col-span-4 flex flex-col items-start md:col-start-9 editorial-reveal">
            <p className="text-brand-dark/70 text-base md:text-lg font-medium leading-relaxed max-w-[280px] mb-8">
              Setiap butir adalah janji kualitas, dibuat dari bahan pilihan dan racikan autentik untuk menjaga rasa yang hangat.
            </p>
            <button className="group relative py-4 px-2 overflow-hidden">
              <span className="relative z-10 text-xs font-bold uppercase tracking-[0.4em] text-brand-dark group-hover:text-brand-accent transition-colors duration-500">
                Lihat Proses
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-accent scale-x-100 group-hover:scale-x-0 transition-transform duration-700 origin-left" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorialStory;
