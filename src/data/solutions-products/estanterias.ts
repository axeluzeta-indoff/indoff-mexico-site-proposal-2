import { ASSETS_BASE_URL } from "../../config/assets";
import type { Product } from "../types/product";

/**
 * En producción los assets viven en:
 * /uploads/solutions/solutions-racks/...
 */
const RACKS_BASE = `${ASSETS_BASE_URL}/solutions/solutions-racks`;

export const ESTANTERIAS_PRODUCTS: Product[] = [
  {
    slug: "selectivo",
    title: "Rack Selectivo Industrial",
    img: `${RACKS_BASE}/racks-selective/selectivo-1.webp`,
    imgAlt: "Rack selectivo industrial para almacenes y centros de distribución",

    description: `
  El rack selectivo es el sistema de almacenamiento industrial más utilizado en almacenes y centros de distribución que requieren acceso directo e inmediato a cada tarima. Su diseño permite manejar una amplia variedad de productos y SKUs, optimizando la gestión del inventario y la velocidad de operación.

  Este sistema de racks industriales es ideal para operaciones con alta rotación de mercancía, inventarios dinámicos o productos con diferentes dimensiones, pesos y fechas de caducidad. Cada posición de carga es independiente, facilitando métodos como FIFO, conteo cíclico y trazabilidad.

  El rack selectivo se adapta a distintos tipos de tarimas y es compatible con montacargas eléctricos o de combustión, permitiendo aprovechar al máximo la altura del almacén. Su estructura modular facilita la expansión y reconfiguración conforme evolucionan las necesidades operativas.

  Gracias a su diseño robusto, ofrece alta capacidad de carga, seguridad estructural y bajos costos de mantenimiento, siendo una solución flexible y escalable.
    `,

    gallery: [
      { src: `${RACKS_BASE}/racks-selective/selectivo-1.webp`, alt: "Rack selectivo industrial vista frontal" },
      { src: `${RACKS_BASE}/racks-selective/selectivo-2.webp`, alt: "Rack selectivo para tarimas en almacén" },
      { src: `${RACKS_BASE}/racks-selective/selectivo-3.webp`, alt: "Sistema de rack selectivo industrial" },
      { src: `${RACKS_BASE}/racks-selective/selectivo-4.webp`, alt: "Racks industriales selectivos en centro de distribución" },
    ],
  },


  {
    slug: "drive-in",
    title: "Rack Drive-In",
    img: `${RACKS_BASE}/racks-drivein/drivein-1.webp`,
    imgAlt: "Rack drive-in industrial",
    description: `
    El rack Drive-In es un sistema de almacenamiento industrial de alta densidad, diseñado para maximizar el aprovechamiento del espacio al eliminar pasillos y permitir que el montacargas ingrese directamente en la estructura. Es una solución ideal para almacenes que manejan grandes volúmenes de producto homogéneo por referencia.

    Este sistema es especialmente eficiente cuando se trabaja con pocos SKUs y alta rotación por lote, ya que permite almacenar múltiples tarimas en profundidad bajo un esquema LIFO (Last In, First Out). Su diseño incrementa significativamente la capacidad de almacenaje por metro cuadrado.

    El rack Drive-In está pensado para operaciones donde la densidad y el volumen son prioritarios sobre el acceso individual a cada tarima. Se adapta a diferentes alturas y capacidades de carga, ajustándose a las necesidades específicas de cada almacén.

    Gracias a su estructura robusta y su enfoque en eficiencia espacial, el rack Drive-In es una solución confiable para cámaras de refrigeración, almacenes de producto terminado y centros logísticos que buscan máxima capacidad de almacenamiento con una inversión optimizada.
    `,

    gallery: [
      { src: `${RACKS_BASE}/racks-drivein/drivein-1.webp`, alt: "Drive-in vista 1" },
      { src: `${RACKS_BASE}/racks-drivein/drivein-2.webp`, alt: "Drive-in vista 2" },
      { src: `${RACKS_BASE}/racks-drivein/drivein-3.webp`, alt: "Drive-in vista 3" },
      { src: `${RACKS_BASE}/racks-drivein/drivein-4.webp`, alt: "Drive-in vista 4" },
    ],
  },

  {
    slug: "push-back",
    title: "Rack Push Back",
    img: `${RACKS_BASE}/racks-pushback/pushback-1.webp`,
    imgAlt: "Rack push back",
    description: `
    El rack Push Back es un sistema de almacenamiento industrial por gravedad que permite almacenar múltiples tarimas en profundidad por cada nivel, incrementando la densidad de almacenamiento sin sacrificar velocidad operativa. Es una solución intermedia entre el rack selectivo y los sistemas de alta densidad.

    Este sistema funciona mediante carros o plataformas inclinadas que se desplazan sobre rieles, permitiendo que cada tarima empuje a la siguiente al momento de carga. Opera bajo el principio LIFO (Last In, First Out), siendo ideal para almacenes con rotación controlada y productos por lote.

    El rack Push Back reduce la cantidad de pasillos necesarios, optimizando el uso del espacio disponible y mejorando la productividad del montacargas, ya que todas las operaciones se realizan desde un solo pasillo frontal. Es compatible con distintos tipos de tarimas y capacidades de carga.

    Gracias a su diseño robusto y eficiente, el rack Push Back es una solución confiable para centros de distribución que buscan mayor densidad de almacenaje, rapidez en la operación y flexibilidad sin la complejidad de sistemas completamente dinámicos.
    `,
    gallery: [
      { src: `${RACKS_BASE}/racks-pushback/pushback-1.webp`, alt: "Push back vista 1" },
      { src: `${RACKS_BASE}/racks-pushback/pushback-2.webp`, alt: "Push back vista 2" },
      { src: `${RACKS_BASE}/racks-pushback/pushback-3.webp`, alt: "Push back vista 3" },
      { src: `${RACKS_BASE}/racks-pushback/pushback-4.webp`, alt: "Push back vista 4" },
    ],
  },

  {
    slug: "dinamico",
    title: "Rack Dinámico",
    img: `${RACKS_BASE}/racks-dinamico/dinamico-1.webp`,
    imgAlt: "Rack dinámico",
    description: `
    El rack dinámico es un sistema de almacenamiento industrial por gravedad diseñado para optimizar la rotación de inventarios bajo el principio FIFO (First In, First Out). Es ideal para operaciones donde el control de caducidades, la trazabilidad y el flujo continuo de mercancía son críticos.

    Este sistema utiliza rodillos o rieles inclinados que permiten que las tarimas se desplacen automáticamente desde el punto de carga hasta el punto de descarga, reduciendo tiempos de operación y minimizando la intervención del montacargas dentro del rack.

    El rack dinámico maximiza la densidad de almacenamiento al reducir pasillos, al mismo tiempo que mantiene un flujo ordenado y seguro de las tarimas. Es especialmente recomendado para industrias alimentaria, farmacéutica y de consumo masivo, donde la rotación constante es indispensable.

    Gracias a su diseño eficiente y su alta confiabilidad operativa, el rack dinámico mejora la productividad, disminuye errores en la gestión de inventarios y garantiza una operación logística más ágil y controlada.
    `,
    gallery: [
      { src: `${RACKS_BASE}/racks-dinamico/dinamico-1.webp`, alt: "Dinámico vista 1" },
      { src: `${RACKS_BASE}/racks-dinamico/dinamico-2.webp`, alt: "Dinámico vista 2" },
      { src: `${RACKS_BASE}/racks-dinamico/dinamico-3.webp`, alt: "Dinámico vista 3" },
      { src: `${RACKS_BASE}/racks-dinamico/dinamico-4.webp`, alt: "Dinámico vista 4" },
    ],
  },

  {
    slug: "mezzanine",
    title: "Mezzanine Industrial",
    img: `${RACKS_BASE}/racks-mezzanine/mezzanine-1.webp`,
    imgAlt: "Mezzanine industrial",
    description: `
    El mezzanine industrial es una estructura metálica diseñada para multiplicar el área útil del almacén aprovechando la altura disponible, sin necesidad de ampliar la superficie construida. Es una solución eficiente para crear nuevos niveles de trabajo, almacenamiento u oficinas dentro de la nave.

    Este sistema permite integrar áreas de picking, almacenamiento ligero, producción o espacios administrativos, adaptándose a las necesidades específicas de cada operación. Su diseño modular facilita la personalización en dimensiones, capacidades de carga y configuraciones.

    El mezzanine industrial se instala de forma independiente o integrada con sistemas de racks, escaleras, barandales y accesos, garantizando seguridad estructural y cumplimiento con normativas industriales. Además, puede desmontarse o reconfigurarse conforme evolucionan los requerimientos del negocio.

    Gracias a su versatilidad y aprovechamiento vertical, el mezzanine industrial es una solución rentable para empresas que buscan optimizar espacio, mejorar la organización y aumentar la productividad sin realizar obras civiles mayores.
    `,
    gallery: [
      { src: `${RACKS_BASE}/racks-mezzanine/mezzanine-1.webp`, alt: "Mezzanine vista 1" },
      { src: `${RACKS_BASE}/racks-mezzanine/mezzanine-2.webp`, alt: "Mezzanine vista 2" },
      { src: `${RACKS_BASE}/racks-mezzanine/mezzanine-3.webp`, alt: "Mezzanine vista 3" },
      { src: `${RACKS_BASE}/racks-mezzanine/mezzanine-4.webp`, alt: "Mezzanine vista 4" },
    ],
  },
];
