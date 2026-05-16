"use client";

import React, { useRef, useEffect } from "react";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FooterLuxury = () => {
  const { footer } = siteContent;
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".footer-logo",
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.5, ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#E8DECF] pt-24 md:pt-40 px-6 md:px-12 lg:px-20 overflow-hidden flex flex-col justify-between min-h-[60vh]">
      
      {/* Top Section - Minimalist Links */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
        
        <div className="md:col-span-4 flex flex-col gap-6">
          <p className="text-[#32160f]/80 text-sm md:text-base leading-relaxed max-w-[280px]">
            {footer.statement}
          </p>
          <div className="flex gap-6 mt-4">
            {footer.social.map((link, idx) => (
              <a key={idx} href={link.href} className="text-[#32160f] font-semibold text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="text-[#32160f]/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Explore</h4>
          {footer.navigation.map((link, idx) => (
            <Link key={idx} href={`/#${link.toLowerCase()}`} className="text-[#32160f] text-lg font-editorial hover:italic transition-all">
              {link}
            </Link>
          ))}
        </div>

        <div className="md:col-span-4 flex flex-col gap-4 items-start md:items-end">
          <h4 className="text-[#32160f]/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Newsletter</h4>
          <p className="text-[#32160f]/80 text-sm mb-4 text-left md:text-right">Bergabung untuk mendapatkan penawaran khusus dan cerita di balik dapur kami.</p>
          <div className="flex w-full max-w-[280px] border-b border-[#32160f]/30 pb-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent w-full outline-none text-[#32160f] placeholder-[#32160f]/50 text-sm"
            />
            <button className="text-[#32160f] text-xs font-bold uppercase tracking-widest hover:opacity-70">
              Submit
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section - Giant Logo */}
      <div className="w-full flex flex-col items-center mt-auto relative">
        <h1 className="footer-logo text-[18vw] leading-[0.8] font-editorial text-[#32160f] tracking-tighter w-full text-center whitespace-nowrap overflow-hidden">
          babah sapi
        </h1>
        <div className="w-full flex justify-between items-center py-6 mt-4 border-t border-[#32160f]/10">
          <p className="text-[#32160f]/50 text-[10px] font-bold uppercase tracking-widest">
            {footer.copyright}
          </p>
          <div className="flex gap-4">
            {footer.legal.map((item, idx) => (
              <a key={idx} href="#" className="text-[#32160f]/50 text-[10px] font-bold uppercase tracking-widest hover:text-[#32160f]">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default FooterLuxury;
