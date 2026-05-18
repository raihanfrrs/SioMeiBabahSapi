"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const localVideos = [
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mp4",
  "/videos/hero-4.mp4",
];

const cdnVideos = [
  "https://player.vimeo.com/external/435674703.sd.mp4?s=7fdf21ed7e96b1b22e1b12b596f2e825a07c1328&profile_id=165&oauth2_token_id=57447761",
  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c02cba73e1dd1d0fd2e70b18c2424b34&profile_id=165&oauth2_token_id=57447761",
  "https://player.vimeo.com/external/430023405.sd.mp4?s=d0046522c09c2ef361955b23d902d207f2bd5f4a&profile_id=165&oauth2_token_id=57447761",
  "https://player.vimeo.com/external/554988775.sd.mp4?s=08ab066d8b9d311fa5c4d0a1b65e23cc28e3b5e4&profile_id=165&oauth2_token_id=57447761",
];

const activeVideos = localVideos;

const Hero = () => {
  const { hero } = siteContent;
  const containerRef = useRef<HTMLElement>(null);

  // Video Carousel State
  const [currentIdx, setCurrentIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState<number | null>(null);
  const [fadeNext, setFadeNext] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // GSAP Pinning
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Video Carousel Interval
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentIdx + 1) % activeVideos.length;
      setNextIdx(next);
      setFadeNext(true);

      const timer = setTimeout(() => {
        setCurrentIdx(next);
        setNextIdx(null);
        setFadeNext(false);
      }, 1200); // 1200ms crossfade transition duration

      return () => clearTimeout(timer);
    }, 6000); // Rotate video every 6 seconds

    return () => clearInterval(interval);
  }, [currentIdx, activeVideos.length]);

  return (
    <section 
      ref={containerRef} 
      id="hero"
      data-nav-theme="dark"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white flex justify-center"
    >
      
      {/* --- BACKGROUND VIDEO CAROUSEL WITH IMAGE FALLBACK --- */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        
        {/* Ground Fallback Image (always underneath) */}
        <img 
          src={hero.imagePlaceholder} 
          alt="Siomay Babah Sapi Background" 
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.4] scale-100"
          loading="eager"
        />

        {/* Video Layer 1: Current Active Video */}
        <video
          key={`current-${currentIdx}`}
          src={activeVideos[currentIdx]}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
        />

        {/* Video Layer 2: Next Video (Fading In above Layer 1) */}
        {nextIdx !== null && (
          <video
            key={`next-${nextIdx}`}
            src={activeVideos[nextIdx]}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover brightness-[0.55] transition-opacity ease-out`}
            style={{ 
              opacity: fadeNext ? 1 : 0,
              transitionDuration: "1200ms"
            }}
          />
        )}

        {/* Refined Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />
        
        {/* Bottom Left radial focus gradient to ensure extreme text legibility */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(0,0,0,0.5),transparent_55%)] pointer-events-none" />
      </div>

      {/* --- ABSOLUTE HEADER NAVIGATION (Savor-Style) --- */}
      <header className="absolute top-0 left-0 right-0 z-30 hero-navbar-forced select-none w-full flex justify-center">
        <div 
          className="px-6 md:px-10 lg:px-16 flex items-center justify-between w-full"
          style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="font-editorial text-white text-4xl md:text-5xl lg:text-6xl leading-none tracking-[-0.05em] hover:opacity-90 transition-opacity"
          >
            babah sapi
          </Link>
 
          {/* Desktop Navigation Links (Centered bounds layout) */}
          <nav className="hidden lg:flex items-center gap-10 font-sans text-base font-semibold text-white normal-case tracking-normal pt-4">
            {siteContent.navigation.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="transition-all duration-500 ease-out text-white hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </nav>
 
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-white font-sans text-base font-semibold hover:opacity-75 transition-opacity pt-2"
          >
            Menu
          </button>
        </div>
      </header>

      {/* --- CONTENT CONTAINER (Savor-Style Grid - Bottom Aligned with Forced safe padding) --- */}
      <div 
        className="relative z-20 flex min-h-screen w-full flex-col justify-end px-6 md:px-10 lg:px-16 hero-content-forced pointer-events-none"
        style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
      >
        
        <div className="grid grid-cols-12 items-end gap-8 w-full pointer-events-auto">
          
          {/* Left Column: Headline (col-span-12 lg:col-span-7) */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-start">
            <motion.h1 
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-editorial text-white text-[15vw] sm:text-[12vw] md:text-[9.5vw] lg:text-[7.8vw] leading-[0.82] tracking-[-0.06em] font-normal text-left"
            >
              Siomay sapi<br />
              resep<br />
              warisan
            </motion.h1>
          </div>

          {/* Right Column: Subtitle & Large CTA Button (col-span-12 lg:col-span-4 lg:col-start-9) */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-start w-full"
            >
              <p className="font-sans text-lg md:text-xl font-semibold leading-snug text-white max-w-[280px] text-left">
                Gurih, lembut,<br />
                dan bumbu kacang autentik.
              </p>

              <Link
                href="/#menu"
                className="hero-premium-btn group"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white flex items-center gap-3">
                  Pesan Sekarang
                  <span className="transform transition-transform duration-500 group-hover:translate-x-2">→</span>
                </span>
                <span className="absolute inset-0 bg-[#4a0907] transform origin-left scale-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:scale-x-100" />
              </Link>
            </motion.div>
          </div>

        </div>

      </div>

      {/* --- LUXURIOUS FULL-SCREEN MOBILE OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[10000] bg-black/85 flex flex-col p-10 pt-32 lg:hidden"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white font-sans text-lg font-medium hover:opacity-75 transition-opacity"
            >
              Tutup
            </button>

            {/* Menu Links */}
            <div className="flex flex-col space-y-8 mt-12">
              {["Proses", "Menu", "Kualitas", "Misi", "Jurnal", "Kontak"].map((link, idx) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                >
                  <Link 
                    href={`/#${link.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-editorial text-white text-5xl hover:opacity-70 transition-opacity"
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Hero;
