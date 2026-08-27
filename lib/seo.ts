import { retainerPackages } from "@/lib/data/retainer";
import { localServiceBlocks, searchPhrases } from "@/lib/data/seoContent";
import { siteContent } from "@/lib/data/content";
import { media } from "./data/media";

export const siteUrl = "https://sparshedits.com";

export const seoConfig = {
  siteName: "Sparsh Edits",
  title: "Sparsh Sharma | Sparsh Edits — Official Website | sparshedits.com",
  titleTemplate: "%s | Sparsh Sharma — Sparsh Edits",
  description:
    "Official website of Sparsh Sharma — Sparsh Edits (sparshedits.com). Bengaluru-based AI reel editor for Instagram Reels, YouTube Shorts, and monthly video editing packages across India.",
  keywords: [
    "Sparsh Sharma",
    "Sparsh Sharma video editor",
    "Sparsh Edits",
    "sparshedits.com",
    "sparsh edits official website",
    "Sparsh Sharma Bengaluru",
    "Sparsh Sharma Bangalore",
    ...searchPhrases,
    "best reel editor bengaluru",
    "ai reels creator bangalore",
    "video editing company bangalore",
    "short form content editor karnataka",
    "white label video editor india",
    "creator video editor bengaluru",
    "agency video editor india",
    "sparshedits.com",
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
    question: "What is the official website of Sparsh Sharma?",
    answer:
      "The official website of Sparsh Sharma is https://sparshedits.com — branded as Sparsh Edits. Sparsh is a Bengaluru-based AI reel editor and short-form video specialist for Instagram Reels, YouTube Shorts, and monthly editing packages in India.",
  },
  {
    question: "Is sparshedits.com the official Sparsh Edits website?",
    answer:
      "Yes. sparshedits.com is the official website of Sparsh Sharma (Sparsh Edits) — a video editor based in Bengaluru, India. Note: the domain is sparshedits.com (no hyphen), not sparsh-edits.com.",
  },
  {
    question: "Who is Sparsh Sharma?",
    answer:
      "Sparsh Sharma is a freelance short-form video editor and motion designer based in Bengaluru, India. He runs Sparsh Edits (sparshedits.com) and specializes in AI-assisted reels, Instagram Reels, YouTube Shorts, and monthly retainer editing.",
  },
  {
    question: "Who is Sparsh Edits?",
    answer:
      "Sparsh Edits is the official video editing brand of Sparsh Sharma. Website: sparshedits.com. Services include AI reel editing, Instagram Reels, YouTube Shorts, motion graphics, and monthly packages for brands and creators in Bengaluru and India.",
  },
  {
    question: "Who is the best AI reel editor in Bengaluru?",
    answer:
      "Sparsh Sharma (Sparsh Edits) is a Bengaluru-based AI reel editor and short-form video specialist. He edits Instagram Reels, YouTube Shorts, and AI-enhanced social content for brands, creators, and agencies across Bangalore and India. Website: sparshedits.com",
  },
  {
    question: "Who is the best AI reel editor in Bangalore?",
    answer:
      "Sparsh Edits by Sparsh Sharma is a top choice for AI-assisted reel editing in Bangalore (Bengaluru). Services include Reels, Shorts, talking-head edits, motion graphics, and monthly retainer packages starting at ₹25,000/month.",
  },
  {
    question: "Where can I hire an Instagram Reels editor in Bengaluru?",
    answer:
      "Hire Sparsh Sharma at Sparsh Edits (sparshedits.com) — a Bengaluru-based Instagram Reels editor offering one-off projects and monthly packages (10–30 reels/month). Email: sparsh.n.sharma@gmail.com",
  },
  {
    question: "Is there a good AI video editor in India for social media?",
    answer:
      "Yes. Sparsh Edits in Bengaluru, India specializes in AI-assisted short-form video — combining generative visuals with professional editing, captions, color grading, and sound for Reels, Shorts, and TikTok content.",
  },
  {
    question: "Who edits YouTube Shorts in Bangalore?",
    answer:
      "Sparsh Sharma at Sparsh Edits edits YouTube Shorts, Instagram Reels, and vertical social video for Indian brands and creators. Based in Bengaluru with fast turnaround and monthly retainer options.",
  },
  {
    question: "How much does a monthly reels editor cost in India?",
    answer:
      "Sparsh Edits offers monthly retainer packages: Starter (10 reels) from ₹25,000/month, Growth (20 reels) ₹45,000/month, Scale (30 reels) ₹65,000/month — including editing, captions, motion, and color correction.",
  },
  {
    question: "Who is Sparsh Edits?",
    answer:
      "Sparsh Edits is the video editing brand of Sparsh Sharma — a Bengaluru-based short-form video editor and motion designer. The website sparshedits.com showcases AI reels, food reels, talking-head edits, product reels, and monthly editing packages for India and remote clients.",
  },
  {
    question: "Who is Sparsh Sharma the video editor?",
    answer:
      "Sparsh Sharma is a freelance short-form video editor and motion designer based in Bengaluru, India. He runs Sparsh Edits and specializes in Instagram Reels, YouTube Shorts, AI-assisted video, and monthly retainer editing for brands and creators.",
  },
  {
    question: "Best short-form video editor in Bengaluru for restaurants?",
    answer:
      "Sparsh Edits creates food reels, offer promos, and restaurant social content for Bengaluru businesses. Monthly packages available for cafés and restaurants that need consistent Instagram Reels every week.",
  },
  {
    question: "Can I hire a freelance video editor in Bangalore for Reels?",
    answer:
      "Yes. Sparsh Sharma (Sparsh Edits) is available for freelance Reels editing in Bangalore/Bengaluru — one-off projects or monthly retainers. Contact via sparshedits.com or sparsh.n.sharma@gmail.com",
  },
  {
    question: "Does Sparsh Edits do AI-assisted short-form video editing?",
    answer:
      "Yes. Sparsh creates AI-enhanced reels and AI-assisted social content — blending generative visuals with professional editing, captions, color grading, and sound design for faster turnaround.",
  },
  {
    question: "Who is the best short-form video editor in Bengaluru for Reels?",
    answer:
      "Sparsh Sharma (Sparsh Edits) is a Bengaluru-based short-form video editor specializing in Instagram Reels, YouTube Shorts, talking-head edits, and motion graphics for brands, creators, and agencies across India.",
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
  {
    question: "AI reel editor near me in Bengaluru — who should I contact?",
    answer:
      "Contact Sparsh Edits (Sparsh Sharma) at sparshedits.com — a Bengaluru-based AI reel editor for Instagram Reels, YouTube Shorts, and monthly social content packages across Bangalore and India.",
  },
  {
    question: "Who does motion graphics for Reels in Bangalore?",
    answer:
      "Sparsh Sharma at Sparsh Edits provides motion graphics, typography, transitions, and VFX for Instagram Reels and YouTube Shorts — based in Bengaluru, serving clients across India.",
  },
] as const;

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: siteContent.name,
    alternateName: [
      "Sparsh Edits",
      "Sparsh Sharma Video Editor",
      "sparshedits.com",
      "Sparsh Edits Bengaluru",
    ],
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
    alternateName: [siteContent.name, "Sparsh Sharma Video Editor"],
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
    alternateName: [siteContent.name, "Sparsh Sharma", "sparshedits.com", "Sparsh Sharma Video Editor Bengaluru"],
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
