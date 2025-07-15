

import CountryContent from './CountryContent';
import type { Metadata } from "next";

const documents = [
  'Educational Certificates',
  'Personal Certificates',
  'Commercial Documents',
  'Birth/Marriage Certificates',
  'Degree/Diploma Certificates',
];

const apostilleTypes = [
  'Educational Apostille',
  'Personal Apostille',
  'Commercial Apostille',
  'Hague Convention Apostille',
];

const testimonials = [
  {
    name: 'Rahul M.',
    feedback: 'Got my documents apostilled for Spain quickly and without any hassle. Great service!',
  },
  {
    name: 'Sara K.',
    feedback: 'Professional and transparent process for USA apostille. Highly recommend this team.',
  },
];

const whatsappNumber = '9686924808'; // Replace with your WhatsApp number
const whatsappMessage = encodeURIComponent('Hello, I need expert advice on apostille services.');
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
  const country = params.country;
  return {
    title: `${country.toUpperCase()} Apostille Services | 99Attestation.com`,
    description: `Get fast and reliable apostille services for ${country}.`,
    openGraph: {
      title: `${country.toUpperCase()} Apostille Services | 99Attestation.com`,
      description: `Get fast and reliable apostille services for ${country}.`,
      url: `https://99attestation.com/apostille/${country}`,
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
      description: `Get fast and reliable apostille services for ${country}.`,
      images: [
        {
          url: "/hero-world-map.png",
          alt: "99Attestation - Global Attestation Services",
        },
      ],
    },
  };
}



interface PageProps {
  params: { country: string };
}

export default function Page({ params }: PageProps) {
  const country = params.country;
  return (
    <CountryContent
      countryName={country}
      documents={documents}
      apostilleTypes={apostilleTypes}
      testimonials={testimonials}
      whatsappUrl={whatsappUrl}
    />
  );
}