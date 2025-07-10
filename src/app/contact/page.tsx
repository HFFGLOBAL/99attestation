import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | 99Attestation",
  description: "Fast, reliable, and secure attestation services for all your documents. Serving UAE, Oman, USA, UK, Canada, and more.",
  keywords: ["attestation", "document attestation", "UAE attestation", "Oman attestation", "apostille", "99attestation"],
};

export default function ContactPage() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-start py-0 px-0 bg-gradient-to-br from-yellow/40 via-cream/60 to-orange/30 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange/20 rounded-full blur-3xl z-0 animate-float" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-navy/10 rounded-full blur-2xl z-0 animate-float-slow" />
      {/* Headline & WhatsApp CTA */}
      <div className="w-full bg-navy text-cream py-12 px-4 flex flex-col items-center justify-center text-center relative z-10 mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight drop-shadow-xl">Contact Us</h1>
        <p className="text-xl md:text-xl mb-6 max-w-2xl mx-auto font-semibold">We're here to help! Reach out and our team will respond promptly. For instant support, chat with us on WhatsApp.</p>
        <a href="https://wa.me/919686924808" target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg transition-all duration-200 mb-2"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.3 4.75a1 1 0 0 0 1.22 1.22l4.75-1.3A12 12 0 1 0 20.52 3.48zm-8.52 17a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm4.29-6.71c-.23-.12-1.36-.67-1.57-.75s-.36-.12-.51.12-.59.75-.72.9-.27.17-.5.06a7.36 7.36 0 0 1-2.16-1.34 8.13 8.13 0 0 1-1.5-1.87c-.16-.27 0-.41.12-.53s.27-.32.4-.48a.45.45 0 0 0 .06-.5c-.06-.12-.51-1.23-.7-1.68s-.37-.37-.51-.38h-.43a.87.87 0 0 0-.63.29 2.62 2.62 0 0 0-.82 2c0 1.18.85 2.33 1 2.5a10.13 10.13 0 0 0 3.13 2.62 7.44 7.44 0 0 0 1.36.5 3.25 3.25 0 0 0 1.5.09c.46-.07 1.36-.56 1.55-1.1s.19-1 .13-1.1-.21-.15-.44-.27z"/></svg> WhatsApp Us</a>
      </div>
      {/* Main Content */}
      <ContactForm />
    </section>
  );
} 