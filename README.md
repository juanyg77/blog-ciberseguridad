# El Que Se Las Sabe Todas — blog de ciberseguridad

> Ciberseguridad explicada para el que cree que a él no le va a pasar.
> Dominio: <https://elquelassabetodas.com>

Blog estático con dos líneas de contenido: explicativos para público no técnico
y análisis técnicos de casos. Construido según `REQUISITOS.md` y
`ARQUITECTURA.md` (decisiones D-1 a D-19).

## Stack

- **Astro** (SSG) + TypeScript — D-2
- **Tailwind CSS v4** (vía `@tailwindcss/vite`) — D-13. Tokens de diseño en
  `src/styles/global.css` (único lugar).
- **Content Collections + Zod** — `src/content.config.ts` (D-3, patrón 1)
- **Pagefind** — buscador, índice generado en el build (D-9)
- **GoatCounter** — analítica, capa intercambiable en `src/components/Analitica.astro` (D-7 / D-15)
- **Web3Forms** — formulario de contacto (D-14, sección 6); anti-spam con honeypot
  + hCaptcha por la integración gratuita de Web3Forms
- Hosting: **Cloudflare Workers** (worker solo-assets) — ver "Deploy" abajo

## Requisitos

- Node **24** (ver `.nvmrc`)
- npm

## Cómo levantarlo localmente

```bash
npm install
cp .env.example .env      # opcional: completá las claves si querés probar analítica/formulario
npm run dev               # http://localhost:4321
```

El buscador (Pagefind) **no funciona en `npm run dev`** porque su índice se
genera en el build. Para probarlo:

```bash
npm run build             # astro build + pagefind --site dist
npm run preview           # sirve dist/ con el índice ya generado
```

## Deploy

El sitio se publica en **Cloudflare Workers** (un worker solo-assets, sin código
de servidor) con:

```bash
npm run build             # genera dist/ (incluye dist/pagefind/ y dist/404.html)
npx wrangler deploy       # lee wrangler.jsonc y sube dist/ como assets
```

- La config vive en **`wrangler.jsonc`** (raíz del repo): `name`
  `blog-ciberseguridad`, assets desde `./dist`, `not_found_handling: "404-page"`.
- `dist/` está en `.gitignore` a propósito: Cloudflare corre `npm run build` en
  cada deploy, así que el índice de Pagefind y el resto de los assets se
  regeneran siempre desde la fuente.
- Las variables de entorno (`PUBLIC_*`) se configuran en el dashboard del worker,
  nunca en el repo (D-18).

## Estructura

```
src/
  content/          artículos, avisos, autores, secciones (Markdown/MDX)
  content.config.ts esquemas Zod de todas las colecciones
  assets/images/    imágenes optimizadas en build (autores/, articulos/<slug>/)
  i18n/             diccionario de cadenas de interfaz (es.ts) — D-10
  lib/              articulos.ts (consulta central), fechas.ts, utm.ts
  components/       BloqueOpinion, ListaFuentes, FichaAutor, BotonesCompartir,
                    Analitica, Buscador, CredencialesAutor, FechaArticulo,
                    AvisoLicencia, AvisoDestacado, ...
  layouts/          LayoutBase, LayoutArticulo, LayoutAviso
  pages/            index, sobre, contacto(+gracias), buscar, recientes,
                    secciones, no-tecnico/, tecnico/, seccion/[seccion],
                    [lang]/[...slug], aviso/[aviso], rss.xml.ts, 404
```

Las imágenes van en `src/assets/images/` (Astro las optimiza a WebP/AVIF y
genera tamaños responsivos en el build — D-16 + optimización). Presupuesto de
peso y detalle en `CONTRIBUIR.md`.

Para publicar contenido, ver **`CONTRIBUIR.md`**.

## Licencias

Doble licencia, deliberada:

- **Código del sitio** (componentes Astro, estilos, configuración, scripts):
  **MIT** — ver `LICENSE`. Copyright 2026 Juan Ignacio García.
- **Contenido** (texto de los artículos, explicativos y análisis):
  **CC BY 4.0** — ver `LICENSE-CONTENT` (D-17). Las imágenes de terceros no
  quedan cubiertas y se citan aparte.

## Variables de entorno

Ninguna se commitea (D-18). Ver `.env.example`. En producción se cargan en el
dashboard del worker de Cloudflare.

| Variable | Para qué |
|---|---|
| `PUBLIC_SITE_URL` | dominio canónico (URLs, hreflang, UTM, OG). Por defecto `https://elquelassabetodas.com` |
| `PUBLIC_GOATCOUNTER_CODE` | subdominio de la cuenta de GoatCounter |
| `PUBLIC_WEB3FORMS_ACCESS_KEY` | access key del formulario de contacto |

## Pendientes conocidos

- **Contenido de "Sobre mí"**: bio, URLs de LinkedIn/GitHub y credenciales están
  como placeholder en `src/content/autores/juan-garcia.md`. Los completa el autor.
- **Web3Forms**: hay que **verificar el dominio `elquelassabetodas.com` en la
  cuenta de Web3Forms** para que el `redirect` a `/contacto/gracias` funcione.
  Es un paso manual al crear la cuenta. La recepción final es
  `contacto@elquelassabetodas.com` vía Cloudflare Email Routing → Gmail (D-6).
- **Identidad visual final** (paleta, tipografía definitiva, logo, prolijidad
  móvil) y **nombres con más carácter para las secciones "Técnico" / "No
  técnico"**: etapas posteriores. Los slugs de ruta (`/tecnico`, `/no-tecnico`)
  y el campo `nivel` no se tocan.
