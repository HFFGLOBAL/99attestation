import type { Metadata } from "next";
// import { Nunito, PT_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WhatsAppButton from "./components/WhatsAppButton";

// const nunito = Nunito({
//   variable: "--font-nunito",
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });
//
// const ptSans = PT_Sans({
//   variable: "--font-pt-sans",
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

export const metadata: Metadata = {
  title: "99Attestation.com | Fast & Reliable Document Attestation Services",
  description: "Your trusted partner for attestation, apostille, embassy, and verification services.",
  openGraph: {
    title: "99Attestation.com | Fast & Reliable Document Attestation Services",
    description: "Your trusted partner for attestation, apostille, embassy, and verification services.",
    url: "https://99attestation.com/",
    siteName: "99Attestation.com",
    images: [
      {
        url: "/hero-world-map.png",
        width: 1200,
        height: 630,
        alt: "99Attestation - Global Attestation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@99attestation",
    title: "99Attestation.com | Fast & Reliable Document Attestation Services",
    description: "Your trusted partner for attestation, apostille, embassy, and verification services.",
    images: [
      {
        url: "/hero-world-map.png",
        alt: "99Attestation - Global Attestation Services",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
