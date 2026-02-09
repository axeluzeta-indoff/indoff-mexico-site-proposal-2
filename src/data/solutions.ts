import { ASSETS_BASE_URL } from "../config/assets";

export type Solution = {
  slug: string;
  title: string;
  description: string;
  heroImg?: string;
  subtitle?: string;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "estanterias",
    title: "Estantería",
    description:
      "Productos y configuraciones para almacenamiento industrial: selectivo, drive-in, push-back, etc.",
    heroImg: `${ASSETS_BASE_URL}/solutions/solutions-racks/racks-selective/selectivo-1.webp`,
    subtitle:
      "Agiliza tu producción con un sistema de almacenamiento más productivo. Aprovecha al máximo el espacio y mejora la organización de tu almacén.",
  },

  {
    slug: "gruas",
    title: "Grúas",
    description:
      "Sistemas de izaje y movimiento para cargas industriales con soluciones a medida.",
    heroImg: `${ASSETS_BASE_URL}/solutions/solutions-gruas/gruas-gantry/gantry-1.webp`,
    subtitle:
      "Optimiza el movimiento de cargas pesadas con sistemas de grúas diseñados para seguridad, precisión y alto rendimiento industrial.",
  },

  {
    slug: "transportadores",
    title: "Transportadores",
    description:
      "Bandas, rodillos y líneas de transporte para optimizar flujo y productividad.",
    heroImg: `${ASSETS_BASE_URL}/solutions/solutions-transportadores/transportadores-belt/belt-1.webp`,
    subtitle:
      "Automatiza el flujo de materiales y mejora la eficiencia operativa con sistemas de transporte adaptados a tu proceso.",
  },

  {
    slug: "mesas-elevadoras",
    title: "Mesas Elevadoras",
    description:
      "Plataformas y equipos de elevación para manejo seguro y eficiente de materiales.",
    heroImg: `${ASSETS_BASE_URL}/solutions/solutions-mesas/mesas-floor/floor-4.webp`,
    subtitle:
      "Mejora la ergonomía y la seguridad en tus operaciones con soluciones de elevación confiables y robustas.",
  },

  {
    slug: "contenedores",
    title: "Contenedores",
    description:
      "Contenedores industriales, bins y soluciones para almacenamiento y surtido.",
    heroImg: `${ASSETS_BASE_URL}/solutions/solutions-contenedores/contenedores-wall/wall-2.webp`,
    subtitle:
      "Organiza, protege y optimiza el manejo de materiales con contenedores diseñados para entornos industriales exigentes.",
  },

  {
    slug: "andenes",
    title: "Andenes",
    description:
      "Equipamiento para andenes: niveladores, rampas, sellos y seguridad de carga.",
    heroImg: `${ASSETS_BASE_URL}/solutions/solutions-andenes/andenes-dockboards/dockboards-1.webp`,
    subtitle:
      "Asegura operaciones de carga y descarga más seguras, rápidas y eficientes con equipamiento especializado para andenes.",
  },

  // ⬇️ SE QUEDAN IGUAL (próximamente / estático)
  {
    slug: "integraciones",
    title: "Integraciones",
    description:
      "Integración de ingeniería y automatización para proyectos de manejo de materiales.",
    heroImg: "/images/solutions/solutions-integraciones.jpeg",
  },

  {
    slug: "inspecciones",
    title: "Inspecciones",
    description:
      "Inspecciones, auditorías y seguridad en sistemas de almacenamiento.",
    heroImg: "/images/solutions/solutions-inspecciones.jpeg",
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
