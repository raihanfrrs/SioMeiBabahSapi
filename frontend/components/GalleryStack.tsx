"use client";

import React, { useRef, useEffect } from "react";
import { siteContent } from "@/data/siteContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LazyImage } from "@/components/LazyImage";

const GalleryStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { gallery } = siteContent;

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

  const galleryLabels = [
    "THE ART OF FOLDING",
    "PREMIUM BEEF SELECTION",
    "THREE WAYS TO ENJOY",
    "HANDCRAFTED HERITAGE"
  ];

  return (
    <section 
      ref={containerRef} 
      data-nav-theme="light"
      className="w-full bg-[#f4eadc] overflow-hidden flex justify-center"
      style={{
        paddingTop: "clamp(20px, 10vw, 20px)",
        paddingBottom: "clamp(20px, 10vw, 20px)"
      }}
    >
      <div 
        className="w-full mx-auto flex flex-col items-center" 
        style={{ 
          maxWidth: "1280px", 
          paddingLeft: "clamp(20px, 4vw, 32px)", 
          paddingRight: "clamp(20px, 4vw, 32px)" 
        }}
      >
        
        {/* Header Container */}
        <div 
          className="gallery-title w-full flex flex-col items-center text-center" 
          style={{ marginBottom: "clamp(48px, 6vw, 64px)" }}
        >
          <span 
            className="text-[#4a0907]/70 uppercase font-bold"
            style={{ fontSize: "11px", letterSpacing: "0.4em", marginBottom: "18px" }}
          >
            BEHIND THE SCENE
          </span>
          <h2 
            className="font-editorial text-brand-dark tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(42px, 6vw, 76px)", lineHeight: 1.02 }}
          >
            The Making of <span className="italic text-[#C7923E] font-normal">Babah Sapi</span>
          </h2>
        </div>

        {/* Editorial Asymmetric Collage */}
        <div 
          className="flex flex-col md:flex-row items-center md:items-center justify-between w-full" 
          style={{ gap: "clamp(24px, 3vw, 48px)" }}
        >
          
          {/* Left Column (Main Hero Image) */}
          <div className="gallery-item w-full md:w-[40%]">
            <div 
              className="relative aspect-[3/4] w-full overflow-hidden group transition-transform duration-500 hover:-translate-y-1"
              style={{ 
                borderRadius: "6px", 
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                border: "1px solid rgba(60,35,20,0.08)"
              }}
            >
              <LazyImage 
                src={gallery[0]?.image} 
                alt={gallery[0]?.caption} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              <div 
                className="absolute bg-[#FDF8EE]/95 backdrop-blur-sm text-[#4a0907] font-bold uppercase z-20"
                style={{ top: "16px", left: "16px", fontSize: "9px", letterSpacing: "0.25em", padding: "6px 12px", borderRadius: "4px", border: "1px solid rgba(60,35,20,0.05)" }}
              >
                {galleryLabels[0]}
              </div>
            </div>
          </div>

          {/* Center Column (Floating Stacked Images) */}
          <div 
            className="w-full md:w-[26%] flex flex-col justify-center relative z-10" 
            style={{ gap: "clamp(20px, 3vw, 36px)" }}
          >
            
            {/* Top Center Image */}
            <div className="gallery-item w-full md:-translate-y-6">
              <div 
                className="relative aspect-[4/3] w-full overflow-hidden group transition-transform duration-500 hover:-translate-y-1"
                style={{ 
                  borderRadius: "6px", 
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(60,35,20,0.08)"
                }}
              >
                <LazyImage 
                  src={gallery[1]?.image} 
                  alt={gallery[1]?.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <div 
                  className="absolute bg-[#FDF8EE]/95 backdrop-blur-sm text-[#4a0907] font-bold uppercase z-20"
                  style={{ top: "12px", left: "12px", fontSize: "9px", letterSpacing: "0.25em", padding: "6px 12px", borderRadius: "4px", border: "1px solid rgba(60,35,20,0.05)" }}
                >
                  {galleryLabels[1]}
                </div>
              </div>
            </div>

            {/* Bottom Center Image (Overlap Offset) */}
            <div className="gallery-item w-full md:-mt-8 md:-ml-5 relative z-20">
              <div 
                className="relative aspect-[4/3] md:aspect-[1/1] w-full overflow-hidden group transition-transform duration-500 hover:-translate-y-1"
                style={{ 
                  borderRadius: "6px", 
                  boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                  border: "1px solid rgba(60,35,20,0.08)"
                }}
              >
                <LazyImage 
                  src={gallery[2]?.image} 
                  alt={gallery[2]?.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <div 
                  className="absolute bg-[#FDF8EE]/95 backdrop-blur-sm text-[#4a0907] font-bold uppercase z-20"
                  style={{ top: "12px", left: "12px", fontSize: "9px", letterSpacing: "0.25em", padding: "6px 12px", borderRadius: "4px", border: "1px solid rgba(60,35,20,0.05)" }}
                >
                  {galleryLabels[2]}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Secondary Tall Image) */}
          <div className="gallery-item w-full md:w-[34%]">
            <div 
              className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden group transition-transform duration-500 hover:-translate-y-1"
              style={{ 
                borderRadius: "6px", 
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                border: "1px solid rgba(60,35,20,0.08)"
              }}
            >
              <LazyImage 
                src={gallery[3]?.image} 
                alt={gallery[3]?.caption} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              <div 
                className="absolute bg-[#FDF8EE]/95 backdrop-blur-sm text-[#4a0907] font-bold uppercase z-20"
                style={{ top: "16px", left: "16px", fontSize: "9px", letterSpacing: "0.25em", padding: "6px 12px", borderRadius: "4px", border: "1px solid rgba(60,35,20,0.05)" }}
              >
                {galleryLabels[3]}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GalleryStack;
