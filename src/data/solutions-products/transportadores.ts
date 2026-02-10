import { ASSETS_BASE_URL } from "../../config/assets";
import type { Product } from "../types/product";

const TRANSPORTADORES_BASE = `${ASSETS_BASE_URL}/solutions/solutions-transportadores`;

export const TRANSPORTADORES_PRODUCTS: Product[] = [
  {
    slug: "belt",
    title: "Transportador de Banda",
    img: `${TRANSPORTADORES_BASE}/transportadores-belt/belt-1.webp`,
    imgAlt: "Transportador de banda industrial",
    description: `
    El transportador de banda es un sistema de manejo de materiales diseñado para el movimiento continuo y eficiente de productos a lo largo de líneas de producción, centros de distribución y procesos logísticos. Es una solución versátil que permite transportar mercancía de forma estable, controlada y segura.

    Este tipo de transportador es ideal para el traslado de productos de diferentes tamaños, formas y pesos, manteniendo un flujo constante que reduce tiempos muertos y mejora la productividad operativa. Puede configurarse en tramos rectos, curvos o inclinados según las necesidades del proceso.

    El transportador de banda se adapta a múltiples aplicaciones industriales, integrándose fácilmente con sistemas automatizados, estaciones de trabajo y otros equipos de manejo de materiales. Su diseño permite seleccionar distintos tipos de bandas, velocidades y estructuras para cumplir con requerimientos específicos.

    Gracias a su eficiencia, bajo mantenimiento y capacidad de operación continua, el transportador de banda es una solución clave para optimizar procesos productivos, mejorar el control del flujo de materiales y aumentar la eficiencia general de la operación.
    `,
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
    description: `
    El transportador low profile es un sistema de manejo de materiales diseñado para integrarse en espacios reducidos sin comprometer el rendimiento ni la continuidad del proceso. Su perfil bajo lo hace ideal para estaciones de trabajo, líneas de ensamblaje y aplicaciones donde la altura disponible es limitada.

    Este tipo de transportador permite el movimiento suave y controlado de productos ligeros y medianos, facilitando la ergonomía del operador y mejorando el flujo entre procesos consecutivos. Es comúnmente utilizado en industrias de alimentos, bebidas, farmacéutica y manufactura ligera.

    El transportador low profile se adapta fácilmente a configuraciones rectas o curvas y puede integrarse con equipos automatizados, mesas de trabajo y sistemas de inspección. Su diseño compacto simplifica la instalación y reduce la necesidad de modificaciones en la infraestructura existente.

    Gracias a su eficiencia, versatilidad y bajo mantenimiento, el transportador low profile es una solución práctica para optimizar procesos productivos en espacios donde cada centímetro cuenta.
    `,

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
    description: `
    El transportador de rodillos es un sistema de manejo de materiales diseñado para el desplazamiento eficiente de cargas medianas y pesadas dentro de procesos logísticos, productivos y de almacenaje. Es una solución robusta y confiable para mover productos de forma controlada entre diferentes etapas de la operación.

    Este tipo de transportador puede operar por gravedad o mediante motorización, permitiendo adaptarse a distintos flujos de trabajo y niveles de automatización. Es ideal para el manejo de cajas, tarimas, contenedores y productos con base rígida.

    El transportador de rodillos se integra fácilmente en líneas de producción, áreas de picking, clasificación y despacho, reduciendo el uso de equipos manuales y mejorando la eficiencia operativa. Puede configurarse en tramos rectos, curvos o inclinados según las necesidades del layout.

    Gracias a su alta resistencia, bajo mantenimiento y flexibilidad de configuración, el transportador de rodillos es una solución eficiente para optimizar el flujo de materiales y aumentar la productividad en entornos industriales exigentes.
    `,
    gallery: [
      { src: `${TRANSPORTADORES_BASE}/transportadores-roller/roller-1.webp`, alt: "Transportador de rodillos vista 1" },
      { src: `${TRANSPORTADORES_BASE}/transportadores-roller/roller-2.webp`, alt: "Transportador de rodillos vista 2" },
      { src: `${TRANSPORTADORES_BASE}/transportadores-roller/roller-3.webp`, alt: "Transportador de rodillos vista 3" },
      { src: `${TRANSPORTADORES_BASE}/transportadores-roller/roller-4.webp`, alt: "Transportador de rodillos vista 4" },
    ],
  },
];
