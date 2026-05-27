import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Gloock } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const gloock = Gloock({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gloock",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siomeibabahsapi.my.id"),
  title: {
    default: "Sio Mei Babah Sapi | Siomay Sapi Premium, Frozen & B2B Supply",
    template: "%s | Sio Mei Babah Sapi",
  },
  description:
    "Sio Mei Babah Sapi menghadirkan siomay sapi premium dengan pilihan original, goreng, dan frozen. Cocok untuk keluarga, acara, reseller, restoran, cafe, bar, club, dan kebutuhan B2B supply.",
  keywords: [
    "siomay sapi",
    "sio mei",
    "siomay frozen",
    "siomay premium",
    "siomay sapi premium",
    "Babah Sapi",
    "siomay Surabaya",
    "frozen food",
    "supply siomay",
    "B2B food supply"
  ],
  authors: [{ name: "Sio Mei Babah Sapi" }],
  creator: "Sio Mei Babah Sapi",
  publisher: "Sio Mei Babah Sapi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://siomeibabahsapi.my.id",
    siteName: "Sio Mei Babah Sapi",
    title: "Sio Mei Babah Sapi | Siomay Sapi Premium, Frozen & B2B Supply",
    description:
      "Sio Mei Babah Sapi menghadirkan siomay sapi premium dengan pilihan original, goreng, dan frozen. Cocok untuk keluarga, acara, reseller, restoran, cafe, bar, club, dan kebutuhan B2B supply.",
    images: [
      {
        url: "/og/sio-mei-babah-sapi.jpg",
        width: 1200,
        height: 630,
        alt: "Sio Mei Babah Sapi - Siomay Sapi Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sio Mei Babah Sapi | Siomay Sapi Premium, Frozen & B2B Supply",
    description:
      "Sio Mei Babah Sapi menghadirkan siomay sapi premium dengan pilihan original, goreng, dan frozen. Cocok untuk keluarga, acara, reseller, restoran, cafe, bar, club, dan kebutuhan B2B supply.",
    images: ["/og/sio-mei-babah-sapi.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FDF8EE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${inter.variable} ${gloock.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-brand-peanut selection:text-brand-cream" suppressHydrationWarning>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FoodEstablishment",
            "name": "Sio Mei Babah Sapi",
            "image": "https://siomeibabahsapi.my.id/og/sio-mei-babah-sapi.jpg",
            "@id": "https://siomeibabahsapi.my.id",
            "url": "https://siomeibabahsapi.my.id",
            "telephone": "+6281333903187",
            "menu": "https://siomeibabahsapi.my.id/#foods",
            "servesCuisine": "Siomay Sapi",
            "acceptsReservations": "False",
            "description": "Sio Mei Babah Sapi menghadirkan siomay sapi premium dengan pilihan original, goreng, dan frozen. Cocok untuk keluarga, acara, reseller, restoran, cafe, bar, club, dan kebutuhan B2B supply."
          })
        }} />
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
