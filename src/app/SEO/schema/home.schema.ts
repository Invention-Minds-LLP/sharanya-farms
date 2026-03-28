export const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sharanya Farms",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/assets/logo.png",

  "description": "Sharanya Farms offers managed farmland projects with sandalwood plantations, scenic landscapes, and weekend living concepts. Ideal for secure and sustainable long-term investment.",

  "keywords": [
    "managed farmland",
    "farmland investment",
    "sandalwood plantation investment",
    "premium farmland projects",
    "weekend farmland living",
    "agricultural land investment India"
  ],

  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 9071235235",
    "contactType": "customer support",
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

  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Farmland Projects",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Sharanya Sandal Valley Farms",
          "description": "Sandalwood plantation based managed farmland project offering high long-term returns."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Sharanya Hill View Farms",
          "description": "Scenic farmland project with natural surroundings and investment potential."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Sharanya Weekend Village",
          "description": "Weekend living farmland project designed for relaxation and lifestyle investment."
        }
      }
    ]
  }
};