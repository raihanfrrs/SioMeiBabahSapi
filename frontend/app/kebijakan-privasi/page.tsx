import Navbar from "@/components/Navbar";
import FooterLuxury from "@/components/FooterLuxury";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Sio Mei Babah Sapi",
  description: "Kebijakan privasi Sio Mei Babah Sapi mengenai pengumpulan dan perlindungan data pelanggan.",
  alternates: { canonical: "/kebijakan-privasi" }
};

export default function KebijakanPrivasiPage() {
  return (
    <main className="min-h-screen bg-brand-cream relative overflow-hidden noise-overlay">
      <Navbar />
      <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-brand-accent/20 shadow-2xl">
          <h1 className="font-editorial text-4xl md:text-5xl text-brand-dark mb-8 text-center">Kebijakan Privasi</h1>
          <div className="space-y-6 text-brand-dark/80 leading-relaxed text-lg font-inter">
            <p>
              Sio Mei Babah Sapi menghargai privasi setiap pelanggan. Data yang diberikan melalui WhatsApp, email, atau formulir website seperti nama, nomor telepon, alamat pengiriman, dan detail pesanan hanya digunakan untuk memproses pemesanan, pengiriman, konfirmasi pembayaran, layanan pelanggan, dan komunikasi terkait produk.
            </p>
            <p>
              Kami tidak menjual, menyewakan, atau membagikan data pelanggan kepada pihak lain di luar kebutuhan operasional pemesanan dan pengiriman. Data pelanggan disimpan secara wajar untuk keperluan riwayat pesanan, layanan pelanggan, dan administrasi internal.
            </p>
            <p>
              Pelanggan dapat menghubungi kami melalui email <a href="mailto:siomeibabahsapi@gmail.com" className="text-brand-accent hover:underline">siomeibabahsapi@gmail.com</a> untuk meminta pembaruan, koreksi, atau penghapusan data yang pernah diberikan.
            </p>
          </div>
        </div>
      </div>
      <FooterLuxury />
    </main>
  );
}
