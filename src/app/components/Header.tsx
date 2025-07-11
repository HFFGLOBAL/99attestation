"use client";
import { useState } from "react";
import { ChevronDownIcon, PhoneIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const branches = [
  { city: "Bangalore", phone: "+91-9686924808" },
  { city: "Chennai", phone: "+91-7993472102" },
  { city: "Hyderabad", phone: "+91-9886581666" },
  { city: "Delhi", phone: "+91-9090556020" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-navy text-cream text-xs py-2 px-4 font-bold-custom">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          {/* Mobile: Only show main branch and email */}
          <div className="flex flex-wrap items-center gap-3 md:gap-3">
            <span className="flex items-center gap-1 md:hidden">
              <PhoneIcon className="w-4 h-4" />
              <a href="tel:+91-9686924808" className="hover:underline text-cream font-bold-custom">+91-9686924808</a>
            </span>
            <span className="flex items-center gap-1 md:hidden">
              <EnvelopeIcon className="w-4 h-4" />
              <a href="mailto:info@99attestation.com" className="hover:underline text-cream font-bold-custom">info@99attestation.com</a>
            </span>
            {/* Desktop: Show all branches and email */}
            <>
              {branches.map((b) => (
                <span key={b.city} className="hidden md:flex items-center gap-1"><PhoneIcon className="w-4 h-4" />{b.city}: <a href={`tel:${b.phone}`} className="hover:underline text-cream font-bold-custom">{b.phone}</a></span>
              ))}
              <span className="hidden md:flex items-center gap-1"><EnvelopeIcon className="w-4 h-4" /> info@99attestation.com</span>
            </>
          </div>
          {/* Social icons and branches dropdown: desktop only */}
          <div className="hidden md:flex items-center gap-3 ml-auto md:ml-0 relative">
            <a href="#" aria-label="Facebook" className="hover:text-orange transition"><FaFacebookF className="w-4 h-4" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-orange transition"><FaYoutube className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-orange transition"><FaInstagram className="w-4 h-4" /></a>
            {/* Branches Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 px-2 py-1 rounded hover:bg-orange/20 transition text-cream font-bold-custom"
                onClick={() => setBranchesOpen((v) => !v)}
                onBlur={() => setTimeout(() => setBranchesOpen(false), 150)}
                aria-haspopup="true"
                aria-expanded={branchesOpen}
              >
                Branches <ChevronDownIcon className="w-4 h-4" />
              </button>
              {branchesOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-navy rounded shadow-lg z-[100] border border-orange/30 animate-fade-in-up">
                  {branches.map((b) => (
                    <a
                      key={b.city}
                      href={`tel:${b.phone}`}
                      className="flex px-4 py-2 hover:bg-orange/10 transition items-center gap-2"
                    >
                      <PhoneIcon className="w-4 h-4 text-orange" />
                      <span className="font-bold-custom">{b.city}:</span>
                      <span>{b.phone}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <header className="w-full bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold-custom text-navy">
            <span className="bg-navy text-cream rounded-full w-10 h-10 flex items-center justify-center font-extrabold text-xl">99</span>
            <span>Attestation</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
            <Link href="/attestation" className="hover:text-orange font-bold-custom hover-scale hover-underline">Attestation</Link>
            <Link href="/apostille" className="hover:text-orange font-bold-custom hover-scale hover-underline">Apostille</Link>
            <Link href="/faq" className="hover:text-orange font-bold-custom hover-scale hover-underline">FAQs</Link>
            <Link href="/about" className="hover:text-orange font-bold-custom hover-scale hover-underline">About</Link>
            <Link href="/contact" className="hover:text-orange font-bold-custom hover-scale hover-underline">Contact Us</Link>
          </nav>
          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <a href="https://wa.me/919686924808" target="_blank" rel="noopener noreferrer" className="bg-orange text-navy px-4 py-2 rounded-full font-bold-custom hover:bg-yellow transition hover-raise hover-scale flex items-center gap-2">
              Expert Consultation
            </a>
            <Link href="/track" className="border border-navy text-navy px-4 py-2 rounded-full font-bold-custom hover:bg-navy hover:text-cream transition hover-raise hover-scale">Track Application</Link>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none bg-yellow hover-scale"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="w-7 h-7 text-navy" />
          </button>
        </div>
        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
            <div className="w-72 bg-cream h-full shadow-lg flex flex-col p-6 relative animate-slideInLeft">
              <button
                className="absolute top-4 right-4 p-2 rounded focus:outline-none"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="w-7 h-7 text-navy" />
              </button>
              <Link href="/" className="flex items-center gap-2 text-2xl font-bold-custom text-navy mb-8 mt-2" onClick={() => setMobileMenuOpen(false)}>
                <span className="bg-navy text-cream rounded-full w-10 h-10 flex items-center justify-center font-extrabold text-xl">99</span>
                <span>Attestation</span>
              </Link>
              <nav className="flex flex-col gap-4 text-navy font-medium">
                <Link href="/attestation" className="hover:text-orange font-bold-custom hover-scale hover-underline" onClick={() => setMobileMenuOpen(false)}>Attestation</Link>
                <Link href="/apostille" className="hover:text-orange font-bold-custom hover-scale hover-underline" onClick={() => setMobileMenuOpen(false)}>Apostille</Link>
                <Link href="/faq" className="hover:text-orange font-bold-custom hover-scale hover-underline" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
                <Link href="/about" className="hover:text-orange font-bold-custom hover-scale hover-underline" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link href="/contact" className="hover:text-orange font-bold-custom hover-scale hover-underline" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                <a href="https://wa.me/919686924808" target="_blank" rel="noopener noreferrer" className="bg-orange text-navy px-4 py-2 rounded-full font-bold-custom hover:bg-yellow transition mt-4 text-center hover-raise hover-scale flex items-center gap-2">
                  Talk to Experts
                </a>
                <Link href="/track" className="border border-navy text-navy px-4 py-2 rounded-full font-bold-custom hover:bg-navy hover:text-cream transition text-center hover-raise hover-scale" onClick={() => setMobileMenuOpen(false)}>Track Document</Link>
              </nav>
              <div className="mt-8 text-xs text-navy font-bold-custom">
                <div className="flex items-center gap-1 mb-1"><PhoneIcon className="w-4 h-4" /> +91-96869-24808</div>
                <div className="flex items-center gap-1"><EnvelopeIcon className="w-4 h-4" /> info@99attestation.com</div>
              </div>
            </div>
            {/* Click outside to close */}
            <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </header>
    </>
  );
}

// Add slideInLeft animation in your global CSS if not present:
// @keyframes slideInLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }
// .animate-slideInLeft { animation: slideInLeft 0.2s ease-out; }