"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SearchModal from "../../../components/SearchModal";

// In‑memory list of all projects you want searchable.
// Keep this in sync with your /projects cards.
const ALL_PROPERTIES = [
  {
    id: 1,
    name: "Brigade Valencia",
    type: "apartment", // choose a type that matches your filter options
    location: "Devanahalli, Bengaluru",
    status: "Upcoming",
    statusTag: "Featured",
    badgeColor: "bg-[#CDA274]",
    tagColor: "bg-blue-100 text-blue-800",
    description: "Premium residential project with world-class amenities",
    href: "/projects/1",
    image: "/images/brigade_valencia/brigade_valencia_2.jpeg",
  },
  {
    id: 2,
    name: "Brigade Avalon",
    type: "apartment",
    location: "Electronic City, Bengaluru",
    status: "Upcoming",
    statusTag: "Premium",
    badgeColor: "bg-[#CDA274]",
    tagColor: "bg-blue-100 text-blue-800",
    description: "Luxury residential development with premium amenities",
    href: "/projects/2",
    image: "/images/hero.jpg",
  },
  {
    id: 3,
    name: "Brigade Eternia",
    type: "apartment",
    location: "Whitefield, Bengaluru",
    status: "Ready to Move",
    statusTag: "Ready",
    badgeColor: "bg-green-500",
    tagColor: "bg-green-100 text-green-800",
    description: "Premium residential project with modern amenities",
    href: "/projects/3",
    image: "/images/hero.jpg",
  },
];

