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

  const isLight = navTheme === "light";
  const showNavbar = isVisible && !isFooterVisible && isScrolled;

  return (
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#f4eadc] z-[998] flex flex-col p-10 pt-40 lg:hidden"
          >
            <div className="flex flex-col space-y-12">
              {siteContent.navigation.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  key={item.label}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-6xl md:text-8xl font-editorial text-[#24110b] hover:italic hover:text-brand-accent transition-all leading-none tracking-tighter"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-auto pb-12 flex flex-col gap-12"
            >
              <div className="h-[1px] w-full bg-[#24110b]/10" />
              <Link
                href="/#menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-[#24110b] text-[#f4eadc] px-8 py-5 text-sm font-medium tracking-[0.08em] uppercase shadow-lg"
              >
                Pesan Sekarang
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
