import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import FooterLuxury from "@/components/FooterLuxury";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ & Pertanyaan Umum | Sio Mei Babah Sapi",
  description: "Temukan jawaban tentang Sio Mei Babah Sapi, pesanan frozen, harga reseller, supply B2B, dan cara penyajian siomay premium kami.",
  alternates: { canonical: "/faq" }
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-brand-cream relative overflow-hidden noise-overlay">
      <Navbar />
      <div className="pt-24 pb-12">
        <FAQSection />
      </div>
      <FooterLuxury />
    </main>
  );
}
