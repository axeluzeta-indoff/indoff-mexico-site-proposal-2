import type { Product } from "../types/product";

import { ESTANTERIAS_PRODUCTS } from "../solutions-products/estanterias";
import { GRUAS_PRODUCTS } from "../solutions-products/gruas";
import { MESAS_PRODUCTS } from "../solutions-products/mesas-elevadoras";
import { TRANSPORTADORES_PRODUCTS } from "../solutions-products/transportadores";
import { CONTENEDORES_PRODUCTS } from "../solutions-products/contenedores";
import { ANDENES_PRODUCTS } from "../solutions-products/andenes";

export function getProductsBySolutionSlug(slug: string): Product[] {
  switch (slug) {
    case "estanterias":
      return ESTANTERIAS_PRODUCTS;
    case "gruas":
      return GRUAS_PRODUCTS;
    case "mesas-elevadoras":
      return MESAS_PRODUCTS;
    case "transportadores":
      return TRANSPORTADORES_PRODUCTS;
    case "contenedores":
      return CONTENEDORES_PRODUCTS;
    case "andenes":
      return ANDENES_PRODUCTS;
    default:
      return []; // inspecciones, integraciones
  }
}

export function getProductBySlugs(
  solutionSlug: string,
  productSlug: string
): Product | undefined {
  return getProductsBySolutionSlug(solutionSlug).find(
    (p) => p.slug === productSlug
  );
}

export function getAllProductPaths() {
  const paths: Array<{
    params: { solutionSlug: string; productSlug: string };
  }> = [];

  const solutions = [
    "estanterias",
    "gruas",
    "mesas-elevadoras",
    "transportadores",
    "contenedores",
    "andenes",
  ];

  for (const solutionSlug of solutions) {
    const products = getProductsBySolutionSlug(solutionSlug);
    for (const product of products) {
      paths.push({
        params: {
          solutionSlug,
          productSlug: product.slug,
        },
      });
    }
  }

  return paths;
}
