import { getCollection } from 'astro:content';

/*
  RF-2 / CA-2 — Umbral de navegación por secciones.

  Las secciones crecen de forma orgánica: una sección nace recién cuando hay
  contenido que la llena (ver REQUISITOS.md, "Fuera de scope" y CA-2). Mientras
  haya UNA sola sección, no se muestra la UI de navegación por sección —un
  "elegí una de la lista" con un solo destino se lee como plantilla a medio
  armar y una única cara ("Viajero digital") no representa el blog—.

  Esto NO toca el modelo de datos: el campo `secciones` del frontmatter del
  artículo sigue igual y la clasificación queda registrada. Solo se oculta:
   - el enlace "Secciones" de la navegación (Cabecera)
   - la vitrina "Explorar por sección" de la home
   - la página /secciones (redirige a la home)
   - las rutas /seccion/[seccion] (no se generan)
   - el enlace a la sección en la ficha del artículo (queda como texto)

  Cuando exista la 2.ª sección, todo vuelve a aparecer solo.
*/
export const MIN_SECCIONES_NAVEGABLES = 2;

export async function seccionesNavegables(): Promise<boolean> {
  const secciones = await getCollection('secciones');
  return secciones.length >= MIN_SECCIONES_NAVEGABLES;
}
