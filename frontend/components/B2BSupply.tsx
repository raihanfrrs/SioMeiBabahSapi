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
    >
      <div className="section-inner">
        <RevealWrapper>
          <div className="flex flex-col items-center text-center" style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}>
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
                fontSize: "clamp(40px, 6vw, 84px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                maxWidth: "900px",
                marginBottom: "22px",
              }}
            >
              {headline}
            </h2>
            <p 
              className="font-sans font-medium"
              style={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                lineHeight: 1.6,
                color: "rgba(75, 7, 5, 0.75)", // softened dark brown
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              {subheadline}
            </p>
          </div>
        </RevealWrapper>

        <div 
          className="grid w-full mx-auto"
          style={{
            maxWidth: "1200px",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(24px, 4vw, 40px)",
          }}
        >
          {/* Card Kiri */}
          <RevealWrapper delay={100} className="flex md:col-span-1">
            <div 
              className="flex flex-col w-full"
              style={{
                backgroundColor: "rgba(253, 248, 238, 0.6)", // cream soft / transparent
                border: "1px solid rgba(90,40,30,0.12)",
                borderRadius: "18px",
                padding: "clamp(24px, 4vw, 36px)",
                boxShadow: "0 8px 30px -10px rgba(90, 40, 30, 0.04)"
              }}
            >
              <h3 
                className="font-sans font-bold text-[#4b0705]"
                style={{ fontSize: "clamp(20px, 2.5vw, 24px)", marginBottom: "12px" }}
              >
                {leftCard.title}
              </h3>
              <p 
                className="font-sans text-[#4b0705]/80"
                style={{ fontSize: "16px", lineHeight: 1.6, marginBottom: "24px" }}
              >
                {leftCard.description}
              </p>
              
              <ul className="flex flex-col gap-3 mb-8">
                {leftCard.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span 
                      className="inline-block flex-shrink-0 mt-[8px] mr-3 rounded-full"
                      style={{ width: "6px", height: "6px", backgroundColor: "#C7923E" }}
                    />
                    <span className="font-sans text-[#4b0705]/80 text-[15px] leading-[1.6]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <h4 
                className="font-sans font-bold text-[#4b0705] mb-4 uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.1em" }}
              >
                {leftCard.menuLabel}
              </h4>
              <div className="flex flex-wrap gap-[10px]">
                {leftCard.menuIdeas.map((idea: string, i: number) => (
                  <div 
                    key={i}
                    className="flex items-center justify-center font-sans font-medium"
                    style={{
                      border: "1px solid rgba(199, 146, 62, 0.3)", // cream/gold soft
                      borderRadius: "999px",
                      padding: "10px 16px",
                      fontSize: "13px",
                      color: "#4b0705",
                      backgroundColor: "rgba(255,255,255,0.4)"
                    }}
                  >
                    {idea}
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Card Kanan */}
          <RevealWrapper delay={200} className="flex md:col-span-1">
            <div 
              className="flex flex-col w-full"
              style={{
                backgroundColor: "#fffaf2", // cream terang
                border: "1px solid rgba(90,40,30,0.14)",
                borderRadius: "18px",
                padding: "clamp(24px, 4vw, 36px)",
                boxShadow: "0 10px 40px -15px rgba(90, 40, 30, 0.06)"
              }}
            >
              <h3 
                className="font-sans font-bold text-[#4b0705]"
                style={{ fontSize: "clamp(20px, 2.5vw, 24px)", marginBottom: "24px" }}
              >
                {rightCard.title}
              </h3>

              <div className="flex flex-col w-full">
                {rightCard.details.map((row: any, i: number) => (
                  <div 
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-4"
                    style={{
                      borderBottom: i === rightCard.details.length - 1 ? "none" : "1px solid rgba(90,40,30,0.08)",
                    }}
                  >
                    <span 
                      className="font-sans uppercase font-bold text-[#4b0705]/60 mb-1 sm:mb-0"
                      style={{ fontSize: "11px", letterSpacing: "0.05em" }}
                    >
                      {row.key}
                    </span>
                    <span 
                      className="font-editorial text-[#4b0705] sm:text-right"
                      style={{ fontSize: "18px" }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>

        {/* CTA Area */}
        <RevealWrapper delay={300}>
          <div 
            className="flex flex-col items-center justify-center w-full"
            style={{ marginTop: "clamp(32px, 5vw, 42px)" }}
          >
            <a 
              href={buildWhatsAppLink(b2bInquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              style={{
                backgroundColor: "#6b0f0f", // maroon gelap
                color: "#FDF8EE", // cream
                borderRadius: "999px",
                padding: "clamp(16px, 2vw, 18px) clamp(24px, 3vw, 36px)",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "0.02em",
                minWidth: "min(100%, 360px)",
                maxWidth: "360px", // max on mobile
                boxShadow: "0 10px 25px -5px rgba(107, 15, 15, 0.4)",
              }}
            >
              <span>{cta}</span>
            </a>
          </div>
        </RevealWrapper>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 1024px) {
          #b2b .grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
          #b2b a {
            min-width: 340px !important;
            max-width: none !important;
          }
        }
      `}} />
    </section>
  );
}
