import FAQClient from "./FAQClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attestation Services | 99Attestation",
  description: "Fast, reliable, and secure attestation services for all your documents. Serving UAE, Oman, USA, UK, Canada, and more.",
  keywords: ["attestation", "document attestation", "UAE attestation", "Oman attestation", "apostille", "99attestation"],
  openGraph: {
    title: "Attestation Services | 99Attestation",
    description: "Fast, reliable, and secure attestation services for all your documents. Serving UAE, Oman, USA, UK, Canada, and more.",
    url: "https://99attestation.com/faq",
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
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@99attestation",
    title: "Attestation Services | 99Attestation",
    description: "Fast, reliable, and secure attestation services for all your documents. Serving UAE, Oman, USA, UK, Canada, and more.",
    images: [
      {
        url: "/hero-world-map.png",
        alt: "99Attestation - Global Attestation Services",
      },
    ],
  },
};

export default function FAQPage() {
  return <>
    <FAQClient />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [] // TODO: Populate with actual FAQ data for rich results
        })
      }}
    />
  </>;
}