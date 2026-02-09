import { ASSETS_BASE_URL } from "../../config/assets";
import type { Product } from "../types/product";

/**
 * Assets:
 * /uploads/solutions/solutions-andenes/...
 */
const ANDENES_BASE = `${ASSETS_BASE_URL}/solutions/solutions-andenes`;

export const ANDENES_PRODUCTS: Product[] = [
  {
    slug: "bumpers",
    title: "Dock Bumpers",
    img: `${ANDENES_BASE}/andenes-bumpers/bumpers-1.webp`,
    imgAlt: "Bumpers para andenes de carga",
    description:
      "Los dock bumpers protegen el andén y el edificio absorbiendo impactos durante las maniobras de carga y descarga.",
    gallery: [
      { src: `${ANDENES_BASE}/andenes-bumpers/bumpers-1.webp`, alt: "Dock bumper vista 1" },
      { src: `${ANDENES_BASE}/andenes-bumpers/bumpers-2.webp`, alt: "Dock bumper vista 2" },
      { src: `${ANDENES_BASE}/andenes-bumpers/bumpers-3.webp`, alt: "Dock bumper vista 3" },
      { src: `${ANDENES_BASE}/andenes-bumpers/bumpers-4.webp`, alt: "Dock bumper vista 4" },
    ],
  },

  {
    slug: "dockboards",
    title: "Dockboards",
    img: `${ANDENES_BASE}/andenes-dockboards/dockboards-1.webp`,
    imgAlt: "Dockboards industriales",
    description:
      "Los dockboards facilitan la transferencia segura de mercancía entre el andén y el vehículo de carga.",
    gallery: [
      { src: `${ANDENES_BASE}/andenes-dockboards/dockboards-1.webp`, alt: "Dockboard vista 1" },
      { src: `${ANDENES_BASE}/andenes-dockboards/dockboards-2.webp`, alt: "Dockboard vista 2" },
      { src: `${ANDENES_BASE}/andenes-dockboards/dockboards-3.webp`, alt: "Dockboard vista 3" },
      { src: `${ANDENES_BASE}/andenes-dockboards/dockboards-4.webp`, alt: "Dockboard vista 4" },
    ],
  },

  {
    slug: "dockplates",
    title: "Dock Plates",
    img: `${ANDENES_BASE}/andenes-dockplates/dockplates-1.webp`,
    imgAlt: "Dock plates industriales",
    description:
      "Las dock plates permiten compensar diferencias de altura entre el andén y el transporte, mejorando la seguridad operativa.",
    gallery: [
      { src: `${ANDENES_BASE}/andenes-dockplates/dockplates-1.webp`, alt: "Dock plate vista 1" },
      { src: `${ANDENES_BASE}/andenes-dockplates/dockplates-2.webp`, alt: "Dock plate vista 2" },
      { src: `${ANDENES_BASE}/andenes-dockplates/dockplates-3.webp`, alt: "Dock plate vista 3" },
      { src: `${ANDENES_BASE}/andenes-dockplates/dockplates-4.webp`, alt: "Dock plate vista 4" },
    ],
  },

  {
    slug: "seals-and-shelters",
    title: "Seals & Shelters",
    img: `${ANDENES_BASE}/andenes-sealsandshelters/sealsandshelters-1.webp`,
    imgAlt: "Sellos y shelters para andenes",
    description:
      "Los seals y shelters sellan el área del andén contra el vehículo, mejorando la eficiencia energética y la protección del producto.",
    gallery: [
      { src: `${ANDENES_BASE}/andenes-sealsandshelters/sealsandshelters-1.webp`, alt: "Seal & shelter vista 1" },
      { src: `${ANDENES_BASE}/andenes-sealsandshelters/sealsandshelters-2.webp`, alt: "Seal & shelter vista 2" },
      { src: `${ANDENES_BASE}/andenes-sealsandshelters/sealsandshelters-3.webp`, alt: "Seal & shelter vista 3" },
      { src: `${ANDENES_BASE}/andenes-sealsandshelters/sealsandshelters-4.webp`, alt: "Seal & shelter vista 4" },
    ],
  },
];
