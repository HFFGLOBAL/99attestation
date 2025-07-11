"use client";
import SectionHeader from '../../../components/SectionHeader';
import CTAButton from '../../../components/CTAButton';
import Link from 'next/link';

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

export default function CountryAttestationClient({ country }: { country: string }) {
  const countryName = country || 'Country';
  return (
    <main className="service-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>{countryName} Attestation</h1>
        <p>Get your documents attested for use in {countryName}. Fast, secure, and globally accepted.</p>
      </section>

      {/* Relevant Documents Section */}
      <section className="services-section">
        <SectionHeader title={`Documents We Attest for ${countryName}`} />
        <ul className="usp-list">
          {documents.map((doc, idx) => (
            <li key={idx}>{doc}</li>
          ))}
        </ul>
      </section>

      {/* Types of Attestation */}
      <section className="services-section">
        <SectionHeader title={`Types of Attestation for ${countryName}`} />
        <ul className="usp-list">
          {attestationTypes.map((type, idx) => (
            <li key={idx}>{type}</li>
          ))}
        </ul>
      </section>

      {/* Our Process / How It Works */}
      <section className="how-it-works-section">
        <SectionHeader title="Our Process" />
        <ol className="how-it-works-list">
          <li>Submit your documents online or at our office</li>
          <li>We verify and process your documents through all required authorities</li>
          <li>Receive attested documents quickly and securely at your doorstep</li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="services-section">
        <SectionHeader title="What Our Clients Say" />
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center'}}>
          {testimonials.map((t, idx) => (
            <div key={idx} style={{background: '#f7f7f7', borderRadius: '1rem', padding: '1.5rem', maxWidth: 320, minWidth: 220, boxShadow: '0 2px 8px rgba(0,0,0,0.06)'}}>
              <p style={{fontStyle: 'italic', color: '#333'}}>&ldquo;{t.feedback}&rdquo;</p>
              <div style={{marginTop: '1rem', fontWeight: 700, color: '#0070f3'}}>- {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cta-button">Talk to Expert on WhatsApp</a>
        <CTAButton href="/contact">Contact Us</CTAButton>
      </section>

      {/* FAQ Section */}
      <section className="faq-preview-section">
        <SectionHeader title="FAQs" />
        <ul style={{maxWidth: 700, margin: '0 auto', textAlign: 'left', color: '#444'}}>
          <li style={{marginBottom: '1.2rem'}}>
            <strong>Q: What is attestation?</strong><br />
            <span>A: Attestation is the process of verifying the authenticity of a document for use in another country.</span>
          </li>
          <li style={{marginBottom: '1.2rem'}}>
            <strong>Q: How long does it take?</strong><br />
            <span>A: Most attestation requests are completed within 5-10 business days.</span>
          </li>
        </ul>
        <p style={{textAlign: 'center', marginTop: '1.5rem'}}>Still have questions? Visit our <Link href="/faq">FAQ</Link> page or <Link href="/contact">contact us</Link>.</p>
      </section>
    </main>
  );
} 