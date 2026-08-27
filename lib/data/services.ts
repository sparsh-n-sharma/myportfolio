export type Service = {
  title: string;
  description: string;
  items: readonly string[];
};

export const services: Service[] = [
  {
    title: "Short-form editing",
    description: "Scroll-stopping cuts built for social algorithms and mobile viewing.",
    items: ["Reels", "Shorts", "TikTok"],
  },
  {
    title: "Motion graphics",
    description: "Typography, transitions, and visual effects that elevate every frame.",
    items: ["Typography", "Transitions", "Visual effects"],
  },
  {
    title: "Post-production",
    description: "Clean, professional finishing for footage that needs extra polish.",
    items: ["Tracking", "Rotoscoping", "Masking", "Color"],
  },
  {
    title: "AI video",
    description: "Generative and AI-assisted content for faster turnaround.",
    items: ["Generative visuals", "AI-assisted content"],
  },
];
