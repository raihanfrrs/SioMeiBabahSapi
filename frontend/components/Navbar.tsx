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
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
      isScrolled ? "bg-brand-cream/95 backdrop-blur-md py-5 shadow-sm" : "py-8 md:py-12"
    }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className={`text-3xl md:text-4xl font-editorial font-medium tracking-tight transition-colors duration-500 ${
            isScrolled ? "text-brand-dark" : "text-white"
          }`}
        >
          babah sapi
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-colors duration-500 ${
                isScrolled ? "text-brand-dark/70 hover:text-brand-dark" : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <Link
            href="/#episode"
            className={`border px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${
              isScrolled 
                ? "border-brand-dark/20 text-brand-dark hover:bg-brand-dark hover:text-brand-cream" 
                : "border-white/20 text-white hover:bg-white hover:text-brand-dark"
            }`}
          >
            Watch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden focus:outline-none flex flex-col gap-1.5 transition-colors duration-500 ${
            isScrolled ? "text-brand-dark" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`h-[1.5px] w-8 bg-current transition-transform duration-500 ${isMobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""}`} />
          <div className={`h-[1.5px] w-8 bg-current transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
          <div className={`h-[1.5px] w-8 bg-current transition-transform duration-500 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-brand-cream z-[90] flex flex-col p-8 pt-32 lg:hidden"
          >
            <div className="flex flex-col space-y-10">
              {siteContent.navigation.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  key={item.label}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl md:text-7xl font-editorial font-medium text-brand-dark hover:italic transition-all"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto pb-12"
            >
              <Link
                href="/#episode"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center border border-brand-dark py-6 text-xs font-bold uppercase tracking-[0.4em] text-brand-dark"
              >
                Watch Episode
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
