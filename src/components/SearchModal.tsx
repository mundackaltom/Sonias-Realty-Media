"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface SearchResult {
  id: string;
  title: string;
  type: 'page' | 'project' | 'service';
  url: string;
  description: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchData: SearchResult[] = [
  // Pages
  { id: '1', title: 'Home', type: 'page', url: '/', description: 'Welcome to Sonia\'s Realty Media' },
  { id: '2', title: 'About Us', type: 'page', url: '/about', description: 'Learn about our company and team' },
  { id: '3', title: 'Services', type: 'page', url: '/services', description: 'Property search and real estate services' },
  { id: '4', title: 'Projects', type: 'page', url: '/projects', description: 'Explore our real estate projects' },
  { id: '5', title: 'Contact Us', type: 'page', url: '/contact', description: 'Get in touch with our team' },
  
  // Services
  { id: '6', title: 'Property Search', type: 'service', url: '/services', description: 'Find your perfect property with our advanced search' },
  { id: '7', title: 'Real Estate Consultation', type: 'service', url: '/contact', description: 'Expert advice for buying and selling' },
  { id: '8', title: 'Property Valuation', type: 'service', url: '/contact', description: 'Get accurate property valuations' },
  
  // Projects
  { id: '9', title: 'Riverside Towers', type: 'project', url: '/projects', description: 'Luxury 2-3 BHK apartments with river views' },
  { id: '10', title: 'Garden Heights', type: 'project', url: '/projects', description: 'Family friendly apartments close to parks' },
  { id: '11', title: 'Valencia Premium', type: 'project', url: '/projects', description: 'Premium residential project with world-class amenities' },
  { id: '12', title: 'Emerald Square', type: 'project', url: '/projects', description: 'Spacious family homes with gardens' },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filtered.slice(0, 8)); // Limit to 8 results
  }, [searchQuery]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page': return 'bg-blue-100 text-blue-800';
      case 'project': return 'bg-green-100 text-green-800';
      case 'service': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page': return '📄';
      case 'project': return '🏢';
      case 'service': return '⚙️';
      default: return '📋';
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-transparent z-50 flex items-start justify-center pt-20"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[20px] shadow-2xl w-full max-w-2xl mx-4 max-h-[70vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-6 border-b border-[#E7E7E7]">
          <div className="flex items-center gap-4">
            <span className="text-2xl">🔍</span>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for pages, projects, or services..."
              className="flex-1 font-jost text-[18px] outline-none placeholder-[#4D5053]"
            />
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-[#4D5053] hover:text-[#292F36] transition"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {searchQuery.trim() === '' ? (
            <div className="p-8 text-center">
              <span className="text-4xl mb-4 block">🔍</span>
              <p className="font-jost text-[18px] text-[#4D5053] mb-2">Start typing to search</p>
              <p className="font-jost text-[14px] text-[#9CA3AF]">
                Find pages, projects, services, and more
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center">
              <span className="text-4xl mb-4 block">😔</span>
              <p className="font-jost text-[18px] text-[#4D5053] mb-2">No results found</p>
              <p className="font-jost text-[14px] text-[#9CA3AF]">
                Try searching for something else
              </p>
            </div>
          ) : (
            <div className="p-4">
              <p className="font-jost text-[14px] text-[#9CA3AF] mb-4 px-2">
                {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
              </p>
              <div className="space-y-2">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    href={result.url}
                    onClick={onClose}
                    className="block p-4 rounded-[12px] hover:bg-[#F4F0EC] transition group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0 mt-1">
                        {getTypeIcon(result.type)}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-jost font-semibold text-[16px] text-[#292F36] group-hover:text-[#CDA274] transition">
                            {result.title}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-[10px] font-medium uppercase tracking-wide ${getTypeColor(result.type)}`}>
                            {result.type}
                          </span>
                        </div>
                        <p className="font-jost text-[14px] text-[#4D5053] line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Footer */}
        <div className="p-4 border-t border-[#E7E7E7] bg-[#F9F9F9]">
          <div className="flex items-center justify-between text-[12px] text-[#9CA3AF]">
            <span>Press ESC to close</span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white border border-[#E7E7E7] rounded text-[10px]">↑</kbd>
                <kbd className="px-2 py-1 bg-white border border-[#E7E7E7] rounded text-[10px]">↓</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white border border-[#E7E7E7] rounded text-[10px]">Enter</kbd>
                Select
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
