"use client";

import React, { useRef, useEffect } from "react";
import { siteContent } from "@/data/siteContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProtectedBackgroundImage from "@/components/ProtectedBackgroundImage";
import { createGeneralWhatsAppLink } from "@/utils/whatsapp";

const GalleryStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { gallery, galleryIntro } = siteContent as any;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Sync Title Reveal
      gsap.fromTo(".gallery-title",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Collage Items Reveal - Staggered
      const items = gsap.utils.toArray<HTMLElement>('.gallery-item');
      items.forEach((item) => {
        gsap.fromTo(item,
          { y: 40, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="core"
      data-nav-theme="light"
      className="w-full bg-[#f4eadc] overflow-hidden flex justify-center section-gallery-spacious"
      style={{ height: "auto" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div 
        className="w-full mx-auto flex flex-col items-center max-w-[1240px] px-5 md:px-8"
      >
        
        {/* Header Container */}
        <div 
          className="gallery-title w-full flex flex-col items-center text-center"
          style={{ marginBottom: "clamp(12px, 3vw, 30px)" }}
        >
          <span 
            className="text-[#3c2314]/70 uppercase font-bold text-[11px] tracking-[0.4em] mb-[14px]"
          >
            {galleryIntro.label}
          </span>
          <h2 
            className="font-editorial text-[#3c2314] tracking-tight max-w-[980px] leading-[0.98]"
            style={{ fontSize: "clamp(36px, 8vw, 72px)" }}
          >
            {galleryIntro.headline.replace("Babah Sapi", "")}<span className="italic font-normal text-[#3c2314]">Babah Sapi</span>
          </h2>
          <p 
            className="text-center text-[#3e2019]/72 mx-auto font-sans text-sm md:text-[15px] leading-[1.7] max-w-[760px] mt-[22px]"
          >
           {galleryIntro.subheadline}
          </p>
        </div>

        {/* Editorial Asymmetric Collage */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.15fr_0.92fr_1.05fr] w-full gap-[28px] items-start"
        >
          
          {/* Left Column (Main Hero Image) */}
          <div className="gallery-item w-full flex flex-col">
            <div 
              className="relative w-full overflow-hidden group transition-transform duration-500 aspect-[3/4] lg:max-h-[520px]"
              style={{ 
                borderRadius: "8px", 
                boxShadow: "0 8px 24px rgba(60,35,20,0.04)",
                border: "1px solid rgba(60,35,20,0.06)"
              }}
            >
              <ProtectedBackgroundImage 
                src={gallery[0]?.image} 
                alt={gallery[0]?.caption} 
                className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              <div 
                className="absolute bg-[#FDF8EE] text-[#800020] font-bold uppercase z-20"
                style={{ 
                  top: "16px", 
                  left: "16px", 
                  fontSize: "11px", 
                  letterSpacing: "0.14em", 
                  padding: "8px 14px", 
                  borderRadius: "6px", 
                  border: "1px solid rgba(60,35,20,0.05)" 
                }}
              >
                {gallery[0]?.label}
              </div>
            </div>
            <p className="mt-[12px] text-[#3e2019]/72 text-[14px] leading-[1.5] font-sans italic text-left pl-1">
              “{gallery[0]?.caption}”
            </p>
          </div>

          {/* Center Column (Floating Stacked Images) */}
          <div 
            className="w-full flex flex-col gap-[24px]"
          >
            
            {/* Top Center Image */}
            <div className="gallery-item w-full flex flex-col">
              <div 
                className="relative w-full overflow-hidden group transition-transform duration-500 aspect-[3/2] lg:max-h-[200px]"
                style={{ 
                  borderRadius: "8px", 
                  boxShadow: "0 8px 24px rgba(60,35,20,0.04)",
                  border: "1px solid rgba(60,35,20,0.06)"
                }}
              >
                <ProtectedBackgroundImage 
                  src={gallery[1]?.image} 
                  alt={gallery[1]?.caption} 
                  className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <div 
                  className="absolute bg-[#FDF8EE] text-[#800020] font-bold uppercase z-20"
                  style={{ 
                    top: "16px", 
                    left: "16px", 
                    fontSize: "11px", 
                    letterSpacing: "0.14em", 
                    padding: "8px 14px", 
                    borderRadius: "6px", 
                    border: "1px solid rgba(60,35,20,0.05)" 
                  }}
                >
                  {gallery[1]?.label}
                </div>
              </div>
              <p className="mt-[12px] text-[#3e2019]/72 text-[14px] leading-[1.5] font-sans italic text-left pl-1">
                “{gallery[1]?.caption}”
              </p>
            </div>

            {/* Bottom Center Image */}
            <div className="gallery-item w-full flex flex-col">
              <div 
                className="relative w-full overflow-hidden group transition-transform duration-500 aspect-[3/2] lg:max-h-[200px]"
                style={{ 
                  borderRadius: "8px", 
                  boxShadow: "0 8px 24px rgba(60,35,20,0.04)",
                  border: "1px solid rgba(60,35,20,0.06)"
                }}
              >
                <ProtectedBackgroundImage 
                  src={gallery[2]?.image} 
                  alt={gallery[2]?.caption} 
                  className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <div 
                  className="absolute bg-[#FDF8EE] text-[#800020] font-bold uppercase z-20"
                  style={{ 
                    top: "16px", 
                    left: "16px", 
                    fontSize: "11px", 
                    letterSpacing: "0.14em", 
                    padding: "8px 14px", 
                    borderRadius: "6px", 
                    border: "1px solid rgba(60,35,20,0.05)" 
                  }}
                >
                  {gallery[2]?.label}
                </div>
              </div>
              <p className="mt-[12px] text-[#3e2019]/72 text-[14px] leading-[1.5] font-sans italic text-left pl-1">
                “{gallery[2]?.caption}”
              </p>
            </div>

          </div>

          {/* Right Column (Secondary Tall Image) */}
          <div className="gallery-item w-full md:col-span-2 lg:col-span-1 flex flex-col md:mt-4 lg:mt-0">
            <div 
              className="relative w-full overflow-hidden group transition-transform duration-500 aspect-[3/4] lg:max-h-[460px]"
              style={{ 
                borderRadius: "8px", 
                boxShadow: "0 8px 24px rgba(60,35,20,0.04)",
                border: "1px solid rgba(60,35,20,0.06)"
              }}
            >
              <ProtectedBackgroundImage 
                src={gallery[3]?.image} 
                alt={gallery[3]?.caption} 
                className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              <div 
                className="absolute bg-[#FDF8EE] text-[#800020] font-bold uppercase z-20"
                style={{ 
                  top: "16px", 
                  left: "16px", 
                  fontSize: "11px", 
                  letterSpacing: "0.14em", 
                  padding: "8px 14px", 
                  borderRadius: "6px", 
                  border: "1px solid rgba(60,35,20,0.05)" 
                }}
              >
                {gallery[3]?.label}
              </div>
            </div>
            <p className="mt-[12px] text-[#3e2019]/72 text-[14px] leading-[1.5] font-sans italic text-left pl-1">
              “{gallery[3]?.caption}”
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div 
          className="w-full flex flex-col items-center text-center gap-0"
          style={{ marginTop: "clamp(12px, 3vw, 30px)" }}
        >
          <p className="text-xs md:text-sm font-sans text-[#3e2019]/72 italic">
            {galleryIntro.footerNote}
          </p>

          <div 
            style={{ marginTop: "clamp(28px, 3vw, 40px)", marginBottom: "24px" }}
          >
            <a 
              href={createGeneralWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#800020] to-[#4a0907] hover:from-[#6b1110] hover:to-[#320605] text-[#f4eadc] font-bold px-[38px] min-w-[320px] h-[56px] rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-xl text-[18px] border border-[#C7923E]/20"
            >
              {galleryIntro.cta} <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GalleryStack;
