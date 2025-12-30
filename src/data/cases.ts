export type CaseStudy = {
  slug: string;
  title: string;
  client?: string;
  location?: string;
  year?: string;
  heroImage: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
  summary: string;
  highlights: string[]; // bullets cortos
  problem: string;
  solution: string;
  results: string[]; // métricas/bullets
};

export const CASES: CaseStudy[] = [
  {
    slug: "caso-x",
    title: "Caso X",
    client: "Cliente confidencial",
    location: "Tijuana, BC",
    year: "2024",
    heroImage: { src: "/images/cases/case-x/hero.jpg", alt: "Proyecto Caso X" },
    gallery: [
      { src: "/images/cases/case-x/1.jpg", alt: "Vista 1" },
      { src: "/images/cases/case-x/2.jpg", alt: "Vista 2" },
      { src: "/images/cases/case-x/3.jpg", alt: "Vista 3" },
    ],
    summary:
      "Implementación de solución integral para aumentar capacidad y reducir tiempos de operación.",
    highlights: [
      "Diseño e ingeniería a medida",
      "Instalación y puesta en marcha",
      "Soporte post-proyecto",
    ],
    problem:
      "Crecimiento de demanda y cuellos de botella en almacenamiento y surtido.",
    solution:
      "Rediseño de layout + integración de sistemas de manejo de materiales con seguridad industrial.",
    results: [
      "+X% capacidad de almacenamiento",
      "-X% tiempo de surtido",
      "Mejoras de seguridad y flujo",
    ],
  },
];

export function getCaseBySlug(slug: string) {
  return CASES.find((c) => c.slug === slug);
}
