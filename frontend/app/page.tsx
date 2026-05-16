import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProcessScrollStory from "@/components/ProcessScrollStory";
import EditorialStory from "@/components/EditorialStory";
import GalleryStack from "@/components/GalleryStack";
import FoodShowcase from "@/components/FoodShowcase";
import ClosingCTA from "@/components/ClosingCTA";
import FooterLuxury from "@/components/FooterLuxury";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-brand-cream relative">
        <Navbar />
        
        {/* The Cinematic Scroll Journey */}
        <Hero />
        <ProcessScrollStory />
        <EditorialStory />
        <GalleryStack />
        
        {/* Product Carousel */}
        <div className="bg-brand-cream py-24 md:py-48">
          <FoodShowcase />
        </div>
        
        {/* Closing & Footer */}
        <ClosingCTA />
        <FooterLuxury />
      </main>
    </SmoothScroll>
  );
}

