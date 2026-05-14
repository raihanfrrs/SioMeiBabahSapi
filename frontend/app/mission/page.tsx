import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MissionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-editorial mb-8">Cerita Kami</h1>
          <p className="text-xl text-brand-dark/60 max-w-2xl">
            // TODO: Replace local data with Laravel API endpoint
            Berawal dari keinginan menghadirkan siomay dengan kualitas terbaik untuk keluarga Indonesia.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
