/**
 * Genera los assets de marca (favicon + imagen OG) a partir del wordmark
 * tipográfico del sitio. NO forma parte del build: se corre a mano cuando
 * cambian el nombre, el tagline o el estilo.
 *
 *   node scripts/generar-marca.mjs
 *
 * Requiere las devDependencies `satori` y `png-to-ico` (y `sharp`, que ya viene
 * con Astro). Satori convierte el texto a PATHS usando las fuentes IBM Plex
 * (.woff de @fontsource), así que el PNG final no depende de fuentes del sistema.
 *
 * Salidas:
 *   public/favicon.svg          (marca "Q" + punto de acento, sobre #111114)
 *   public/favicon.ico          (16/32/48, PNG-in-ICO)
 *   public/apple-touch-icon.png (180x180)
 *   public/og-default.png       (1200x630, wordmark + tagline + dominio)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const fs = (p) => join(raiz, 'node_modules/@fontsource', p);
const pub = (p) => join(raiz, 'public', p);

// --- Tokens (deben coincidir con src/styles/global.css, modo oscuro) ---
const FONDO = '#111114';
const TINTA = '#f3f3f5';
const TINTA_SUAVE = '#c4c4cc';
const ACENTO = '#4da3ff';

const fuentes = {
  serif400: readFileSync(fs('ibm-plex-serif/files/ibm-plex-serif-latin-400-normal.woff')),
  serif600: readFileSync(fs('ibm-plex-serif/files/ibm-plex-serif-latin-600-normal.woff')),
  serif700: readFileSync(fs('ibm-plex-serif/files/ibm-plex-serif-latin-700-normal.woff')),
  mono400: readFileSync(fs('ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff')),
};

// helper JSX-sin-JSX
const h = (type, style, children) => ({ type, props: { style, ...(children !== undefined ? { children } : {}) } });

// ---------------------------------------------------------------------------
// 1. FAVICON — "Q" serif + punto de acento
// ---------------------------------------------------------------------------
const LADO = 128; // se rasteriza a 16/32/48/180; el SVG queda vectorial

const faviconNode = h(
  'div',
  {
    width: LADO,
    height: LADO,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: FONDO,
    position: 'relative',
  },
  [
    h('div', {
      fontFamily: 'IBM Plex Serif',
      fontWeight: 700,
      fontSize: 88,
      color: TINTA,
      lineHeight: 1,
      // la Q sube un poco para dejar aire a la cola serif abajo
      transform: 'translateY(-6px)',
    }, 'Q'),
    // punto de acento en la esquina inferior derecha (marca de abreviatura: "Q.")
    h('div', {
      position: 'absolute',
      right: 16,
      bottom: 16,
      width: 15,
      height: 15,
      borderRadius: 15,
      background: ACENTO,
    }),
  ],
);

const faviconSvg = await satori(faviconNode, {
  width: LADO,
  height: LADO,
  fonts: [{ name: 'IBM Plex Serif', data: fuentes.serif700, weight: 700, style: 'normal' }],
});
writeFileSync(pub('favicon.svg'), faviconSvg);

// PNGs para .ico y apple-touch
const pngDe = (svg, size) => sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();

const [p16, p32, p48, p180] = await Promise.all([
  pngDe(faviconSvg, 16),
  pngDe(faviconSvg, 32),
  pngDe(faviconSvg, 48),
  pngDe(faviconSvg, 180),
]);
writeFileSync(pub('favicon.ico'), await pngToIco([p16, p32, p48]));
writeFileSync(pub('apple-touch-icon.png'), p180);

// ---------------------------------------------------------------------------
// 2. IMAGEN OG — 1200x630
// ---------------------------------------------------------------------------
const ogNode = h(
  'div',
  {
    width: 1200,
    height: 630,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: FONDO,
    padding: '96px',
    fontFamily: 'IBM Plex Serif',
  },
  [
    h('div', {
      fontFamily: 'IBM Plex Serif',
      fontWeight: 600,
      fontSize: 92,
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      textTransform: 'uppercase',
      color: TINTA,
      maxWidth: 900,
    }, 'El Que Se Las Sabe Todas'),
    h('div', {
      fontFamily: 'IBM Plex Serif',
      fontWeight: 400,
      fontSize: 34,
      lineHeight: 1.4,
      color: TINTA_SUAVE,
      marginTop: 36,
      maxWidth: 860,
    }, 'Ciberseguridad explicada para el que cree que a él no le va a pasar'),
    h('div', {
      fontFamily: 'IBM Plex Mono',
      fontSize: 24,
      letterSpacing: '0.06em',
      color: ACENTO,
      marginTop: 44,
    }, 'elquelassabetodas.com'),
  ],
);

const ogSvg = await satori(ogNode, {
  width: 1200,
  height: 630,
  fonts: [
    { name: 'IBM Plex Serif', data: fuentes.serif400, weight: 400, style: 'normal' },
    { name: 'IBM Plex Serif', data: fuentes.serif600, weight: 600, style: 'normal' },
    { name: 'IBM Plex Mono', data: fuentes.mono400, weight: 400, style: 'normal' },
  ],
});
await sharp(Buffer.from(ogSvg)).png({ compressionLevel: 9 }).toFile(pub('og-default.png'));

console.log('OK:');
console.log(' - public/favicon.svg');
console.log(' - public/favicon.ico (16/32/48)');
console.log(' - public/apple-touch-icon.png (180x180)');
console.log(' - public/og-default.png (1200x630)');
