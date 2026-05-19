"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
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

  // Video Refs (double-buffering)
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  // Double-buffer Carousel State
  const [activeBuffer, setActiveBuffer] = useState<1 | 2>(1);
  const [video1Src, setVideo1Src] = useState(activeVideos[0]);
  const [video2Src, setVideo2Src] = useState(activeVideos[1]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'contain';
      document.body.style.touchAction = 'none';
      document.body.setAttribute('data-scroll', scrollY.toString());
    } else {
      const scrollY = document.body.getAttribute('data-scroll');
      if (scrollY !== null) {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.style.overscrollBehavior = '';
        document.body.style.touchAction = '';
        window.scrollTo(0, parseInt(scrollY || '0'));
        document.body.removeAttribute('data-scroll');
      }
    }
    return () => {
      const scrollY = document.body.getAttribute('data-scroll');
      if (scrollY !== null) {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.style.overscrollBehavior = '';
        document.body.style.touchAction = '';
        window.scrollTo(0, parseInt(scrollY || '0'));
        document.body.removeAttribute('data-scroll');
      }
    };
  }, [isMobileMenuOpen]);

  // Advance to next video when current video finishes playing
  // Double-buffer transition logic to prevent cuts/resets
  const handleVideoEnded = useCallback((bufferIndex: 1 | 2) => {
    if (isTransitioning) return;
    if (bufferIndex !== activeBuffer) return; // Only listen to active video

    setIsTransitioning(true);
    const nextIdx = (currentIdx + 1) % activeVideos.length;

    if (activeBuffer === 1) {
      // Buffer 1 finished, play Buffer 2 and transition to it
      if (video2Ref.current) {
        video2Ref.current.play().catch(() => {});
      }
      setActiveBuffer(2);
      setCurrentIdx(nextIdx);

      setTimeout(() => {
        if (video1Ref.current) {
          video1Ref.current.pause();
        }
        // Load next next video into Buffer 1
        const nextNextIdx = (nextIdx + 1) % activeVideos.length;
        setVideo1Src(activeVideos[nextNextIdx]);
        setIsTransitioning(false);
      }, 1200);
    } else {
      // Buffer 2 finished, play Buffer 1 and transition to it
      if (video1Ref.current) {
        video1Ref.current.play().catch(() => {});
      }
      setActiveBuffer(1);
      setCurrentIdx(nextIdx);

      setTimeout(() => {
        if (video2Ref.current) {
          video2Ref.current.pause();
        }
        // Load next next video into Buffer 2
        const nextNextIdx = (nextIdx + 1) % activeVideos.length;
        setVideo2Src(activeVideos[nextNextIdx]);
        setIsTransitioning(false);
      }, 1200);
    }
  }, [activeBuffer, currentIdx, isTransitioning]);

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
          className="absolute inset-0 w-full h-full hero-bg-media brightness-[0.4] scale-100"
          loading="eager"
        />

        {/* Video Buffer 1 */}
        <video
          ref={video1Ref}
          src={video1Src}
          autoPlay={activeBuffer === 1}
          muted
          playsInline
          preload="auto"
          onEnded={() => handleVideoEnded(1)}
          className="absolute inset-0 w-full h-full hero-bg-media brightness-[0.55] transition-opacity ease-out"
          style={{
            opacity: activeBuffer === 1 ? 1 : 0,
            transitionDuration: "1200ms",
            zIndex: activeBuffer === 1 ? 2 : 1
          }}
        />

        {/* Video Buffer 2 */}
        <video
          ref={video2Ref}
          src={video2Src}
          autoPlay={activeBuffer === 2}
          muted
          playsInline
          preload="auto"
          onEnded={() => handleVideoEnded(2)}
          className="absolute inset-0 w-full h-full hero-bg-media brightness-[0.55] transition-opacity ease-out"
          style={{
            opacity: activeBuffer === 2 ? 1 : 0,
            transitionDuration: "1200ms",
            zIndex: activeBuffer === 2 ? 2 : 1
          }}
        />

      </div>

      {/* Refined Luxury Multi-Stop Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient-overlay pointer-events-none z-10" />

      {/* --- ABSOLUTE HEADER NAVIGATION (Savor-Style) --- */}
      <header className="absolute top-0 left-0 right-0 z-30 select-none w-full flex justify-center">
        <div 
          className="hero-navbar-container flex items-center justify-between w-full"
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

      {/* --- CONTENT CONTAINER (Savor-Style Responsive Absolute Wrapper) --- */}
      <div 
        className="relative z-20 flex min-h-screen w-full flex-col justify-end hero-content-forced pointer-events-none"
        style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
      >
        
        <div className="hero-content-container pointer-events-auto">
          
          {/* Left Column: Headline (col-span-12 lg:col-span-7) */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-start w-full">
            <motion.h1 
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-editorial text-white hero-headline-responsive text-left"
            >
              <span className="block md:hidden">
                Siomay Sapi<br />
                Resep Warisan
              </span>
              <span className="hidden md:block">
                Siomay sapi<br />
                resep<br />
                warisan
              </span>
            </motion.h1>
          </div>

          {/* Right Column: Subtitle & Large CTA Button (col-span-12 lg:col-span-4 lg:col-start-9) */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col items-start w-full hero-subtitle-cta-block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-start w-full"
            >
              <p className="font-sans text-white text-left hero-subheadline-spacing">
                Gurih, lembut, dengan bumbu kacang autentik.
              </p>

              <Link
                href="/#menu"
                className="hero-premium-btn group"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#4a0907] flex items-center gap-3">
                  Pesan Sekarang
                  <span className="transform transition-transform duration-500 group-hover:translate-x-2">→</span>
                </span>
                <span className="absolute inset-0 bg-white transform origin-left scale-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:scale-x-100" />
              </Link>
            </motion.div>
          </div>

        </div>

      </div>

      {/* --- LUXURIOUS FULL-SCREEN MOBILE OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 overflow-hidden lg:hidden"
            style={{
              width: "100vw",
              height: "100dvh",
              zIndex: 9999,
              overscrollBehavior: "contain"
            }}
          >
            {/* Background Image Layer */}
            <motion.div 
              initial={{ scale: 1.03 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <img
                src="/assets/images/mobile-menu-bg.png"
                alt="Menu Background"
                className="absolute inset-0 w-full h-full"
                style={{ 
                  objectFit: 'cover', 
                  objectPosition: 'center right',
                  filter: 'blur(2px) brightness(0.8)' 
                }}
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, rgba(8, 5, 3, 0.92) 0%, rgba(8, 5, 3, 0.78) 48%, rgba(8, 5, 3, 0.55) 100%)"
                }}
              />
              <div className="absolute inset-0 bg-[rgba(8,5,3,0.68)] mix-blend-multiply" />
            </motion.div>

            {/* Content Container */}
            <div 
              className="relative z-10 w-full h-full mx-auto overflow-y-auto"
              style={{
                maxWidth: "100%",
                paddingTop: "calc(env(safe-area-inset-top) + 28px)",
                paddingBottom: "calc(env(safe-area-inset-bottom) + 24px)",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              <div 
                className="w-full h-full mx-auto flex flex-col"
                style={{
                  maxWidth: "860px",
                  paddingLeft: "clamp(24px, 6vw, 72px)",
                  paddingRight: "clamp(24px, 6vw, 72px)",
                }}
              >
                {/* Header */}
                <div className="flex justify-between items-start w-full">
                  <div className="flex flex-col">
                    <Link
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-editorial text-[#f7ead7]"
                      style={{ fontSize: "clamp(28px, 8vw, 42px)", lineHeight: 1 }}
                    >
                      babah sapi
                    </Link>
                    <span 
                      className="text-[#c99745] font-sans font-medium" 
                      style={{ fontSize: "9px", letterSpacing: "0.22em", marginTop: "6px" }}
                    >
                      PREMIUM BEEF, HONESTLY CRAFTED
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-[14px] text-[#f7ead7] hover:text-white transition-colors"
                  >
                    <span className="font-sans" style={{ fontSize: "clamp(16px, 4vw, 18px)" }}>Tutup</span>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d49a3a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "clamp(28px, 6vw, 34px)", height: "clamp(28px, 6vw, 34px)" }}>
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                {/* Navigation List */}
                <div 
                  className="w-full flex flex-col flex-1"
                  style={{ marginTop: "clamp(72px, 10vh, 120px)" }}
                >
                  {siteContent.navigation.map((item, i) => (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + (i * 0.07), duration: 0.4, ease: "easeOut" }}
                      key={item.label}
                      className="w-full flex flex-col"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="grid w-full transition-transform duration-300 ease-out hover:translate-x-1"
                        style={{
                          gridTemplateColumns: "38px 1fr",
                          alignItems: "baseline",
                          padding: "clamp(14px, 3vh, 18px) 0 clamp(16px, 3vh, 20px)"
                        }}
                      >
                        <span 
                          className="text-[#d49a3a] font-medium" 
                          style={{ fontSize: "16px", lineHeight: "normal", fontVariantNumeric: "tabular-nums" }}
                        >
                          {`0${i + 1}`}
                        </span>
                        <span 
                          className="font-editorial text-[#f7ead7] font-normal" 
                          style={{ 
                            fontSize: "clamp(42px, 13vw, 72px)", 
                            lineHeight: 0.95, 
                            letterSpacing: "-0.03em" 
                          }}
                        >
                          {item.label}
                        </span>
                      </Link>
                      {/* Inner Divider */}
                      <div className="w-full flex">
                        <div className="w-[38px] flex-shrink-0" />
                        <div className="flex-1 h-[1px]" style={{ background: "rgba(201, 151, 69, 0.32)" }} />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Area */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="flex justify-center items-center font-sans text-[#f7ead7]"
                  style={{ marginTop: "22px" }}
                >
                  <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "clamp(20px, 5vw, 24px)", height: "clamp(20px, 5vw, 24px)" }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span style={{ fontSize: "16px" }}>Instagram</span>
                  </a>
                  
                  {/* Subtle Separator */}
                  <div className="w-[1px] h-[14px] mx-[clamp(20px,5vw,28px)]" style={{ background: "rgba(201,151,69,0.4)" }} />

                  <a href="https://wa.me/628123456789" className="flex items-center gap-2 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "clamp(20px, 5vw, 24px)", height: "clamp(20px, 5vw, 24px)" }}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span style={{ fontSize: "16px" }}>WhatsApp</span>
                  </a>
                </motion.div>

                {/* Large CTA Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="w-full"
                  style={{ marginTop: "24px" }}
                >
                  <Link
                    href="https://wa.me/628123456789"
                    target="_blank"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between mx-auto text-[#fff4e8] transition-all duration-300 hover:brightness-110 shadow-lg"
                    style={{
                      width: "100%",
                      maxWidth: "clamp(340px, 70vw, 520px)",
                      height: "clamp(54px, 8vw, 84px)",
                      borderRadius: "clamp(18px, 3vw, 22px)",
                      background: "linear-gradient(135deg, #7a120d 0%, #a91f18 100%)",
                      border: "1px solid rgba(212, 154, 58, 0.8)",
                      paddingLeft: "clamp(26px, 4vw, 34px)",
                      paddingRight: "clamp(26px, 4vw, 34px)",
                    }}
                  >
                    <div className="flex items-center gap-[14px]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "clamp(24px, 5vw, 28px)", height: "clamp(24px, 5vw, 28px)" }}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <span className="font-editorial" style={{ fontSize: "clamp(18px, 5vw, 26px)", letterSpacing: "0.01em", paddingTop: "2px" }}>
                        Pesan via WhatsApp
                      </span>
                    </div>
                    <span className="font-light" style={{ fontSize: "clamp(20px, 5vw, 28px)" }}>→</span>
                  </Link>
                </motion.div>

                {/* Copyright */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="w-full text-center font-sans uppercase"
                  style={{
                    marginTop: "22px",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    color: "#c99745"
                  }}
                >
                  © 2026 BABAH SAPI. SEMUA HAK DILINDUNGI.
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Hero;
