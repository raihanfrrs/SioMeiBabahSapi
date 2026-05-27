import React from "react";
import Navbar from "@/components/Navbar";
import FooterLuxury from "@/components/FooterLuxury";
import RevealWrapper from "@/components/RevealWrapper";

export default function SyaratKetentuan() {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-dark overflow-hidden flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex justify-center w-full pt-[120px] md:pt-[160px] pb-24 px-6">
        <div className="w-full max-w-[720px] mx-auto bg-[#FDF8EE] border border-[#e7ded2] rounded-xl p-8 md:p-12 shadow-sm">
          <RevealWrapper>
            <h1 className="text-3xl md:text-5xl font-editorial text-[#4b0705] mb-4">Syarat & Ketentuan</h1>
            <p className="text-sm text-[#4b0705]/60 mb-10 pb-6 border-b border-[#4b0705]/10">Terakhir diperbarui: Mei 2026</p>
          </RevealWrapper>

          <RevealWrapper delay={150}>
            <div className="flex flex-col gap-8 text-[#4b0705]/85" style={{ lineHeight: "1.75" }}>
              <section>
                <h2 className="text-xl font-bold font-sans text-[#4b0705] mb-3">1. Informasi Umum</h2>
                <p>
                  Dengan melakukan pemesanan di Sio Mei Babah Sapi, Anda setuju untuk terikat oleh Syarat dan Ketentuan berikut. 
                  Layanan kami ditujukan untuk pembelian personal (B2C) maupun kebutuhan suplai partner (B2B).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold font-sans text-[#4b0705] mb-3">2. Pemesanan dan Ketersediaan</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pemesanan dapat dilakukan melalui WhatsApp atau sistem pre-order (PO).</li>
                  <li>Untuk suplai B2B, Minimum Order Quantity (MOQ) adalah mulai dari 50 pack atau dapat disesuaikan.</li>
                  <li>Kami berhak menolak pesanan jika kapasitas produksi telah penuh pada hari tersebut.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold font-sans text-[#4b0705] mb-3">3. Harga dan Pembayaran</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Harga yang tertera dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.</li>
                  <li>Pembayaran untuk pesanan ritel dilakukan 100% di muka kecuali disepakati lain.</li>
                  <li>Ketentuan pembayaran untuk partner B2B akan diatur secara terpisah dalam kontrak atau faktur (invoice).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold font-sans text-[#4b0705] mb-3">4. Pengiriman</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Risiko selama pengiriman menggunakan kurir pihak ketiga menjadi tanggung jawab pembeli, namun kami memastikan pengemasan dilakukan dengan standar keamanan tinggi.</li>
                  <li>Untuk pesanan frozen, sangat disarankan menggunakan pengiriman instan/same-day untuk menjaga kualitas produk.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold font-sans text-[#4b0705] mb-3">5. Kualitas Produk dan Komplain</h2>
                <p>
                  Kami menjamin kualitas produk saat keluar dari dapur produksi kami. Jika terdapat keluhan 
                  terkait pesanan, harap melapor kepada kami maksimal 1x24 jam setelah produk diterima 
                  disertai bukti foto/video agar dapat kami tindak lanjuti.
                </p>
              </section>
            </div>
          </RevealWrapper>
        </div>
      </div>

      <FooterLuxury />
    </main>
  );
}
