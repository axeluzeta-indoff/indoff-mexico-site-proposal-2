import type { BlogPost } from "../types/blog";
import { ASSETS_BASE_URL } from "../../config/assets";

const BLOG_BASE = `${ASSETS_BASE_URL}/blogs`;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "inspeccion-seguridad-racks-evitar-colapsos-sanciones",
    title: "Inspección y seguridad en racks: cómo evitar colapsos y sanciones",

    excerpt:
      "Implementar inspecciones periódicas de racks industriales es clave para prevenir accidentes, evitar sanciones regulatorias y asegurar la continuidad operativa.",

    image: `${BLOG_BASE}/blog-1.webp`,

    tags: ["Inspección", "Racks", "Seguridad", "NOM", "ANSI"],
    publishedAt: "2026-02-01",

    content: [
      {
        type: "paragraph",
        text:
          "En la industria manufacturera en México, un sistema de almacenamiento seguro no es un lujo: es una obligación operativa y legal.",
      },
      {
        type: "paragraph",
        text:
          "Una falla en tus racks puede provocar accidentes graves, pérdidas económicas, paros de producción y sanciones regulatorias. Implementar inspecciones periódicas y un programa estructurado de mantenimiento no solo protege vidas, también fortalece la continuidad operativa y la reputación de la empresa.",
      },

      {
        type: "heading",
        text: "¿Por qué es clave inspeccionar tus racks?",
      },
      {
        type: "paragraph",
        text:
          "Las estructuras de almacenamiento están expuestas diariamente a impactos de montacargas, errores de apilamiento y sobrecargas que pueden deformar largueros, bastidores o accesorios.",
      },
      {
        type: "paragraph",
        text:
          "La norma ANSI MH16.1 establece límites estructurales claros sobre carga, configuración y condiciones de uso. El incumplimiento puede derivar en colapsos parciales o totales del sistema.",
      },
      {
        type: "paragraph",
        text:
          "Incluso racks correctamente diseñados pueden deteriorarse con el uso intensivo. Por ello, el Rack Manufacturers Institute (RMI) recomienda inspecciones periódicas, que pueden ser mensuales en zonas críticas y al menos anuales en operaciones estándar.",
      },

      {
        type: "heading",
        text: "Buenas prácticas para un programa de inspección",
      },
      {
        type: "list",
        items: [
          "Inspecciones visuales frecuentes, especialmente en zonas de alto tránsito.",
          "Revisión técnica anual realizada por personal calificado o externo certificado.",
          "Registro documental obligatorio de hallazgos, fechas y acciones correctivas.",
          "Capacitación al personal para identificar daños y reportarlos oportunamente.",
          "Uso de protecciones, señalización de carga máxima y demarcación de pasillos.",
        ],
      },

      {
        type: "heading",
        text: "Beneficios de un programa riguroso",
      },
      {
        type: "list",
        items: [
          "Prevención de accidentes y protección al personal.",
          "Ahorro económico al evitar paros, daños y multas.",
          "Cumplimiento normativo ante auditorías.",
          "Confianza operativa para clientes y socios.",
        ],
      },

      {
        type: "heading",
        text: "Conclusión",
      },
      {
        type: "paragraph",
        text:
          "Un sistema de racks inspeccionado de forma periódica es un componente estratégico de seguridad, cumplimiento y continuidad operativa.",
      },
    ],
  },

  {
    slug: "mantenimiento-preventivo-vs-correctivo-ahorro-industrial",
    title: "Mantenimiento preventivo vs correctivo: cuánto puedes ahorrar",

    excerpt:
      "Adoptar mantenimiento preventivo reduce paros no planeados, ahorra costos y extiende la vida útil de los equipos industriales.",

    image: `${BLOG_BASE}/blog-2.webp`,

    tags: ["Mantenimiento", "Productividad", "Ahorro", "Industria"],
    publishedAt: "2026-02-05",

    content: [
      {
        type: "paragraph",
        text:
          "En una planta industrial, los equipos y sistemas representan el corazón productivo de la operación.",
      },
      {
        type: "paragraph",
        text:
          "Un fallo inesperado no solo detiene líneas de producción, también genera pérdidas económicas por entregas retrasadas, horas improductivas y reparaciones de emergencia.",
      },

      {
        type: "heading",
        text: "Mantenimiento preventivo vs correctivo",
      },
      {
        type: "list",
        items: [
          "Correctivo: se actúa cuando el equipo ya falló. Es reactivo, impredecible y costoso.",
          "Preventivo: se basa en revisiones programadas para evitar fallas antes de que ocurran.",
        ],
      },

      {
        type: "heading",
        text: "Beneficios del mantenimiento preventivo",
      },
      {
        type: "list",
        items: [
          "Mayor confiabilidad operativa.",
          "Reducción de costos a largo plazo.",
          "Planeación eficiente de recursos.",
          "Mayor seguridad y cumplimiento.",
          "Extensión de la vida útil del equipo.",
        ],
      },

      {
        type: "heading",
        text: "Conclusión",
      },
      {
        type: "paragraph",
        text:
          "Una estrategia preventiva protege la rentabilidad, evita pérdidas inesperadas y fortalece la competitividad industrial.",
      },
    ],
  },

  {
    slug: "equipos-ergonomicos-productividad-salud-laboral",
    title: "Equipos ergonómicos: ahorros reales en productividad y salud laboral",

    excerpt:
      "Invertir en ergonomía reduce lesiones, mejora productividad y genera retornos económicos medibles.",

    image: `${BLOG_BASE}/blog-3.webp`,

    tags: ["Ergonomía", "Productividad", "Salud Laboral", "Ingeniería"],
    publishedAt: "2026-02-12",

    content: [
      {
        type: "paragraph",
        text:
          "La ergonomía industrial no es solo una iniciativa de bienestar, es una estrategia de eficiencia operativa.",
      },

      {
        type: "heading",
        text: "Impacto real de la ergonomía",
      },
      {
        type: "list",
        items: [
          "Reducción significativa de lesiones musculoesqueléticas.",
          "Incremento medible en productividad.",
          "Disminución de incapacidades laborales.",
          "Retorno de inversión positivo y sostenido.",
        ],
      },

      {
        type: "heading",
        text: "Conclusión",
      },
      {
        type: "paragraph",
        text:
          "Invertir en ergonomía mejora la salud del personal, reduce costos ocultos y fortalece la cultura de seguridad.",
      },
    ],
  },

  {
    slug: "programa-inspeccion-racks-industriales",
    title: "Cómo estructurar un programa eficaz de inspección de racks",

    excerpt:
      "Un programa formal de inspección de racks ayuda a prevenir accidentes, cumplir normativas y mantener la continuidad operativa.",

    image: `${BLOG_BASE}/blog-4.webp`,

    tags: ["Inspección", "Racks", "Seguridad", "Buenas Prácticas"],
    publishedAt: "2026-02-18",

    content: [
      {
        type: "paragraph",
        text:
          "Un bastidor deformado o un larguero dañado puede pasar desapercibido hasta que ocurre un accidente.",
      },

      {
        type: "heading",
        text: "Elementos clave de un programa eficaz",
      },
      {
        type: "list",
        items: [
          "Inspecciones visuales periódicas.",
          "Inspección técnica anual.",
          "Registro documental.",
          "Capacitación al personal.",
          "Implementación de protecciones.",
        ],
      },

      {
        type: "heading",
        text: "Conclusión",
      },
      {
        type: "paragraph",
        text:
          "Inspeccionar racks es proteger a las personas, asegurar la operación y salvaguardar la inversión.",
      },
    ],
  },
];
