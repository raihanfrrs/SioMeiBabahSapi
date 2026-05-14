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

      <section className="relative py-32 bg-brand-brown overflow-hidden">
        {/* Subtle Texture */}
        <div className="absolute inset-0 bg-bamboo opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-6xl md:text-8xl font-editorial mb-12 text-brand-cream leading-tight">
              Dibuat dengan rasa, <br /> disajikan dengan hati.
            </h2>
            <button className="bg-brand-peanut text-brand-cream px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-cream hover:text-brand-brown transition-all duration-500 shadow-2xl">
              Pesan Sekarang
            </button>
          </motion.div>
        </div>
      </section>

      <JournalGrid />

      <Footer />
    </main>
  );
}

