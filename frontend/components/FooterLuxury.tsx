"use client";

import React, { useRef } from "react";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gloock } from "next/font/google";

const gloock = Gloock({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloock",
});

const FooterLuxury = () => {
  const { footer } = siteContent;
  const footerRef = useRef<HTMLElement>(null);

  const brandText = "babah sapi";

  // Stagger Animation Variants (No 'y' movement, pure fade & blur)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.055
      }
    }
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  return (
    <footer 
      ref={footerRef} 
      id="footer"
      data-nav-theme="light"
      className="bg-[#f3eadc] text-[#4a0907] overflow-hidden w-full flex flex-col justify-between"
      style={{ minHeight: "100vh" }}
    >
      {/* Centered Container wrapper - exactly centered, Max Width 1280px */}
      <div 
        className="w-full flex-1 flex flex-col justify-between px-6 md:px-10 lg:px-16"
        style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
      >
        
        {/* Top Area: Grid Cols-12 (Exact Savor Styles - Centered, No Uppercase Labels) */}
        <div className="grid grid-cols-12 gap-12 pt-20 md:pt-24 lg:pt-28">
          
          {/* Column 1: Navigation Links (col-span-3) */}
          <div className="col-span-12 md:col-span-3 flex flex-col items-start">
            <div className="flex flex-col space-y-2 text-sm md:text-base leading-relaxed font-sans text-[#4a0907]">
              {["Home", "Proses", "Menu", "Kualitas", "Misi", "Jurnal", "Kontak"].map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link === "Home" ? "/" : `/#${link.toLowerCase()}`} 
                  className="text-[#4a0907] hover:opacity-60 transition-all duration-300 block font-medium"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Social Links (col-span-3) */}
          <div className="col-span-12 md:col-span-3 flex flex-col items-start">
            <div className="flex flex-col space-y-2 text-sm md:text-base leading-relaxed font-sans text-[#4a0907]">
              {footer.social.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a0907] hover:opacity-60 transition-all duration-300 block font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Newsletter CTA (col-span-5 col-start-8) */}
          <div className="col-span-12 md:col-span-5 lg:col-start-8 flex flex-col items-start">
            <h4 className="font-sans text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-[#4a0907] max-w-[460px] tracking-tight">
              Dapatkan kabar menu musiman<br />dan cerita dapur Babah Sapi.
            </h4>
            
            <a 
              href="/#contact" 
              className="mt-8 inline-flex items-center justify-center rounded-md bg-[#4a0907] text-sm font-medium text-[#f3eadc] transition hover:opacity-85 shadow-sm"
              style={{ padding: "16px 32px", fontSize: "14px", borderRadius: "6px" }}
            >
              Gabung — Sekarang
            </a>
          </div>

        </div>

        {/* Middle/Bottom Area: Super Large Typographic Brand Title with Stagger Animation */}
        <div className="mt-auto mb-6 md:mb-8 w-full overflow-visible flex justify-center items-center pointer-events-none select-none">
          
          {/* Mobile Stacking Version */}
          <motion.h2 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className={`${gloock.className} lg:hidden text-[#4a0907] font-normal text-[20vw] md:text-[17vw] lg:text-[15vw] leading-[0.78] tracking-[-0.06em] text-center flex flex-col items-center w-full`}
          >
            <span className="flex">
              {"babah".split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants} 
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="flex">
              {"sapi".split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants} 
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h2>

          {/* Desktop Single Line Version */}
          <motion.h2 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className={`${gloock.className} hidden lg:block w-full text-center text-[#4a0907] font-normal text-[12vw] md:text-[11.5vw] lg:text-[11vw] leading-none tracking-[-0.055em] whitespace-nowrap overflow-visible`}
          >
            {brandText.split("").map((char, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants} 
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

        </div>

        {/* Bottom Bar: Legal / Copyright (Natural Flow-based Placement - Close to Wordmark) */}
        <div className="border-t border-[#4a0907]/10 py-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-sm tracking-normal normal-case text-[#4a0907] font-medium w-full">
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-60 transition-opacity duration-300">Press Kit</a>
            <a href="#" className="hover:opacity-60 transition-opacity duration-300">Kebijakan Privasi</a>
            <a href="#" className="hover:opacity-60 transition-opacity duration-300">Syarat & Ketentuan</a>
          </div>
          <a href="https://wa.me/628123456789" className="hover:opacity-60 transition-opacity duration-300">hello@babahsapi.com</a>
          <p>© Babah Sapi 2026</p>
        </div>

      </div>
    </footer>
  );
};

export default FooterLuxury;
