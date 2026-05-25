"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProtectedBackgroundImage from "@/components/ProtectedBackgroundImage";
import { createGeneralWhatsAppLink } from "@/utils/whatsapp";
import { siteContent } from "@/data/siteContent";


const EditorialStory = () => {
  const { philosophy } = siteContent as any;
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
      id="mission"
      data-nav-theme="light"
      className="w-full section-editorial-philosophy overflow-hidden flex justify-center"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="philosophy-container relative z-10">
        
        {/* Left: Large Editorial Heading */}
        <div className="philosophy-title-block col-span-1 md:col-span-2 lg:col-span-4 flex flex-col items-start text-left editorial-reveal">
          <p className="section-kicker text-brand-accent tracking-[0.35em] uppercase text-[11px] font-bold block mb-[20px]">
            {philosophy.label}
          </p>
          <h2 className="text-[clamp(48px,14vw,72px)] lg:text-[clamp(56px,5vw,82px)] leading-[0.95] lg:leading-[1.05] font-editorial text-brand-dark tracking-tight font-light">
            {philosophy.headline.split(' ').map((word: string, i: number, arr: string[]) => {
              const isItalic = i >= arr.length - 2;
              return (
                <React.Fragment key={i}>
                  <span className={isItalic ? "text-brand-accent italic font-normal inline-block" : "inline-block"}>
                    {word}
                  </span>
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              );
            })}
          </h2>
        </div>

        {/* Middle: Elevated Artisan Portrait Image */}
        <figure className="philosophy-image col-span-1 md:col-span-1 lg:col-span-4 flex justify-center items-center w-full editorial-reveal">
          <div className="editorial-img-reveal relative w-full max-w-[340px] lg:max-w-[360px] aspect-[4/5] lg:aspect-auto lg:h-[450px] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.12)] rounded-[3px] border border-[rgba(95,19,15,0.08)] transition-transform duration-500 ease-out hover:scale-[1.02] cursor-pointer">
            <ProtectedBackgroundImage 
              src="/images/editorial-artisan.png" 
              alt="Artisan making siomay" 
              className="w-full h-full brightness-[0.95]"
            />
            <div className="absolute inset-0 bg-brand-dark/5 z-20 pointer-events-none" />
          </div>
        </figure>

        {/* Right: Small text block */}
        <div className="philosophy-copy col-span-1 md:col-span-1 lg:col-span-4 flex flex-col justify-center items-start text-left editorial-reveal max-w-[380px] w-full self-center gap-6">
          <p className="text-[#2b1a16] text-[18px] font-sans leading-[1.75] max-w-[360px]">
            {philosophy.description}
          </p>
          <p className="text-[#2b1a16]/65 text-[13px] font-sans italic mt-[-10px] leading-relaxed max-w-[360px]">
            {philosophy.quote}
          </p>
          
          {/* Benefit Badges */}
          <div className="philosophy-benefits grid grid-cols-3 gap-6 w-full mt-1">
            {philosophy.badges.map((badge: string, index: number) => (
              <div key={index} className="flex flex-col items-start">
                <div className="w-12 h-[1px] bg-[#5b0b07]/30 mb-2.5" />
                <span className="text-[11px] tracking-[0.14em] uppercase text-[#5b0b07] font-bold leading-[1.35] font-sans">
                  {badge}
                </span>
              </div>
            ))}
          </div>

          {/* Premium CTA Link */}
          <div className="philosophy-cta-wrapper w-full">
            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="philosophy-cta inline-flex items-center gap-3 w-fit mt-1 pb-[4px] border-b border-[#5b0b07] text-[13px] tracking-[0.18em] font-extrabold uppercase text-[#5b0b07] transition-all duration-300 hover:opacity-80"
            >
              {philosophy.cta} →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditorialStory;
