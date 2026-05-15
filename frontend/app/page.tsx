import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CraftSection from "@/components/CraftSection";
import CinematicProcess from "@/components/CinematicProcess";
import FoodShowcase from "@/components/FoodShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <Hero />
      <div className="h-[40px] md:h-[80px] bg-brand-cream w-full" />
      
      <CraftSection />
      <div className="h-[40px] md:h-[80px] bg-brand-cream w-full" />
      
      <CinematicProcess />
      <div className="h-[60px] md:h-[120px] bg-brand-cream w-full" />
      
      <FoodShowcase />
      <div className="h-[40px] md:h-[80px] bg-brand-cream w-full" />
      
      <Footer />
    </main>
  );
}

