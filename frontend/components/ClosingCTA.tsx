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
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
      
      gsap.fromTo(".closing-content",
        { y: 60, opacity: 0 },
        {
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
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
    <section ref={containerRef} className="relative w-full h-[90dvh] md:h-[100dvh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={closingCta.image} 
          alt="Closing Food Visual" 
          className="closing-bg w-full h-full object-cover brightness-[0.75] contrast-[1.1]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      </div>

      <div className="closing-content relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
        <span className="text-brand-cream/60 font-bold tracking-[0.4em] text-[10px] uppercase mb-8">Ready to savor?</span>
        <h2 className="text-[54px] md:text-[100px] lg:text-[140px] font-editorial text-brand-cream leading-[0.85] tracking-tighter mb-16">
          {closingCta.headline.split(',').map((part, idx) => (
            <React.Fragment key={idx}>
              {idx === 0 ? part + "," : <span className="italic block mt-4 text-brand-cream/90">{part}</span>}
            </React.Fragment>
          ))}
        </h2>
        
        <Link
          href="/#menu"
          className="group relative inline-flex items-center justify-center bg-brand-cream text-brand-dark px-20 py-7 rounded-sm text-[11px] font-bold uppercase tracking-[0.4em] transition-all duration-500 hover:bg-white shadow-2xl overflow-hidden"
        >
          <span className="relative z-10">{closingCta.ctaText}</span>
          <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </Link>
      </div>
      
      {/* Visual Spacer to blend with Footer */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-10" />
    </section>
  );
};

export default ClosingCTA;
