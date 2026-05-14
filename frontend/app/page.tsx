"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollStory from "@/components/ScrollStory";
import ProcessSection from "@/components/ProcessSection";
import FoodShowcase from "@/components/FoodShowcase";
import MarqueeText from "@/components/MarqueeText";
import JournalGrid from "@/components/JournalGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <Hero />
      
      <div className="relative z-20 -mt-20">
        <MarqueeText text="Siomay Sapi • Bumbu Kacang Gurih • Tekstur Lembut • Rasa Premium • Fresh Setiap Hari" />
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-cream to-transparent z-10" />
        <ScrollStory />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-cream to-transparent z-10" />
      </div>

      <ProcessSection />

      <div className="relative bg-brand-cream">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-cream/10 to-transparent z-10" />
        <FoodShowcase />
      </div>

      <section className="relative py-32 bg-brand-cream overflow-hidden">
        {/* Subtle Bamboo Texture */}
        <div className="absolute inset-0 bg-bamboo opacity-[0.03] z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16 bg-brand-cream rounded-[48px] p-8 md:p-20 shadow-[0_50px_100px_-20px_rgba(42,33,28,0.08)] border border-brand-peanut/10">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800"
                alt="Siomay Sapi Premium"
                className="w-full h-[400px] object-cover rounded-[32px] shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-brand-peanut font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Premium Quality</span>
              <h2 className="text-5xl md:text-7xl font-editorial mb-8 text-brand-dark leading-tight">
                Hangat, Gurih, dan Selalu Bikin Balik Lagi.
              </h2>
              <p className="text-xl text-brand-dark/60 mb-10 font-light leading-relaxed">
                Nikmati siomay sapi premium dengan bumbu kacang khas, tekstur lembut, dan rasa yang pas untuk camilan, makan siang, atau sajian keluarga.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-brand-brown text-brand-cream px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-peanut transition-all duration-500 shadow-xl">
                  Pesan Sekarang
                </button>
                <button className="border border-brand-brown text-brand-brown px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-brown hover:text-brand-cream transition-all duration-500 shadow-lg">
                  Lihat Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JournalGrid />

      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="relative bg-brand-brown rounded-[48px] p-12 md:p-24 overflow-hidden shadow-2xl text-center">
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-bamboo opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-editorial mb-8 text-brand-cream">
                Jangan Lewatkan Kabar dari Babah
              </h2>
              <p className="text-lg text-brand-cream/70 mb-12 font-light leading-relaxed">
                Dapatkan info menu baru, promo spesial, dan cerita terbaru dari dapur Sio Mei Babah Sapi.
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="flex-grow bg-brand-cream/10 border border-brand-cream/20 text-brand-cream px-8 py-5 rounded-full focus:outline-none focus:border-brand-peanut transition-colors text-lg"
                />
                <button className="bg-brand-cream text-brand-dark px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-peanut hover:text-brand-cream transition-all duration-500 shadow-xl">
                  Gabung
                </button>
              </form>
              <p className="mt-6 text-[10px] text-brand-cream/40 uppercase tracking-widest">
                Kami hanya mengirim kabar penting. Tidak spam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

