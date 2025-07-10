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

export default function CountryApostillePage({ params }) {
  const country = params?.country || 'Country';
  return (
    <main className="service-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>{country} Apostille</h1>
        <p>Get your documents apostilled for use in {country}. Fast, secure, and globally accepted.</p>
      </section>

      {/* Relevant Documents Section */}
      <section className="services-section">
        <SectionHeader title={`Documents We Apostille for ${country}`} />
        <ul className="usp-list">
          {documents.map((doc, idx) => (
            <li key={idx}>{doc}</li>
          ))}
        </ul>
      </section>

      {/* Types of Apostille */}
      <section className="services-section">
        <SectionHeader title={`Types of Apostille for ${country}`} />
        <ul className="usp-list">
          {apostilleTypes.map((type, idx) => (
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
          <li>Receive apostilled documents quickly and securely at your doorstep</li>
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
            <strong>Q: What is an apostille?</strong><br />
            <span>A: Apostille is a certificate that authenticates the origin of a public document for use in another Hague Convention country.</span>
          </li>
          <li style={{marginBottom: '1.2rem'}}>
            <strong>Q: How long does it take?</strong><br />
            <span>A: Most apostille requests are completed within 5-10 business days.</span>
          </li>
        </ul>
        <p style={{textAlign: 'center', marginTop: '1.5rem'}}>Still have questions? Visit our <Link href="/faq">FAQ</Link> page or <Link href="/contact">contact us</Link>.</p>
      </section>
    </main>
  );
} 