export type Client = {
  name: string;
  projectType: string;
  year: string;
  offset?: "none" | "sm" | "md" | "lg";
};

export const clients: Client[] = [
  { name: "NovaPay", projectType: "Brand Launch Film", year: "2025", offset: "none" },
  { name: "Aura", projectType: "Product Commercial", year: "2024", offset: "md" },
  { name: "FlowStack", projectType: "SaaS Explainer", year: "2024", offset: "sm" },
  { name: "Zenith", projectType: "3D Motion Design", year: "2023", offset: "lg" },
  { name: "Brew & Co.", projectType: "Social Campaign", year: "2025", offset: "none" },
  { name: "Pixel Labs", projectType: "Brand Identity Film", year: "2023", offset: "md" },
  { name: "Design Week", projectType: "Event Promo", year: "2024", offset: "sm" },
];
