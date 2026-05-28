"use client";

import React, { useRef, useState, useEffect } from "react";
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Gloock } from "next/font/google";

const gloock = Gloock({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloock",
});

const FooterLuxury = () => {
  const { footer } = siteContent;
  const footerRef = useRef<HTMLElement>(null);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Focus trap & Escape key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowPrivacyModal(false);
        setShowTermsModal(false);
      }
    };
    if (showPrivacyModal || showTermsModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPrivacyModal, showTermsModal]);

  const brandText = "babah sapi";

  // Logo animation variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      transform: "none"
    },
    visible: {
      opacity: 1,
      transform: "none",
      transition: {
        duration: 0.45,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <footer 
        ref={footerRef} 
        id="footer"
        data-nav-theme="light"
        style={{ backgroundColor: "#F4EBDD", color: "#5A0906", overflowX: "hidden", width: "100%" }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div 
          style={{ 
            maxWidth: "100%", 
            margin: "0 auto", 
            padding: "40px 24px 24px", 
            width: "100%" 
          }}
          className="md:max-w-[860px] md:px-[40px] md:pt-[72px] md:pb-[28px] xl:max-w-[1180px]"
        >
          
          {/* Top Footer Area */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-[48px] items-start w-full">
            
            {/* Mobile Wrapper for Navigation & Socials */}
            <div 
              className="flex flex-col gap-[48px] w-full col-span-1 md:col-span-2 md:contents"
            >
              {/* Column 1: Navigation Links */}
              <div className="flex flex-col w-full">
                <h5 
                  style={{ fontSize: "9px", letterSpacing: "0.18em", marginBottom: "10px", opacity: 0.65, fontWeight: 700 }}
                  className="font-sans uppercase text-[#5A0906]"
                >
                  Navigasi
                </h5>
                <div 
                  style={{ display: "flex", flexDirection: "column", gap: "8px" }}
                  className="text-[14px] md:text-[15px] leading-[1.65] font-sans font-medium text-left"
                >
                  {siteContent.navigation.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={item.href} 
                      onClick={(e) => {
                        if (item.href.startsWith("/#")) {
                          const targetId = item.href.substring(2);
                          const targetElement = document.getElementById(targetId);
                          if (targetElement) {
                            e.preventDefault();
                            targetElement.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                      className="text-[#5A0906] hover:opacity-60 focus-visible:outline-none focus-visible:underline transition-opacity block w-fit"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 2: Kontak */}
              <div className="flex flex-col w-full">
                <h5 
                  style={{ fontSize: "9px", letterSpacing: "0.18em", marginBottom: "10px", opacity: 0.65, fontWeight: 700 }}
                  className="font-sans uppercase text-[#5A0906]"
                >
                  Kontak
                </h5>
                <div 
                  style={{ display: "flex", flexDirection: "column", gap: "8px" }}
                  className="text-[14px] md:text-[15px] leading-[1.65] font-sans font-medium text-left"
                >
                  <a href="https://wa.me/6281333903187" target="_blank" rel="noopener noreferrer" className="text-[#5A0906] hover:opacity-60 transition-opacity">
                    WhatsApp: 0813-3390-3187
                  </a>
                  <a href="mailto:siomeibabahsapi@gmail.com" className="text-[#5A0906] hover:opacity-60 transition-opacity">
                    Email: siomeibabahsapi@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* Column 3: Brand Statement */}
            <div 
              className="flex flex-col w-full md:col-span-1 md:items-start mt-[36px] md:mt-0"
            >
              <h5 
                className="hidden md:block font-sans uppercase text-[#5A0906]"
                style={{ fontSize: "9px", letterSpacing: "0.18em", marginBottom: "10px", opacity: 0.65, fontWeight: 700 }}
              >
                Tentang Kami
              </h5>
              <p className="text-[#5A0906]/80 font-sans text-sm text-left mb-4 max-w-[430px] leading-relaxed">
                {footer.brandStatement}
              </p>
            </div>

          </div>

          {/* Big Logo Area */}
          <div 
            className="flex flex-col justify-center items-center pointer-events-none select-none w-full"
            style={{ marginTop: "56px", marginBottom: "44px", overflow: "visible" }}
          >
            {/* Mobile Stacking Version */}
            <motion.h2 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className={`${gloock.className} md:hidden text-[#5A0906] text-center flex flex-col items-center w-full break-normal`}
              style={{ fontSize: "clamp(86px, 28vw, 150px)", lineHeight: 0.78, letterSpacing: "-0.045em" }}
            >
              <span className="flex">
                {"babah".split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block motion-reduce:!opacity-100">
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="flex">
                {"sapi".split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block motion-reduce:!opacity-100">
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>

            {/* Tablet/Desktop Single Line Version */}
            <motion.h2 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className={`${gloock.className} hidden md:flex flex-wrap justify-center text-[#5A0906] text-center w-full`}
              style={{ fontSize: "clamp(140px, 18vw, 260px)", lineHeight: 0.82, letterSpacing: "-0.06em" }}
            >
              {brandText.split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants} 
                  className="inline-block motion-reduce:!opacity-100"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          {/* Bottom Meta */}
          <div 
            className="text-[#5A0906] font-sans font-medium w-full flex flex-col items-center text-center gap-6"
            style={{ borderTop: "1px solid rgba(90, 9, 6, 0.18)", paddingTop: "24px", paddingBottom: "20px" }}
          >
            {/* Legal Links & Copyright */}
            <div 
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px 24px" }}
              className="w-full uppercase text-[10px] tracking-[0.08em]"
            >
              <button onClick={() => setShowPrivacyModal(true)} className="hover:opacity-60 transition-opacity">Kebijakan Privasi</button>
              <button onClick={() => setShowTermsModal(true)} className="hover:opacity-60 transition-opacity">Syarat & Ketentuan</button>
              <span>{footer.copyright}</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacyModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#1F140F]/80 backdrop-blur-sm"
              onClick={() => setShowPrivacyModal(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[720px] bg-[#FDF8EE] border border-[#e7ded2] rounded-xl shadow-2xl overflow-y-auto max-h-[90vh] text-left"
              style={{ padding: "clamp(32px, 5vw, 48px)" }}
            >
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="absolute top-5 right-5 md:top-6 md:right-6 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/70 backdrop-blur hover:bg-white text-[#4b0705] transition-all shadow-sm hover:shadow-md"
                aria-label="Tutup modal"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-3xl md:text-5xl font-editorial text-[#4b0705] mb-4 pr-10">Kebijakan Privasi</h2>
              <p className="text-sm text-[#4b0705]/60 mb-10 pb-6 border-b border-[#4b0705]/10">Terakhir diperbarui: Mei 2026</p>

              <div className="flex flex-col gap-8 text-[#4b0705]/85" style={{ lineHeight: "1.75" }}>
                <section>
                  <h3 className="text-xl font-bold font-sans text-[#4b0705] mb-3">1. Pendahuluan</h3>
                  <p>
                    Sio Mei Babah Sapi ("kami", "kita", atau "milik kami") menghormati privasi Anda dan berkomitmen 
                    untuk melindungi data pribadi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                    dan menjaga informasi Anda saat Anda menggunakan layanan dan berinteraksi dengan platform kami.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold font-sans text-[#4b0705] mb-3">2. Data yang Kami Kumpulkan</h3>
                  <p className="mb-2">Kami dapat mengumpulkan informasi berikut saat Anda melakukan pemesanan atau menghubungi kami:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Nama lengkap</li>
                    <li>Nomor WhatsApp / telepon</li>
                    <li>Alamat pengiriman</li>
                    <li>Detail pesanan dan preferensi produk</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold font-sans text-[#4b0705] mb-3">3. Penggunaan Informasi</h3>
                  <p className="mb-2">Informasi yang kami kumpulkan digunakan semata-mata untuk:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Memproses dan memverifikasi pesanan Anda.</li>
                    <li>Mengatur pengiriman produk.</li>
                    <li>Mengkomunikasikan pembaruan status pesanan.</li>
                    <li>Menanggapi pertanyaan terkait B2B supply atau kerja sama.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold font-sans text-[#4b0705] mb-3">4. Keamanan Data</h3>
                  <p>
                    Kami menerapkan langkah-langkah keamanan internal untuk melindungi informasi pribadi Anda 
                    dari akses yang tidak sah. Kami tidak akan pernah menjual, menyewakan, atau membagikan 
                    data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran tanpa izin eksplisit Anda.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold font-sans text-[#4b0705] mb-3">5. Hubungi Kami</h3>
                  <p>
                    Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini atau ingin memperbarui 
                    informasi Anda, silakan hubungi kami melalui WhatsApp di <strong>0813-3390-3187</strong> 
                    atau email di <strong>siomeibabahsapi@gmail.com</strong>.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Terms and Conditions Modal */}
      <AnimatePresence>
        {showTermsModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#1F140F]/80 backdrop-blur-sm"
              onClick={() => setShowTermsModal(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[720px] bg-[#FDF8EE] border border-[#e7ded2] rounded-xl shadow-2xl overflow-y-auto max-h-[90vh] text-left"
              style={{ padding: "clamp(32px, 5vw, 48px)" }}
            >
              <button 
                onClick={() => setShowTermsModal(false)}
                className="absolute top-5 right-5 md:top-6 md:right-6 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/70 backdrop-blur hover:bg-white text-[#4b0705] transition-all shadow-sm hover:shadow-md"
                aria-label="Tutup modal"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-3xl md:text-5xl font-editorial text-[#4b0705] mb-4 pr-10">Syarat & Ketentuan</h2>
              <p className="text-sm text-[#4b0705]/60 mb-10 pb-6 border-b border-[#4b0705]/10">Terakhir diperbarui: Mei 2026</p>

              <div className="flex flex-col gap-8 text-[#4b0705]/85" style={{ lineHeight: "1.75" }}>
                <section>
                  <h3 className="text-xl font-bold font-sans text-[#4b0705] mb-3">1. Informasi Umum</h3>
                  <p>
                    Dengan melakukan pemesanan di Sio Mei Babah Sapi, Anda setuju untuk terikat oleh Syarat dan Ketentuan berikut. 
                    Layanan kami ditujukan untuk pembelian personal (B2C) maupun kebutuhan suplai partner (B2B).
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold font-sans text-[#4b0705] mb-3">2. Pemesanan dan Ketersediaan</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Pemesanan dapat dilakukan melalui WhatsApp atau sistem pre-order (PO).</li>
                    <li>Untuk suplai B2B, Minimum Order Quantity (MOQ) adalah mulai dari 50 pack atau dapat disesuaikan.</li>
                    <li>Kami berhak menolak pesanan jika kapasitas produksi telah penuh pada hari tersebut.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold font-sans text-[#4b0705] mb-3">3. Harga dan Pembayaran</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Harga yang tertera dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.</li>
                    <li>Pembayaran untuk pesanan ritel dilakukan 100% di muka kecuali disepakati lain.</li>
                    <li>Ketentuan pembayaran untuk partner B2B akan diatur secara terpisah dalam kontrak atau faktur (invoice).</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold font-sans text-[#4b0705] mb-3">4. Pengiriman</h3>
                  <p>
                    Pengiriman produk menyesuaikan lokasi, jumlah pesanan, dan metode pengiriman yang disepakati melalui WhatsApp. Estimasi waktu dan biaya pengiriman akan dikonfirmasi terlebih dahulu sebelum pesanan diproses.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold font-sans text-[#4b0705] mb-3">5. Retur / Komplain Produk</h3>
                  <p>
                    Karena Sio Mei termasuk produk makanan, pengembalian tidak berlaku untuk alasan perubahan pikiran, salah memilih produk, atau pembatalan sepihak setelah pesanan diproses. Komplain dapat diajukan pada hari yang sama setelah produk diterima apabila terdapat kesalahan pesanan atau kendala kondisi produk saat diterima. Komplain wajib disertai foto atau video pendukung.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FooterLuxury;
