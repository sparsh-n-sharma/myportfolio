import { media } from "./media";

export type BeforeAfterPair = {
  id: string;
  label: string;
  category: string;
  rawVideo: string;
  editedVideo: string;
  rawPoster: string;
  editedPoster: string;
};

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: "food-reel",
    label: "Restaurant Reel",
    category: "Food",
    rawVideo: media.beforeAfterRaw[0],
    editedVideo: media.beforeAfterEdited[0],
    rawPoster: media.projectImages[0],
    editedPoster: media.projectImages[1],
  },
  {
    id: "talking-head",
    label: "Talking Head Edit",
    category: "Creator",
    rawVideo: media.beforeAfterRaw[1],
    editedVideo: media.beforeAfterEdited[1],
    rawPoster: media.projectImages[2],
    editedPoster: media.projectImages[3],
  },
];
