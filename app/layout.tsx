import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zeytun Restaurant | Premium Chocolate Roast Coffee",
  description: "Experience rich chocolate-forward coffee roasts. Small-batch roasted with deep cocoa notes, bright acidity, and velvety finishes.",
  keywords: ["coffee", "chocolate roast", "premium coffee", "artisan coffee", "single origin"],
  icons: {
    icon: [
      { url: '/images/joba images/logos/joba coffee branding.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/joba images/logos/joba coffee branding.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/joba images/logos/joba coffee branding.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/joba images/logos/joba coffee branding.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
          <main className="min-h-[60vh] pt-16 sm:pt-20 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}