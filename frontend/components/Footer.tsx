"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

const Footer = () => {
  const { footer } = siteContent;

  return (
    <footer className="bg-brand-dark text-brand-cream pt-32 pb-12 relative overflow-hidden">
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-bamboo opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <Link href="/" className="text-4xl md:text-5xl font-editorial font-bold tracking-tight mb-8 block">
              {footer.brand}<span className="text-brand-peanut">.</span>
            </Link>
            <p className="text-xl text-brand-cream/60 max-w-sm mb-12 font-light leading-relaxed italic">
              {footer.description}
            </p>
            <div className="space-y-4 mb-12 text-sm text-brand-cream/40">
              <p>{footer.address}</p>
              <p>{footer.phone}</p>
            </div>
            <div className="flex gap-8">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-[10px] font-bold uppercase tracking-widest hover:text-brand-peanut transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Columns Container */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* Menu Col */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-peanut mb-8">Menu</h4>
              <ul className="space-y-4">
                {footer.menu.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-brand-cream/60 hover:text-brand-cream transition-colors text-sm font-light">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eksplorasi Col */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-peanut mb-8">Eksplorasi</h4>
              <ul className="space-y-4">
                {footer.exploration.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-brand-cream/60 hover:text-brand-cream transition-colors text-sm font-light">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pesan Col */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-peanut mb-8">Pesan</h4>
              <p className="text-sm text-brand-cream/60 mb-8 font-light leading-relaxed">
                Pesan siomay hangat untuk camilan, makan siang, atau acara keluarga.
              </p>
              <button className="w-full bg-brand-peanut text-brand-cream px-6 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-cream hover:text-brand-dark transition-all duration-500 shadow-xl">
                {footer.cta}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-brand-cream/10">
          <p className="text-[10px] text-brand-cream/30 uppercase tracking-[0.2em] mb-4 md:mb-0">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-8 bg-brand-cream/10" />
            <p className="text-[10px] text-brand-cream/40 uppercase tracking-[0.2em]">
              {footer.statement}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
