"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchModal from "../../../components/SearchModal";
import BackToTopButton from "../../../components/BackToTopButton";

export default function RealEstateInvestment() {
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
                    <Link href="/services/real-estate-investment" className="block px-4 py-2 font-jost text-sm text-[#C76904] bg-[#F4F0EC] font-medium">
                      Real Estate Investment
                    </Link>
                    <Link href="/services/asset-management" className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition">
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
              <Link href="/services/real-estate-investment" className="font-jost text-lg text-[#C76904] font-medium">Real Estate Investment</Link>
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
              alt="Real Estate Investment Hero"
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
                Real Estate Investment
              </h1>
              <p className="font-jost text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Build wealth through strategic real estate investments and smart reinvestment strategies with expert guidance.
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
                Strategic Real Estate Investment Solutions
              </h2>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed mb-6">
                Real estate investment is one of the most reliable ways to build long-term wealth. Our expert team provides comprehensive investment strategies tailored to your financial goals, risk tolerance, and timeline.
              </p>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed mb-8">
                Whether you're a first-time investor or looking to expand your portfolio, we guide you through every step of the investment process, from property selection to reinvestment strategies that maximize your returns.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#CDA274] text-white px-8 py-4 rounded-2xl font-jost font-semibold text-lg hover:bg-[#B8956A] transition"
              >
                Start Your Investment Journey
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Real Estate Investment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold mb-6">
              Our Investment Services
            </h2>
            <p className="font-jost text-lg text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Comprehensive real estate investment solutions designed to help you build and grow your wealth systematically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4 text-center">
                Portfolio Development
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center">
                Build a diversified real estate portfolio with carefully selected properties across different segments and locations for optimal returns.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4 text-center">
                Market Analysis
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center">
                In-depth market research and analysis to identify high-growth areas and investment opportunities with strong appreciation potential.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4 text-center">
                Financing Solutions
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center">
                Access to preferred lending partners and financing options to maximize your investment capacity and optimize cash flow.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4 text-center">
                Reinvestment Strategies
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center">
                Strategic reinvestment planning to compound your returns and build long-term wealth through smart property exchanges and upgrades.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4 text-center">
                Risk Management
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center">
                Comprehensive risk assessment and mitigation strategies to protect your investments and ensure stable returns.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4 text-center">
                Ongoing Support
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed text-center">
                Continuous market monitoring, performance tracking, and strategic advice to optimize your investment returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold mb-6">
              Our Investment Process
            </h2>
            <p className="font-jost text-lg text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              A systematic approach to real estate investment that maximizes returns while minimizing risks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Goal Assessment
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Understand your investment objectives, risk tolerance, and financial capacity to create a personalized strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Market Research
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Conduct thorough market analysis to identify prime investment opportunities and growth areas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Property Selection
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Carefully select properties that align with your investment strategy and offer strong return potential.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Portfolio Management
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Ongoing monitoring and optimization of your portfolio with strategic reinvestment recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Investments */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Investment Expertise"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[#CDA274]/20 rounded-3xl"></div>
            </div>

            <div>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold mb-8">
                Why Choose Us for Your Investment Journey?
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
                      15+ Years of Market Experience
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Deep understanding of Bengaluru's real estate cycles and investment patterns for informed decision-making.
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
                      Proven Track Record
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Successful investment strategies that have delivered consistent returns for our clients across market cycles.
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
                      End-to-End Support
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Complete investment lifecycle management from initial analysis to exit strategies and reinvestment planning.
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
                      Network & Partnerships
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Strong relationships with developers, financial institutions, and industry experts for exclusive opportunities.
                    </p>
                  </div>
                </div>
              </div>
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