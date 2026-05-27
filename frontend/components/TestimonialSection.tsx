"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { siteContent } from "@/data/siteContent";
import RevealWrapper from "@/components/RevealWrapper";
import { buildWhatsAppLink, generalOrderMessage } from "@/utils/whatsapp";

export default function TestimonialSection() {
  const { label, headline, headlineBreak, subheadline, posts, ctaText, ctaButton } = siteContent.testimonials as any;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section 
      id="testimonials"
      className="section-shell relative w-full bg-brand-cream overflow-hidden"
    >
      <div className="section-inner flex flex-col items-center">
        {/* Header Area */}
        <RevealWrapper>
          <div className="flex flex-col items-center text-center" style={{ marginBottom: "clamp(48px, 6vw, 64px)" }}>
            <span 
              className="uppercase font-sans font-bold"
              style={{
                fontSize: "12px",
                letterSpacing: "0.25em",
                color: "#C7923E", // gold
                marginBottom: "16px",
              }}
            >
              {label}
            </span>
            <h2 
              className="font-editorial text-[#4b0705]"
              style={{
                fontSize: "clamp(56px, 6vw, 92px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
              }}
            >
              {headline} <br /> {headlineBreak}
            </h2>
            <p 
              className="font-sans font-medium"
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                lineHeight: 1.6,
                color: "rgba(75, 7, 5, 0.75)",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              {subheadline}
            </p>
          </div>
        </RevealWrapper>

        {/* Embla Carousel Wrapper */}
        <div className="w-full max-w-[1180px] mx-auto relative px-2 md:px-8 lg:px-12" style={{ marginBottom: "48px" }}>
          
          <div className="relative w-full">
            {/* Navigation Arrows */}
            <button 
              onClick={scrollPrev}
              className="absolute left-1 md:left-[-20px] lg:left-[-56px] top-1/2 -translate-y-1/2 z-20 flex h-[42px] w-[42px] md:h-12 md:w-12 items-center justify-center rounded-full border border-[#d8b36a]/50 bg-[#fff8ed]/90 text-[#6b0f0f] shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-[#4b0705] hover:border-[#4b0705] hover:text-[#FDF8EE]"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <button 
              onClick={scrollNext}
              className="absolute right-1 md:right-[-20px] lg:right-[-56px] top-1/2 -translate-y-1/2 z-20 flex h-[42px] w-[42px] md:h-12 md:w-12 items-center justify-center rounded-full border border-[#d8b36a]/50 bg-[#fff8ed]/90 text-[#6b0f0f] shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-[#4b0705] hover:border-[#4b0705] hover:text-[#FDF8EE]"
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Embla Viewport */}
            <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing rounded-2xl" ref={emblaRef}>
              <div className="flex" style={{ touchAction: "pan-y", gap: "24px" }}>
                {posts.map((post: any, index: number) => (
                  <div 
                    key={post.id} 
                    className="flex-[0_0_100%] md:flex-[0_0_calc((100%-24px)/2)] lg:flex-[0_0_calc((100%-48px)/3)] min-w-0"
                  >
                    <div 
                      className="flex flex-col w-full h-full"
                      style={{
                        backgroundColor: "#FDF8EE",
                        border: "1px solid rgba(199, 146, 62, 0.3)",
                        borderRadius: "24px",
                        padding: "clamp(24px, 3vw, 32px)",
                        boxShadow: "0 4px 20px -10px rgba(75, 7, 5, 0.05)"
                      }}
                    >
                      {/* Header: Name, Role, Rating */}
                      <div className="flex flex-col mb-4 pb-4 border-b border-[#4b0705]/10">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-editorial text-2xl text-[#4b0705] leading-none">
                            {post.name}
                          </h3>
                          <span className="text-[#C7923E] tracking-widest text-[12px] mt-1">
                            {"★".repeat(post.rating || 5)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          {post.label && (
                            <span className="text-[10px] uppercase tracking-wider font-bold bg-[#4b0705]/5 text-[#4b0705] py-1.5 px-3 rounded-md">
                              {post.label}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Text */}
                      <p 
                        className="font-sans text-[#4b0705]/85"
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.65,
                        }}
                      >
                        “{post.text}”
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? "bg-[#4b0705] scale-125" 
                    : "bg-[#C7923E]/30 hover:bg-[#C7923E]/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Area */}
        <RevealWrapper delay={200}>
          <div className="flex flex-col items-center text-center mt-12">
            <p 
              className="font-sans font-medium mb-5"
              style={{
                fontSize: "15px",
                color: "rgba(75, 7, 5, 0.7)",
              }}
            >
              {ctaText}
            </p>
            <a 
              href={buildWhatsAppLink(generalOrderMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#6b0f0f", // maroon solid
                color: "#FDF8EE",
                borderRadius: "999px", // pill
                padding: "16px 32px",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "0.02em",
                boxShadow: "0 8px 20px -5px rgba(107, 15, 15, 0.3)",
              }}
            >
              {ctaButton}
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
