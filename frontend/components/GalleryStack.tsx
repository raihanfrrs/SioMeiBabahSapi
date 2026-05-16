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
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Collage Items Reveal
      const items = gsap.utils.toArray<HTMLElement>('.gallery-item');
      items.forEach((item, i) => {
        const img = item.querySelector('img');
        
        gsap.fromTo(item,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            delay: i * 0.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            }
          }
        );

        // Subtle Parallax
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-brand-cream section-py-lg overflow-hidden relative">
      <div className="container-custom mb-24 md:mb-32 gallery-title">
        <h2 className="text-5xl md:text-8xl font-editorial text-brand-dark tracking-tighter leading-none">
          The Making of <br/><span className="italic text-brand-accent">Babah Sapi</span>
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto h-[900px] md:h-[1200px] w-full px-6">
        {/* Layout with specific positioning for an editorial collage feel */}
        
        {/* Image 1: Primary Large */}
        {gallery[0] && (
          <div className="gallery-item absolute top-[5%] left-[5%] md:left-[10%] w-[65vw] md:w-[40vw] aspect-[4/5] z-10 overflow-hidden shadow-2xl">
            <img src={gallery[0].image} alt={gallery[0].caption} className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 bg-brand-cream/90 backdrop-blur-sm px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark">{gallery[0].caption}</p>
            </div>
          </div>
        )}

        {/* Image 2: Secondary Overlap */}
        {gallery[1] && (
          <div className="gallery-item absolute top-[20%] right-[5%] md:right-[15%] w-[45vw] md:w-[25vw] aspect-square z-20 overflow-hidden shadow-2xl">
            <img src={gallery[1].image} alt={gallery[1].caption} className="w-full h-full object-cover" />
            <div className="absolute bottom-6 right-6 bg-brand-cream/90 backdrop-blur-sm px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark">{gallery[1].caption}</p>
            </div>
          </div>
        )}

        {/* Image 3: Detail Wide */}
        {gallery[2] && (
          <div className="gallery-item absolute top-[55%] left-[10%] md:left-[30%] w-[70vw] md:w-[35vw] aspect-[16/10] z-30 overflow-hidden shadow-2xl">
            <img src={gallery[2].image} alt={gallery[2].caption} className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 bg-brand-cream/90 backdrop-blur-sm px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark">{gallery[2].caption}</p>
            </div>
          </div>
        )}

        {/* Image 4: Tall Detail */}
        {gallery[3] && (
          <div className="gallery-item absolute top-[75%] right-[10%] md:right-[5%] w-[40vw] md:w-[22vw] aspect-[3/4] z-40 overflow-hidden shadow-2xl">
            <img src={gallery[3].image} alt={gallery[3].caption} className="w-full h-full object-cover" />
            <div className="absolute bottom-6 right-6 bg-brand-cream/90 backdrop-blur-sm px-4 py-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark">{gallery[3].caption}</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default GalleryStack;
