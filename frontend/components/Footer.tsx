"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

const Footer = () => {
  const { footer } = siteContent;

  return (
    <footer className="bg-brand-dark text-brand-cream pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl md:text-4xl font-editorial font-bold tracking-tight mb-8 block">
              SIO MEI BABAH SAPI<span className="text-brand-peanut">.</span>
            </Link>
            <p className="text-xl text-brand-cream/60 max-w-sm mb-12 font-light italic leading-relaxed">
              “Hangat, gurih, dan selalu bikin balik lagi.”
            </p>
            <div className="space-y-4 mb-12 text-sm text-brand-cream/60">
              <p>📍 Jl. Rasa Nikmat No. 88, Jakarta Selatan</p>
              <p>📞 WhatsApp: +62 812-3456-7890</p>
              <p>📸 @siomeibabahsapi</p>
            </div>
            <div className="flex gap-6">
              {footer.social.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs font-bold uppercase tracking-widest hover:text-brand-peanut transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-peanut mb-8">Navigasi</h4>
            <div className="flex flex-col space-y-4">
              {siteContent.navigation.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-editorial hover:text-brand-peanut transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a href="#" className="text-lg font-editorial hover:text-brand-peanut transition-colors">WhatsApp Order</a>
            </div>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-peanut mb-8">Kabar Terbaru</h4>
            <p className="text-sm text-brand-cream/60 mb-6 font-light">
              Dapatkan info menu baru, promo, dan cerita dari Sio Mei Babah Sapi.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border-b border-brand-cream/20 py-4 focus:outline-none focus:border-brand-peanut transition-colors"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-4 text-[10px] font-bold uppercase tracking-widest hover:text-brand-peanut transition-colors"
              >
                Gabung
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-brand-cream/10">
          <p className="text-xs text-brand-cream/40 uppercase tracking-widest mb-4 md:mb-0">
            © 2026 Sio Mei Babah Sapi. All rights reserved.
          </p>
          <p className="text-xs text-brand-cream/40 uppercase tracking-widest">
            Dibuat dengan Rasa, Disajikan dengan Hati
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
