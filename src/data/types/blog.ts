export type BlogPost = {
  slug: string;
  title: string;

  excerpt: string;        // resumen corto (SEO / listado)
  image: string;          // imagen hero

  tags: string[];         // ["Inspección", "Racks", "Seguridad"]
  publishedAt: string;    // ISO date: "2026-02-10"

  content: BlogContentBlock[]; // 👈 contenido estructurado
};

export type BlogContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };
