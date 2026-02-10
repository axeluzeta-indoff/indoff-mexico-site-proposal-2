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
    title: "Topes para muelles",
    img: `${ANDENES_BASE}/andenes-bumpers/bumpers-1.webp`,
    imgAlt: "Bumpers para andenes de carga",
    description: `
    Los topes para muelles, también conocidos como dock bumpers, son elementos de protección diseñados para absorber el impacto de los vehículos durante las maniobras de carga y descarga en andenes. Su función principal es proteger la estructura del edificio y el andén, reduciendo daños y costos de mantenimiento.

    Este tipo de solución es esencial en centros de distribución, almacenes y áreas logísticas con alto flujo de camiones, ya que actúa como una barrera de seguridad entre el vehículo y la infraestructura. Ayuda a mantener una alineación adecuada durante las operaciones.

    Los topes para muelles están fabricados con materiales de alta resistencia, capaces de soportar impactos repetitivos y condiciones de uso intensivo. Pueden instalarse en distintas configuraciones según el tipo de muelle y las necesidades operativas.

    Gracias a su durabilidad, facilidad de instalación y efectividad en la absorción de impactos, los topes para muelles son una solución clave para mejorar la seguridad, prolongar la vida útil del andén y optimizar las operaciones logísticas.
    `,
    gallery: [
      { src: `${ANDENES_BASE}/andenes-bumpers/bumpers-1.webp`, alt: "Dock bumper vista 1" },
      { src: `${ANDENES_BASE}/andenes-bumpers/bumpers-2.webp`, alt: "Dock bumper vista 2" },
      { src: `${ANDENES_BASE}/andenes-bumpers/bumpers-3.webp`, alt: "Dock bumper vista 3" },
      { src: `${ANDENES_BASE}/andenes-bumpers/bumpers-4.webp`, alt: "Dock bumper vista 4" },
    ],
  },

  {
    slug: "dockboards",
    title: "Plataformas de carga",
    img: `${ANDENES_BASE}/andenes-dockboards/dockboards-1.webp`,
    imgAlt: "Dockboards industriales",
    description: `
    Las plataformas de carga, también conocidas como dockboards, son soluciones diseñadas para salvar la diferencia de altura y espacio entre el andén y el vehículo, permitiendo una transferencia segura y continua de mercancía durante las operaciones de carga y descarga.

    Estas plataformas se utilizan ampliamente en centros logísticos, almacenes y áreas de distribución donde se requiere flexibilidad para atender distintos tipos de camiones. Facilitan el tránsito de montacargas, patines hidráulicos y equipos de manejo de materiales.

    Las plataformas de carga están fabricadas con materiales de alta resistencia, capaces de soportar cargas pesadas y uso intensivo, ofreciendo estabilidad y seguridad operativa. Su diseño ayuda a reducir riesgos de accidentes y daños a la mercancía.

    Gracias a su instalación sencilla, durabilidad y adaptabilidad, las plataformas de carga son una solución clave para optimizar los flujos logísticos, mejorar la eficiencia operativa y garantizar maniobras seguras en los andenes.
    `,
    gallery: [
      { src: `${ANDENES_BASE}/andenes-dockboards/dockboards-1.webp`, alt: "Dockboard vista 1" },
      { src: `${ANDENES_BASE}/andenes-dockboards/dockboards-2.webp`, alt: "Dockboard vista 2" },
      { src: `${ANDENES_BASE}/andenes-dockboards/dockboards-3.webp`, alt: "Dockboard vista 3" },
      { src: `${ANDENES_BASE}/andenes-dockboards/dockboards-4.webp`, alt: "Dockboard vista 4" },
    ],
  },

  {
    slug: "dockplates",
    title: "Placas de muelle",
    img: `${ANDENES_BASE}/andenes-dockplates/dockplates-1.webp`,
    imgAlt: "Dock plates industriales",
    description: `
    Las placas de muelle son soluciones diseñadas para compensar las diferencias de altura y separación entre el andén y el vehículo de carga, permitiendo una conexión segura y estable durante las maniobras de carga y descarga.

    Estas placas facilitan el tránsito de montacargas, patines hidráulicos y equipos de manejo de materiales, reduciendo riesgos operativos y mejorando la continuidad del flujo logístico en almacenes, centros de distribución e instalaciones industriales.

    Fabricadas en acero de alta resistencia, las placas de muelle soportan cargas pesadas y uso intensivo, ofreciendo durabilidad, estabilidad y seguridad en cada operación. Su superficie antiderrapante contribuye a minimizar deslizamientos y accidentes.

    Gracias a su instalación práctica y versatilidad, las placas de muelle son una solución eficiente para optimizar tiempos de operación, proteger la mercancía y mejorar la seguridad en los andenes de carga.
    `,
    gallery: [
      { src: `${ANDENES_BASE}/andenes-dockplates/dockplates-1.webp`, alt: "Dock plate vista 1" },
      { src: `${ANDENES_BASE}/andenes-dockplates/dockplates-2.webp`, alt: "Dock plate vista 2" },
      { src: `${ANDENES_BASE}/andenes-dockplates/dockplates-3.webp`, alt: "Dock plate vista 3" },
      { src: `${ANDENES_BASE}/andenes-dockplates/dockplates-4.webp`, alt: "Dock plate vista 4" },
    ],
  },

  {
    slug: "seals-and-shelters",
    title: "Sellos y refugios",
    img: `${ANDENES_BASE}/andenes-sealsandshelters/sealsandshelters-1.webp`,
    imgAlt: "Sellos y shelters para andenes",
    description: `
    Los sellos y refugios para andenes están diseñados para sellar el espacio entre el vehículo de carga y el edificio, creando una barrera eficiente contra polvo, lluvia, viento y contaminantes externos durante las operaciones de carga y descarga.

    Estos sistemas mejoran la eficiencia energética al reducir pérdidas de aire acondicionado o refrigeración, manteniendo condiciones controladas dentro del almacén, centro de distribución o planta industrial.

    Los sellos y refugios se adaptan a diferentes dimensiones de vehículos, proporcionando un ajuste flexible que protege tanto la mercancía como la infraestructura del andén. Su diseño robusto absorbe impactos y soporta el uso intensivo en operaciones logísticas de alta rotación.

    Gracias a su implementación, se incrementa la seguridad operativa, se optimizan los tiempos de carga y descarga y se prolonga la vida útil del andén y del edificio.
    `,
    gallery: [
      { src: `${ANDENES_BASE}/andenes-sealsandshelters/sealsandshelters-1.webp`, alt: "Seal & shelter vista 1" },
      { src: `${ANDENES_BASE}/andenes-sealsandshelters/sealsandshelters-2.webp`, alt: "Seal & shelter vista 2" },
      { src: `${ANDENES_BASE}/andenes-sealsandshelters/sealsandshelters-3.webp`, alt: "Seal & shelter vista 3" },
      { src: `${ANDENES_BASE}/andenes-sealsandshelters/sealsandshelters-4.webp`, alt: "Seal & shelter vista 4" },
    ],
  },
];
