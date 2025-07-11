import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';
import ServiceCard from '../../components/ServiceCard';
import Link from 'next/link';
import type { Metadata } from "next";
import { IdentificationIcon, CheckBadgeIcon, GlobeAltIcon, ClockIcon, ShieldCheckIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/solid';
import { FaRegSmile, FaUserFriends, FaGlobeAsia } from 'react-icons/fa';

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
    { href: "/services/apostille", label: "Apostille" }
  ],
  faqs: [
    { q: "What is personal attestation?", a: "It is the process of verifying personal documents for use abroad, required for family visas, legal matters, or migration." },
    { q: "Which documents can be attested?", a: "Birth, marriage, divorce, death, medical certificates, and more." },
    { q: "How long does it take?", a: "Most personal attestations are completed within 7-15 business days." },
    { q: "Is my data safe?", a: "Yes, we use secure processes and never share your documents without consent." }
  ]
};

export const metadata: Metadata = {
  title: "Personal Document Attestation | Birth Certificate & Marriage Certificate | 99Attestation.com",
  description: "Get your personal documents attested for international use. Fast attestation for birth certificates, marriage certificates, and personal documents. 25+ years experience.",
  keywords: ["personal attestation", "birth certificate attestation", "marriage certificate attestation", "personal documents", "99attestation"],
  openGraph: {
    title: "Personal Document Attestation | Birth Certificate & Marriage Certificate | 99Attestation.com",
    description: "Get your personal documents attested for international use. Fast attestation for birth certificates, marriage certificates, and personal documents. 25+ years experience.",
    url: "https://99attestation.com/services/personal-attestation",
    siteName: "99Attestation.com",
    images: [
      {
        url: "/hero-world-map.png",
        width: 1200,
        height: 630,
        alt: "99Attestation - Personal Attestation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@99attestation",
    title: "Personal Document Attestation | Birth Certificate & Marriage Certificate | 99Attestation.com",
    description: "Get your personal documents attested for international use. Fast attestation for birth certificates, marriage certificates, and personal documents. 25+ years experience.",
    images: [
      {
        url: "/hero-world-map.png",
        alt: "99Attestation - Personal Attestation Services",
      },
    ],
  },
};

export default function PersonalAttestationPage() {
  return (
    <>
      {/* HERO SECTION - FULL WIDTH */}
      <section className="hero-section bg-cream rounded-none shadow-none mb-8 flex flex-col items-center justify-center p-8 w-full" style={{borderRadius: 0, boxShadow: 'none', marginLeft: 0, marginRight: 0, maxWidth: '100vw'}}>
        <span className="bg-orange p-4 rounded-full shadow-lg mb-4 flex items-center justify-center">
          <IdentificationIcon className="w-12 h-12 text-navy" />
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-3 tracking-tight drop-shadow-lg">{content.title}</h1>
        <p className="text-lg md:text-xl text-navy mb-4 max-w-2xl mx-auto">{content.summary}</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <a href="https://wa.me/919686924808?text=Hello%2C%20I%20need%20expert%20advice%20on%20personal%20attestation." target="_blank" rel="noopener noreferrer" className="inline-block bg-orange text-navy font-bold-custom px-8 py-3 rounded-full shadow hover:bg-yellow transition hover-scale">Talk to Expert</a>
          <CTAButton href="/contact">Contact Us</CTAButton>
        </div>
      </section>
      <div className="service-page-container fade-in">
      {/* WHAT IS SECTION */}
      <section className="services-section">
        <SectionHeader title={`What is ${content.title}?`} />
        <p style={{textAlign: 'center', maxWidth: 700, margin: '0 auto 2rem auto', color: '#444'}}>{content.whatIs}</p>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-it-works-section">
        <SectionHeader title="How It Works" />
        <ol className="how-it-works-list">
          {content.howItWorks.map((step, idx) => (
            <li key={idx}><CheckBadgeIcon className="inline w-5 h-5 text-orange mr-2 align-text-bottom" />{step}</li>
          ))}
        </ol>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-choose-section bg-yellow/20 rounded-xl p-6 mb-8">
        <SectionHeader title="Why Choose Us" />
        <ul className="usp-list grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center gap-3"><ShieldCheckIcon className="w-7 h-7 text-orange" /> Govt. & Embassy Approved</li>
          <li className="flex items-center gap-3"><FaUserFriends className="w-7 h-7 text-orange" /> 10,000+ Personal Documents Processed</li>
          <li className="flex items-center gap-3"><GlobeAltIcon className="w-7 h-7 text-orange" /> 100+ Countries Served</li>
          <li className="flex items-center gap-3"><CheckBadgeIcon className="w-7 h-7 text-orange" /> ISO Certified & Secure</li>
          <li className="flex items-center gap-3"><ClockIcon className="w-7 h-7 text-orange" /> Transparent Pricing & Fast Turnaround</li>
          <li className="flex items-center gap-3"><UserGroupIcon className="w-7 h-7 text-orange" /> Free Document Pickup & Delivery*</li>
          <li className="flex items-center gap-3"><FaRegSmile className="w-7 h-7 text-orange" /> Real-time Tracking & Updates</li>
        </ul>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="mb-12">
        <SectionHeader title="What Our Clients Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-cream rounded-xl shadow p-6 flex flex-col items-center">
            <HeartIcon className="w-10 h-10 text-orange mb-2" />
            <p className="italic text-navy mb-2">“Got my marriage certificate attested quickly. The team was very supportive!”</p>
            <span className="font-bold-custom text-navy">Neha D.</span>
          </div>
          <div className="bg-cream rounded-xl shadow p-6 flex flex-col items-center">
            <FaGlobeAsia className="w-10 h-10 text-orange mb-2" />
            <p className="italic text-navy mb-2">“Excellent service for family visa attestation. Highly recommended.”</p>
            <span className="font-bold-custom text-navy">Ravi K.</span>
          </div>
          <div className="bg-cream rounded-xl shadow p-6 flex flex-col items-center">
            <FaRegSmile className="w-10 h-10 text-orange mb-2" />
            <p className="italic text-navy mb-2">“Professional and transparent. My documents were delivered on time.”</p>
            <span className="font-bold-custom text-navy">Ayesha S.</span>
          </div>
        </div>
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
      {/* FAQ SECTION - Card Design */}
      {content.faqs && (
        <section className="faq-preview-section">
          <SectionHeader title="FAQs" />
          <div style={{maxWidth: 700, margin: '0 auto', textAlign: 'left', color: '#444', background: '#f7f7f7', borderRadius: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '2rem 1.5rem'}}>
            {content.faqs.map((faq, idx) => (
              <div key={idx} style={{marginBottom: '1.8rem'}}>
                <strong style={{color: '#003049'}}>Q: {faq.q}</strong><br />
                <span>A: {faq.a}</span>
              </div>
            ))}
          </div>
          <p style={{textAlign: 'center', marginTop: '1.5rem', color: '#003049', fontWeight: 500}}>Still have questions? <a href="/faq" style={{color: '#f77f00', textDecoration: 'underline'}}>Visit our FAQ page</a> or <a href="/contact" style={{color: '#f77f00', textDecoration: 'underline'}}>contact us</a>.</p>
        </section>
      )}
      </div>
    </>
  );
}