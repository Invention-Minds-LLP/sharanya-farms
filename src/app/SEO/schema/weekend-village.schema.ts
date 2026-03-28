export const WEEKEND_VILLAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Sharanya Weekend Village",
  "url": "https://www.sharanyafarms.com/weekend-village-farms",

  "description": "Sharanya Weekend Village is a managed farmland project designed for weekend living, relaxation, and nature-focused investment with peaceful surroundings.",

  "brand": {
    "@type": "Organization",
    "name": "Sharanya Farms",
    "url": "https://www.sharanyafarms.com"
  },

  "category": "Real Estate",

  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR",
    "url": "https://www.sharanyafarms.com/contact"
  },

  "areaServed": {
    "@type": "Place",
    "name": "Karnataka"
  },

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Project Type",
      "value": "Managed Farmland"
    },
    {
      "@type": "PropertyValue",
      "name": "Lifestyle",
      "value": "Weekend Living"
    },
    {
      "@type": "PropertyValue",
      "name": "Environment",
      "value": "Natural and Peaceful Surroundings"
    },
    {
      "@type": "PropertyValue",
      "name": "Investment Type",
      "value": "Lifestyle and Long Term"
    }
  ]
};