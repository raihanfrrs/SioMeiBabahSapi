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
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Collage Items Reveal - Staggered
      const items = gsap.utils.toArray<HTMLElement>('.gallery-item');
      items.forEach((item, i) => {
        const img = item.querySelector('img');
        
        gsap.fromTo(item,
          { y: 80, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.8,
            delay: i * 0.12,
            ease: "expo.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            }
          }
        );

        // Subtle Parallax
        gsap.to(img, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const galleryLabels = [
    "The art of folding",
    "Premium beef selection",
    "Authentic peanut sauce",
    "Handcrafted heritage"
  ];

  return (
    <section 
      ref={containerRef} 
      data-nav-theme="light"
      className="w-full bg-brand-cream pt-28 md:pt-40 lg:pt-56 pb-44 md:pb-64 lg:pb-80 overflow-hidden relative border-t border-[#2a140d]/10"
    >
      <div className="container-custom mb-32 md:mb-56 gallery-title">
        <div className="flex flex-col gap-8">
          <span className="ui-label text-brand-accent tracking-[0.4em] uppercase text-[10px] font-bold">Behind the scene</span>
          <h2 className="text-6xl md:text-8xl lg:text-[110px] font-editorial text-brand-dark tracking-tighter leading-[0.85]">
            The Making of <br/><span className="italic text-brand-accent">Babah Sapi</span>
          </h2>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto h-[1000px] md:h-[1400px] w-full px-6">
        {/* Image 1: Primary Large & Dominant */}
        {gallery[0] && (
          <div className="gallery-item absolute top-[0%] left-[5%] md:left-[10%] w-[80vw] md:w-[45vw] aspect-[4/5] z-10 overflow-hidden shadow-2xl border border-brand-dark/5 rounded-sm">
            <img src={gallery[0].image} alt={gallery[0].caption} className="w-full h-full object-cover scale-110" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-brand-cream/90 backdrop-blur-md px-6 py-3 border border-brand-dark/5 shadow-xl">
              <p className="ui-label text-[10px] text-brand-dark font-bold uppercase tracking-wider">{galleryLabels[0]}</p>
            </div>
          </div>
        )}

        {/* Image 2: Secondary Overlap Top Right */}
        {gallery[1] && (
          <div className="gallery-item absolute top-[10%] right-[0%] md:right-[5%] w-[55vw] md:w-[30vw] aspect-square z-20 overflow-hidden shadow-2xl border border-brand-dark/5 rounded-sm">
            <img src={gallery[1].image} alt={gallery[1].caption} className="w-full h-full object-cover scale-110" />
            <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-brand-cream/90 backdrop-blur-md px-5 py-2 border border-brand-dark/5 shadow-xl">
              <p className="ui-label text-[10px] text-brand-dark font-bold uppercase tracking-wider">{galleryLabels[1]}</p>
            </div>
          </div>
        )}

        {/* Image 3: Wide Detail Overlap Center */}
        {gallery[2] && (
          <div className="gallery-item absolute top-[45%] left-[10%] md:left-[20%] w-[75vw] md:w-[42vw] aspect-[16/9] z-30 overflow-hidden shadow-2xl border border-brand-dark/5 rounded-sm">
            <img src={gallery[2].image} alt={gallery[2].caption} className="w-full h-full object-cover scale-110" />
            <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-brand-cream/90 backdrop-blur-md px-5 py-2 border border-brand-dark/5 shadow-xl">
              <p className="ui-label text-[10px] text-brand-dark font-bold uppercase tracking-wider">{galleryLabels[2]}</p>
            </div>
          </div>
        )}

        {/* Image 4: Tall Detail Bottom Right */}
        {gallery[3] && (
          <div className="gallery-item absolute top-[65%] right-[5%] md:right-[10%] w-[50vw] md:w-[26vw] aspect-[3/4] z-40 overflow-hidden shadow-2xl border border-brand-dark/5 rounded-sm">
            <img src={gallery[3].image} alt={gallery[3].caption} className="w-full h-full object-cover scale-110" />
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-brand-cream/90 backdrop-blur-md px-5 py-2 border border-brand-dark/5 shadow-xl">
              <p className="ui-label text-[10px] text-brand-dark font-bold uppercase tracking-wider">{galleryLabels[3]}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryStack;
