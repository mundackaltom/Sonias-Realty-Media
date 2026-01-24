"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import SearchModal from "../components/SearchModal";
import BackToTopButton from "../components/BackToTopButton";
import CompanyStrip from "../components/CompanyStrip";
import BankStrip from "../components/BankStrip";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [heroStyles, setHeroStyles] = useState({ width: '100%', height: '100%', borderRadius: '0px' });
  const [mounted, setMounted] = useState(false);
  
  // Timeout refs for delayed closing
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const projectsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect for hero image
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const newScrollY = window.scrollY;
      
      // Update hero styles based on scroll
      const maxScroll = 600;
      const minWidth = 65;
      const maxWidth = 100;
      
      let newWidth = maxWidth;
      if (newScrollY >= maxScroll) {
        newWidth = minWidth;
      } else {
        const widthReduction = ((newScrollY / maxScroll) * (maxWidth - minWidth));
        newWidth = Math.max(minWidth, maxWidth - widthReduction);
      }
      
      // Calculate border radius
      const maxRadius = 40;
      const widthFactor = (100 - newWidth) / (100 - 65);
      const newBorderRadius = Math.min(maxRadius, 0 + (widthFactor * maxRadius));
      
      setHeroStyles({
        width: `${newWidth}%`,
        height: '100%',
        borderRadius: `${newBorderRadius}px`
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300); // 300ms delay
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
    }, 300); // 300ms delay
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#F4F0EC] px-4 py-4">
        <div className="max-w-5xl mx-auto">
          {/* Single row with logo, brand name, navigation, and search */}
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#CDA274] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Sonia's Realty Media Logo"
                  width={360}
                  height={360}
                  className="object-contain rounded-full scale-125"
                />
              </div>
              <h1 className="font-dm-serif text-sm sm:text-base md:text-lg lg:text-xl text-[#292F36] font-bold whitespace-nowrap">
                SONIA'S REALTY MEDIA
              </h1>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="font-jost text-base text-[#C76904] font-medium hover:text-[#292F36] transition">
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
                  className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition flex items-center gap-1 group"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <svg 
                    className="w-4 h-4 transition-transform duration-200 group-hover:text-[#C76904]"
                    style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesDropdownOpen && (
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
                    className="w-4 h-4 transition-transform duration-200 group-hover:text-[#C76904]"
                    style={{ transform: projectsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {projectsDropdownOpen && (
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
              className="lg:hidden p-2 flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-[#292F36] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#292F36] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#292F36]"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="font-jost text-lg text-[#C76904] font-medium">Home</Link>
              <Link href="/about" className="font-jost text-lg text-[#292F36]">About us</Link>
              <Link href="/services" className="font-jost text-lg text-[#292F36]">Services</Link>
              <Link href="/projects" className="font-jost text-lg text-[#292F36]">Projects</Link>
              <Link href="/contact" className="font-jost text-lg text-[#292F36]">Contact us</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[88vh] overflow-hidden bg-white">

        {/* Hero Container with Dynamic Width */}
        <div 
          className="relative overflow-hidden mx-auto shadow-2xl transition-all duration-500 ease-out"
          style={mounted ? heroStyles : { width: '100%', height: '100%', borderRadius: '0px' }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.jpg"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-dm-serif text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-white font-bold leading-tight mb-4 md:mb-8">
                Let's Find Your Dream Home Together
              </h1>
              <p className="font-jost text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                Discover exceptional properties with personalized service and expert guidance every step of the way.
              </p>
              <Link href="/projects" className="inline-block bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-xl transition duration-300 transform hover:scale-105">
                Get Started
                <span className="ml-2 sm:ml-3">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-dm-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#292F36] font-bold mb-4 sm:mb-6">
              Our Services
            </h2>
            <p className="font-jost text-base sm:text-lg lg:text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed px-4">
              We provide comprehensive real estate solutions tailored to your unique needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Service 1 */}
            <div className="text-center group flex flex-col h-full p-4 sm:p-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition duration-300">
                <span className="text-2xl sm:text-3xl text-white">🏠</span>
              </div>
              <h3 className="font-dm-serif text-xl sm:text-2xl text-[#292F36] font-bold mb-3 sm:mb-4">Property Search</h3>
              <p className="font-jost text-sm sm:text-base lg:text-lg text-[#4D5053] leading-relaxed mb-4 sm:mb-6 flex-grow">
                Find your perfect home with our extensive property database and personalized search filters.
              </p>
              <Link href="/services" className="font-jost text-sm sm:text-base lg:text-lg text-[#4D5053] font-semibold hover:text-[#CDA274] transition mt-auto">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="text-center group flex flex-col h-full">
              <div className="w-20 h-20 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
                <span className="text-3xl text-white">💼</span>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">Market Analysis</h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed mb-6 flex-grow">
                Get detailed market insights and property valuations to make informed decisions.
              </p>
              <Link href="/services" className="font-jost text-lg text-[#4D5053] font-semibold hover:text-[#CDA274] transition mt-auto">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="text-center group flex flex-col h-full">
              <div className="w-20 h-20 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">Expert Consultation</h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed mb-6 flex-grow">
                Receive professional guidance throughout your entire real estate journey.
              </p>
              <Link href="/services" className="font-jost text-lg text-[#4D5053] font-semibold hover:text-[#CDA274] transition mt-auto">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Partners Strip */}
      <CompanyStrip />

      {/* About Section */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-8">
                About Sonia's Realty Media
              </h2>
              <p className="font-jost text-xl text-[#4D5053] leading-relaxed mb-8">
                With over a decade of experience in the real estate industry, we've helped thousands of families find their perfect homes. Our commitment to excellence and personalized service sets us apart.
              </p>
              <div className="mt-8">
                <Link href="/about" className="inline-block bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg transition duration-300">
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero.jpg"
                  alt="About Us"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Partners Strip */}
      <BankStrip />

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-6">
              Featured Properties
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Explore our handpicked selection of premium properties available in prime locations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Property 1 - Brigade Valencia */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 group cursor-pointer">
              <Link href="/projects/1" className="block">
                <div className="relative h-48 sm:h-56 lg:h-64">
                  <Image
                    src="/images/brigade_valencia/brigade_valencia_2.jpeg"
                    alt="Brigade Valencia"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[#CDA274] text-white px-2 sm:px-3 py-1 rounded-full font-jost font-semibold text-xs sm:text-sm">
                    Featured
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-dm-serif text-lg sm:text-xl lg:text-2xl text-[#292F36] font-bold mb-2 sm:mb-3 group-hover:text-[#CDA274] transition">Brigade Valencia</h3>
                  <p className="font-jost text-sm sm:text-base lg:text-lg text-[#4D5053] mb-3 sm:mb-4">Premium residential project with world-class amenities</p>
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <div className="flex justify-between items-center">
                      <span className="font-jost text-xs sm:text-sm text-[#4D5053]">Devanahalli, Bengaluru</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">Upcoming</span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="flex w-full gap-2 sm:gap-3">
                  <Link
                    href="https://youtu.be/Uk87MZBi1KA?si=GNQH4RJN3jLTy8xf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 bg-transparent border border-[#CDA274] text-[#CDA274] px-2 sm:px-4 py-2 sm:py-3 rounded-[1.5rem] font-jost text-xs sm:text-sm font-semibold hover:bg-[#CDA274] hover:text-white transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a2.92 2.92 0 0 0-2.057-2.057C19.706 3.75 12 3.75 12 3.75s-7.706 0-9.441.379a2.92 2.92 0 0 0-2.057 2.057C.123 7.921.123 12 .123 12s0 4.079.379 5.814a2.92 2.92 0 0 0 2.057 2.057C4.294 20.25 12 20.25 12 20.25s7.706 0 9.441-.379a2.92 2.92 0 0 0 2.057-2.057C23.877 16.079 23.877 12 23.877 12s0-4.079-.379-5.814zM9.75 15.75V8.25L15.75 12l-6 3.75z"/>
                    </svg>
                    Video
                  </Link>
                  <Link
                    href="/projects/1"
                    className="flex-1 bg-[#292F36] text-white px-2 sm:px-4 py-2 sm:py-3 rounded-[1.5rem] font-jost text-xs sm:text-sm font-semibold hover:bg-[#4D5053] transition text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Property 2 - Brigade Avalon */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 group cursor-pointer">
              <Link href="/projects/2" className="block">
                <div className="relative h-64">
                  <Image
                    src="/images/hero.jpg"
                    alt="Brigade Avalon"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[#CDA274] text-white px-3 py-1 rounded-full font-jost font-semibold">
                    Premium
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-3 group-hover:text-[#CDA274] transition">
                    Brigade Avalon
                  </h3>
                  <p className="font-jost text-lg text-[#4D5053] mb-4">
                    Luxury residential development with premium amenities
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <span className="font-jost text-sm text-[#4D5053]">
                        Electronic City, Bengaluru
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                        Upcoming
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="px-6 pb-6">
                <div className="flex w-full gap-3">
                  <Link
                    href="https://youtu.be/Uk87MZBi1KA?si=GNQH4RJN3jLTy8xf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-[#CDA274] text-[#CDA274] px-4 py-3 rounded-[1.5rem] font-jost text-sm font-semibold hover:bg-[#CDA274] hover:text-white transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a2.92 2.92 0 0 0-2.057-2.057C19.706 3.75 12 3.75 12 3.75s-7.706 0-9.441.379a2.92 2.92 0 0 0-2.057 2.057C.123 7.921.123 12 .123 12s0 4.079.379 5.814a2.92 2.92 0 0 0 2.057 2.057C4.294 20.25 12 20.25 12 20.25s7.706 0 9.441-.379a2.92 2.92 0 0 0 2.057-2.057C23.877 16.079 23.877 12 23.877 12s0-4.079-.379-5.814zM9.75 15.75V8.25L15.75 12l-6 3.75z"/>
                    </svg>
                    Video
                  </Link>
                  <Link
                    href="/projects/2"
                    className="flex-1 bg-[#292F36] text-white px-4 py-3 rounded-[1.5rem] font-jost text-sm font-semibold hover:bg-[#4D5053] transition text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Property 3 - Brigade Eternia */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 group cursor-pointer">
              <Link href="/projects/3" className="block">
                <div className="relative h-64">
                  <Image
                    src="/images/hero.jpg"
                    alt="Brigade Eternia"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-jost font-semibold">
                    Ready
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-3 group-hover:text-[#CDA274] transition">Brigade Eternia</h3>
                  <p className="font-jost text-lg text-[#4D5053] mb-4">Premium residential project with modern amenities</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <span className="font-jost text-sm text-[#4D5053]">Whitefield, Bengaluru</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">Ready to Move</span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="px-6 pb-6">
                <div className="flex w-full gap-3">
                  <Link
                    href="https://youtu.be/Uk87MZBi1KA?si=GNQH4RJN3jLTy8xf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-[#CDA274] text-[#CDA274] px-4 py-3 rounded-[1.5rem] font-jost text-sm font-semibold hover:bg-[#CDA274] hover:text-white transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a2.92 2.92 0 0 0-2.057-2.057C19.706 3.75 12 3.75 12 3.75s-7.706 0-9.441.379a2.92 2.92 0 0 0-2.057 2.057C.123 7.921.123 12 .123 12s0 4.079.379 5.814a2.92 2.92 0 0 0 2.057 2.057C4.294 20.25 12 20.25 12 20.25s7.706 0 9.441-.379a2.92 2.92 0 0 0 2.057-2.057C23.877 16.079 23.877 12 23.877 12s0-4.079-.379-5.814zM9.75 15.75V8.25L15.75 12l-6 3.75z"/>
                    </svg>
                    Video
                  </Link>
                  <Link
                    href="/projects/3"
                    className="flex-1 bg-[#292F36] text-white px-4 py-3 rounded-[1.5rem] font-jost text-sm font-semibold hover:bg-[#4D5053] transition text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="inline-block bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg transition duration-300">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Read testimonials from satisfied clients who found their dream homes with our help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#CDA274] rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/hero.jpg"
                    alt="Sarah Johnson"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-dm-serif text-xl text-[#292F36] font-bold">Sarah Johnson</h4>
                  <p className="font-jost text-lg text-[#4D5053]">Happy Homeowner</p>
                </div>
              </div>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                "Sonia's team made our home buying experience seamless and stress-free. Their expertise and dedication are unmatched!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#CDA274] rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/hero.jpg"
                    alt="Mike Chen"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-dm-serif text-xl text-[#292F36] font-bold">Mike Chen</h4>
                  <p className="font-jost text-lg text-[#4D5053]">First-time Buyer</p>
                </div>
              </div>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                "As a first-time buyer, I was nervous, but Sonia guided me through every step. I couldn't be happier with my new home!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#CDA274] rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/hero.jpg"
                    alt="Emily Rodriguez"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-dm-serif text-xl text-[#292F36] font-bold">Emily Rodriguez</h4>
                  <p className="font-jost text-lg text-[#4D5053]">Property Investor</p>
                </div>
              </div>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                "Professional, knowledgeable, and results-driven. Sonia's team helped me build a successful investment portfolio."
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