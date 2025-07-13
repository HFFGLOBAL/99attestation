// pages/index.tsx (or .js depending on your project)

import Image from 'next/image';
import { Metadata } from 'next'
import { 
  CheckCircleIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import ServiceCard from '../components/ServiceCard'
import FAQAccordion from './FAQAccordion' // Assuming this component is defined elsewhere

export const metadata: Metadata = {
  title: 'Attestation Services in Bangalore | Document Apostille & Verification',
  description: 'Professional attestation services in Bangalore. HRD, MEA, Commercial, Educational attestation & apostille services. Fast, reliable document verification. Get expert help today!',
  keywords: 'attestation services bangalore, apostille bangalore, document attestation bangalore, hrd attestation bangalore, mea attestation bangalore, commercial attestation bangalore, educational attestation bangalore, document verification bangalore',
  openGraph: {
    title: 'Attestation Services in Bangalore | Document Apostille & Verification',
    description: 'Professional attestation services in Bangalore. HRD, MEA, Commercial, Educational attestation & apostille services. Fast, reliable document verification.',
    type: 'website',
  },
}

const services = [
  {
    title: 'Educational Attestation',
    description: 'HRD and MEA attestation for educational documents',
    icon: <AcademicCapIcon className="h-8 w-8 text-blue-500" />,
    href: '/educational-attestation',
    colorClass: 'text-blue-500'
  },
  {
    title: 'Personal Attestation',
    description: 'Birth certificates, marriage certificates, and personal documents',
    icon: <UserGroupIcon className="h-8 w-8 text-green-500" />,
    href: '/personal-attestation',
    colorClass: 'text-green-500'
  },
  {
    title: 'Commercial Attestation',
    description: 'Business documents, certificates, and commercial papers',
    icon: <BuildingOfficeIcon className="h-8 w-8 text-purple-500" />,
    href: '/commercial-attestation',
    colorClass: 'text-purple-500'
  },
  {
    title: 'HRD Attestation',
    description: 'Human Resource Development attestation for educational documents',
    icon: <DocumentTextIcon className="h-8 w-8 text-orange-500" />,
    href: '/hrd-attestation',
    colorClass: 'text-orange-500'
  },
  {
    title: 'MEA Attestation',
    description: 'Ministry of External Affairs attestation services',
    icon: <GlobeAltIcon className="h-8 w-8 text-red-500" />,
    href: '/mea-attestation',
    colorClass: 'text-red-500'
  },
  {
    title: 'PCC Services',
    description: 'Police Clearance Certificate services',
    icon: <ShieldCheckIcon className="h-8 w-8 text-indigo-500" />,
    href: '/pcc',
    colorClass: 'text-indigo-500'
  },
  {
    title: 'WES Verification',
    description: 'World Education Services verification',
    icon: <CheckCircleIcon className="h-8 w-8 text-teal-500" />,
    href: '/wes-verification',
    colorClass: 'text-teal-500'
  },
  {
    title: 'Translation Services',
    description: 'Professional document translation services',
    icon: <DocumentTextIcon className="h-8 w-8 text-pink-500" />,
    href: '/translation',
    colorClass: 'text-pink-500'
  }
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer',
    content: 'Excellent service! Got my educational documents attested quickly and efficiently. Highly recommended for anyone in Bangalore.',
    rating: 5
  },
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    content: 'Professional team that handled all my commercial document attestation needs. Fast turnaround time and great communication.',
    rating: 5
  },
  {
    name: 'Anjali Patel',
    role: 'Student',
    content: 'Smooth process for my HRD and MEA attestation. The team was very helpful throughout the entire process.',
    rating: 5
  }
]

const faqs = [
  {
    question: 'What attestation services do you offer in Bangalore?',
    answer: 'We offer comprehensive attestation services in Bangalore including HRD attestation, MEA attestation, commercial attestation, educational attestation, personal document attestation, PCC services, WES verification, and translation services.'
  },
  {
    question: 'How long does document attestation take in Bangalore?',
    answer: 'Processing times vary by service type. HRD attestation typically takes 3-5 working days, MEA attestation 5-7 working days, and commercial attestation 2-4 working days. We provide express services for urgent requirements.'
  },
  {
    question: 'Do you provide doorstep document collection in Bangalore?',
    answer: 'Yes, we offer convenient doorstep document collection and delivery services across Bangalore. Our team will collect your documents from your location and return them after attestation.'
  },
  {
    question: 'What documents are required for attestation in Bangalore?',
    answer: 'Requirements vary by service type. Generally, you need original documents, photocopies, passport photos, and application forms. We provide detailed checklists for each service type.'
  },
  {
    question: 'Are your attestation services recognized internationally?',
    answer: 'Yes, our attestation services follow official government procedures and are recognized internationally. We ensure all documents meet the requirements for foreign embassies and organizations.'
  },
  {
    question: 'Do you offer apostille services in Bangalore?',
    answer: 'Yes, we provide apostille services for countries that are part of the Hague Convention. Our team handles the complete apostille process including document verification and authentication.'
  }
]

