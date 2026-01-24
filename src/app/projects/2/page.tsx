"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchModal from "../../../components/SearchModal";
import BrochureModal from "../../../components/BrochureModal";
import InteractiveMap from "../../../components/InteractiveMap";

// Brigade Avalon uses the same layout/sections as Brigade Valencia, just with Avalon-specific data
const avalonProject = {
  id: "2",
  title: "Brigade Avalon",
  location: "Electronic City, Bengaluru",
  status: "Upcoming",
  description:
    "Luxury residential development with premium amenities and strategic location near IT hubs.",
  fullDescription:
    "Brigade Avalon represents the perfect fusion of luxury and convenience in Electronic City. This prestigious development is strategically positioned to serve the bustling IT corridor while providing a serene residential environment. With its proximity to major tech companies, excellent connectivity, and world-class amenities, Brigade Avalon offers an ideal living experience for modern professionals and families.",
  image: "/images/brigade_avalon/brigade_avalon_1.jpeg",
  gallery: [
    "/images/brigade_avalon/brigade_avalon_1.jpeg",
    "/images/brigade_avalon/brigade_avalon_2.jpeg",
    "/images/brigade_avalon/brigade_avalon_3.jpeg",
    "/images/brigade_avalon/brigade_avalon_4.jpeg",
    "/images/brigade_avalon/brigade_avalon_5.jpeg",
    "/images/brigade_avalon/brigade_avalon_6.jpeg",
    "/images/brigade_avalon/brigade_avalon_7.jpeg",
    "/images/brigade_avalon/brigade_avalon_8.jpeg",
    "/images/brigade_avalon/brigade_avalon_9.jpeg",
    "/images/brigade_avalon/brigade_avalon_10.jpeg",
    "/images/brigade_avalon/brigade_avalon_11.jpeg",
    "/images/brigade_avalon/brigade_avalon_12.jpeg",
    "/images/brigade_avalon/brigade_avalon_13.jpeg",
    "/images/brigade_avalon/brigade_avalon_14.jpeg",
    "/images/brigade_avalon/brigade_avalon_15.jpeg",
    "/images/brigade_avalon/brigade_avalon_16.jpeg",
    "/images/brigade_avalon/brigade_avalon_17.jpeg",
    "/images/brigade_avalon/brigade_avalon_18.jpeg",
    "/images/brigade_avalon/brigade_avalon_19.jpeg",
    "/images/brigade_avalon/brigade_avalon_20.jpeg"
  ],
  brochureUrl: "/brochures/Brigade Avalon.pdf",
  youtubeUrl: "https://youtu.be/Uk87MZBi1KA?si=GNQH4RJN3jLTy8xf",
  price: "Starting from ₹1.2 Crores",
  area: "1,400 - 2,200 sq ft",
  bedrooms: "2-3 BHK",
  amenities: [
    "Swimming Pool",
    "State-of-the-art Gym",
    "Multipurpose Hall",
    "Children's Play Area",
    "Jogging Track",
    "Landscaped Gardens",
    "24/7 Security",
    "Power Backup",
    "Clubhouse",
    "Indoor Games",
    "Yoga/Meditation Hall",
    "Senior Citizen Area",
  ],
  specifications: {
    "Total Floors": "38 Floors",
    "Total Units": "280 Units",
    Possession: "December 2025",
    "RERA Registration": "PRM/KA/RERA/1251/310/PR/200701/004231",
  },
  address: "Brigade Avalon, Electronic City, Bengaluru 560100",
};

