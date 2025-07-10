import Link from "next/link";

const countries = [
  { code: "uae", name: "United Arab Emirates" },
  { code: "oman", name: "Oman" },
  { code: "usa", name: "United States of America" },
  { code: "uk", name: "United Kingdom" },
  { code: "canada", name: "Canada" },
];

export default function CountriesPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-navy mb-8">Countries We Serve</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {countries.map((c) => (
          <Link
            key={c.code}
            href={`/countries/${c.code}`}
            className="block bg-cream rounded-xl p-6 shadow hover:bg-yellow/80 transition text-navy font-semibold text-lg text-center"
          >
            {c.name}
          </Link>
        ))}
      </div>
    </section>
  );
} 