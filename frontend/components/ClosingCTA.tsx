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
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
      
      gsap.fromTo(".closing-content",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: ".closing-content",
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[80dvh] md:h-[100dvh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={closingCta.image} 
          alt="Closing Food Visual" 
          className="closing-bg w-full h-full object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      <div className="closing-content relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="text-5xl md:text-8xl lg:text-[110px] font-editorial text-brand-cream leading-[0.9] tracking-tighter mb-12">
          {closingCta.headline.split(',').map((part, idx) => (
            <React.Fragment key={idx}>
              {idx === 0 ? part + "," : <span className="italic block mt-2 text-brand-cream/90">{part}</span>}
            </React.Fragment>
          ))}
        </h2>
        
        <Link
          href="/#menu"
          className="inline-block bg-[#f3eadc] text-[#32160f] px-10 py-5 rounded-md text-xs font-bold uppercase tracking-[0.3em] hover:scale-105 transition-transform duration-500 shadow-2xl"
        >
          {closingCta.ctaText}
        </Link>
      </div>
    </section>
  );
};

export default ClosingCTA;
