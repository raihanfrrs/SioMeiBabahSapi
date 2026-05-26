import Navbar from "@/components/Navbar";
import B2BSupply from "@/components/B2BSupply";
import FooterLuxury from "@/components/FooterLuxury";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Supply Siomay Sapi Premium",
  description: "Suplai B2B Sio Mei Frozen untuk restoran, cafe, bar, club, event, dan dapur partner dengan konsistensi rasa dan kualitas tinggi.",
  alternates: { canonical: "/b2b-supply" }
};

export default function B2BSupplyPage() {
  return (
    <main className="min-h-screen bg-brand-cream relative overflow-hidden noise-overlay">
      <Navbar />
      <div className="pt-24 pb-12">
        <B2BSupply />
      </div>
      <FooterLuxury />
    </main>
  );
}