export default function BrigadeAvalonPage() {
  const project = avalonProject;

  const [isClient, setIsClient] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-white">
      {/* Header – identical to Brigade Valencia detail header */}
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
                  className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition flex items-center gap-1 group"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
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
                {servicesDropdownOpen && isClient && (
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
                  className="font-jost text-base text-[#C76904] font-medium hover:text-[#292F36] transition flex items-center gap-1 group"
                  onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                >
                  Projects
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      projectsDropdownOpen ? "rotate-180" : ""
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
                {projectsDropdownOpen && isClient && (
                  <div className="absolute top-full left-0 mt-1 w-44 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link
                      href="/projects"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      All Projects
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
              <Link href="/" className="font-jost text-lg text-[#292F36]">
                Home
              </Link>
              <Link href="/about" className="font-jost text-lg text-[#292F36]">
                About us
              </Link>
              <Link
                href="/services"
                className="font-jost text-lg text-[#292F36]"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="font-jost text-lg text-[#C76904] font-medium"
              >
                Projects
              </Link>
              <Link href="/contact" className="font-jost text-lg text-[#292F36]">
                Contact us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero / Detail Section – cloned from Brigade Valencia */}
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
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-jost font-medium ${
                      project.status === "Upcoming"
                        ? "bg-[#CDA274] text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
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
                      selectedImage === index ? "ring-2 ring-[#CDA274]" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
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
                  <svg
                    className="w-5 h-5 text-[#CDA274]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-jost text-lg text-[#4D5053]">
                    {project.location}
                  </span>
                </div>
              </div>

              <p className="font-jost text-lg text-[#4D5053] leading-relaxed text-justify">
                {project.fullDescription}
              </p>

              {/* Key Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#F4F0EC] rounded-2xl p-4">
                  <h3 className="font-dm-serif text-lg font-bold text-[#292F36] mb-2">
                    Price Range
                  </h3>
                  <p className="font-jost text-[#CDA274] font-semibold">
                    {project.price}
                  </p>
                </div>
                <div className="bg-[#F4F0EC] rounded-2xl p-4">
                  <h3 className="font-dm-serif text-lg font-bold text-[#292F36] mb-2">
                    Area
                  </h3>
                  <p className="font-jost text-[#4D5053]">{project.area}</p>
                </div>
                <div className="bg-[#F4F0EC] rounded-2xl p-4">
                  <h3 className="font-dm-serif text-lg font-bold text-[#292F36] mb-2">
                    Configuration
                  </h3>
                  <p className="font-jost text-[#4D5053]">{project.bedrooms}</p>
                </div>
                <div className="bg-[#F4F0EC] rounded-2xl p-4">
                  <h3 className="font-dm-serif text-lg font-bold text-[#292F36] mb-2">
                    Status
                  </h3>
                  <p className="font-jost text-[#4D5053]">
                    {project.specifications.Possession}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {project.brochureUrl && (
                  <button
                    onClick={() => setIsBrochureModalOpen(true)}
                    className="flex-1 border-2 border-[#CDA274] text-[#CDA274] px-6 py-4 rounded-2xl font-jost font-semibold text-lg hover:bg-[#CDA274] hover:text-white transition text-center"
                  >
                    Download Brochure
                  </button>
                )}
                {project.youtubeUrl && (
                  <Link
                    href={project.youtubeUrl}
                    target="_blank"
                    className="flex-1 border-2 border-[#CDA274] text-[#CDA274] px-6 py-4 rounded-2xl font-jost font-semibold text-lg hover:bg-[#CDA274] hover:text-white transition text-center flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a2.92 2.92 0 0 0-2.057-2.057C19.706 3.75 12 3.75 12 3.75s-7.706 0-9.441.379a2.92 2.92 0 0 0-2.057 2.057C.123 7.921.123 12 .123 12s0 4.079.379 5.814a2.92 2.92 0 0 0 2.057 2.057C4.294 20.25 12 20.25 12 20.25s7.706 0 9.441-.379a2.92 2.92 0 0 0 2.057-2.057C23.877 16.079 23.877 12 23.877 12s0-4.079-.379-5.814zM9.75 15.75V8.25L15.75 12l-6 3.75z" />
                    </svg>
                    Watch Video
                  </Link>
                )}
                <Link
                  href="/contact"
                  className="flex-1 bg-[#CDA274] text-white px-6 py-4 rounded-2xl font-jost font-semibold text-lg hover:bg-[#B8956A] transition text-center flex items-center justify-center"
                >
                  Schedule Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section – same component structure as Valencia */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold text-center mb-12">
            Amenities & Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.amenities.map((amenity, index) => {
              const getAmenityIcon = (amenityName: string) => {
                const name = amenityName.toLowerCase();
                if (name.includes("pool") || name.includes("swimming")) {
                  return (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2 15c1.67-2.33 3.67-3.5 6-3.5s4.33 1.17 6 3.5c1.67-2.33 3.67-3.5 6-3.5v2c-1.67 0-3 1.17-4 2.5-1-1.33-2.33-2.5-4-2.5s-3 1.17-4 2.5c-1-1.33-2.33-2.5-4-2.5v-2zm0 4c1.67-2.33 3.67-3.5 6-3.5s4.33 1.17 6 3.5c1.67-2.33 3.67-3.5 6-3.5v2c-1.67 0-3 1.17-4 2.5-1-1.33-2.33-2.5-4-2.5s-3 1.17-4 2.5c-1-1.33-2.33-2.5-4-2.5v-2z" />
                    </svg>
                  );
                } else if (
                  name.includes("fitness") ||
                  name.includes("gym") ||
                  name.includes("center")
                ) {
                  return (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a1 1 0 001 1h8a1 1 0 001-1V7M9 7h6M9 11h6m-6 4h6"
                      />
                    </svg>
                  );
                } else if (
                  name.includes("security") ||
                  name.includes("24/7")
                ) {
                  return (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  );
                } else if (
                  name.includes("parking") ||
                  name.includes("car")
                ) {
                  return (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  );
                } else if (
                  name.includes("garden") ||
                  name.includes("park") ||
                  name.includes("green")
                ) {
                  return (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  );
                } else if (
                  name.includes("hall") ||
                  name.includes("community") ||
                  name.includes("club")
                ) {
                  return (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  );
                } else if (
                  name.includes("play") ||
                  name.includes("kids") ||
                  name.includes("child")
                ) {
                  return (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  );
                } else if (
                  name.includes("power") ||
                  name.includes("backup") ||
                  name.includes("generator")
                ) {
                  return (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  );
                } else if (
                  name.includes("basketball") ||
                  name.includes("sport") ||
                  name.includes("court")
                ) {
                  return (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  );
                } else if (
                  name.includes("intercom") ||
                  name.includes("communication")
                ) {
                  return (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  );
                } else if (
                  name.includes("jogging") ||
                  name.includes("track") ||
                  name.includes("running")
                ) {
                  return (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  );
                } else {
                  // Default icon for unmatched amenities
                  return (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  );
                }
              };

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg"
                >
                  <div className="w-12 h-12 bg-[#CDA274] rounded-xl flex items-center justify-center mx-auto mb-3">
                    {getAmenityIcon(amenity)}
                  </div>
                  <h3 className="font-jost text-lg font-medium text-[#292F36]">
                    {amenity}
                  </h3>
                </div>
              );
            })}
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
                <div
                  key={key}
                  className="flex justify-between items-center py-4 border-b border-[#E7E7E7] last:border-b-0"
                >
                  <span className="font-jost text-lg text-[#292F36] font-medium">
                    {key}
                  </span>
                  <span className="font-jost text-lg text-[#4D5053]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-[#292F36] font-bold mb-6">
              Project Location
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Visit us at our conveniently located project site for personalized
              consultation and assistance.
            </p>
          </div>

          {/* Interactive Map */}
          <div className="mb-8">
            <InteractiveMap address={project.address} businessName={project.title} />
          </div>
        </div>
      </section>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      
      {/* Brochure Modal */}
      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        projectTitle={project.title}
        brochureUrl={project.brochureUrl || '#'}
      />
    </div>
  );
}