import { CheckCircleIcon, ClockIcon, ShieldCheckIcon, CurrencyRupeeIcon, PhoneIcon, UserGroupIcon, GlobeAltIcon, DocumentCheckIcon, ArrowRightIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const metadata = {
  title: "99Attestation.com | Fast & Reliable Document Attestation Services",
  description: "Your trusted partner for attestation, apostille, embassy, and verification services. 15+ years experience, 10,000+ documents processed, 5000+ happy customers.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white pt-4 pb-12 px-4 sm:px-6 fade-in">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy mb-4">Your Trusted Partner for <span className="text-orange">Fast & Reliable</span> Document Attestation</h1>
            <p className="text-lg text-navy mb-6">99Attestation.com offers seamless, secure, and speedy attestation, apostille, and embassy services for all your documents. Experience global reach, transparent pricing, and dedicated support.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <a href="https://wa.me/919686924808" target="_blank" rel="noopener noreferrer" className="bg-orange text-navy px-6 py-3 rounded-full font-bold-custom hover:bg-yellow transition text-lg">Talk to Experts</a>
              <a href="/services" className="border border-navy text-navy px-6 py-3 rounded-full font-bold-custom hover:bg-navy hover:text-cream transition text-lg flex items-center gap-2">Explore Services <ArrowRightIcon className="w-5 h-5" /></a>
            </div>
            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start mt-8">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold-custom text-navy">25+</span>
                <span className="text-xs text-orange font-bold-custom">Years Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold-custom text-navy">10,000+</span>
                <span className="text-xs text-orange font-bold-custom">Documents Processed</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold-custom text-navy">5,000+</span>
                <span className="text-xs text-orange font-bold-custom">Happy Customers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center gap-1 text-orange font-bold-custom"><ShieldCheckIcon className="w-5 h-5" /> Govt. Approved</span>
                <span className="inline-flex items-center gap-1 text-orange font-bold-custom"><CheckCircleIcon className="w-5 h-5" /> ISO Certified</span>
              </div>
            </div>
          </div>
          {/* Hero Image/Visual */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image src="/hero-world-map.png" alt="Global Attestation" width={620} height={420} className="rounded-xl object-cover" />
          </div>
        </div>
      </section>

      {/* Countries We Serve Section (moved up) */}
      <section className="pb-20 bg-white px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold-custom text-navy mb-4 text-center">Global Reach: Attestation for Over 100 Countries</h2>
          <p className="text-navy text-center mb-10">We facilitate document attestation for a vast network of countries, both Hague Convention and non-Hague Convention nations.</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="flex-1">
              <h3 className="font-bold-custom text-orange mb-2">Apostille Countries</h3>
              <div className="flex flex-wrap gap-3">
                {/* Placeholder flags, replace with actual flag images */}
                <CountryFlag name="USA" />
                <CountryFlag name="UK" />
                <CountryFlag name="Australia" />
                <CountryFlag name="Italy" />
                <CountryFlag name="Germany" />
                <CountryFlag name="France" />
                <CountryFlag name="Netherlands" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold-custom text-orange mb-2">Embassy Attestation Countries</h3>
              <div className="flex flex-wrap gap-3">
                <CountryFlag name="UAE" />
                <CountryFlag name="Saudi Arabia" />
                <CountryFlag name="Qatar" />
                <CountryFlag name="Kuwait" />
                <CountryFlag name="Oman" />
                <CountryFlag name="Bahrain" />
                <CountryFlag name="Egypt" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-cream px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold-custom text-navy mb-4 text-center fade-in">Our Comprehensive Attestation Services</h2>
          <p className="text-navy text-center mb-10">We offer a full range of attestation, apostille, and verification services for all document types.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Service Cards */}
            <ServiceCard icon={<DocumentCheckIcon className="w-8 h-8 text-navy" />} title="Educational Attestation" desc="Degree, diploma, and school certificate attestation for global use." href="/services/educational-attestation" />
            <ServiceCard icon={<UserGroupIcon className="w-8 h-8 text-navy" />} title="Personal Attestation" desc="Birth, marriage, and personal document attestation." href="/services/personal-attestation" />
            <ServiceCard icon={<GlobeAltIcon className="w-8 h-8 text-navy" />} title="Commercial Attestation" desc="Business, export, and commercial document attestation." href="/services/commercial-attestation" />
            <ServiceCard icon={<CheckCircleIcon className="w-8 h-8 text-navy" />} title="Apostille Services" desc="Hague Convention apostille for 100+ countries." href="/services/apostille" />
            <ServiceCard icon={<ShieldCheckIcon className="w-8 h-8 text-navy" />} title="MEA & Embassy Attestation" desc="Ministry and embassy attestation for non-apostille countries." href="/services/mea" />
            <ServiceCard icon={<ClockIcon className="w-8 h-8 text-navy" />} title="PCC & WES Verification" desc="Police clearance, WES, and other verifications." href="/services/pcc" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold-custom text-navy mb-4 text-center">Why Choose 99Attestation.com?</h2>
          <p className="text-navy text-center mb-10">We stand out for our commitment to speed, reliability, and customer satisfaction.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <BenefitCard icon={<ClockIcon className="w-8 h-8 text-navy" />} title="Speed & Efficiency" desc="Fastest processing & delivery in the industry." />
            <BenefitCard icon={<ShieldCheckIcon className="w-8 h-8 text-navy" />} title="Trust & Reliability" desc="Govt. & Embassy Approved, ISO Certified." />
            <BenefitCard icon={<CurrencyRupeeIcon className="w-8 h-8 text-navy" />} title="Transparent Pricing" desc="Competitive, clear pricing. No hidden fees." />
            <BenefitCard icon={<PhoneIcon className="w-8 h-8 text-navy" />} title="24/7 Support" desc="Dedicated customer support team." />
            <BenefitCard icon={<CheckCircleIcon className="w-8 h-8 text-navy" />} title="Free Pickup & Delivery" desc="Hassle-free document logistics." />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold-custom text-navy mb-4 text-center">Our Simple Attestation Process</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
            <ProcessStep icon={<DocumentCheckIcon className="w-10 h-10 text-navy" />} title="Submit Documents" desc="Upload or schedule pickup for your documents." />
            <ArrowRightIcon className="w-8 h-8 text-orange hidden md:block" />
            <ProcessStep icon={<ShieldCheckIcon className="w-10 h-10 text-navy" />} title="Expert Processing" desc="Our team handles all attestations with precision." />
            <ArrowRightIcon className="w-8 h-8 text-orange hidden md:block" />
            <ProcessStep icon={<CheckCircleIcon className="w-10 h-10 text-navy" />} title="Receive Attested Docs" desc="Get your attested documents delivered securely." />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 bg-cream px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold-custom text-navy mb-4 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <TestimonialCard name="Amit Sharma" quote="Super fast and reliable service! Got my degree attested for UAE in record time." rating={5} />
            <TestimonialCard name="Priya Verma" quote="Excellent support and transparent pricing. Highly recommended!" rating={5} />
            <TestimonialCard name="John Mathew" quote="The team handled my commercial documents with great care. Hassle-free experience." rating={4} />
            <TestimonialCard name="Fatima Noor" quote="I was able to track my documents easily. Very professional and trustworthy." rating={5} />
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="py-16 bg-grey text-black px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold-custom mb-4">Ready to Get Your Documents Attested?</h2>
          <p className="mb-8 text-lg">Experience seamless, fast, and reliable attestation services with 99Attestation.com.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-quote" className="bg-yellow text-navy px-6 py-3 rounded-full font-bold-custom hover:bg-orange transition text-lg scale-in">Get Your Free Quote Now</a>
            <a href="/contact" className="border border-cream px-6 py-3 rounded-full font-bold-custom hover:bg-orange hover:text-navy transition text-lg scale-in">Contact Our Experts</a>
          </div>
        </div>
      </section>
    </>
  );
}

