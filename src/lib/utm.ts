/**
 * Convención UTM para los enlaces que el autor comparte activamente
 * (ARQUITECTURA.md sección 5.2). Documentada también en CONTRIBUIR.md.
 *
 *   ?utm_source={red}&utm_medium=social&utm_campaign=share
 *
 * Sirve para separar en la analítica "lo compartí yo en LinkedIn" (audiencia 3)
 * de "me encontraron por otra vía". Solo se aplica en BotonesCompartir.
 */
export type RedSocial = 'linkedin' | 'twitter' | 'whatsapp' | 'telegram' | 'facebook' | 'mastodon';

export const UTM_MEDIUM = 'social';
export const UTM_CAMPAIGN = 'share';

/** Agrega los parámetros UTM a una URL absoluta del sitio. */
export function conUtm(urlAbsoluta: string, source: RedSocial | string): string {
  const u = new URL(urlAbsoluta);
  u.searchParams.set('utm_source', source);
  u.searchParams.set('utm_medium', UTM_MEDIUM);
  u.searchParams.set('utm_campaign', UTM_CAMPAIGN);
  return u.toString();
}

/** Construye el enlace de "intent" de cada red para compartir una URL + título. */
export function enlaceCompartir(
  red: RedSocial,
  urlConUtm: string,
  titulo: string,
): string {
  const u = encodeURIComponent(urlConUtm);
  const txt = encodeURIComponent(titulo);
  switch (red) {
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${u}`;
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${u}&text=${txt}`;
    case 'whatsapp':
      return `https://api.whatsapp.com/send?text=${txt}%20${u}`;
    case 'telegram':
      return `https://t.me/share/url?url=${u}&text=${txt}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${u}`;
    case 'mastodon':
      // Mastodon no tiene un dominio único; se usa el "share" genérico vía toot.
      return `https://mastodonshare.com/?text=${txt}%20${u}`;
  }
}
