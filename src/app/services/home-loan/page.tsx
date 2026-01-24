"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchModal from "../../../components/SearchModal";
import BackToTopButton from "../../../components/BackToTopButton";

export default function HomeLoan() {
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
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
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
                      className="block px-4 py-2 font-jost text-sm text-[#C76904] bg-[#F4F0EC] font-medium"
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
            <span className="text-[#CDA274] font-medium">Home Loan Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-dm-serif text-4xl md:text-6xl text-[#292F36] font-bold mb-6">
              Home Loan Services
            </h1>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Get the best home loan deals with our expert assistance. We help you navigate the loan process with competitive rates and hassle-free documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Services Overview */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-3xl md:text-5xl text-[#292F36] font-bold mb-6">
              Our Home Loan Services
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Comprehensive home loan solutions from application to approval with our banking partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-4 4 4" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
                New Home Loans
              </h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Purchase your dream home with competitive interest rates and flexible repayment options from top lenders.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
                Loan Transfer
              </h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Transfer your existing home loan to get better interest rates and improved loan terms with our partner banks.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
                Construction Loans
              </h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Build your custom home with construction loans that release funds in stages as your project progresses.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
                Documentation Support
              </h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Complete assistance with loan documentation, verification, and processing to ensure smooth approval.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
                Loan Against Property
              </h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Unlock the value of your property with loan against property for business or personal financial needs.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
                Rate Comparison
              </h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Compare interest rates and loan terms from multiple banks to find the best deal for your home loan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-3xl md:text-5xl text-[#292F36] font-bold mb-6">
              Our Banking Partners
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              We work with leading banks to provide you with the best home loan rates and terms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="font-dm-serif text-lg text-[#292F36] font-bold">HDFC Bank</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="font-dm-serif text-lg text-[#292F36] font-bold">ICICI Bank</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="font-dm-serif text-lg text-[#292F36] font-bold">SBI</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="font-dm-serif text-lg text-[#292F36] font-bold">Axis Bank</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="font-dm-serif text-lg text-[#292F36] font-bold">Union Bank</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="font-dm-serif text-lg text-[#292F36] font-bold">Canara Bank</span>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Process */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-3xl md:text-5xl text-[#292F36] font-bold mb-6">
              Simple Loan Process
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Get your home loan approved in just a few easy steps with our streamlined process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Application
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Submit your loan application with basic details and get instant pre-approval.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Documentation
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Our team helps you prepare and submit all required documents for verification.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Approval
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Property verification and final loan approval from the bank within 7-10 days.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">
                Disbursement
              </h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                Loan amount disbursed directly to your account or property seller as required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Home Loan Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold mb-8">
                Why Choose Our Home Loan Services?
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
                      Competitive Interest Rates
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Get the lowest interest rates in the market through our strong banking relationships and bulk negotiations.
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
                      Quick Processing
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Fast-track loan processing with pre-approved applications and digital documentation support.
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
                      Complete assistance from application to disbursement with dedicated relationship managers.
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
                      Multiple Bank Options
                    </h3>
                    <p className="font-jost text-[#4D5053] leading-relaxed">
                      Choose from multiple banking partners to find the best loan terms that suit your financial profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Home Loan Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[#CDA274]/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#CDA274]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-dm-serif text-3xl md:text-4xl text-white font-bold mb-6">
            Ready to Get Your Home Loan?
          </h2>
          <p className="font-jost text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get started with your home loan application today and move one step closer to owning your dream home.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#CDA274] px-8 py-4 rounded-xl font-jost font-bold text-lg hover:bg-gray-100 transition"
          >
            Apply for Home Loan
          </Link>
        </div>
      </section>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <BackToTopButton />
    </div>
  );
}