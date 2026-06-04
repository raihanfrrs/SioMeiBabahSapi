import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FooterLuxury from "@/components/FooterLuxury";
import ProductDetail from "@/components/ProductDetail";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Paket Sio Mei Frozen | Siomay Sapi Premium Frozen",
  description: "Paket Sio Mei Frozen dibuat untuk kebutuhan stok praktis restoran, reseller, acara, dan rumah tangga.",
  alternates: { canonical: "/produk/sio-mei-frozen" }
};

export default function FrozenProductPage() {
  const product = siteContent.foods.find((f) => f.id === "frozen")!;
  
  return (
    <main className="min-h-screen bg-brand-cream relative overflow-hidden noise-overlay">
      <Navbar />
      <ProductDetail 
        id={product.id}
        name={product.name}
        image={product.image}
        description={product.longDescription}
        price={product.price}
        priceNumeric="30000"
        pack={product.pack}
        format={product.format}
        serving={product.serving}
        suitableFor={product.suitableFor}
        storage={product.storage}
        whatsappMessage={`Halo Sio Mei Babah Sapi, saya ingin memesan ${product.name} (${product.price}). Mohon info ketersediaan dan cara pemesanannya.`}
        ratingValue={product.ratingValue}
        reviewCount={product.reviewCount}
        verifiedReviews={product.verifiedReviews}
      />
      <FooterLuxury />
    </main>
  );
}
