"use client";

import React, { useRef, useEffect } from "react";
import { siteContent } from "@/data/siteContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import ProtectedBackgroundImage from "@/components/ProtectedBackgroundImage";

const ClosingCTA = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { closingCta } = siteContent;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.to(".closing-bg", {
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
        
        gsap.fromTo(".closing-item",
          { y: 15, opacity: 0, filter: "blur(4px)" },
          {
            y: 0, 
            opacity: 1, 
            filter: "blur(0px)",
            duration: 0.8, 
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".closing-content",
              start: "top 80%",
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      data-nav-theme="dark"
      className="relative w-full overflow-hidden flex items-center justify-center"
      onContextMenu={(e) => e.preventDefault()}
      style={{
        minHeight: "clamp(78svh, 85vh, 90vh)",
        paddingTop: "clamp(72px, 10vw, 120px)",
        paddingBottom: "clamp(72px, 10vw, 120px)"
      }}
    >
      <div className="absolute inset-0 z-0 bg-[#1a0b08]">
        <ProtectedBackgroundImage 
          src={closingCta.image} 
          alt="Closing Food Visual" 
          className="closing-bg w-full h-full"
          style={{ opacity: 0.95 }}
        />
        {/* Layer 1: Linear gradient overall darkening */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(rgba(0,0,0,0.38), rgba(0,0,0,0.38))" }} />
        {/* Layer 2: Radial gradient at center bottom to darken text area without killing edges */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center 65%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 65%)" }} />
      </div>

      <div 
        className="closing-content relative z-10 flex flex-col items-center text-center w-full mx-auto"
        style={{ 
          maxWidth: "980px",
          paddingLeft: "clamp(24px, 4vw, 32px)",
          paddingRight: "clamp(24px, 4vw, 32px)"
        }}
      >
        {/* Decor & Eyebrow */}
        <div className="closing-item flex flex-col items-center" style={{ marginBottom: "22px" }}>
          {/* Subtle line + dot decor */}
          <div className="flex flex-col items-center opacity-45 mb-4">
            <div className="h-8 w-[1px] bg-[#F4E9D8]" />
            <div className="h-[3px] w-[3px] rounded-full bg-[#F4E9D8] mt-1.5" />
          </div>
          <span 
            className="text-[#F4E9D8] uppercase font-bold"
            style={{ fontSize: "11px", letterSpacing: "0.3em" }}
          >
            DIBUAT HARIAN • DIKIRIM HANGAT
          </span>
        </div>

        {/* Headline */}
        <h2 
          className="closing-item font-editorial text-[#F4E9D8] drop-shadow-xl"
          style={{ 
            fontSize: "clamp(46px, 9vw, 128px)", 
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            maxWidth: "1000px",
            marginBottom: "28px"
          }}
        >
          Sio Mei hangat, <br />
          <span className="italic opacity-90">siap dipesan hari ini</span>
        </h2>
        
        {/* Subheadline */}
        <p 
          className="closing-item font-sans text-[#F4E9D8]/90 font-medium mx-auto drop-shadow-md"
          style={{ 
            fontSize: "clamp(15px, 2vw, 20px)", 
            lineHeight: 1.6,
            maxWidth: "clamp(340px, 80%, 620px)",
            marginBottom: "32px"
          }}
        >
          Siomay sapi premium handmade dari Babah Sapi, dibuat harian dan dikirim hangat ke lokasi Anda.
        </p>
        
        {/* CTA Button */}
        <div className="closing-item flex w-full justify-center" style={{ marginBottom: "24px" }}>
          <Link
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center bg-[#F4E9D8] text-[#5A0B08] font-bold transition-all duration-300 hover:bg-white hover:-translate-y-[2px] shadow-lg hover:shadow-xl w-full max-w-[320px] md:max-w-none md:w-auto"
            style={{ 
              minHeight: "clamp(56px, 6vw, 64px)", 
              padding: "0 clamp(36px, 4vw, 48px)", 
              borderRadius: "12px",
              fontSize: "16px",
              letterSpacing: "normal",
              gap: "10px"
            }}
          >
            Pesan Sio Mei via WhatsApp
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </div>

        {/* Trust Signals */}
        <div 
          className="closing-item flex flex-wrap items-center justify-center text-[#F4E9D8]/85 font-sans font-medium mx-auto max-w-[330px] md:max-w-none"
          style={{ 
            fontSize: "clamp(13px, 1.5vw, 14px)", 
            gap: "8px 24px",
          }}
        >
          <span>Dibuat terbatas setiap hari</span>
          <span className="opacity-50 text-[10px] hidden md:inline-block">•</span>
          <span>Tanpa pengawet</span>
          <span className="opacity-50 text-[10px] hidden md:inline-block">•</span>
          <span>Pesan langsung via WhatsApp</span>
        </div>
      </div>
      
    </section>
  );
};

export default ClosingCTA;
