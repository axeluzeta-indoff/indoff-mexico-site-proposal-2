import { ASSETS_BASE_URL } from "../../config/assets";
import type { Product } from "../types/product";

const CONTENEDORES_BASE = `${ASSETS_BASE_URL}/solutions/solutions-contenedores`;

export const CONTENEDORES_PRODUCTS: Product[] = [
  {
    slug: "attached",
    title: "Recipientes con tapa acoplada",
    img: `${CONTENEDORES_BASE}/contenedores-attatched/attatched-1.webp`,
    imgAlt: "Contenedores adjuntos industriales",
    description: `
    Los recipientes con tapa acoplada son contenedores industriales diseñados para el almacenamiento, protección y transporte seguro de piezas, componentes y materiales. Su tapa integrada evita pérdidas, contaminación y daños durante la manipulación y el traslado.

    Este tipo de contenedor es ideal para procesos logísticos, almacenes y estaciones de trabajo donde se requiere mantener el contenido protegido y organizado. Su diseño permite apilado seguro, optimizando el uso del espacio y facilitando la gestión del inventario.

    Los recipientes con tapa acoplada se fabrican en materiales resistentes que soportan uso intensivo, impactos y condiciones industriales exigentes. Además, su estructura permite una fácil integración con sistemas de transporte, racks y equipos de manejo de materiales.

    Gracias a su durabilidad, practicidad y seguridad, los recipientes con tapa acoplada son una solución eficiente para mejorar la organización, reducir mermas y optimizar los procesos de almacenamiento y distribución.
    `,
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
    description: `
    Los contenedores divisibles son soluciones de almacenamiento diseñadas para clasificar, separar y organizar piezas o componentes dentro de un mismo recipiente. Su sistema de divisiones internas permite adaptar el espacio según el tamaño y cantidad de productos, mejorando el orden y la eficiencia operativa.

    Este tipo de contenedor es ideal para estaciones de trabajo, líneas de ensamblaje y áreas de picking donde se requiere acceso rápido y visual a diferentes componentes. Facilita la estandarización de procesos y reduce errores en la selección de piezas.

    Los contenedores divisibles están fabricados con materiales resistentes al uso industrial, soportando cargas, impactos y manipulación constante. Además, son compatibles con sistemas de apilado, racks y transportadores, integrándose fácilmente a distintos entornos logísticos.

    Gracias a su flexibilidad y capacidad de organización, los contenedores divisibles son una solución eficiente para optimizar el espacio, mejorar la productividad y mantener un control preciso del inventario.
    `,
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
   description: `
    Los contenedores apilables son soluciones de almacenamiento diseñadas para maximizar el uso del espacio vertical, permitiendo un apilado seguro, estable y eficiente. Son ideales para almacenes, centros de distribución y áreas de producción donde la optimización del espacio es prioritaria.

    Este tipo de contenedor facilita la organización y el manejo de materiales al mantener la estabilidad de las cargas durante el almacenamiento y el transporte interno. Su diseño permite apilar múltiples unidades sin comprometer la seguridad ni el acceso al contenido.

    Los contenedores apilables están fabricados con materiales resistentes al uso industrial, soportando cargas repetitivas, impactos y condiciones operativas exigentes. Además, son compatibles con sistemas de racks, estanterías y equipos de manejo de materiales.

    Gracias a su durabilidad, facilidad de apilado y eficiencia logística, los contenedores apilables son una solución práctica para mejorar la organización, reducir costos de almacenamiento y optimizar los procesos operativos.
    `,
    gallery: [
      { src: `${CONTENEDORES_BASE}/contenedores-stack/stack-1.webp`, alt: "Contenedor apilable vista 1" },
      { src: `${CONTENEDORES_BASE}/contenedores-stack/stack-2.webp`, alt: "Contenedor apilable vista 2" },
      { src: `${CONTENEDORES_BASE}/contenedores-stack/stack-3.webp`, alt: "Contenedor apilable vista 3" },
      { src: `${CONTENEDORES_BASE}/contenedores-stack/stack-4.webp`, alt: "Contenedor apilable vista 4" },
    ],
  },

  {
    slug: "wall",
    title: "Contenedor de pared recta",
    img: `${CONTENEDORES_BASE}/contenedores-wall/wall-1.webp`,
    imgAlt: "Contenedores para muro industriales",
    description: `
    El contenedor de pared recta es una solución de almacenamiento industrial diseñada para maximizar la capacidad interna y facilitar la visibilidad y el acceso al contenido. Su diseño de paredes rectas permite un uso eficiente del volumen, ideal para procesos logísticos y de manufactura.

    Este tipo de contenedor es ampliamente utilizado en almacenes, líneas de producción y áreas de trabajo donde se requiere mantener piezas y materiales organizados y fácilmente identificables. Su estructura abierta favorece la ventilación y la inspección visual del contenido.

    El contenedor de pared recta está fabricado con materiales resistentes al uso industrial, soportando cargas, impactos y manipulación constante. Es compatible con sistemas de apilado, racks y transportadores, integrándose sin problema a diferentes entornos operativos.

    Gracias a su diseño funcional, durabilidad y eficiencia espacial, el contenedor de pared recta es una solución práctica para optimizar el almacenamiento, mejorar la organización y agilizar los procesos operativos.
    `,
    gallery: [
      { src: `${CONTENEDORES_BASE}/contenedores-wall/wall-1.webp`, alt: "Contenedor para muro vista 1" },
      { src: `${CONTENEDORES_BASE}/contenedores-wall/wall-2.webp`, alt: "Contenedor para muro vista 2" },
      { src: `${CONTENEDORES_BASE}/contenedores-wall/wall-3.webp`, alt: "Contenedor para muro vista 3" },
      { src: `${CONTENEDORES_BASE}/contenedores-wall/wall-4.webp`, alt: "Contenedor para muro vista 4" },
    ],
  },
];
