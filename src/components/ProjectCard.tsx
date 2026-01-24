"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  status: string;
  description: string;
  image: string;
  brochureUrl?: string;
  youtubeUrl?: string;
  onBrochureClick?: (projectTitle: string, brochureUrl: string) => void;
}

export default function ProjectCard({ 
  id, 
  title, 
  location, 
  status, 
  description, 
  image, 
  brochureUrl, 
  youtubeUrl,
  onBrochureClick
}: ProjectCardProps) {

  const handleBrochureClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onBrochureClick && brochureUrl) {
      onBrochureClick(title, brochureUrl);
    }
  };

  return (
    <div className="bg-white rounded-[25px] shadow-lg overflow-hidden hover:scale-105 transform transition border border-[#E7E7E7] group flex flex-col h-full">
      {/* Clickable area for the main card */}
  <Link href={`/projects/${id}`} className="block flex-1 flex flex-col">
        <div className="relative h-64 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-jost font-medium ${
              status === 'Upcoming' 
                ? 'bg-[#CDA274] text-white' 
                : 'bg-green-500 text-white'
            }`}>
              {status}
            </span>
          </div>
          {/* Overlay for better hover effect */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
        </div>
        <div className="p-4 sm:p-6 flex flex-col flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-3">
            <h3 className="font-dm-serif text-lg sm:text-xl lg:text-[25px] leading-[125%] text-[#292F36] font-normal group-hover:text-[#CDA274] transition-colors">{title}</h3>
            <span className="font-jost text-sm sm:text-[16px] text-[#4D5053] bg-[#F4F0EC] px-2 sm:px-3 py-1 rounded-full whitespace-nowrap self-start">
              {location}
            </span>
          </div>
          <p className="font-jost text-sm sm:text-base lg:text-[18px] leading-[27px] text-[#4D5053] mb-4 sm:mb-6">{description}</p>
        </div>
      </Link>
      
      {/* Action buttons - separate from clickable area */}
      <div className="px-4 sm:px-6 pb-4 sm:pb-6 mt-auto">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-center justify-center">
          {brochureUrl && (
            <button 
              onClick={handleBrochureClick}
              className="flex-1 bg-[#CDA274] text-white px-3 sm:px-4 py-2 sm:py-3 rounded-[18px] font-jost font-semibold text-xs sm:text-[14px] hover:bg-[#B8956A] transition text-center"
            >
              Download Brochure
            </button>
          )}
          {youtubeUrl && (
            <Link 
              href={youtubeUrl} 
              target="_blank"
              onClick={(e) => e.stopPropagation()} // Prevent card click when clicking button
              className="flex-1 border-2 border-[#CDA274] text-[#CDA274] px-3 sm:px-4 py-2 sm:py-3 rounded-[18px] font-jost font-semibold text-xs sm:text-[14px] hover:bg-[#CDA274] hover:text-white transition text-center"
            >
              Watch Video
            </Link>
          )}
          <Link 
            href={`/projects/${id}`}
            className="flex-1 bg-[#292F36] text-white px-3 sm:px-4 py-2 sm:py-3 rounded-[18px] font-jost font-semibold text-xs sm:text-[14px] hover:bg-[#4D5053] transition text-center flex items-center justify-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
