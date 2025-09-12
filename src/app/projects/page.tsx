"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";
import SearchModal from "../../components/SearchModal";

const projects = [
  {
    id: "1",
    title: "Riverside Towers",
    location: "Downtown",
    status: "Upcoming",
    description: "Luxury 2–3 BHK apartments with river views, modern amenities and secure parking.",
    image: "/images/hero.jpg",
    brochureUrl: "/brochures/Brigade Valencia - Brillio brochure-1.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEOID1",
  },
  {
    id: "2",
    title: "Garden Heights",
    location: "Uptown",
    status: "Existing",
    description: "Family friendly apartments close to parks and schools.",
    image: "/images/hero.jpg",
    brochureUrl: "/brochures/Brigade Valencia - Brillio brochure-1.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEOID2",
  },
  {
    id: "3",
    title: "Valencia Premium",
    location: "City Center",
    status: "Upcoming",
    description: "Premium residential project with world-class amenities and modern architecture.",
    image: "/images/Valencia.webp",
    brochureUrl: "/brochures/Brigade Valencia - Brillio brochure-1.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEOID3",
  },
  {
    id: "4",
    title: "Emerald Square",
    location: "Suburbs",
    status: "Existing",
    description: "Spacious family homes with gardens and community facilities.",
    image: "/images/hero.jpg",
    brochureUrl: "/brochures/Brigade Valencia - Brillio brochure-1.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEOID4",
  },
];

export default function Projects() {
  const [isClient, setIsClient] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  
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
    }, 300);
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
    }, 300);
  };

  const filteredProjects = filterStatus === "All" 
    ? projects 
    : projects.filter(project => project.status === filterStatus);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#F4F0EC] px-4 py-6">
        <div className="max-w-7xl mx-auto">
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
                  className="font-jost text-lg text-[#292F36] hover:text-[#C76904] transition flex items-center gap-1"
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                >
                  Services
                  <span className="text-sm">▼</span>
                </button>
                {showServicesDropdown && isClient && (
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
                  className="font-jost text-lg text-[#C76904] font-medium hover:text-[#292F36] transition flex items-center gap-1"
                  onClick={() => setShowProjectsDropdown(!showProjectsDropdown)}
                >
                  Projects
                  <span className="text-sm">▼</span>
                </button>
                {showProjectsDropdown && isClient && (
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
                Contact
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
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="font-jost text-lg text-[#292F36]">Home</Link>
              <Link href="/about" className="font-jost text-lg text-[#292F36]">About us</Link>
              <Link href="/services" className="font-jost text-lg text-[#292F36]">Services</Link>
              <Link href="/projects" className="font-jost text-lg text-[#C76904] font-medium">Projects</Link>
              <Link href="/contact" className="font-jost text-lg text-[#292F36]">Contact</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-dm-serif text-4xl md:text-6xl lg:text-7xl text-[#292F36] font-bold leading-tight mb-8">
              Our Projects
            </h1>
            <p className="font-jost text-xl md:text-2xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Discover our exceptional real estate projects designed to create lasting value and beautiful living spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-dm-serif text-4xl md:text-5xl text-[#CDA274] font-bold mb-2">50+</div>
              <div className="font-jost text-lg text-[#4D5053]">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="font-dm-serif text-4xl md:text-5xl text-[#CDA274] font-bold mb-2">1000+</div>
              <div className="font-jost text-lg text-[#4D5053]">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="font-dm-serif text-4xl md:text-5xl text-[#CDA274] font-bold mb-2">15+</div>
              <div className="font-jost text-lg text-[#4D5053]">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-dm-serif text-4xl md:text-5xl text-[#CDA274] font-bold mb-2">95%</div>
              <div className="font-jost text-lg text-[#4D5053]">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["All", "Upcoming", "Existing"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-6 py-3 rounded-2xl font-jost font-semibold text-lg transition duration-300 ${
                  filterStatus === status
                    ? "bg-[#CDA274] text-white"
                    : "bg-[#F4F0EC] text-[#292F36] hover:bg-[#CDA274] hover:text-white"
                }`}
              >
                {status} Projects
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                id={project.id}
                title={project.title}
                location={project.location}
                status={project.status}
                description={project.description}
                image={project.image}
                brochureUrl={project.brochureUrl}
                youtubeUrl={project.youtubeUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Projects Section */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dm-serif text-3xl md:text-5xl text-[#292F36] font-bold mb-6">
              Why Choose Our Projects?
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Every project is built with attention to detail, quality materials, and modern design principles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">Premium Quality</h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Built with the finest materials and superior craftsmanship for lasting value.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">Prime Locations</h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Strategically located in desirable neighborhoods with excellent connectivity.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">Modern Amenities</h3>
              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                Contemporary facilities and smart home features for comfortable living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#292F36]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-dm-serif text-4xl md:text-5xl text-white font-bold mb-8">
            Ready to Invest in Your Future?
          </h2>
          <p className="font-jost text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
            Explore our exceptional projects and find the perfect property that matches your vision and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg transition duration-300 inline-block text-center">
              Schedule Site Visit
            </Link>
            <Link href="/services/property-search" className="border-2 border-white text-white hover:bg-white hover:text-[#292F36] font-inter font-semibold text-lg px-8 py-4 rounded-2xl transition duration-300 inline-block text-center">
              Search Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
