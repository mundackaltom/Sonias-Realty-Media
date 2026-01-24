"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  currentPage?: 'home' | 'about' | 'services' | 'projects' | 'contact';
  onSearchOpen: () => void;
}

export default function Header({ currentPage = 'home', onSearchOpen }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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

  const isActive = (page: string) => currentPage === page;

  return (
    <header className="bg-[#F4F0EC] px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center gap-2 md:gap-4 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 md:w-[6.5rem] md:h-[6.5rem] bg-[#CDA274] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Sonia's Realty Media Logo"
                width={360}
                height={360}
                className="object-contain rounded-full scale-125"
              />
            </div>
            <h1 className="font-dm-serif text-sm sm:text-lg md:text-2xl lg:text-3xl text-[#292F36] font-bold whitespace-nowrap">
              SONIA'S REALTY MEDIA
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-jost text-lg transition ${
                isActive('home') 
                  ? 'text-[#C76904] font-medium' 
                  : 'text-[#292F36] hover:text-[#C76904]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`font-jost text-lg transition ${
                isActive('about') 
                  ? 'text-[#C76904] font-medium' 
                  : 'text-[#292F36] hover:text-[#C76904]'
              }`}
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
                className={`font-jost text-lg transition flex items-center gap-2 group ${
                  isActive('services')
                    ? 'text-[#C76904] font-medium'
                    : 'text-[#292F36] hover:text-[#C76904]'
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180' : ''
                  } group-hover:text-[#C76904]`}
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
                className={`font-jost text-lg transition flex items-center gap-2 group ${
                  isActive('projects')
                    ? 'text-[#C76904] font-medium'
                    : 'text-[#292F36] hover:text-[#C76904]'
                }`}
                onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
              >
                Projects
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    projectsDropdownOpen ? 'rotate-180' : ''
                  } group-hover:text-[#C76904]`}
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

            <Link 
              href="/contact" 
              className={`font-jost text-lg transition ${
                isActive('contact')
                  ? 'text-[#C76904] font-medium'
                  : 'text-[#292F36] hover:text-[#C76904]'
              }`}
            >
              Contact us
            </Link>
          </nav>

          {/* Search Icon */}
          <button 
            onClick={onSearchOpen}
            className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#292F36] rounded-full flex items-center justify-center hover:bg-[#292F36] hover:text-white transition flex-shrink-0"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-6 h-6 flex flex-col justify-center items-center flex-shrink-0"
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
            <Link 
              href="/" 
              className={`font-jost text-lg ${
                isActive('home') ? 'text-[#C76904] font-medium' : 'text-[#292F36]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`font-jost text-lg ${
                isActive('about') ? 'text-[#C76904] font-medium' : 'text-[#292F36]'
              }`}
            >
              About us
            </Link>
            <Link 
              href="/services" 
              className={`font-jost text-lg ${
                isActive('services') ? 'text-[#C76904] font-medium' : 'text-[#292F36]'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/projects" 
              className={`font-jost text-lg ${
                isActive('projects') ? 'text-[#C76904] font-medium' : 'text-[#292F36]'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className={`font-jost text-lg ${
                isActive('contact') ? 'text-[#C76904] font-medium' : 'text-[#292F36]'
              }`}
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}