import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProcessPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-editorial mb-8">Proses Kami</h1>
          <p className="text-xl text-brand-dark/60 max-w-2xl">
            // TODO: Replace local data with Laravel API endpoint
            Melihat lebih dekat bagaimana siomay sapi premium kami dibuat dengan penuh ketelitian.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
