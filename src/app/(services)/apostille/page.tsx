import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apostille Services | 99Attestation",
  description: "Get your documents apostilled for use in Hague Convention countries. Fast, secure, and globally accepted.",
  openGraph: {
    title: "Apostille Services | 99Attestation",
    description: "Get your documents apostilled for use in Hague Convention countries. Fast, secure, and globally accepted.",
    url: "https://99attestation.com/services/apostille",
    siteName: "99Attestation.com",
    images: [
      {
        url: "/hero-world-map.png",
        width: 1200,
        height: 630,
        alt: "Apostille Services - 99Attestation",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@99attestation",
    title: "Apostille Services | 99Attestation",
    description: "Get your documents apostilled for use in Hague Convention countries. Fast, secure, and globally accepted.",
    images: [
      {
        url: "/hero-world-map.png",
        alt: "Apostille Services - 99Attestation",
      },
    ],
  },
  keywords: [
    "apostille",
    "apostille services",
    "document apostille",
    "hague convention",
    "international documents",
    "99attestation",
  ],
};

const apostilleTypes = [
  { title: "Educational Documents", desc: "Degree, diploma, and school certificates apostilled for study, work, or migration to Hague Convention countries." },
  { title: "Personal Documents", desc: "Birth, marriage, divorce, and other personal documents apostilled for family, legal, or immigration purposes." },
  { title: "Commercial Documents", desc: "Business, export, and company documents apostilled for international trade and legal compliance." },
];

const documentTypes = [
  { category: "Educational", docs: [
    "Degree Certificate", "Diploma Certificate", "School Leaving Certificate", "Transcript", "Marksheet", "Provisional Certificate"
  ] },
  { category: "Personal", docs: [
    "Birth Certificate", "Marriage Certificate", "Divorce Certificate", "Power of Attorney", "Medical Certificate", "Death Certificate"
  ] },
  { category: "Commercial", docs: [
    "Commercial Invoice", "Certificate of Incorporation", "Board Resolution", "Memorandum of Association", "Export Documents"
  ] },
];

const hagueCountries = {
  usa: "United States of America",
  uk: "United Kingdom",
  canada: "Canada",
  australia: "Australia",
  france: "France",
  germany: "Germany",
  italy: "Italy",
  netherlands: "Netherlands",
  japan: "Japan",
  spain: "Spain",
  switzerland: "Switzerland",
  singapore: "Singapore",
  southafrica: "South Africa",
  newzealand: "New Zealand",
  poland: "Poland",
  brazil: "Brazil",
  argentina: "Argentina",
  mexico: "Mexico",
  chile: "Chile",
  sweden: "Sweden",
  norway: "Norway",
  denmark: "Denmark",
  finland: "Finland",
  greece: "Greece",
  israel: "Israel",
  southkorea: "South Korea",
  estonia: "Estonia",
  hungary: "Hungary",
  portugal: "Portugal",
  turkey: "Turkey",
};

const faqs = [
  { question: "What is an apostille?", answer: "An apostille is a certificate that authenticates the origin of a public document for use in another Hague Convention country. It eliminates the need for further embassy legalization." },
  { question: "Which documents can be apostilled?", answer: "Educational, personal, and commercial documents can be apostilled, including degrees, birth certificates, marriage certificates, and business documents." },
  { question: "How long does the apostille process take?", answer: "Most apostille requests are completed within 5-10 business days, depending on the document and issuing authority." },
  { question: "Do I need an apostille or embassy attestation?", answer: "If your destination country is part of the Hague Convention, you need an apostille. For non-Hague countries, embassy attestation is required." },
  { question: "Is my data safe with 99Attestation.com?", answer: "Absolutely. We use secure processes and never share your documents or data with third parties without your consent." },
  { question: "Can I track my document status?", answer: "Yes, you can track your document status online or by contacting our support team." },
];

export default function ApostillePage() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 fade-in">
      {/* Hero/Intro */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-3 tracking-tight drop-shadow-lg">Apostille Services</h1>
        <p className="text-lg md:text-xl text-navy mb-4 max-w-2xl mx-auto">Get your documents apostilled quickly and securely for international use. We handle educational, personal, and commercial documents for all Hague Convention countries. Trusted by 10,000+ clients for over a decade.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <a href="https://wa.me/919686924808" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange text-navy font-bold-custom px-8 py-3 rounded-full shadow hover:bg-yellow transition hover-scale">Talk to Experts</a>
          <Link href="/contact" className="inline-block bg-yellow text-navy font-bold-custom px-8 py-3 rounded-full shadow hover:bg-orange transition hover-scale">Contact Us</Link>
        </div>
      </div>

      {/* Types of Apostille */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold-custom text-navy mb-6 text-center">Types of Apostille</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apostilleTypes.map((type) => (
            <div key={type.title} className="bg-cream rounded-xl p-6 shadow border border-yellow/30 text-center hover-raise transition">
              <h3 className="text-xl font-bold-custom text-navy mb-2">{type.title}</h3>
              <p className="text-navy text-base">{type.desc}</p>
            </div>
          ))}
        </div>
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

      {/* Hague Countries List */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold-custom text-navy mb-6 text-center">Hague Convention Countries</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(hagueCountries).map(([key, name]) => (
            <Link key={key} href={`/services/apostille/${key}`} className="bg-yellow/20 border border-yellow/40 rounded-full px-6 py-3 font-bold-custom text-navy shadow hover:bg-yellow hover-scale transition">
              {name}
            </Link>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold-custom text-navy mb-6 text-center">Why Choose 99Attestation?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-cream rounded-xl p-6 shadow border border-yellow/30">
            <ul className="list-disc pl-6 space-y-2 text-navy">
              <li>Govt. & MEA Approved</li>
              <li>10,000+ Documents Processed</li>
              <li>All Hague Countries Covered</li>
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
              <li>Receive apostilled documents quickly and securely at your doorstep</li>
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
        <p className="text-navy mb-6 max-w-xl mx-auto">Contact us today for a free quote, document pickup, or to discuss your apostille needs with our experts. We’re here to help you every step of the way.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <a href="https://wa.me/919686924808" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange text-navy font-bold-custom px-8 py-3 rounded-full shadow hover:bg-yellow transition hover-scale">Talk to Experts</a>
          <Link href="/contact" className="inline-block bg-yellow text-navy font-bold-custom px-8 py-3 rounded-full shadow hover:bg-orange transition hover-scale">Contact Us</Link>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Apostille Services",
            "provider": {
              "@type": "Organization",
              "name": "99Attestation.com",
              "url": "https://99attestation.com/"
            },
            "areaServed": "Worldwide",
            "description": "Get your documents apostilled for use in Hague Convention countries. Fast, secure, and globally accepted."
          })
        }}
      />
    </section>
  );
}