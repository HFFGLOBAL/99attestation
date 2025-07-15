"use client";

import SectionHeader from '../../../components/SectionHeader';
import CTAButton from '../../../components/CTAButton';
import Link from 'next/link';

interface CountryContentProps {
  countryName: string;
  documents: string[];
  apostilleTypes: string[];
  testimonials: { name: string; feedback: string }[];
  whatsappUrl: string;
}

export default function CountryContent({ countryName, documents, apostilleTypes, testimonials, whatsappUrl }: CountryContentProps) {
  return (
    <main className="service-page-container">
      {/* Hero Section */}
      <section className="hero-section flex flex-col items-center justify-center text-center py-10">
        <img src="/globe.svg" alt="Apostille Globe" className="w-20 h-20 mb-4 animate-scale-in" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy uppercase mb-2">{countryName} Apostille</h1>
        <p className="text-lg text-gray-700 mb-2">Get your documents apostilled for use in {countryName}. Fast, secure, and globally accepted.</p>
        <div className="flex gap-4 justify-center mt-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-bold-custom shadow hover-scale transition flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.421h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.991c-.003 5.451-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .06 5.435.058 12.086c0 2.13.557 4.213 1.615 6.044L0 24l6.064-1.594a11.908 11.908 0 0 0 5.978 1.528h.005c6.554 0 11.89-5.435 11.893-12.086a11.82 11.82 0 0 0-3.485-8.386" />
            </svg>
            Talk to Expert
          </a>
          <CTAButton href="/contact">Contact Us</CTAButton>
        </div>
      </section>

      {/* Relevant Documents Section */}
      <section className="services-section">
        <SectionHeader title={`Documents We Apostille For ${countryName.toUpperCase()}`} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {documents.map((doc, idx) => (
            <li key={idx} className="flex items-center gap-3 bg-cream rounded-lg p-4 shadow hover:bg-yellow transition">
              <img src="/file.svg" alt="Document" className="w-7 h-7" />
              <span className="font-semibold text-navy capitalize">{doc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Types of Apostille */}
      <section className="services-section">
        <SectionHeader title={`Types Of Apostille For ${countryName.toUpperCase()}`} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {apostilleTypes.map((type, idx) => (
            <li key={idx} className="flex items-center gap-3 bg-orange/10 rounded-lg p-4 shadow hover:bg-orange/30 transition">
              <img src="/vercel.svg" alt="Type" className="w-7 h-7" />
              <span className="font-semibold text-navy capitalize">{type}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Our Process / How It Works */}
      <section className="how-it-works-section">
        <SectionHeader title="Our Process" />
        <ol className="how-it-works-list mt-6">
          <li className="flex items-center gap-2 mb-2"><span className="bg-orange text-cream rounded-full p-2"><svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="8" stroke="#d62828" strokeWidth="2" /></svg></span>Submit your documents online or at our office</li>
          <li className="flex items-center gap-2 mb-2"><span className="bg-yellow text-navy rounded-full p-2"><svg width="18" height="18" fill="none"><rect x="3" y="3" width="12" height="12" stroke="#003049" strokeWidth="2" /></svg></span>We verify and process your documents through all required authorities</li>
          <li className="flex items-center gap-2 mb-2"><span className="bg-navy text-yellow rounded-full p-2"><svg width="18" height="18" fill="none"><polygon points="9,3 15,15 3,15" stroke="#fcbf49" strokeWidth="2" /></svg></span>Receive apostilled documents quickly and securely at your doorstep</li>
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
