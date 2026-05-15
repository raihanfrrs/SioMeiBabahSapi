import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Sio Mei Babah Sapi | Siomay Sapi Premium",
  description: "Siomay sapi premium dengan rasa gurih, lembut, dan bumbu kacang khas. Hangat, gurih, dan selalu bikin balik lagi.",
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
    <html lang="id" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-brand-peanut selection:text-brand-cream">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
