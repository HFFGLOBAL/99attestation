"use client";
import React, { useState } from "react";

const faqData = [
  { category: "General", question: "What is document attestation?", answer: "Document attestation is the process of verifying the authenticity of documents for use abroad, typically for education, employment, or business purposes." },
  { category: "General", question: "How do I get started?", answer: "Simply request a quote or contact us. Our team will guide you through the process step by step." },
  { category: "Process", question: "How long does the attestation process take?", answer: "Processing times vary by document type and country, but we strive to complete most attestations within 7-15 business days." },
  { category: "Process", question: "Which documents can you attest?", answer: "We can attest educational, personal, and commercial documents including degrees, birth certificates, marriage certificates, and more." },
  { category: "Security", question: "Is my data safe with 99Attestation.com?", answer: "Absolutely. We use secure processes and never share your documents or data with third parties without your consent." },
  { category: "Pricing", question: "How much does attestation cost?", answer: "Pricing depends on the document type and destination country. Request a quote for a detailed estimate." },
  { category: "Support", question: "How can I track my document status?", answer: "You can track your document status online using our Track Document feature or by contacting our support team." },
  { category: "Support", question: "What if I have an urgent request?", answer: "Contact us directly for urgent requests. We offer expedited services for many document types." },
  { category: "Services", question: "Do you provide apostille services?", answer: "Yes, we provide apostille services for documents intended for Hague Convention countries." },
  { category: "Services", question: "Can you help with embassy attestation?", answer: "Yes, we handle embassy attestation for non-Hague Convention countries as well." },
];

const categories = [
  "All",
  ...Array.from(new Set(faqData.map((faq) => faq.category))),
];

export default function FAQClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const filteredFaqs =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((faq) => faq.category === selectedCategory);

  return (
    <section className="max-w-4xl mx-auto py-16 px-4 fade-in">
      <h1 className="text-3xl font-bold-custom text-navy mb-4 text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-navy text-center mb-10">
        Find answers to common questions about our attestation, apostille, and
        verification services.
      </p>
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-bold-custom text-sm md:text-base transition hover-raise hover-scale ${
              selectedCategory === cat
                ? "bg-orange text-navy"
                : "bg-cream text-navy hover:bg-yellow"
            }`}
            onClick={() => {
              setSelectedCategory(cat);
              setOpenIndex(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-cream rounded-lg p-4 shadow hover-raise transition"
          >
            <button
              className="w-full text-left font-bold-custom text-navy flex justify-between items-center focus:outline-none"
              onClick={() =>
                setOpenIndex(openIndex === idx ? null : idx)
              }
            >
              {faq.question}
              <span className="ml-2 text-orange">
                {openIndex === idx ? "-" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="mt-2 text-navy slide-up">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        {filteredFaqs.length === 0 && (
          <div className="text-center text-navy/60 py-8">
            No FAQs found for this category.
          </div>
        )}
      </div>
    </section>
  );
} 