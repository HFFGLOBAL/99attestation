"use client";
import { useParams } from "next/navigation";

const countryNames: Record<string, string> = {
  uae: "United Arab Emirates",
  oman: "Oman",
  usa: "United States of America",
  uk: "United Kingdom",
  canada: "Canada",
};

export default function CountryPage() {
  const { country } = useParams();
  const countryKey = Array.isArray(country) ? country[0] : country;
  const countryName = countryNames[countryKey?.toLowerCase() || ""] || countryKey;

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-navy mb-4">{countryName} Attestation Services</h1>
      <p className="text-lg text-gray-700 mb-6">
        We provide attestation, apostille, and document services for <span className="font-semibold">{countryName}</span>. Contact us for details on process, required documents, and timelines for {countryName}.
      </p>
      {/* Add more country-specific info, FAQs, or service links here */}
    </section>
  );
} 