"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RevealSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        maskRef.current,
        {
          clipPath: "circle(0% at 50% 50%)",
        },
        {
          clipPath: "circle(100% at 50% 50%)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: true,
            pinSpacing: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full bg-brand-cream overflow-hidden">
      {/* Background (what is revealed) */}
      <div 
        ref={maskRef}
        className="absolute inset-0 z-10 w-full h-full"
      >
        <video
          src="https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-chef-preparing-dough-4404-large.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/30" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <span className="ui-label mb-10 block text-brand-cream/80">The Secret</span>
            <h2 className="editorial-xl text-brand-cream max-w-6xl">
              Kesempurnaan di Setiap <span className="italic text-brand-peanut">Lapisan.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Foreground (the initial state) */}
      <div className="absolute inset-0 flex items-center justify-center bg-brand-cream z-0">
        <div className="text-center">
          <p className="ui-label text-brand-dark/20">Scroll untuk melihat rahasia Babah</p>
        </div>
      </div>
    </section>
  );
};

export default RevealSection;
