"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CompanyLogo {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

// Real company logos - partners and collaborators
const companies: CompanyLogo[] = [
  { id: 1, name: "Total Environment", logo: "/images/total environment.png", website: "https://totalenvironment.com" },
  { id: 2, name: "Brigade", logo: "/images/brigade.png", website: "https://brigade.in" },
  { id: 3, name: "Puravankara", logo: "/images/puravankara.png", website: "https://puravankara.com" },
  { id: 4, name: "Century", logo: "/images/century-new.png", website: "https://centuryrealestate.com" },
  { id: 5, name: "Godrej", logo: "/images/godrej.png", website: "https://godrejproperties.com" },
  { id: 6, name: "Sobha", logo: "/images/sobha.png", website: "https://sobha.com" },
  { id: 7, name: "Prestige", logo: "/images/prestige.png", website: "https://prestigeconstructions.com" },
];

export default function CompanyStrip() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Duplicate the companies array to create seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  if (!isClient) {
    return null;
  }

  return (
    <section className="py-8 md:py-12 bg-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-dm-serif text-xl sm:text-2xl md:text-3xl text-[#292F36] font-bold mb-2 md:mb-4">
            Trusted Partners & Collaborators
          </h2>
          <p className="font-jost text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            We work with industry-leading companies to deliver exceptional real estate solutions.
          </p>
        </div>

        {/* Scrolling Company Logos */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-slate-100 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-slate-100 to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="overflow-hidden touch-pan-y">
            <div className="flex animate-scroll-infinite whitespace-nowrap" style={{ gap: 'clamp(1rem, 4vw, 3rem)' }}>
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company.id}-${index}`}
                  className="flex-shrink-0 group cursor-pointer touch-manipulation"
                  title={company.name}
                >
                  <div className={`flex items-center justify-center ${
                    company.name === 'Puravankara' 
                      ? 'w-32 sm:w-40 md:w-48 lg:w-56 h-16 sm:h-20 md:h-24 lg:h-32 p-1 sm:p-2 -translate-y-2 sm:-translate-y-3 md:-translate-y-4' 
                      : company.name === 'Godrej' 
                      ? 'w-20 sm:w-24 md:w-32 lg:w-36 h-10 sm:h-12 md:h-16 lg:h-20 p-2 sm:p-3 translate-y-1 sm:translate-y-1.5 md:translate-y-2' 
                      : company.name === 'Sobha' 
                      ? 'w-20 sm:w-24 md:w-32 lg:w-36 h-10 sm:h-12 md:h-16 lg:h-20 p-2 sm:p-3 translate-y-1.5 sm:translate-y-2 md:translate-y-3' 
                      : company.name === 'Prestige' 
                      ? 'w-20 sm:w-24 md:w-32 lg:w-36 h-10 sm:h-12 md:h-16 lg:h-20 p-2 sm:p-3' 
                      : company.name === 'Total Environment' 
                      ? 'w-24 sm:w-28 md:w-36 lg:w-40 h-12 sm:h-14 md:h-20 lg:h-24 p-2 sm:p-3 translate-y-1 sm:translate-y-1.5 md:translate-y-2' 
                      : company.name === 'Century' 
                      ? 'w-24 sm:w-28 md:w-36 lg:w-40 h-12 sm:h-14 md:h-20 lg:h-24 p-2 sm:p-3 -translate-y-1 sm:-translate-y-1.5 md:-translate-y-2' 
                      : company.name === 'Brigade' 
                      ? 'w-20 sm:w-24 md:w-32 lg:w-36 h-10 sm:h-12 md:h-16 lg:h-20 p-2 sm:p-3' 
                      : 'w-24 sm:w-28 md:w-36 lg:w-40 h-12 sm:h-14 md:h-20 lg:h-24 p-2 sm:p-3'
                  }`}>
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={company.name === 'Puravankara' ? 220 : company.name === 'Sobha' ? 110 : company.name === 'Prestige' ? 110 : company.name === 'Total Environment' ? 140 : company.name === 'Brigade' ? 110 : company.name === 'Godrej' ? 110 : 140}
                      height={company.name === 'Puravankara' ? 110 : company.name === 'Sobha' ? 55 : company.name === 'Prestige' ? 55 : company.name === 'Total Environment' ? 70 : company.name === 'Brigade' ? 55 : company.name === 'Godrej' ? 55 : 70}
                      className={`object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 w-full h-auto max-w-full max-h-full ${
                        company.name === 'Prestige' || company.name === 'Brigade' || company.name === 'Godrej' || company.name === 'Sobha' ? 'scale-90' : ''
                      }`}
                      priority={index < 4}
                      sizes="(max-width: 640px) 80px, (max-width: 768px) 120px, (max-width: 1024px) 140px, 180px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional call to action */}
        <div className="text-center mt-8">
          <p className="font-jost text-gray-600 mb-4">
            Want to partner with us?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#CDA274] text-white px-6 py-3 rounded-xl font-jost font-semibold hover:bg-[#B8956A] transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}