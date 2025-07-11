import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const services = [
  { name: "Educational Attestation", href: "/services/educational-attestation" },
  { name: "Personal Attestation", href: "/services/personal-attestation" },
  { name: "Commercial Attestation", href: "/services/commercial-attestation" },
  { name: "Apostille", href: "/services/apostille" },
  { name: "HRD Attestation", href: "/services/hrd-attestation" },
  { name: "MEA Attestation", href: "/services/mea-attestation" },
  { name: "PCC", href: "/services/pcc" },
  { name: "WES Verification", href: "/services/wes-verification" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-cream pt-12 pb-4 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-orange text-navy rounded-full w-12 h-12 flex items-center justify-center font-extrabold text-2xl shadow">99</span>
            <span className="text-2xl font-bold-custom text-cream">Attestation</span>
          </div>
          <p className="text-sm text-cream/80 mb-4">Your trusted partner for fast, reliable, and secure document attestation services worldwide.</p>
        </div>
        {/* Services Links */}
        <div>
          <h4 className="font-bold-custom text-lg mb-3 text-orange">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.name}>
                <Link href={service.href} className="hover:text-yellow transition hover-underline">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-bold-custom text-lg mb-3 text-orange">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow transition hover-underline">Home</Link></li>
            <li><Link href="/faq" className="hover:text-yellow transition hover-underline">FAQs</Link></li>
            <li><Link href="/about" className="hover:text-yellow transition hover-underline">About</Link></li>
            <li><Link href="/contact" className="hover:text-yellow transition hover-underline">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-yellow transition hover-underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-yellow transition hover-underline">Terms & Conditions</Link></li>
          </ul>
        </div>
        {/* Contact & Social */}
        <div>
          <h4 className="font-bold-custom text-lg mb-3 text-orange">Contact Us</h4>
          <ul className="text-sm space-y-2 mb-4">
            <li className="flex items-center gap-2"><PhoneIcon className="w-4 h-4" /> <span className="font-medium">9686924808</span></li>
            <li className="flex items-center gap-2"><EnvelopeIcon className="w-4 h-4" /> <span className="font-medium">info@99attestation.com</span></li>
            <li className="flex items-center gap-2"><MapPinIcon className="w-4 h-4" /> <span className="font-medium">#44, 3rd Floor, Church Street, Bangalore 560001</span></li>
          </ul>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="bg-orange/90 text-navy w-9 h-9 flex items-center justify-center rounded-full shadow hover:bg-yellow transition"><FaFacebookF className="w-5 h-5" /></a>
            <a href="#" aria-label="YouTube" className="bg-orange/90 text-navy w-9 h-9 flex items-center justify-center rounded-full shadow hover:bg-yellow transition"><FaYoutube className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram" className="bg-orange/90 text-navy w-9 h-9 flex items-center justify-center rounded-full shadow hover:bg-yellow transition"><FaInstagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/20 mt-10 pt-4 text-center text-xs text-cream/70">
        &copy; {new Date().getFullYear()} 99Attestation.com. All rights reserved.
      </div>
    </footer>
  );
} 