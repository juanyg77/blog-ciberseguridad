# Cómo se publica en este blog

Guía operativa para el/los autor(es). El contenido se edita en Markdown/MDX
dentro del repo y se publica con `git push` (deploy automático en Cloudflare
Pages, D-4). No hay CMS ni panel (D-3).

> Sitio: **El Que Se Las Sabe Todas** — <https://elquelassabetodas.com>.
> Contacto: `contacto@elquelassabetodas.com` (Web3Forms → Cloudflare Email
> Routing → Gmail).

---

## 1. Publicar un artículo

1. Elegí **nivel** y **carpeta**:
   - `src/content/articulos/es/no-tecnico/` — explicativos para público general.
   - `src/content/articulos/es/tecnico/` — análisis de casos.
   La carpeta es organización humana y define la URL; **la fuente de verdad para
   filtrar es el campo `nivel` del frontmatter** (ARQUITECTURA.md 3).
2. Creá el archivo `mi-slug.md` (o `.mdx` si vas a usar componentes como
   `<BloqueOpinion>`). El nombre en **kebab-case**.
3. Completá el frontmatter (ver plantilla abajo). El build **valida** el
   frontmatter con Zod: si falta un campo obligatorio o hay un valor inválido,
   `npm run build` falla con un mensaje claro. Esa es la red de seguridad.

   > Los archivos y carpetas que empiezan con `_` se ignoran (no se publican):
   > sirven para notas o borradores locales. Hoy hay contenido de PRUEBA en
   > `src/content/articulos/` (ver `_LEEME-FIXTURES.md`); hay que borrarlo o
   > reemplazarlo antes de lanzar.
4. Escribí el cuerpo. Para el bloque de opinión (RF-3), en un `.mdx`:
   ```mdx
   import BloqueOpinion from '../../../../components/BloqueOpinion.astro';

   ...texto de hechos...

   <BloqueOpinion>
   Acá va la interpretación del autor.
   </BloqueOpinion>
   ```
5. `git add`, `git commit`, `git push`. En 1–3 minutos el sitio se regenera.

### Plantilla de frontmatter

```yaml
---
titulo: "Título del artículo (con el año del hecho entre paréntesis si es análisis de caso)"
slug: "titulo-del-articulo"
slugCanonico: "titulo-del-articulo"   # mismo valor para la versión es y en (RF-9)
idioma: "es"                          # es | en
nivel: "tecnico"                      # no-tecnico | tecnico
tipoArticulo: "analisis-caso"         # analisis-caso | explicativo | coyuntura
secciones: ["infraestructura-critica"] # slugs de src/content/secciones/ (>= 1)
autores: ["juan-garcia"]              # slugs de src/content/autores/ (>= 1)
fechaPublicacion: 2026-09-10          # ver "Fechas y publicación programada"
fechaActualizacion: 2026-09-15        # opcional; si difiere, se muestra "Actualizado en <mes año>"
resumen: "2-3 frases. Máx. 400 caracteres."
portada: "../../../../assets/images/articulos/mi-slug/portada.webp"  # opcional; ruta relativa al archivo (siempre 4 niveles: es/<nivel>/<archivo>). Ver "Imágenes"
portadaAlt: "Descripción de la portada"
tieneOpinion: true                   # marca el artículo en los listados
borrador: false                      # true = NO se publica nunca, sin importar la fecha
destacado: false                     # true = aparece en el carrusel de destacados de la home (se muestran los ~4 más recientes)
fuentes:                             # OBLIGATORIO si tipoArticulo == analisis-caso
  - titulo: "Nombre del informe / aviso"
    url: "https://..."
    organismo: "CISA"
    fecha: 2021-05-11                 # opcional
tags: ["ransomware", "ot"]           # folksonomía libre (buscador); no es navegación
---
```

### Regla del "año del hecho" en el título (convención, no la fuerza el schema)

Para `tipoArticulo: analisis-caso`, poné el **año del incidente** entre
paréntesis en el título: *"Análisis del ataque a Colonial Pipeline (2021)"*. Ese
año describe el suceso y es independiente de `fechaPublicacion` (cuándo lo
escribiste) y de `fechaActualizacion` (cuándo lo revisaste).

### Fuentes (RF-4 / CA-4)

Todo `analisis-caso` necesita **al menos una fuente** o el build falla. Preferí
fuentes oficiales: informes de organismos (CISA, FBI, ENISA, CERT), avisos del
proveedor afectado, testimonios ante el poder legislativo, documentación técnica
primaria.

