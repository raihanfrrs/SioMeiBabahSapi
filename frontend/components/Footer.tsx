"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

const Footer = () => {
  const { footer, navigation } = siteContent;

  return (
    <footer className="bg-brand-cream pt-32 pb-12 flex justify-center">
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-20 flex flex-col gap-24">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <h2 className="text-6xl font-editorial font-medium text-brand-dark">Savor</h2>
            <p className="text-sm text-brand-dark/40 leading-relaxed max-w-xs font-medium">
              {footer.statement}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {footer.navigation.map((item) => (
                <li key={item}>
                  <Link href={`/#${item.toLowerCase()}`} className="text-sm text-brand-dark/50 hover:text-brand-dark transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">Legal</h4>
            <ul className="flex flex-col gap-3">
              {footer.legal.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-brand-dark/50 hover:text-brand-dark transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">Support</h4>
            <ul className="flex flex-col gap-3">
              {footer.support.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-brand-dark/50 hover:text-brand-dark transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">Social</h4>
            <ul className="flex flex-col gap-3">
              {footer.social.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-brand-dark/50 hover:text-brand-dark transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-brand-dark/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-brand-dark/30 uppercase tracking-widest">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
