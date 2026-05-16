import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MacroTexture from "@/components/MacroTexture";
import ProcessStory from "@/components/ProcessStory";
import EditorialStory from "@/components/EditorialStory";
import GalleryStack from "@/components/GalleryStack";
import FoodShowcase from "@/components/FoodShowcase";
import ClosingCTA from "@/components/ClosingCTA";
import FooterLuxury from "@/components/FooterLuxury";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-brand-cream relative overflow-hidden">
        <Navbar />
        
        {/* Storytelling Sequence */}
        <div className="relative z-10">
          <Hero />
        </div>
        
        <div className="relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
          <MacroTexture />
          <ProcessStory />
        </div>
        
        <div className="relative z-30 bg-brand-cream">
          <EditorialStory />
          <GalleryStack />
        </div>
        
        {/* Menu & Closing */}
        <div className="relative z-40 bg-brand-cream section-py-lg">
          <FoodShowcase />
        </div>
        
        <div className="relative z-50">
          <ClosingCTA />
          <FooterLuxury />
        </div>
      </main>
    </SmoothScroll>
  );
}

