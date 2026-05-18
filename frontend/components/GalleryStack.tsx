"use client";

import React, { useRef, useEffect } from "react";
import { siteContent } from "@/data/siteContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    "AUTHENTIC PEANUT SAUCE",
    "HANDCRAFTED HERITAGE"
  ];

  return (
    <section 
      ref={containerRef} 
      data-nav-theme="light"
      className="w-full bg-[#f4eadc] border-t border-brand-dark/10 section-editorial-making overflow-hidden relative flex justify-center"
    >
      <div className="section-inner px-6 md:px-10 lg:px-16 w-full flex flex-col items-center">
        
        {/* Header Container */}
        <div className="gallery-title w-full flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-brand-accent tracking-[0.35em] uppercase text-xs font-bold mb-4">
            BEHIND THE SCENE
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-editorial text-brand-dark tracking-tight leading-[1.02] max-w-4xl">
            The Making of <span className="italic text-brand-accent font-normal">Babah Sapi</span>
          </h2>
        </div>

        {/* Responsive Grid Collage Layout (No overlaps, pure mathematical alignment) */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-10 w-full">
          
          {/* Image 1: Primary Main Portrait (Left Anchor) - spans 5 columns, 2 rows */}
          {gallery[0] && (
            <div className="gallery-item col-span-12 md:col-span-5 md:row-span-2 relative aspect-[3/4] overflow-hidden shadow-md border border-brand-dark/10 rounded-sm group transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={gallery[0].image} 
                alt={gallery[0].caption} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#4a0907] px-2 py-1 text-[10px] tracking-[0.2em] font-bold uppercase rounded-sm shadow-sm border border-[#4a0907]/5 z-20">
                {galleryLabels[0]}
              </div>
            </div>
          )}

          {/* Image 2: Secondary Horizontal (Center Top Support) - spans 3 columns */}
          {gallery[1] && (
            <div className="gallery-item col-span-12 sm:col-span-6 md:col-span-3 relative aspect-[4/3] overflow-hidden shadow-md border border-brand-dark/10 rounded-sm group transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={gallery[1].image} 
                alt={gallery[1].caption} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#4a0907] px-2 py-1 text-[10px] tracking-[0.2em] font-bold uppercase rounded-sm shadow-sm border border-[#4a0907]/5 z-20">
                {galleryLabels[1]}
              </div>
            </div>
          )}

          {/* Image 4: Tall Portrait (Far Right Anchor) - spans 4 columns, 2 rows */}
          {gallery[3] && (
            <div className="gallery-item col-span-12 sm:col-span-6 md:col-span-4 md:row-span-2 relative aspect-[3/4] overflow-hidden shadow-md border border-brand-dark/10 rounded-sm group transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={gallery[3].image} 
                alt={gallery[3].caption} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#4a0907] px-2 py-1 text-[10px] tracking-[0.2em] font-bold uppercase rounded-sm shadow-sm border border-[#4a0907]/5 z-20">
                {galleryLabels[3]}
              </div>
            </div>
          )}

          {/* Image 3: Peanut Sauce Card (Center Bottom) - spans 3 columns */}
          {gallery[2] && (
            <div className="gallery-item col-span-12 sm:col-span-6 md:col-span-3 relative aspect-[4/3] overflow-hidden shadow-md border border-brand-dark/10 rounded-sm group transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={gallery[2].image} 
                alt={gallery[2].caption} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#4a0907] px-2 py-1 text-[10px] tracking-[0.2em] font-bold uppercase rounded-sm shadow-sm border border-[#4a0907]/5 z-20">
                {galleryLabels[2]}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default GalleryStack;