---

## 2. Agregar una sección nueva (CA-2)

RF-2: se puede sumar una sección **sin tocar diseño ni navegación**.

1. Creá `src/content/secciones/mi-seccion.md`:
   ```yaml
   ---
   nombre: "Nombre visible de la sección"
   descripcion: "Una o dos frases sobre qué agrupa."
   orden: 4   # opcional; ordena la lista de /secciones y de la home. A falta de orden, alfabético.
   ---
   Texto opcional de introducción.
   ```
2. Etiquetá artículos con `secciones: ["mi-seccion", ...]`.
3. Listo. Se generan solas: la ruta `/seccion/mi-seccion`, la tarjeta en la home,
   y el ítem con contador + su panel filtrable en la página `/secciones`. Cero
   cambios de diseño ni de código (CA-2).

> El `slug` de la sección es el nombre del archivo. Debe existir un archivo por
> cada valor usado en `secciones:` de un artículo, o el build falla (referencia
> validada).

---

## 3. Fechas y publicación programada

- `fechaPublicacion` sin hora (`2026-09-10`) = **inicio de ese día en Córdoba**
  (`America/Argentina/Cordoba`, UTC−3). Para una hora puntual, usá fecha-hora con
  offset explícito: `2026-09-10T09:00:00-03:00`.
- **Fecha futura ⇒ el artículo es invisible**: no aparece en ningún listado, ni
  en RSS, ni en el buscador, y su URL da 404 real (no se genera la página).
- **`borrador: true`** es un mecanismo aparte: "no publicar, sin importar la
  fecha". Un artículo se publica solo si cumple **ambas**: `borrador !== true`
  **y** `fechaPublicacion <= ahora`.
- **Límite del sitio estático (D-19):** el sitio solo se regenera con un build, y
  el build se dispara con un push. Un artículo con fecha de mañana **no aparece
  solo** al llegar esa fecha si ese día no hay ningún push. En la práctica:
  *"dejo el artículo escrito y le doy push el día que quiero que salga"*. La
  fecha futura funciona como **salvaguarda**, no como disparador. El rebuild
  diario automático quedó descartado al día 1 (D-19).

---

## 4. Imágenes: presupuesto de peso (D-16 / ARQUITECTURA.md 3.3)

Todas las imágenes van en el repo, en **`src/assets/images/...`** (no en
`public/`). Astro las procesa en el build: genera **WebP/AVIF** y **tamaños
responsivos** automáticamente, y sirve la versión óptima según el dispositivo.

- Autores: `src/assets/images/autores/nombre-apellido.<ext>`
- Artículos: `src/assets/images/articulos/<slug>/...`

En el frontmatter, `portada:` es una **ruta relativa al archivo del artículo**
(que Astro resuelve como import de asset), no una URL absoluta:

```yaml
# desde src/content/articulos/es/<nivel>/<archivo>.mdx  (siempre 4 niveles)
portada: "../../../../assets/images/articulos/mi-slug/portada.webp"
```

Dentro del cuerpo (`.mdx`), usá el componente `<Image>` de Astro:

```mdx
import { Image } from 'astro:assets';
import captura from '../../../../assets/images/articulos/mi-slug/captura.png';

<Image src={captura} alt="Qué muestra la captura" />
```

| Elemento | Límite (imagen fuente) | Formato de partida |
|---|---|---|
| Portada (`portada:`) | **≤ 200 KB**; ~1200 px de ancho | WebP/AVIF/JPEG/PNG (Astro reoptimiza) |
| Capturas dentro del artículo | **≤ 150 KB** cada una | WebP/AVIF; PNG para diagramas o texto fino |
| Cantidad de capturas | **~5–8 máximo** orientativo | — |
| Peso total por artículo (fuentes) | **≤ 1,5 MB** como guía | — |
| Animaciones | Evitá GIF; si es imprescindible, mp4 corto | — |

Aunque Astro reoptimiza, **igual conviene entrar cerca del presupuesto**: los
originales se versionan en el repo público y este crece de forma monótona.
Cuidar el peso ahora evita migrar a Cloudflare R2 después. Nota: los SVG se
sirven tal cual (Astro no los rasteriza).

### Citado de imágenes de terceros (D-17 / 8.1)

La licencia CC BY 4.0 cubre **solo el texto que escribe el autor**. Toda imagen
de terceros (capturas de informes de la FBI/CISA/ENISA, logos, portadas de
noticias, diagramas ajenos):

