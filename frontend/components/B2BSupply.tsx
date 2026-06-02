import React from "react";
import { siteContent } from "@/data/siteContent";
import RevealWrapper from "@/components/RevealWrapper";
import { buildWhatsAppLink, b2bInquiryMessage } from "@/utils/whatsapp";

export default function B2BSupply() {
  const { label, headline, subheadline, leftCard, rightCard, cta } = siteContent.b2bSupply as any;

  return (
    <section 
      id="b2b"
      className="section-shell relative w-full bg-brand-cream"
      style={{ paddingBottom: "2rem" }}
    >
      <div className="section-inner" style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <RevealWrapper>
          <div className="flex flex-col items-center text-center" style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
            <span 
              className="uppercase font-sans font-bold"
              style={{
                fontSize: "12px",
                letterSpacing: "0.25em",
                color: "#C7923E", // gold soft
                marginBottom: "18px",
              }}
            >
              {label}
            </span>
            <h2 
              className="font-editorial text-[#4b0705]"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                maxWidth: "800px",
                marginBottom: "24px",
              }}
            >
              {headline}
            </h2>
            <p 
              className="font-sans font-medium"
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                lineHeight: 1.6,
                color: "rgba(75, 7, 5, 0.75)", // softened dark brown
                maxWidth: "680px",
                margin: "0 auto",
              }}
            >
              {subheadline}
            </p>
          </div>
        </RevealWrapper>

        <div 
          className="grid w-full grid-cols-1 lg:grid-cols-2"
          style={{
            gap: "clamp(24px, 4vw, 40px)",
            alignItems: "stretch"
          }}
        >
          {/* Card Kiri */}
          <RevealWrapper delay={100} className="flex h-full w-full">
            <div 
              className="flex flex-col w-full h-full"
              style={{
                backgroundColor: "rgba(253, 248, 238, 0.6)", // cream soft / transparent
                border: "1px solid rgba(90,40,30,0.12)",
                borderRadius: "18px",
                padding: "clamp(24px, 5vw, 40px)",
                boxShadow: "0 8px 30px -10px rgba(90, 40, 30, 0.04)"
              }}
            >
              <h3 
                className="font-sans font-bold text-[#4b0705]"
                style={{ fontSize: "clamp(20px, 2.5vw, 24px)", marginBottom: "16px" }}
              >
                {leftCard.title}
              </h3>
              <p 
                className="font-sans text-[#4b0705]/80"
                style={{ fontSize: "15px", lineHeight: 1.6, marginBottom: "28px" }}
              >
                {leftCard.description}
              </p>
              
              <ul className="flex flex-col gap-3.5">
                {leftCard.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span 
                      className="inline-block flex-shrink-0 mt-[7px] mr-3 rounded-full"
                      style={{ width: "6px", height: "6px", backgroundColor: "#C7923E" }}
                    />
                    <span className="font-sans text-[#4b0705]/85 text-[15px] leading-[1.5]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "auto", paddingTop: "40px" }}>
                <h4 
                  className="font-sans font-bold text-[#4b0705] mb-4 uppercase"
                  style={{ fontSize: "11px", letterSpacing: "0.1em" }}
                >
                  {leftCard.menuLabel}
                </h4>
                <div className="flex flex-wrap gap-[8px]">
                  {leftCard.menuIdeas.map((idea: string, i: number) => (
                    <div 
                      key={i}
                      className="flex items-center justify-center font-sans font-semibold"
                      style={{
                        border: "1px solid rgba(199, 146, 62, 0.5)", // gold thin border
                        borderRadius: "999px",
                        padding: "6px 14px",
                        fontSize: "12px",
                        color: "#6b0f0f", // maroon text
                        backgroundColor: "rgba(255,255,255,0.3)"
                      }}
                    >
                      {idea}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Card Kanan */}
          <RevealWrapper delay={200} className="flex h-full w-full">
            <div 
              className="flex flex-col w-full h-full"
              style={{
                backgroundColor: "#fffaf2", // cream terang
                border: "1px solid rgba(90,40,30,0.14)",
                borderRadius: "18px",
                padding: "clamp(24px, 5vw, 40px)",
                boxShadow: "0 10px 40px -15px rgba(90, 40, 30, 0.06)"
              }}
            >
              <h3 
                className="font-sans font-bold text-[#4b0705]"
                style={{ fontSize: "clamp(20px, 2.5vw, 24px)", marginBottom: "28px" }}
              >
                {rightCard.title}
              </h3>

              <div className="flex flex-col w-full">
                {rightCard.details.map((row: any, i: number) => (
                  <div 
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-start py-4"
                    style={{
                      borderBottom: i === rightCard.details.length - 1 ? "none" : "1px solid rgba(90,40,30,0.08)",
                    }}
                  >
                    <span 
                      className="font-sans font-bold text-[#4b0705]/70 mb-1 sm:mb-0 w-full sm:w-[160px] flex-shrink-0"
                      style={{ fontSize: "14px" }}
                    >
                      {row.key}
                    </span>
                    <span 
                      className="font-sans text-[#4b0705] font-medium"
                      style={{ fontSize: "14px", lineHeight: 1.5 }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
