"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/data/siteContent";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const items = siteContent.scrollStoryItems;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the section
      const pin = gsap.to(triggerRef.current, {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${items.length * 100}%`,
          pin: true,
          scrub: 1,
        },
      });

      // Animating images and text
      items.forEach((item, index) => {
        if (index === 0) return; // Skip first item as it's visible

        gsap.fromTo(
          `#story-image-${index}`,
          { opacity: 0, scale: 1.2 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: `${(index / items.length) * 100}% top`,
              end: `${((index + 1) / items.length) * 100}% top`,
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          `#story-text-${index}`,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: `${(index / items.length) * 100}% top`,
              end: `${((index + 1) / items.length) * 100}% top`,
              scrub: true,
            },
          }
        );

        // Fade out previous text
        gsap.to(`#story-text-${index - 1}`, {
          opacity: 0,
          y: -50,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: `${(index / items.length) * 100}% top`,
            end: `${((index + 0.2) / items.length) * 100}% top`,
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <section ref={containerRef} className="bg-brand-dark text-brand-cream overflow-hidden">
      <div ref={triggerRef} className="h-screen flex flex-col md:flex-row relative">
        {/* Left Side: Images */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          {items.map((item, i) => (
            <div
              key={item.id}
              id={`story-image-${i}`}
              className={`absolute inset-0 w-full h-full ${i === 0 ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-dark/40" />
            </div>
          ))}
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-24 relative">
          {items.map((item, i) => (
            <div
              key={item.id}
              id={`story-text-${i}`}
              className={`absolute max-w-lg ${i === 0 ? "opacity-100" : "opacity-0"}`}
            >
              <span className="text-brand-yellow font-bold uppercase tracking-widest mb-4 block">
                0{i + 1} / 0{items.length}
              </span>
              <h2 className="text-5xl md:text-7xl font-editorial mb-8">
                {item.title}
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-brand-cream/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollStory;
