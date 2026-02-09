import { ASSETS_BASE_URL } from "../../config/assets";
import type { Product } from "../types/product";

/**
 * Assets:
 * /uploads/solutions/solutions-contenedores/...
 */
const CONTENEDORES_BASE = `${ASSETS_BASE_URL}/solutions/solutions-contenedores`;

export const CONTENEDORES_PRODUCTS: Product[] = [
  {
    slug: "attached",
    title: "Contenedores Adjuntos",
    img: `${CONTENEDORES_BASE}/contenedores-attatched/attatched-1.webp`,
    imgAlt: "Contenedores adjuntos industriales",
    description:
      "Los contenedores adjuntos permiten una organización eficiente de piezas y materiales, integrándose directamente a estructuras o estaciones de trabajo.",
    gallery: [
      { src: `${CONTENEDORES_BASE}/contenedores-attatched/attatched-1.webp`, alt: "Contenedor adjunto vista 1" },
      { src: `${CONTENEDORES_BASE}/contenedores-attatched/attatched-2.webp`, alt: "Contenedor adjunto vista 2" },
      { src: `${CONTENEDORES_BASE}/contenedores-attatched/attatched-3.webp`, alt: "Contenedor adjunto vista 3" },
      { src: `${CONTENEDORES_BASE}/contenedores-attatched/attatched-4.webp`, alt: "Contenedor adjunto vista 4" },
    ],
  },

  {
    slug: "dividable",
    title: "Contenedores Divisibles",
    img: `${CONTENEDORES_BASE}/contenedores-dividable/dividable-1.webp`,
    imgAlt: "Contenedores divisibles industriales",
    description:
      "Los contenedores divisibles ofrecen flexibilidad para clasificar y separar componentes, adaptándose a distintos volúmenes y necesidades operativas.",
    gallery: [
      { src: `${CONTENEDORES_BASE}/contenedores-dividable/dividable-1.webp`, alt: "Contenedor divisible vista 1" },
      { src: `${CONTENEDORES_BASE}/contenedores-dividable/dividable-2.webp`, alt: "Contenedor divisible vista 2" },
      { src: `${CONTENEDORES_BASE}/contenedores-dividable/dividable-3.webp`, alt: "Contenedor divisible vista 3" },
      { src: `${CONTENEDORES_BASE}/contenedores-dividable/dividable-4.webp`, alt: "Contenedor divisible vista 4" },
    ],
  },

  {
    slug: "stack",
    title: "Contenedores Apilables",
    img: `${CONTENEDORES_BASE}/contenedores-stack/stack-1.webp`,
    imgAlt: "Contenedores apilables industriales",
    description:
      "Los contenedores apilables están diseñados para maximizar el espacio de almacenamiento, permitiendo un apilado seguro y estable.",
    gallery: [
      { src: `${CONTENEDORES_BASE}/contenedores-stack/stack-1.webp`, alt: "Contenedor apilable vista 1" },
      { src: `${CONTENEDORES_BASE}/contenedores-stack/stack-2.webp`, alt: "Contenedor apilable vista 2" },
      { src: `${CONTENEDORES_BASE}/contenedores-stack/stack-3.webp`, alt: "Contenedor apilable vista 3" },
      { src: `${CONTENEDORES_BASE}/contenedores-stack/stack-4.webp`, alt: "Contenedor apilable vista 4" },
    ],
  },

  {
    slug: "wall",
    title: "Contenedores para Muro",
    img: `${CONTENEDORES_BASE}/contenedores-wall/wall-1.webp`,
    imgAlt: "Contenedores para muro industriales",
    description:
      "Los contenedores para muro permiten mantener piezas visibles y accesibles, optimizando el orden y la eficiencia en áreas de trabajo.",
    gallery: [
      { src: `${CONTENEDORES_BASE}/contenedores-wall/wall-1.webp`, alt: "Contenedor para muro vista 1" },
      { src: `${CONTENEDORES_BASE}/contenedores-wall/wall-2.webp`, alt: "Contenedor para muro vista 2" },
      { src: `${CONTENEDORES_BASE}/contenedores-wall/wall-3.webp`, alt: "Contenedor para muro vista 3" },
      { src: `${CONTENEDORES_BASE}/contenedores-wall/wall-4.webp`, alt: "Contenedor para muro vista 4" },
    ],
  },
];
