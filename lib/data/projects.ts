import { media } from "./media";

export type ProcessStep = {
  title: string;
  description: string;
};

export type ProjectResult = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  client?: string;
  categoryLabel: string;
  role: string;
  year: string;
  category: string;
  contentType: "demo" | "client";
  timelineCode: string;
  summary: string;
  description: string;
  tools: string[];
  heroVideo: string;
  heroImage: string;
  cardVideo: string;
  gallery: readonly string[];
  process?: ProcessStep[];
  results?: ProjectResult[];
  accentColor: string;
  aspectRatio: "video" | "wide" | "tall";
};

export const projects: Project[] = [
  {
    slug: "restaurant-reel",
    title: "Restaurant Reel",
    categoryLabel: "Food · Sample edit",
    role: "Editor & Motion",
    year: "2025",
    category: "Food",
    contentType: "demo",
    timelineCode: "00:01:14",
    summary:
      "Food reel with dynamic cuts, color grading, and captions — built for Instagram and restaurant social feeds.",
    description:
      "Sample edit showing how raw kitchen and dining footage becomes a scroll-stopping food reel. Includes pacing, transitions, text overlays, and color correction typical of restaurant content.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    heroVideo: media.projectVideos[0],
    heroImage: media.projectImages[0],
    cardVideo: media.projectVideos[0],
    gallery: [media.projectImages[0], media.galleryImages[0], media.galleryImages[1]],
    accentColor: "#F97316",
    aspectRatio: "video",
  },
  {
    slug: "talking-head",
    title: "Talking Head Edit",
    categoryLabel: "Creator · Sample edit",
    role: "Editor & Motion",
    year: "2025",
    category: "Creator",
    contentType: "demo",
    timelineCode: "00:02:38",
    summary:
      "Talking-head clip with jump cuts, b-roll inserts, captions, and motion graphics for creator and podcast content.",
    description:
      "Sample edit demonstrating talking-head workflow — hook in the first 3 seconds, dynamic cuts, lower-thirds, and caption styling that keeps viewers watching through the full clip.",
    tools: ["Premiere Pro", "After Effects", "CapCut"],
    heroVideo: media.projectVideos[1],
    heroImage: media.projectImages[1],
    cardVideo: media.projectVideos[1],
    gallery: [media.projectImages[1], media.galleryImages[1], media.galleryImages[2]],
    accentColor: "#A855F7",
    aspectRatio: "video",
  },
  {
    slug: "product-reel",
    title: "Product Reel",
    categoryLabel: "Brand · Sample edit",
    role: "Editor & Motion",
    year: "2025",
    category: "Brand",
    contentType: "demo",
    timelineCode: "00:03:51",
    summary:
      "Product-focused reel with clean cuts, motion typography, and lifestyle pacing for e-commerce and D2C brands.",
    description:
      "Sample edit showing product reel structure — hero shot, feature highlights, lifestyle context, and a clear CTA frame. Built for paid social and organic product launches.",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    heroVideo: media.projectVideos[2],
    heroImage: media.projectImages[2],
    cardVideo: media.projectVideos[2],
    gallery: [media.projectImages[2], media.galleryImages[0], media.galleryImages[2]],
    accentColor: "#3B82F6",
    aspectRatio: "video",
  },
  {
    slug: "event-reel",
    title: "Event Reel",
    categoryLabel: "Event · Sample edit",
    role: "Editor & Motion",
    year: "2024",
    category: "Event",
    contentType: "demo",
    timelineCode: "00:05:02",
    summary:
      "High-energy event recap with beat-synced cuts, crowd shots, and kinetic typography for promos and recaps.",
    description:
      "Sample edit for event coverage — fast cuts synced to music, highlight moments, speaker clips, and branded end cards suitable for social promotion and post-event marketing.",
    tools: ["Premiere Pro", "After Effects"],
    heroVideo: media.projectVideos[3],
    heroImage: media.projectImages[3],
    cardVideo: media.projectVideos[3],
    gallery: [media.projectImages[3], media.galleryImages[1], media.galleryImages[0]],
    accentColor: "#F97316",
    aspectRatio: "tall",
  },
  {
    slug: "fashion-reel",
    title: "Fashion Reel",
    categoryLabel: "Fashion · Sample edit",
    role: "Editor & Motion",
    year: "2024",
    category: "Fashion",
    contentType: "demo",
    timelineCode: "00:06:18",
    summary:
      "Fashion and lifestyle reel with smooth transitions, color grading, and trend-forward pacing for brand feeds.",
    description:
      "Sample edit showcasing fashion reel style — mood-driven pacing, seamless transitions, and color work that matches brand aesthetic for lifestyle and apparel content.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    heroVideo: media.projectVideos[4],
    heroImage: media.projectImages[4],
    cardVideo: media.projectVideos[4],
    gallery: [media.projectImages[4], media.galleryImages[2], media.galleryImages[1]],
    accentColor: "#A855F7",
    aspectRatio: "video",
  },
  {
    slug: "ai-reel",
    title: "AI-Enhanced Reel",
    categoryLabel: "AI · Sample edit",
    role: "Editor & Motion",
    year: "2025",
    category: "AI",
    contentType: "demo",
    timelineCode: "00:07:44",
    summary:
      "AI-assisted visuals blended with traditional editing — generative backgrounds, enhanced b-roll, and faster turnaround.",
    description:
      "Sample edit demonstrating AI video workflow — generative visual elements combined with traditional editing and motion graphics for content that stands out without long production cycles.",
    tools: ["After Effects", "Premiere Pro", "Runway", "Midjourney"],
    heroVideo: media.projectVideos[5],
    heroImage: media.projectImages[5],
    cardVideo: media.projectVideos[5],
    gallery: [media.projectImages[5], media.galleryImages[0], media.galleryImages[2]],
    accentColor: "#3B82F6",
    aspectRatio: "wide",
  },
  {
    slug: "motion-graphics-reel",
    title: "Motion Graphics Reel",
    categoryLabel: "Motion · Sample edit",
    role: "Motion Designer",
    year: "2024",
    category: "Motion",
    contentType: "demo",
    timelineCode: "00:09:01",
    summary:
      "Typography-driven motion graphics with transitions, visual effects, and animated elements for social and brand content.",
    description:
      "Sample edit focused on motion graphics — kinetic typography, animated transitions, and visual effects that transform simple footage into premium-looking social content.",
    tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
    heroVideo: media.projectVideos[6],
    heroImage: media.projectImages[6],
    cardVideo: media.projectVideos[6],
    gallery: [media.projectImages[6], media.galleryImages[1], media.galleryImages[0]],
    accentColor: "#A855F7",
    aspectRatio: "wide",
  },
  {
    slug: "before-after",
    title: "Before / After Edit",
    categoryLabel: "Proof · Sample edit",
    role: "Editor & Motion",
    year: "2025",
    category: "Proof",
    contentType: "demo",
    timelineCode: "00:10:30",
    summary:
      "Side-by-side comparison showing raw footage transformed into a polished final reel — the clearest proof of editing value.",
    description:
      "Sample before/after demonstration — raw unedited footage on one side, final polished reel on the other. Shows color, pacing, captions, and motion work applied to real footage.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    heroVideo: media.projectVideos[7],
    heroImage: media.projectImages[7],
    cardVideo: media.projectVideos[7],
    gallery: [media.projectImages[7], media.galleryImages[2], media.galleryImages[0]],
    accentColor: "#3B82F6",
    aspectRatio: "video",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
