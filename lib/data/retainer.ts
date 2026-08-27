export type RetainerPackage = {
  name: string;
  reelsPerMonth: number;
  includes: readonly string[];
  priceInr: number;
  turnaround: string;
  featured?: boolean;
};

export const retainerPackages: RetainerPackage[] = [
  {
    name: "Starter",
    reelsPerMonth: 10,
    includes: ["Editing", "Captions", "Basic motion", "Color correction"],
    priceInr: 25000,
    turnaround: "3–4 business days per batch",
  },
  {
    name: "Growth",
    reelsPerMonth: 20,
    includes: [
      "Everything in Starter",
      "Motion graphics",
      "Sound design",
      "2 revision rounds",
    ],
    priceInr: 45000,
    turnaround: "2–3 business days per batch",
    featured: true,
  },
  {
    name: "Scale",
    reelsPerMonth: 30,
    includes: [
      "Everything in Growth",
      "Priority turnaround",
      "Dedicated style guide",
      "Unlimited revisions",
    ],
    priceInr: 65000,
    turnaround: "1–2 business days per batch",
  },
];

export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
