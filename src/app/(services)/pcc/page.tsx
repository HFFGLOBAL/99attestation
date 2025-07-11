import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';
import ServiceCard from '../../components/ServiceCard';
import Link from 'next/link';
import type { Metadata } from "next";

const content = {
  title: "Police Clearance Certificate (PCC)",
  summary: "Get your Police Clearance Certificate attested for use abroad. Fast, secure, and accepted internationally.",
  whatIs: "PCC attestation is the process of verifying your Police Clearance Certificate for use in foreign countries. Required for migration, employment, and long-term visas.",
  documents: [
    "Police Clearance Certificate (PCC)"
  ],
  countries: {
    uae: "United Arab Emirates", oman: "Oman", qatar: "Qatar", kuwait: "Kuwait", saudi: "Saudi Arabia", usa: "United States of America", uk: "United Kingdom", canada: "Canada", australia: "Australia"
  },
  howItWorks: [
    "Submit your PCC online or at our office",
    "We verify and process your PCC through all required authorities",
    "Receive attested PCC quickly and securely"
  ],
  whyUs: [
    "Govt. Approved", "Fast Processing", "Secure Handling", "Transparent Pricing", "Expert Guidance"
  ],
  related: [
    { href: "/personal-attestation", label: "Personal Attestation" },
    { href: "/educational-attestation", label: "Educational Attestation" }
  ],
  faqs: [
    { q: "What is PCC attestation?", a: "It is the process of verifying your Police Clearance Certificate for use in foreign countries." },
    { q: "Is PCC attestation mandatory?", a: "Yes, for migration, employment, and long-term visas, PCC attestation is required." }
  ]
};

export const metadata: Metadata = {
  title: "PCC Attestation | Police Clearance Certificate | 99Attestation.com",
  description: "Get your Police Clearance Certificate (PCC) attested for international use. Fast PCC attestation for immigration and employment. 25+ years experience.",
  keywords: ["PCC attestation", "Police Clearance Certificate", "PCC certificate", "immigration attestation", "99attestation"],
  openGraph: {
    title: "PCC Attestation | Police Clearance Certificate | 99Attestation.com",
    description: "Get your Police Clearance Certificate (PCC) attested for international use. Fast PCC attestation for immigration and employment. 25+ years experience.",
    url: "https://99attestation.com/services/pcc",
    siteName: "99Attestation.com",
    images: [
      {
        url: "/hero-world-map.png",
        width: 1200,
        height: 630,
        alt: "99Attestation - PCC Attestation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@99attestation",
    title: "PCC Attestation | Police Clearance Certificate | 99Attestation.com",
    description: "Get your Police Clearance Certificate (PCC) attested for international use. Fast PCC attestation for immigration and employment. 25+ years experience.",
    images: [
      {
        url: "/hero-world-map.png",
        alt: "99Attestation - PCC Attestation Services",
      },
    ],
  },
};

export default function PCCPage() {
  return (
    <main className="service-page-container">
      <section className="hero-section">
        <h1>{content.title}</h1>
        <p>{content.summary}</p>
      </section>
      <section className="services-section">
        <SectionHeader title={`What is ${content.title}?`} />
        <p style={{textAlign: 'center', maxWidth: 700, margin: '0 auto 2rem auto', color: '#444'}}>{content.whatIs}</p>
      </section>
      <section className="how-it-works-section">
        <SectionHeader title="How It Works" />
        <ol className="how-it-works-list">
          {content.howItWorks.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>
      <section className="why-choose-section">
        <SectionHeader title="Why Choose Us" />
        <ul className="usp-list">
          {content.whyUs.map((usp, idx) => (
            <li key={idx}>{usp}</li>
          ))}
        </ul>
      </section>
      <section className="cta-section">
        <CTAButton href="/get-quote">Get a Free Quote</CTAButton>
        <CTAButton href="/contact">Contact Us</CTAButton>
      </section>
      {content.related && (
        <section className="services-section">
          <SectionHeader title="Related Services" />
          <div className="services-grid">
            {content.related.map((rel) => (
              <ServiceCard
                key={rel.href}
                title={rel.label}
                description={''}
                href={rel.href}
              />
            ))}
          </div>
        </section>
      )}
      {content.faqs && (
        <section className="faq-preview-section">
          <SectionHeader title="FAQs" />
          <ul style={{maxWidth: 700, margin: '0 auto', textAlign: 'left', color: '#444'}}>
            {content.faqs.map((faq, idx) => (
              <li key={idx} style={{marginBottom: '1.2rem'}}>
                <strong>Q: {faq.q}</strong><br />
                <span>A: {faq.a}</span>
              </li>
            ))}
          </ul>
          <p style={{textAlign: 'center', marginTop: '1.5rem'}}>Still have questions? Visit our <Link href="/faq">FAQ</Link> page or <Link href="/contact">contact us</Link>.</p>
        </section>
      )}
    </main>
  );
}