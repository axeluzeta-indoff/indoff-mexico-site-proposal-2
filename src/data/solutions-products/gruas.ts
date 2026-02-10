import { ASSETS_BASE_URL } from "../../config/assets";
import type { Product } from "../types/product";

/**
 * Assets:
 * /uploads/solutions/solutions-gruas/...
 */
const GRUAS_BASE = `${ASSETS_BASE_URL}/solutions/solutions-gruas`;

export const GRUAS_PRODUCTS: Product[] = [
  {
    slug: "gantry",
    title: "Grúa Gantry",
    img: `${GRUAS_BASE}/gruas-gantry/gantry-1.webp`,
    imgAlt: "Grúa gantry industrial",
    description: `
    La grúa gantry es un sistema de elevación industrial diseñado para la manipulación de cargas pesadas en interiores y exteriores, ofreciendo alta estabilidad, precisión y seguridad en el movimiento de materiales. Su estructura autoportante permite operar sin necesidad de apoyarse en la infraestructura del edificio.

    Este tipo de grúa es ideal para áreas donde no es viable instalar una grúa puente, ya que se desplaza sobre rieles o ruedas a nivel de piso, proporcionando flexibilidad operativa y cobertura amplia del área de trabajo. Es comúnmente utilizada en procesos de manufactura, mantenimiento, ensamblaje y patios industriales.

    La grúa gantry puede configurarse en distintas capacidades de carga, claros y alturas, adaptándose a requerimientos específicos de operación. Además, puede integrarse con polipastos eléctricos o manuales para optimizar la eficiencia y el control durante la manipulación de cargas.

    Gracias a su diseño robusto y versátil, la grúa gantry es una solución confiable para empresas que buscan mejorar la seguridad, productividad y control en operaciones de carga pesada, sin realizar modificaciones estructurales permanentes en sus instalaciones.
    `,

    gallery: [
      { src: `${GRUAS_BASE}/gruas-gantry/gantry-1.webp`, alt: "Grúa gantry vista 1" },
      { src: `${GRUAS_BASE}/gruas-gantry/gantry-2.webp`, alt: "Grúa gantry vista 2" },
      { src: `${GRUAS_BASE}/gruas-gantry/gantry-3.webp`, alt: "Grúa gantry vista 3" },
      { src: `${GRUAS_BASE}/gruas-gantry/gantry-4.webp`, alt: "Grúa gantry vista 4" },
    ],
  },

  {
    slug: "jib",
    title: "Grúa Jib",
    img: `${GRUAS_BASE}/gruas-jib/jib-1.webp`,
    imgAlt: "Grúa jib industrial",
    description: `
    La grúa jib es un sistema de elevación industrial diseñado para realizar maniobras rápidas y precisas en áreas de trabajo específicas, siendo ideal para estaciones individuales, líneas de producción y procesos repetitivos. Su brazo giratorio permite cubrir un área definida con alta eficiencia operativa.

    Este tipo de grúa puede instalarse fijada al piso, a una columna o a la estructura del edificio, ofreciendo configuraciones que se adaptan a distintos espacios y requerimientos de carga. Su diseño compacto la hace especialmente adecuada para zonas con espacio limitado.

    La grúa jib permite la manipulación segura de cargas mediante polipastos eléctricos o manuales, mejorando la ergonomía del operador y reduciendo tiempos de ciclo en tareas de ensamblaje, mantenimiento o transferencia de materiales.

    Gracias a su versatilidad, facilidad de operación y bajo mantenimiento, la grúa jib es una solución eficiente para empresas que buscan aumentar la productividad y seguridad en operaciones de carga localizada.
    `,

    gallery: [
      { src: `${GRUAS_BASE}/gruas-jib/jib-1.webp`, alt: "Grúa jib vista 1" },
      { src: `${GRUAS_BASE}/gruas-jib/jib-2.webp`, alt: "Grúa jib vista 2" },
      { src: `${GRUAS_BASE}/gruas-jib/jib-3.webp`, alt: "Grúa jib vista 3" },
      { src: `${GRUAS_BASE}/gruas-jib/jib-4.webp`, alt: "Grúa jib vista 4" },
    ],
  },

  {
    slug: "puente",
    title: "Grúa Puente",
    img: `${GRUAS_BASE}/gruas-puente/puente-1.webp`,
    imgAlt: "Grúa puente industrial",
    description: `
    La grúa puente es un sistema de elevación industrial diseñado para el manejo eficiente y seguro de cargas pesadas a lo largo de grandes áreas de trabajo. Su estructura se desplaza sobre rieles elevados, permitiendo cubrir amplias superficies con alta precisión y control.

    Este tipo de grúa es ideal para plantas de manufactura, líneas de producción, almacenes y procesos industriales donde se requiere mover cargas de forma continua entre distintos puntos. Su diseño optimiza los flujos de trabajo y reduce la dependencia de equipos móviles como montacargas.

    La grúa puente puede configurarse en diferentes capacidades de carga, claros y alturas, así como en versiones monorriel o de doble viga, adaptándose a los requerimientos específicos de cada operación. Se integra con polipastos eléctricos de alta confiabilidad para garantizar maniobras seguras y eficientes.

    Gracias a su robustez, durabilidad y alto desempeño, la grúa puente es una solución clave para mejorar la productividad, seguridad y control en operaciones industriales de alta exigencia.
    `,

    gallery: [
      { src: `${GRUAS_BASE}/gruas-puente/puente-1.webp`, alt: "Grúa puente vista 1" },
      { src: `${GRUAS_BASE}/gruas-puente/puente-2.webp`, alt: "Grúa puente vista 2" },
      { src: `${GRUAS_BASE}/gruas-puente/puente-3.webp`, alt: "Grúa puente vista 3" },
      { src: `${GRUAS_BASE}/gruas-puente/puente-4.webp`, alt: "Grúa puente vista 4" },
    ],
  },
];
