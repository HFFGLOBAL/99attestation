import React from "react";
import Link from "next/link";

const countryFlags: Record<string, string> = {
  uae: "🇦🇪",
  usa: "🇺🇸",
  uk: "🇬🇧",
  canada: "🇨🇦",
  india: "🇮🇳",
  // ...add more
};

export default function CountryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { country: string };
}) {
  const countryCode = params.country?.toLowerCase() || "";
  const flag = countryFlags[countryCode] || "🌎";
  const countryName = countryCode.charAt(0).toUpperCase() + countryCode.slice(1);

  return (
    <div className="country-layout">
      <section className="country-hero bg-gradient-to-br from-orange-100 via-yellow-50 to-white py-10 px-4 text-center shadow-md rounded-b-3xl mb-8 relative">
        <div className="flex flex-col items-center gap-2">
          <span className="text-6xl md:text-7xl drop-shadow-lg">{flag}</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy mb-2 drop-shadow-xl">
            Information for <span className="text-orange">{countryName}</span>
          </h1>
          <p className="text-lg md:text-xl text-navy max-w-2xl mx-auto mb-4">
            Everything you need to know about attestation, apostille, and document services for {countryName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
            <a href="https://wa.me/919686924808" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200">WhatsApp Expert</a>
            <Link href="/get-quote" className="bg-orange hover:bg-yellow text-navy px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200">Get Free Quote</Link>
          </div>
        </div>
        <div className="fixed bottom-4 left-0 w-full flex justify-center z-50 md:hidden">
          <a href="https://wa.me/919686924808" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg mx-2">WhatsApp</a>
          <Link href="/get-quote" className="bg-orange hover:bg-yellow text-navy px-6 py-3 rounded-full font-bold text-lg shadow-lg mx-2">Quote</Link>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 pb-16">
        {children}
      </div>
    </div>
  );
} 