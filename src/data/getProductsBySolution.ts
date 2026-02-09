import type { Product } from "./types/product";

import { ESTANTERIAS_PRODUCTS } from "./solutions-products/estanterias";
import { GRUAS_PRODUCTS } from "./solutions-products/gruas";
import { TRANSPORTADORES_PRODUCTS } from "./solutions-products/transportadores";
import { MESAS_PRODUCTS } from "./solutions-products/mesas-elevadoras";
import { CONTENEDORES_PRODUCTS } from "./solutions-products/contenedores";
import { ANDENES_PRODUCTS } from "./solutions-products/andenes";

export function getProductsBySolutionSlug(slug: string): Product[] {
  switch (slug) {
    case "estanterias":
      return ESTANTERIAS_PRODUCTS;
    case "gruas":
      return GRUAS_PRODUCTS;
    case "transportadores":
      return TRANSPORTADORES_PRODUCTS;
    case "mesas-elevadoras":
      return MESAS_PRODUCTS;
    case "contenedores":
      return CONTENEDORES_PRODUCTS;
    case "andenes":
      return ANDENES_PRODUCTS;
    default:
      return [];
  }
}
