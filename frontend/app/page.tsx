import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CraftSection from "@/components/CraftSection";
import FoodShowcase from "@/components/FoodShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <Hero />
      <div style={{ height: '75px' }} className="bg-brand-cream w-full" />
      <CraftSection />
      <FoodShowcase />
      <Footer />
    </main>
  );
}

