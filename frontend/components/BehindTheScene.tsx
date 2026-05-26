import React from "react";
import { siteContent } from "@/data/siteContent";
import RevealWrapper from "@/components/RevealWrapper";
import { generalOrderMessage, buildWhatsAppLink } from "@/utils/whatsapp";

export default function BehindTheScene() {
  const { label, headline, subheadline, footerNote, cta, gallery } = siteContent.behindTheScene as any;

  return (
    <section 
      id="behind-the-scene"
      className="section-shell relative w-full bg-brand-cream"
    >
      <div className="section-inner flex flex-col items-center">
        <RevealWrapper>
          <div className="flex flex-col items-center text-center" style={{ marginBottom: "clamp(56px, 8vw, 72px)" }}>
            <span 
              className="uppercase font-sans font-bold"
              style={{
                fontSize: "12px",
                letterSpacing: "0.25em",
                color: "#C7923E", // muted gold
                marginBottom: "16px",
              }}
            >
              {label}
            </span>
            <h2 
              className="font-editorial text-[#4b0705]"
              style={{
                fontSize: "clamp(46px, 7vw, 84px)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
                maxWidth: "900px"
              }}
            >
              {headline}
            </h2>
            <p 
              className="font-sans font-medium"
              style={{
                fontSize: "clamp(18px, 2.5vw, 22px)",
                lineHeight: 1.6,
                color: "rgba(75, 7, 5, 0.75)", // softened dark brown
                maxWidth: "860px",
                margin: "0 auto",
              }}
            >
              {subheadline}
            </p>
          </div>
        </RevealWrapper>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto max-w-[1200px]"
          style={{
            gap: "clamp(24px, 4vw, 40px)",
            marginBottom: "clamp(48px, 6vw, 64px)",
          }}
        >
          {gallery.map((item: any, index: number) => (
            <RevealWrapper 
              key={item.id} 
              delay={150 * index}
              className="flex"
            >
              <div 
                className="flex flex-col w-full overflow-hidden transition-shadow duration-500 hover:shadow-2xl group"
                style={{
                  backgroundColor: "#FDF8EE", // ivory/off-white
                  border: "1px solid rgba(75, 25, 20, 0.08)",
                  borderRadius: "18px",
                  boxShadow: "0 10px 40px -15px rgba(75, 25, 20, 0.05)"
                }}
              >
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div 
                  className="flex flex-col"
                  style={{ padding: "clamp(24px, 4vw, 36px)" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="uppercase font-sans font-bold"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        color: "#C7923E",
                        backgroundColor: "rgba(199, 146, 62, 0.1)",
                        padding: "6px 10px",
                        borderRadius: "6px"
                      }}
                    >
                      {item.badge}
                    </span>
                    <span 
                      className="font-editorial"
                      style={{
                        fontSize: "24px",
                        color: "rgba(199, 146, 62, 0.5)",
                      }}
                    >
                      0{item.id}
                    </span>
                  </div>

                  <h3 
                    className="font-sans font-bold text-[#4b0705]"
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 24px)",
                      lineHeight: 1.3,
                      marginBottom: "12px",
                      letterSpacing: "0.01em"
                    }}
                  >
                    {item.label}
                  </h3>
                  
                  <p 
                    className="font-sans text-[#4b0705]/80"
                    style={{
                      fontSize: "clamp(16px, 1.8vw, 17px)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.caption}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={300}>
          <div className="flex flex-col items-center text-center">
            <p 
              className="font-sans font-medium mb-6"
              style={{
                fontSize: "16px",
                color: "rgba(75, 7, 5, 0.7)",
                letterSpacing: "0.02em"
              }}
            >
              {footerNote}
            </p>
            <a 
              href={buildWhatsAppLink(generalOrderMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#4b0705] text-[#FDF8EE] transition-all duration-500 hover:bg-[#5A0906] hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl group"
              style={{
                height: "60px",
                padding: "0 36px",
                borderRadius: "30px", // pill
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              <span>{cta}</span>
              <svg 
                className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
