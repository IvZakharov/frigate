export const checkSlug = (currentSlug: string, slugs: string[]): boolean => {
  return slugs.includes(currentSlug);
};
