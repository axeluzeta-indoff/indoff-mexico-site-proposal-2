import { ASSETS_BASE_URL } from "../../config/assets";
import type { Product } from "../types/product";

/**
 * Assets:
 * /uploads/solutions/solutions-mesas/...
 */
const MESAS_BASE = `${ASSETS_BASE_URL}/solutions/solutions-mesas`;

export const MESAS_PRODUCTS: Product[] = [
  {
    slug: "floor",
    title: "Mesa Elevadora de Piso",
    img: `${MESAS_BASE}/mesas-floor/floor-1.webp`,
    imgAlt: "Mesa elevadora de piso industrial",
    description:
      "Las mesas elevadoras de piso facilitan el manejo ergonómico de cargas, optimizando procesos de trabajo a nivel de suelo.",
    gallery: [
      { src: `${MESAS_BASE}/mesas-floor/floor-1.webp`, alt: "Mesa de piso vista 1" },
      { src: `${MESAS_BASE}/mesas-floor/floor-2.webp`, alt: "Mesa de piso vista 2" },
      { src: `${MESAS_BASE}/mesas-floor/floor-3.webp`, alt: "Mesa de piso vista 3" },
      { src: `${MESAS_BASE}/mesas-floor/floor-4.webp`, alt: "Mesa de piso vista 4" },
    ],
  },

  {
    slug: "hydraulic",
    title: "Mesa Elevadora Hidráulica",
    img: `${MESAS_BASE}/mesas-hydraulic/hydraulic-1.webp`,
    imgAlt: "Mesa elevadora hidráulica industrial",
    description:
      "La mesa elevadora hidráulica proporciona potencia y precisión para elevar cargas pesadas de forma segura y controlada.",
    gallery: [
      { src: `${MESAS_BASE}/mesas-hydraulic/hydraulic-1.webp`, alt: "Mesa hidráulica vista 1" },
      { src: `${MESAS_BASE}/mesas-hydraulic/hydraulic-2.webp`, alt: "Mesa hidráulica vista 2" },
      { src: `${MESAS_BASE}/mesas-hydraulic/hydraulic-3.webp`, alt: "Mesa hidráulica vista 3" },
      { src: `${MESAS_BASE}/mesas-hydraulic/hydraulic-4.webp`, alt: "Mesa hidráulica vista 4" },
    ],
  },

  {
    slug: "rotating",
    title: "Mesa Elevadora Giratoria",
    img: `${MESAS_BASE}/mesas-rotating/rotating-1.webp`,
    imgAlt: "Mesa elevadora giratoria industrial",
    description:
      "La mesa elevadora giratoria permite posicionar cargas con precisión, mejorando la eficiencia y reduciendo esfuerzos operativos.",
    gallery: [
      { src: `${MESAS_BASE}/mesas-rotating/rotating-1.webp`, alt: "Mesa giratoria vista 1" },
      { src: `${MESAS_BASE}/mesas-rotating/rotating-2.webp`, alt: "Mesa giratoria vista 2" },
      { src: `${MESAS_BASE}/mesas-rotating/rotating-3.webp`, alt: "Mesa giratoria vista 3" },
      { src: `${MESAS_BASE}/mesas-rotating/rotating-4.webp`, alt: "Mesa giratoria vista 4" },
    ],
  },

  {
    slug: "scissor",
    title: "Mesa Elevadora Tipo Tijera",
    img: `${MESAS_BASE}/mesas-scissor/scissor-1.webp`,
    imgAlt: "Mesa elevadora tipo tijera industrial",
    description:
      "La mesa elevadora tipo tijera es una solución robusta y estable para elevar cargas a diferentes alturas con máxima seguridad.",
    gallery: [
      { src: `${MESAS_BASE}/mesas-scissor/scissor-1.webp`, alt: "Mesa tipo tijera vista 1" },
      { src: `${MESAS_BASE}/mesas-scissor/scissor-2.webp`, alt: "Mesa tipo tijera vista 2" },
      { src: `${MESAS_BASE}/mesas-scissor/scissor-3.webp`, alt: "Mesa tipo tijera vista 3" },
      { src: `${MESAS_BASE}/mesas-scissor/scissor-4.webp`, alt: "Mesa tipo tijera vista 4" },
    ],
  },
];
