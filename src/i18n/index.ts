/**
 * Motor mínimo de i18n de interfaz (ARQUITECTURA.md D-10).
 *
 * - `IDIOMA_UI_ACTIVO` es el único idioma de interfaz encendido en el
 *   lanzamiento: español (RF-9 / D-10). Para activar inglés: agregar
 *   `src/i18n/en.ts`, importarlo en `diccionarios` y cambiar esta constante
 *   (o hacerla depender de la ruta). Nada más.
 * - `IDIOMAS_CONTENIDO` son los idiomas en los que PUEDE existir un artículo
 *   (RF-9: por artículo, opcional). Es independiente del idioma de la UI.
 */
import es from './es';
import type { Diccionario } from './es';

export const IDIOMAS_CONTENIDO = ['es', 'en'] as const;
export type IdiomaContenido = (typeof IDIOMAS_CONTENIDO)[number];

export const IDIOMA_CONTENIDO_POR_DEFECTO: IdiomaContenido = 'es';

// Idioma de la interfaz activo en el lanzamiento. Ver comentario de arriba.
export const IDIOMA_UI_ACTIVO = 'es' as const;

const diccionarios: Record<string, Diccionario> = { es };

type RutaProfunda = string; // p. ej. "articulo.fuentes"

/** Devuelve el valor (string) de una clave con notación de punto. */
function resolver(dic: Diccionario, ruta: RutaProfunda): unknown {
  return ruta.split('.').reduce<unknown>((acc, parte) => {
    if (acc && typeof acc === 'object' && parte in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[parte];
    }
    return undefined;
  }, dic);
}

/**
 * Traduce una clave. Interpola `{param}` si se pasan valores.
 * Uso: `t('articulo.lectura', { min: 12 })`.
 */
export function t(
  clave: RutaProfunda,
  params?: Record<string, string | number>,
  idioma: string = IDIOMA_UI_ACTIVO,
): string {
  const dic = diccionarios[idioma] ?? diccionarios[IDIOMA_UI_ACTIVO];
  const valor = resolver(dic, clave);
  if (typeof valor !== 'string') {
    // Falla ruidosa en build para no publicar cadenas sin traducir.
    throw new Error(`[i18n] Clave de interfaz ausente o no textual: "${clave}"`);
  }
  if (!params) return valor;
  return valor.replace(/\{(\w+)\}/g, (_, k) =>
    k in params ? String(params[k]) : `{${k}}`,
  );
}

/** Acceso al objeto crudo del diccionario (para listas, mapas de etiquetas, etc.). */
export function dict(idioma: string = IDIOMA_UI_ACTIVO): Diccionario {
  return diccionarios[idioma] ?? diccionarios[IDIOMA_UI_ACTIVO];
}
