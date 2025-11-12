"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import SearchModal from "../../components/SearchModal";
import InteractiveMap from "../../components/InteractiveMap";

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // Timeout refs for delayed closing
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const projectsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300);
  };

  const handleProjectsMouseEnter = () => {
    if (projectsTimeoutRef.current) {
      clearTimeout(projectsTimeoutRef.current);
    }
    setProjectsDropdownOpen(true);
  };

  const handleProjectsMouseLeave = () => {
    projectsTimeoutRef.current = setTimeout(() => {
      setProjectsDropdownOpen(false);
    }, 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert(`Thank you ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#F4F0EC] px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <div className="w-20 h-20 bg-[#CDA274] rounded-full flex items-center justify-center overflow-visible">
                <Image
                  src="/images/logo.png"
                  alt="Sonia's Realty Media Logo"
                  width={180}
                  height={180}
                  className="object-cover rounded-full"
                />
              </div>
              <h1 className="font-dm-serif text-2xl lg:text-3xl text-[#292F36] font-bold whitespace-nowrap">
                SONIA'S REALTY MEDIA
              </h1>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="font-jost text-lg text-[#292F36] hover:text-[#C76904] transition">
                Home
              </Link>
              <Link href="/about" className="font-jost text-lg text-[#292F36] hover:text-[#C76904] transition">
                About us
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button 
                  className="font-jost text-lg text-[#292F36] hover:text-[#C76904] transition flex items-center gap-2 group"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''} group-hover:text-[#C76904]`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesDropdownOpen && isClient && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link href="/services/property-search" className="block px-4 py-2 font-jost text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Property Search
                    </Link>
                  </div>
                )}
              </div>

              {/* Projects Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleProjectsMouseEnter}
                onMouseLeave={handleProjectsMouseLeave}
              >
                <button 
                  className="font-jost text-lg text-[#292F36] hover:text-[#C76904] transition flex items-center gap-2 group"
                  onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                >
                  Projects
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${projectsDropdownOpen ? 'rotate-180' : ''} group-hover:text-[#C76904]`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {projectsDropdownOpen && isClient && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link href="/projects" className="block px-4 py-2 font-jost text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      All Projects
                    </Link>
                    <Link href="/projects" className="block px-4 py-2 font-jost text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Upcoming Projects
                    </Link>
                    <Link href="/projects" className="block px-4 py-2 font-jost text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Completed Projects
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact" className="font-jost text-lg text-[#C76904] font-medium hover:text-[#292F36] transition">
                Contact us
              </Link>
            </nav>

            {/* Search Icon */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 border-2 border-[#292F36] rounded-full flex items-center justify-center hover:bg-[#292F36] hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-[#292F36] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#292F36] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#292F36]"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && isClient && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="font-jost text-lg text-[#292F36]">Home</Link>
              <Link href="/about" className="font-jost text-lg text-[#292F36]">About us</Link>
              <Link href="/services" className="font-jost text-lg text-[#292F36]">Services</Link>
              <Link href="/projects" className="font-jost text-lg text-[#292F36]">Projects</Link>
              <Link href="/contact" className="font-jost text-lg text-[#C76904] font-medium">Contact us</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-dm-serif text-4xl md:text-6xl lg:text-7xl text-[#292F36] font-bold leading-tight mb-8">
              Contact Us
            </h1>
            <p className="font-jost text-xl md:text-2xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Ready to start your real estate journey? Get in touch with our expert team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="font-dm-serif text-3xl text-[#292F36] font-bold mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-jost font-medium text-lg text-[#292F36] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-[#E7E7E7] rounded-2xl px-6 py-4 font-jost text-lg focus:border-[#CDA274] focus:outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-jost font-medium text-lg text-[#292F36] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-[#E7E7E7] rounded-2xl px-6 py-4 font-jost text-lg focus:border-[#CDA274] focus:outline-none transition"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block font-jost font-medium text-lg text-[#292F36] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-[#E7E7E7] rounded-2xl px-6 py-4 font-jost text-lg focus:border-[#CDA274] focus:outline-none transition"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-jost font-medium text-lg text-[#292F36] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full border-2 border-[#E7E7E7] rounded-2xl px-6 py-4 font-jost text-lg focus:border-[#CDA274] focus:outline-none transition resize-none"
                    placeholder="Tell us about your requirements"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-dm-serif text-3xl text-[#292F36] font-bold mb-8">
                  Get in Touch
                </h2>
                <p className="font-jost text-xl text-[#4D5053] leading-relaxed mb-8">
                  We're here to help you with all your real estate needs. Contact us through any of the following methods.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#CDA274] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-2">Office Address</h3>
                    <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                      123 Real Estate Avenue,<br />
                      Business District, City 560001
                    </p>
                    <Link 
                      href="https://maps.app.goo.gl/DBv4EdFhmXWRxT1R7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 font-jost text-lg text-[#CDA274] hover:text-[#B8956A] transition duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      View on Google Maps
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#CDA274] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-2">Phone Number</h3>
                    <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                      +91 98765 43210<br />
                      +91 98765 43211
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#CDA274] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-2">Email Address</h3>
                    <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                      info@soniasrealtymedia.com<br />
                      sales@soniasrealtymedia.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#CDA274] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-2">Office Hours</h3>
                    <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dm-serif text-3xl md:text-5xl text-[#292F36] font-bold mb-6">
              Find Our Office
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Visit us at our conveniently located office for personalized consultation and assistance.
            </p>
            <div className="mt-6">
              <Link 
                href="https://maps.app.goo.gl/DBv4EdFhmXWRxT1R7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg transition duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </Link>
            </div>
          </div>
          
          {/* Interactive Map Component */}
          <InteractiveMap 
            address="123 Real Estate Avenue, Business District, City 560001"
            businessName="Sonia's Realty Media"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#292F36]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-dm-serif text-4xl md:text-5xl text-white font-bold mb-8">
            Let's Start Your Real Estate Journey
          </h2>
          <p className="font-jost text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
            Whether you're buying, selling, or investing, our expert team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/services/property-search" className="bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg transition duration-300 inline-block text-center">
              Search Properties
            </Link>
            <Link href="/projects" className="border-2 border-white text-white hover:bg-white hover:text-[#292F36] font-inter font-semibold text-lg px-8 py-4 rounded-2xl transition duration-300 inline-block text-center">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
