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
}

export default function ProjectCard({ 
  id, 
  title, 
  location, 
  status, 
  description, 
  image, 
  brochureUrl, 
  youtubeUrl 
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-[25px] shadow-lg overflow-hidden hover:scale-105 transform transition border border-[#E7E7E7] group">
      {/* Clickable area for the main card */}
      <Link href={`/projects/${id}`} className="block">
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
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-dm-serif text-[25px] leading-[125%] text-[#292F36] font-normal group-hover:text-[#CDA274] transition-colors">{title}</h3>
            <span className="font-jost text-[16px] text-[#4D5053] bg-[#F4F0EC] px-3 py-1 rounded-full">
              {location}
            </span>
          </div>
          <p className="font-jost text-[18px] leading-[27px] text-[#4D5053] mb-6">{description}</p>
        </div>
      </Link>
      
      {/* Action buttons - separate from clickable area */}
      <div className="px-6 pb-6">
        <div className="flex gap-3">
          {brochureUrl && (
            <Link 
              href={brochureUrl} 
              target="_blank"
              onClick={(e) => e.stopPropagation()} // Prevent card click when clicking button
              className="flex-1 bg-[#CDA274] text-white px-4 py-3 rounded-[18px] font-jost font-semibold text-[14px] hover:bg-[#B8956A] transition text-center"
            >
              Download Brochure
            </Link>
          )}
          {youtubeUrl && (
            <Link 
              href={youtubeUrl} 
              target="_blank"
              onClick={(e) => e.stopPropagation()} // Prevent card click when clicking button
              className="flex-1 border-2 border-[#CDA274] text-[#CDA274] px-4 py-3 rounded-[18px] font-jost font-semibold text-[14px] hover:bg-[#CDA274] hover:text-white transition text-center"
            >
              Watch Video
            </Link>
          )}
          <Link 
            href={`/projects/${id}`}
            className="flex-1 bg-[#292F36] text-white px-4 py-3 rounded-[18px] font-jost font-semibold text-[14px] hover:bg-[#4D5053] transition text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