1. Se **cita al pie del artículo** con su fuente y, si corresponde, su licencia.
2. Ante la **duda sobre derechos**, no se incluye: se reemplaza por un **diagrama
   propio** (trazo simple, un neutro + el verde de acento).

---

## 5. Convención UTM para compartir (ARQUITECTURA.md 5.2)

Cuando **vos** compartís un enlace de forma activa (LinkedIn, WhatsApp, etc.), el
componente `BotonesCompartir` ya agrega automáticamente:

```
?utm_source=<red>&utm_medium=social&utm_campaign=share
```

Si armás un enlace a mano (por ejemplo para un comentario o una firma), respetá
la misma convención:

- `utm_source`: `linkedin`, `whatsapp`, `twitter`, `telegram`, `newsletter`, …
- `utm_medium`: `social` (redes), `email` (mail/newsletter), `referral` (otro).
- `utm_campaign`: `share` para compartir puntual; un nombre propio para campañas.

Esto separa en GoatCounter "lo compartí yo" de "me encontraron por otra vía"
(RF-10 / CA-10). El desglose por artículo sale de la URL propia de cada uno.

---

## 6. Autores (RF-5 / RF-6)

- Un archivo por persona en `src/content/autores/`. Copiá `_plantilla-autor.md`.
- Nombre real y foto son obligatorios y van visibles (RF-5). La foto va en
  `src/assets/images/autores/` y el campo `foto:` es la ruta relativa al archivo
  del autor: `../../assets/images/autores/nombre-apellido.<ext>`.
- `credenciales: []` al día 1. Cuando exista una certificación verificable
  (p. ej. Security+), agregá la entrada con el enlace a Credly. Sin CV en PDF
  (D-11).
- El archivo cuyo nombre empieza con `_` se ignora (no se publica).

---

## 7. Borradores y repo público (D-18)

El repo es **público**: los borradores y todo el historial de commits se ven.

- Un texto que **no debe verse hasta publicarse** va en una **rama aparte** sin
  mergear. `borrador: true` lo mantiene fuera del build, pero **no** lo esconde
  del repo.
- **Ningún secreto se commitea.** Las access keys (Web3Forms, GoatCounter),
  cualquier Deploy Hook, etc., van como **variables de entorno en Cloudflare
  Pages**. En local, `.env` (ignorado por git). Ver `.env.example`. El directorio
  `.claude/` también está en `.gitignore` (no se expone en el repo público).

---

## 8. Puesta en marcha de servicios (una sola vez)

| Servicio | Qué hacer | Variable |
|---|---|---|
| **Dominio** | `elquelassabetodas.com` ya comprado; DNS en Cloudflare (D-4). | `PUBLIC_SITE_URL` |
| **Cloudflare Email Routing** | Crear la regla `contacto@elquelassabetodas.com` → Gmail del autor (D-6). | — |
| **Web3Forms** | Crear cuenta con destino `contacto@elquelassabetodas.com`. **Verificar el dominio `elquelassabetodas.com`** en el panel de Web3Forms para que el `redirect` a `/contacto/gracias` (CA-8b) funcione. Copiar la access key. | `PUBLIC_WEB3FORMS_ACCESS_KEY` |
| **Cloudflare Turnstile** | Crear un widget para `elquelassabetodas.com`. La *secret key* se pega en Web3Forms; la *site key* va como variable. | `PUBLIC_TURNSTILE_SITE_KEY` |
| **GoatCounter** | Crear sitio (plan gratuito). El "código" es el subdominio `<codigo>.goatcounter.com`. | `PUBLIC_GOATCOUNTER_CODE` |

Todas las variables se cargan en **Cloudflare Pages → Settings → Environment
Variables**, nunca en el repo (D-18).

---

## 9. Checklist antes de `git push`

- [ ] `npm run build` pasa sin errores (valida frontmatter + genera el índice de
      búsqueda).
- [ ] Si es `analisis-caso`: al menos una fuente, preferentemente oficial.
- [ ] Si hay opinión: está dentro de `<BloqueOpinion>`, no suelta.
- [ ] Imágenes optimizadas y dentro del presupuesto de peso.
- [ ] Imágenes de terceros citadas al pie.
- [ ] `resumen` de 2–3 frases (se usa en listados, OG y RSS).
- [ ] Fecha de publicación correcta (¿futura a propósito?).