export default function BangalorePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-4 pb-12 px-4 sm:px-6 fade-in">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-4">
              Attestation Services in <span className="text-orange-500">Bangalore</span>
            </h1>
            <p className="text-lg text-navy-800 mb-6">
              Get fast, reliable, and government-approved attestation, apostille, and document verification services in Bangalore. Local expertise, transparent pricing, and dedicated support for all your document needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <a href="https://wa.me/919876543210?text=Hi, I need attestation services in Bangalore" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold-custom hover:bg-orange-600 transition text-lg">Talk to Expert</a>
              <a href="tel:+919876543210" className="border border-navy-900 text-navy-900 px-6 py-3 rounded-full font-bold-custom hover:bg-navy-900 hover:text-white transition text-lg flex items-center gap-2"><PhoneIcon className="w-5 h-5" />Call Now</a>
            </div>
            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start mt-8">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold-custom text-navy-900">10+ Years</span>
                <span className="text-xs text-orange-500 font-bold-custom">Bangalore Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold-custom text-navy-900">5,000+</span>
                <span className="text-xs text-orange-500 font-bold-custom">Documents Processed</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold-custom text-navy-900">2,000+</span>
                <span className="text-xs text-orange-500 font-bold-custom">Happy Bangalore Clients</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="inline-flex items-center gap-1 text-orange-500 font-bold-custom"><ShieldCheckIcon className="w-5 h-5" /> Govt. Approved</span>
                <span className="inline-flex items-center gap-1 text-orange-500 font-bold-custom"><CheckCircleIcon className="w-5 h-5" /> ISO Certified</span>
              </div>
            </div>
          </div>
          {/* Hero Image/Visual */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image src="/hero-world-map.png" alt="Bangalore Attestation Services" width={620} height={420} className="rounded-xl object-cover" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* Assuming text-navy is a dark color, it should be visible on gray-50 */}
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Our Attestation Services in Bangalore
            </h2>
            {/* Assuming text-navy is a dark color, it should be visible on gray-50 */}
            <p className="text-lg text-navy-800 max-w-3xl mx-auto">
              Comprehensive document attestation and verification services tailored for Bangalore residents and businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              // ServiceCard's internal text styling should ensure visibility.
              // Assuming 'text-navy-900' passed as colorClass is for text within the card,
              // it implies the text will be dark on a light background.
              <ServiceCard key={index} {...service} colorClass="text-navy-900" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* Assuming text-navy is a dark color, it should be visible on white */}
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Why Choose Our Attestation Services in Bangalore?
            </h2>
            {/* Assuming text-navy is a dark color, it should be visible on white */}
            <p className="text-lg text-navy-800 max-w-3xl mx-auto">
              Trusted by thousands of clients across Bangalore for reliable and efficient document attestation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">Fast Processing</h3>
              <p className="text-gray-600">Quick turnaround times with express options available for urgent requirements</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">100% Secure</h3>
              <p className="text-gray-600">Your documents are handled with utmost care and security throughout the process</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals who understand all attestation requirements</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">Doorstep Service</h3>
              <p className="text-gray-600">Convenient document collection and delivery across Bangalore</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">International Recognition</h3>
              <p className="text-gray-600">All attestations are recognized by foreign embassies and organizations</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support to answer all your queries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* Assuming text-navy-900 is a dark color, it should be visible on gray-50 */}
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              What Our Bangalore Clients Say
            </h2>
            {/* Assuming text-navy-800 is a dark color, it should be visible on gray-50 */}
            <p className="text-lg text-navy-800 max-w-3xl mx-auto">
              Trusted by thousands of satisfied clients across Bangalore
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-400 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-semibold text-navy-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-grey text-black px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold-custom mb-4">Ready to Get Your Documents Attested in Bangalore?</h2>
          <p className="mb-8 text-lg">Experience seamless, fast, and reliable attestation services with 99Attestation.com in Bangalore.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919876543210?text=Hi, I need attestation services in Bangalore" className="bg-yellow text-navy-900 px-6 py-3 rounded-full font-bold-custom hover:bg-orange-500 transition text-lg scale-in">Talk to Expert / Free Consultation</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* Assuming text-navy is a dark color, it should be visible on white */}
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            {/* Assuming text-navy is a dark color, it should be visible on white */}
            <p className="text-lg text-navy-800 max-w-3xl mx-auto">
              Common questions about attestation services in Bangalore
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </div>
  )
}