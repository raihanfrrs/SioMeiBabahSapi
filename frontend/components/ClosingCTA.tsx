"use client";

import React, { useRef, useEffect } from "react";
import { siteContent } from "@/data/siteContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const ClosingCTA = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { closingCta } = siteContent;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.to(".closing-bg", {
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
      
      gsap.fromTo(".closing-content",
        { y: 100, opacity: 0 },
        {
          y: 0, 
          opacity: 1, 
          duration: 2, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".closing-content",
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={closingCta.image} 
          alt="Closing Food Visual" 
          className="closing-bg w-full h-full object-cover brightness-[0.8] contrast-[1.1]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      <div className="closing-content relative z-10 flex flex-col items-center text-center px-6 max-w-6xl">
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="h-12 w-[1px] bg-brand-cream/40" />
          <span className="ui-label text-brand-cream tracking-[0.6em]">A Taste of Tradition</span>
        </div>

        <h2 className="text-[62px] md:text-[110px] lg:text-[150px] font-editorial text-brand-cream leading-[0.82] tracking-tighter mb-20 drop-shadow-2xl">
          {closingCta.headline.split(',').map((part, idx) => (
            <React.Fragment key={idx}>
              {idx === 0 ? part + "," : <span className="italic block mt-4 text-brand-cream/90">{part}</span>}
            </React.Fragment>
          ))}
        </h2>
        
        <Link
          href="/#menu"
          className="group relative inline-flex items-center justify-center bg-brand-cream text-brand-dark px-24 py-8 rounded-sm text-xs font-bold uppercase tracking-[0.4em] transition-all duration-700 hover:bg-white shadow-2xl overflow-hidden"
        >
          <span className="relative z-10">{closingCta.ctaText}</span>
          <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </Link>
      </div>
      
      {/* Editorial Marker Footer Blend */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-4 opacity-30">
          <div className="w-[1px] h-12 bg-white" />
          <span className="ui-label text-[8px] text-white">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
