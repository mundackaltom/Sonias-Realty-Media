"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchModal from "../../../components/SearchModal";
import BackToTopButton from "../../../components/BackToTopButton";

export default function FinancialPlanning() {
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
    }, 600); // 600ms delay for better user experience
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
    }, 600); // 600ms delay for better user experience
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#F4F0EC] px-4 py-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-4 hover:opacity-80 transition-opacity"
            >
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
              <Link
                href="/"
                className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition"
              >
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
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showServicesDropdown ? "rotate-180" : ""
                    } group-hover:text-[#292F36]`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {showServicesDropdown && isClient && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link
                      href="/services/property-search"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      Property Search
                    </Link>
                    <Link
                      href="/services/financial-planning"
                      className="block px-4 py-2 font-jost text-sm text-[#C76904] bg-[#F4F0EC] font-medium"
                    >
                      Financial Planning
                    </Link>
                    <Link
                      href="/services/real-estate-investment"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      Real Estate Investment
                    </Link>
                    <Link
                      href="/services/asset-management"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      Asset Management
                    </Link>
                    <Link
                      href="/services/home-loan"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
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
                  onClick={() => setShowProjectsDropdown(!showProjectsDropdown)}
                >
                  Projects
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showProjectsDropdown ? "rotate-180" : ""
                    } group-hover:text-[#C76904]`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {showProjectsDropdown && isClient && (
                  <div className="absolute top-full left-0 mt-1 w-44 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link
                      href="/projects"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      All Projects
                    </Link>
                    <Link
                      href="/projects"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      Upcoming Projects
                    </Link>
                    <Link
                      href="/projects"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      Completed Projects
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition"
              >
                Contact us
              </Link>
            </nav>

            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-8 h-8 border-2 border-[#292F36] rounded-full flex items-center justify-center hover:bg-[#292F36] hover:text-white transition flex-shrink-0"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
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
              <Link href="/" className="font-jost text-lg text-[#292F36]">
                Home
              </Link>
              <Link href="/about" className="font-jost text-lg text-[#292F36]">
                About us
              </Link>
              <Link href="/services" className="font-jost text-lg text-[#C76904] font-medium">
                Services
              </Link>
              <Link href="/projects" className="font-jost text-lg text-[#292F36]">
                Projects
              </Link>
              <Link href="/contact" className="font-jost text-lg text-[#292F36]">
                Contact us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Breadcrumb */}
      <div className="bg-white px-4 py-3 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm font-jost">
            <Link href="/" className="text-[#4D5053] hover:text-[#CDA274] transition">Home</Link>
            <span className="text-[#4D5053]">/</span>
            <Link href="/services" className="text-[#4D5053] hover:text-[#CDA274] transition">Services</Link>
            <span className="text-[#4D5053]">/</span>
            <span className="text-[#CDA274] font-medium">Financial Planning</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-dm-serif text-4xl md:text-6xl text-[#292F36] font-bold mb-6">
              Financial Planning
            </h1>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Expert financial guidance for your real estate investments. Plan, invest, and grow your wealth with professional financial advisory services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-3xl md:text-5xl text-[#292F36] font-bold mb-6">
              Our Financial Planning Services
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial solutions tailored for real estate investments and wealth building.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
                Investment Analysis
              </h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Comprehensive analysis of real estate investment opportunities with ROI projections and risk assessments.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
                Loan Assistance
              </h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Expert guidance on home loans, documentation, and connecting with the best lenders for competitive rates.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
                Portfolio Planning
              </h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Strategic real estate portfolio development to maximize returns and diversify your investment holdings.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
                Tax Planning
              </h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Optimize your real estate investments with strategic tax planning and legal compliance guidance.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
                Retirement Planning
              </h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Plan your retirement with real estate investments that provide steady income and long-term growth.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
                Insurance Advisory
              </h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Comprehensive insurance solutions to protect your real estate investments and financial future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-3xl md:text-5xl text-[#292F36] font-bold mb-6">
              Our Financial Planning Process
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              A systematic approach to building your financial future through real estate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Financial Assessment
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Comprehensive evaluation of your current financial situation and investment goals.
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
                Customized investment strategy tailored to your risk profile and financial objectives.
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
                Execute your financial plan with expert guidance and professional support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Ongoing Review
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Regular portfolio reviews and adjustments to optimize your investment performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold mb-8">
                Why Choose Our Financial Planning Services?
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
                      Certified Financial Advisors
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Our team of certified financial planners brings years of experience in real estate investment advisory.
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
                      Personalized Solutions
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Every financial plan is customized to your unique goals, risk tolerance, and investment timeline.
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
                      Market Expertise
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Deep understanding of Bengaluru's real estate market trends and investment opportunities.
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
                      Ongoing Support
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Continuous monitoring and support to ensure your investments stay aligned with your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Financial Planning Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[#CDA274]/20 rounded-3xl"></div>
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