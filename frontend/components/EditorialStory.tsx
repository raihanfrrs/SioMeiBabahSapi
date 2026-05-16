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
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.8, 
          stagger: 0.2, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
      
      gsap.fromTo(".editorial-img-reveal",
        { clipPath: "inset(0% 100% 0% 0%)", scale: 1.15 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 2.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".editorial-img-reveal",
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-brand-cream section-py-lg overflow-hidden border-t-editorial">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 items-center">
          
          {/* Left: Large Editorial Heading */}
          <div className="md:col-span-6 flex flex-col items-start editorial-reveal pl-4 md:pl-0">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-8 bg-brand-accent/40" />
              <span className="ui-label text-brand-accent tracking-[0.5em]">Our Philosophy</span>
            </div>
            
            <h2 className="text-[58px] md:text-[80px] lg:text-[100px] leading-[0.82] font-editorial text-brand-dark tracking-tighter">
              Terinspirasi <br /> dari <br />
              <span className="italic text-brand-accent">resep warisan</span>
            </h2>
          </div>

          {/* Middle: Elevated Image */}
          <div className="md:col-span-3 flex justify-center editorial-reveal">
            <div className="editorial-img-reveal relative aspect-[3/4] w-full max-w-[350px] overflow-hidden shadow-2xl reveal-img-container">
              <img 
                src="/images/editorial-artisan.png" 
                alt="Artisan making siomay" 
                className="w-full h-full object-cover brightness-[0.95]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-dark/5" />
            </div>
          </div>

          {/* Right: Small text block */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end text-left md:text-right editorial-reveal">
            <p className="text-brand-dark/80 text-lg md:text-xl font-medium leading-relaxed max-w-[280px] mb-12">
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
