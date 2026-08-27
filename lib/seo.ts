import { siteContent } from "@/lib/data/content";
import { media } from "./data/media";

export const siteUrl = "https://sparshedits.com";

export const seoConfig = {
  siteName: "Sparsh Edits",
  title:
    "Sparsh Sharma | Reels & AI Short-Form Video Editor in Bengaluru, India",
  titleTemplate: "%s | Sparsh Edits",
  description:
    "Sparsh Sharma (Sparsh Edits) is a Bengaluru-based short-form video editor for Instagram Reels, YouTube Shorts, AI-assisted video, and motion graphics. Monthly retainer packages for brands, creators, and agencies across India.",
  keywords: [
    "short-form video editor Bengaluru",
    "reels editor India",
    "Instagram Reels editor Bangalore",
    "YouTube Shorts editor India",
    "AI video editor Bengaluru",
    "AI reels creator India",
    "motion graphics designer Bangalore",
    "social media video editor India",
    "monthly reels editing retainer",
    "talking head video editor",
    "restaurant reels editor Bengaluru",
    "freelance video editor Bangalore",
    "Sparsh Sharma video editor",
    "Sparsh Edits",
    "short-form content creator India",
    "video editing services Bengaluru",
  ],
  locale: "en_IN",
  geo: {
    region: "IN-KA",
    placename: "Bengaluru",
    country: "India",
  },
} as const;

export const faqItems = [
  {
    question: "Who is the best short-form video editor in Bengaluru for Reels?",
    answer:
      "Sparsh Sharma (Sparsh Edits) is a Bengaluru-based short-form video editor specializing in Instagram Reels, YouTube Shorts, talking-head edits, and motion graphics for brands, creators, and agencies across India.",
  },
  {
    question: "Does Sparsh Edits offer AI-assisted short-form video editing?",
    answer:
      "Yes. Sparsh creates AI-enhanced reels and AI-assisted social content — blending generative visuals with professional editing, captions, color grading, and sound design for faster turnaround.",
  },
  {
    question: "Can I hire a monthly reels editor in India?",
    answer:
      "Yes. Sparsh Edits offers monthly retainer packages from 10 to 30+ reels per month, including editing, motion graphics, captions, color correction, and sound design — ideal for restaurants, creators, and agencies.",
  },
  {
    question: "What types of short-form content does Sparsh Edits produce?",
    answer:
      "Restaurant reels, product reels, talking-head and podcast clips, event recaps, fashion content, motion graphics reels, and AI-enhanced social videos — delivered for Instagram, YouTube Shorts, and TikTok.",
  },
  {
    question: "Is Sparsh Edits available for clients outside Bengaluru?",
    answer:
      "Yes. Sparsh is based in Bengaluru, India, and works with clients across India and remotely worldwide. Raw footage can be shared via Google Drive or Dropbox.",
  },
  {
    question: "How do I hire Sparsh Sharma for video editing?",
    answer:
      `Contact Sparsh at ${siteContent.email} or use the quote form at sparshedits.com. Share your reel count, content type, and raw footage link for a reply within 24 hours.`,
  },
] as const;

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteContent.name,
    jobTitle: "Short-form Video Editor & Motion Designer",
    description: seoConfig.description,
    url: siteUrl,
    email: siteContent.email,
    image: media.ogImage,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Instagram Reels editing",
      "YouTube Shorts editing",
      "AI video creation",
      "Motion graphics",
      "Short-form social media content",
      "Video color correction",
      "Talking-head video editing",
    ],
    sameAs: [
      siteContent.social.linkedin,
      siteContent.social.instagram,
      siteContent.social.behance,
    ],
  };
}

export function getProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sparsh Edits",
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
      { "@type": "AdministrativeArea", name: "Karnataka" },
      { "@type": "Country", name: "India" },
    ],
    serviceType: [
      "Short-form video editing",
      "Instagram Reels editing",
      "YouTube Shorts editing",
      "AI-assisted video production",
      "Motion graphics",
      "Monthly video editing retainer",
    ],
    provider: {
      "@type": "Person",
      name: siteContent.name,
      email: siteContent.email,
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    alternateName: siteContent.name,
    url: siteUrl,
    description: seoConfig.description,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Person",
      name: siteContent.name,
    },
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
