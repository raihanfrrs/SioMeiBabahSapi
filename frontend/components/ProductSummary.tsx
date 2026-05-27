import React from "react";
import { siteContent } from "@/data/siteContent";
import RevealWrapper from "@/components/RevealWrapper";

export default function ProductSummary() {
  const { label, items } = siteContent.productSummary;

  return (
    <section 
      id="summary"
      className="section-shell relative w-full bg-brand-cream"
    >
      <div className="section-inner">
        <RevealWrapper>
          <div className="flex flex-col items-center mx-auto text-center">
            <h2 
              className="uppercase font-sans font-bold text-center"
              style={{
                fontSize: "12px",
                letterSpacing: "0.25em",
                color: "#4b0705",
                marginBottom: "clamp(24px, 4vw, 40px)", 
              }}
            >
              {label}
            </h2>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={150}>
          <div 
            className="w-full mx-auto"
            style={{
              maxWidth: "1120px",
              backgroundColor: "#FDF8EE", 
              border: "1px solid #e7ded2",
              borderRadius: "14px",
              boxShadow: "0 15px 40px -10px rgba(75, 25, 20, 0.08)",
              padding: "clamp(28px, 5vw, 56px) clamp(22px, 6vw, 64px)", 
            }}
          >
            <div 
              className="grid grid-cols-1 md:grid-cols-2 w-full"
              style={{
                rowGap: "clamp(32px, 4vw, 40px)",
                columnGap: "clamp(48px, 6vw, 96px)", 
              }}
            >
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col text-left"
                  style={{
                    borderBottom: "1px solid rgba(75, 25, 20, 0.12)",
                    paddingBottom: "14px",
                  }}
                >
                  <span 
                    className="uppercase font-sans font-bold"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      color: "rgba(90, 9, 6, 0.7)", 
                      marginBottom: "6px" 
                    }}
                  >
                    {item.key}
                  </span>
                  <span 
                    className="font-editorial text-[#4b0705]"
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 22px)",
                      lineHeight: 1.35,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
