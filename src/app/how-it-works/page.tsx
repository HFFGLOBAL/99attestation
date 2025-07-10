import { DocumentCheckIcon, ShieldCheckIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const steps = [
  {
    icon: <DocumentCheckIcon className="w-8 h-8 text-orange" />,
    title: "Submit Documents",
    desc: "Upload or schedule pickup for your documents."
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-orange" />,
    title: "Expert Processing",
    desc: "Our team handles all attestations with precision."
  },
  {
    icon: <CheckCircleIcon className="w-8 h-8 text-orange" />,
    title: "Receive Attested Docs",
    desc: "Get your attested documents delivered securely."
  }
];

export default function HowItWorksPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 fade-in">
      <h1 className="text-3xl font-bold-custom text-navy mb-4 text-center">How It Works</h1>
      <p className="text-navy text-center mb-10">Our simple, transparent process ensures your documents are attested quickly and securely.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-cream rounded-xl p-8 shadow flex flex-col items-center text-center slide-up">
            <div className="mb-3">{step.icon}</div>
            <h2 className="font-bold-custom text-lg text-navy mb-1">{step.title}</h2>
            <p className="text-navy text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 