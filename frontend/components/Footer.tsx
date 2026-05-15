"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

const Footer = () => {
  const { footer } = siteContent;

  return (
    <footer className="bg-brand-dark text-brand-cream pt-96 pb-20 relative overflow-hidden">
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-bamboo opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section: Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 mb-64">
          <div className="space-y-10">
            <h4 className="ui-label text-brand-peanut">Kontak</h4>
            <div className="space-y-4 text-xl font-light text-brand-cream/60">
              <p>{footer.address}</p>
              <p>{footer.phone}</p>
            </div>
            <div className="flex gap-6 pt-4">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40 hover:text-brand-peanut transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="ui-label text-brand-peanut">Menu</h4>
            <ul className="space-y-4">
              {footer.menu.map((item) => (
                <li key={item}>
                  <a href="/#menu" className="text-xl text-brand-cream/60 hover:text-brand-cream transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="ui-label text-brand-peanut">Eksplorasi</h4>
            <ul className="space-y-4">
              {footer.exploration.map((item) => (
                <li key={item}>
                  <a href="#" className="text-xl text-brand-cream/60 hover:text-brand-cream transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="ui-label text-brand-peanut">Pesan</h4>
            <p className="text-xl text-brand-cream/40 font-light leading-relaxed">
              Dibuat hangat, disajikan dengan hati untuk momen spesial Anda.
            </p>
            <a 
              href="https://wa.me/628123456789"
              className="inline-block bg-brand-peanut text-brand-cream px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-cream hover:text-brand-dark transition-all duration-500 shadow-2xl"
            >
              {footer.cta}
            </a>
          </div>
        </div>

        {/* Middle Section: Massive Brand Name */}
        <div className="text-center mb-32 select-none pointer-events-none">
          <h2 className="text-[12vw] md:text-[18vw] font-editorial font-bold leading-none tracking-tighter text-brand-cream/[0.015] uppercase">
            Babah Sapi
          </h2>
        </div>

        {/* Bottom Section: Copyright & Statement */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-brand-cream/10">
          <p className="ui-label text-brand-cream/20 mb-8 md:mb-0">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <span className="h-[1px] w-12 bg-brand-peanut/20" />
            <p className="ui-label text-brand-peanut italic lowercase tracking-normal">
              {footer.statement}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
