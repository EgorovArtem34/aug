import { dateRegex } from "./constants";

export const formatDate = (unformattedDate: string): any => {
  const date = new Date(unformattedDate);
  const options = { year: "numeric", month: "short", day: "numeric" } as const;
  return date
    .toLocaleDateString("ru-RU", options)
    .replace(". ", " ")
    .replace(" г.", "");
};

export const matchDate = (fetchUrl: string) => fetchUrl.match(dateRegex)?.[1];
