import React from "react";
import { siteContent } from "@/data/siteContent";
import RevealWrapper from "@/components/RevealWrapper";
import { buildWhatsAppLink, generalOrderMessage } from "@/utils/whatsapp";

export default function TestimonialSection() {
  const { label, headline, headlineBreak, subheadline, posts, ctaText, ctaButton } = siteContent.testimonials as any;

  return (
    <section 
      id="testimonials"
      className="section-shell relative w-full bg-brand-cream"
    >
      <div className="section-inner flex flex-col items-center">
        {/* Header Area */}
        <RevealWrapper>
          <div className="flex flex-col items-center text-center" style={{ marginBottom: "clamp(48px, 6vw, 64px)" }}>
            <span 
              className="uppercase font-sans font-bold"
              style={{
                fontSize: "12px",
                letterSpacing: "0.25em",
                color: "#C7923E", // gold
                marginBottom: "16px",
              }}
            >
              {label}
            </span>
            <h2 
              className="font-editorial text-[#4b0705]"
              style={{
                fontSize: "clamp(56px, 6vw, 92px)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
              }}
            >
              {headline} <br /> {headlineBreak}
            </h2>
            <p 
              className="font-sans font-medium"
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                lineHeight: 1.6,
                color: "rgba(75, 7, 5, 0.75)",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              {subheadline}
            </p>
          </div>
        </RevealWrapper>

        {/* 3 Cards Grid */}
        <div 
          className="grid w-full mx-auto max-w-[1100px]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(24px, 3vw, 32px)",
            marginBottom: "clamp(48px, 6vw, 64px)",
          }}
        >
          {posts.map((post: any, index: number) => (
            <RevealWrapper 
              key={post.id} 
              delay={150 * index}
              className={`flex w-full ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div 
                className="flex flex-col w-full h-full transition-shadow duration-500 hover:shadow-xl group"
                style={{
                  backgroundColor: "rgba(253, 248, 238, 0.8)", // ivory semitransparent
                  border: "1px solid rgba(199, 146, 62, 0.3)", // thin gold/maroon border
                  borderRadius: "20px",
                  padding: "clamp(28px, 4vw, 36px)",
                  boxShadow: "0 8px 30px -10px rgba(75, 25, 20, 0.05)"
                }}
              >
                <div 
                  className="font-editorial text-[#C7923E] opacity-70 mb-4"
                  style={{ fontSize: "40px", lineHeight: 1 }}
                >
                  “
                </div>
                <h3 
                  className="font-sans font-bold text-[#4b0705]"
                  style={{
                    fontSize: "clamp(18px, 2vw, 20px)",
                    marginBottom: "12px",
                  }}
                >
                  {post.title}
                </h3>
                <p 
                  className="font-sans text-[#4b0705]/80"
                  style={{
                    fontSize: "clamp(15px, 1.5vw, 16px)",
                    lineHeight: 1.6,
                  }}
                >
                  {post.text}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* CTA Area */}
        <RevealWrapper delay={400}>
          <div className="flex flex-col items-center text-center">
            <p 
              className="font-sans font-medium mb-5"
              style={{
                fontSize: "15px",
                color: "rgba(75, 7, 5, 0.7)",
              }}
            >
              {ctaText}
            </p>
            <a 
              href={buildWhatsAppLink(generalOrderMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#6b0f0f", // maroon solid
                color: "#FDF8EE",
                borderRadius: "999px", // pill
                padding: "16px 32px",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "0.02em",
                boxShadow: "0 8px 20px -5px rgba(107, 15, 15, 0.3)",
              }}
            >
              {ctaButton}
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
