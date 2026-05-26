import Navbar from "@/components/Navbar";
import FoodShowcase from "@/components/FoodShowcase";
import FooterLuxury from "@/components/FooterLuxury";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu Siomay Sapi Premium",
  description: "Daftar menu Sio Mei Babah Sapi: Original (Kukus), Goreng, dan Frozen. Siap dipesan untuk keluarga, acara, atau kebutuhan B2B.",
  alternates: { canonical: "/menu" }
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-brand-cream relative overflow-hidden noise-overlay">
      <Navbar />
      <div className="pt-24 pb-12">
        <FoodShowcase />
      </div>
      <FooterLuxury />
    </main>
  );
}
