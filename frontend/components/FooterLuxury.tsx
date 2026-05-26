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
  
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);

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

  const closeModal = () => setModalType(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalType]);

  const renderModalContent = () => {
    if (modalType === "privacy") {
      return (
        <div className="flex flex-col gap-5 font-sans text-[15px] md:text-[16px] leading-relaxed text-[#4b0705]/85 w-full">
          <p>
            Sio Mei Babah Sapi menghargai privasi setiap pelanggan. Data yang diberikan melalui WhatsApp, email, atau formulir website seperti nama, nomor telepon, alamat pengiriman, dan detail pesanan hanya digunakan untuk memproses pemesanan, pengiriman, konfirmasi pembayaran, layanan pelanggan, dan komunikasi terkait produk.
          </p>
          <p>
            Kami tidak menjual, menyewakan, atau membagikan data pelanggan kepada pihak lain di luar kebutuhan operasional pemesanan dan pengiriman. Data pelanggan disimpan secara wajar untuk kebutuhan riwayat pesanan, layanan pelanggan, dan administrasi internal.
          </p>
          <p>
            Pelanggan dapat menghubungi kami melalui email <a href="mailto:siomeibabahsapi@gmail.com" className="font-bold underline hover:opacity-70 text-[#4b0705]">siomeibabahsapi@gmail.com</a> untuk meminta pembaruan, koreksi, atau penghapusan data yang pernah diberikan.
          </p>
        </div>
      );
    }
    if (modalType === "terms") {
      return (
        <div className="flex flex-col gap-5 font-sans text-[15px] md:text-[16px] leading-relaxed text-[#4b0705]/85 w-full">
          <p>
            Dengan melakukan pemesanan Sio Mei Babah Sapi, pelanggan dianggap telah memahami dan menyetujui ketentuan berikut:
          </p>
          <ul className="list-disc pl-[22px] flex flex-col gap-[12px]">
            <li>Produk tersedia dalam pilihan siap santap dan frozen sesuai ketersediaan.</li>
            <li>Harga, varian, dan ketersediaan produk dapat berubah sewaktu-waktu dengan konfirmasi terlebih dahulu kepada pelanggan.</li>
            <li>Foto produk pada website digunakan sebagai representasi visual. Tampilan produk dapat sedikit berbeda karena proses produksi dan penyajian.</li>
            <li>Pesanan diproses setelah pelanggan melakukan konfirmasi melalui WhatsApp atau email.</li>
            <li>Untuk pesanan jumlah banyak, acara, reseller, restoran, cafe, bar, club, atau kebutuhan B2B, detail harga, jumlah minimum, lead time, dan pengiriman akan didiskusikan terlebih dahulu.</li>
            <li>Produk frozen perlu disimpan dalam freezer agar kualitas tetap terjaga.</li>
            <li>Komplain terkait pesanan dapat disampaikan maksimal 1x24 jam setelah produk diterima dengan menyertakan foto atau video sebagai bukti pendukung.</li>
          </ul>
        </div>
      );
    }
    return null;
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
                  <a href="https://wa.me/6281333903187?text=Halo%20Babah%20Sapi%2C%20saya%20ingin%20bertanya%20tentang%20Sio%20Mei." target="_blank" rel="noopener noreferrer" className="text-[#5A0906] hover:opacity-60 transition-opacity">
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
              <Link href="/kebijakan-privasi" className="hover:opacity-60 transition-opacity">Kebijakan Privasi</Link>
              <Link href="/syarat-ketentuan" className="hover:opacity-60 transition-opacity">Syarat & Ketentuan</Link>
              <span>© 2026 Sio Mei Babah Sapi. Hak cipta dilindungi.</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Modal Overlay & Content */}
      <AnimatePresence>
        {modalType && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            data-protected-modal="true"
            onContextMenu={(e) => e.preventDefault()}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
              className="absolute inset-0 bg-[#2D1616]/60 backdrop-blur-[2px] cursor-pointer"
              onContextMenu={(e) => e.preventDefault()}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[92vw] max-w-[760px] max-h-[80vh] bg-[#FDF8EE] border border-[#d8b36a]/30 rounded-3xl shadow-2xl flex flex-col !pt-6 !pb-6 !px-6 sm:!pt-8 sm:!pb-8 sm:!px-8 md:!pt-9 md:!pb-9 md:!px-11 select-none"
              onContextMenu={(e) => e.preventDefault()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-[18px] right-[18px] w-[36px] h-[36px] md:w-[40px] md:h-[40px] flex items-center justify-center rounded-full bg-transparent text-[#4b0705] hover:bg-[#d8b36a]/20 transition-colors z-10"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h3 className="font-editorial text-[30px] md:text-[38px] text-[#4b0705] leading-tight !pr-[48px] !mb-4">
                {modalType === "privacy" ? "Kebijakan Privasi" : "Syarat & Ketentuan"}
              </h3>
              
              <div className="w-full h-px bg-[#d8b36a]/40 mb-[20px] flex-shrink-0" />
              
              <div className="overflow-y-auto pr-2 custom-scrollbar" onContextMenu={(e) => e.preventDefault()}>
                {renderModalContent()}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FooterLuxury;
