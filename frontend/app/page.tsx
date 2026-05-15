"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollStory from "@/components/ScrollStory";
import CinematicProcess from "@/components/CinematicProcess";
import RevealSection from "@/components/RevealSection";
import FoodShowcase from "@/components/FoodShowcase";
import MarqueeText from "@/components/MarqueeText";
import JournalGrid from "@/components/JournalGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <section className="relative z-10">
        <Hero />
      </section>
      
      <div className="relative z-30 -mt-20">
        <MarqueeText text="Siomay Sapi • Bumbu Kacang Gurih • Tekstur Lembut • Rasa Premium • Fresh Setiap Hari" />
      </div>

      <section id="cerita" className="relative z-10">
        <ScrollStory />
      </section>

      <section className="relative z-20">
        <RevealSection />
      </section>

      <section id="proses" className="relative z-10">
        <CinematicProcess />
      </section>

      <section id="menu" className="relative z-20 pt-32 bg-brand-cream">
        <FoodShowcase />
      </section>

      <section id="journal" className="relative z-10 py-64 bg-brand-cream border-t border-brand-peanut/5">
        <JournalGrid />
      </section>

      <section className="py-80 bg-brand-cream relative z-40 border-t border-brand-peanut/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="ui-label mb-12 block">Newsletter</span>
            <h2 className="editorial-xl mb-16 text-brand-dark">
              Jangan Lewatkan <br /> <span className="italic text-brand-peanut">Kabar dari Babah.</span>
            </h2>
            <p className="text-2xl text-brand-dark/70 mb-20 font-light leading-relaxed max-w-2xl mx-auto">
              Dapatkan info menu baru, promo spesial, dan cerita terbaru dari dapur Sio Mei Babah Sapi.
            </p>
            <form className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-grow bg-white border border-brand-peanut/20 text-brand-dark px-10 py-6 rounded-full focus:outline-none focus:border-brand-peanut transition-all text-xl shadow-sm min-w-0"
              />
              <button className="bg-brand-brown text-brand-cream px-14 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-peanut transition-all duration-500 shadow-xl whitespace-nowrap min-w-[180px]">
                Gabung
              </button>
            </form>
            <p className="mt-12 ui-label text-brand-dark/30 lowercase tracking-normal">
              Kami hanya mengirim kabar penting. Tidak spam.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

