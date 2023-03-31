export type ProductCardProps = {
  title: string;
  status?: string;
  images: string[];
  price: { actual: string; old: string };
  length: string;
  thickness: string;
  slug: string;
};
