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
        { y: 150, opacity: 0 },
        {
          y: 0, 
          opacity: 1, 
          duration: 2, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-brand-dark text-brand-cream pt-24 md:pt-40 overflow-hidden relative">
      
      {/* Top Section */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 mb-32 md:mb-48">
          
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <h3 className="text-3xl font-editorial tracking-tight">Babah Sapi</h3>
            <p className="text-brand-cream/60 text-sm md:text-base leading-relaxed max-w-[300px]">
              {footer.statement}
            </p>
            <div className="flex gap-8 mt-4">
              {footer.social.map((link, idx) => (
                <a key={idx} href={link.href} className="group relative text-xs font-bold uppercase tracking-[0.2em] transition-opacity">
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h4 className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Navigation</h4>
            <div className="flex flex-col space-y-4">
              {footer.navigation.map((link, idx) => (
                <Link key={idx} href={`/#${link.toLowerCase()}`} className="text-brand-cream/80 text-xl font-editorial hover:italic hover:text-brand-cream transition-all">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <h4 className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Journal</h4>
            <p className="text-brand-cream/60 text-sm leading-relaxed max-w-[350px]">
              Dapatkan pembaruan terbaru tentang menu baru dan cerita dari dapur kami.
            </p>
            <form className="flex w-full max-w-[400px] border-b border-brand-cream/20 pb-4 mt-4 group">
              <input 
                type="email" 
                placeholder="Join the mailing list" 
                className="bg-transparent w-full outline-none text-brand-cream placeholder-brand-cream/30 text-sm font-medium"
              />
              <button className="text-brand-cream text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Giant Logo Section */}
      <div className="w-full flex flex-col items-center relative px-6">
        <h1 className="footer-logo text-[22vw] leading-[0.7] font-editorial text-brand-cream/5 tracking-tighter w-full text-center whitespace-nowrap select-none pointer-events-none mb-[-2vw]">
          babah sapi
        </h1>
        
        {/* Absolute Copyright Overlay */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-10 gap-6 border-t border-brand-cream/5 z-10">
          <p className="text-brand-cream/30 text-[10px] font-bold uppercase tracking-widest">
            {footer.copyright}
          </p>
          <div className="flex gap-8">
            {footer.legal.map((item, idx) => (
              <a key={idx} href="#" className="text-brand-cream/30 text-[10px] font-bold uppercase tracking-widest hover:text-brand-cream transition-colors">
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
