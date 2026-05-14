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
              SIO MEI BABAH SAPI<span className="text-brand-yellow">.</span>
            </Link>
            <p className="text-xl text-brand-cream/60 max-w-sm mb-12 font-light">
              Siomay sapi premium dengan rasa gurih, lembut, dan bumbu kacang khas yang dibuat untuk dinikmati kapan saja.
            </p>
            <div className="flex gap-6">
              {footer.social.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-sm font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-8">Navigation</h4>
            <div className="flex flex-col space-y-4">
              {siteContent.navigation.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg hover:text-brand-yellow transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              {footer.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg hover:text-brand-yellow transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-8">Stay Updated</h4>
            <p className="text-sm text-brand-cream/60 mb-6 font-light">
              Receive the latest news and breakthroughs in food tech.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border-b border-brand-cream/20 py-4 focus:outline-none focus:border-brand-yellow transition-colors"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-4 text-xs font-bold uppercase tracking-widest hover:text-brand-yellow"
              >
                Join
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
