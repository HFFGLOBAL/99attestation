import Link from 'next/link';
import ServiceCard from '../components/ServiceCard';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';

export default function ServicePage() {
  return (
    <main className="service-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Our Services</h1>
        <p>Fast, reliable, and secure document attestation and apostille services for every need.</p>
      </section>
      {/* Service Categories */}
      <section className="services-section">
        <SectionHeader title="What We Offer" />
        <div className="services-grid">
          <ServiceCard
            title="Apostille"
            description="Get your documents apostilled quickly and hassle-free."
            href="/services/apostille"
          />
          <ServiceCard
            title="Attestation"
            description="Comprehensive attestation services for all document types."
            href="/services/attestation"
          />
          <ServiceCard
            title="Legalization"
            description="Legalize your documents for international use."
            href="/services/legalization"
          />
        </div>
      </section>
      {/* How It Works */}
      <section className="how-it-works-section">
        <SectionHeader title="How It Works" />
        <ol className="how-it-works-list">
          <li>Submit your request <Link href="/get-quote">here</Link>.</li>
          <li>Send us your documents.</li>
          <li>We process and update you at every step.</li>
          <li>Receive your attested/apostilled documents.</li>
        </ol>
        <Link href="/how-it-works" className="learn-more-link">Learn more</Link>
      </section>
      {/* Why Choose Us */}
      <section className="why-choose-section">
        <SectionHeader title="Why Choose Us" />
        <ul className="usp-list">
          <li>Trusted by thousands worldwide</li>
          <li>Transparent pricing</li>
          <li>Expert support</li>
          <li>Fast turnaround</li>
        </ul>
      </section>
      {/* Call to Action */}
      <section className="cta-section">
        <CTAButton href="/get-quote">Get a Free Quote</CTAButton>
        <CTAButton href="/contact">Contact Us</CTAButton>
      </section>
      {/* FAQ Preview */}
      <section className="faq-preview-section">
        <SectionHeader title="Frequently Asked Questions" />
        <p>Have questions? Visit our <Link href="/faq">FAQ</Link> page or <Link href="/contact">contact us</Link>.</p>
      </section>
    </main>
  );
} 