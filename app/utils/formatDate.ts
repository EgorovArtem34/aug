export const formatDate = (unformattedDate: string): any => {
  const date = new Date(unformattedDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  return date.toLocaleDateString("ru-RU", options).replace(' г.', '');
};
