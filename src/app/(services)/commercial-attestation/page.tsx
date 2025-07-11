import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';
import ServiceCard from '../../components/ServiceCard';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Document Attestation | Business Certificate Legalization | 99Attestation.com",
  description: "Get your commercial documents attested for international business. Fast attestation for company certificates, invoices, and business documents. 25+ years experience.",
  keywords: ["commercial attestation", "business attestation", "company certificate attestation", "commercial documents", "99attestation"],
  openGraph: {
    title: "Commercial Document Attestation | Business Certificate Legalization | 99Attestation.com",
    description: "Get your commercial documents attested for international business. Fast attestation for company certificates, invoices, and business documents. 25+ years experience.",
    url: "https://99attestation.com/services/commercial-attestation",
    siteName: "99Attestation.com",
    images: [
      {
        url: "/hero-world-map.png",
        width: 1200,
        height: 630,
        alt: "99Attestation - Commercial Attestation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@99attestation",
    title: "Commercial Document Attestation | Business Certificate Legalization | 99Attestation.com",
    description: "Get your commercial documents attested for international business. Fast attestation for company certificates, invoices, and business documents. 25+ years experience.",
    images: [
      {
        url: "/hero-world-map.png",
        alt: "99Attestation - Commercial Attestation Services",
      },
    ],
  },
};

const content = {
  title: "Commercial Attestation",
  summary: "Attest your business, export, and company documents for international trade, business setup, and legal compliance.",
  whatIs: "Commercial attestation is the process of verifying business and company documents for use abroad. Required for international trade, business setup, and legal compliance.",
  documents: [
    "Commercial Invoice", "Certificate of Incorporation", "Board Resolution", "Memorandum of Association", "Articles of Association", "Power of Attorney (Company)", "Export Documents"
  ],
  countries: {
    uae: "United Arab Emirates", oman: "Oman", qatar: "Qatar", kuwait: "Kuwait", saudi: "Saudi Arabia", usa: "United States of America", uk: "United Kingdom", canada: "Canada", singapore: "Singapore", germany: "Germany"
  },
  howItWorks: [
    "Submit your company documents online or at our office",
    "We verify and process your documents through all required authorities",
    "Receive attested documents quickly and securely at your doorstep"
  ],
  whyUs: [
    "Govt. & Embassy Approved", "10,000+ Commercial Documents Processed", "100+ Countries Served", "ISO Certified & Secure", "Transparent Pricing & Fast Turnaround", "Free Document Pickup & Delivery*", "Real-time Tracking & Updates"
  ],
  related: [
    { href: "/attestation", label: "Attestation" },
    { href: "/apostille", label: "Apostille" },
    { href: "/verification", label: "Verification" }
  ],
  faqs: [
    { q: "What is commercial attestation?", a: "It is the process of verifying business and company documents for use abroad, required for trade, setup, or compliance." },
    { q: "Which documents can be attested?", a: "Invoices, incorporation, board resolutions, MoA, export docs, and more." },
    { q: "How long does it take?", a: "Most commercial attestations are completed within 7-15 business days." },
    { q: "Is my data safe?", a: "Yes, we use secure processes and never share your documents without consent." }
  ]
};

export default function CommercialAttestationPage() {
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