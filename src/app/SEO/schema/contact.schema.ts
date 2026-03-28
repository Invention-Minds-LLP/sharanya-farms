export const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://www.sharanyafarms.com/contact",
  "name": "Contact Sharanya Farms",

  "description": "Contact Sharanya Farms for managed farmland enquiries, site visits, and investment details.",

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
      "areaServed": "IN",
      "availableLanguage": ["English"]
    },

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#1582, Samarth Arcade, 3rd Floor, BEML, 5th stage, H V Halli Double Road",
      "addressLocality": "Rajarajeshwari Nagar",
      "addressRegion": "Karnataka",
      "postalCode": "560098",
      "addressCountry": "IN"
    },

    "sameAs": [
      "https://www.instagram.com/",
      "https://www.facebook.com/"
    ]
  }
};