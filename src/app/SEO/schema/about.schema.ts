export const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "url": "https://www.sharanyafarms.com/about",
  "name": "About Sharanya Farms",

  "description": "Sharanya Farms is a managed farmland company offering premium agricultural land projects with sandalwood plantations, scenic landscapes, and sustainable investment opportunities.",

  "mainEntity": {
    "@type": "Organization",
    "name": "Sharanya Farms",
    "url": "https://www.sharanyafarms.com",
    "logo": "https://www.sharanyafarms.com/assets/logo.png",

    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9071235235",
      "contactType": "sales",
      "email": "sharanyafarms@gmail.com",
      "areaServed": "IN"
    },

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#1582, Samarth Arcade, 3rd Floor, BEML, 5th stage, H V Halli Double Road",
      "addressLocality": "Rajarajeshwari Nagar",
      "addressRegion": "Karnataka",
      "postalCode": "560098",
      "addressCountry": "IN"
    },

    "knowsAbout": [
      "Managed Farmland",
      "Farmland Investment",
      "Sandalwood Plantation",
      "Agricultural Land Development",
      "Sustainable Farming",
      "Farmland Projects"
    ],

    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Sharanya Farms Projects",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Sharanya Sandal Valley Farms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Sharanya Hill View Farms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Sharanya Weekend Village"
          }
        }
      ]
    }
  }
};