import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';
import ServiceCard from '../../components/ServiceCard';
import type { Metadata } from "next";
import { CheckBadgeIcon, GlobeAltIcon, ClockIcon, ShieldCheckIcon, UserGroupIcon, DocumentCheckIcon } from '@heroicons/react/24/solid';
import { FaRegSmile, FaUserGraduate, FaGlobeAsia } from 'react-icons/fa';

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

export const metadata: Metadata = {
  title: "WES Verification | World Education Services | 99Attestation.com",
  description: "Get your documents verified for WES (World Education Services) evaluation. Fast WES verification for Canada and USA immigration. 25+ years experience.",
  keywords: ["WES verification", "World Education Services", "WES evaluation", "Canada immigration", "USA immigration", "99attestation"],
  openGraph: {
    title: "WES Verification | World Education Services | 99Attestation.com",
    description: "Get your documents verified for WES (World Education Services) evaluation. Fast WES verification for Canada and USA immigration. 25+ years experience.",
    url: "https://99attestation.com/services/wes-verification",
    siteName: "99Attestation.com",
    images: [
      {
        url: "/hero-world-map.png",
        width: 1200,
        height: 630,
        alt: "99Attestation - WES Verification Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@99attestation",
    title: "WES Verification | World Education Services | 99Attestation.com",
    description: "Get your documents verified for WES (World Education Services) evaluation. Fast WES verification for Canada and USA immigration. 25+ years experience.",
    images: [
      {
        url: "/hero-world-map.png",
        alt: "99Attestation - WES Verification Services",
      },
    ],
  },
};

export default function WESVerificationPage() {
  return (
    <>
      {/* HERO SECTION - FULL WIDTH */}
      <section className="hero-section bg-cream rounded-none shadow-none mb-8 flex flex-col items-center justify-center p-8 w-full" style={{borderRadius: 0, boxShadow: 'none', marginLeft: 0, marginRight: 0, maxWidth: '100vw'}}>
        <span className="bg-orange p-4 rounded-full shadow-lg mb-4 flex items-center justify-center">
          <DocumentCheckIcon className="w-12 h-12 text-navy" />
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-3 tracking-tight drop-shadow-lg">{content.title}</h1>
        <p className="text-lg md:text-xl text-navy mb-4 max-w-2xl mx-auto">{content.summary}</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <a href="https://wa.me/919686924808?text=Hello%2C%20I%20need%20expert%20advice%20on%20WES%20verification." target="_blank" rel="noopener noreferrer" className="inline-block bg-orange text-navy font-bold-custom px-8 py-3 rounded-full shadow hover:bg-yellow transition hover-scale">Talk to Expert</a>
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
          <li className="flex items-center gap-3"><ShieldCheckIcon className="w-7 h-7 text-orange" /> WES Recognized Partner</li>
          <li className="flex items-center gap-3"><FaUserGraduate className="w-7 h-7 text-orange" /> Fast Processing</li>
          <li className="flex items-center gap-3"><GlobeAltIcon className="w-7 h-7 text-orange" /> Secure Handling</li>
          <li className="flex items-center gap-3"><CheckBadgeIcon className="w-7 h-7 text-orange" /> Transparent Pricing</li>
          <li className="flex items-center gap-3"><ClockIcon className="w-7 h-7 text-orange" /> Expert Guidance</li>
          <li className="flex items-center gap-3"><UserGroupIcon className="w-7 h-7 text-orange" /> Real-time Tracking</li>
          <li className="flex items-center gap-3"><FaRegSmile className="w-7 h-7 text-orange" /> Customer Satisfaction</li>
        </ul>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="mb-12">
        <SectionHeader title="What Our Clients Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-cream rounded-xl shadow p-6 flex flex-col items-center">
            <FaUserGraduate className="w-10 h-10 text-orange mb-2" />
            <p className="italic text-navy mb-2">“WES verification was completed quickly and securely. Highly professional!”</p>
            <span className="font-bold-custom text-navy">Sonia P.</span>
          </div>
          <div className="bg-cream rounded-xl shadow p-6 flex flex-col items-center">
            <FaGlobeAsia className="w-10 h-10 text-orange mb-2" />
            <p className="italic text-navy mb-2">“Great support and real-time updates. Thank you!”</p>
            <span className="font-bold-custom text-navy">Mehul S.</span>
          </div>
          <div className="bg-cream rounded-xl shadow p-6 flex flex-col items-center">
            <FaRegSmile className="w-10 h-10 text-orange mb-2" />
            <p className="italic text-navy mb-2">“Transparent process and timely delivery.”</p>
            <span className="font-bold-custom text-navy">Arvind T.</span>
          </div>
        </div>
      </section>
      <section className="cta-section" style={{textAlign: 'center', margin: '3rem 0'}}>
        <a
          href="https://wa.me/919686924808?text=Hello%2C%20I%20need%20expert%20advice%20on%20WES%20verification."
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button bg-orange text-navy font-bold-custom px-8 py-3 rounded-full shadow hover:bg-yellow transition hover-scale"
          style={{marginRight: '1rem'}}
        >
          Talk to Expert on WhatsApp
        </a>
        <CTAButton href="/contact">Contact Us</CTAButton>
        <p style={{marginTop: '1rem', color: '#888', fontSize: '0.95rem'}}>Expert consultation, instant answers, and document guidance on WhatsApp.</p>
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