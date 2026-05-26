"use client";

import React, { useRef } from "react";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Gloock } from "next/font/google";
import { generalOrderMessage, buildWhatsAppLink } from "@/utils/whatsapp";

const gloock = Gloock({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloock",
});

const FooterLuxury = () => {
  const { footer } = siteContent;
  const footerRef = useRef<HTMLElement>(null);

  const brandText = "babah sapi";

  // Logo animation variants (fade-in per letter, left-to-right, no translateY)
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      transform: "none"
    },
    visible: {
      opacity: 1,
      transform: "none",
      transition: {
        duration: 0.45,
        ease: "easeOut"
      }
    }
  };

  // Inline styles are used for critical layout parameters to guarantee they render
  // perfectly across all devices even if Tailwind's JIT compiler is cached/frozen.
  return (
    <footer 
      ref={footerRef} 
      id="footer"
      data-nav-theme="light"
      style={{ backgroundColor: "#F4EBDD", color: "#5A0906", overflowX: "hidden", width: "100%" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div 
        style={{ 
          maxWidth: "100%", 
          margin: "0 auto", 
          padding: "40px 24px 24px", 
          width: "100%" 
        }}
        className="md:max-w-[860px] md:px-[40px] md:pt-[72px] md:pb-[28px] xl:max-w-[1180px]"
      >
        
        {/* Top Footer Area */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-[48px] items-start w-full">
          
          {/* Mobile Grid Wrapper for Navigation & Socials */}
          <div 
            className="grid grid-cols-2 gap-[24px] w-full col-span-1 md:col-span-2 md:contents"
          >
            {/* Column 1: Navigation Links */}
            <div className="flex flex-col w-full">
              <h5 
                style={{ fontSize: "9px", letterSpacing: "0.18em", marginBottom: "10px", opacity: 0.65, fontWeight: 700 }}
                className="font-sans uppercase text-[#5A0906]"
              >
                Navigasi
              </h5>
              <div 
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
                className="text-[14px] md:text-[15px] leading-[1.65] font-sans font-medium text-left"
              >
                {siteContent.navigation.map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={item.href} 
                    onClick={(e) => {
                      if (item.href.startsWith("/#")) {
                        const targetId = item.href.substring(2);
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                          e.preventDefault();
                          targetElement.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    className="text-[#5A0906] hover:opacity-60 focus-visible:outline-none focus-visible:underline transition-opacity block w-fit"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Kontak */}
            <div className="flex flex-col w-full">
              <h5 
                style={{ fontSize: "9px", letterSpacing: "0.18em", marginBottom: "10px", opacity: 0.65, fontWeight: 700 }}
                className="font-sans uppercase text-[#5A0906]"
              >
                Kontak
              </h5>
              <div 
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
                className="text-[14px] md:text-[15px] leading-[1.65] font-sans font-medium text-left"
              >
                <a href={buildWhatsAppLink(generalOrderMessage())} target="_blank" rel="noopener noreferrer" className="text-[#5A0906] hover:opacity-60 transition-opacity">WhatsApp</a>
                <span className="text-[#5A0906]">Instagram: {footer.contact.instagram}</span>
                <span className="text-[#5A0906]">Email: {footer.contact.email}</span>
                <span className="text-[#5A0906]">Alamat: {footer.contact.address}</span>
              </div>
            </div>

          </div>

          {/* Column 3: Brand Statement */}
          <div 
            className="flex flex-col w-full md:col-span-1 md:items-start mt-[36px] md:mt-0"
          >
            <h5 
              className="hidden md:block font-sans uppercase text-[#5A0906]"
              style={{ fontSize: "9px", letterSpacing: "0.18em", marginBottom: "10px", opacity: 0.65, fontWeight: 700 }}
            >
              Tentang Kami
            </h5>
            <p className="text-[#5A0906]/80 font-sans text-sm text-left mb-4 max-w-[430px] leading-relaxed">
              {footer.brandStatement}
            </p>
          </div>

        </div>

        {/* Big Logo Area */}
        <div 
          className="flex flex-col justify-center items-center pointer-events-none select-none w-full"
          style={{ marginTop: "56px", marginBottom: "44px", overflow: "visible" }}
        >
          {/* Mobile Stacking Version */}
          <motion.h2 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className={`${gloock.className} md:hidden text-[#5A0906] text-center flex flex-col items-center w-full break-normal`}
            style={{ fontSize: "clamp(86px, 28vw, 150px)", lineHeight: 0.78, letterSpacing: "-0.045em" }}
          >
            <span className="flex">
              {"babah".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block motion-reduce:!opacity-100">
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="flex">
              {"sapi".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block motion-reduce:!opacity-100">
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h2>

          {/* Tablet/Desktop Single Line Version */}
          <motion.h2 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className={`${gloock.className} hidden md:flex flex-wrap justify-center text-[#5A0906] text-center w-full`}
            style={{ fontSize: "clamp(140px, 18vw, 260px)", lineHeight: 0.82, letterSpacing: "-0.06em" }}
          >
            {brandText.split("").map((char, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants} 
                className="inline-block motion-reduce:!opacity-100"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* Bottom Meta */}
        <div 
          className="text-[#5A0906] font-sans font-medium w-full"
          style={{ borderTop: "1px solid rgba(90, 9, 6, 0.18)", paddingTop: "18px", paddingBottom: "20px" }}
        >
          {/* Legal Links (Wrapped, Centered) */}
          <div 
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px 18px" }}
            className="md:justify-between md:items-center"
          >
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px 18px" }}>
              {footer.legal.map((item: string, idx: number) => (
                <a key={idx} href="#" className="hover:opacity-60 transition-opacity uppercase" style={{ fontSize: "10px", letterSpacing: "0.08em" }}>{item}</a>
              ))}
            </div>

            {/* Tablet/Desktop Only Side Meta */}
            <div className="hidden md:flex items-center gap-6">
              <a href={`mailto:${footer.contact.email}`} className="hover:opacity-60 transition-opacity uppercase" style={{ fontSize: "10px", letterSpacing: "0.08em" }}>
                {footer.contact.email}
              </a>
              <span className="uppercase" style={{ fontSize: "10px", letterSpacing: "0.08em" }}>{footer.copyright}</span>
            </div>
          </div>

          {/* Mobile Only Center Meta */}
          <div className="flex flex-col items-center md:hidden w-full text-center">
            <a 
              href={`mailto:${footer.contact.email}`} 
              className="hover:opacity-60 transition-opacity uppercase" 
              style={{ fontSize: "10px", letterSpacing: "0.08em", marginTop: "18px" }}
            >
              {footer.contact.email}
            </a>
            <span 
              className="uppercase" 
              style={{ fontSize: "10px", letterSpacing: "0.08em", marginTop: "10px" }}
            >
              {footer.copyright}
            </span>
          </div>
          
        </div>

      </div>
    </footer>
  );
};

export default FooterLuxury;
