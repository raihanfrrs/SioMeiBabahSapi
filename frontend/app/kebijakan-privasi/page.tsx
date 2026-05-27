import React from "react";
import Navbar from "@/components/Navbar";
import FooterLuxury from "@/components/FooterLuxury";
import RevealWrapper from "@/components/RevealWrapper";

export default function KebijakanPrivasi() {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-dark overflow-hidden flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex justify-center w-full pt-[120px] md:pt-[160px] pb-24 px-6">
        <div className="w-full max-w-[720px] mx-auto bg-[#FDF8EE] border border-[#e7ded2] rounded-xl p-8 md:p-12 shadow-sm">
          <RevealWrapper>
            <h1 className="text-3xl md:text-5xl font-editorial text-[#4b0705] mb-4">Kebijakan Privasi</h1>
            <p className="text-sm text-[#4b0705]/60 mb-10 pb-6 border-b border-[#4b0705]/10">Terakhir diperbarui: Mei 2026</p>
          </RevealWrapper>

          <RevealWrapper delay={150}>
            <div className="flex flex-col gap-8 text-[#4b0705]/85" style={{ lineHeight: "1.75" }}>
              <section>
                <h2 className="text-xl font-bold font-sans text-[#4b0705] mb-3">1. Pendahuluan</h2>
                <p>
                  Sio Mei Babah Sapi ("kami", "kita", atau "milik kami") menghormati privasi Anda dan berkomitmen 
                  untuk melindungi data pribadi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                  dan menjaga informasi Anda saat Anda menggunakan layanan dan berinteraksi dengan platform kami.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold font-sans text-[#4b0705] mb-3">2. Data yang Kami Kumpulkan</h2>
                <p className="mb-2">Kami dapat mengumpulkan informasi berikut saat Anda melakukan pemesanan atau menghubungi kami:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nama lengkap</li>
                  <li>Nomor WhatsApp / telepon</li>
                  <li>Alamat pengiriman</li>
                  <li>Detail pesanan dan preferensi produk</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold font-sans text-[#4b0705] mb-3">3. Penggunaan Informasi</h2>
                <p className="mb-2">Informasi yang kami kumpulkan digunakan semata-mata untuk:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Memproses dan memverifikasi pesanan Anda.</li>
                  <li>Mengatur pengiriman produk.</li>
                  <li>Mengkomunikasikan pembaruan status pesanan.</li>
                  <li>Menanggapi pertanyaan terkait B2B supply atau kerja sama.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold font-sans text-[#4b0705] mb-3">4. Keamanan Data</h2>
                <p>
                  Kami menerapkan langkah-langkah keamanan internal untuk melindungi informasi pribadi Anda 
                  dari akses yang tidak sah. Kami tidak akan pernah menjual, menyewakan, atau membagikan 
                  data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran tanpa izin eksplisit Anda.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold font-sans text-[#4b0705] mb-3">5. Hubungi Kami</h2>
                <p>
                  Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini atau ingin memperbarui 
                  informasi Anda, silakan hubungi kami melalui WhatsApp di <strong>0813-3390-3187</strong> 
                  atau email di <strong>siomeibabahsapi@gmail.com</strong>.
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
