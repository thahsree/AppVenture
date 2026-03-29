import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZSK technologies | Futuristic Web & App Development in Kannur",
  description: "We design and develop high-performance websites, mobile apps, and SaaS platforms that help businesses grow and scale.",
  keywords: ["app development", "web development agency", "SaaS platforms", "mobile apps", "Digital Innovation", "Scale Engineering", "Enterprise Solutions"],
  openGraph: {
    title: "ZSK technologies | Engineering Excellence",
    description: "Build Scalable Digital Products for Modern Businesses.",
    url: "https://zsk.tech",
    siteName: "ZSK technologies",
    images: [
      {
        url: "https://zsk.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZSK technologies Modern Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZSK technologies | Web & App Development",
    description: "Build Scalable Digital Products for Modern Businesses.",
    images: ["https://zsk.tech/og-image.png"],
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 flex flex-col`}>
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
