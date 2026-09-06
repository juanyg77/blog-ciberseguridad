/**
 * ARQUITECTURA.md 3.1 — Feed cronológico (vista SECUNDARIA). Usa la consulta
 * central: solo artículos publicados (borrador !== true && fecha <= ahora).
 */
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getArticulosPublicadosPorIdioma, rutaArticulo } from '../lib/articulos';
import { dict } from '../i18n';

export async function GET(context: APIContext) {
  const articulos = await getArticulosPublicadosPorIdioma('es');
  const site = context.site ?? new URL('https://elquelassabetodas.com');
  return rss({
    title: dict().sitio.nombre,
    description: dict().sitio.descripcion,
    site,
    trailingSlash: false, // coherente con astro.config (trailingSlash: 'never')
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    items: articulos.map((a) => ({
      title: a.data.titulo,
      description: a.data.resumen,
      pubDate: a.data.fechaPublicacion,
      link: rutaArticulo(a),
      categories: [...a.data.tags, a.data.nivel],
    })),
    customData:
      `<language>es-AR</language>` +
      `<atom:link href="${new URL('/rss.xml', site).href}" rel="self" type="application/rss+xml"/>`,
  });
}
