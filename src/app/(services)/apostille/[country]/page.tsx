import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// --- Sample Data ---
const countryData: Record<string, {
  name: string;
  flag: string;
  process: string[];
  whyNeeded: string[];
  documents: {
    educational: string[];
    nonEducational: string[];
    commercial: string[];
  };
  checklist: string[];
  faqs: { q: string; a: string }[];
  related: { name: string; href: string }[];
}> = {
  italy: {
    name: "Italy",
    flag: "🇮🇹",
    process: [
      "Notary/State Attestation (if required)",
      "MEA Apostille",
      "Submit to Italian authorities"
    ],
    whyNeeded: [
      "Study in Italy",
      "Work Visa",
      "Business Setup",
      "Family Visa"
    ],
    documents: {
      educational: ["Degree Certificate", "Diploma Certificate", "Transcript"],
      nonEducational: ["Birth Certificate", "Marriage Certificate", "PCC"],
      commercial: ["Power of Attorney", "Commercial Invoice"]
    },
    checklist: [
      "Original certificate",
      "Passport copy",
      "Authorization letter (if required)"
    ],
    faqs: [
      { q: "How long does Italy apostille take?", a: "Usually 5-10 business days." },
      { q: "Is embassy attestation needed after apostille?", a: "No, apostille is sufficient for Hague Convention countries like Italy." }
    ],
    related: [
      { name: "Translation", href: "/services/translation" },
      { name: "MEA Attestation", href: "/services/mea-attestation" },
      { name: "Attestation", href: "/services/attestation" }
    ]
  },
  // Add more countries as needed
};

export async function generateStaticParams() {
  return Object.keys(countryData).map((country) => ({ country }));
}

export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
  const country = countryData[params.country]?.name || "Country";
  return {
    title: `${country} Apostille | 99Attestation`,
    description: `Fast, reliable, and secure apostille for ${country}. Study, work, business, and family. WhatsApp or talk to experts now!`,
  };
}

export default function Page({ params }: { params: { country: string } }) {
  const data = countryData[params.country] || countryData.italy;
  return (
    <section className="max-w-4xl mx-auto py-10 px-4 fade-in">
      {/* Hero */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-6xl mb-2">{data.flag}</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-2">{data.name} Apostille</h1>
        <p className="text-lg text-navy mb-4">Fast, reliable, and secure apostille for {data.name} from India.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
          <a href="https://wa.me/919686924808" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold-custom text-lg shadow-lg transition-all duration-200">WhatsApp Expert</a>
          <a href="tel:9686924808" className="bg-orange hover:bg-yellow text-navy px-8 py-3 rounded-full font-bold-custom text-lg shadow-lg transition-all duration-200">Talk to Experts</a>
          <a href="/contact" className="bg-navy hover:bg-orange text-cream px-8 py-3 rounded-full font-bold-custom text-lg shadow-lg transition-all duration-200">Enquiry Form</a>
        </div>
      </div>

      {/* Why Needed */}
      <div className="mb-10">
        <h2 className="text-xl font-bold-custom text-navy mb-3">Why is Apostille Needed?</h2>
        <ul className="list-disc pl-6 text-navy space-y-1">
          {data.whyNeeded.map((reason: string) => <li key={reason}>{reason}</li>)}
        </ul>
      </div>

      {/* Step-by-Step Process */}
      <div className="mb-10">
        <h2 className="text-xl font-bold-custom text-navy mb-3">Step-by-Step Process</h2>
        <ol className="list-decimal pl-6 text-navy space-y-1">
          {data.process.map((step: string) => <li key={step}>{step}</li>)}
        </ol>
      </div>

      {/* Document Types */}
      <div className="mb-10">
        <h2 className="text-xl font-bold-custom text-navy mb-3">Document Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold-custom text-orange mb-2">Educational</h3>
            <ul className="list-disc pl-5 text-navy space-y-1">
              {data.documents.educational.map((doc: string) => <li key={doc}>{doc}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-bold-custom text-orange mb-2">Non-Educational</h3>
            <ul className="list-disc pl-5 text-navy space-y-1">
              {data.documents.nonEducational.map((doc: string) => <li key={doc}>{doc}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-bold-custom text-orange mb-2">Commercial</h3>
            <ul className="list-disc pl-5 text-navy space-y-1">
              {data.documents.commercial.map((doc: string) => <li key={doc}>{doc}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Checklist */}
      <div className="mb-10">
        <h2 className="text-xl font-bold-custom text-navy mb-3">Checklist</h2>
        <ul className="list-disc pl-6 text-navy space-y-1">
          {data.checklist.map((item: string) => <li key={item}>{item}</li>)}
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="mb-10">
        <h2 className="text-xl font-bold-custom text-navy mb-3">Why Choose 99Attestation?</h2>
        <ul className="list-disc pl-6 text-navy space-y-1">
          <li>10,000+ documents processed</li>
          <li>Govt. approved & ISO certified</li>
          <li>24/7 support & expert guidance</li>
          <li>Secure, transparent, and fast process</li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="mb-10">
        <h2 className="text-xl font-bold-custom text-navy mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {data.faqs.map((faq: { q: string; a: string }, idx: number) => (
            <div key={idx} className="bg-cream rounded-lg p-4 shadow">
              <details>
                <summary className="font-bold-custom text-navy cursor-pointer flex justify-between items-center">{faq.q}<span className="ml-2 text-orange">+</span></summary>
                <div className="mt-2 text-navy">{faq.a}</div>
              </details>
            </div>
          ))}
        </div>
      </div>

      {/* Related Services */}
      <div className="mb-10">
        <h2 className="text-xl font-bold-custom text-navy mb-3">Related Services</h2>
        <div className="flex flex-wrap gap-4">
          {data.related.map((service: { name: string; href: string }) => (
            <Link key={service.href} href={service.href} className="bg-orange/90 text-navy font-bold-custom px-6 py-2 rounded-full shadow hover:bg-yellow transition text-sm md:text-base hover-raise hover-scale">
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 