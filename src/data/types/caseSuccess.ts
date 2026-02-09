export type CaseSuccess = {
  slug: string;
  title: string;
  tags: string[]; // ← antes era tag: string

  heroImage: string;
  heroAlt: string;

  summary: string;
  bullets: string[];
  body: string[];
  gallery: { src: string; alt: string }[];
};

