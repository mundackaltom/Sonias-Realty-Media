export interface PropertyStructuredData {
  name: string;
  description: string;
  image: string[];
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
}

export function generatePropertyJsonLD(property: PropertyStructuredData) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": property.name,
    "description": property.description,
    "image": property.image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": property.address.streetAddress,
      "addressLocality": property.address.addressLocality,
      "addressRegion": property.address.addressRegion,
      "postalCode": property.address.postalCode,
      "addressCountry": property.address.addressCountry
    },
    "offers": {
      "@type": "Offer",
      "price": property.offers.price,
      "priceCurrency": property.offers.priceCurrency,
      "availability": property.offers.availability
    },
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Sonia's Realty Media",
      "telephone": "+91 90367 47821",
      "email": "soniasrealtymedia@gmail.com",
      "url": "https://soniasrealtymedia.com"
    }
  };
}

export function generateOrganizationJsonLD() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Sonia's Realty Media",
    "description": "Premium real estate services in Bengaluru with over 15 years of experience",
    "url": "https://soniasrealtymedia.com",
    "telephone": "+91 90367 47821",
    "email": "soniasrealtymedia@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Prestige Jindal City",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560073",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Sonia Jimmy"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bengaluru"
    },
    "serviceType": [
      "Property Search",
      "Real Estate Consultation",
      "Property Valuation",
      "Market Analysis"
    ]
  };
}