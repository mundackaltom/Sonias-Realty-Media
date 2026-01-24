"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import SearchModal from "../../components/SearchModal";
import BackToTopButton from "../../components/BackToTopButton";

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
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
    }, 600); // 600ms delay for better user experience
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
    }, 600); // 600ms delay for better user experience
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#F4F0EC] px-4 py-4">
        <div className="max-w-5xl mx-auto">
          {/* Single row with logo, brand name, navigation, and search */}
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <Link href="/" className="flex items-center gap-2 md:gap-4 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#CDA274] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Sonia's Realty Media Logo"
                  width={360}
                  height={360}
                  className="object-contain rounded-full scale-125"
                />
              </div>
              <h1 className="font-dm-serif text-sm sm:text-lg md:text-lg lg:text-xl text-[#292F36] font-bold whitespace-nowrap">
                SONIA'S REALTY MEDIA
              </h1>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition">
                Home
              </Link>
              <Link href="/about" className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition">
                About us
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button 
                  className="font-jost text-base text-[#C76904] font-medium hover:text-[#292F36] transition flex items-center gap-1 group"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''} group-hover:text-[#292F36]`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesDropdownOpen && isClient && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link href="/services/property-search" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Property Search
                    </Link>
                    <Link href="/services/financial-planning" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Financial Planning
                    </Link>
                    <Link href="/services/real-estate-investment" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Real Estate Investment
                    </Link>
                    <Link href="/services/asset-management" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Asset Management
                    </Link>
                    <Link href="/services/home-loan" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Home Loan Services
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
                  className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition flex items-center gap-1 group"
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
                  <div className="absolute top-full left-0 mt-1 w-44 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link href="/projects" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      All Projects
                    </Link>
                    <Link href="/projects" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Upcoming Projects
                    </Link>
                    <Link href="/projects" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Completed Projects
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact" className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition">
                Contact
              </Link>
            </nav>

            {/* Search Icon */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-8 h-8 border-2 border-[#292F36] rounded-full flex items-center justify-center hover:bg-[#292F36] hover:text-white transition flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden w-6 h-6 flex flex-col justify-center items-center flex-shrink-0"
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
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="font-jost text-lg text-[#292F36]">Home</Link>
              <Link href="/about" className="font-jost text-lg text-[#292F36]">About us</Link>
              <Link href="/services" className="font-jost text-lg text-[#C76904] font-medium">Services</Link>
              <Link href="/projects" className="font-jost text-lg text-[#292F36]">Projects</Link>
              <Link href="/contact" className="font-jost text-lg text-[#292F36]">Contact</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-white">
        <div className="relative overflow-hidden mx-auto shadow-2xl h-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.jpg"
              alt="Our Services Hero"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-dm-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-8">
                Our Services
              </h1>
              <p className="font-jost text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Comprehensive real estate solutions designed to meet your unique needs and exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-8">
                Comprehensive Real Estate Services
              </h2>
              <p className="font-jost text-xl text-[#4D5053] leading-relaxed mb-6">
                At Sonia's Realty Media, we offer a complete suite of real estate services designed to support you at every stage of your property journey. From initial consultation to final closing, our expert team is here to guide you.
              </p>
              <p className="font-jost text-xl text-[#4D5053] leading-relaxed mb-8">
                Whether you're a first-time buyer, seasoned investor, or looking to sell your property, we have the expertise, tools, and market knowledge to help you achieve your real estate goals with confidence.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="font-dm-serif text-3xl text-[#CDA274] font-bold mb-2">1000+</div>
                  <div className="font-jost text-sm text-[#4D5053]">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="font-dm-serif text-3xl text-[#CDA274] font-bold mb-2">15+</div>
                  <div className="font-jost text-sm text-[#4D5053]">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-dm-serif text-3xl text-[#CDA274] font-bold mb-2">97%</div>
                  <div className="font-jost text-sm text-[#4D5053]">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Our Services"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-6">
              What We Offer
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Our comprehensive range of services covers every aspect of real estate to ensure your success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Property Search & Buying */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-6 text-center">Property Search & Buying</h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center mb-6">
                Find your perfect property with our advanced search tools, market expertise, and personalized guidance throughout the entire buying process.
              </p>
              <div className="text-center">
                <Link 
                  href="/services/property-search" 
                  className="inline-block bg-[#CDA274] text-white px-6 py-3 rounded-xl font-jost font-semibold hover:bg-[#B8956A] transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Financial Planning */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-6 text-center">Financial Planning</h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center mb-6">
                Expert financial guidance for real estate investments including loan assistance, tax planning, and portfolio optimization strategies.
              </p>
              <div className="text-center">
                <Link 
                  href="/services/financial-planning" 
                  className="inline-block bg-[#CDA274] text-white px-6 py-3 rounded-xl font-jost font-semibold hover:bg-[#B8956A] transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Property Selling */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-6 text-center">Property Selling</h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center mb-6">
                Maximize your property's value with our comprehensive selling services including market analysis, professional staging, and marketing expertise.
              </p>
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="inline-block bg-[#CDA274] text-white px-6 py-3 rounded-xl font-jost font-semibold hover:bg-[#B8956A] transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Specialists Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-6">
              Our Service Specialists
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Meet our dedicated team of professionals who are experts in their respective service areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Specialist 1 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition duration-300">
                <Image
                  src="/images/hero.jpg"
                  alt="Property Search Specialist"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-2">Michael Chen</h3>
              <p className="font-jost text-lg text-[#CDA274] font-semibold mb-4">Property Search Specialist</p>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Expert in helping clients find their perfect property with personalized search strategies and market insights.
              </p>
            </div>

            {/* Specialist 2 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition duration-300">
                <Image
                  src="/images/hero.jpg"
                  alt="Financial Planning Specialist"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-2">Sarah Johnson</h3>
              <p className="font-jost text-lg text-[#CDA274] font-semibold mb-4">Financial Planning Specialist</p>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Expert in real estate financial planning, loan assistance, and investment strategy optimization for maximum returns.
              </p>
            </div>

            {/* Specialist 3 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition duration-300">
                <Image
                  src="/images/hero.jpg"
                  alt="Market Analyst"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-2">David Rodriguez</h3>
              <p className="font-jost text-lg text-[#CDA274] font-semibold mb-4">Market Analyst</p>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Provides comprehensive market analysis and trend insights to guide your real estate decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-6">
              Why Choose Our Services
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              We combine expertise, technology, and personalized service to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">Personalized Approach</h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Every client receives tailored solutions designed specifically for their unique needs and goals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">Fast Response</h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Quick turnaround times and immediate response to your queries and property opportunities.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🔍</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">Market Expertise</h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Deep knowledge of local markets and current trends to guide your real estate decisions.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">Full Support</h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                End-to-end assistance from initial consultation through closing and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <BackToTopButton />
    </div>
  );
}
