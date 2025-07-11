"use client";
import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const services = [
  "Educational Attestation",
  "Personal Attestation",
  "Commercial Attestation",
  "Apostille",
  "Embassy Attestation",
  "PCC/WES Verification",
  "Translation",
  "Other",
];

const countryList = [
  "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Egypt", "USA", "UK", "Australia", "Italy", "Germany", "France", "Netherlands"
];

const documentTypes = [
  "Educational", "Personal", "Commercial", "Other"
];

const branches = [
  {
    city: "Bangalore (Head Office)",
    phone: "9686924808",
    address: "#44, 3rd Floor, Church Street, Bangalore 560001",
    map: "https://maps.google.com/?q=12.976793,77.606055",
  },
  {
    city: "Chennai Branch",
    phone: "9840123456",
    address: "#12, 2nd Floor, Anna Salai, Chennai 600002",
    map: "https://maps.google.com/?q=13.060422,80.249583",
  },
  {
    city: "Hyderabad Branch",
    phone: "9701234567",
    address: "#8-2-293, Banjara Hills, Hyderabad 500034",
    map: "https://maps.google.com/?q=17.4140,78.4346",
  },
  {
    city: "Delhi Branch",
    phone: "9876543210",
    address: "#201, 2nd Floor, Connaught Place, New Delhi 110001",
    map: "https://maps.google.com/?q=28.6315,77.2167",
  },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: "",
    country: "",
    documentType: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  // Service-specific logic
  const isDocTypeNeeded = ["Apostille", "Educational Attestation", "Personal Attestation", "Commercial Attestation", "Embassy Attestation"].includes(form.service);

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto pb-10 px-4">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Contact Form */}
        <div className="flex-1 bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-yellow/30 flex flex-col gap-7 animate-fade-in-up mb-8 md:mb-0">
          <h2 className="text-3xl font-bold-custom text-navy mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <div className="flex flex-col gap-6">
              {/* Service Selection */}
              <div className="relative">
                <select id="service" name="service" required value={form.service} onChange={handleChange} className="peer px-5 py-3 rounded-xl border border-yellow/40 focus:outline-none focus:ring-2 focus:ring-orange/70 bg-cream/80 text-navy transition w-full">
                  <option value="" disabled>Select Service *</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <label htmlFor="service" className="absolute left-5 -top-5 text-xs text-orange bg-white/80 px-1">Service Interested In *</label>
              </div>
              {/* Country Selection (always visible) */}
              <div className="relative">
                <select id="country" name="country" required value={form.country} onChange={handleChange} className="peer px-5 py-3 rounded-xl border border-yellow/40 focus:outline-none focus:ring-2 focus:ring-orange/70 bg-cream/80 text-navy transition w-full">
                  <option value="" disabled>Select Country *</option>
                  {countryList.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <label htmlFor="country" className="absolute left-5 -top-5 text-xs text-orange bg-white/80 px-1">Country *</label>
              </div>
              {/* Document Type (conditional) */}
              {isDocTypeNeeded && (
                <div className="relative">
                  <select id="documentType" name="documentType" required value={form.documentType} onChange={handleChange} className="peer px-5 py-3 rounded-xl border border-yellow/40 focus:outline-none focus:ring-2 focus:ring-orange/70 bg-cream/80 text-navy transition w-full">
                    <option value="" disabled>Select Document Type *</option>
                    {documentTypes.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <label htmlFor="documentType" className="absolute left-5 -top-5 text-xs text-orange bg-white/80 px-1">Document Type *</label>
                </div>
              )}
              {/* Name */}
              <div className="relative">
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="peer px-5 py-3 rounded-xl border border-yellow/40 focus:outline-none focus:ring-2 focus:ring-orange/70 bg-cream/80 text-navy placeholder-transparent transition w-full" placeholder="Your Name" />
                <label htmlFor="name" className="absolute left-5 top-3 text-navy/60 bg-white/80 px-1 transition-all duration-200 pointer-events-none peer-focus:-top-5 peer-focus:text-xs peer-focus:text-orange peer-valid:-top-5 peer-valid:text-xs">Name *</label>
              </div>
              {/* Email */}
              <div className="relative">
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="peer px-5 py-3 rounded-xl border border-yellow/40 focus:outline-none focus:ring-2 focus:ring-orange/70 bg-cream/80 text-navy placeholder-transparent transition w-full" placeholder="you@email.com" />
                <label htmlFor="email" className="absolute left-5 top-3 text-navy/60 bg-white/80 px-1 transition-all duration-200 pointer-events-none peer-focus:-top-5 peer-focus:text-xs peer-focus:text-orange peer-valid:-top-5 peer-valid:text-xs">Email *</label>
              </div>
              {/* Phone */}
              <div className="relative">
                <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className="peer px-5 py-3 rounded-xl border border-yellow/40 focus:outline-none focus:ring-2 focus:ring-orange/70 bg-cream/80 text-navy placeholder-transparent transition w-full" placeholder="Your Phone Number" />
                <label htmlFor="phone" className="absolute left-5 top-3 text-navy/60 bg-white/80 px-1 transition-all duration-200 pointer-events-none peer-focus:-top-5 peer-focus:text-xs peer-focus:text-orange peer-valid:-top-5 peer-valid:text-xs">Phone *</label>
              </div>
              {/* Message */}
              <div className="relative">
                <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} className="peer px-5 py-3 rounded-xl border border-yellow/40 focus:outline-none focus:ring-2 focus:ring-orange/70 bg-cream/80 text-navy placeholder-transparent transition w-full" placeholder="How can we help you?" />
                <label htmlFor="message" className="absolute left-5 top-3 text-navy/60 bg-white/80 px-1 transition-all duration-200 pointer-events-none peer-focus:-top-5 peer-focus:text-xs peer-focus:text-orange peer-valid:-top-5 peer-valid:text-xs">Message *</label>
              </div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-orange to-yellow text-navy px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 hover-raise hover-scale">
              Send Message
            </button>
            {submitted && (
              <div className="mt-2 text-green-700 font-semibold text-center animate-fade-in-up">Thank you! Your message has been sent.</div>
            )}
            <a href="https://wa.me/919686924808" target="_blank" rel="noopener" className="mt-4 flex items-center justify-center gap-2 text-green-600 font-bold hover:underline"><FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp</a>
          </form>
        </div>
        {/* Branch Cards & Map */}
        <div className="flex-1 flex flex-col gap-8 animate-fade-in-up">
          <div className="bg-white/95 rounded-3xl shadow-lg border border-yellow/30 p-8">
            <h2 className="text-3xl font-bold-custom text-navy mb-6">Our Branches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {branches.map((branch, idx) => (
                <div key={idx} className="bg-cream/80 rounded-2xl shadow border border-yellow/20 p-6 flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-1">
                    <FaMapMarkerAlt className="text-orange w-5 h-5" />
                    <span className="font-bold text-navy text-lg">{branch.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-navy"><FaPhoneAlt className="text-orange w-4 h-4" /> <a href={`tel:${branch.phone}`} className="hover:underline font-semibold">{branch.phone}</a></div>
                  <div className="flex items-center gap-2 text-navy"><FaMapMarkerAlt className="text-orange w-4 h-4" /> <span>{branch.address}</span></div>
                  <div className="flex gap-2 mt-2">
                    <a href={branch.map} target="_blank" rel="noopener" className="text-blue-700 hover:underline text-sm font-bold">Get Directions</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Embedded Google Map */}
          <div className="bg-white/95 rounded-3xl shadow-lg border border-yellow/30 p-4">
            <h2 className="text-2xl font-bold-custom text-navy mb-4">Find Us on Map</h2>
            <div className="w-full h-56 md:h-96 rounded-2xl overflow-hidden border border-yellow/30 shadow-inner">
              <iframe
                title="Bangalore Branch Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9392146832383!2d77.5974757782882!3d12.975739654696987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17438eaf2ed7%3A0xe7d051c012aadbe6!2s99Country.com%20%2C%20China%20Visa.%20Dubai%20visa%20agent%20and%20USA%20visa%20agent%20in%20Bangalore!5e0!3m2!1sen!2sin!4v1752070863457!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Keyword List of Services */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold-custom text-navy mb-6 text-center">Our Services</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {services.map((service, idx) => (
            <Link key={idx} href={`/services/${service.toLowerCase().replace(/\s/g, '-')}`} className="bg-orange/90 text-navy font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow/90 transition text-sm md:text-base hover-raise hover-scale hover:underline">
              {service}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 