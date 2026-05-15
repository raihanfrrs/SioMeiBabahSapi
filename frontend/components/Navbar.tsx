"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { Menu, X } from "lucide-react";

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
    <nav className="fixed top-0 left-0 w-full z-50 py-6 md:py-10 flex justify-center">
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-editorial font-medium tracking-tight text-brand-dark">
          babah sapi
        </Link>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] font-medium uppercase tracking-[0.1em] text-brand-dark/70 hover:text-brand-dark transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Action */}
        <div className="hidden md:block">
          <Link
            href="/#episode"
            className="border border-brand-dark/20 px-6 py-2.5 rounded-sm text-[10px] font-medium uppercase tracking-widest hover:bg-brand-dark hover:text-brand-cream transition-all duration-300"
          >
            Watch Episode
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-cream z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {siteContent.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-editorial font-medium text-brand-dark hover:text-brand-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#episode"
              onClick={() => setIsMobileMenuOpen(false)}
              className="border border-brand-dark px-10 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Watch Episode
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
