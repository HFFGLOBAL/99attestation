import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';
import ServiceCard from '../../components/ServiceCard';
import Link from 'next/link';
import type { Metadata } from "next";

const content = {
  title: "HRD Attestation",
  summary: "Get your educational documents attested by the Human Resource Department (HRD) for use abroad.",
  whatIs: "HRD attestation is the process of authenticating educational documents by the Human Resource Department of the state. It is a prerequisite for MEA and embassy attestation.",
  documents: [
    "Degree Certificate", "Diploma Certificate", "School Leaving Certificate"
  ],
  countries: {
    india: "India"
  },
  howItWorks: [
    "Submit your educational documents online or at our office",
    "We verify and process your documents through the HRD department",
    "Receive HRD attested documents quickly and securely"
  ],
  whyUs: [
    "State Govt. Approved", "Fast Processing", "Secure Handling", "Transparent Pricing", "Expert Guidance"
  ],
  related: [
    { href: "/educational-attestation", label: "Educational Attestation" },
    { href: "/mea-attestation", label: "MEA Attestation" }
  ],
  faqs: [
    { q: "What is HRD attestation?", a: "It is the authentication of educational documents by the Human Resource Department of the state." },
    { q: "Is HRD attestation mandatory?", a: "Yes, for most countries, HRD attestation is required before MEA and embassy attestation." }
  ]
};

export const metadata: Metadata = {
  title: "HRD Attestation | Human Resource Department Certificate | 99Attestation.com",
  description: "Get your educational documents attested by HRD (Human Resource Department). Fast HRD attestation for degrees and certificates. 25+ years experience.",
  keywords: ["HRD attestation", "Human Resource Department", "educational attestation", "HRD certificate", "99attestation"],
  openGraph: {
    title: "HRD Attestation | Human Resource Department Certificate | 99Attestation.com",
    description: "Get your educational documents attested by HRD (Human Resource Department). Fast HRD attestation for degrees and certificates. 25+ years experience.",
    url: "https://99attestation.com/services/hrd-attestation",
    siteName: "99Attestation.com",
    images: [
      {
        url: "/hero-world-map.png",
        width: 1200,
        height: 630,
        alt: "99Attestation - HRD Attestation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@99attestation",
    title: "HRD Attestation | Human Resource Department Certificate | 99Attestation.com",
    description: "Get your educational documents attested by HRD (Human Resource Department). Fast HRD attestation for degrees and certificates. 25+ years experience.",
    images: [
      {
        url: "/hero-world-map.png",
        alt: "99Attestation - HRD Attestation Services",
      },
    ],
  },
};

export default function HRDAttestationPage() {
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