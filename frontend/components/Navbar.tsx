"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
  const [navTheme, setNavTheme] = useState<"light" | "dark">("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footerElement = document.getElementById("footer");
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.02, // trigger early when footer enters the screen
      }
    );

    observer.observe(footerElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Bulletproof Footer Detection to prevent dark bar and PESAN button overlays
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        const rect = footerElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 10) {
          setIsFooterVisible(true);
        } else {
          setIsFooterVisible(false);
        }
      }

      // Deep Analysis Fix: Use elementsFromPoint to see THROUGH the navbar
      // and detect the theme of the section exactly at the navbar's position.
      const checkY = isScrolled ? 40 : 80; // Vertical center of navbar
      const elements = document.elementsFromPoint(window.innerWidth / 2, checkY);
      
      // Find the first element that is NOT part of the navbar
      const underlyingElement = elements.find(el => !el.closest("nav"));
      
      if (underlyingElement) {
        const section = underlyingElement.closest("[data-nav-theme]");
        if (section) {
          const theme = section.getAttribute("data-nav-theme") as "light" | "dark";
          if (theme && theme !== navTheme) {
            setNavTheme(theme);
          }
          // Hide navbar when user enters the footer
          const isFooter = section.tagName.toLowerCase() === "footer" || section.id === "footer";
          setIsVisible(!isFooter);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Use a small interval to ensure theme is always accurate even without scrolling (e.g. during animations)
    const intervalId = setInterval(handleScroll, 100);
    
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
    };
  }, [navTheme, isScrolled]);

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

  const isLight = navTheme === "light";
  const showNavbar = isVisible && !isFooterVisible && isScrolled;

  return (
    <>
    <nav className={`fixed top-0 left-0 w-full z-[10001] transition-all duration-700 ease-out hero-navbar-forced ${
      showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
    } ${
      isScrolled 
        ? isLight 
          ? "bg-[#f4eadc]/98 backdrop-blur-md py-0 lg:py-7 shadow-md border-b border-[#24110b]/10" 
          : "bg-black/50 backdrop-blur-md py-0 lg:py-7 border-b border-white/10"
        : "bg-transparent py-0 lg:py-16 border-transparent"
    }`}>
      <div 
        className="hero-navbar-container flex items-center justify-between w-full"
        style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* Logo - Left (Matches Hero.tsx exactly in font and styling) */}
        <Link 
          href="/" 
          className={`font-editorial transition-all duration-700 ease-out ${
            isLight ? "!text-[#24110b]" : "!text-white"
          } text-4xl md:text-5xl lg:text-6xl leading-none tracking-[-0.05em] hover:opacity-90`}
        >
          babah sapi
        </Link>
 
        {/* Desktop Menu - Right (Matches Hero.tsx exactly in font and layout placement) */}
        <nav className="hidden lg:flex items-center gap-10 font-sans text-base font-semibold normal-case tracking-normal pt-4">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-all duration-500 ease-out ${
                isLight 
                  ? "!text-[#24110b] hover:opacity-70" 
                  : "!text-white hover:opacity-70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
 
        {/* Mobile Menu Toggle - Right (Only visible on mobile/tablet) */}
        <button
          className={`lg:hidden focus:outline-none flex flex-col gap-2 transition-colors duration-500 ease-out ${
            isLight ? "!text-[#24110b]" : "!text-white"
          } pt-2`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`h-[1px] w-8 bg-current transition-transform duration-500 ${isMobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
          <div className={`h-[1px] w-6 ml-auto bg-current transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
          <div className={`h-[1px] w-8 bg-current transition-transform duration-500 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
        </button>
      </div>
    </nav>

      {/* Mobile Menu Overlay */}
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
    </>
  );
};

export default Navbar;
