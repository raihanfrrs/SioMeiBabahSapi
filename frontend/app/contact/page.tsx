import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-editorial mb-12">Pesan Sekarang</h1>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">Nama Lengkap</label>
                <input type="text" className="bg-transparent border-b border-brand-peanut/20 py-4 focus:outline-none focus:border-brand-peanut transition-colors" />
              </div>
              <div className="flex flex-col space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">Alamat Email</label>
                <input type="email" className="bg-transparent border-b border-brand-peanut/20 py-4 focus:outline-none focus:border-brand-peanut transition-colors" />
              </div>
              <div className="flex flex-col space-y-4 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">Pesan / Pesanan</label>
                <textarea rows={4} className="bg-transparent border-b border-brand-peanut/20 py-4 focus:outline-none focus:border-brand-peanut transition-colors resize-none" />
              </div>
              <div className="md:col-span-2">
                <button className="bg-brand-brown text-brand-cream px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-peanut transition-all duration-500 shadow-2xl">
                  Kirim Pesanan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
