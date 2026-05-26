import Navbar from "@/components/Navbar";
import FooterLuxury from "@/components/FooterLuxury";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan | Sio Mei Babah Sapi",
  description: "Syarat dan ketentuan pemesanan, pengiriman, dan kerjasama dengan Sio Mei Babah Sapi.",
  alternates: { canonical: "/syarat-ketentuan" }
};

export default function SyaratKetentuanPage() {
  return (
    <main className="min-h-screen bg-[#F4EBDD] relative overflow-hidden noise-overlay flex flex-col">
      <Navbar />
      
      <div className="flex-1 w-full pt-[90px] pb-[90px] md:pt-[110px] md:pb-[110px] lg:pt-[140px] lg:pb-[140px] px-4 md:px-8">
        <div className="max-w-[900px] xl:max-w-[1040px] mx-auto flex flex-col items-center">
          
          <span className="text-[#C7923E] font-sans font-bold uppercase tracking-[0.3em] mb-4 text-[11px] md:text-[12px] text-center">
            INFORMASI PEMESANAN
          </span>
          
          <h1 className="font-editorial text-[#4b0705] text-4xl md:text-5xl lg:text-6xl text-center mb-6">
            Syarat & Ketentuan
          </h1>
          
          <div className="w-16 md:w-24 h-px bg-[#C7923E]/40 mb-10 md:mb-12" />

          <div className="w-full bg-[#FDF8EE]/80 backdrop-blur-sm border border-[#C7923E]/20 rounded-[28px] p-[28px] px-[22px] md:p-[48px] md:px-[56px] shadow-sm flex flex-col text-left">
            <div className="text-[15px] md:text-[16px] lg:text-[18px] leading-[1.8] text-[#4b0705]/85 font-sans space-y-6">
              <p>
                Dengan melakukan pemesanan Sio Mei Babah Sapi, pelanggan dianggap telah memahami dan menyetujui ketentuan berikut:
              </p>
              
              <ol className="list-decimal pl-5 md:pl-6 space-y-4">
                <li>Produk tersedia dalam pilihan siap santap dan frozen sesuai ketersediaan.</li>
                <li>Harga, varian, dan ketersediaan produk dapat berubah sewaktu-waktu dengan konfirmasi terlebih dahulu kepada pelanggan.</li>
                <li>Foto produk pada website digunakan sebagai representasi visual. Tampilan produk dapat sedikit berbeda karena proses produksi, pengemasan, dan penyajian.</li>
                <li>Pesanan diproses setelah pelanggan melakukan konfirmasi melalui WhatsApp atau email.</li>
                <li>Untuk pesanan jumlah banyak, acara, reseller, restoran, cafe, bar, club, atau kebutuhan B2B, detail harga, jumlah minimum, lead time, dan pengiriman akan didiskusikan terlebih dahulu.</li>
                <li>Produk frozen perlu disimpan dalam freezer agar kualitas tetap terjaga.</li>
                <li>Komplain terkait pesanan dapat disampaikan maksimal 1x24 jam setelah produk diterima dengan menyertakan foto atau video sebagai bukti pendukung.</li>
              </ol>
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
