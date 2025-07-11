import type { Metadata } from "next";
import CountryInfoClient from "./CountryInfoClient";
import { Breadcrumbs } from "../../components/SectionHeader";

export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
  const country = params.country || "Country";
  return {
    title: `${country} Attestation Services | 99Attestation`,
    description: `We provide attestation, apostille, and document services for ${country}. Contact us for details on process, required documents, and timelines for ${country}.`,
    openGraph: {
      title: `${country} Attestation Services | 99Attestation`,
      description: `We provide attestation, apostille, and document services for ${country}. Contact us for details on process, required documents, and timelines for ${country}.`,
      url: `https://99attestation.com/countries/${country}`,
      siteName: "99Attestation.com",
      images: [
        {
          url: "/hero-world-map.png",
          width: 1200,
          height: 630,
          alt: `Attestation for ${country} - 99Attestation`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      site: "@99attestation",
      title: `${country} Attestation Services | 99Attestation`,
      description: `We provide attestation, apostille, and document services for ${country}. Contact us for details on process, required documents, and timelines for ${country}.`,
      images: [
        {
          url: "/hero-world-map.png",
          alt: `Attestation for ${country} - 99Attestation`,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  // TODO: Replace with your real country list or fetch from API
  const countries = [
    "uae",
    "qatar",
    "kuwait",
    "oman",
    "bahrain",
    "egypt",
    "usa",
    "uk",
    "australia",
    "italy",
    "germany",
    "france",
    "netherlands"
  ];
  return countries.map((country) => ({ country }));
}

export default function Page({ params }: { params: Record<string, string> }) {
  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Countries", href: "/countries" },
        { label: params.country }
      ]} />
      <CountryInfoClient country={params.country} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": `${params.country} Attestation Services`,
            "provider": {
              "@type": "Organization",
              "name": "99Attestation.com",
              "url": "https://99attestation.com/"
            },
            "areaServed": `${params.country}`,
            "description": `We provide attestation, apostille, and document services for ${params.country}. Contact us for details on process, required documents, and timelines for ${params.country}.`
          })
        }}
      />
    </>
  );
} 