"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface BankLogo {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

// Bank partners - you can add actual bank logos later
const banks: BankLogo[] = [
  { id: 1, name: "HDFC Bank", logo: "/images/hdfc.png", website: "https://hdfcbank.com" },
  { id: 2, name: "ICICI Bank", logo: "/images/icici bank.png", website: "https://icicibank.com" },
  { id: 3, name: "SBI", logo: "/images/sbi.png", website: "https://sbi.co.in" },
  { id: 4, name: "Axis Bank", logo: "/images/axis bank.png", website: "https://axisbank.com" },
  { id: 5, name: "Union Bank", logo: "/images/union-bank.png", website: "https://unionbankofindia.co.in" },
  { id: 6, name: "Canara Bank", logo: "/images/canara bank.png", website: "https://canarabank.com" },
];

export default function BankStrip() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Create enough duplicates for truly seamless infinite scroll
  const duplicatedBanks = [...banks, ...banks, ...banks, ...banks];

  if (!isClient) {
    return null;
  }

  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-dm-serif text-xl sm:text-2xl md:text-3xl text-[#292F36] font-bold mb-3 md:mb-4">
            Banking Partners
          </h2>
          <p className="font-jost text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            We collaborate with leading banks to provide seamless financing solutions for your property investments.
          </p>
        </div>

        {/* Scrolling Bank Logos */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="bank-strip-wrapper overflow-hidden touch-pan-y">
            <div className="flex animate-scroll-infinite whitespace-nowrap" style={{ gap: 'clamp(1rem, 4vw, 3rem)' }}>
              {duplicatedBanks.map((bank, index) => (
                <div
                  key={`${bank.id}-${index}`}
                  className="flex-shrink-0 group cursor-pointer bank-container touch-manipulation"
                  title={bank.name}
                >
                  <div className="w-24 sm:w-32 md:w-36 lg:w-40 h-16 sm:h-20 md:h-22 lg:h-24 flex items-center justify-center p-2 sm:p-3">
                    <Image
                      src={bank.logo}
                      alt={`${bank.name} logo`}
                      width={bank.name === "Canara Bank" ? 110 : bank.name === "SBI" ? 110 : bank.name === "HDFC Bank" ? 95 : bank.name === "ICICI Bank" ? 110 : bank.name === "Axis Bank" ? 110 : 140}
                      height={bank.name === "Canara Bank" ? 55 : bank.name === "SBI" ? 55 : bank.name === "HDFC Bank" ? 48 : bank.name === "ICICI Bank" ? 55 : bank.name === "Axis Bank" ? 55 : 70}
                      className={`object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 w-full h-auto max-w-full max-h-full ${
                        bank.name === "Canara Bank" || bank.name === "SBI" || bank.name === "ICICI Bank" || bank.name === "Axis Bank" ? "scale-90" : bank.name === "HDFC Bank" ? "scale-75" : ""
                      }`}
                      priority={index < 4}
                      sizes="(max-width: 640px) 80px, (max-width: 768px) 120px, (max-width: 1024px) 140px, 160px"
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
            Need financing assistance?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#CDA274] text-white px-6 py-3 rounded-xl font-jost font-semibold hover:bg-[#B8956A] transition"
          >
            Get Financial Guidance
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 20s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
        }

        /* Ensure smooth rendering */
        .bank-container {
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Force hardware acceleration */
        .bank-strip-wrapper {
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
          overflow: hidden;
          position: relative;
        }
      `}</style>
    </section>
  );
}