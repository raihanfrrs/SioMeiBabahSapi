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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-cream/80 backdrop-blur-md py-4 border-b border-brand-peanut/10" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-editorial font-bold tracking-tight text-brand-dark">
          SIO MEI BABAH SAPI<span className="text-brand-peanut">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="ui-label text-brand-dark/60 hover:text-brand-peanut transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="bg-brand-brown text-brand-cream px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-peanut transition-all duration-300 shadow-lg"
          >
            Pesan Sekarang
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-cream z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {siteContent.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-editorial font-bold text-brand-dark hover:text-brand-peanut"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-brown text-brand-cream px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest shadow-xl"
            >
              Pesan Sekarang
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
