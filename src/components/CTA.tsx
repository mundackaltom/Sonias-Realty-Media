"use client";

import Link from "next/link";

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTA({
  title = "Ready to Find Your Dream Home?",
  description = "Contact us today to start your real estate journey with expert guidance and personalized service.",
  primaryButtonText = "Schedule Consultation",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Browse Properties",
  secondaryButtonLink = "/projects"
}: CTAProps) {
  return (
    <section className="py-20 bg-[#292F36]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-dm-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 sm:mb-8">
          {title}
        </h2>
        <p className="font-jost text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
          <Link 
            href={primaryButtonLink} 
            className="bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg transition duration-300 inline-block text-center"
          >
            {primaryButtonText}
          </Link>
          <Link 
            href={secondaryButtonLink} 
            className="border-2 border-white text-white hover:bg-white hover:text-[#292F36] font-inter font-semibold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition duration-300 inline-block text-center"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}