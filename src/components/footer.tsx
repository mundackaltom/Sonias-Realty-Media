"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#292F36] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#CDA274] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Sonia's Realty Media Logo"
                  width={64}
                  height={64}
                  className="object-contain rounded-full"
                />
              </div>
              <h3 className="font-dm-serif text-lg sm:text-xl text-white font-bold leading-tight">
                Sonia's Realty Media
              </h3>
            </Link>
            <p className="font-jost text-sm sm:text-base text-white/80 mb-4 sm:mb-6 leading-relaxed max-w-sm">
              Your trusted partner in real estate with over 15 years of experience in helping families find their perfect homes in Bengaluru.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-dm-serif text-base sm:text-lg text-white font-bold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/" className="font-jost text-sm sm:text-base text-white/80 hover:text-[#CDA274] transition">Home</Link></li>
              <li><Link href="/about" className="font-jost text-sm sm:text-base text-white/80 hover:text-[#CDA274] transition">About Us</Link></li>
              <li><Link href="/projects" className="font-jost text-sm sm:text-base text-white/80 hover:text-[#CDA274] transition">Projects</Link></li>
              <li><Link href="/services" className="font-jost text-sm sm:text-base text-white/80 hover:text-[#CDA274] transition">Services</Link></li>
              <li><Link href="/contact" className="font-jost text-sm sm:text-base text-white/80 hover:text-[#CDA274] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-dm-serif text-base sm:text-lg text-white font-bold mb-3 sm:mb-4">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/services/property-search" className="font-jost text-sm sm:text-base text-white/80 hover:text-[#CDA274] transition">Property Search</Link></li>
              <li><Link href="/services/financial-planning" className="font-jost text-sm sm:text-base text-white/80 hover:text-[#CDA274] transition">Financial Planning</Link></li>
              <li><Link href="/services/real-estate-investment" className="font-jost text-sm sm:text-base text-white/80 hover:text-[#CDA274] transition">Real Estate Investment</Link></li>
              <li><Link href="/services/asset-management" className="font-jost text-sm sm:text-base text-white/80 hover:text-[#CDA274] transition">Asset Management</Link></li>
              <li><Link href="/contact" className="font-jost text-sm sm:text-base text-white/80 hover:text-[#CDA274] transition">Real Estate Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-dm-serif text-base sm:text-lg text-white font-bold mb-3 sm:mb-4">Contact Info</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#CDA274] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <p className="font-jost text-sm sm:text-base text-white/80 leading-relaxed">
                  Prestige Jindal City,<br />
                  Bengaluru, Karnataka 560073
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#CDA274] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <a href="tel:+919036747821" className="font-jost text-sm sm:text-base text-white/80 hover:text-[#CDA274] transition">
                  +91 90367 47821
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#CDA274] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <a href="mailto:soniasrealtymedia@gmail.com" className="font-jost text-sm sm:text-base text-white/80 hover:text-[#CDA274] transition break-all sm:break-normal">
                  soniasrealtymedia@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-jost text-xs sm:text-sm text-white/60 text-center sm:text-left">
              © {new Date().getFullYear()} Sonia's Realty Media. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <Link href="/about" className="font-jost text-xs sm:text-sm text-white/60 hover:text-[#CDA274] transition">
                About
              </Link>
              <Link href="/projects" className="font-jost text-xs sm:text-sm text-white/60 hover:text-[#CDA274] transition">
                Projects
              </Link>
              <Link href="/contact" className="font-jost text-xs sm:text-sm text-white/60 hover:text-[#CDA274] transition">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
