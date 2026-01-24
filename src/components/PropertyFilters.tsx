"use client";

import { useState } from "react";

interface PropertyFiltersProps {
  onFilterChange: (filters: PropertyFilters) => void;
}

export interface PropertyFilters {
  priceRange: [number, number];
  propertyType: string[];
  location: string[];
  status: string[];
  bedrooms: string[];
}

export default function PropertyFilters({ onFilterChange }: PropertyFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<PropertyFilters>({
    priceRange: [0, 10000000],
    propertyType: [],
    location: [],
    status: [],
    bedrooms: []
  });

  const propertyTypes = ['Apartment', 'Villa', 'Penthouse', 'Studio'];
  const locations = ['Bengaluru', 'Whitefield', 'Electronic City', 'Marathahalli', 'Yeshwantpur'];
  const statuses = ['Upcoming', 'Ready to Move', 'Under Construction'];
  const bedroomOptions = ['1 BHK', '2 BHK', '3 BHK', '4+ BHK'];

  const updateFilters = (newFilters: Partial<PropertyFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-dm-serif text-2xl text-[#292F36] font-bold">Filters</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-[#CDA274] text-white px-4 py-2 rounded-lg font-jost"
        >
          {isOpen ? 'Hide' : 'Show'} Filters
        </button>
      </div>

      <div className={`space-y-6 ${isOpen ? 'block' : 'hidden md:block'}`}>
        {/* Price Range */}
        <div>
          <label className="block font-jost font-semibold text-lg text-[#292F36] mb-3">
            Price Range
          </label>
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Min Price"
              className="flex-1 border border-[#E7E7E7] rounded-lg px-3 py-2 font-jost"
              value={filters.priceRange[0] || ''}
              onChange={(e) => updateFilters({
                priceRange: [Number(e.target.value), filters.priceRange[1]]
              })}
            />
            <input
              type="number"
              placeholder="Max Price"
              className="flex-1 border border-[#E7E7E7] rounded-lg px-3 py-2 font-jost"
              value={filters.priceRange[1] || ''}
              onChange={(e) => updateFilters({
                priceRange: [filters.priceRange[0], Number(e.target.value)]
              })}
            />
          </div>
        </div>

        {/* Property Type */}
        <div>
          <label className="block font-jost font-semibold text-lg text-[#292F36] mb-3">
            Property Type
          </label>
          <div className="flex flex-wrap gap-2">
            {propertyTypes.map((type) => (
              <button
                key={type}
                onClick={() => {
                  const newTypes = filters.propertyType.includes(type)
                    ? filters.propertyType.filter(t => t !== type)
                    : [...filters.propertyType, type];
                  updateFilters({ propertyType: newTypes });
                }}
                className={`px-4 py-2 rounded-full font-jost text-sm transition ${
                  filters.propertyType.includes(type)
                    ? 'bg-[#CDA274] text-white'
                    : 'bg-[#F4F0EC] text-[#292F36] hover:bg-[#CDA274] hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block font-jost font-semibold text-lg text-[#292F36] mb-3">
            Location
          </label>
          <div className="flex flex-wrap gap-2">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => {
                  const newLocations = filters.location.includes(location)
                    ? filters.location.filter(l => l !== location)
                    : [...filters.location, location];
                  updateFilters({ location: newLocations });
                }}
                className={`px-4 py-2 rounded-full font-jost text-sm transition ${
                  filters.location.includes(location)
                    ? 'bg-[#CDA274] text-white'
                    : 'bg-[#F4F0EC] text-[#292F36] hover:bg-[#CDA274] hover:text-white'
                }`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block font-jost font-semibold text-lg text-[#292F36] mb-3">
            Status
          </label>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => {
                  const newStatuses = filters.status.includes(status)
                    ? filters.status.filter(s => s !== status)
                    : [...filters.status, status];
                  updateFilters({ status: newStatuses });
                }}
                className={`px-4 py-2 rounded-full font-jost text-sm transition ${
                  filters.status.includes(status)
                    ? 'bg-[#CDA274] text-white'
                    : 'bg-[#F4F0EC] text-[#292F36] hover:bg-[#CDA274] hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => {
            const defaultFilters: PropertyFilters = {
              priceRange: [0, 10000000],
              propertyType: [],
              location: [],
              status: [],
              bedrooms: []
            };
            setFilters(defaultFilters);
            onFilterChange(defaultFilters);
          }}
          className="w-full bg-gray-200 hover:bg-gray-300 text-[#292F36] font-jost font-semibold py-3 rounded-lg transition"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}