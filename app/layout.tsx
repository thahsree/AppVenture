import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppVenture | Futuristic Web & App Development in Kannur",
  description: "We design and develop high-performance websites, mobile apps, and SaaS platforms that help businesses grow and scale.",
  keywords: ["app development", "web development agency", "SaaS platforms", "mobile apps", "Digital Innovation", "Scale Engineering", "Enterprise Solutions"],
  openGraph: {
    title: "AppVenture | Engineering Excellence",
    description: "Build Scalable Digital Products for Modern Businesses.",
    url: "https://appventure.com",
    siteName: "AppVenture",
    images: [
      {
        url: "https://appventure.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AppVenture Modern Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppVenture | Web & App Development",
    description: "Build Scalable Digital Products for Modern Businesses.",
    images: ["https://appventure.com/og-image.png"],
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import GlobalChatWidget from "@/components/GlobalChatWidget";

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
          <GlobalChatWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
