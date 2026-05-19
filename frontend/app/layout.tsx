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
  title: "Sio Mei by Babah Sapi | Siomay Sapi Premium Handmade",
  description: "Sio Mei adalah siomay sapi premium handmade dari Babah Sapi, dibuat harian dari daging pilihan dengan tekstur lembut, gurih, dan siap dikirim hangat.",
  keywords: ["siomay sapi", "siomay premium", "kuliner indonesia", "babah sapi"],
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
