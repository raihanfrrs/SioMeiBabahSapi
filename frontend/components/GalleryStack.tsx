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
      className="w-full bg-[#f4eadc] pt-28 md:pt-36 lg:pt-44 pb-36 md:pb-44 lg:pb-56 overflow-hidden relative border-t border-[#2a140d]/10"
    >
      {/* Header Container */}
      <div className="container-custom mb-16 md:mb-20 gallery-title">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span className="ui-label text-brand-accent tracking-[0.4em] uppercase text-[10px] font-bold">Behind The Scene</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-editorial text-brand-dark tracking-tight leading-[0.9] max-w-4xl">
            The Making of <span className="italic text-brand-accent font-normal">Babah Sapi</span>
          </h2>
        </div>
      </div>

      <div className="container-custom">
        {/* Responsive Mobile Layout (Stacked list, clean, no overflow) */}
        <div className="flex flex-col gap-10 md:hidden">
          {gallery.map((item, idx) => (
            <div key={item.id} className="gallery-item w-full flex flex-col gap-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden shadow-xl border border-brand-dark/10 rounded-sm">
                <img 
                  src={item.image} 
                  alt={item.caption} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#f4eadc]/90 text-[#2a140d] px-3 py-1 text-[10px] tracking-[0.2em] font-semibold uppercase rounded-sm shadow-sm">
                  {galleryLabels[idx] || item.caption}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Collage Layout (Premium, controlled, absolute magazine composition) */}
        <div className="hidden md:block relative w-full max-w-6xl mx-auto min-h-[760px]">
          
          {/* Image 1: Primary Large (Left) */}
          {gallery[0] && (
            <div className="gallery-item absolute left-0 top-0 w-[38%] aspect-[3/4] overflow-hidden shadow-xl border border-brand-dark/10 rounded-sm">
              <img 
                src={gallery[0].image} 
                alt={gallery[0].caption} 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#f4eadc]/90 text-[#2a140d] px-3 py-1 text-[10px] tracking-[0.2em] font-semibold uppercase rounded-sm shadow-sm">
                {galleryLabels[0]}
              </div>
            </div>
          )}

          {/* Image 2: Secondary Overlap (Right-Center) */}
          {gallery[1] && (
            <div className="gallery-item absolute left-[42%] top-[8%] w-[30%] aspect-[4/3] overflow-hidden shadow-xl border border-brand-dark/10 rounded-sm">
              <img 
                src={gallery[1].image} 
                alt={gallery[1].caption} 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#f4eadc]/90 text-[#2a140d] px-3 py-1 text-[10px] tracking-[0.2em] font-semibold uppercase rounded-sm shadow-sm">
                {galleryLabels[1]}
              </div>
            </div>
          )}

          {/* Image 3: Wide Detail Overlap (Center-Left) */}
          {gallery[2] && (
            <div className="gallery-item absolute left-[30%] top-[48%] w-[28%] aspect-[4/3] overflow-hidden shadow-xl border border-brand-dark/10 rounded-sm">
              <img 
                src={gallery[2].image} 
                alt={gallery[2].caption} 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#f4eadc]/90 text-[#2a140d] px-3 py-1 text-[10px] tracking-[0.2em] font-semibold uppercase rounded-sm shadow-sm">
                {galleryLabels[2]}
              </div>
            </div>
          )}

          {/* Image 4: Tall Detail (Right) */}
          {gallery[3] && (
            <div className="gallery-item absolute right-0 top-[35%] w-[28%] aspect-[3/4] overflow-hidden shadow-xl border border-brand-dark/10 rounded-sm">
              <img 
                src={gallery[3].image} 
                alt={gallery[3].caption} 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#f4eadc]/90 text-[#2a140d] px-3 py-1 text-[10px] tracking-[0.2em] font-semibold uppercase rounded-sm shadow-sm">
                {galleryLabels[3]}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default GalleryStack;
