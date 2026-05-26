import Navbar from "@/components/Navbar";
import FooterLuxury from "@/components/FooterLuxury";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan | Sio Mei Babah Sapi",
  description: "Syarat dan ketentuan pemesanan, pengiriman, dan kerjasama dengan Sio Mei Babah Sapi.",
  alternates: { canonical: "/syarat-ketentuan" }
};

export default function SyaratKetentuanPage() {
  return (
    <main className="min-h-screen bg-brand-cream relative overflow-hidden noise-overlay">
      <Navbar />
      <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-brand-accent/20 shadow-2xl">
          <h1 className="font-editorial text-4xl md:text-5xl text-brand-dark mb-8 text-center">Syarat & Ketentuan</h1>
          <div className="space-y-6 text-brand-dark/80 leading-relaxed text-lg font-inter">
            <p>
              Dengan melakukan pemesanan Sio Mei Babah Sapi, pelanggan dianggap telah memahami dan menyetujui ketentuan berikut:
            </p>
            <ul className="list-decimal pl-6 space-y-4">
              <li>Produk tersedia dalam pilihan siap santap dan frozen sesuai ketersediaan.</li>
              <li>Harga, varian, dan ketersediaan produk dapat berubah sewaktu-waktu.</li>
              <li>Pesanan diproses setelah pembayaran dikonfirmasi lunas, kecuali untuk kesepakatan B2B tertentu.</li>
              <li>Pengiriman menggunakan kurir instan/sameday/paxel untuk menjaga kualitas produk. Kerusakan akibat keterlambatan pihak kurir berada di luar tanggung jawab kami, namun kami memastikan kemasan aman sebelum dikirim.</li>
              <li>Untuk komplain pesanan, pelanggan wajib menyertakan bukti foto/video unboxing maksimal 3 jam setelah produk diterima.</li>
              <li>Untuk reseller dan partner B2B, syarat dan ketentuan operasional akan diatur lebih lanjut melalui kesepakatan terpisah.</li>
            </ul>
          </div>
        </div>
      </div>
      <FooterLuxury />
    </main>
  );
}
