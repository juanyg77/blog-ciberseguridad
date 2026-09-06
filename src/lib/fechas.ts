/**
 * Formateo de fechas para la UI. Zona de referencia del sitio:
 * America/Argentina/Cordoba (ARQUITECTURA.md 3.2).
 */
import { t } from '../i18n';

const ZONA = 'America/Argentina/Cordoba';

const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

/** "10 de septiembre de 2026" */
export function fechaLarga(fecha: Date): string {
  const f = new Intl.DateTimeFormat('es-AR', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: ZONA,
  });
  return f.format(fecha);
}

/** "septiembre de 2026" — para "Actualizado en <mes año>" (ARQUITECTURA.md 3.1). */
export function mesAnio(fecha: Date): string {
  const partes = new Intl.DateTimeFormat('es-AR', {
    month: 'long', year: 'numeric', timeZone: ZONA,
  }).formatToParts(fecha);
  const mes = partes.find((p) => p.type === 'month')?.value ?? '';
  const anio = partes.find((p) => p.type === 'year')?.value ?? '';
  return `${mes} de ${anio}`;
}

/** ISO corto (YYYY-MM-DD) para atributos datetime= */
export function iso(fecha: Date): string {
  return fecha.toISOString().slice(0, 10);
}

/** "hace 3 días" / "hace 2 meses" — texto relativo aproximado. */
export function relativo(fecha: Date, ahora: Date = new Date()): string {
  const dias = Math.floor((ahora.getTime() - fecha.getTime()) / 86_400_000);
  if (dias <= 0) return t('articulo.tiempoRelativo.hoy');
  if (dias === 1) return t('articulo.tiempoRelativo.ayer');
  if (dias < 45) return t('articulo.tiempoRelativo.haceDias', { n: dias });
  const meses = Math.round(dias / 30);
  if (meses < 18) return t('articulo.tiempoRelativo.haceMeses', { n: meses });
  return t('articulo.tiempoRelativo.haceAnios', { n: Math.round(dias / 365) });
}

export { MESES, ZONA };
