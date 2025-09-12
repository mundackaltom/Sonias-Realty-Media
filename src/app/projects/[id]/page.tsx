"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import SearchModal from "../../../components/SearchModal";

// This would typically come from a database or API
const projectsData = {
  "1": {
    id: "1",
    title: "Riverside Towers",
    location: "Downtown",
    status: "Upcoming",
    description: "Luxury 2–3 BHK apartments with river views, modern amenities and secure parking.",
    fullDescription: "Riverside Towers represents the pinnacle of luxury urban living. Located in the heart of downtown, this prestigious development offers breathtaking river views and unparalleled access to the city's finest dining, shopping, and entertainment venues. Each apartment is meticulously designed with premium finishes, state-of-the-art appliances, and floor-to-ceiling windows that flood the space with natural light.",
    image: "/images/hero.jpg",
    gallery: ["/images/hero.jpg", "/images/Valencia.webp", "/images/hero.jpg"],
    brochureUrl: "/brochures/Brigade Valencia - Brillio brochure-1.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEOID1",
    price: "₹75 Lakhs - ₹1.2 Crores",
    area: "1,200 - 1,800 sq ft",
    bedrooms: "2-3 BHK",
    amenities: [
      "Swimming Pool",
      "Fitness Center", 
      "24/7 Security",
      "Parking",
      "Garden Area",
      "Community Hall",
      "Kids Play Area",
      "Power Backup"
    ],
    specifications: {
      "Total Floors": "42 Floors",
      "Total Units": "280 Units",
      "Possession": "Dec 2025",
      "RERA Registration": "KAR/RERA/1234/2023"
    }
  },
  "2": {
    id: "2",
    title: "Garden Heights",
    location: "Uptown",
    status: "Existing",
    description: "Family friendly apartments close to parks and schools.",
    fullDescription: "Garden Heights is designed for families who value community, convenience, and quality of life. Situated in the peaceful uptown area, this development is surrounded by lush green parks, top-rated schools, and family-friendly amenities. The thoughtfully planned apartments offer spacious layouts, modern fixtures, and private balconies overlooking landscaped gardens.",
    image: "/images/hero.jpg",
    gallery: ["/images/hero.jpg", "/images/Valencia.webp", "/images/hero.jpg"],
    brochureUrl: "/brochures/Brigade Valencia - Brillio brochure-1.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEOID2",
    price: "₹55 Lakhs - ₹95 Lakhs",
    area: "1,000 - 1,500 sq ft",
    bedrooms: "2-3 BHK",
    amenities: [
      "Children's Play Area",
      "Jogging Track",
      "Community Garden",
      "Security",
      "Parking",
      "Clubhouse",
      "Basketball Court",
      "Intercom Facility"
    ],
    specifications: {
      "Total Floors": "15 Floors",
      "Total Units": "180 Units",
      "Possession": "Ready to Move",
      "RERA Registration": "KAR/RERA/5678/2021"
    }
  },
  "3": {
    id: "3",
    title: "Valencia Premium",
    location: "City Center",
    status: "Upcoming",
    description: "Premium residential project with world-class amenities and modern architecture.",
    fullDescription: "Valencia Premium sets a new standard for luxury living in the city center. This architectural masterpiece combines contemporary design with world-class amenities to create an unparalleled residential experience. Located in the most sought-after area of the city, residents enjoy easy access to business districts, cultural attractions, and premium shopping destinations.",
    image: "/images/Valencia.webp",
    gallery: ["/images/Valencia.webp", "/images/hero.jpg", "/images/Valencia.webp"],
    brochureUrl: "/brochures/Brigade Valencia - Brillio brochure-1.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEOID3",
    price: "₹1.2 Crores - ₹2.5 Crores",
    area: "1,800 - 3,000 sq ft",
    bedrooms: "3-4 BHK",
    amenities: [
      "Infinity Pool",
      "Spa & Wellness Center",
      "Business Center",
      "Concierge Service",
      "Valet Parking",
      "Private Theater",
      "Wine Cellar",
      "Rooftop Garden"
    ],
    specifications: {
      "Total Floors": "50 Floors",
      "Total Units": "320 Units",
      "Possession": "March 2026",
      "RERA Registration": "KAR/RERA/9999/2024"
    }
  },
  "4": {
    id: "4",
    title: "Emerald Square",
    location: "Suburbs",
    status: "Existing",
    description: "Spacious family homes with gardens and community facilities.",
    fullDescription: "Emerald Square offers the perfect blend of suburban tranquility and modern convenience. This family-oriented development features spacious homes with private gardens, creating a peaceful retreat from city life while maintaining easy access to urban amenities. The community is designed to foster neighborly connections and provide a safe, nurturing environment for families.",
    image: "/images/hero.jpg",
    gallery: ["/images/hero.jpg", "/images/Valencia.webp", "/images/hero.jpg"],
    brochureUrl: "/brochures/Brigade Valencia - Brillio brochure-1.pdf",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEOID4",
    price: "₹45 Lakhs - ₹75 Lakhs",
    area: "1,400 - 2,200 sq ft",
    bedrooms: "2-4 BHK",
    amenities: [
      "Private Gardens",
      "Community Center",
      "Walking Trails",
      "Playground",
      "Tennis Court",
      "BBQ Area",
      "Pet Park",
      "24/7 Security"
    ],
    specifications: {
      "Total Floors": "4 Floors",
      "Total Units": "120 Units", 
      "Possession": "Ready to Move",
      "RERA Registration": "KAR/RERA/3456/2020"
    }
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projectsData[projectId as keyof typeof projectsData];

  const [isClient, setIsClient] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  
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
    }, 300);
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
    }, 300);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-[#CDA274] hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

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
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <span className="text-sm">▼</span>
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
                  className="font-jost text-lg text-[#C76904] font-medium hover:text-[#292F36] transition flex items-center gap-1"
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
              <Link href="/services" className="font-jost text-lg text-[#292F36]">Services</Link>
              <Link href="/projects" className="font-jost text-lg text-[#C76904] font-medium">Projects</Link>
              <Link href="/contact" className="font-jost text-lg text-[#292F36]">Contact</Link>
            </div>
          </div>
        )}
      </header>

      {/* Breadcrumb */}
      <div className="bg-[#F4F0EC] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-jost">
            <Link href="/" className="text-[#4D5053] hover:text-[#CDA274] transition">Home</Link>
            <span className="text-[#4D5053]">/</span>
            <Link href="/projects" className="text-[#4D5053] hover:text-[#CDA274] transition">Projects</Link>
            <span className="text-[#4D5053]">/</span>
            <span className="text-[#CDA274] font-medium">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Images */}
            <div className="space-y-4">
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <Image 
                  src={project.gallery[selectedImage]} 
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-jost font-medium ${
                    project.status === 'Upcoming' 
                      ? 'bg-[#CDA274] text-white' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              {/* Image Gallery Thumbnails */}
              <div className="flex gap-4">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 w-20 rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-[#CDA274]' : ''
                    }`}
                  >
                    <Image src={image} alt={`${project.title} ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold">
                    {project.title}
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-[#CDA274]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-jost text-lg text-[#4D5053]">{project.location}</span>
                </div>
              </div>

              <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                {project.fullDescription}
              </p>

              {/* Key Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#F4F0EC] rounded-2xl p-4">
                  <h3 className="font-dm-serif text-lg font-bold text-[#292F36] mb-2">Price Range</h3>
                  <p className="font-jost text-[#CDA274] font-semibold">{project.price}</p>
                </div>
                <div className="bg-[#F4F0EC] rounded-2xl p-4">
                  <h3 className="font-dm-serif text-lg font-bold text-[#292F36] mb-2">Area</h3>
                  <p className="font-jost text-[#4D5053]">{project.area}</p>
                </div>
                <div className="bg-[#F4F0EC] rounded-2xl p-4">
                  <h3 className="font-dm-serif text-lg font-bold text-[#292F36] mb-2">Configuration</h3>
                  <p className="font-jost text-[#4D5053]">{project.bedrooms}</p>
                </div>
                <div className="bg-[#F4F0EC] rounded-2xl p-4">
                  <h3 className="font-dm-serif text-lg font-bold text-[#292F36] mb-2">Status</h3>
                  <p className="font-jost text-[#4D5053]">{project.specifications.Possession}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {project.brochureUrl && (
                  <Link 
                    href={project.brochureUrl} 
                    target="_blank"
                    className="flex-1 bg-[#CDA274] text-white px-6 py-4 rounded-2xl font-jost font-semibold text-lg hover:bg-[#B8956A] transition text-center"
                  >
                    Download Brochure
                  </Link>
                )}
                <Link 
                  href="/contact"
                  className="flex-1 border-2 border-[#CDA274] text-[#CDA274] px-6 py-4 rounded-2xl font-jost font-semibold text-lg hover:bg-[#CDA274] hover:text-white transition text-center"
                >
                  Schedule Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold text-center mb-12">
            Amenities & Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.amenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="w-12 h-12 bg-[#CDA274] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-jost text-lg font-medium text-[#292F36]">{amenity}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold text-center mb-12">
            Project Specifications
          </h2>
          <div className="bg-[#F4F0EC] rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(project.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-4 border-b border-[#E7E7E7] last:border-b-0">
                  <span className="font-jost text-lg text-[#292F36] font-medium">{key}</span>
                  <span className="font-jost text-lg text-[#4D5053]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#292F36]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-dm-serif text-4xl md:text-5xl text-white font-bold mb-8">
            Interested in {project.title}?
          </h2>
          <p className="font-jost text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
            Get in touch with our expert team to learn more about this project and schedule a site visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg transition duration-300 inline-block text-center">
              Contact Us
            </Link>
            <Link href="/projects" className="border-2 border-white text-white hover:bg-white hover:text-[#292F36] font-inter font-semibold text-lg px-8 py-4 rounded-2xl transition duration-300 inline-block text-center">
              View Other Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
