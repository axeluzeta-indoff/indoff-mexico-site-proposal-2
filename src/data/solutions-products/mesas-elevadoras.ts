import { ASSETS_BASE_URL } from "../../config/assets";
import type { Product } from "../types/product";

const MESAS_BASE = `${ASSETS_BASE_URL}/solutions/solutions-mesas`;

export const MESAS_PRODUCTS: Product[] = [
  {
    slug: "floor",
    title: "Mesa Elevadora de Piso",
    img: `${MESAS_BASE}/mesas-floor/floor-1.webp`,
    imgAlt: "Mesa elevadora de piso industrial",
    description: `
    La mesa elevadora de piso es un equipo de manejo de materiales diseñado para facilitar el levantamiento y posicionamiento ergonómico de cargas directamente a nivel de suelo. Es ideal para operaciones donde se requiere elevar tarimas, cajas o componentes a una altura de trabajo segura y cómoda.

    Este tipo de mesa elevadora permite reducir el esfuerzo físico del operador, prevenir lesiones y mejorar la eficiencia en procesos de carga, descarga, ensamblaje y preparación de pedidos. Su instalación a ras de piso facilita el acceso con patines, montacargas o carros manuales.

    La mesa elevadora de piso puede configurarse en distintas capacidades de carga y recorridos de elevación, adaptándose a las necesidades específicas de cada operación. Su diseño robusto garantiza estabilidad, seguridad y operación confiable en entornos industriales exigentes.

    Gracias a su enfoque en ergonomía y productividad, la mesa elevadora de piso es una solución eficiente para optimizar procesos, mejorar la seguridad laboral y aumentar el rendimiento operativo.
    `,
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
    description: `
    La mesa elevadora hidráulica es un equipo de manejo de materiales diseñado para elevar y posicionar cargas pesadas de forma segura, precisa y controlada. Su sistema hidráulico proporciona alta capacidad de carga y estabilidad, siendo ideal para aplicaciones industriales exigentes.

    Este tipo de mesa elevadora se utiliza comúnmente en procesos de manufactura, ensamblaje, mantenimiento y logística, donde se requiere levantar cargas a diferentes alturas manteniendo un movimiento suave y confiable. Permite mejorar la ergonomía del operador y reducir riesgos asociados al manejo manual de cargas.

    La mesa elevadora hidráulica puede configurarse en distintas capacidades, dimensiones y recorridos de elevación, adaptándose a requerimientos específicos de cada operación. Su construcción robusta garantiza durabilidad y desempeño constante incluso en entornos de uso intensivo.

    Gracias a su potencia, precisión y enfoque en la seguridad operativa, la mesa elevadora hidráulica es una solución eficiente para optimizar procesos productivos, mejorar condiciones de trabajo y aumentar la eficiencia industrial.
    `,
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
    description: `
    La mesa elevadora giratoria es un equipo de manejo de materiales diseñado para elevar y rotar cargas, permitiendo un posicionamiento preciso y ergonómico durante procesos de ensamblaje, inspección y empaque. Su plataforma giratoria facilita el acceso a la carga sin necesidad de desplazamientos adicionales.

    Este tipo de mesa elevadora mejora la eficiencia operativa al reducir movimientos repetitivos del operador, disminuyendo la fatiga y el riesgo de lesiones. Es ideal para aplicaciones donde se requiere manipular productos desde diferentes ángulos de manera continua.

    La mesa elevadora giratoria puede integrarse con sistemas hidráulicos o eléctricos y configurarse en distintas capacidades de carga y diámetros de plataforma, adaptándose a las necesidades específicas de cada operación industrial.

    Gracias a su combinación de elevación y rotación, la mesa elevadora giratoria es una solución eficiente para optimizar procesos, mejorar la ergonomía y aumentar la productividad en entornos industriales.
    `,
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
    description: `
    La mesa elevadora tipo tijera es un equipo de manejo de materiales diseñado para elevar cargas de forma vertical con alta estabilidad y seguridad. Su mecanismo tipo tijera proporciona un movimiento uniforme y controlado, siendo ideal para aplicaciones industriales que requieren elevar cargas a diferentes alturas.

    Este tipo de mesa elevadora se utiliza ampliamente en procesos de manufactura, logística, mantenimiento y estaciones de trabajo, donde es necesario mejorar la ergonomía del operador y reducir el esfuerzo físico asociado al manejo manual de cargas.

    La mesa elevadora tipo tijera puede configurarse en distintas capacidades de carga, tamaños de plataforma y recorridos de elevación, adaptándose a requerimientos específicos de cada operación. Su diseño robusto garantiza durabilidad y desempeño confiable en entornos industriales exigentes.

    Gracias a su versatilidad, seguridad y facilidad de integración, la mesa elevadora tipo tijera es una solución eficiente para optimizar procesos, mejorar condiciones de trabajo y aumentar la productividad operativa.
    `,
    gallery: [
      { src: `${MESAS_BASE}/mesas-scissor/scissor-1.webp`, alt: "Mesa tipo tijera vista 1" },
      { src: `${MESAS_BASE}/mesas-scissor/scissor-2.webp`, alt: "Mesa tipo tijera vista 2" },
      { src: `${MESAS_BASE}/mesas-scissor/scissor-3.webp`, alt: "Mesa tipo tijera vista 3" },
      { src: `${MESAS_BASE}/mesas-scissor/scissor-4.webp`, alt: "Mesa tipo tijera vista 4" },
    ],
  },
];
