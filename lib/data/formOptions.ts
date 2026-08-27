export const needOptions = [
  "One-off project",
  "10 reels/month",
  "20 reels/month",
  "30+ reels/month",
] as const;

export const contentTypeOptions = [
  "Restaurant",
  "Creator",
  "Brand",
  "Agency",
  "Event",
  "Other",
] as const;

export type NeedOption = (typeof needOptions)[number];
export type ContentTypeOption = (typeof contentTypeOptions)[number];
