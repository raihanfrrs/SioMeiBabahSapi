import React from "react";
import RevealWrapper from "@/components/RevealWrapper";
import { buildWhatsAppLink, b2bInquiryMessage } from "@/utils/whatsapp";

export default function PartnerNote() {
  return (
    <section 
      className="w-full bg-brand-cream relative"
      style={{ paddingTop: "2rem", paddingBottom: "8rem" }}
    >
      <div className="section-inner flex flex-col items-center w-full">
        <RevealWrapper className="w-full max-w-[900px]">
          <div 
            className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            style={{
              backgroundColor: "rgba(253, 248, 238, 0.95)",
              border: "1px solid rgba(199, 146, 62, 0.4)", // soft gold
              borderRadius: "24px",
              padding: "clamp(32px, 5vw, 48px)",
              boxShadow: "0 10px 40px -15px rgba(90, 40, 30, 0.06)"
            }}
          >
            <div className="flex flex-col flex-1 text-left max-w-2xl">
              <h4 
                className="font-sans font-bold text-[#4b0705] mb-4"
                style={{ fontSize: "20px" }}
              >
                Catatan untuk Partner
              </h4>
              <p 
                className="font-sans text-[#4b0705]/80 text-[15px] md:text-[16px] leading-[1.65]"
              >
                Produk dapat disesuaikan untuk kebutuhan supply rutin, event, maupun pengembangan menu khusus. Detail harga, volume, sistem pengiriman, dan kebutuhan sample dapat didiskusikan langsung melalui WhatsApp.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto flex justify-start md:justify-end">
              <a 
                href={buildWhatsAppLink(b2bInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 w-full md:w-auto text-center"
                style={{
                  backgroundColor: "transparent",
                  color: "#4b0705",
                  border: "2px solid #4b0705",
                  borderRadius: "999px",
                  padding: "14px 28px",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "0.02em",
                }}
              >
                Konsultasi Partner F&B
              </a>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
