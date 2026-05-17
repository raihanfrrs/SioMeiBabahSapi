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
    <section 
      ref={containerRef} 
      data-nav-theme="dark"
      className="relative w-full min-h-[100dvh] overflow-hidden flex items-center justify-center pb-28 md:pb-36 lg:pb-44"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={closingCta.image} 
          alt="Closing Food Visual" 
          className="closing-bg w-full h-full object-cover brightness-[0.35] contrast-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30 pointer-events-none" />
      </div>

      <div className="closing-content relative z-10 flex flex-col items-center text-center px-6 max-w-6xl">
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="h-20 w-[1px] bg-brand-cream/40" />
          <span className="ui-label text-brand-cream tracking-[0.6em] uppercase text-[12px] font-bold">Rasa Warisan, Dibuat Untuk Hari Ini</span>
        </div>

        <h2 className="text-[58px] md:text-[100px] lg:text-[130px] font-editorial text-brand-cream leading-[0.82] tracking-tighter mb-24 drop-shadow-2xl">
          {closingCta.headline.split(',').map((part, idx) => (
            <React.Fragment key={idx}>
              {idx === 0 ? part + "," : <span className="italic block mt-6 text-brand-cream/90">{part}</span>}
            </React.Fragment>
          ))}
        </h2>
        
        <Link
          href="/#menu"
          className="inline-flex items-center justify-center rounded-md bg-[#f4eadc] px-12 py-5 text-base font-semibold tracking-[0.08em] text-[#2a140d] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase"
        >
          {closingCta.ctaText}
        </Link>
      </div>
      
    </section>
  );
};

export default ClosingCTA;
