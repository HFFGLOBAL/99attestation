import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';
import ServiceCard from '../../components/ServiceCard';
import Link from 'next/link';

const content = {
  title: "Personal Attestation",
  summary: "Attest your birth, marriage, divorce, and other personal documents for family, legal, or immigration purposes.",
  whatIs: "Personal attestation is the process of verifying personal documents for use abroad, such as birth, marriage, divorce, and medical certificates. Required for family visas, legal matters, and migration.",
  documents: [
    "Birth Certificate", "Marriage Certificate", "Divorce Certificate", "Death Certificate", "Medical Certificate", "Affidavit", "PCC", "Adoption Deed"
  ],
  countries: {
    uae: "United Arab Emirates", oman: "Oman", qatar: "Qatar", kuwait: "Kuwait", saudi: "Saudi Arabia", usa: "United States of America", uk: "United Kingdom", canada: "Canada", australia: "Australia", italy: "Italy"
  },
  howItWorks: [
    "Submit your personal documents online or at our office",
    "We verify and process your documents through all required authorities",
    "Receive attested documents quickly and securely at your doorstep"
  ],
  whyUs: [
    "Govt. & Embassy Approved", "10,000+ Personal Documents Processed", "100+ Countries Served", "ISO Certified & Secure", "Transparent Pricing & Fast Turnaround", "Free Document Pickup & Delivery*", "Real-time Tracking & Updates"
  ],
  related: [
    { href: "/services/attestation", label: "Attestation" },
    { href: "/services/apostille", label: "Apostille" },
    { href: "/services/verification", label: "Verification" }
  ],
  faqs: [
    { q: "What is personal attestation?", a: "It is the process of verifying personal documents for use abroad, required for family visas, legal matters, or migration." },
    { q: "Which documents can be attested?", a: "Birth, marriage, divorce, death, medical certificates, and more." },
    { q: "How long does it take?", a: "Most personal attestations are completed within 7-15 business days." },
    { q: "Is my data safe?", a: "Yes, we use secure processes and never share your documents without consent." }
  ]
};

export default function PersonalAttestationPage() {
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