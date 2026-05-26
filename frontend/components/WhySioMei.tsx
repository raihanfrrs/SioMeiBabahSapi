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
            // Desk layout logic: 
            // 0, 1, 2 = span 2
            // 3 = col 2 span 2
            // 4 = col 4 span 2
            let desktopColumnClass = "desktop-span-2";
            if (index === 3) desktopColumnClass = "desktop-col-2";
            if (index === 4) desktopColumnClass = "desktop-col-4";

            return (
              <RevealWrapper 
                key={point.id} 
                delay={100 * index}
                className={`flex w-full ${desktopColumnClass}`}
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
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: clamp(24px, 2.4vw, 36px);
          max-width: 1180px;
          margin: 0 auto;
          width: 100%;
        }

        .desktop-span-2 {
          grid-column: span 2;
        }
        .desktop-col-2 {
          grid-column: 2 / span 2;
        }
        .desktop-col-4 {
          grid-column: 4 / span 2;
        }

        .benefit-card {
          width: 100%;
          height: 100%;
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

        @media (max-width: 1024px) {
          .benefit-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }
          
          .desktop-span-2,
          .desktop-col-2,
          .desktop-col-4 {
            grid-column: auto;
          }

          /* Buat card ke 5 (terakhir) di tengah jika grid 2 kolom (karena ganjil) */
          .desktop-col-4 {
            grid-column: 1 / -1;
            max-width: 560px;
            justify-self: center;
          }
        }

        @media (max-width: 640px) {
          .benefit-header h2 {
            font-size: clamp(42px, 13vw, 68px);
          }

          .benefit-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          /* Reset form card ke-5 agar full width */
          .desktop-col-4 {
            grid-column: auto;
            max-width: none;
            justify-self: stretch;
          }

          .benefit-card {
            padding: 28px 24px;
          }
        }
      `}} />
    </section>
  );
}
