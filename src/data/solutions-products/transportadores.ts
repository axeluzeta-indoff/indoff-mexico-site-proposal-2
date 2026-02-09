import { ASSETS_BASE_URL } from "../../config/assets";
import type { Product } from "../types/product";

/**
 * Assets:
 * /uploads/solutions/solutions-transportadores/...
 */
const TRANSPORTADORES_BASE = `${ASSETS_BASE_URL}/solutions/solutions-transportadores`;

export const TRANSPORTADORES_PRODUCTS: Product[] = [
  {
    slug: "belt",
    title: "Transportador de Banda",
    img: `${TRANSPORTADORES_BASE}/transportadores-belt/belt-1.webp`,
    imgAlt: "Transportador de banda industrial",
    description:
      "El transportador de banda es ideal para el movimiento continuo de productos en líneas de producción, ofreciendo eficiencia, control y versatilidad.",
    gallery: [
      { src: `${TRANSPORTADORES_BASE}/transportadores-belt/belt-1.webp`, alt: "Transportador de banda vista 1" },
      { src: `${TRANSPORTADORES_BASE}/transportadores-belt/belt-2.webp`, alt: "Transportador de banda vista 2" },
      { src: `${TRANSPORTADORES_BASE}/transportadores-belt/belt-3.webp`, alt: "Transportador de banda vista 3" },
      { src: `${TRANSPORTADORES_BASE}/transportadores-belt/belt-4.webp`, alt: "Transportador de banda vista 4" },
    ],
  },

  {
    slug: "lowprofile",
    title: "Transportador Low Profile",
    img: `${TRANSPORTADORES_BASE}/transportadores-lowprofile/lowprofile-1.webp`,
    imgAlt: "Transportador low profile industrial",
    description:
      "El transportador low profile está diseñado para espacios reducidos, integrándose fácilmente en estaciones de trabajo sin sacrificar rendimiento.",
    gallery: [
      { src: `${TRANSPORTADORES_BASE}/transportadores-lowprofile/lowprofile-1.webp`, alt: "Transportador low profile vista 1" },
      { src: `${TRANSPORTADORES_BASE}/transportadores-lowprofile/lowprofile-2.webp`, alt: "Transportador low profile vista 2" },
      { src: `${TRANSPORTADORES_BASE}/transportadores-lowprofile/lowprofile-3.webp`, alt: "Transportador low profile vista 3" },
      { src: `${TRANSPORTADORES_BASE}/transportadores-lowprofile/lowprofile-4.webp`, alt: "Transportador low profile vista 4" },
    ],
  },

  {
    slug: "roller",
    title: "Transportador de Rodillos",
    img: `${TRANSPORTADORES_BASE}/transportadores-roller/roller-1.webp`,
    imgAlt: "Transportador de rodillos industrial",
    description:
      "El transportador de rodillos permite el desplazamiento eficiente de cargas medianas y pesadas, ideal para procesos logísticos y de almacenaje.",
    gallery: [
      { src: `${TRANSPORTADORES_BASE}/transportadores-roller/roller-1.webp`, alt: "Transportador de rodillos vista 1" },
      { src: `${TRANSPORTADORES_BASE}/transportadores-roller/roller-2.webp`, alt: "Transportador de rodillos vista 2" },
      { src: `${TRANSPORTADORES_BASE}/transportadores-roller/roller-3.webp`, alt: "Transportador de rodillos vista 3" },
      { src: `${TRANSPORTADORES_BASE}/transportadores-roller/roller-4.webp`, alt: "Transportador de rodillos vista 4" },
    ],
  },
];
