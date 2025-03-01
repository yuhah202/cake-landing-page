import { TypoColorType } from "./models";

export const COLORS: Record<TypoColorType, string> = {
  [TypoColorType.Primary]: "text-primary",
  [TypoColorType.Secondary]: "text-secondary",
  [TypoColorType.Neutral]: "text-neutral",
};
