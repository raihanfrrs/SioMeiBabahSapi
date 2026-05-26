import Navbar from "@/components/Navbar";
import FooterLuxury from "@/components/FooterLuxury";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Sio Mei Babah Sapi",
  description: "Kebijakan privasi Sio Mei Babah Sapi mengenai pengumpulan dan perlindungan data pelanggan.",
  alternates: { canonical: "/kebijakan-privasi" }
};

export default function KebijakanPrivasiPage() {
  return (
    <main className="min-h-screen bg-[#F4EBDD] relative overflow-hidden noise-overlay flex flex-col">
      <Navbar />
      
      <div className="flex-1 w-full pt-[90px] pb-[90px] md:pt-[110px] md:pb-[110px] lg:pt-[140px] lg:pb-[140px] px-4 md:px-8">
        <div className="max-w-[900px] xl:max-w-[1040px] mx-auto flex flex-col items-center">
          
          <span className="text-[#C7923E] font-sans font-bold uppercase tracking-[0.3em] mb-4 text-[11px] md:text-[12px] text-center">
            LEGAL
          </span>
          
          <h1 className="font-editorial text-[#4b0705] text-4xl md:text-5xl lg:text-6xl text-center mb-6">
            Kebijakan Privasi
          </h1>
          
          <div className="w-16 md:w-24 h-px bg-[#C7923E]/40 mb-10 md:mb-12" />

          <div className="w-full bg-[#FDF8EE]/80 backdrop-blur-sm border border-[#C7923E]/20 rounded-[28px] p-[28px] px-[22px] md:p-[48px] md:px-[56px] shadow-sm flex flex-col text-left">
            <div className="text-[15px] md:text-[16px] lg:text-[18px] leading-[1.8] text-[#4b0705]/85 font-sans space-y-6">
              <p>
                Sio Mei Babah Sapi menghargai privasi setiap pelanggan. Data yang diberikan melalui WhatsApp, email, atau formulir website seperti nama, nomor telepon, alamat pengiriman, dan detail pesanan hanya digunakan untuk memproses pemesanan, pengiriman, konfirmasi pembayaran, layanan pelanggan, dan komunikasi terkait produk.
              </p>
              <p>
                Kami tidak menjual, menyewakan, atau membagikan data pelanggan kepada pihak lain di luar kebutuhan operasional pemesanan dan pengiriman. Data pelanggan disimpan secara wajar untuk keperluan riwayat pesanan, layanan pelanggan, dan administrasi internal.
              </p>
              <p>
                Pelanggan dapat menghubungi kami melalui email <a href="mailto:siomeibabahsapi@gmail.com" className="text-[#C7923E] hover:underline font-semibold transition-all">siomeibabahsapi@gmail.com</a> untuk meminta pembaruan, koreksi, atau penghapusan data yang pernah diberikan.
              </p>
            </div>
          </div>

          <Link 
            href="/" 
            className="mt-12 inline-flex items-center justify-center bg-[#4b0705] text-[#FDF8EE] px-8 py-3.5 rounded-full font-sans font-bold text-[14px] md:text-[15px] hover:-translate-y-1 hover:bg-[#3a0504] transition-all duration-300 shadow-md"
          >
            Kembali ke Beranda
          </Link>
          
        </div>
      </div>
      
      <FooterLuxury />
    </main>
  );
}