export default function PropertySearch() {
  const [isClient, setIsClient] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [searchFilters, setSearchFilters] = useState({
    propertyType: "apartment",
    location: "",
    bedrooms: "3",
    minPrice: "no-min",
    maxPrice: "no-max",
  });

  // NEW: results + "has searched" flag
  const [results, setResults] = useState<typeof ALL_PROPERTIES>([]);
  const [hasSearched, setHasSearched] = useState(false);

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
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 500);
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
    }, 500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  // Filtering logic that works for all projects in ALL_PROPERTIES
  const filterProperties = () => {
    const { propertyType, location } = searchFilters;

    const typeTerm = propertyType.trim().toLowerCase();
    const locationTerm = location.trim().toLowerCase();

    return ALL_PROPERTIES.filter((p) => {
      const typeMatch =
        !typeTerm || p.type.toLowerCase() === typeTerm;

      const locationMatch =
        !locationTerm ||
        p.location.toLowerCase().includes(locationTerm);

      // For now we ignore bedrooms / price; you can extend this later.
      return typeMatch && locationMatch;
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = filterProperties();
    setResults(filtered);
    setHasSearched(true);
  };

  return (
    <main className="min-h-screen bg-white">
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
                  <div 
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <Link href="/services/property-search" className="block px-4 py-2 font-jost text-sm text-[#C76904] bg-[#F4F0EC] font-medium">
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
                <Link
                  href="/projects"
                  className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition flex items-center gap-1 group"
                >
                  Projects
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setProjectsDropdownOpen(!projectsDropdownOpen);
                    }}
                    className="flex items-center"
                  >
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${projectsDropdownOpen ? 'rotate-180' : ''} group-hover:text-[#C76904]`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </Link>
                {projectsDropdownOpen && isClient && (
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
              <Link href="/services/property-search" className="font-jost text-lg text-[#C76904] font-medium">Property Search</Link>
              <Link href="/services/financial-planning" className="font-jost text-lg text-[#292F36]">Financial Planning</Link>
              <Link href="/projects" className="font-jost text-lg text-[#292F36]">Projects</Link>
              <Link href="/contact" className="font-jost text-lg text-[#292F36]">Contact us</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] overflow-hidden bg-white">
        <div className="relative overflow-hidden mx-auto shadow-2xl h-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.jpg"
              alt="Property Search Hero"
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
                Property Search
              </h1>
              <p className="font-jost text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Find your perfect property with our advanced search tools and extensive database of available homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#F4F0EC] rounded-3xl p-8 shadow-lg">
            <h2 className="font-dm-serif text-3xl text-[#292F36] font-bold mb-8 text-center">
              Search Properties
            </h2>

            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Property Type */}
                <div>
                  <label className="block font-jost font-medium text-[16px] text-[#292F36] mb-2">
                    Property Type
                  </label>
                  <select 
                    name="propertyType"
                    value={searchFilters.propertyType}
                    onChange={handleInputChange}
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
                    value={searchFilters.location}
                    onChange={handleInputChange}
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
                    value={searchFilters.bedrooms}
                    onChange={handleInputChange}
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
                    value={searchFilters.minPrice}
                    onChange={handleInputChange}
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
                    value={searchFilters.maxPrice}
                    onChange={handleInputChange}
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

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-lg px-12 py-4 rounded-2xl shadow-lg transition duration-300 transform hover:scale-105"
                >
                  Search Properties
                </button>
              </div>
            </form>
          </div>

          {/* RESULTS SECTION */}
          <div className="mt-12">
            {hasSearched && results.length === 0 && (
              <p className="text-center font-jost text-lg text-[#4D5053]">
                No properties found matching your criteria.
              </p>
            )}

            {results.length > 0 && (
              <>
                <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-6">
                  Search Results
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {results.map((p) => (
                    <div
                      key={p.id}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 group cursor-pointer"
                    >
                      <Link href={p.href} className="block">
                        <div className="relative h-64">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-cover group-hover:scale-105 transition duration-300"
                          />
                          <div
                            className={`absolute top-4 right-4 ${p.badgeColor} text-white px-3 py-1 rounded-full font-jost font-semibold`}
                          >
                            {p.statusTag}
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-2 group-hover:text-[#CDA274] transition">
                            {p.name}
                          </h4>
                          <p className="font-jost text-lg text-[#4D5053] mb-4">
                            {p.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="font-jost text-sm text-[#4D5053]">
                              {p.location}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${p.tagColor}`}
                            >
                              {p.status}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Popular Areas in Bengaluru Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold mb-4">
              Popular Areas in Bengaluru
            </h2>
            <p className="font-jost text-lg text-[#4D5053] max-w-2xl mx-auto leading-relaxed">
              Discover the most sought-after neighborhoods offering great connectivity, amenities, and investment potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Area 1 */}
            <div className="bg-[#F4F0EC] p-6 rounded-2xl hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg text-white font-bold">EC</span>
              </div>
              <h3 className="font-dm-serif text-lg text-[#292F36] font-bold mb-2">Electronic City</h3>
              <p className="font-jost text-sm text-[#4D5053] leading-relaxed mb-3">
                Major IT hub with excellent infrastructure and connectivity to the city center.
              </p>
              <div className="space-y-1">
                <p className="font-jost text-xs text-[#4D5053]">
                  <strong>Average Price:</strong> ₹4,500-6,500/sq ft
                </p>
                <p className="font-jost text-xs text-[#4D5053]">
                  <strong>Key Features:</strong> IT parks, Metro connectivity
                </p>
              </div>
            </div>

            {/* Area 2 */}
            <div className="bg-[#F4F0EC] p-6 rounded-2xl hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg text-white font-bold">WF</span>
              </div>
              <h3 className="font-dm-serif text-lg text-[#292F36] font-bold mb-2">Whitefield</h3>
              <p className="font-jost text-sm text-[#4D5053] leading-relaxed mb-3">
                Premium residential area with top-notch amenities and excellent schools.
              </p>
              <div className="space-y-1">
                <p className="font-jost text-xs text-[#4D5053]">
                  <strong>Average Price:</strong> ₹5,000-8,000/sq ft
                </p>
                <p className="font-jost text-xs text-[#4D5053]">
                  <strong>Key Features:</strong> International schools, Malls
                </p>
              </div>
            </div>

            {/* Area 3 */}
            <div className="bg-[#F4F0EC] p-6 rounded-2xl hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg text-white font-bold">MH</span>
              </div>
              <h3 className="font-dm-serif text-lg text-[#292F36] font-bold mb-2">Marathahalli</h3>
              <p className="font-jost text-sm text-[#4D5053] leading-relaxed mb-3">
                Central location with great connectivity to IT corridors and commercial hubs.
              </p>
              <div className="space-y-1">
                <p className="font-jost text-xs text-[#4D5053]">
                  <strong>Average Price:</strong> ₹6,000-9,000/sq ft
                </p>
                <p className="font-jost text-xs text-[#4D5053]">
                  <strong>Key Features:</strong> Central location, Shopping centers
                </p>
              </div>
            </div>

            {/* Area 4 */}
            <div className="bg-[#F4F0EC] p-6 rounded-2xl hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg text-white font-bold">DH</span>
              </div>
              <h3 className="font-dm-serif text-lg text-[#292F36] font-bold mb-2">Devanahalli</h3>
              <p className="font-jost text-sm text-[#4D5053] leading-relaxed mb-3">
                Rapidly developing area near the airport with great future growth potential.
              </p>
              <div className="space-y-1">
                <p className="font-jost text-xs text-[#4D5053]">
                  <strong>Average Price:</strong> ₹3,500-5,500/sq ft
                </p>
                <p className="font-jost text-xs text-[#4D5053]">
                  <strong>Key Features:</strong> Airport proximity, Growth potential
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-base px-6 py-3 rounded-xl shadow-lg transition duration-300"
            >
              Get Area-Specific Advice
            </Link>
          </div>
        </div>
      </section>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </main>
  );
}