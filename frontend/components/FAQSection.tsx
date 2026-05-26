"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/siteContent";
import RevealWrapper from "@/components/RevealWrapper";
import { buildWhatsAppLink, generalOrderMessage } from "@/utils/whatsapp";

export default function FAQSection() {
  const { label, headline, subheadline, ctaText, items } = siteContent.faq as any;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      className="section-shell relative w-full bg-brand-cream"
    >
      <div className="section-inner flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Column: Heading & Description */}
        <RevealWrapper className="flex w-full lg:w-[40%] flex-col lg:sticky lg:top-32 h-fit">
          <div className="flex flex-col w-full text-center lg:text-left max-w-[760px] mx-auto lg:mx-0">
            <span 
              className="uppercase font-sans font-bold"
              style={{
                fontSize: "12px",
                letterSpacing: "0.25em",
                color: "#c9943a", // gold accent
                marginBottom: "16px",
              }}
            >
              {label}
            </span>
            <h2 
              className="font-editorial"
              style={{
                fontSize: "clamp(44px, 7vw, 92px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: "#241812", // dark brown
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
                color: "rgba(36, 24, 18, 0.75)",
                maxWidth: "90%",
                margin: "0 auto lg:mx-0",
                marginBottom: "32px",
              }}
            >
              {subheadline}
            </p>
            
            <a 
              href={buildWhatsAppLink(generalOrderMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center lg:justify-start font-sans font-bold group transition-all duration-300"
              style={{
                fontSize: "15px",
                color: "#7a1510", // accent maroon
              }}
            >
              <span className="border-b border-[#7a1510]/30 group-hover:border-[#7a1510] pb-1 transition-colors">
                {ctaText}
              </span>
            </a>
          </div>
        </RevealWrapper>

        {/* Right Column: Accordion */}
        <RevealWrapper delay={200} className="flex w-full lg:w-[60%]">
          <div 
            className="flex flex-col w-full max-w-[760px] mx-auto lg:mx-0 overflow-hidden"
            style={{
              backgroundColor: "rgba(253, 248, 238, 0.9)", // soft ivory
              border: "1px solid #e8dccb", // soft beige border
              borderRadius: "20px",
              boxShadow: "0 10px 40px -15px rgba(36, 24, 18, 0.05)",
            }}
          >
            {items.map((item: any, index: number) => {
              const isOpen = openIndex === index;
              const isLast = index === items.length - 1;

              return (
                <div 
                  key={index}
                  className="flex flex-col"
                  style={{
                    borderBottom: isLast ? "none" : "1px solid #e8dccb",
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between w-full text-left focus:outline-none transition-colors duration-300 hover:bg-white/40"
                    style={{
                      padding: "clamp(18px, 3vw, 22px) clamp(18px, 3vw, 26px)",
                      minHeight: "64px",
                    }}
                  >
                    <span 
                      className="font-sans font-semibold pr-6"
                      style={{
                        fontSize: "clamp(16px, 2vw, 18px)",
                        color: "#241812",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.q}
                    </span>
                    <span 
                      className="flex-shrink-0 flex items-center justify-center transition-transform duration-300"
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#c9943a", // gold accent for icon
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all duration-300"
                      >
                        <path 
                          d="M12.6667 5.66663L8.00004 10.3333L3.33337 5.66663" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div 
                    className="overflow-hidden transition-all duration-350 ease-in-out"
                    style={{
                      maxHeight: isOpen ? "500px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div 
                      style={{
                        padding: "0 clamp(18px, 3vw, 26px) clamp(22px, 3vw, 26px) clamp(18px, 3vw, 26px)",
                      }}
                    >
                      <p 
                        className="font-sans"
                        style={{
                          fontSize: "clamp(14px, 1.8vw, 15px)",
                          lineHeight: 1.7,
                          color: "rgba(36, 24, 18, 0.7)", // soft color
                        }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
