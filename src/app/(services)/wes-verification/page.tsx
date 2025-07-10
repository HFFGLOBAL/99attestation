import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';
import ServiceCard from '../../components/ServiceCard';
import Link from 'next/link';

const content = {
  title: "WES Verification",
  summary: "Get your documents verified for WES (World Education Services) evaluation. Fast, secure, and accepted internationally.",
  whatIs: "WES verification is the process of authenticating your academic documents for evaluation by World Education Services, required for immigration, study, or work in Canada and the USA.",
  documents: [
    "Degree Certificate", "Transcript/Marksheet", "Provisional Certificate"
  ],
  countries: {
    canada: "Canada", usa: "United States of America"
  },
  howItWorks: [
    "Submit your academic documents online or at our office",
    "We verify and process your documents for WES evaluation",
    "Receive confirmation and tracking for your WES verification"
  ],
  whyUs: [
    "WES Recognized Partner", "Fast Processing", "Secure Handling", "Transparent Pricing", "Expert Guidance"
  ],
  related: [
    { href: "/educational-attestation", label: "Educational Attestation" },
    { href: "/apostille", label: "Apostille" }
  ],
  faqs: [
    { q: "What is WES verification?", a: "It is the process of authenticating your academic documents for evaluation by World Education Services." },
    { q: "Is WES verification mandatory?", a: "Yes, for immigration, study, or work in Canada/USA, WES verification is often required." }
  ]
};

export default function WESVerificationPage() {
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