import React from "react";
import { siteContent } from "@/data/siteContent";
import RevealWrapper from "@/components/RevealWrapper";

export default function HowToEnjoy() {
  const { label, headline, subheadline, methods } = siteContent.howToEnjoy;

  return (
    <section 
      id="how-to-enjoy"
      className="section-shell bg-brand-cream relative w-full"
    >
      <div className="section-inner">
        <RevealWrapper>
          <div className="ways-header">
            <p className="section-eyebrow uppercase font-sans font-bold">
              {label}
            </p>
            <h2 className="font-editorial text-[#4b0705]">
              {headline}
            </h2>
            <p className="section-subtitle font-sans font-medium text-[#4b0705]/80">
              {subheadline}
            </p>
          </div>
        </RevealWrapper>

        <div className="ways-grid">
          {methods.map((method, index) => (
            <RevealWrapper 
              key={method.id} 
              delay={150 * index}
            >
              <div className="ways-card transition-shadow duration-500 hover:shadow-xl group">
                <div className="flex items-center gap-4 mb-8">
                  <span 
                    className="font-editorial text-[36px] leading-[1]"
                    style={{ color: "rgba(199, 146, 62, 0.6)" }}
                  >
                    0{method.id}
                  </span>
                  <div className="h-[1px] bg-[rgba(199,146,62,0.3)] flex-1" />
                </div>
                <h3 className="font-sans font-bold text-[#4b0705] text-[22px] mb-3">
                  {method.title}
                </h3>
                <p className="font-sans text-[#4b0705]/80 text-[15.5px] leading-[1.65]">
                  {method.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .ways-header {
          max-width: 860px;
          margin: 0 auto 56px auto;
          text-align: center;
        }

        .section-eyebrow {
          font-size: 12px;
          letter-spacing: 0.25em;
          color: #C7923E;
          margin-bottom: 16px;
        }

        .ways-header h2 {
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
          line-height: 0.95;
          font-size: clamp(46px, 6vw, 84px);
        }

        .section-subtitle {
          max-width: 680px;
          margin: 28px auto 0 auto;
          line-height: 1.65;
          font-size: clamp(16px, 2vw, 20px);
        }

        .ways-grid {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 32px;
          align-items: stretch;
        }

        .ways-card {
          width: 100%;
          min-height: 260px;
          padding: 40px 36px;
          border-radius: 18px;
          background-color: rgba(253, 248, 238, 0.8);
          border: 1px solid rgba(199, 146, 62, 0.25);
          box-shadow: 0 8px 30px -10px rgba(75, 25, 20, 0.05);
          text-align: left;
        }

        @media (max-width: 1024px) {
          .ways-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 28px;
          }
        }

        @media (max-width: 640px) {
          .ways-header {
            margin-bottom: 36px;
          }
          .ways-header h2 {
            font-size: clamp(42px, 13vw, 64px);
          }
          .section-subtitle {
            text-align: center;
          }
          .ways-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .ways-card {
            padding: 28px 24px;
            min-height: auto;
          }
        }
      `}} />
    </section>
  );
}
