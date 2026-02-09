import { ASSETS_BASE_URL } from "../../config/assets";
import type { Product } from "../types/product";

/**
 * Assets:
 * /uploads/solutions/solutions-gruas/...
 */
const GRUAS_BASE = `${ASSETS_BASE_URL}/solutions/solutions-gruas`;

export const GRUAS_PRODUCTS: Product[] = [
  {
    slug: "gantry",
    title: "Grúa Gantry",
    img: `${GRUAS_BASE}/gruas-gantry/gantry-1.webp`,
    imgAlt: "Grúa gantry industrial",
    description:
      "La grúa gantry es ideal para operaciones de carga pesada en exteriores e interiores, ofreciendo gran estabilidad y precisión en el movimiento de materiales.",
    gallery: [
      { src: `${GRUAS_BASE}/gruas-gantry/gantry-1.webp`, alt: "Grúa gantry vista 1" },
      { src: `${GRUAS_BASE}/gruas-gantry/gantry-2.webp`, alt: "Grúa gantry vista 2" },
      { src: `${GRUAS_BASE}/gruas-gantry/gantry-3.webp`, alt: "Grúa gantry vista 3" },
      { src: `${GRUAS_BASE}/gruas-gantry/gantry-4.webp`, alt: "Grúa gantry vista 4" },
    ],
  },

  {
    slug: "jib",
    title: "Grúa Jib",
    img: `${GRUAS_BASE}/gruas-jib/jib-1.webp`,
    imgAlt: "Grúa jib industrial",
    description:
      "La grúa jib permite maniobras rápidas y precisas en espacios reducidos, siendo ideal para estaciones de trabajo y líneas de producción.",
    gallery: [
      { src: `${GRUAS_BASE}/gruas-jib/jib-1.webp`, alt: "Grúa jib vista 1" },
      { src: `${GRUAS_BASE}/gruas-jib/jib-2.webp`, alt: "Grúa jib vista 2" },
      { src: `${GRUAS_BASE}/gruas-jib/jib-3.webp`, alt: "Grúa jib vista 3" },
      { src: `${GRUAS_BASE}/gruas-jib/jib-4.webp`, alt: "Grúa jib vista 4" },
    ],
  },

  {
    slug: "puente",
    title: "Grúa Puente",
    img: `${GRUAS_BASE}/gruas-puente/puente-1.webp`,
    imgAlt: "Grúa puente industrial",
    description:
      "La grúa puente es una solución robusta para el manejo eficiente de cargas pesadas a lo largo de grandes áreas de trabajo.",
    gallery: [
      { src: `${GRUAS_BASE}/gruas-puente/puente-1.webp`, alt: "Grúa puente vista 1" },
      { src: `${GRUAS_BASE}/gruas-puente/puente-2.webp`, alt: "Grúa puente vista 2" },
      { src: `${GRUAS_BASE}/gruas-puente/puente-3.webp`, alt: "Grúa puente vista 3" },
      { src: `${GRUAS_BASE}/gruas-puente/puente-4.webp`, alt: "Grúa puente vista 4" },
    ],
  },
];
