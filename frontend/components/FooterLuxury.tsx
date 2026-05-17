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
          duration: 2.5, 
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
    <footer 
      ref={footerRef} 
      data-nav-theme="dark"
      className="bg-brand-dark text-brand-cream pt-32 md:pt-48 pb-10 overflow-hidden relative border-t border-[#2a140d]/20"
    >
      
      {/* Top Section */}
      <div className="container-custom relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-12 mb-32 md:mb-56">
          
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col gap-10">
            <h3 className="text-4xl md:text-5xl font-editorial tracking-tighter">babah sapi</h3>
            <p className="text-brand-cream/40 text-lg leading-relaxed max-w-[320px] font-medium">
              {footer.statement}
            </p>
            <div className="flex gap-10 mt-6">
              {footer.social.map((link, idx) => (
                <a key={idx} href={link.href} className="group relative text-xs font-bold uppercase tracking-[0.4em] transition-opacity">
                  <span className="relative z-10 group-hover:text-brand-accent transition-colors duration-500">{link.label}</span>
                  <div className="absolute bottom-[-8px] left-0 w-full h-[1px] bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-10 md:pl-12">
            <h4 className="ui-label text-brand-accent tracking-[0.5em] mb-4 uppercase text-[12px] font-bold">Explore</h4>
            <div className="flex flex-col space-y-6">
              {footer.navigation.map((link, idx) => (
                <Link key={idx} href={`/#${link.toLowerCase()}`} className="text-brand-cream/80 text-2xl md:text-3xl font-editorial hover:italic hover:text-brand-cream transition-all tracking-tight">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-5 flex flex-col gap-10">
            <h4 className="ui-label text-brand-accent tracking-[0.5em] mb-4 uppercase text-[12px] font-bold">The Journal</h4>
            <p className="text-brand-cream/40 text-lg leading-relaxed max-w-[380px] font-medium">
              Dapatkan pembaruan terbaru tentang menu musiman dan cerita dari dapur warisan kami.
            </p>
            <form className="flex w-full max-w-[450px] border-b-2 border-white/10 pb-8 mt-6 group focus-within:border-brand-accent transition-colors duration-700">
              <input 
                type="email" 
                placeholder="Join our mailing list" 
                className="bg-transparent w-full outline-none text-brand-cream placeholder-white/20 text-lg font-medium tracking-wide"
              />
              <button className="text-brand-cream text-xs font-bold uppercase tracking-[0.5em] hover:text-brand-accent transition-colors duration-500 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Giant Logo Section */}
      <div className="w-full flex flex-col items-center relative px-6">
        <h1 className="footer-logo text-[30vw] leading-[0.7] font-editorial text-white/[0.02] tracking-tighter w-full text-center whitespace-nowrap select-none pointer-events-none mb-[-2vw]">
          babah sapi
        </h1>
        
        {/* Absolute Copyright Overlay */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-20 gap-8 border-t border-white/5 z-10">
          <p className="ui-label text-[11px] text-white/20 font-bold uppercase tracking-[0.3em]">
            {footer.copyright}
          </p>
          <div className="flex gap-12">
            {footer.legal.map((item, idx) => (
              <a key={idx} href="#" className="ui-label text-[11px] text-white/20 font-bold uppercase tracking-[0.3em] hover:text-brand-accent transition-colors duration-500">
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
