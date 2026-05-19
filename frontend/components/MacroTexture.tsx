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
  // Desktop-specific refs
  const headlineDesktopRef = useRef<HTMLHeadingElement>(null);
  const descDesktopRef = useRef<HTMLDivElement>(null);
  // Mobile-specific refs
  const headlineMobileRef = useRef<HTMLHeadingElement>(null);
  const descMobileRef = useRef<HTMLDivElement>(null);
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
        if (isDesktop) {
          gsap.set(headlineDesktopRef.current, { opacity: 0, y: 20 });
          gsap.set(descDesktopRef.current, { opacity: 0, y: 20 });
        } else {
          gsap.set(headlineMobileRef.current, { opacity: 0, y: 15 });
          gsap.set(descMobileRef.current, { opacity: 0, y: 15 });
        }

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

        // 4. Progress 75% - 100%: Headline slides in, description fades in
        tl.to(isDesktop ? headlineDesktopRef.current : headlineMobileRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }, 1.6)
        .to(isDesktop ? descDesktopRef.current : descMobileRef.current, {
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
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ 
                opacity: activeIdx === idx ? 1 : 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
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

        {/* Phase 4: Final Layout - Desktop: Savor-style asymmetric | Mobile: stacked column */}
        <div 
          ref={finalLayoutRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-30"
        >
          {/* ── DESKTOP LAYOUT (lg+): Savor-style ── */}

          {/* Headline Line 1: "Terinspirasi dari" — BELOW the card, right-aligned to card's left edge */}
          <div 
            className="hidden lg:block absolute pointer-events-auto"
            style={{ 
              top: "calc(50% + 100px)",
              left: "300px",
              right: "calc(50% + 175px)",
              textAlign: "right"
            }}
          >
            <span 
              ref={headlineDesktopRef}
              className="text-[#2A1712] font-editorial tracking-tighter leading-[1.0] inline-block"
              style={{ fontSize: "clamp(36px, 3.8vw, 62px)", whiteSpace: "nowrap" }}
            >
              Terinspirasi dari
            </span>
          </div>

          {/* Headline Line 2: "tekstur rasa" — one line BELOW "Terinspirasi dari", left-aligned with card's left edge */}
          <div 
            className="hidden lg:block absolute pointer-events-auto"
            style={{ 
              top: "calc(50% + 160px)",
              left: "calc(50% - 160px)"
            }}
          >
            <span 
              className="italic text-brand-accent font-editorial font-normal tracking-tighter leading-[1.0] block"
              style={{ fontSize: "clamp(36px, 3.8vw, 62px)", whiteSpace: "nowrap" }}
            >
              tekstur rasa
            </span>
          </div>

          {/* Description + CTA: snapped immediately to the right of the card, at card's upper-center */}
          <div 
            ref={descDesktopRef}
            className="hidden lg:block absolute pointer-events-auto"
            style={{ 
              left: "calc(50% + 175px)",
              top: "calc(50% - 60px)"
            }}
          >
            <div className="max-w-[240px] flex flex-col gap-4 text-left">
              <p className="text-[#3A1712]/70 font-body text-[13px] leading-relaxed">
                Dari tekstur saus kacang yang kental sangrai hingga siomay sapi hangat yang dikukus perlahan, setiap detail dirancang untuk mendekatkan cita rasa warisan autentik ke hati Anda.
              </p>
              <a 
                href="#foods" 
                className="inline-flex items-center gap-2 group text-brand-accent font-body font-bold text-[11px] uppercase tracking-widest hover:text-[#2A1712] transition-colors"
              >
                Lihat Menu
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* ── MOBILE/TABLET LAYOUT (<lg): stacked column around card ── */}
          <div className="lg:hidden absolute inset-0 flex flex-col items-center justify-center gap-[340px] pointer-events-auto">
            {/* Top: Headline */}
            <div className="w-full px-6 text-center">
              <h3 
                ref={headlineMobileRef}
                className="text-[#2A1712] font-editorial text-[38px] leading-[1.0] tracking-tight"
              >
                Terinspirasi dari <br />
                <span className="italic text-brand-accent font-normal">tekstur rasa</span>
              </h3>
            </div>

            {/* Bottom: Description + CTA */}
            <div 
              ref={descMobileRef}
              className="w-full px-6 flex flex-col gap-5 text-center items-center"
            >
              <p className="text-[#3A1712]/80 font-body text-[14px] leading-relaxed">
                Dari tekstur saus kacang yang kental sangrai hingga siomay sapi hangat yang dikukus perlahan, setiap detail dirancang untuk mendekatkan cita rasa warisan autentik ke hati Anda.
              </p>
              <a 
                href="#foods" 
                className="inline-flex items-center gap-2 text-brand-accent font-body font-bold text-xs uppercase tracking-widest"
              >
                Lihat Menu
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacroTexture;
