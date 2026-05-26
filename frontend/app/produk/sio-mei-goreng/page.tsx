import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FooterLuxury from "@/components/FooterLuxury";
import ProductDetail from "@/components/ProductDetail";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Sio Mei Goreng | Siomay Sapi Premium Renyah",
  description: "Sio Mei Goreng cocok untuk pelanggan yang menyukai tekstur luar renyah dengan isian sapi yang tetap padat, lembut, dan gurih.",
  alternates: { canonical: "/produk/sio-mei-goreng" }
};

export default function GorengProductPage() {
  const product = siteContent.foods.find((f) => f.id === "goreng")!;
  
  return (
    <main className="min-h-screen bg-brand-cream relative overflow-hidden noise-overlay">
      <Navbar />
      <ProductDetail 
        id={product.id}
        name={product.name}
        image={product.image}
        description={product.longDescription}
        price={product.price}
        priceNumeric="38000"
        pack={product.pack}
        format={product.format}
        serving={product.serving}
        suitableFor={product.suitableFor}
        storage={product.storage}
        whatsappMessage={`Halo Sio Mei Babah Sapi, saya ingin memesan ${product.name} (${product.price}). Mohon info ketersediaan dan cara pemesanannya.`}
      />
      <FooterLuxury />
    </main>
  );
}
