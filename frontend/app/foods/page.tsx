import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodShowcase from "@/components/FoodShowcase";

export default function FoodsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-2 bg-brand-cream">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-editorial mb-8">The Foods</h1>
        </div>
      </section>
      <FoodShowcase />
      <Footer />
    </main>
  );
}
