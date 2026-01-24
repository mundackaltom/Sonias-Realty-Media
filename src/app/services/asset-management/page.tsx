"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchModal from "../../../components/SearchModal";
import BackToTopButton from "../../../components/BackToTopButton";

export default function AssetManagement() {
  const [isClient, setIsClient] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Timeout refs for delayed closing
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const projectsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setShowServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setShowServicesDropdown(false);
    }, 500);
  };

  const handleProjectsMouseEnter = () => {
    if (projectsTimeoutRef.current) {
      clearTimeout(projectsTimeoutRef.current);
    }
    setShowProjectsDropdown(true);
  };

  const handleProjectsMouseLeave = () => {
    projectsTimeoutRef.current = setTimeout(() => {
      setShowProjectsDropdown(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#F4F0EC] px-4 py-4">
        <div className="max-w-5xl mx-auto">
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
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                >
                  Services
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${showServicesDropdown ? 'rotate-180' : ''} group-hover:text-[#292F36]`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showServicesDropdown && isClient && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <Link href="/services/property-search" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Property Search
                    </Link>
                    <Link href="/services/financial-planning" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Financial Planning
                    </Link>
                    <Link href="/services/real-estate-investment" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Real Estate Investment
                    </Link>
                    <Link href="/services/asset-management" className="block px-4 py-2 font-jost text-sm text-[#C76904] bg-[#F4F0EC] font-medium">
                      Asset Management
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
                <Link
                  href="/projects"
                  className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition flex items-center gap-1 group"
                >
                  Projects
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setShowProjectsDropdown(!showProjectsDropdown);
                    }}
                    className="flex items-center"
                  >
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${showProjectsDropdown ? 'rotate-180' : ''} group-hover:text-[#C76904]`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </Link>
                {showProjectsDropdown && isClient && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-44 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                    onMouseEnter={handleProjectsMouseEnter}
                    onMouseLeave={handleProjectsMouseLeave}
                  >
                    <Link href="/projects" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      All Projects
                    </Link>
                    <Link href="/projects" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Upcoming Projects
                    </Link>
                    <Link href="/projects" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
                      Completed Projects
                    </Link>
                    <Link href="/projects" className="block px-4 py-2 font-jost text-sm text-[#C76904] font-semibold hover:bg-[#F4F0EC] transition border-t border-gray-100 mt-1">
                      View All Projects
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact" className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition">
                Contact us
              </Link>
            </nav>

            {/* Search Icon */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-8 h-8 border-2 border-[#292F36] rounded-full flex items-center justify-center hover:bg-[#292F36] hover:text-white transition flex-shrink-0"
            >
              <span className="text-sm">🔍</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden w-6 h-6 flex flex-col justify-center items-center flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-[#292F36] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#292F36] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#292F36]"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && isClient && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="font-jost text-lg text-[#292F36]">Home</Link>
              <Link href="/about" className="font-jost text-lg text-[#292F36]">About us</Link>
              <Link href="/services/property-search" className="font-jost text-lg text-[#292F36]">Property Search</Link>
              <Link href="/services/financial-planning" className="font-jost text-lg text-[#292F36]">Financial Planning</Link>
              <Link href="/services/real-estate-investment" className="font-jost text-lg text-[#292F36]">Real Estate Investment</Link>
              <Link href="/services/asset-management" className="font-jost text-lg text-[#C76904] font-medium">Asset Management</Link>
              <Link href="/projects" className="font-jost text-lg text-[#292F36]">Projects</Link>
              <Link href="/contact" className="font-jost text-lg text-[#292F36]">Contact us</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-white">
        <div className="relative overflow-hidden mx-auto shadow-2xl h-full">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.jpg"
              alt="Asset Management Hero"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-dm-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-8">
                Asset Management
              </h1>
              <p className="font-jost text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Comprehensive real estate asset management services to maximize your property value and investment returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold mb-6">
                Professional Real Estate Asset Management
              </h2>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed mb-6">
                Our comprehensive asset management services help property owners maximize their investment returns through strategic planning, efficient operations, and proactive property management.
              </p>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed mb-8">
                Whether you own a single property or a diverse real estate portfolio, we provide end-to-end management solutions that preserve and enhance asset value while generating optimal income streams.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#CDA274] text-white px-8 py-4 rounded-2xl font-jost font-semibold text-lg hover:bg-[#B8956A] transition"
              >
                Get Asset Management Quote
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Asset Management Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Management Services */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold mb-6">
              Our Asset Management Services
            </h2>
            <p className="font-jost text-lg text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Complete property management solutions designed to optimize your real estate investments and maximize long-term value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4 text-center">
                Property Management
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center">
                Full-service property management including tenant relations, maintenance coordination, and operational oversight.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4 text-center">
                Financial Management
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center">
                Comprehensive financial planning, budgeting, cash flow management, and detailed performance reporting.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4 text-center">
                Legal & Compliance
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center">
                Ensure regulatory compliance, lease management, legal documentation, and risk mitigation strategies.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4 text-center">
                Value Enhancement
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center">
                Strategic improvements, renovations, and upgrades to increase property value and market competitiveness.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4 text-center">
                Performance Analytics
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center">
                Advanced analytics and reporting to track performance metrics and identify optimization opportunities.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4 text-center">
                Tenant Relations
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center">
                Professional tenant screening, relationship management, and retention strategies to minimize vacancies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold mb-6">
              Our Asset Management Process
            </h2>
            <p className="font-jost text-lg text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              A systematic approach to managing your real estate assets for optimal performance and maximum returns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Asset Assessment
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Comprehensive evaluation of your property's current condition, market position, and income potential.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Strategy Development
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Create customized management strategies aligned with your investment goals and market conditions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Implementation
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Execute management plans with professional oversight of all operational and financial aspects.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Monitoring & Optimization
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Continuous performance monitoring with regular optimization to maximize asset value and returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Asset Management */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Professional Asset Management"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[#CDA274]/20 rounded-3xl"></div>
            </div>

            <div>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold mb-8">
                Why Choose Our Asset Management Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#CDA274] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-2">
                      Proven Track Record
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Over 15 years of successful property management with consistent improvement in asset performance and ROI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#CDA274] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-2">
                      Technology-Driven Solutions
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Advanced property management software and analytics tools for efficient operations and transparent reporting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#CDA274] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-2">
                      Local Market Expertise
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Deep understanding of Bengaluru's real estate market dynamics and regulatory environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#CDA274] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-2">
                      24/7 Support & Monitoring
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Round-the-clock property monitoring and emergency response to protect your investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types We Manage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold mb-6">
              Property Types We Manage
            </h2>
            <p className="font-jost text-lg text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Comprehensive asset management services across all property types and investment scales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🏢</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Commercial Properties
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Office buildings, retail spaces, and mixed-use developments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🏠</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Residential Properties
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Apartments, villas, and residential complexes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🏭</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Industrial Assets
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Warehouses, manufacturing facilities, and logistics centers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🏆</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Premium Assets
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Luxury properties and high-value investment assets.
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