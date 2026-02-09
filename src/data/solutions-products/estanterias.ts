import { ASSETS_BASE_URL } from "../../config/assets";
import type { Product } from "../types/product";

/**
 * En producción los assets viven en:
 * /uploads/solutions/solutions-racks/...
 */
const RACKS_BASE = `${ASSETS_BASE_URL}/solutions/solutions-racks`;

export const ESTANTERIAS_PRODUCTS: Product[] = [
  {
    slug: "selectivo",
    title: "Rack Selectivo",
    img: `${RACKS_BASE}/racks-selective/selectivo-1.webp`,
    imgAlt: "Rack selectivo industrial",
    description:
      "El rack selectivo es el sistema más versátil para el acceso directo a cada tarima.",
    gallery: [
      { src: `${RACKS_BASE}/racks-selective/selectivo-1.webp`, alt: "Rack selectivo vista 1" },
      { src: `${RACKS_BASE}/racks-selective/selectivo-2.webp`, alt: "Rack selectivo vista 2" },
      { src: `${RACKS_BASE}/racks-selective/selectivo-3.webp`, alt: "Rack selectivo vista 3" },
      { src: `${RACKS_BASE}/racks-selective/selectivo-4.webp`, alt: "Rack selectivo vista 4" },
    ],
  },

  {
    slug: "drive-in",
    title: "Rack Drive-In",
    img: `${RACKS_BASE}/racks-drivein/drivein-1.webp`,
    imgAlt: "Rack drive-in industrial",
    description:
      "Sistema de alta densidad diseñado para maximizar el espacio de almacenamiento.",
    gallery: [
      { src: `${RACKS_BASE}/racks-drivein/drivein-1.webp`, alt: "Drive-in vista 1" },
      { src: `${RACKS_BASE}/racks-drivein/drivein-2.webp`, alt: "Drive-in vista 2" },
      { src: `${RACKS_BASE}/racks-drivein/drivein-3.webp`, alt: "Drive-in vista 3" },
      { src: `${RACKS_BASE}/racks-drivein/drivein-4.webp`, alt: "Drive-in vista 4" },
    ],
  },

  {
    slug: "push-back",
    title: "Rack Push Back",
    img: `${RACKS_BASE}/racks-pushback/pushback-1.webp`,
    imgAlt: "Rack push back",
    description:
      "Sistema por gravedad que permite almacenar múltiples tarimas por nivel.",
    gallery: [
      { src: `${RACKS_BASE}/racks-pushback/pushback-1.webp`, alt: "Push back vista 1" },
      { src: `${RACKS_BASE}/racks-pushback/pushback-2.webp`, alt: "Push back vista 2" },
      { src: `${RACKS_BASE}/racks-pushback/pushback-3.webp`, alt: "Push back vista 3" },
      { src: `${RACKS_BASE}/racks-pushback/pushback-4.webp`, alt: "Push back vista 4" },
    ],
  },

  {
    slug: "dinamico",
    title: "Rack Dinámico",
    img: `${RACKS_BASE}/racks-dinamico/dinamico-1.webp`,
    imgAlt: "Rack dinámico",
    description:
      "Sistema FIFO que optimiza la rotación de inventarios.",
    gallery: [
      { src: `${RACKS_BASE}/racks-dinamico/dinamico-1.webp`, alt: "Dinámico vista 1" },
      { src: `${RACKS_BASE}/racks-dinamico/dinamico-2.webp`, alt: "Dinámico vista 2" },
      { src: `${RACKS_BASE}/racks-dinamico/dinamico-3.webp`, alt: "Dinámico vista 3" },
      { src: `${RACKS_BASE}/racks-dinamico/dinamico-4.webp`, alt: "Dinámico vista 4" },
    ],
  },

  {
    slug: "mezzanine",
    title: "Mezzanine Industrial",
    img: `${RACKS_BASE}/racks-mezzanine/mezzanine-1.webp`,
    imgAlt: "Mezzanine industrial",
    description:
      "Estructura que multiplica el área útil del almacén.",
    gallery: [
      { src: `${RACKS_BASE}/racks-mezzanine/mezzanine-1.webp`, alt: "Mezzanine vista 1" },
      { src: `${RACKS_BASE}/racks-mezzanine/mezzanine-2.webp`, alt: "Mezzanine vista 2" },
      { src: `${RACKS_BASE}/racks-mezzanine/mezzanine-3.webp`, alt: "Mezzanine vista 3" },
      { src: `${RACKS_BASE}/racks-mezzanine/mezzanine-4.webp`, alt: "Mezzanine vista 4" },
    ],
  },
];
