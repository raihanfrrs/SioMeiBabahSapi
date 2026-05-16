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
      const items = gsap.utils.toArray<HTMLElement>('.gallery-item');
      
      items.forEach((item, i) => {
        // Different parallax speed for odd/even items
        const speed = i % 2 === 0 ? 100 : 200;
        
        gsap.fromTo(item,
          { y: speed, opacity: 0 },
          {
            y: -speed/2,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "bottom 10%",
              scrub: true,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-brand-cream py-32 md:py-64 overflow-hidden relative min-h-[150vh]">
      <div className="text-center mb-32 relative z-10">
        <h2 className="text-4xl md:text-7xl font-editorial text-brand-dark">The Making of <br/><span className="italic">Babah Sapi</span></h2>
      </div>

      <div className="relative max-w-6xl mx-auto h-[1000px] w-full px-5">
        {/* Layout based on Savor stacked gallery, manually positioned for editorial feel */}
        
        {/* Image 1 */}
        {gallery[0] && (
          <div className="gallery-item absolute top-[5%] left-[5%] md:left-[10%] w-[60vw] md:w-[35vw] aspect-[4/5] z-10">
            <img src={gallery[0].image} alt={gallery[0].caption} className="w-full h-full object-cover shadow-2xl" />
            <p className="mt-4 text-xs tracking-widest uppercase font-bold text-brand-dark/60">{gallery[0].caption}</p>
          </div>
        )}

        {/* Image 2 */}
        {gallery[1] && (
          <div className="gallery-item absolute top-[25%] right-[5%] md:right-[10%] w-[50vw] md:w-[28vw] aspect-square z-20">
            <img src={gallery[1].image} alt={gallery[1].caption} className="w-full h-full object-cover shadow-xl" />
            <p className="mt-4 text-xs tracking-widest uppercase font-bold text-brand-dark/60 text-right">{gallery[1].caption}</p>
          </div>
        )}

        {/* Image 3 */}
        {gallery[2] && (
          <div className="gallery-item absolute top-[55%] left-[15%] md:left-[25%] w-[70vw] md:w-[40vw] aspect-[16/9] z-30">
            <img src={gallery[2].image} alt={gallery[2].caption} className="w-full h-full object-cover shadow-2xl" />
            <p className="mt-4 text-xs tracking-widest uppercase font-bold text-brand-dark/60">{gallery[2].caption}</p>
          </div>
        )}

        {/* Image 4 */}
        {gallery[3] && (
          <div className="gallery-item absolute top-[80%] right-[15%] md:right-[20%] w-[45vw] md:w-[25vw] aspect-[3/4] z-40">
            <img src={gallery[3].image} alt={gallery[3].caption} className="w-full h-full object-cover shadow-xl" />
            <p className="mt-4 text-xs tracking-widest uppercase font-bold text-brand-dark/60 text-right">{gallery[3].caption}</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default GalleryStack;