// --- Reusable Section Components ---

function ServiceCard({ icon, title, desc, href }: { icon: React.ReactNode; title: string; desc: string; href: string }) {
  return (
    <a href={href} className="group bg-white border border-yellow rounded-xl p-6 flex flex-col items-center text-center shadow hover:shadow-lg transition slide-up">
      <div className="mb-3">{icon}</div>
      <h3 className="font-bold-custom text-lg text-navy mb-1">{title}</h3>
      <p className="text-navy text-sm mb-3">{desc}</p>
      <span className="text-orange font-bold-custom group-hover:underline">Learn More</span>
    </a>
  );
}

function BenefitCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-cream rounded-xl p-6 flex flex-col items-center text-center shadow border border-yellow slide-up">
      <div className="mb-3">{icon}</div>
      <h3 className="font-bold-custom text-lg text-navy mb-1">{title}</h3>
      <p className="text-navy text-sm">{desc}</p>
    </div>
  );
}

function ProcessStep({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs slide-up">
      <div className="mb-3">{icon}</div>
      <h4 className="font-bold-custom text-navy text-lg mb-1">{title}</h4>
      <p className="text-navy text-sm">{desc}</p>
    </div>
  );
}

function CountryFlag({ name }: { name: string }) {
  // Placeholder: Use emoji flags or replace with actual flag images
  const flagEmojis: Record<string, string> = {
    USA: "🇺🇸", UK: "🇬🇧", Australia: "🇦🇺", Italy: "🇮🇹", Germany: "🇩🇪", France: "🇫🇷", Netherlands: "🇳🇱",
    UAE: "🇦🇪", "Saudi Arabia": "🇸🇦", Qatar: "🇶🇦", Kuwait: "🇰🇼", Oman: "🇴🇲", Bahrain: "🇧🇭", Egypt: "🇪🇬",
  };
  return (
    <span className="flex items-center gap-2 bg-cream border border-yellow rounded-full px-3 py-1 text-sm shadow slide-up">
      <span className="text-xl">{flagEmojis[name] || "🏳️"}</span> <span className="text-navy font-bold-custom">{name}</span>
    </span>
  );
}

function TestimonialCard({ name, quote, rating }: { name: string; quote: string; rating: number }) {
  return (
    <div className="bg-yellow rounded-xl p-6 flex flex-col items-center text-center shadow border border-orange slide-up">
      <div className="flex gap-1 mb-2">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-orange" />
        ))}
      </div>
      <p className="text-navy italic mb-3">"{quote}"</p>
      <span className="font-bold-custom text-navy">{name}</span>
    </div>
  );
}
