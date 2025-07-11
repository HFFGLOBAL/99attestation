import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 99Attestation",
  description: "Learn about 99Attestation, our mission, vision, and why we are your trusted partner for document attestation and apostille services.",
  keywords: ["about", "about 99attestation", "company info", "attestation", "apostille"],
  openGraph: {
    title: "About Us | 99Attestation",
    description: "Learn about 99Attestation, our mission, vision, and why we are your trusted partner for document attestation and apostille services.",
    url: "https://99attestation.com/about",
    siteName: "99Attestation.com",
    images: [
      {
        url: "/hero-world-map.png",
        width: 1200,
        height: 630,
        alt: "99Attestation - Global Attestation Services",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@99attestation",
    title: "About Us | 99Attestation",
    description: "Learn about 99Attestation, our mission, vision, and why we are your trusted partner for document attestation and apostille services.",
    images: [
      {
        url: "/hero-world-map.png",
        alt: "99Attestation - Global Attestation Services",
      },
    ],
  },
};


import { StarIcon, CheckCircleIcon, UserGroupIcon, GlobeAltIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const values = [
  "Integrity & Transparency",
  "Customer-Centric Approach",
  "Speed & Reliability",
  "Data Security",
  "Global Reach"
];

const whyChoose = [
  { icon: <CheckCircleIcon className="w-7 h-7 text-orange" />, text: "Govt. & Embassy Approved" },
  { icon: <UserGroupIcon className="w-7 h-7 text-orange" />, text: "10,000+ Documents Processed" },
  { icon: <GlobeAltIcon className="w-7 h-7 text-orange" />, text: "100+ Countries Served" },
  { icon: <DocumentCheckIcon className="w-7 h-7 text-orange" />, text: "ISO Certified & Secure" }
];

const testimonials = [
  { name: "Amit Sharma", quote: "Super fast and reliable service! Got my degree attested for UAE in record time.", rating: 5 },
  { name: "Priya Verma", quote: "Excellent support and transparent pricing. Highly recommended!", rating: 5 },
  { name: "John Mathew", quote: "The team handled my commercial documents with great care. Hassle-free experience.", rating: 4 },
  { name: "Fatima Noor", quote: "I was able to track my documents easily. Very professional and trustworthy.", rating: 5 }
];

const serviceKeywords = [
  "Educational Attestation",
  "Personal Attestation",
  "Commercial Attestation",
  "Apostille",
  "HRD Attestation",
  "MEA Attestation",
  "PCC",
  "WES Verification",
  "Translation",
  "Embassy Attestation",
  "Degree Attestation",
  "Birth Certificate Attestation",
  "Marriage Certificate Attestation",
  "Document Verification",
  "Notary Services"
];

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 fade-in">
      {/* About & Story */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-3 tracking-tight drop-shadow-xl">About 99Attestation.com</h1>
        <p className="text-lg md:text-xl text-navy mb-6">Your trusted partner for fast, reliable, and secure document attestation services worldwide.</p>
      </div>
      <div className="bg-cream rounded-3xl p-8 md:p-12 shadow-xl mb-12 slide-up">
        <h2 className="text-2xl font-bold-custom text-navy mb-2">Our Story</h2>
        <p className="text-navy mb-2">Founded by industry experts with over 15 years of experience, 99Attestation.com has helped thousands of clients get their documents attested for use in over 100 countries. We are committed to making the process seamless and stress-free for you. Our journey began with a vision to simplify global mobility for everyone, and today, we are proud to be a leader in the industry.</p>
      </div>
      {/* Vision, Mission, Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-yellow rounded-2xl p-6 shadow slide-up">
          <h3 className="text-xl font-bold-custom text-navy mb-2">Vision</h3>
          <p className="text-navy">To be the most trusted and innovative attestation partner globally, empowering individuals and businesses to achieve their international goals.</p>
        </div>
        <div className="bg-yellow rounded-2xl p-6 shadow slide-up">
          <h3 className="text-xl font-bold-custom text-navy mb-2">Mission</h3>
          <p className="text-navy">To simplify and expedite the attestation process for individuals and businesses, ensuring peace of mind, transparency, and global mobility for all our clients.</p>
        </div>
        <div className="bg-yellow rounded-2xl p-6 shadow slide-up">
          <h3 className="text-xl font-bold-custom text-navy mb-2">Values</h3>
          <ul className="list-disc pl-6 text-navy">
            {values.map((val, idx) => <li key={idx}>{val}</li>)}
          </ul>
        </div>
      </div>
      {/* Why Choose Us */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold-custom text-navy mb-6 text-center">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {whyChoose.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-cream rounded-xl px-6 py-4 shadow slide-up">
              {item.icon}
              <span className="text-navy font-semibold">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonials */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold-custom text-navy mb-6 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-yellow rounded-2xl p-6 shadow flex flex-col items-center text-center slide-up">
              <div className="flex gap-1 mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-orange" />
                ))}
              </div>
              <p className="text-navy italic mb-3">&quot;{t.quote}&quot;</p>
              <span className="font-bold-custom text-navy">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Service Tag Cloud */}
      <div className="mb-16">
        <h3 className="text-xl font-bold-custom text-navy mb-4 text-center">Our Services</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {serviceKeywords.map((keyword, idx) => (
            <span key={idx} className="bg-orange/90 text-navy font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow/90 transition text-sm md:text-base hover-raise hover-scale">
              {keyword}
            </span>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <div className="relative flex flex-col items-center justify-center py-16 px-6 md:px-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200/80 via-yellow/60 to-orange-300/80 blur-2xl opacity-80 -z-10" />
        <div className="relative bg-white/90 border border-yellow/40 rounded-3xl shadow-2xl backdrop-blur-xl p-10 md:p-16 max-w-3xl w-full mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-navy drop-shadow-lg tracking-tight">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-navy font-medium">Experience seamless, fast, and reliable attestation services with <span className='font-bold text-orange'>99Attestation.com</span>. Connect with our team instantly on WhatsApp or reach out via our contact form for personalized assistance.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://wa.me/919686924808"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-cream px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:from-green-500 hover:to-green-700 hover:scale-105 hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              <svg className="w-7 h-7 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.3 4.75a1 1 0 0 0 1.22 1.22l4.75-1.3A12 12 0 1 0 20.52 3.48zm-8.52 17a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm4.29-6.71c-.23-.12-1.36-.67-1.57-.75s-.36-.12-.51.12-.59.75-.72.9-.27.17-.5.06a7.36 7.36 0 0 1-2.16-1.34 8.13 8.13 0 0 1-1.5-1.87c-.16-.27 0-.41.12-.53s.27-.32.4-.48a.45.45 0 0 0 .06-.5c-.06-.12-.51-1.23-.7-1.68s-.37-.37-.51-.38h-.43a.87.87 0 0 0-.63.29 2.62 2.62 0 0 0-.82 2c0 1.18.85 2.33 1 2.5a10.13 10.13 0 0 0 3.13 2.62 7.44 7.44 0 0 0 1.36.5 3.25 3.25 0 0 0 1.5.09c.46-.07 1.36-.56 1.55-1.1s.19-1 .13-1.1-.21-.15-.44-.27z"/></svg>
              Chat with Us on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-block bg-navy/90 text-cream px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:bg-orange hover:text-navy hover:scale-105 hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange/30"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "99Attestation.com",
            "url": "https://99attestation.com/about",
            "logo": "/hero-world-map.png",
            "sameAs": [
              "https://www.facebook.com/99attestation",
              "https://twitter.com/99attestation"
            ],
            "description": "Learn about 99Attestation, our mission, vision, and why we are your trusted partner for document attestation and apostille services."
          })
        }}
      />
    </section>

    
  );
}