"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSummary from "@/components/ProductSummary";
import MacroTexture from "@/components/MacroTexture";
import WhySioMei from "@/components/WhySioMei";
import FoodShowcase from "@/components/FoodShowcase";
import HowToEnjoy from "@/components/HowToEnjoy";
import BehindTheScene from "@/components/BehindTheScene";
import B2BSupply from "@/components/B2BSupply";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import ClosingCTA from "@/components/ClosingCTA";
import FooterLuxury from "@/components/FooterLuxury";
import SmoothScroll from "@/components/SmoothScroll";
import { useInitialPreload } from "@/hooks/useInitialPreload";
import BrandedPreloader from "@/components/BrandedPreloader";

export default function Home() {
  const { progress, isReady } = useInitialPreload();

  return (
    <SmoothScroll>
      <BrandedPreloader progress={progress} isReady={isReady} />
      <main className="min-h-screen bg-brand-cream relative overflow-hidden noise-overlay">
        <Navbar />
        
        {/* Sequence: Hero -> Summary -> Why Us -> Menu -> How to Enjoy -> BTS -> B2B -> Testimonials -> FAQ -> Closing -> Footer */}
        <div className="relative z-10">
          <Hero />
        </div>
        
        <div className="relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
          <MacroTexture />
          <ProductSummary />
          <WhySioMei />
        </div>
        
        <div className="relative z-30 bg-brand-cream">
          <FoodShowcase />
          <HowToEnjoy />
        </div>
        
        <div className="relative z-40 bg-brand-cream">
          <BehindTheScene />
          <B2BSupply />
        </div>

        <div className="relative z-40 bg-brand-cream">
          <TestimonialSection />
          <FAQSection />
        </div>
        
        <div className="relative z-50">
          <ClosingCTA />
          <FooterLuxury />
        </div>
      </main>
    </SmoothScroll>
  );
}
