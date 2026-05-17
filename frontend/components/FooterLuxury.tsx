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
      gsap.fromTo(".footer-bg-logo",
        { y: 60, opacity: 0 },
        {
          y: 0, 
          opacity: 1, 
          duration: 2.0, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
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
      className="relative overflow-hidden bg-[#1b0f0a] text-[#f4eadc] pt-28 md:pt-32 lg:pt-36 pb-24 md:pb-28 lg:pb-32 min-h-[68vh] mt-0 border-t border-[#f4eadc]/10"
    >
      
      {/* Content Wrapper */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-24 md:mb-28 lg:mb-32">
          
          {/* Column 1: Brand Area (col-span-4) - Order 1 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-start order-1 lg:order-1">
            <h3 className="text-4xl md:text-5xl font-editorial text-[#f4eadc] tracking-tighter">babah sapi</h3>
            <p className="mt-6 max-w-[340px] text-sm leading-relaxed text-[#f4eadc]/70 font-medium">
              {footer.statement || "Menghadirkan kelezatan siomay sapi premium melalui keahlian tangan dan bahan-bahan terbaik."}
            </p>
            <div className="mt-8 flex gap-8">
              {footer.social.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  className="group relative text-xs font-semibold uppercase tracking-[0.22em] text-[#f4eadc] hover:text-[#d39a3a] transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-[#d39a3a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explore Column (col-span-2) - Order 3 on tablet, Order 2 on desktop */}
          <div className="col-span-6 md:col-span-6 lg:col-span-2 flex flex-col items-start order-3 lg:order-2">
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#d39a3a] font-bold">Explore</span>
            <div className="mt-5 flex flex-col space-y-3">
              {footer.navigation.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={`/#${link.toLowerCase()}`} 
                  className="text-2xl font-editorial leading-tight text-[#f4eadc] hover:text-[#d39a3a] hover:italic transition-all duration-300 block"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Journal / Newsletter Area (col-span-4) - Order 2 on tablet, Order 3 on desktop */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-start order-2 lg:order-3">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#d39a3a] font-bold">THE JOURNAL</span>
            <p className="mt-6 text-sm leading-relaxed text-[#f4eadc]/70 max-w-[400px] font-medium">
              Cerita dapur, menu musiman, dan kabar terbaru dari warisan kuliner kami.
            </p>
            
            <form className="mt-6 flex items-center gap-4 border-b border-[#f4eadc]/30 pb-3 w-full max-w-[380px] focus-within:border-[#d39a3a] transition-colors duration-500">
              <input 
                type="email" 
                placeholder="Join our mailing list" 
                className="flex-1 bg-transparent text-sm text-[#f4eadc] placeholder:text-[#f4eadc]/45 outline-none font-medium tracking-wide"
                required
              />
              <button 
                type="submit" 
                className="text-xs uppercase tracking-[0.22em] font-semibold text-[#f4eadc] hover:text-[#d39a3a] transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 4: Reservation CTA (col-span-2) - Order 4 */}
          <div className="col-span-6 md:col-span-6 lg:col-span-2 flex flex-col items-start lg:items-end w-full lg:text-right order-4 lg:order-4">
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#d39a3a] font-bold mb-8 block lg:text-right w-full">Reservation</span>
            <a 
              href="/#contact" 
              className="inline-flex w-full max-w-[180px] items-center justify-center border border-[#f4eadc]/35 px-6 py-4 text-xs uppercase tracking-[0.22em] font-semibold text-[#f4eadc] transition-all duration-500 hover:bg-[#f4eadc] hover:text-[#1b0f0a] hover:scale-105 rounded-sm shadow-md"
            >
              PESAN SEKARANG
            </a>
          </div>

        </div>

        {/* Bottom Bar Segment */}
        <div className="relative z-10 border-t border-[#f4eadc]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] text-[#f4eadc]/45">
          <p>© 2026 Babah Sapi</p>
          <div className="flex gap-8">
            {footer.legal.map((item, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="hover:text-[#d39a3a] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <p>Crafted with Care</p>
        </div>
      </div>

      {/* Decorative Large Background Logo Watermark */}
      <div className="absolute bottom-[-0.12em] left-1/2 -translate-x-1/2 pointer-events-none select-none whitespace-nowrap z-0 w-full text-center overflow-hidden">
        <h1 className="footer-bg-logo text-[34vw] lg:text-[17vw] leading-none font-editorial text-[#f4eadc]/[0.055] tracking-tighter">
          babah sapi
        </h1>
      </div>

    </footer>
  );
};

export default FooterLuxury;
