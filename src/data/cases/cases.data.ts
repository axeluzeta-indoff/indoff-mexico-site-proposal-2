import type { CaseSuccess } from "../types/caseSuccess";
import { ASSETS_BASE_URL } from "../../config/assets";

const CASES_BASE = `${ASSETS_BASE_URL}/casos`;

export const CASES_SUCCESS: CaseSuccess[] = [
  {
    slug: "inspeccion-racks-industriales",
    title: "Inspección estructural de racks industriales",
    tags: ["Inspecciones"],

    heroImage: `${CASES_BASE}/caso-inspeccion-1/inspeccion-3.webp`,
    heroAlt:
      "Inspección estructural de sistemas de almacenamiento industrial en operación",

    summary:
      "Evaluación técnica de sistemas de racks para identificar riesgos estructurales, cumplir normativa vigente y asegurar la continuidad operativa sin detener la operación.",

    bullets: [
      "Diagnóstico estructural conforme a normativa aplicable",
      "Identificación de daños críticos y no críticos",
      "Inspección realizada sin interrupción de operaciones",
    ],

    body: [
      "Una instalación industrial en operación requería conocer el estado real de sus sistemas de almacenamiento para reducir riesgos y asegurar condiciones seguras de trabajo.",
      "El equipo de ingeniería de Indoff realizó una inspección técnica en sitio, evaluando bastidores, largueros, anclajes y elementos de protección, documentando cada hallazgo con evidencia fotográfica.",
      "El resultado fue un diagnóstico estructurado con observaciones priorizadas y recomendaciones técnicas claras, permitiendo planear acciones correctivas sin afectar la operación diaria.",
    ],

    gallery: [
      {
        src: `${CASES_BASE}/caso-inspeccion-1/inspeccion-1.webp`,
        alt: "Evaluación visual de estructuras de rack durante la inspección",
      },
      {
        src: `${CASES_BASE}/caso-inspeccion-1/inspeccion-2.webp`,
        alt: "Detalle de componentes estructurales inspeccionados",
      },
      {
        src: `${CASES_BASE}/caso-inspeccion-1/inspeccion-3.webp`,
        alt: "Condiciones operativas observadas durante la inspección",
      },
    ],
  },

  {
    slug: "caso-curso-1",
    title: "Capacitación DC-3 en seguridad de racks",
    tags: ["Capacitación", "Inspecciones"],

    heroImage: `${CASES_BASE}/caso-curso-1/curso-3.webp`,
    heroAlt: "Curso de seguridad en sistemas de almacenamiento industrial",

    summary:
      "Capacitación técnica alineada a NOM y ANSI para personal operativo y técnico, enfocada en seguridad, prevención de riesgos y cumplimiento normativo.",

    bullets: [
      "Curso alineado a NOM y ANSI",
      "Constancia DC-3 para los participantes",
      "Capacitación práctica basada en racks reales",
      "Inspección previa como parte del proceso formativo",
    ],

    body: [
      "Se impartió un curso especializado de 6 horas dirigido a almacenistas, ingenieros y personal operativo involucrado en el uso y supervisión de sistemas de almacenamiento industrial.",
      "El contenido del curso se alineó a los lineamientos de la normativa NOM aplicable y a los estándares internacionales ANSI, explicando de forma clara sus diferencias, alcances y responsabilidades operativas.",
      "Durante la capacitación se abordaron temas clave como la identificación de componentes del rack, daños estructurales comunes (rack killers), criterios de seguridad, y la documentación técnica requerida para una operación segura.",
      "Como parte del enfoque práctico, se realizó una inspección previa de los racks existentes, utilizando imágenes reales de la instalación para analizar riesgos, buenas prácticas y oportunidades de mejora directamente con los participantes.",
    ],

    gallery: [
      {
        src: `${CASES_BASE}/caso-curso-1/curso-1.webp`,
        alt: "Participantes durante la capacitación en seguridad de racks",
      },
      {
        src: `${CASES_BASE}/caso-curso-1/curso-2.webp`,
        alt: "Sesión práctica utilizando imágenes reales de los racks",
      },
      {
        src: `${CASES_BASE}/caso-curso-1/curso-3.webp`,
        alt: "Entrega de constancias DC-3 al finalizar el curso",
      },
    ],
  },
];

