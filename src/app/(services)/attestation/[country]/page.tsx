import type { Metadata } from "next";
import CountryContent from "./CountryContent";

const documents = [
  'Educational Certificates',
  'Personal Certificates',
  'Commercial Documents',
  'Birth/Marriage Certificates',
  'Degree/Diploma Certificates',
];

const attestationTypes = [
  'Educational Attestation',
  'Personal Attestation',
  'Commercial Attestation',
  'Embassy Attestation',
  'MOFA Attestation',
];

const testimonials = [
  {
    name: 'Amit S.',
    feedback: 'The attestation process for UAE was smooth and fast. Highly recommended!',
  },
  {
    name: 'Priya R.',
    feedback: 'Excellent support and timely updates. Got my documents attested for Canada without hassle.',
  },
];

const whatsappNumber = '9686924808'; // Replace with your WhatsApp number
const whatsappMessage = encodeURIComponent('Hello, I need expert advice on attestation services.');
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export async function generateMetadata({ params }: { params: { country?: string | string[] } }): Promise<Metadata> {
  const country = Array.isArray(params.country) ? params.country[0] : params.country || "Country";
  return {
    title: `${country.toUpperCase()} Attestation Services | 99Attestation.com`,
    description: `Get fast and reliable attestation services for ${country}.`,
    openGraph: {
      title: `${country.toUpperCase()} Attestation Services | 99Attestation.com`,
      description: `Get fast and reliable attestation services for ${country}.`,
      url: `https://99attestation.com/attestation/${country}`,
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
      description: `Get fast and reliable attestation services for ${country}.`,
      images: [
        {
          url: "/hero-world-map.png",
          alt: "99Attestation - Global Attestation Services",
        },
      ],
    },
  };
}

export default function Page({ params }: { params: { country?: string | string[] } }) {
  const countryName = Array.isArray(params?.country) ? params.country[0] : params?.country || 'Country';
  return (
    <CountryContent
      countryName={countryName}
      documents={documents}
      attestationTypes={attestationTypes}
      testimonials={testimonials}
      whatsappUrl={whatsappUrl}
    />
  );
}