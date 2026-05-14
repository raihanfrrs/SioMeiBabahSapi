import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-editorial mb-12">Get in touch</h1>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">Full Name</label>
                <input type="text" className="bg-transparent border-b border-brand-dark/10 py-4 focus:outline-none focus:border-brand-yellow transition-colors" />
              </div>
              <div className="flex flex-col space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">Email Address</label>
                <input type="email" className="bg-transparent border-b border-brand-dark/10 py-4 focus:outline-none focus:border-brand-yellow transition-colors" />
              </div>
              <div className="flex flex-col space-y-4 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">Message</label>
                <textarea rows={4} className="bg-transparent border-b border-brand-dark/10 py-4 focus:outline-none focus:border-brand-yellow transition-colors resize-none" />
              </div>
              <div className="md:col-span-2">
                <button className="bg-brand-dark text-brand-cream px-12 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-brand-yellow hover:text-brand-dark transition-all">
                  Send Message
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
