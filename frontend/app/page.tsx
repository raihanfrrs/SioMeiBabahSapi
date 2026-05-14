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
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      <section className="bg-brand-cream">
        <MarqueeText text="No Animals • No Antibiotics • No Hormones • No Farmland • No Fertilizers" />
      </section>

      <ScrollStory />

      <ProcessSection />

      <FoodShowcase />

      <section className="py-24 bg-brand-yellow flex items-center justify-center text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-8xl font-editorial mb-12 max-w-5xl mx-auto">
            Made without animals, farmland, or fertilizers.
          </h2>
          <button className="bg-brand-dark text-brand-cream px-12 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:scale-105 transition-all">
            Join the Revolution
          </button>
        </div>
      </section>

      <JournalGrid />

      <Footer />
    </main>
  );
}

