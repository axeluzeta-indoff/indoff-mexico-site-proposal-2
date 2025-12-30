export type CaseSuccess = {
  slug: string;
  title: string;
  tag: string;

  heroImage: string;
  heroAlt: string;

  summary: string;
  bullets: string[];

  body: string[];

  gallery: { src: string; alt: string }[];
};

export const CASES_SUCCESS: CaseSuccess[] = [
  {
    slug: "caso-1",
    title: "Caso 1",
    tag: "Estantería",
    heroImage: "/images/success/racks-success.jpg",
    heroAlt: "Proyecto de estantería industrial",
    summary: "Optimización de capacidad y seguridad, sin frenar la operación.",
    bullets: [
      "Optimización de capacidad",
      "Seguridad en pasillos",
      "Implementación por fases",
    ],
    body: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    ],
    gallery: [
      { src: "/images/success/coveyor-success.jpg", alt: "Detalle del proyecto 1" },
      { src: "/images/success/racks-success.jpg", alt: "Instalación en sitio" },
      { src: "/images/success/lifttable-success.jpg", alt: "Resultado final" },
    ],
  },

  {
    slug: "caso-2",
    title: "Caso 2",
    tag: "Transportadores",
    heroImage: "/images/success/coveyor-success.jpg",
    heroAlt: "Proyecto de transportadores",
    summary: "Flujo continuo con integración sin parar la operación.",
    bullets: ["Flujo continuo", "Menos manipulación", "Integración sin parar operación"],
    body: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    ],
    gallery: [
      { src: "/images/success/coveyor-success.jpg", alt: "Línea instalada" },
      { src: "/images/success/racks-success.jpg", alt: "Detalle de integración" },
      { src: "/images/success/lifttable-success.jpg", alt: "Vista general" },
    ],
  },

  {
    slug: "caso-3",
    title: "Caso 3",
    tag: "Andenes",
    heroImage: "/images/success/lifttable-success.jpg",
    heroAlt: "Proyecto en andenes de carga",
    summary: "Mayor seguridad y control para reducir tiempos de carga.",
    bullets: ["Seguridad y control", "Menos tiempos de carga", "Cumplimiento operativo"],
    body: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    ],
    gallery: [
      { src: "/images/success/coveyor-success.jpg", alt: "Andén optimizado" },
      { src: "/images/success/racks-success.jpg", alt: "Seguridad operativa" },
      { src: "/images/success/lifttable-success.jpg", alt: "Resultado final" },
    ],
  },
];

export function getCaseBySlug(slug: string) {
  return CASES_SUCCESS.find((c) => c.slug === slug);
}
