"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

const Footer = () => {
  const { footer, navigation } = siteContent;

  return (
    <footer className="bg-brand-beige pb-12 flex flex-col items-center">
      {/* Explicit Top Spacer to avoid content sticking to the edge */}
      <div className="h-[80px] md:h-[150px] w-full" />
      
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-20 flex flex-col gap-16 md:gap-24 pt-6 md:pt-[25px]">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-editorial font-medium text-brand-dark">babah sapi</h2>
            <p className="text-[13px] md:text-sm text-brand-dark/60 leading-relaxed max-w-sm font-medium">
              {footer.statement}
            </p>
          </div>

          {/* Links Section - 2 columns on mobile */}
          <div className="md:col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">

            {/* Navigation */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark">Navigation</h4>
              <ul className="flex flex-col gap-2.5">
                {footer.navigation.map((item) => (
                  <li key={item}>
                    <Link href={`/#${item.toLowerCase()}`} className="text-[13px] text-brand-dark/50 hover:text-brand-dark transition-colors font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark">Support</h4>
              <ul className="flex flex-col gap-2.5">
                {footer.support.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[13px] text-brand-dark/50 hover:text-brand-dark transition-colors font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark">Legal</h4>
              <ul className="flex flex-col gap-2.5">
                {footer.legal.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[13px] text-brand-dark/50 hover:text-brand-dark transition-colors font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark">Social</h4>
              <div className="flex flex-col gap-3">
                {footer.social.map((item) => (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    className="flex items-center gap-2 group"
                  >
                    <span className="text-[13px] text-brand-dark/50 group-hover:text-brand-dark transition-colors font-medium">
                      {item.label}
                    </span>
                    <div className="w-6 h-[1px] bg-brand-dark/10 group-hover:bg-brand-dark transition-all scale-x-0 group-hover:scale-x-100 origin-left" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-brand-dark/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] md:text-[10px] text-brand-dark/40 uppercase tracking-[0.2em] font-bold">
            {footer.copyright}
          </p>
          <div className="flex gap-8">
            <span className="text-[9px] text-brand-dark/20 uppercase tracking-widest font-bold">Editorial 2026</span>
            <span className="text-[9px] text-brand-dark/20 uppercase tracking-widest font-bold">Handcrafted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
