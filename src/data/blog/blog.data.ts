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
          "Una falla en tus racks puede causar accidentes graves, pérdidas económicas, paros de producción y sanciones regulatorias. Implementar inspecciones periódicas y un programa robusto de mantenimiento no solo protege vidas, sino que también minimiza riesgos operativos y fortalece tu reputación como empresa seria y comprometida.",
      },

      {
        type: "heading",
        text: "¿Por qué es clave inspeccionar tus racks?",
      },
      {
        type: "paragraph",
        text:
          "Las estructuras de almacenamiento como racks metálicos están sujetas a impactos, montacargas, errores de apilamiento, sobrecargas, que pueden deformar vigas, columnas o dañar accesorios.",
      },
      {
        type: "paragraph",
        text:
          "La norma internacional ANSI MH16.1-2023 define límites estructurales (cargas, altura, configuración) y especifica que el incumplimiento puede llevar al colapso del sistema.",
      },
      {
        type: "paragraph",
        text:
          "Incluso estructuras bien diseñadas pueden deteriorarse con el uso intensivo, por eso el organismo Rack Manufacturers Institute (RMI) recomienda inspecciones periódicas que en escenarios de alta rotación o tráfico intenso pueden ser mensuales, y al menos anuales en operaciones estándar.",
      },

      {
        type: "heading",
        text: "Buenas prácticas para un programa de inspección",
      },
      {
        type: "list",
        items: [
          "Inspecciones visuales frecuentes: idealmente mensuales en zonas de alto tránsito; revisar columnas, vigas, pasillos.",
          "Revisión técnica anual por personal calificado / certificación externa: incluye verificación estructural, integridad de soldaduras, pernos, verticalidad; recomendable realizarla durante paros planificados.",
          "Registro documental obligatorio: fecha, hallazgos, acciones correctivas y responsable. Esto además de reforzar seguridad, respalda cumplimiento normativo.",
          "Capacitación al personal: enseñarles a reconocer signos de daño, reportar irregularidades y actuar con bloqueo inmediato del área en casos críticos.",
          "Protecciones adicionales: bases anti-impacto, señalética de carga máxima, demarcaciones de pasillos y rutas de emergencia.",
        ],
      },

      {
        type: "heading",
        text: "Beneficios de un programa riguroso",
      },
      {
        type: "list",
        items: [
          "Prevención de accidentes: reduce el riesgo de colapsos, caídas de carga, choques con montacargas u otros daños.",
          "Ahorro económico: evita pérdidas por productos dañados, tiempo de inactividad, compensaciones laborales y posibles multas por incumplimiento.",
          "Cumplimiento regulatorio: asegurar conformidad con normativas nacionales (condiciones de seguridad de almacén) y estándares internacionales. Las revisiones documentadas facilitan auditorías.",
          "Confianza y reputación: clientes y socios valoran un almacén seguro; reduce riesgo de responsabilidades legales.",
        ],
      },

      {
        type: "heading",
        text: "Conclusión",
      },
      {
        type: "paragraph",
        text:
          "Un sistema de racks bien inspeccionado y mantenido no solo garantiza seguridad para tu personal, también es un componente estratégico de continuidad operativa, ahorro y cumplimiento normativo. Al invertir hoy en un programa de inspección profesional, tu empresa fortalece su competitividad, minimiza riesgos y refuerza su reputación en el sector manufacturero.",
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
          "Un fallo inesperado no solo detiene líneas, sino que genera pérdidas millonarias por paros y retrabajos. Adoptar una estrategia de mantenimiento preventivo en lugar de reaccionar ante fallos, se traduce en estabilidad operativa, ahorro real y longevidad de tus activos.",
      },

      {
        type: "heading",
        text: "¿Qué significa mantenimiento preventivo y correctivo?",
      },

      {
        type: "list",
        items: [
          "Mantenimiento correctivo: intervenir cuando un equipo falla, es reactivo, impredecible y muchas veces costoso.",
          "Mantenimiento preventivo / planificado: calendario de revisiones, reemplazo programado de componentes, lubricación, calibraciones, busca evitar fallos antes de que ocurran.",
        ],
      },

      {
        type: "heading",
        text: "¿Por qué el mantenimiento correctivo te cuesta caro?",
      },

      {
        type: "list",
        items: [
          "Los cortes inesperados de línea generan paros no planificados: pérdida de producción, entregas retrasadas, costos de reacción.",
          "Los daños pueden ser mayores: una falla pequeña ignorada puede provocar daño estructural o contagio a otros sistemas.",
          "Costos de reparación emergente suelen ser mayores que mantenimiento, repuestos urgentes, horas extra, pérdida de oportunidad."
        ],
      },

      {
        type: "paragraph",
        text:
          "Estudios de la industria indican que las pérdidas por downtime no planificado representan montos elevados (dependiendo del proceso/producto), lo cual hace imprescindible un enfoque preventivo.",
      },

      {
        type: "heading",
        text: "Beneficios del mantenimiento preventivo",
      },
      {
        type: "list",
        items: [
          "Mayor confiabilidad operativa: minimiza fallos inesperados, asegura continuidad de producción.",
          "Reducción de costos a largo plazo: piezas sustituidas a tiempo, menor desgaste general, optimización de consumibles.",
          "Mejor planificación de recursos: permites programar paros en tiempos de baja demanda o mantenimiento preventivo durante fines de semana; menos urgencias.",
          "Seguridad y cumplimiento: evita riesgos asociados a fallos mecánicos, protege maquinaria, producto y personal.",
          "Vida útil extendida del equipo: intervención temprana amplía la vida del activo y evita degradación acelerada.",
        ],
      },

      {
        type: "heading",
        text: "Cómo implementarlo correctamente: pasos prácticos",
      },

      {
        type: "list",
        items: [
          "Inventario de activos críticos: identifica qué equipos o sistemas podrían paralizar tu producción si fallan.",
          "Programa de mantenimiento: calendario anual / mensual, repuestos de reserva, checklist de tareas.",
          "KPIs de desempeño: indicadores como MTBF (tiempo medio entre fallas), MTTR (tiempo medio de reparación), disponibilidad, tasa de fallas.",
          "Historial documentado: registros de mantenimiento, reportes de fallas, ajustes, ayudan a hacer análisis de tendencias.",
          "Capacitación del personal: operadores y mantenimiento deben conocer buenas prácticas, rutinas de revisión, señales de alerta.",
          "Análisis costo-beneficio: compara el costo anual del mantenimiento vs. el costo estimado de fallas + downtime.",
        ],
      },

      {
        type: "heading",
        text: "Caso ilustrativo",
      },
      {
        type: "paragraph",
        text:
          "Imagina una línea de producción cuyos paros correctivos representan 8 horas de inactividad por semana. Si cada hora perdida representa un valor de USD 1,000 en producción, son US$8,000 por semana; al año, más de US$416,000 perdidos. Con mantenimiento preventivo, incluso reduciendo a un paro de solo 4 horas al mes para mantenimiento programado, la diferencia puede ser de varios cientos de miles al año.",
      },

      {
        type: "heading",
        text: "Conclusión",
      },
      {
        type: "paragraph",
        text:
          "Para una industria manufacturera en México, adoptar un enfoque proactivo de mantenimiento es sinónimo de estabilidad, ahorro y competitividad. Una estrategia bien planificada no solo prolonga la vida de tus activos, sino que protege tu rentabilidad, evita pérdidas inesperadas y fortalece la confianza de clientes y socios.",
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
          "Invirtiendo en ergonomía no solo proteges a tu personal: transformas tu planta en una fábrica más eficiente, competitiva y rentable. Un entorno de trabajo bien diseñado reduce lesiones, eleva productividad, mejora calidad y reduce costos de ausentismo y rotación.",
      },

      {
        type: "heading",
        text: "¿Qué es ergonomía y por qué importa en manufactura?",
      },
      {
        type: "paragraph",
        text:
          "La ergonomía se refiere al diseño de estaciones de trabajo y herramientas pensadas para adaptarse al cuerpo humano, minimizando esfuerzos, posturas forzadas, movimientos repetitivos o fatiga. En manufactura, donde las tareas físicas son intensas y repetitivas, las consecuencias de ignorar la ergonomía suelen traducirse en lesiones musculoesqueléticas, ausentismo, baja productividad y errores.",
      },
       {
        type: "heading",
        text: "Evidencia: ergonomía = salud + eficiencia",
      },
      {
        type: "paragraph",
        text:
          "Un meta-análisis reciente mostró que intervenciones ergonómicas reducen significativamente el dolor musculoesquelético (espalda baja, cuello, extremidades) en trabajadores industriales. En empresas que rediseñaron líneas de ensamble con criterios ergonómicos se reportó un aumento de productividad de ≈ 16% y una disminución del riesgo biomecánico de 22.7% en dos años.",
      },
      {
        type: "paragraph",
        text:
          "Un estudio de caso mostró que con intervenciones ergonómicas en manufactura se redujeron lesiones laborales hasta ≈ 30%, junto con mejoras en bienestar, clima laboral y retención de personal.",
      },
      {
        type: "paragraph",
        text:
          "Algunos informes de industria estiman que cada dólar invertido en ergonomía puede devolver entre 3 y 6 dólares en ahorro por productividad, menos ausentismo y menor rotación.",
      },
      {
        type: "heading",
        text: "Buenas prácticas ergonómicas en plantas industriales",
      },
      {
        type: "list",
        items: [
          "Diseño de estaciones de trabajo: ajustar altura, disposición de herramientas, minimizar movimientos innecesarios; evitar posturas forzadas. Usa metodología como REBA / RULA para evaluar riesgos.",
          "Uso de herramientas ergonómicas: balancers, mesas ajustables, ayudas mecánicas para levantamiento, polipastos, reducen esfuerzo físico y fatiga.",
          "Capacitación y concientización: entrenar a los operarios en posturas correctas, pausas activas, buenas prácticas de levantamiento.",
          "Monitorización y mejora continua: evaluar resultados con KPIs (ausentismo, tasa de lesiones, productividad, calidad), ajustar estaciones según datos.",
          "Cultura de bienestar y seguridad: integrar ergonomía como parte de la estrategia de salud ocupacional y productividad, no como costo adicional.",
        ],
      },

      {
        type: "heading",
        text: "Conclusión",
      },
      {
        type: "paragraph",
        text:
          "Invertir en ergonomía es uno de los movimientos más inteligentes que una planta de manufactura puede hacer hoy. Los resultados van más allá de la prevención de lesiones: aumentan la eficiencia, reducen costos, mejoran la calidad y fortalecen la cultura interna. Si buscas transformar tu operación en una fábrica moderna, rentable y humana, la ergonomía es clave.",
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
          "Imagina que entras a tu almacén un lunes por la mañana: racks llenos, montacargas moviéndose, cargas en proceso de entrada y salida. Todo luce en orden… hasta que un pasillo se cierra, un bastidor se dobla, o un larguero falla. En ese instante, no solo pierdes mercancía, puedes enfrentar accidentes, paros de producción, costos inesperados, incluso sanciones.",
      },
      {
        type: "paragraph",
        text:
          "Por eso, un programa de inspección realista, consistente y riguroso no es solo buena práctica: es una inversión en seguridad, continuidad y reputación. En este blog exploramos por qué inspeccionar racks debe ser prioridad en cualquier planta manufacturera, qué revisar, cómo estructurar un programa y qué puedes ganar con ello.",
      },
      {
        type: "heading",
        text: "¿Por qué inspeccionar tus racks con regularidad?",
      },
      {
        type: "list",
        items: [
          "Uso intensivo y desgaste constante: los racks en almacenes industriales reciben cargas pesadas y repetitivas, impactos de montacargas, movimientos constantes. Con el tiempo, el metal se fatiga, las soldaduras pueden aflojarse, los largueros doblarse. Sin supervisión, lo que parecía estable puede volverse peligroso.",
          "Riesgo real de colapsos y accidentes: estructuras dañadas representan una amenaza para personas, mercancía y continuidad de operaciones. Un colapso puede generar lesiones, pérdidas millonarias y responsabilidades legales.",
          "Cumplimiento normativo y buenas prácticas: organismos internacionales recomiendan inspecciones periódicas; ignorarlas no sólo es riesgo operativo, también reputacional.",
        ],
      },

      {
        type: "heading",
        text: "Señales de alerta: ¿qué revisar en cada rack?",
      },
      {
        type: "paragraph",
        text:
          "Algunas señales pueden pasar desapercibidas, por eso es vital tener una lista clara. Revisa:",
      },
      {
        type: "list",
        items: [
          "Bastidores: abolladuras, golpes, corrosión, pérdida de verticalidad.",
          "Largueros: dobleces, grietas, placas de carga visibles, soldaduras dañadas.",
          "Etiquetas de carga máxima: visibles, legibles y actualizadas, permiten evitar sobrecargas.",
          "Anclajes y piso: que el piso esté nivelado y los anclajes firmes. Suelo irregular o agrietado puede comprometer la estabilidad.",
          "Pasillos y rutas de movimiento: sin obstrucciones, con demarcaciones claras, suficiente espacio para maniobras seguras."
        ],
      },

      {
        type: "heading",
        text: "¿Cómo estructurar un programa de inspección eficaz?",
      },
      {
        type: "paragraph",
        text:
          "Para asegurar que la revisión de racks no quede en “cuando nos acordamos”, lo ideal es:",
      },
      {
        type: "list",
        items: [
          "Inspecciones visuales frecuentes: idealmente mensuales si el almacén tiene alta rotación o tráfico, revisar puntos críticos como bastidores, largueros, anclajes.",
          "Inspección técnica anual por personal calificado: que incluya verificación estructural como soldaduras, carga máxima, deformaciones, integridad general.",
          "Registro documental claro: fecha, responsable, hallazgos, acciones correctivas, útil para auditorías internas o externas.",
          "Capacitación al personal operativo y de mantenimiento: enseñarles a identificar daños, reportar irregularidades y evitar uso en condiciones no seguras.",
          "Protecciones adicionales: bases anti-impacto, señalética de carga máxima, demarcaciones, señalización de pasillos y zonas de riesgo."
        ],
      },

      {
        type: "heading",
        text: "Beneficios directos de un buen programa de inspección",
      },
      {
        type: "list",
        items: [
          "Menor riesgo de accidentes y lesiones: protege a tu equipo humano y evita costos por incidentes.",
          "Menor pérdida de mercancía o infraestructura: cargas dañadas, colapsos, costos de reparación o reemplazo.",
          "Continuidad operativa: evitar paros inesperados, retrasos, afectaciones a entregas.",
          "Cumplimiento y reputación: operaciones alineadas con estándares internacionales, genera confianza ante clientes, socios o auditores.",
          "Ahorro en costos ocultos: reparaciones mayores, multas, rescates, seguros, paros; todo es mucho más caro que la inspección preventiva."
        ],
      },

      {
        type: "heading",
        text: "Cómo empezar: checklist básico para tu primer diagnóstico",
      },
      {
        type: "list",
        items: [
          "Selecciona todas las zonas del almacén, todos los racks, andenes, pasillos, accesos.",
          "Haz una inspección visual general: bastidores, largueros, etiquetas, anclajes, suelo.",
          "Marca y documenta cualquier irregularidad: fecha, rack, tipo de daño, prioridad de acción.",
          "Programa inspección técnica profesional (externa o personal certificado).",
          "Establece cronograma de revisiones periódicas (por ejemplo: mensual + anual técnico).",
          "Capacita equipo en detección de riesgos, reportes y protocolos de emergencia.",
        ],
      },

      {
        type: "heading",
        text: "Conclusión",
      },
      {
        type: "paragraph",
        text:
          "Inspeccionar y mantener en buen estado tus racks no es un gasto: es protección de tu operación, tu gente y tu inversión. Cada hora sin revisar puede esconder riesgos que, con el tiempo, podrían costar muchísimo más, en seguridad, en dinero, en reputación. Al adoptar un programa de inspección serio, estás dando un paso firme hacia una operación más segura, eficiente y confiable.",
      },
    ],
  },
];
