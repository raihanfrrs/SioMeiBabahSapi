"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MEDIA_ITEMS = [
  "/images/macro-sauce.png",
  "/images/macro-steamer.png",
  "/images/process-beef.png",
  "/images/process-dough.png",
];

const MacroTexture = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const mediaWrapperRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const finalLayoutRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const [activeIdx, setActiveIdx] = useState(0);

  // Auto loop the crossfade images inside the card
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % MEDIA_ITEMS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Apply cinematic pinned scroll animation universally
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)"
    }, (context) => {
      const { isDesktop } = context.conditions as { isDesktop: boolean };
      const cardSize = isDesktop ? "320px" : "280px";

      const ctx = gsap.context(() => {
        // Setup initial states
        gsap.set(stickyRef.current, { backgroundColor: "#1F140F" });
        gsap.set(mediaWrapperRef.current, {
          width: "100%",
          height: "100%",
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          borderRadius: "0px",
          boxShadow: "0 0px 0px rgba(0,0,0,0)",
        });
        gsap.set(overlayRef.current, { opacity: 0.45 });
        gsap.set(introTextRef.current, { opacity: 1, y: 0 });
        gsap.set(finalLayoutRef.current, { opacity: 0, pointerEvents: "none" });
        gsap.set(headlineRef.current, { opacity: 0, y: isDesktop ? 20 : 15 });
        gsap.set(descRef.current, { opacity: 0, y: isDesktop ? 20 : 15 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=260%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Progress 0% - 25%: Fullscreen intro showing, label & subheadline visible.
        tl.to(introTextRef.current, {
          opacity: 0,
          y: -30,
          duration: 0.8,
          ease: "power2.inOut",
        }, 0.2)
        .to(overlayRef.current, {
          opacity: 0.1,
          duration: 0.8,
          ease: "power2.inOut",
        }, 0.2);

        // 2. Progress 25% - 55%: Shrink media card, change background to cream, add border radius & shadow
        tl.to(stickyRef.current, {
          backgroundColor: "#F5F2EA",
          duration: 1.2,
          ease: "power2.inOut",
        }, 0.4)
        .to(mediaWrapperRef.current, {
          width: cardSize, // Final square card size
          height: cardSize,
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          borderRadius: "18px",
          boxShadow: "0 24px 60px rgba(42, 23, 18, 0.18)",
          duration: 1.2,
          ease: "power2.inOut",
        }, 0.4);

        // 3. Progress 55% - 75%: Media is scaled down, crossfade loops running (managed by React interval).
        tl.to(finalLayoutRef.current, {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.6,
        }, 1.2);

        // 4. Progress 75% - 100%: Headline slides in on left, description on right
        tl.to(headlineRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }, 1.6)
        .to(descRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }, 1.8);

      }, containerRef);

      return () => ctx.revert();
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-brand-dark">
      {/* Universal Sticky Pinned Section */}
      <div 
        ref={stickyRef} 
        className="relative w-full h-screen overflow-hidden flex items-center justify-center z-10"
      >
        {/* Scale Down Media Wrapper */}
        <div 
          ref={mediaWrapperRef} 
          className="absolute overflow-hidden z-20"
        >
          {MEDIA_ITEMS.map((src, idx) => (
            <img 
              key={idx}
              src={src}
              alt={`Texture ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              style={{ opacity: activeIdx === idx ? 1 : 0 }}
            />
          ))}
          {/* Dark Overlay for intro text readability */}
          <div 
            ref={overlayRef} 
            className="absolute inset-0 bg-brand-dark transition-opacity duration-500 pointer-events-none" 
          />
        </div>

        {/* Phase 1: Intro Text Elements */}
        <div 
          ref={introTextRef}
          className="relative z-30 text-center px-6 flex flex-col items-center gap-6 max-w-4xl pointer-events-none"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="h-[1px] w-12 bg-brand-accent/60" />
            <span className="ui-label text-brand-accent tracking-[0.6em] uppercase text-[11px] font-bold">
              TEKSTUR RASA
            </span>
          </div>
          <h2 className="text-white font-editorial text-4xl md:text-6xl lg:text-[72px] tracking-tighter leading-[1.0] drop-shadow-2xl">
            Saus kacang kental, siomay hangat, <br className="hidden lg:block" />
            <span className="italic text-brand-cream/90 font-normal lg:inline block mt-2 lg:mt-0">dan aroma dapur harian.</span>
          </h2>
        </div>

        {/* Phase 4: Symmetrical Final Layout */}
        <div 
          ref={finalLayoutRef}
          className="absolute inset-0 w-full h-full flex flex-col lg:grid lg:grid-cols-[1fr_320px_1fr] lg:gap-16 justify-between lg:justify-center items-center pointer-events-none z-30 py-[12vh] lg:py-0"
        >
          {/* Left Column / Top Row: Headline */}
          <div className="w-full flex lg:justify-end justify-center lg:pr-4 px-6 pointer-events-auto">
            <div className="max-w-[400px] text-center lg:text-left w-full">
              <h3 
                ref={headlineRef}
                className="text-[#2A1712] font-editorial text-[38px] lg:text-[54px] leading-[1.0] tracking-tight"
              >
                Terinspirasi dari <br />
                <span className="italic text-brand-accent font-normal">tekstur rasa</span>
              </h3>
            </div>
          </div>

          {/* Center Column: Empty Spacer of same width as scaled media wrapper (320px) */}
          <div className="hidden lg:block w-[320px] shrink-0 h-[320px] pointer-events-none" />

          {/* Right Column / Bottom Row: Narrative Description & CTA */}
          <div className="w-full flex lg:justify-start justify-center lg:pl-4 px-6 pointer-events-auto">
            <div 
              ref={descRef}
              className="max-w-[400px] flex flex-col gap-6 text-center lg:text-left items-center lg:items-start w-full"
            >
              <p className="text-[#3A1712]/80 font-body text-[14px] lg:text-[15px] leading-relaxed">
                Dari tekstur saus kacang yang kental sangrai hingga siomay sapi hangat yang dikukus perlahan, setiap detail dirancang untuk mendekatkan cita rasa warisan autentik ke hati Anda.
              </p>
              <div>
                <a 
                  href="#foods" 
                  className="inline-flex items-center gap-2 group text-brand-accent font-body font-bold text-xs uppercase tracking-widest hover:text-[#2A1712] transition-colors"
                >
                  Lihat Menu
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacroTexture;
