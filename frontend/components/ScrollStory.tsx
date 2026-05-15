"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
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
      const pin = gsap.to(triggerRef.current, {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${items.length * 150}%`,
          pin: true,
          scrub: 1,
        },
      });

      items.forEach((item, index) => {
        if (index === 0) return;

        gsap.fromTo(
          `#story-image-${index}`,
          { opacity: 0, scale: 1.1 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: `${(index / items.length) * 150}% top`,
              end: `${((index + 0.8) / items.length) * 150}% top`,
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          `#story-text-${index}`,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: `${(index / items.length) * 150}% top`,
              end: `${((index + 0.8) / items.length) * 150}% top`,
              scrub: true,
            },
          }
        );

        gsap.to(`#story-text-${index - 1}`, {
          opacity: 0,
          y: -100,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: `${(index / items.length) * 150}% top`,
            end: `${((index + 0.3) / items.length) * 150}% top`,
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <section ref={containerRef} className="bg-brand-dark text-brand-cream overflow-hidden">
      <div ref={triggerRef} className="h-screen w-full relative">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {items.map((item, i) => (
            <div
              key={item.id}
              id={`story-image-${i}`}
              className={`absolute inset-0 w-full h-full ${i === 0 ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              {item.video && (
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
              )}
              <div className="absolute inset-0 bg-brand-dark/20" />
            </div>
          ))}
        </div>

        {/* Floating Asymmetrical Content */}
        <div className="relative z-10 h-full container mx-auto px-6 md:px-24 pt-32">
          {items.map((item, i) => (
            <div
              key={item.id}
              id={`story-text-${i}`}
              className={`absolute inset-0 flex flex-col justify-center ${
                i % 2 === 0 ? "items-start text-left" : "items-end text-right"
              } ${i === 0 ? "opacity-100" : "opacity-0"}`}
            >
              <div className="max-w-xl">
                <span className="ui-label text-brand-peanut mb-8 block">Story {i + 1}</span>
                <h2 className="editorial-xl text-brand-cream mb-10 leading-none">
                  {item.title}
                </h2>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-brand-cream/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {items.map((_, i) => (
            <div key={i} className="h-[2px] w-8 bg-brand-cream/20 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-brand-peanut"
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                transition={{ duration: 1 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollStory;
