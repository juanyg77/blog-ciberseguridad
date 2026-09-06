/**
 * CONSULTA CENTRAL DE CONTENIDO (ARQUITECTURA.md 3.2 + patrón 7).
 *
 * Única fuente de verdad de "qué está publicado". La usan TODOS los consumidores:
 * home, /seccion/[seccion], /no-tecnico, /tecnico, /recientes, rss.xml, el
 * contenido entregado a Pagefind y el getStaticPaths() de [lang]/[...slug].astro.
 *
 * Condición de publicación (ambas, ARQUITECTURA.md 3.2):
 *     borrador !== true   Y   fechaPublicacion <= ahora
 *
 * Huso horario: America/Argentina/Cordoba (UTC−3, sin horario de verano).
 * Una `fechaPublicacion: 2026-09-10` sin hora = inicio de ese día en Córdoba
 * (2026-09-10T00:00:00-03:00), no medianoche UTC.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Articulo = CollectionEntry<'articulos'>;
export type Aviso = CollectionEntry<'avisos'>;

const OFFSET_CORDOBA_MS = 3 * 60 * 60 * 1000; // UTC−3 fijo

/**
 * Instante real de publicación.
 * Heurística documentada: si el valor del frontmatter es una fecha sin hora,
 * el parser YAML lo deja como medianoche UTC. En ese caso lo interpretamos como
 * medianoche en Córdoba (= +3 h). Si el autor puso una fecha-hora con offset
 * explícito (hora distinta de 00:00:00.000 UTC), se respeta tal cual.
 * `CONTRIBUIR.md` documenta el formato.
 */
export function instanteDePublicacion(fecha: Date): number {
  const esFechaSinHora =
    fecha.getUTCHours() === 0 &&
    fecha.getUTCMinutes() === 0 &&
    fecha.getUTCSeconds() === 0 &&
    fecha.getUTCMilliseconds() === 0;
  return esFechaSinHora ? fecha.getTime() + OFFSET_CORDOBA_MS : fecha.getTime();
}

export function estaPublicado(articulo: Articulo, ahora: number = Date.now()): boolean {
  if (articulo.data.borrador === true) return false;
  return instanteDePublicacion(articulo.data.fechaPublicacion) <= ahora;
}

function ordenarPorFechaDesc(a: Articulo, b: Articulo): number {
  return (
    instanteDePublicacion(b.data.fechaPublicacion) -
    instanteDePublicacion(a.data.fechaPublicacion)
  );
}

/** Todos los artículos publicados (cualquier idioma), más nuevos primero. */
export async function getArticulosPublicados(): Promise<Articulo[]> {
  const ahora = Date.now();
  const todos = await getCollection('articulos');
  return todos.filter((a) => estaPublicado(a, ahora)).sort(ordenarPorFechaDesc);
}

/** Publicados de un idioma de contenido concreto. */
export async function getArticulosPublicadosPorIdioma(
  idioma: string,
): Promise<Articulo[]> {
  return (await getArticulosPublicados()).filter((a) => a.data.idioma === idioma);
}

/** RF-1: listado por nivel (la fuente de verdad es el campo, no la carpeta). */
export async function getArticulosPorNivel(
  nivel: 'no-tecnico' | 'tecnico',
  idioma = 'es',
): Promise<Articulo[]> {
  return (await getArticulosPublicadosPorIdioma(idioma)).filter(
    (a) => a.data.nivel === nivel,
  );
}

/** RF-2: listado por sección. */
export async function getArticulosPorSeccion(
  seccionId: string,
  idioma = 'es',
): Promise<Articulo[]> {
  return (await getArticulosPublicadosPorIdioma(idioma)).filter((a) =>
    a.data.secciones.some((ref) => ref.id === seccionId),
  );
}

/** RF-9: la otra versión idiomática del mismo artículo, si existe y está publicada. */
export async function getTraduccion(articulo: Articulo): Promise<Articulo | undefined> {
  const publicados = await getArticulosPublicados();
  return publicados.find(
    (a) =>
      a.data.slugCanonico === articulo.data.slugCanonico &&
      a.data.idioma !== articulo.data.idioma,
  );
}

/** URL canónica de un artículo: /{idioma}/{nivel}/{slug}. */
export function rutaArticulo(articulo: Articulo): string {
  return `/${articulo.data.idioma}/${articulo.data.nivel}/${articulo.data.slug}`;
}

/** Partes de ruta para getStaticPaths de [lang]/[...slug].astro. */
export function paramsDeArticulo(articulo: Articulo): {
  lang: string;
  slug: string;
} {
  return {
    lang: articulo.data.idioma,
    slug: `${articulo.data.nivel}/${articulo.data.slug}`,
  };
}

/** Aviso activo más reciente (RF-11): banner en la home. */
export async function getAvisoActivo(): Promise<Aviso | undefined> {
  const avisos = await getCollection('avisos');
  return avisos
    .filter((a) => a.data.activo === true)
    .sort((a, b) => b.data.fecha.getTime() - a.data.fecha.getTime())[0];
}

/** Estimación de minutos de lectura a partir del cuerpo renderizado. */
export function minutosDeLectura(texto: string): number {
  const palabras = texto.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 200));
}
