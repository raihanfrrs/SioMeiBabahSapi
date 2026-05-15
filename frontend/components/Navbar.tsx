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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center ${
      isScrolled ? "bg-brand-cream/80 backdrop-blur-lg py-4 shadow-sm" : "py-6 md:py-10"
    }`}>
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-3xl font-editorial font-medium tracking-tight text-brand-dark">
          babah sapi
        </Link>

        {/* Desktop Menu - Centered */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-dark/60 hover:text-brand-dark transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Action */}
        <div className="hidden md:block">
          <Link
            href="/#episode"
            className="border border-brand-dark/20 px-6 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-brand-cream transition-all duration-300"
          >
            Watch Episode
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-brand-dark focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-cream z-40 flex flex-col p-10 lg:hidden"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-xl font-editorial font-medium text-brand-dark">babah sapi</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-8">
              {siteContent.navigation.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  key={item.label}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-editorial font-medium text-brand-dark hover:italic transition-all"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-10">
              <Link
                href="/#episode"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center border border-brand-dark px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em]"
              >
                Watch Episode
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
