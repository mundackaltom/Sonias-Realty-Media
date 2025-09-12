"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchModal from "../../../components/SearchModal";

export default function PropertySearch() {
  const [isClient, setIsClient] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchForm, setSearchForm] = useState({
    propertyType: '',
    location: '',
    bedrooms: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleServicesMouseEnter = () => {
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300);
  };

  const handleProjectsMouseEnter = () => {
    setProjectsDropdownOpen(true);
  };

  const handleProjectsMouseLeave = () => {
    setTimeout(() => {
      setProjectsDropdownOpen(false);
    }, 300);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearchForm({
      ...searchForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the property search submission
    console.log('Property search submitted:', searchForm);
    alert(`Searching for properties:\nType: ${searchForm.propertyType}\nLocation: ${searchForm.location}\nBedrooms: ${searchForm.bedrooms}\nPrice: ${searchForm.minPrice} - ${searchForm.maxPrice}`);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#F4F0EC] px-4 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Single row with logo, brand name, navigation, and search */}
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <div className="w-20 h-20 bg-[#CDA274] rounded-full flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Sonia's Realty Media Logo"
                  width={80}
                  height={80}
                  className="object-cover rounded-full w-full h-full"
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
                  className="font-jost text-lg text-[#C76904] font-medium hover:text-[#292F36] transition flex items-center gap-1"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <span className="text-sm">▼</span>
                </button>
                {servicesDropdownOpen && isClient && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link href="/services/property-search" className="block px-4 py-2 font-jost text-[#C76904] font-semibold hover:bg-[#F4F0EC] transition border-t border-gray-100 mt-1">
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
                  className="font-jost text-lg text-[#292F36] hover:text-[#C76904] transition flex items-center gap-1"
                  onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                >
                  Projects
                  <span className="text-sm">▼</span>
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
                    <Link href="/projects" className="block px-4 py-2 font-jost text-[#C76904] font-semibold hover:bg-[#F4F0EC] transition border-t border-gray-100 mt-1">
                      View All Projects
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact" className="font-jost text-lg text-[#292F36] hover:text-[#C76904] transition">
                Contact
              </Link>
            </nav>

            {/* Search Icon */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 border-2 border-[#292F36] rounded-full flex items-center justify-center hover:bg-[#292F36] hover:text-white transition"
            >
              <span className="text-lg">🔍</span>
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
              <Link href="/about" className="font-jost text-lg text-[#292F36]">About us</Link>
              <Link href="/services" className="font-jost text-lg text-[#C76904] font-medium">Services</Link>
              <Link href="/projects" className="font-jost text-lg text-[#292F36]">Projects</Link>
              <Link href="/contact" className="font-jost text-lg text-[#292F36]">Contact</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#F4F0EC] to-[#E8E0D6] py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="font-dm-serif font-normal text-[48px] sm:text-[56px] lg:text-[65px] leading-[125%] text-[#292F36] mb-6">
            Property Search
          </h1>
          <p className="font-jost font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[33px] text-[#4D5053] max-w-[600px] mx-auto">
            Find your perfect property with our advanced search tools and extensive database of available homes.
          </p>
        </div>
      </section>

      {/* Search Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="bg-[#F4F0EC] rounded-[25px] p-8">
            <h2 className="font-dm-serif text-[32px] leading-[125%] text-[#292F36] mb-6 text-center">
              Search Properties
            </h2>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Property Type */}
                <div>
                  <label className="block font-jost font-medium text-[16px] text-[#292F36] mb-2">
                    Property Type
                  </label>
                  <select 
                    name="propertyType"
                    value={searchForm.propertyType}
                    onChange={handleFormChange}
                    className="w-full border-2 border-[#E7E7E7] rounded-[12px] px-4 py-3 font-jost text-[16px] focus:border-[#CDA274] focus:outline-none"
                  >
                    <option value="">Any Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block font-jost font-medium text-[16px] text-[#292F36] mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={searchForm.location}
                    onChange={handleFormChange}
                    placeholder="Enter city or neighborhood"
                    className="w-full border-2 border-[#E7E7E7] rounded-[12px] px-4 py-3 font-jost text-[16px] focus:border-[#CDA274] focus:outline-none"
                  />
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block font-jost font-medium text-[16px] text-[#292F36] mb-2">
                    Bedrooms
                  </label>
                  <select 
                    name="bedrooms"
                    value={searchForm.bedrooms}
                    onChange={handleFormChange}
                    className="w-full border-2 border-[#E7E7E7] rounded-[12px] px-4 py-3 font-jost text-[16px] focus:border-[#CDA274] focus:outline-none"
                  >
                    <option value="">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Min Price */}
                <div>
                  <label className="block font-jost font-medium text-[16px] text-[#292F36] mb-2">
                    Min Price
                  </label>
                  <select 
                    name="minPrice"
                    value={searchForm.minPrice}
                    onChange={handleFormChange}
                    className="w-full border-2 border-[#E7E7E7] rounded-[12px] px-4 py-3 font-jost text-[16px] focus:border-[#CDA274] focus:outline-none"
                  >
                    <option value="">No Min</option>
                    <option value="10lakh">₹10 Lakh</option>
                    <option value="25lakh">₹25 Lakh</option>
                    <option value="50lakh">₹50 Lakh</option>
                    <option value="1crore">₹1 Crore</option>
                  </select>
                </div>

                {/* Max Price */}
                <div>
                  <label className="block font-jost font-medium text-[16px] text-[#292F36] mb-2">
                    Max Price
                  </label>
                  <select 
                    name="maxPrice"
                    value={searchForm.maxPrice}
                    onChange={handleFormChange}
                    className="w-full border-2 border-[#E7E7E7] rounded-[12px] px-4 py-3 font-jost text-[16px] focus:border-[#CDA274] focus:outline-none"
                  >
                    <option value="">No Max</option>
                    <option value="50lakh">₹50 Lakh</option>
                    <option value="1crore">₹1 Crore</option>
                    <option value="2crore">₹2 Crore</option>
                    <option value="5crore">₹5 Crore</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#CDA274] text-white font-jost font-semibold text-[18px] px-12 py-4 rounded-[18px] hover:bg-[#B8956A] transition duration-300"
                >
                  Search Properties
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#292F36]">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="font-dm-serif font-normal text-[36px] sm:text-[42px] lg:text-[45px] leading-[125%] text-white mb-6">
            Need Help Finding the Perfect Property?
          </h2>
          <p className="font-jost font-normal text-[18px] sm:text-[20px] leading-[30px] text-[#C4C4C4] mb-8 max-w-[600px] mx-auto">
            Our expert team can help you find exactly what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-[#CDA274] text-white px-8 py-4 rounded-[18px] font-jost font-semibold text-[16px] hover:bg-[#B8956A] transition">
              Contact Our Team
            </Link>
            <Link href="/projects" className="border-2 border-white text-white px-8 py-4 rounded-[18px] font-jost font-semibold text-[16px] hover:bg-white hover:text-[#292F36] transition">
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </main>
  );
}