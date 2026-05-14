import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JournalGrid from "@/components/JournalGrid";

export default function JournalPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-2 bg-brand-cream">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-editorial mb-8">Cerita Dapur</h1>
        </div>
      </section>
      <JournalGrid />
      <Footer />
    </main>
  );
}
