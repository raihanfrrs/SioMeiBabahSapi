import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Gloock } from "next/font/google";
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
    "Sio Mei Babah Sapi menghadirkan siomay sapi premium dengan tekstur lembut, rasa gurih, pilihan siap santap, goreng, dan frozen untuk keluarga, acara, reseller, hingga kebutuhan B2B restoran, cafe, bar, club, dan event.",
  keywords: [
    "siomay sapi",
    "sio mei",
    "babah sapi",
    "siomay sapi premium",
    "siomay frozen",
    "siomay goreng",
    "siomay handmade",
    "supplier siomay frozen",
    "siomay untuk restoran",
    "siomay untuk cafe",
    "siomay untuk event",
    "B2B supply makanan",
    "frozen food siomay"
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
      "Siomay sapi premium dengan pilihan original, goreng, dan frozen untuk keluarga, acara, reseller, restoran, cafe, bar, club, dan event.",
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
    title: "Sio Mei Babah Sapi | Siomay Sapi Premium",
    description:
      "Siomay sapi premium dalam pilihan original, goreng, dan frozen untuk kebutuhan personal, acara, reseller, dan B2B supply.",
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
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
