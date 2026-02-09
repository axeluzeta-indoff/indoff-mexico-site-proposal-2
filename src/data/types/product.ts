export type Product = {
  slug: string;
  title: string;
  img: string;
  imgAlt: string;
  description?: string;
  gallery?: { src: string; alt: string }[];
};
