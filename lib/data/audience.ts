export type AudienceSegment = {
  title: string;
  description: string;
  examples: readonly string[];
};

export const audienceSegments: AudienceSegment[] = [
  {
    title: "Agencies",
    description: "White-label editing for your clients — consistent style, fast turnaround, no overhead.",
    examples: ["Social content systems", "Client reel batches", "Campaign cutdowns"],
  },
  {
    title: "Restaurants & Cafés",
    description: "Food reels, offer promos, ambience shots, and event coverage that fill your feed.",
    examples: ["Food reels", "Offer promos", "Event coverage"],
  },
  {
    title: "Creators & Personal Brands",
    description: "Talking-head edits, podcast clips, and educational content that builds your audience.",
    examples: ["Talking-head", "Podcast clips", "Educational content"],
  },
  {
    title: "Brands",
    description: "Product, lifestyle, and campaign content that matches your brand guidelines.",
    examples: ["Product reels", "Lifestyle content", "Campaign videos"],
  },
];
