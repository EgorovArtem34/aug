import { DistanceUnit } from "../types";
import { textsForValues } from "./constants";

export const pluralizeValue = (
  value: number,
  { text1, text2, text3 }: { text1: string; text2: string; text3: string }
): string => {
  let absNumber = Math.abs(value);

  absNumber %= 100;
  if (value >= 5 && value <= 20) return text3;

  absNumber %= 10;
  if (absNumber === 1) return text1;

  if (absNumber >= 2 && absNumber <= 4) return text2;

  return text3;
};

export const defineDistance = (
  value: number,
  type: DistanceUnit
) => {

  const currentTextsValues = textsForValues[type as keyof typeof textsForValues];
  return pluralizeValue(value, currentTextsValues);
};
