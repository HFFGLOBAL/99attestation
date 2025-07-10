import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';
import ServiceCard from '../../components/ServiceCard';
import Link from 'next/link';

const content = {
  title: "Translation",
  summary: "Professional translation services for all your documents. Fast, accurate, and accepted worldwide.",
  whatIs: "Our translation service provides certified translations for educational, personal, and commercial documents, ensuring acceptance by embassies, universities, and government authorities.",
  documents: [
    "Degree Certificate", "Birth Certificate", "Marriage Certificate", "Commercial Invoice", "Legal Documents"
  ],
  countries: {
    global: "Worldwide"
  },
  howItWorks: [
    "Submit your documents online or at our office",
    "We assign your documents to certified translators",
    "Receive your translated documents with certification and seal"
  ],
  whyUs: [
    "Certified Translators", "Fast Turnaround", "Accepted by Embassies & Universities", "Confidential & Secure", "Competitive Pricing"
  ],
  related: [
    { href: "/apostille", label: "Apostille" },
    { href: "/attestation", label: "Attestation" }
  ],
  faqs: [
    { q: "Are your translations certified?", a: "Yes, all translations are certified and accepted by embassies, universities, and government authorities." },
    { q: "How long does translation take?", a: "Most translations are completed within 2-5 business days, depending on document type and language." }
  ]
};

export default function TranslationPage() {
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