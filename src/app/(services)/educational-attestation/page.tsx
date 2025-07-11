import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';
import ServiceCard from '../../components/ServiceCard';
import Link from 'next/link';
import type { Metadata } from "next";

const content = {
  title: "Educational Attestation",
  summary: "Attest your degree, diploma, and academic certificates for study, work, or migration abroad. Fast, secure, and accepted in 100+ countries.",
  whatIs: "Educational attestation is the process of verifying academic documents for international use. It is required for higher studies, employment, migration, and professional licensing in many countries.",
  documents: [
    "Degree Certificate", "Diploma Certificate", "School Leaving Certificate", "Transcript/Marksheet", "Provisional Certificate", "Bonafide Certificate", "Nursing/Engineering Certificate"
  ],
  countries: {
    uae: "United Arab Emirates", oman: "Oman", qatar: "Qatar", kuwait: "Kuwait", saudi: "Saudi Arabia", usa: "United States of America", uk: "United Kingdom", canada: "Canada", australia: "Australia", germany: "Germany"
  },
  howItWorks: [
    "Submit your academic documents online or at our office",
    "We verify and process your documents through all required authorities",
    "Receive attested documents quickly and securely at your doorstep"
  ],
  whyUs: [
    "Govt. & Embassy Approved", "10,000+ Academic Documents Processed", "100+ Countries Served", "ISO Certified & Secure", "Transparent Pricing & Fast Turnaround", "Free Document Pickup & Delivery*", "Real-time Tracking & Updates"
  ],
  related: [
    { href: "/services/attestation", label: "Attestation" },
    { href: "/services/apostille", label: "Apostille" },
    { href: "/services/verification", label: "Verification" }
  ],
  faqs: [
    { q: "What is educational attestation?", a: "It is the process of verifying academic documents for use abroad, required for higher studies, jobs, or migration." },
    { q: "Which documents can be attested?", a: "Degree, diploma, school certificates, transcripts, and more." },
    { q: "How long does it take?", a: "Most educational attestations are completed within 7-15 business days." },
    { q: "Is my data safe?", a: "Yes, we use secure processes and never share your documents without consent." }
  ]
};

export const metadata: Metadata = {
  title: "Educational Attestation | 99Attestation",
  description: "Attest your degree, diploma, and academic certificates for study, work, or migration abroad. Fast, secure, and accepted in 100+ countries.",
  keywords: ["Educational Attestation", "Degree Attestation", "Diploma Attestation", "Academic Certificates", "Study Abroad", "99Attestation"],
  openGraph: {
    title: "Educational Attestation | 99Attestation",
    description: "Attest your degree, diploma, and academic certificates for study, work, or migration abroad. Fast, secure, and accepted in 100+ countries.",
    url: "https://99attestation.com/services/educational-attestation",
    siteName: "99Attestation",
    type: "website"
  }
};

export default function EducationalAttestationPage() {
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