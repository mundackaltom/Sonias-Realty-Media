"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import Menu, { IMenu } from "./ui/navbar";

// Menu data matching the current site structure
const menuItems: IMenu[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About us",
    url: "/about",
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
    dropdown: true,
    items: [
      { id: 31, title: "Property Search", url: "/services/property-search" },
      { id: 32, title: "Financial Planning", url: "/services/financial-planning" },
      { id: 33, title: "Real Estate Investment", url: "/services/real-estate-investment" },
      { id: 34, title: "Asset Management", url: "/services/asset-management" },
    ]
  },
  {
    id: 4,
    title: "Projects",
    url: "/projects",
    dropdown: true,
    items: [
      { id: 41, title: "All Projects", url: "/projects" },
      { id: 42, title: "Upcoming Projects", url: "/projects?filter=upcoming" },
      { id: 43, title: "Completed Projects", url: "/projects?filter=completed" },
    ]
  },
  {
    id: 5,
    title: "Contact us",
    url: "/contact",
  }
];

interface SiteHeaderProps {
  onSearchOpen?: () => void;
  transparent?: boolean;
}

export default function SiteHeader({ onSearchOpen, transparent = false }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerClasses = transparent
    ? "fixed top-0 left-0 right-0 z-50 bg-transparent"
    : "bg-[#F4F0EC] shadow-sm";

  const textClasses = transparent
    ? "text-white"
    : "text-[#292F36]";

  const logoTextClasses = transparent
    ? "text-white font-bold"
    : "text-[#292F36] font-bold";

  return (
    <header className={`px-4 py-4 ${headerClasses}`}>
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
            <h1 className={`font-dm-serif text-sm sm:text-base md:text-lg lg:text-xl ${logoTextClasses} whitespace-nowrap`}>
              SONIA'S REALTY MEDIA
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className={`${textClasses} font-jost`}>
              <Menu list={menuItems} />
            </div>
          </div>

          {/* Search Icon & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Search Icon */}
            <button 
              onClick={onSearchOpen}
              className={`w-8 h-8 border-2 border-current rounded-full flex items-center justify-center hover:bg-white/10 transition flex-shrink-0 ${textClasses}`}
            >
              <span className="text-sm">🔍</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className={`w-6 h-0.5 mb-1 ${transparent ? 'bg-white' : 'bg-[#292F36]'}`}></div>
              <div className={`w-6 h-0.5 mb-1 ${transparent ? 'bg-white' : 'bg-[#292F36]'}`}></div>
              <div className={`w-6 h-0.5 ${transparent ? 'bg-white' : 'bg-[#292F36]'}`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <div key={item.id}>
                <Link 
                  href={item.url} 
                  className={`font-jost text-lg hover:text-[#C76904] transition ${
                    item.id === 1 ? 'text-[#C76904] font-medium' : textClasses
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {/* Mobile submenu */}
                {item.dropdown && item.items && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.items.map((subItem: IMenu) => (
                      <Link 
                        key={subItem.id}
                        href={subItem.url}
                        className={`block font-jost text-base ${textClasses} hover:text-[#C76904] transition`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}