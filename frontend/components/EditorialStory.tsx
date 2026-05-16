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
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
          stagger: 0.15, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
      
      gsap.fromTo(".editorial-img-reveal",
        { clipPath: "inset(0% 100% 0% 0%)", scale: 1.2 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 2,
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
    <section ref={containerRef} className="w-full bg-brand-cream section-py-lg overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left: Large Editorial Heading */}
          <div className="md:col-span-5 flex flex-col items-start editorial-reveal">
            <h2 className="text-[64px] md:text-[90px] lg:text-[110px] leading-[0.85] font-editorial text-brand-dark tracking-tighter">
              Terinspirasi <br /> dari <br />
              <span className="italic text-brand-accent">resep warisan</span>
            </h2>
          </div>

          {/* Middle: Elevated Image */}
          <div className="md:col-span-3 flex justify-center editorial-reveal">
            <div className="editorial-img-reveal relative aspect-[3/4] w-full max-w-[320px] overflow-hidden shadow-2xl reveal-img-container">
              <img 
                src="/images/editorial-artisan.png" 
                alt="Artisan making siomay" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Small text block */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right editorial-reveal">
            <p className="text-brand-dark/80 text-lg md:text-xl font-medium leading-relaxed max-w-[280px] mb-10">
              Dibuat dari bahan pilihan dan racikan autentik untuk menjaga rasa yang hangat, gurih, dan berkesan.
            </p>
            <button className="group relative text-xs font-bold uppercase tracking-[0.3em] text-brand-dark">
              <span className="relative z-10">Lihat Proses</span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-accent scale-x-100 group-hover:scale-x-50 transition-transform duration-500 origin-left" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorialStory;
