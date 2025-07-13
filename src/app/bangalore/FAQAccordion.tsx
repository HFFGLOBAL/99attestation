'use client'
import { useState } from 'react';

export default function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="bg-white border border-navy-100 rounded-lg shadow-md"
        >
          <button
            className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
            style={{ color: '#0a2540', fontWeight: 600 }}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-panel-${idx}`}
            id={`faq-header-${idx}`}
          >
            {faq.question}
            <span className={`ml-2 text-orange-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {openIndex === idx && (
            <div
              id={`faq-panel-${idx}`}
              role="region"
              aria-labelledby={`faq-header-${idx}`}
              className="px-6 pb-4 text-gray-700 border-t border-gray-100 bg-gray-50"
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 