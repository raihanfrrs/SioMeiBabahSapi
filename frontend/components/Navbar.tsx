"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-1000 ${
      isScrolled 
        ? "bg-[#f4eadc]/95 backdrop-blur-md py-5 shadow-sm border-b border-[#24110b]/10" 
        : "bg-transparent py-10 md:py-16 border-transparent"
    }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className={`text-3xl md:text-5xl font-editorial tracking-tighter transition-all duration-1000 ${
            isScrolled ? "text-[#24110b] scale-90" : "text-white scale-100"
          }`}
        >
          babah sapi
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`ui-label text-[10px] tracking-[0.4em] transition-colors duration-700 ${
                isScrolled ? "text-[#24110b]/80 hover:text-[#24110b]" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <Link
            href="/#episode"
            className={`group relative overflow-hidden border px-10 py-3 rounded-sm text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-700 ${
              isScrolled 
                ? "border-[#24110b]/20 text-[#24110b] hover:border-[#24110b]" 
                : "border-white/20 text-white hover:border-white"
            }`}
          >
            <span className="relative z-10">Watch</span>
            <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ${isScrolled ? "bg-[#24110b]" : "bg-white"}`} />
            <span className={`absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-700 font-bold z-20 ${isScrolled ? "text-[#f4eadc]" : "text-[#24110b]"}`}>Watch</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden focus:outline-none flex flex-col gap-2 transition-colors duration-700 ${
            isScrolled ? "text-[#24110b]" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`h-[1px] w-8 bg-current transition-transform duration-700 ${isMobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
          <div className={`h-[1px] w-6 ml-auto bg-current transition-opacity duration-700 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
          <div className={`h-[1px] w-8 bg-current transition-transform duration-700 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-brand-cream z-[90] flex flex-col p-10 pt-40 lg:hidden"
          >
            <div className="flex flex-col space-y-12">
              {siteContent.navigation.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  key={item.label}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-6xl md:text-8xl font-editorial text-brand-dark hover:italic hover:text-brand-accent transition-all leading-none tracking-tighter"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-auto pb-12 flex flex-col gap-12"
            >
              <div className="h-[1px] w-full bg-brand-dark/10" />
              <Link
                href="/#episode"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-premium-dark w-full"
              >
                Watch Film
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
