"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import SearchModal from "../../components/SearchModal";

export default function About() {
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
        <div className="max-w-7xl mx-auto">
          {/* Single row with logo, brand name, navigation, and search */}
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
              <Link href="/about" className="font-jost text-lg text-[#C76904] font-medium hover:text-[#292F36] transition">
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

              <Link href="/contact" className="font-jost text-lg text-[#292F36] hover:text-[#C76904] transition">
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
              className="md:hidden p-2"
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
              <Link href="/about" className="font-jost text-lg text-[#C76904] font-medium">About us</Link>
              <Link href="/services" className="font-jost text-lg text-[#292F36]">Services</Link>
              <Link href="/projects" className="font-jost text-lg text-[#292F36]">Projects</Link>
              <Link href="/contact" className="font-jost text-lg text-[#292F36]">Contact us</Link>
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
              alt="About Us Hero"
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
                About Sonia's Realty Media
              </h1>
              <p className="font-jost text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Your trusted partner in real estate with over 15 years of experience in helping families find their perfect homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-8">
                Our Story
              </h2>
              <p className="font-jost text-xl text-[#4D5053] leading-relaxed mb-6">
                Founded in 2008, Sonia's Realty Media began with a simple mission: to provide exceptional real estate services with a personal touch. What started as a small family business has grown into one of the most trusted names in the industry.
              </p>
              <p className="font-jost text-xl text-[#4D5053] leading-relaxed mb-8">
                Our founder, Sonia Martinez, recognized that buying or selling a home is one of life's most significant decisions. With this understanding, she built a company that prioritizes client relationships, market expertise, and unwavering integrity.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="font-dm-serif text-3xl text-[#CDA274] font-bold mb-2">500+</div>
                  <div className="font-jost text-sm text-[#4D5053]">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="font-dm-serif text-3xl text-[#CDA274] font-bold mb-2">15+</div>
                  <div className="font-jost text-sm text-[#4D5053]">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-dm-serif text-3xl text-[#CDA274] font-bold mb-2">98%</div>
                  <div className="font-jost text-sm text-[#4D5053]">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Our Office"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-6">
              Our Mission & Vision
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              We're driven by a commitment to excellence and a passion for helping people achieve their real estate dreams.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-6 text-center">Our Mission</h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed text-center">
                To provide exceptional real estate services that exceed expectations, build lasting relationships, and help our clients make informed decisions in their property journey with transparency, integrity, and expertise.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-6 text-center">Our Vision</h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed text-center">
                To be the most trusted and innovative real estate company, known for transforming the property buying and selling experience through technology, personalized service, and deep market knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Our experienced professionals are dedicated to providing you with the highest level of service and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition duration-300">
                <Image
                  src="/images/hero.jpg"
                  alt="Sonia Jimmy"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-2">Sonia Jimmy</h3>
              <p className="font-jost text-lg text-[#CDA274] font-semibold mb-4">Founder & CEO</p>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                With over 15 years of experience, Sonia leads our team with passion, integrity, and deep market knowledge.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition duration-300">
                <Image
                  src="/images/hero.jpg"
                  alt="Tom Jimmy"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-2">Tom Jimmy</h3>
              <p className="font-jost text-lg text-[#CDA274] font-semibold mb-4">Content Creation</p>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Tom specializes in creating compelling content and marketing materials that showcase our properties beautifully.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition duration-300">
                <Image
                  src="/images/hero.jpg"
                  alt="Jimmy Thomas"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-2">Jimmy Thomas</h3>
              <p className="font-jost text-lg text-[#CDA274] font-semibold mb-4">Business Development</p>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Jimmy focuses on expanding our business relationships and developing strategic partnerships in the real estate market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-6">
              Our Core Values
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do and shape our commitment to exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">Integrity</h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                We conduct business with honesty, transparency, and ethical practices in every interaction.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">Excellence</h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                We strive for excellence in every service we provide, exceeding expectations at every turn.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">Passion</h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                We're passionate about real estate and genuinely care about helping our clients succeed.
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-4">Innovation</h3>
              <p className="font-jost text-[#4D5053] leading-relaxed">
                We embrace technology and innovative approaches to enhance the real estate experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#292F36]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-dm-serif text-4xl md:text-5xl text-white font-bold mb-8">
            Ready to Work With Us?
          </h2>
          <p className="font-jost text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
            Experience the difference of working with a team that truly cares about your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg transition duration-300 inline-block text-center">
              Get In Touch
            </Link>
            <Link href="/projects" className="border-2 border-white text-white hover:bg-white hover:text-[#292F36] font-inter font-semibold text-lg px-8 py-4 rounded-2xl transition duration-300 inline-block text-center">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
