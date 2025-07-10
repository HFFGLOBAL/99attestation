import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';
import ServiceCard from '../../components/ServiceCard';
import Link from 'next/link';

const content = {
  title: "MEA Attestation",
  summary: "Get your documents attested by the Ministry of External Affairs (MEA) for international use.",
  whatIs: "MEA attestation is the process of authenticating documents by the Ministry of External Affairs, Government of India. It is required for all documents to be used abroad.",
  documents: [
    "Educational Certificates", "Personal Documents", "Commercial Documents"
  ],
  countries: {
    india: "India"
  },
  howItWorks: [
    "Submit your documents online or at our office",
    "We verify and process your documents through the MEA",
    "Receive MEA attested documents quickly and securely"
  ],
  whyUs: [
    "Govt. Approved", "Fast Processing", "Secure Handling", "Transparent Pricing", "Expert Guidance"
  ],
  related: [
    { href: "/hrd-attestation", label: "HRD Attestation" },
    { href: "/apostille", label: "Apostille" }
  ],
  faqs: [
    { q: "What is MEA attestation?", a: "It is the authentication of documents by the Ministry of External Affairs, Government of India." },
    { q: "Is MEA attestation mandatory?", a: "Yes, for all documents to be used abroad, MEA attestation is required." }
  ]
};

export default function MEAAttestationPage() {
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