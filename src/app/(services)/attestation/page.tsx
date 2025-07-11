import type { Metadata } from "next";
import Link from "next/link";
import { AcademicCapIcon, IdentificationIcon, BriefcaseIcon, GlobeAltIcon, BuildingLibraryIcon } from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Document Attestation Services | Embassy Legalization | 99Attestation.com",
  description: "Professional document attestation services for embassy legalization. Fast, secure attestation for educational, personal, and commercial documents. 25+ years experience.",
  keywords: ["attestation", "document attestation", "embassy attestation", "legalization", "99attestation"],
  openGraph: {
    title: "Document Attestation Services | Embassy Legalization | 99Attestation.com",
    description: "Professional document attestation services for embassy legalization. Fast, secure attestation for educational, personal, and commercial documents. 25+ years experience.",
    url: "https://99attestation.com/services/attestation",
    siteName: "99Attestation.com",
    images: [
      {
        url: "/hero-world-map.png",
        width: 1200,
        height: 630,
        alt: "99Attestation - Document Attestation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@99attestation",
    title: "Document Attestation Services | Embassy Legalization | 99Attestation.com",
    description: "Professional document attestation services for embassy legalization. Fast, secure attestation for educational, personal, and commercial documents. 25+ years experience.",
    images: [
      {
        url: "/hero-world-map.png",
        alt: "99Attestation - Document Attestation Services",
      },
    ],
  },
};

const attestationTypes = [
  { title: "Educational Attestation", desc: "Degree, diploma, and school certificates attested for study, work, or migration abroad. Includes HRD, MEA, embassy, and university verification.", icon: <AcademicCapIcon className="w-10 h-10 text-orange mx-auto mb-2" /> },
  { title: "Personal Attestation", desc: "Birth, marriage, divorce, and personal documents attested for family, legal, or immigration purposes. Includes affidavits, medical, and police certificates.", icon: <IdentificationIcon className="w-10 h-10 text-orange mx-auto mb-2" /> },
  { title: "Commercial Attestation", desc: "Business, export, and company documents attested for international trade, business setup, and legal compliance. Includes power of attorney, invoices, and more.", icon: <BriefcaseIcon className="w-10 h-10 text-orange mx-auto mb-2" /> },
  { title: "Apostille Services", desc: "Apostille for Hague Convention countries, making your documents valid internationally without further embassy legalization.", icon: <GlobeAltIcon className="w-10 h-10 text-orange mx-auto mb-2" /> },
  { title: "Embassy Attestation", desc: "End-to-end embassy attestation for non-Hague countries, including UAE, Oman, Qatar, Kuwait, Saudi Arabia, and more.", icon: <BuildingLibraryIcon className="w-10 h-10 text-orange mx-auto mb-2" /> },
];

const documentTypes = [
  { category: "Educational", docs: [
    "Degree Certificate", "Diploma Certificate", "School Leaving Certificate", "Transcript", "Marksheet", "Provisional Certificate", "Nursing Certificate", "Engineering Certificate", "Transfer Certificate", "Bonafide Certificate"
  ] },
  { category: "Personal", docs: [
    "Birth Certificate", "Marriage Certificate", "Divorce Certificate", "Power of Attorney", "Medical Certificate", "Death Certificate", "Affidavit", "Police Clearance Certificate (PCC)", "Adoption Deed", "Experience Certificate"
  ] },
  { category: "Commercial", docs: [
    "Commercial Invoice", "Certificate of Incorporation", "Board Resolution", "Memorandum of Association", "Articles of Association", "Power of Attorney (Company)", "Export Documents", "Agency Agreement", "Shareholder Certificate"
  ] },
];

const countryNames = {
  uae: "United Arab Emirates",
  oman: "Oman",
  qatar: "Qatar",
  kuwait: "Kuwait",
  saudi: "Saudi Arabia",
  bahrain: "Bahrain",
  usa: "United States of America",
  uk: "United Kingdom",
  canada: "Canada",
  australia: "Australia",
  italy: "Italy",
  france: "France",
  germany: "Germany",
  singapore: "Singapore",
  southafrica: "South Africa",
  malaysia: "Malaysia",
  newzealand: "New Zealand",
  spain: "Spain",
  netherlands: "Netherlands",
  switzerland: "Switzerland",
  japan: "Japan",
};

const faqs = [
  { question: "What is document attestation?", answer: "Document attestation is the process of verifying the authenticity of documents for use abroad, typically for education, employment, migration, or business purposes. It involves multiple government and embassy verifications." },
  { question: "How do I get started?", answer: "Simply request a quote or contact us. Our team will guide you through the process step by step, including document pickup, verification, and delivery." },
  { question: "How long does the attestation process take?", answer: "Processing times vary by document type and country, but we strive to complete most attestations within 7-15 business days. Expedited services are available for urgent needs." },
  { question: "Which documents can you attest?", answer: "We can attest educational, personal, and commercial documents including degrees, birth certificates, marriage certificates, power of attorney, and more. See the full list above." },
  { question: "Is my data safe with 99Attestation.com?", answer: "Absolutely. We use secure processes, encrypted storage, and never share your documents or data with third parties without your consent." },
  { question: "Do you provide apostille and embassy attestation?", answer: "Yes, we provide both apostille (for Hague Convention countries) and embassy attestation (for non-Hague countries) services." },
  { question: "Can I track my document status?", answer: "Yes, you can track your document status online using our Track Document feature or by contacting our support team." },
  { question: "Do you offer document pickup and delivery?", answer: "Yes, we offer secure document pickup and delivery services in major cities. Contact us to check availability in your area." },
];

export default function AttestationPage() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 fade-in">
      {/* Hero/Intro */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-3 tracking-tight drop-shadow-lg">Attestation Services</h1>
        <p className="text-lg md:text-xl text-navy mb-4 max-w-2xl mx-auto">Fast, reliable, and secure attestation for all your documents. We handle educational, personal, and commercial documents for UAE, Oman, Qatar, Saudi Arabia, USA, UK, Canada, and 15+ more countries. Trusted by 10,000+ clients for over a decade.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <a href="https://wa.me/919686924808" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange text-navy font-bold-custom px-8 py-3 rounded-full shadow hover:bg-yellow transition hover-scale">Talk to Experts</a>
          <Link href="/contact" className="inline-block bg-yellow text-navy font-bold-custom px-8 py-3 rounded-full shadow hover:bg-orange transition hover-scale">Contact Us</Link>
        </div>
      </div>

      {/* Types of Attestation */}
      <h2 className="text-2xl font-bold-custom text-navy mb-6 text-center">Types of Attestation</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        {attestationTypes.map((type) => (
          <div key={type.title} className="bg-cream rounded-xl p-6 shadow border border-yellow/30 text-center hover-raise transition group hover:border-orange hover:scale-105" style={{minHeight: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
            {type.icon}
            <h3 className="text-xl font-bold-custom text-navy mb-2 group-hover:text-orange transition">{type.title}</h3>
            <p className="text-navy text-base">{type.desc}</p>
          </div>
        ))}
      </div>

      {/* Document Types */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold-custom text-navy mb-6 text-center">Document Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {documentTypes.map((cat) => (
            <div key={cat.category} className="bg-white/90 rounded-xl p-6 shadow border border-yellow/30">
              <h3 className="text-lg font-bold-custom text-navy mb-2">{cat.category}</h3>
              <ul className="list-disc pl-5 text-navy space-y-1">
                {cat.docs.map((doc) => (
                  <li key={doc}>{doc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-navy mt-4">If your document type is not listed, <Link href="/contact" className="text-orange font-bold-custom hover-underline">contact us</Link> for a custom solution.</p>
      </div>

      {/* Countries List */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold-custom text-navy mb-6 text-center">Countries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(countryNames).map(([key, name]) => (
            <Link key={key} href={`/services/attestation/${key}`} className="bg-yellow/20 border border-yellow/40 rounded-full px-6 py-3 font-bold-custom text-navy shadow hover:bg-yellow hover-scale transition">
              {name}
            </Link>
          ))}
        </div>
        <p className="text-center text-navy mt-4">We serve 20+ countries worldwide. <Link href="/countries" className="text-orange font-bold-custom hover-underline">See all countries</Link></p>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold-custom text-navy mb-6 text-center">Why Choose 99Attestation?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-cream rounded-xl p-6 shadow border border-yellow/30">
            <ul className="list-disc pl-6 space-y-2 text-navy">
              <li>Govt. & Embassy Approved</li>
              <li>10,000+ Documents Processed</li>
              <li>100+ Countries Served</li>
              <li>ISO Certified & Secure</li>
              <li>Transparent Pricing & Fast Turnaround</li>
              <li>Dedicated Support Team</li>
              <li>Free Document Pickup & Delivery*</li>
              <li>Real-time Tracking & Updates</li>
              <li>Personalized Guidance for Every Client</li>
            </ul>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow border border-yellow/30 flex flex-col justify-center">
            <h3 className="text-xl font-bold-custom text-navy mb-2">How It Works</h3>
            <ol className="list-decimal pl-6 space-y-1 text-navy">
              <li>Submit your documents online or at our office</li>
              <li>We verify and process your documents through all required authorities</li>
              <li>Receive attested documents quickly and securely at your doorstep</li>
            </ol>
            <p className="text-navy mt-3 text-sm">*Available in select cities. Contact us for details.</p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold-custom text-navy mb-6 text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-cream rounded-lg p-4 shadow hover-raise transition">
              <details>
                <summary className="font-bold-custom text-navy cursor-pointer flex justify-between items-center">
                  {faq.question}
                  <span className="ml-2 text-orange">+</span>
                </summary>
                <div className="mt-2 text-navy">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/faq" className="text-orange font-bold-custom hover-underline hover-scale">See all FAQs</Link>
        </div>
      </div>

      {/* Contact/CTA */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold-custom text-navy mb-4">Ready to Get Started?</h2>
        <p className="text-navy mb-6 max-w-xl mx-auto">Contact us today for a free quote, document pickup, or to discuss your attestation needs with our experts. We’re here to help you every step of the way.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <a href="https://wa.me/919686924808" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange text-navy font-bold-custom px-8 py-3 rounded-full shadow hover:bg-yellow transition hover-scale">Talk to Experts</a>
          <Link href="/contact" className="inline-block bg-yellow text-navy font-bold-custom px-8 py-3 rounded-full shadow hover:bg-orange transition hover-scale">Contact Us</Link>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-[99]">
        <a
          href="https://wa.me/919686924808"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg font-bold-custom text-base md:text-lg transition-all duration-200 animate-fade-in-up"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.3 4.75a1 1 0 0 0 1.22 1.22l4.75-1.3A12 12 0 1 0 20.52 3.48zm-8.52 17a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm4.29-6.71c-.23-.12-1.36-.67-1.57-.75s-.36-.12-.51.12-.59.75-.72.9-.27.17-.5.06a7.36 7.36 0 0 1-2.16-1.34 8.13 8.13 0 0 1-1.5-1.87c-.16-.27 0-.41.12-.53s.27-.32.4-.48a.45.45 0 0 0 .06-.5c-.06-.12-.51-1.23-.7-1.68s-.37-.37-.51-.38h-.43a.87.87 0 0 0-.63.29 2.62 2.62 0 0 0-.82 2c0 1.18.85 2.33 1 2.5a10.13 10.13 0 0 0 3.13 2.62 7.44 7.44 0 0 0 1.36.5 3.25 3.25 0 0 0 1.5.09c.46-.07 1.36-.56 1.55-1.1s.19-1 .13-1.1-.21-.15-.44-.27z"/></svg>
          Talk to an Expert
        </a>
      </div>
    </section>
  );
}