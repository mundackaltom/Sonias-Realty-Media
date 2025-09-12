"use client";

import { useState } from "react";

interface InteractiveMapProps {
  address?: string;
  businessName?: string;
}

export default function InteractiveMap({ 
  address = "123 Real Estate Avenue, Business District, City 560001",
  businessName = "Sonia's Realty Media"
}: InteractiveMapProps) {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Generate Google Maps embed URL with business location
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6748537086893!2d77.59456931482278!3d13.067439390774842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d8d3bb8e63%3A0x7c5b4d6de2e6c5a0!2sBrigade%20Cornerstone%20Utopia!5e0!3m2!1sen!2sin!4v1636554800000!5m2!1sen!2sin`;
  
  // Generate direct Google Maps links
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
  const directionsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&navigate=yes`;

  return (
    <div className="w-full">
      {/* Map Container */}
      <div className="bg-[#F4F0EC] rounded-3xl overflow-hidden shadow-xl relative">
        {!isMapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#F4F0EC] z-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="font-jost text-lg text-[#4D5053]">Loading Interactive Map...</p>
            </div>
          </div>
        )}
        
        <iframe
          src={embedUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${businessName} Office Location`}
          className="w-full h-96 rounded-3xl"
          onLoad={() => setIsMapLoaded(true)}
        />
      </div>

      {/* Map Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <a 
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg transition duration-300 inline-flex items-center justify-center gap-3 group"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Open in Google Maps
        </a>
        
        <a 
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-[#CDA274] text-[#CDA274] hover:bg-[#CDA274] hover:text-white font-inter font-semibold text-lg px-8 py-4 rounded-2xl transition duration-300 inline-flex items-center justify-center gap-3 group"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Get Directions
        </a>
        
        <button 
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: `${businessName} Location`,
                text: `Visit us at ${address}`,
                url: googleMapsUrl,
              });
            } else {
              navigator.clipboard.writeText(`${businessName} - ${address}\n${googleMapsUrl}`);
              alert('Location details copied to clipboard!');
            }
          }}
          className="border-2 border-[#292F36] text-[#292F36] hover:bg-[#292F36] hover:text-white font-inter font-semibold text-lg px-8 py-4 rounded-2xl transition duration-300 inline-flex items-center justify-center gap-3 group"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
          Share Location
        </button>
      </div>

      {/* Quick Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="w-12 h-12 bg-[#CDA274] rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-dm-serif text-lg font-bold text-[#292F36] mb-2">Office Hours</h3>
          <p className="font-jost text-[#4D5053] text-sm leading-relaxed">
            Mon-Sat: 9AM-7PM<br />
            Sunday: 10AM-5PM
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="w-12 h-12 bg-[#CDA274] rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-dm-serif text-lg font-bold text-[#292F36] mb-2">Parking</h3>
          <p className="font-jost text-[#4D5053] text-sm leading-relaxed">
            Free parking available<br />
            Underground & street parking
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="w-12 h-12 bg-[#CDA274] rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="font-dm-serif text-lg font-bold text-[#292F36] mb-2">Contact</h3>
          <p className="font-jost text-[#4D5053] text-sm leading-relaxed">
            +91 98765 43210<br />
            info@soniasrealtymedia.com
          </p>
        </div>
      </div>
    </div>
  );
}
