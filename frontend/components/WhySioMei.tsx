import React from "react";
import { siteContent } from "@/data/siteContent";
import RevealWrapper from "@/components/RevealWrapper";

export default function WhySioMei() {
  const { headline, subheadline, points } = siteContent.whyUs;

  return (
    <section 
      id="why-us"
      className="section-shell bg-brand-cream relative w-full"
    >
      <div className="section-inner">
        <RevealWrapper>
          <div className="benefit-header">
            <span className="section-eyebrow uppercase font-sans font-bold">
              KEUNGGULAN PRODUK
            </span>
            <h2 className="font-editorial text-[#4b0705]">
              {headline}
            </h2>
            <p className="section-subtitle font-sans font-medium text-[#4b0705]/80">
              {subheadline}
            </p>
          </div>
        </RevealWrapper>

        <div className="benefit-grid">
          {points.map((point: any, index: number) => {
            return (
              <RevealWrapper 
                key={point.id} 
                delay={100 * index}
                className="benefit-card-wrapper"
              >
                <div className="benefit-card transition-shadow duration-500 hover:shadow-xl group">
                  <div className="font-editorial group-hover:text-[#C7923E] transition-colors duration-300 card-number">
                    0{point.id}
                  </div>
                  {point.title && (
                    <h3 className="font-sans font-bold text-[#4b0705] card-title">
                      {point.title}
                    </h3>
                  )}
                  <p className="font-sans text-[#4b0705]/80 card-desc">
                    {point.text}
                  </p>
                </div>
              </RevealWrapper>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .benefit-header {
          max-width: 860px;
          margin: 0 auto clamp(48px, 5vw, 72px) auto;
          text-align: center;
        }

        .section-eyebrow {
          display: block;
          font-size: 12px;
          letter-spacing: 0.25em;
          color: #C7923E;
          margin-bottom: 16px;
        }

        .benefit-header h2 {
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
          line-height: 0.95;
          font-size: clamp(42px, 6vw, 76px);
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          max-width: 640px;
          margin: 24px auto 0 auto;
          line-height: 1.6;
          font-size: clamp(18px, 2.5vw, 22px);
        }

        .benefit-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: clamp(24px, 2.4vw, 36px);
          max-width: 1180px;
          margin: 0 auto;
          width: 100%;
        }

        .benefit-card-wrapper {
          flex: 1 1 340px;
          max-width: 380px;
          display: flex;
        }

        .benefit-card {
          width: 100%;
          padding: clamp(28px, 3vw, 44px);
          background-color: rgba(253, 248, 238, 0.85); /* ivory/cream transparan */
          border: 1px solid rgba(199, 146, 62, 0.25); /* beige/coklat muda halus */
          border-radius: 20px;
          box-shadow: 0 8px 30px -10px rgba(75, 25, 20, 0.04);
          text-align: left;
          display: flex;
          flex-direction: column;
        }

        .card-number {
          font-size: 42px;
          line-height: 1;
          color: rgba(199, 146, 62, 0.7); /* gold/caramel */
          margin-bottom: 16px;
        }

        .card-title {
          font-size: clamp(18px, 2vw, 20px);
          line-height: 1.4;
          margin-bottom: 10px;
          letter-spacing: 0.02em;
        }

        .card-desc {
          font-size: clamp(15px, 1.5vw, 16px);
          line-height: 1.65;
        }

        @media (max-width: 640px) {
          .benefit-header h2 {
            font-size: clamp(42px, 13vw, 68px);
          }

          .benefit-grid {
            flex-direction: column;
            align-items: center;
          }
          
          .benefit-card-wrapper {
            max-width: 100%;
            width: 100%;
          }

          .benefit-card {
            padding: 28px 24px;
          }
        }
      `}} />
    </section>
  );
}
