import { retainerPackages } from "@/lib/data/retainer";
import { brandAliases } from "@/lib/data/brandIndex";
import { faqItems } from "@/lib/data/faq";
import { localServiceBlocks, searchPhrases } from "@/lib/data/seoContent";
import { siteContent } from "@/lib/data/content";
import { media } from "./data/media";

export const siteUrl = "https://sparshedits.com";

export { faqItems };

export const seoConfig = {
  siteName: "Sparsh Edits",
  title: "Sparsh Sharma | Sparsh Edits — Official Website | sparshedits.com",
  titleTemplate: "%s | Sparsh Sharma — Sparsh Edits",
  description:
    "Official website of Sparsh Sharma — Sparsh Edits (sparshedits.com). Bengaluru AI reel editor for Instagram Reels, YouTube Shorts, motion graphics & monthly video editing across India. Hire Sparsh Sharma today.",
  keywords: [
    ...brandAliases,
    ...searchPhrases,
    "Sparsh Sharma official website",
    "Sparsh Edits contact",
    "Sparsh Sharma hire",
    "sparsh sharma edits",
    "sparsh sharma ai",
    "sparsh sharma reels",
    "sparsh sharma portfolio website",
    "sparsh sharma video editing",
    "sparsh sharma motion graphics bengaluru",
    "sparsh edits official",
    "sparsh edits website",
    "sparsh edits contact",
    "sparshedits",
    "sparshedits.com",
  ],
  locale: "en_IN",
  geo: {
    region: "IN-KA",
    placename: "Bengaluru",
    country: "India",
  },
} as const;

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: siteContent.name,
    alternateName: [...brandAliases],
    jobTitle: "AI Reel Editor & Short-form Video Editor",
    description: seoConfig.description,
    url: siteUrl,
    email: siteContent.email,
    image: media.ogImage,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946,
    },
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "AI reel editing",
      "AI-assisted video production",
      "Instagram Reels editing",
      "YouTube Shorts editing",
      "Short-form social media content",
      "Motion graphics",
      "Video color correction",
      "Talking-head video editing",
      "Monthly video editing retainer",
    ],
    sameAs: [
      siteContent.social.linkedin,
      siteContent.social.instagram,
      siteContent.social.behance,
      siteUrl,
    ],
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Sparsh Edits",
    alternateName: [...brandAliases],
    description: seoConfig.description,
    url: siteUrl,
    email: siteContent.email,
    image: media.ogImage,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bengaluru",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946,
    },
    areaServed: ["Bengaluru", "Bangalore", "Karnataka", "India"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    founder: { "@id": `${siteUrl}/#person` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Video Editing Packages",
      itemListElement: retainerPackages.map((pkg) => ({
        "@type": "Offer",
        name: `${pkg.name} — ${pkg.reelsPerMonth} reels/month`,
        price: pkg.priceInr,
        priceCurrency: "INR",
        description: pkg.includes.join(", "),
        url: `${siteUrl}/#retainer`,
      })),
    },
  };
}

export function getProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: "Sparsh Edits — AI Reel & Short-Form Video Editing",
    alternateName: siteContent.name,
    description: seoConfig.description,
    url: siteUrl,
    email: siteContent.email,
    image: media.ogImage,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
      { "@type": "Country", name: "India" },
    ],
    serviceType: localServiceBlocks.map((b) => b.heading),
    provider: { "@id": `${siteUrl}/#person` },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: seoConfig.siteName,
    alternateName: [...brandAliases],
    url: siteUrl,
    description: seoConfig.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${siteUrl}/#person` },
  };
}

export function getItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sparsh Edits — Video Editing Services in Bengaluru",
    description: "Short-form and AI reel editing services offered in Bengaluru, India",
    itemListElement: localServiceBlocks.map((block, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: block.heading,
      description: block.body,
      url: `${siteUrl}/#${block.id}`,
    })),
  };
}

export function getProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile`,
    name: `${siteContent.name} — ${siteContent.brand}`,
    description: seoConfig.description,
    url: siteUrl,
    mainEntity: { "@id": `${siteUrl}/#person` },
    inLanguage: "en-IN",
    about: { "@id": `${siteUrl}/#person` },
    isPartOf: { "@id": `${siteUrl}/#website` },
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
