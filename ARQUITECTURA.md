# Arquitectura del proyecto

> **Parte de:** `REQUISITOS.md` con fecha **2026-09-02**.
> **Iteración:** 5.
> - *Iteración 2:* el autor respondió las 10 preguntas abiertas de la iteración 1
>   (respuestas del **2026-09-02**); lo que quedó definido pasó a ser certeza y la
>   recomendación de stack dejó de ser condicional.
> - *Iteración 3:* el autor aportó un blog de referencia
>   (<https://www.sirchandler.com.ar/>, un blog de viajes) **solo** como evidencia
>   de que un blog personal se sostiene con público a lo largo del tiempo. Se
>   agregó la **sección 3.1 "Estrategia de fechas"** para dejar explícito que
>   **no** adoptamos su modelo *date-driven*.
> - *Iteración 4:* se agregó la **sección 3.2 "Publicación programada y fechas
>   futuras"**. El build diario para publicación programada quedó como opción a
>   evaluar más adelante, no día 1.
> - *Iteración 5:* el autor cerró **todas** las preguntas abiertas menores
>   (P-1 a P-6). Se convierten en decisiones firmes **D-14 a D-19**. Se agregan la
>   **sección 3.3 "Gestión de imágenes y binarios"** y la **sección 8 "Licencia,
>   repositorio y evolución futura"**. La sección 9 "Preguntas abiertas" queda
>   **solo con el prerrequisito P-0** (nombre + dominio antes del kickoff). No se
>   modifica ninguna decisión previa (D-1 a D-13). Diseño y colores siguen sin
>   tratarse.
> - *Iteración 6 (2026-09-05):* **P-0 resuelto.** Nombre del blog:
>   **"El Que Se Las Sabe Todas"**; dominio **elquelassabetodas.com** (comprado).
>   El kickoff de implementación queda habilitado. El detalle del nombre y su
>   proceso están en `MARCA.md`.
> **Estado del entregable:** documento de arquitectura únicamente. No se genera
> código, configuración ni scaffolding en esta etapa.

---

## Decisiones tomadas

Bloque original (**2026-09-02**), respuestas a la primera ronda de preguntas:

| # | Tema | Decisión firme |
|---|---|---|
| D-1 | MVP previo (Next.js) | **Descartado por completo.** No pesa en la decisión de stack. |
| D-2 | Stack | **Astro** (SSG). Evaluado contra Hugo y Eleventy; justificación en la sección 2. |
| D-3 | Edición de contenido | **Markdown/MDX en el repo + Git**. **Sin CMS**, sin panel. Apoyo en schema validado (Zod) + plantilla de artículo. |
| D-4 | Hosting | **Cloudflare Pages** (deploy-on-push). DNS del dominio también en Cloudflare. |
| D-5 | Formulario de contacto | **Servicio dedicado de formularios** (Web3Forms como opción por defecto; Formspree alternativa). **No** Netlify Forms. |
| D-6 | Recepción del formulario | Casilla **`contacto@<dominio>`** vía **Cloudflare Email Routing** (reenvío gratuito a Gmail). Envío *desde* esa identidad queda fuera de scope por ahora. |
| D-7 | Analítica | Sin cookies, sin banner. **Capa intercambiable** (un solo componente). Arranque posible en plan gratuito (GoatCounter) y salto a **Plausible** pago sin rehacer nada. |
| D-8 | Privacidad | Sin obligación formal. Se adopta analítica *privacy-first* por defecto. Se revisará solo si a futuro un empleador/universidad impone política. |
| D-9 | Buscador (RF-13) | **Pagefind al día 1** (no se difiere). |
| D-10 | i18n (RF-9) | Contenido por artículo en es/en. **UI/navegación en español** en el lanzamiento. Cadenas de interfaz centralizadas en un diccionario desde el día 1 para poder activar la UI en inglés después **sin rehacer**. Multilenguaje pleno sigue siendo meta explícita. |
| D-11 | "Sobre mí" | Bio + enlaces (LinkedIn, GitHub) al día 1. Bloque de **credenciales verificables** (Credly u similar) que se agrega cuando existan certificaciones (Security+ en curso). **Sin CV en PDF.** |
| D-12 | Comentarios / newsletter | **No se implementan.** Se deja anotada compatibilidad concreta: **giscus** (sobre GitHub Discussions) y newsletter tipo **Buttondown**. |
| D-13 | Estilos | **Tailwind CSS** (decisión de arquitectura, no heredada del MVP; ver sección 2). |

Segundo bloque (**iteración 5**), cierre de las preguntas abiertas menores:

| # | Tema | Decisión firme | Cierra |
|---|---|---|---|
| D-14 | Servicio de formulario | **Web3Forms** (plan gratuito). Formspree queda solo como alternativa documentada. No se paga por formularios por ahora. | P-1 |
| D-15 | Analítica: arranque | **GoatCounter, plan gratuito**, desde el día 1. **Plausible** queda como destino futuro *si* el análisis de canales lo amerita, cambiando un archivo (capa intercambiable, D-7). Sin gasto fijo por ahora. | P-2 |
| D-16 | Imágenes / binarios | **Todas las imágenes en el repo** (`public/images/...`) desde el día 1, con un **presupuesto de peso por artículo** documentado en `CONTRIBUIR.md` (valores en la sección 3.3). Migrar binarios pesados a **Cloudflare R2** queda como evaluación futura *solo si* el repo o los builds se vuelven lentos. No ahora. | P-3 |
| D-17 | Licencia del contenido | **Creative Commons Attribution 4.0 Internacional (CC BY 4.0)** para el contenido (texto/artículos). Aplica al contenido, **no** al código del sitio (licencia del código: fuera de esta decisión). Aviso en el pie + archivo `LICENSE-CONTENT`. Imágenes de terceros **no** quedan cubiertas y se citan aparte. Detalle en la sección 8.1. | P-4 |
| D-18 | Repositorio | **Público desde el inicio.** Habilita sin fricción la puerta a giscus (D-12) y es coherente con la temática. Los secretos (access keys de Web3Forms y GoatCounter, Deploy Hooks) **nunca** se commitean: van como **variables de entorno en Cloudflare Pages**. Detalle en la sección 8.2. | P-5 |
| D-19 | Publicación programada automática (build diario) | **No se implementa al día 1.** Opción futura ya evaluada (GitHub Actions con cron → Deploy Hook de Cloudflare Pages, o Cron Trigger de Cloudflare Workers). Ver secciones 3.2 y 8.3. | P-6 |

**Prerrequisito de implementación — RESUELTO (2026-09-05):** el nombre y el dominio
quedaron definidos: **"El Que Se Las Sabe Todas"** / **elquelassabetodas.com**
(dominio comprado). Con esto, P-0 deja de bloquear el kickoff. Casilla de contacto:
`contacto@elquelassabetodas.com` (D-6). Ver `MARCA.md` para el nombre, el proceso
y el contexto.

### Nota de contexto: blog de referencia

El autor citó <https://www.sirchandler.com.ar/> (blog personal de viajes,
sostenido con público durante años) **únicamente** como prueba de viabilidad de
un blog personal de largo plazo. **No** es un modelo a copiar: es *date-driven*
(estructura centrada en la cronología), y nuestro contenido es mayormente
atemporal (análisis de casos ya cerrados, explicativos sin fecha de vencimiento;
`REQUISITOS.md`: sin compromiso de actualidad). Cómo se traduce esa diferencia a
la arquitectura está en las **secciones 3.1 y 3.2**.

---

## Supuestos vigentes

1. **S-1 — Volumen de contenido bajo y acotado.** Meta ~2 artículos/semana
   (CA-13), con pausas. A 1–2 años: ~100–200 artículos + traducciones parciales.
   Volumen trivial para un generador estático.
2. **S-2 — El autor edita código y usa Git con comodidad.** Estudiante de TUDAI.
   Lo que escasea es **tiempo** y **tolerancia a operar servicios**, no capacidad
   técnica. La edición cotidiana de artículos no requiere tocar código de la app.
3. **S-3 — Sin backend propio ni base de datos.** Confirmado por las decisiones:
   contenido en archivos, hosting estático, forms y analítica externalizados.
4. **S-4 — Presupuesto de servicios: hasta ~5–10 USD/mes de margen, pero el autor
   elige no gastar por ahora.** Al día 1 todo va en planes gratuitos (D-14, D-15).
   El margen queda disponible para Plausible si más adelante hace falta.
5. **S-5 — Audiencia LATAM, contenido español.** Inglés posterior, por artículo,
   opcional (RF-9). UI en español en el lanzamiento (D-10).

---

## 1. Tipo de sitio

### Análisis por requerimiento

| Requerimiento | Implicación técnica | ¿Backend/BD propio? |
|---|---|---|
| RF-1 (lectura por nivel) | Listados filtrados por campo `nivel`. | No. Filtrado en build. |
| RF-2 (secciones extensibles sin rediseño) | El "tipo de sección" es **dato**, no código. Agregar sección = agregar contenido + etiqueta. | No. Content-as-data + ruta generada. |
| RF-3 (bloque de opinión separado) | Componente de maquetado con semántica propia. | No. |
| RF-4 (fuentes citadas) | Lista estructurada en metadatos, renderizada al pie. | No. |
| RF-5 / RF-6 (autoría, multi-autor futuro) | Entidad "autor" referenciada por id. | No. Colección de autores en archivos. |
| RF-7 (compartir en redes) | Enlaces de intent + metadatos Open Graph por artículo. | No. Generados en build. |
| RF-8 (formulario de contacto) | Recepción + notificación + confirmación (CA-8). | **Externalizado** (D-5 / D-14). No propio. |
| RF-9 (i18n por artículo, opcional) | Rutas `/es/…` y `/en/…` + vínculo entre versiones. UI traducible después. | No. Rutas y `hreflang` en build. |
| RF-10 (analítica por artículo y canal) | Vistas por URL + desglose de referrer/canal. | **Externalizado** (D-7 / D-15). No propio. |
| RF-11 / CA-12 (aviso de pausa) | Tipo de entrada distinto, ubicado y renderizado diferente. | No. Colección aparte. |
| RF-12 / CA-11 (autónomo meses sin tocar nada) | Cuanto menos corra, mejor. HTML estático en CDN no tiene procesos que se caigan. | **Argumento fuerte a favor de estático.** |
| RF-13 (buscador interno) | Índice generado en build, consultado en el cliente. | No. **Pagefind al día 1** (D-9). |
| RF-14 / RF-15 (comentarios, newsletter; futuros) | Widgets/servicios embebibles (giscus, Buttondown). | No propio. Se suman cuando haya comunidad. |

### Decisión

**Sitio estático (SSG) servido desde Cloudflare Pages**, con:

- Buscador **Pagefind** integrado al build desde el día 1 (D-9).
- **Formulario de contacto** vía Web3Forms (D-14), con recepción en
  `contacto@<dominio>` reenviada a Gmail por Cloudflare Email Routing (D-6).
- **Analítica** vía GoatCounter, sin cookies, detrás de una capa intercambiable
  (D-7 / D-15).

### Trade-off explícito

**Se gana:**
- Resiliencia y "cero mantenimiento operativo" (RF-12, CA-11): sin servidor ni BD
  que administrar, parchear o pagar.
- Costo de hosting cero (plan gratuito de Cloudflare Pages).
- Rendimiento y SEO altos de fábrica → ayuda a CA-14 (tráfico orgánico).
- Superficie de ataque mínima, coherente con la temática del blog y con un solo
  mantenedor sin tiempo para responder incidentes.
- Contenido versionado en Git: histórico, reversible, portable, sin lock-in.

**Se pierde / cuesta:**
- **Publicar requiere build + deploy.** Mitigado por deploy automático al hacer
  push (CI de Cloudflare Pages). El autor no corre comandos, pero espera 1–3 min
  a que el sitio se regenere.
- **Las funciones dinámicas dependen de terceros** (forms, analítica y, a futuro,
  giscus/Buttondown): hay que confiar en su disponibilidad y límites de plan
  gratuito.
- **La analítica es client-side:** pierde visitas de usuarios con bloqueadores.
  Aceptable: CA-14/CA-15 son metas cualitativas y ajustables.
- **El buscador estático** descarga un índice en el cliente; a la escala prevista
  (cientos de artículos) Pagefind lo maneja bien; a miles habría que revisar.
- **La publicación por fecha futura no es automática** sin un build que la haga
  efectiva (ver sección 3.2).

Un sitio **con backend** (WordPress, app a medida) se descarta: agrega servidor y
BD a mantener y asegurar de forma permanente, en contradicción directa con RF-12.
Un enfoque **híbrido con SSR** no aporta nada: no hay contenido personalizado por
usuario ni datos que cambien entre builds.

---

## 2. Stack / framework

El autor delegó la elección técnica y pidió que se justifique **solo por
requisitos**, sin que pese el MVP descartado (respuesta 1). La comparación real
quedó entre **Astro** y **Hugo** (Eleventy se incluye como referencia).

### Comparativa

| Criterio | **Astro** (elegido) | Hugo | Eleventy (11ty) |
|---|---|---|---|
| Validación de contenido (RF-2/3/4/6/11) | **Content Collections con schema Zod: valida el frontmatter en cada build.** El autor pidió explícitamente apoyarse en schema + plantilla (respuesta 2). Un campo `fuentes` faltante en un análisis de caso rompe el build con mensaje claro. | Archetypes = plantillas de scaffolding, **sin validación real** de frontmatter en build. Se puede scriptear aparte, pero es trabajo y disciplina extra. | Validación manual o con un plugin; no es nativa. |
| RF-2 (secciones sin rediseño) | Sección = archivo en colección `secciones` + campo en el artículo + ruta dinámica única. Alta. | Taxonomías nativas: agregar una taxonomía es configuración. Alta. | Se arma con colecciones y paginación a mano. Media. |
| RF-9 (i18n por artículo + UI traducible después) | i18n routing nativo + patrón de clave de traducción; diccionario de cadenas de UI desde el día 1 → activar inglés de interfaz = agregar un archivo, **sin rehacer** (D-10). Alta. | i18n nativo por archivo (`post.en.md`) y `i18n/` para cadenas de UI. También cumple, con paradigma distinto. Alta. | Plugin o convención propia. Media. |
| RF-13 (Pagefind al día 1) | Integración con documentación oficial; poca plomería. | Pagefind como paso post-build (CLI); funciona igual de bien. | Igual: Pagefind CLI post-build. |
| JS enviado al cliente | Casi nulo por defecto ("islands"). Bueno para CA-14. | Nulo (HTML puro). | Nulo por defecto. |
| Mantenimiento / churn (RF-12) | Node/npm: hay que actualizar dependencias y hay superficie de supply chain. Core estable; con pocas dependencias y lockfile + versión de Node fijada en Cloudflare Pages, el riesgo es bajo. | **El más bajo en términos absolutos:** binario único, sin `node_modules`. Un Hugo de hace 2 años sigue compilando. | Bajo-moderado: pocas dependencias, pero se actualiza npm igual. |
| Curva para el autor (parte de la mantenibilidad, S-2) | Sintaxis `.astro` nueva pero cercana a HTML/JSX; **TS/JS familiar desde TUDAI**. Componentes para `BloqueOpinion`, `ListaFuentes`, etc. en un lenguaje que ya maneja. | **Go templates: paradigma poco familiar** para un dev JS. Personalizar diseño y lógica cuesta más y desincentiva el mantenimiento. | JS + Nunjucks/Liquid: familiar, pero más "armá tu propio framework". |
| Costo | Cloudflare Pages gratis; build gratis. | Igual. Builds más rápidos (menos minutos de CI). | Igual. |
| Qué se pierde al elegirlo | Ecosistema más chico que otros; si algún día se quiere mucho SSR/interactivo hay que sumar adaptadores. Se acepta el costo de mantener dependencias npm. | Se pierde la **validación de schema en build** (que el autor pidió) y se paga una curva de aprendizaje en un lenguaje ajeno, a cambio de menos mantenimiento de dependencias. | Más decisiones y configuración inicial a cargo del autor; menos "batteries included" para i18n y schema. |

### Recomendación final: **Astro**

Justificación en requisitos (no en gustos ni en el trabajo previo):

1. **RF-2 + RF-3 + RF-4 + RF-6 + RF-11 y la respuesta 2 del autor.** El autor
   pidió expresamente apoyarse en **schema/validación + plantilla** para editar
   frontmatter a mano sin CMS. Astro Content Collections con Zod es exactamente
   eso: un contrato de contenido validado en cada build. Hugo no tiene un
   equivalente nativo; habría que construir y mantener esa validación por fuera,
   lo que contradice el objetivo de bajo mantenimiento para una persona sola.
2. **RF-12 + Mantenimiento (una sola persona).** Mantenibilidad no es solo "pocas
   dependencias": es también **un stack que el mantenedor entiende y puede tocar
   sin fricción**. El autor programa en JS/TS; Astro le permite escribir los
   componentes con semántica (opinión, fuentes, autor, aviso) en ese lenguaje.
   Hugo tiene menor mantenimiento de dependencias, pero introduce Go templates
   como costo permanente de aprendizaje y edición.
3. **RF-9 + D-10.** El i18n de Astro cubre a la vez el enrutado de contenido
   por idioma y, más adelante, la traducción de las cadenas de interfaz, sin
   rearquitectura.
4. **RF-13 + D-9.** Pagefind se integra con poco esfuerzo.
5. **CA-14 (orgánico).** HTML liviano y buen manejo de metadatos/`hreflang`
   ayudan al SEO desde el inicio.

**Trade-off que se asume al elegir Astro sobre Hugo:** se acepta el costo de
mantener dependencias de npm (actualizaciones periódicas, superficie de supply
chain, riesgo de que un major rompa el build). Mitigaciones: mantener el árbol de
dependencias mínimo, `package-lock.json` commiteado, versión de Node fijada en
Cloudflare Pages, y revisar upgrades una vez por trimestre (no en cada release).
Si en el futuro el mantenimiento de npm se vuelve una carga real, el contenido en
Markdown + frontmatter es **portable a Hugo o a otro generador** con esfuerzo
acotado (cambia el layer de plantillas, no el contenido).

### Complementos del stack

- **Formato de contenido:** Markdown/MDX (MDX permite insertar el bloque de
  opinión y el listado de fuentes como componentes).
- **Estilos (D-13):** **Tailwind CSS**. Se elige por: utilidades sin runtime JS,
  purga de CSS no usado (páginas livianas → CA-14), y un único lugar de tokens de
  diseño que facilita mantener consistencia visual con un solo mantenedor.
  Trade-off: markup con muchas clases; se mitiga extrayendo componentes. Alternativa
  descartada: CSS plano (menos dependencias, pero más esfuerzo de organización y
  de evitar regresiones visuales sin un sistema de utilidades).
- **Buscador:** **Pagefind** desde el día 1 (índice en build, sin servidor;
  soporta índices por idioma para RF-9).
- **Hosting:** **Cloudflare Pages**, deploy automático al push.
- **Correo de contacto:** **Cloudflare Email Routing** (`contacto@<dominio>` →
  Gmail).
- **Edición:** repo + Git, sin CMS (D-3).

---

## 3. Estructura de carpetas y modelado de contenido

> Nomenclatura de Astro Content Collections. La idea de modelado (colecciones
> `articulos`, `autores`, `avisos`, `secciones`; nivel y secciones como datos;
> pares de idioma vinculados por clave; cadenas de UI en diccionario) es la que
> justifica el stack.

### Árbol de directorios de ejemplo

```
/
├─ REQUISITOS.md
├─ ARQUITECTURA.md
├─ CONTRIBUIR.md                    # procedimiento de publicación, secciones (CA-2), presupuesto de imágenes, citado de terceros
├─ LICENSE-CONTENT                  # D-17 — CC BY 4.0 para el contenido (texto/artículos)
├─ public/
│  └─ images/
│     ├─ autores/
│     │  └─ juan-garcia.jpg
│     └─ articulos/
│        └─ colonial-pipeline/portada.jpg
├─ src/
│  ├─ content/
│  │  ├─ config.ts                 # esquemas (Zod) de todas las colecciones
│  │  │
│  │  ├─ articulos/
│  │  │  ├─ es/
│  │  │  │  ├─ no-tecnico/
│  │  │  │  │  ├─ que-es-el-phishing.md
│  │  │  │  │  └─ estafas-por-sms-paquete-retenido.md
│  │  │  │  └─ tecnico/
│  │  │  │     ├─ colonial-pipeline-analisis.md
│  │  │  │     └─ wannacry-analisis.md
│  │  │  └─ en/
│  │  │     └─ tecnico/
│  │  │        └─ colonial-pipeline-analysis.md   # traducción opcional (RF-9)
│  │  │
│  │  ├─ avisos/                    # RF-11 / CA-12 — NO son artículos
│  │  │  └─ pausa-2026-marzo.md
│  │  │
│  │  ├─ autores/                   # RF-5 / RF-6 — multi-autor desde el día 1
│  │  │  ├─ juan-garcia.md
│  │  │  └─ _plantilla-autor.md
│  │  │
│  │  └─ secciones/                 # RF-2 — catálogo de secciones como DATO
│  │     ├─ ingenieria-social.md
│  │     ├─ infraestructura-critica.md
│  │     └─ higiene-digital.md
│  │
│  ├─ i18n/                         # D-10 — cadenas de interfaz (preparación RF-9)
│  │  ├─ es.ts                      # único idioma de UI activo en el lanzamiento
│  │  └─ en.ts                      # se agrega para activar la UI en inglés, sin rehacer
│  │
│  ├─ lib/
│  │  └─ articulos.ts               # 3.2 — consulta central: borrador !== true && fechaPublicacion <= ahora
│  │
│  ├─ components/
│  │  ├─ BloqueOpinion.astro        # RF-3 / CA-3 — recuadro "Opinión del autor"
│  │  ├─ ListaFuentes.astro         # RF-4 / CA-4
│  │  ├─ FichaAutor.astro           # RF-6
│  │  ├─ BotonesCompartir.astro     # RF-7 / CA-7 (+ UTM, ver sección 5)
│  │  ├─ Analitica.astro            # D-7 / D-15 — capa intercambiable (GoatCounter hoy)
│  │  ├─ Buscador.astro             # RF-13 — UI de Pagefind
│  │  ├─ CredencialesAutor.astro    # D-11 — bloque Credly (se puebla al haber certs)
│  │  ├─ FechaArticulo.astro        # 3.1 — publicación/actualización con peso según tipo
│  │  ├─ AvisoLicencia.astro        # D-17 — nota CC BY 4.0 en el pie y en cada artículo
│  │  └─ AvisoDestacado.astro       # RF-11 en la home
│  ├─ layouts/
│  │  ├─ LayoutBase.astro
│  │  ├─ LayoutArticulo.astro
│  │  └─ LayoutAviso.astro
│  ├─ pages/
│  │  ├─ index.astro                        # home: navegación por sección/nivel + aviso activo
│  │  ├─ sobre.astro                        # RF-5
│  │  ├─ contacto.astro                     # RF-8
│  │  ├─ contacto/gracias.astro             # confirmación de envío (CA-8b)
│  │  ├─ buscar.astro                       # RF-13 — día 1 (D-9)
│  │  ├─ recientes.astro                    # 3.1 — listado cronológico SECUNDARIO
│  │  ├─ rss.xml.ts                         # 3.1 — feed por fechaPublicacion
│  │  ├─ no-tecnico/index.astro             # CA-1 (1 clic)
│  │  ├─ tecnico/index.astro                # CA-1 (1 clic)
│  │  ├─ seccion/[seccion].astro            # RF-2 — ruta única para toda sección
│  │  └─ [lang]/[...slug].astro             # artículos es/en — RF-9 (getStaticPaths usa lib/articulos.ts)
│  └─ styles/
├─ astro.config.mjs
├─ package.json
└─ package-lock.json
```

Puntos clave del modelado:

- **Nivel (no técnico / técnico) — RF-1:** campo `nivel` en el frontmatter. La
  carpeta `no-tecnico/ | tecnico/` es organización humana y afecta la URL; **la
  fuente de verdad para filtrar es el campo.** Listados `/no-tecnico` y
  `/tecnico` son consultas por ese campo (CA-1: 1 clic desde la home).
- **Secciones — RF-2 / CA-2:** colección `secciones`, un archivo por sección
  (nombre, descripción, ícono opcional). Cada artículo referencia una o varias
  por `slug`. Agregar una sección = **crear un archivo en `secciones/` y etiquetar
  artículos**; la ruta `/seccion/[seccion]` y la navegación se generan solas.
  Cero cambios de diseño. El procedimiento se documenta en `CONTRIBUIR.md`
  (satisface el "se documenta el procedimiento" de CA-2).
- **Idiomas por artículo — RF-9 / CA-9:** carpetas `es/` y `en/`. Dos artículos
  que son traducción mutua comparten `slugCanonico`. Si no hay versión en inglés,
  no existe el archivo en `en/` y no pasa nada: no se ofrece cambio de idioma
  para ese artículo. Se emiten `<link rel="alternate" hreflang>` solo cuando hay
  par.
- **UI traducible — D-10:** todas las cadenas de interfaz (menús, botones,
  rótulos "Fuentes", "Opinión del autor", "Compartir", etc.) viven en
  `src/i18n/es.ts` desde el día 1, aunque solo exista español. Activar la UI en
  inglés más adelante = crear `src/i18n/en.ts` y encender el idioma; **no se
  rehace nada.** Este es el costo mínimo que paga RF-9 en el lanzamiento.
- **Fuentes — RF-4 / CA-4:** array `fuentes` en el frontmatter (título, url,
  organismo, fecha). `ListaFuentes` lo renderiza al pie. El schema **exige al
  menos una fuente cuando `tipoArticulo` es `analisis-caso`** (apoya CA-4).
- **Bloque de opinión — RF-3 / CA-3:** componente `<BloqueOpinion>` embebido en
  el MDX (recuadro con título "Opinión / análisis del autor", estilo distinto).
  Booleano `tieneOpinion` en el frontmatter para marcarlo en listados. Se
  prefiere el componente a un separador `---` porque garantiza la diferenciación
  visual de CA-3 y es difícil de "olvidar a medias".
- **Autoría — RF-5 / RF-6:** colección `autores`, un archivo por persona (nombre
  real, foto, bio, enlaces LinkedIn/GitHub, credenciales opcionales). Cada
  artículo tiene `autores: [juan-garcia]` (array desde el día 1). `sobre.astro`
  lista **todos** los autores de la colección: pasar de uno a varios no toca la
  arquitectura. `FichaAutor` muestra nombre + foto en cada artículo (CA-6).
- **Credenciales — D-11:** campo `credenciales` (array) opcional en el autor.
  `CredencialesAutor` solo renderiza el bloque si hay elementos. Al día 1 está
  vacío; cuando el autor apruebe Security+ se agrega la entrada (badge Credly).
  Sin CV en PDF.
- **Aviso de pausa — RF-11 / CA-12:** colección separada `avisos`, layout propio,
  **fuera** de todos los listados de artículos. Campos: `titulo`, `fecha`,
  `activo` (bool), cuerpo. La home muestra el aviso `activo` más reciente en un
  banner (`AvisoDestacado`). Queda como comunicación al lector, no como artículo
  de contenido (CA-12).
- **RF-12 / CA-11:** nada de lo anterior tiene estado en runtime. El sitio
  compilado es HTML+CSS+JS estático: se navega indefinidamente sin intervención.

### Esquema de metadatos de un artículo (frontmatter)

```yaml
---
titulo: "Análisis del ataque a Colonial Pipeline (2021)"
slug: "colonial-pipeline-analisis"
slugCanonico: "colonial-pipeline"         # RF-9: une la versión es y en
idioma: "es"                              # es | en
nivel: "tecnico"                          # RF-1: no-tecnico | tecnico
tipoArticulo: "analisis-caso"             # analisis-caso | explicativo | coyuntura
secciones: ["infraestructura-critica", "ransomware"]
autores: ["juan-garcia"]                  # array desde el día 1 (RF-5/RF-6)
fechaPublicacion: 2026-09-10              # 3.1: orden, RSS, "recientes" · 3.2: filtro (<= ahora, zona America/Argentina/Cordoba)
fechaActualizacion: 2026-09-15            # 3.1: opcional. Si existe, se muestra "Actualizado en <mes año>"
resumen: "Qué pasó, cómo ocurrió y qué se aprende del incidente de ransomware
          que paralizó el mayor oleoducto de combustible de EE. UU."
portada: "/images/articulos/colonial-pipeline/portada.jpg"   # Open Graph (RF-7) · 3.3: ≤ 200 KB
tieneOpinion: true                       # RF-3
borrador: false                          # 3.2: true = no se publica NUNCA, sin importar la fecha
destacado: false
fuentes:                                  # RF-4 / CA-4 (obligatorio si analisis-caso)
  - titulo: "FBI Statement on Compromise of Colonial Pipeline Networks"
    url: "https://www.fbi.gov/news/press-releases/..."
    organismo: "FBI"
    fecha: 2021-05-10
  - titulo: "Alert AA21-131A: DarkSide Ransomware"
    url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-131a"
    organismo: "CISA"
    fecha: 2021-05-11
tags: ["ransomware", "darkside", "OT", "eeuu"]
---
```

Notas:

- **`secciones` vs `tags`:** `secciones` es el eje navegable estable de RF-2
  (pocas, curadas, con archivo propio). `tags` es folksonomía libre para el
  buscador y páginas de tag, sin compromiso de navegación. Separarlos evita que
  la navegación principal se llene de ruido.
- **`tipoArticulo`** habilita reglas de schema (exigir `fuentes` en
  `analisis-caso`) y también gobierna el peso visual de la fecha (sección 3.1).
- **Schema de autor:** `nombre` (real), `foto`, `bio`, `rol`, `enlaces`
  (linkedin, github), `credenciales[]` (opcional), `activo`.
- **Schema de aviso:** `titulo`, `fecha`, `activo`, cuerpo Markdown.

### 3.1 Estrategia de fechas (modelo atemporal, no *date-driven*)

El blog de referencia (`sirchandler.com.ar`) organiza todo alrededor de la
cronología: home de "últimas entradas", archivo por mes/año, la fecha como dato
protagonista. Eso tiene sentido para un diario de viajes, donde cada entrada es un
hecho fechado. **Nuestro contenido es lo contrario:** análisis de incidentes ya
cerrados y explicativos de hábitos digitales, sin fecha de vencimiento y sin
compromiso de cobertura de actualidad (`REQUISITOS.md`, "Fuera de scope" y
Mantenimiento). Por eso las fechas se manejan así:

1. **La navegación principal es por SECCIÓN (RF-2) y por NIVEL (RF-1), nunca por
   fecha.** No hay archivo mensual ni una home de "últimas noticias" como eje
   estructural. La home presenta secciones, los dos niveles (CA-1) y, si
   corresponde, el aviso activo (RF-11). Se admite **un listado cronológico
   secundario** — `/recientes` y un feed `rss.xml` — para el lector recurrente y
   para descubrir lo nuevo, pero es una vista más, no la columna vertebral del
   sitio.

2. **Cada artículo lleva `fechaPublicacion`.** Es necesaria para: ordenar
   `/recientes`, generar el RSS, calcular "publicado hace X" y decidir la
   visibilidad del artículo (ver 3.2). En los artículos atemporales
   (`analisis-caso`, `explicativo`) se muestra **de forma discreta** (pie del
   artículo o línea de metadatos secundaria), no como encabezado destacado: el
   lector que busca "qué pasó con Colonial Pipeline" no necesita saber en qué
   semana de 2026 se redactó la nota.

3. **`fechaActualizacion` es la fecha que sí se muestra con visibilidad** cuando
   el autor revisa un análisis atemporal. Se renderiza como **"Actualizado en
   \<mes año\>"** cerca del título. Objetivo doble: (a) que el lector vea que el
   contenido evergreen sigue mantenido y no "se ve viejo"; (b) darle a los
   buscadores una señal de frescura sobre contenido que no cambia de URL, lo que
   apoya CA-14 (tráfico orgánico sostenido). Si `fechaActualizacion` no existe o
   es igual a `fechaPublicacion`, no se muestra nada extra.

4. **Regla del "año del hecho" en el título.** Para `tipoArticulo:
   analisis-caso`, el **año del incidente** va en el título entre paréntesis
   —"Análisis del ataque a Colonial Pipeline **(2021)**"—. Ese año describe el
   suceso analizado y es **independiente** de `fechaPublicacion` (cuándo se
   escribió) y de `fechaActualizacion` (cuándo se revisó). Así el lector ubica el
   caso en el tiempo sin confundirlo con la antigüedad del artículo. Se deja como
   **convención documentada en `CONTRIBUIR.md`** (no se fuerza por schema, porque
   no todos los casos tienen un único año limpio).

5. **`tipoArticulo: coyuntura`** (la nota de actualidad ocasional que
   `REQUISITOS.md` permite sin periodicidad) es la excepción: ahí la fecha **sí**
   es información de primera línea y `FechaArticulo` la muestra con más peso
   (encabezado), porque ese contenido es perecedero por naturaleza y el lector
   necesita saber de cuándo es. El componente `FechaArticulo` decide el
   tratamiento según `tipoArticulo`.

**Trade-off explícito.** Al no ser *date-driven* se **pierde** el "gancho de
novedad": un blog de actualidad usa el flujo constante de entradas fechadas para
traer de vuelta al lector recurrente ("¿qué hay de nuevo esta semana?"), y ese
motor de recurrencia acá es mucho más débil (lo mitigan parcialmente `/recientes`,
el RSS y, a futuro, la newsletter de D-12). A cambio se **gana** que **todo el
catálogo siga siendo útil y rankeable con el paso del tiempo sin trabajo de
mantenimiento**: un análisis de WannaCry no caduca, no hay una portada que quede
"vieja" por falta de publicaciones, y una pausa larga no degrada la utilidad del
sitio. Esto es coherente con **RF-12 / CA-11** (funcionamiento autónomo durante
meses) y con el **objetivo principal de `REQUISITOS.md`** (un recurso confiable y
bien hecho; la periodicidad no es un compromiso).

### 3.2 Publicación programada y fechas futuras

#### Regla de filtrado por fecha (SÍ va al día 1)

Existe una **única consulta central de contenido** (`src/lib/articulos.ts`,
función tipo `getArticulosPublicados()`) que usan **todos** los consumidores:
home, `/seccion/[seccion]`, `/no-tecnico`, `/tecnico`, `/recientes`, el feed
`rss.xml`, el contenido que se entrega a Pagefind para indexar, y el
`getStaticPaths()` de `[lang]/[...slug].astro`. Esa consulta aplica **dos
condiciones**:

```
borrador !== true   Y   fechaPublicacion <= ahora
```

Efectos de una `fechaPublicacion` **futura**:

- **No aparece en ningún listado** (home, sección, nivel, `/recientes`,
  resultados del buscador Pagefind, `rss.xml`).
- **Su página no se genera en el build.** Como `getStaticPaths()` no la incluye,
  la URL devuelve un **404 real**: el artículo no queda accesible ni "por si
  alguien adivina el enlace".
- **El autor no toca `borrador` a mano.** Fecha futura = invisible, de forma
  automática. Cuando la fecha llega (y ocurre un build, ver más abajo), el
  artículo entra solo.

**`borrador: true` es un mecanismo independiente y ortogonal:** significa "no está
listo, no publicar **sin importar la fecha**". Sirve para un texto cuya
`fechaPublicacion` ya pasó pero todavía no se quiere mostrar, o para retirar algo
temporalmente. Un artículo se publica solo si cumple **ambas** condiciones.

Los dos mecanismos y su interacción se documentan en `CONTRIBUIR.md`.

#### Huso horario (decisión concreta, no "a definir")

La comparación `fechaPublicacion <= ahora` se evalúa en la zona
**`America/Argentina/Cordoba`** (UTC−3, sin horario de verano). Una
`fechaPublicacion: 2026-09-10` sin hora se interpreta como **el inicio de ese día
en Córdoba** (`2026-09-10T00:00:00-03:00`), no como medianoche UTC. Así, "sale el
10/09" significa el 10 de septiembre en Argentina. El frontmatter también acepta
fecha-hora con offset explícito si se quiere una hora puntual; `CONTRIBUIR.md`
documenta el formato.

#### Limitación real (trade-off del sitio estático — hay que decirlo claro)

El sitio **solo se regenera cuando ocurre un build**, y el build se dispara con un
**push** (deploy-on-push de Cloudflare Pages, D-4). En consecuencia:

- Un artículo con `fechaPublicacion` = mañana **no aparece solo** al llegar esa
  fecha si ese día no hay ningún push. Aparece recién **en el siguiente build que
  ocurra por cualquier motivo** (otro artículo nuevo, una corrección de texto, un
  cambio de código, etc.).
- Es decir: al día 1, **"programar una fecha futura" equivale en la práctica a
  "dejo el artículo escrito y le doy push el día que quiero que salga"** (o
  cuando haya cualquier otro push posterior a esa fecha). La `fechaPublicacion`
  futura funciona como **salvaguarda** (evita que algo salga antes de tiempo si
  hay un push anticipado), no como disparador temporal.

#### Publicación programada automática: NO al día 1 (D-19)

Un **rebuild programado una vez por día** haría efectiva la publicación por fecha
sin intervención del autor. **Decisión firme (D-19): no se implementa al día 1.**
Queda como opción futura, **ya evaluada**, para activar solo si el autor llega a
necesitar programar publicaciones sin dar push (p. ej. dejar una tanda lista antes
de un viaje o de finales). Implementaciones posibles:

- **GitHub Actions** con `schedule:` (cron) que invoca un **Deploy Hook** de
  Cloudflare Pages, o
- un **Cron Trigger de Cloudflare Workers** que hace lo mismo.

Es una pieza **chica y sin estado** (no viola RF-12 de forma seria). Pero es
**infraestructura adicional que mantener**: una automatización más, un secreto /
Deploy Hook que gestionar, y que puede fallar en silencio. **Trade-off:** se gana
publicación programada real y desatendida; se pierde simplicidad operativa.
Montarlo ahora sería adelantar infraestructura para un caso de uso que el autor
todavía no tiene (ver sección 4 y 8.3).

### 3.3 Gestión de imágenes y binarios (D-16)

**Decisión:** todas las imágenes viven **en el repositorio**
(`public/images/...`) desde el día 1. Astro las optimiza en build (formatos
modernos, tamaños responsivos). No se usa almacenamiento externo por ahora.

**Por qué (requisitos):** es la opción más simple de operar para un solo
mantenedor (RF-12 / Mantenimiento) — cero servicios extra, imágenes versionadas
junto al texto, y el sitio se puede reconstruir de forma totalmente autónoma sin
depender de que un bucket externo siga vivo. Coherente con D-3 (todo en Git, sin
paneles) y con D-18 (repo público: las imágenes de artículos no son sensibles).

**Presupuesto de peso por artículo** (se documenta en `CONTRIBUIR.md`, valores
propuestos, ajustables con datos reales):

| Elemento | Límite propuesto | Formato |
|---|---|---|
| Portada (`portada:`) | **≤ 200 KB** tras optimización; ~1200 px de ancho | WebP o AVIF (JPEG solo si hace falta compatibilidad) |
| Capturas dentro del artículo | **≤ 150 KB** cada una | WebP/AVIF; PNG solo para diagramas o texto fino con transparencia |
| Cantidad de capturas por artículo | **~5–8 como máximo** orientativo | — |
| Peso total de imágenes por artículo | **≤ 1,5 MB** como guía | — |
| Animaciones | Evitar GIF; si es imprescindible, mp4 corto (aunque video está fuera de scope) | — |

**Trade-off explícito.** Se **gana** simplicidad operativa total y builds
reproducibles sin dependencias externas. Se **pierde** que el repositorio crece
de forma monótona: con cientos de artículos ilustrados, a 2–3 años el repo puede
pesar cientos de MB, y clones y builds se hacen más lentos. El presupuesto de peso
frena ese crecimiento pero no lo elimina.

**Evaluación futura (no ahora):** si el repo o los tiempos de build se vuelven
molestos, se migran los binarios pesados a **Cloudflare R2** (mismo proveedor que
el hosting; free tier amplio) sirviéndolos por URL, y el repo queda liviano. Es un
cambio acotado (mover archivos + reescribir rutas de imagen) y no afecta al
contenido en Markdown. Se registra como punto de la sección 8.3.

---

## 4. Patrones de diseño

Solo los que aportan valor a esta escala (blog estático, un mantenedor,
~100–200 piezas).

### Patrones que se adoptan

1. **Content-as-data / Schema validado (Content Collection + Zod).**
   *Resuelve:* RF-2 (secciones como dato), RF-3/RF-4/RF-6/RF-11 (campos
   obligatorios), y el riesgo de "un solo autor sin revisor": el build rechaza
   frontmatter inválido antes de publicar. Es el patrón central y la razón
   principal de elegir Astro (respuesta 2 del autor).

2. **Clave de traducción (translation key).**
   *Resuelve:* RF-9 / CA-9. `slugCanonico` vincula las versiones `es`/`en` sin
   acoplar su publicación.

3. **Diccionario de cadenas de interfaz (i18n de UI) desde el día 1.**
   *Resuelve:* la parte de RF-9 / D-10 que pide poder activar la UI en inglés
   "sin rehacer". Textos de interfaz centralizados en `src/i18n/es.ts`; agregar
   `en.ts` es todo el trabajo futuro.

4. **Composición de layouts (Base → Artículo / Aviso / Página).**
   *Resuelve:* consistencia de maquetado y de metadatos (Open Graph para RF-7,
   `hreflang` para RF-9) con un único lugar donde tocar.

5. **Componentes de contenido con semántica**
   (`BloqueOpinion`, `ListaFuentes`, `FichaAutor`, `BotonesCompartir`,
   `CredencialesAutor`, `FechaArticulo`, `AvisoLicencia`).
   *Resuelve:* RF-3/CA-3, RF-4/CA-4, RF-6/CA-6, RF-7/CA-7, D-11, la estrategia de
   fechas de 3.1 y el aviso de licencia de D-17. Encapsular evita depender de que
   el autor maquete a mano cada vez.

6. **Ruta dinámica única por eje de navegación**
   (`/seccion/[seccion]`, `/[lang]/[...slug]`).
   *Resuelve:* RF-2 / CA-2 y RF-9. Agregar una sección o un idioma no crea
   páginas a mano.

7. **Consulta central de contenido única (`src/lib/articulos.ts`).**
   *Resuelve:* 3.2. Una sola función decide qué está publicado (`borrador !== true`
   y `fechaPublicacion <= ahora`) y la usan todos los listados, el buscador, el
   RSS y `getStaticPaths()`. Evita que un consumidor se olvide del filtro y
   filtre un borrador o un artículo con fecha futura.

8. **Capa intercambiable de analítica (un solo componente `Analitica.astro`).**
   *Resuelve:* D-7 / D-15. El proveedor concreto (GoatCounter hoy, Plausible u
   otro mañana) vive en un único componente; cambiarlo es editar un archivo.
   Evita el lock-in de analítica.

9. **Build & deploy automatizado (deploy-on-push en Cloudflare Pages).**
   *Resuelve:* que "publicar" no dependa de recordar comandos, y RF-12 (el
   pipeline lo opera Cloudflare, no el autor).

### Patrones que serían sobre-ingeniería aquí (y por qué NO se usan)

- **Repository pattern / capa de acceso a datos.** No hay BD ni múltiples
  orígenes; el contenido son archivos que Astro ya abstrae. Sería indirección
  pura.
- **CMS con base de datos / API de contenido (Strapi, Sanity, WordPress
  headless).** Servicio con estado que administrar y asegurar: choca con RF-12 y
  con la respuesta 2 (el autor rechaza explícitamente paneles tipo WordPress).
- **CMS de git (Decap, Tina, Sveltia).** Aunque escriben Markdown en el repo, el
  autor los descartó (respuesta 2) y agregan configuración/auth que mantener.
- **Build diario programado (cron) para publicación por fecha, AHORA.** Montarlo
  al día 1 es **adelantar infraestructura para un caso de uso que el autor
  todavía no tiene** (nunca necesitó programar una publicación). Al día 1, la
  `fechaPublicacion` futura es una salvaguarda y el push es el disparador (D-19,
  ver 3.2). Se implementa solo si aparece la necesidad real.
- **Almacenamiento externo de imágenes (R2/S3) desde el día 1.** A la escala
  actual el repo alcanza (D-16 / 3.3); sumar un bucket ahora es un servicio más
  que operar sin necesidad.
- **Arquitectura de plugins para "tipos de sección".** RF-2 se cubre con
  carpetas + un campo + un archivo de catálogo.
- **Micro-frontends / monorepo con packages.** Un sitio, un desarrollador.
- **State management global en cliente (Redux/almacenes).** El sitio es contenido
  estático; la interactividad (menú, compartir, buscador) es local a su
  componente.
- **i18n de UI completo activado desde el día 1.** El scope excluye traducir el
  sitio. Se deja el diccionario preparado (patrón 3), no se monta el sistema
  completo hasta decidirlo.
- **Design system / librería de componentes publicada.** Una carpeta de
  componentes alcanza.

---

## 5. Analítica por artículo y canal (RF-10 / CA-10)

### Qué exige CA-10

Para un **artículo específico**: (a) número de **visitas** y (b) **desglose de
canales de origen** (buscador, redes, enlace directo, referencias), con datos de
**ese** artículo, no solo del sitio.

### Diseño (D-7): capa intercambiable

Toda la integración vive en **`src/components/Analitica.astro`**, incluido en
`LayoutBase`. Cambiar de proveedor = editar ese archivo (y, si aplica, un
`utm`-helper en `BotonesCompartir`). Esto permite **arrancar gratis y migrar sin
retrabajo** si el análisis de canales lo amerita.

### Cómo se obtiene el desglose

- **Por artículo:** cada artículo tiene URL propia y estable
  (`/es/tecnico/colonial-pipeline-analisis`). Toda herramienta moderna filtra por
  ruta → "visitas del artículo" = visitas de esa ruta.
- **Por canal:**
  1. **Referrer:** distingue buscadores, redes y otros sitios; las herramientas
     ya lo agrupan en Search / Social / Referral / Direct.
  2. **UTM** en los enlaces que el autor comparte activamente. `BotonesCompartir`
     agrega `?utm_source={red}&utm_medium=social&utm_campaign=share`. Así se
     separa "lo compartí yo en LinkedIn" (audiencia 3) de "me encontraron por
     otra vía en LinkedIn".
  3. **Direct** (sin referrer ni UTM) aproxima el "enlace directo" de RF-10.
- La convención UTM se documenta en `CONTRIBUIR.md`.

### Comparativa de opciones

| Opción | Modelo | Cookies / privacidad | Costo | CA-10 (por artículo + canal) | Encaje RF-12 |
|---|---|---|---|---|---|
| **GoatCounter** (elegido, D-15) | Servicio hosteado | Sin cookies, sin PII, muy liviano | **Gratis** (uso personal/no comercial) | Sí: vistas por path + tabla de referrers + soporta campañas/UTM | Alto: es un `<script>` |
| **Plausible** (destino futuro) | Servicio hosteado en la UE | Sin cookies, GDPR-friendly por diseño | ~9 USD/mes | Sí, muy directo: "Top Sources" + "UTM sources/medium/campaign" + filtro por página | Alto (modo hosteado) |
| Cloudflare Web Analytics | Servicio (ya se usa Cloudflare) | Sin cookies | Gratis | Vistas por página sí; **desglose de canales más pobre**; UTM no es su fuerte | Alto |
| Umami (self-host) | Self-host o cloud | Sin cookies | Self-host: servidor + BD | Sí | Self-host **rompe RF-12** |
| Google Analytics 4 | Servicio | **Cookies / consentimiento** | Gratis | Muy potente | Alto, pero suma gestión de banner |

### Decisión (D-15)

- **Día 1:** **GoatCounter**, plan gratuito (sin cookies, sin banner —coherente
  con D-8—, cumple CA-10). Su script vive encapsulado en `Analitica.astro`; la
  access key va como variable de entorno en Cloudflare Pages (D-18), no en el
  repo.
- **Futuro:** cambiar a **Plausible** pago *si* el análisis de canales de
  GoatCounter se queda corto. El cambio es un archivo (D-7). El autor descarta el
  gasto fijo por ahora.
- **Se descartan:** GA4 (cookies + banner + choca con la temática del blog),
  self-hosted (BD que mantener, contra RF-12), y Cloudflare Web Analytics como
  principal (desglose de canal insuficiente para CA-10; sirve como métrica
  secundaria si se quiere).
- **Opcional (mejora, no día 1):** proxi del script de analítica a través de un
  Cloudflare Worker/Pages Function para reducir el bloqueo por adblockers. No es
  un servidor con estado; es una función sin estado. Se evalúa si las cifras de
  CA-14 se ven muy castigadas.

### Verificación de CA-10

En el panel del proveedor, filtrar por la URL de un artículo concreto y
comprobar: (a) el número de visitas de esa URL; (b) la tabla de fuentes/canales
(referrers + UTM) para esa URL, distinta de la del sitio completo.

---

## 6. Formulario de contacto (RF-8 / CA-8)

### Qué exige CA-8

Con datos válidos: (a) el mensaje **llega al autor** (verificado con un envío de
prueba); (b) el remitente **ve una confirmación de envío**.

### Diseño (D-14 + D-6)

- **`<form>`** en `/contacto` que postea a **Web3Forms** (su access key va como
  variable de entorno en Cloudflare Pages, D-18, no en el repo).
- Web3Forms **reenvía por email** a **`contacto@<dominio>`**.
- **Cloudflare Email Routing** (gratis) reenvía `contacto@<dominio>` a la casilla
  Gmail del autor (D-6).
- Tras el envío, redirección a **`/contacto/gracias`** (CA-8b).
- **Anti-spam:** campo honeypot oculto + **hCaptcha**, ambos por la integración
  **gratuita** de Web3Forms. El método de captcha se elige en el panel de
  Web3Forms; **no hace falta cuenta propia de hCaptcha ni site key en el repo**
  (el script de Web3Forms renderiza el widget en `/contacto`). **No se usa
  Cloudflare Turnstile:** conectarlo a Web3Forms exige su plan Pro (de pago),
  mientras que hCaptcha entra en el plan gratuito.

### Comparativa de opciones

| Opción | Cómo funciona | CA-8 | Costo | Mantenimiento (RF-12) | Riesgos |
|---|---|---|---|---|---|
| `mailto:` | Abre el cliente de correo del visitante | **No** cumple (sin confirmación del sitio; muchos no tienen cliente; expone la dirección) | 0 | Nulo | Descartada |
| **Web3Forms** (elegido, D-14) | El form postea a su API con una "access key"; reenvía a cualquier email; página/redirect de éxito | **Sí** | Gratis (uso normal); honeypot y hCaptcha incluidos | **Bajo**: sin backend propio | Los mensajes pasan por su infraestructura; dependencia de plan gratuito |
| **Formspree** (alternativa documentada) | Similar, con panel, filtros de spam, autorespuesta | **Sí** | Gratis 50 envíos/mes | Bajo | Requiere verificar el email destino; límite mensual |
| Función serverless propia + API de email (Resend/MailChannels) | Código propio recibe el POST y llama a la API | Sí | Free tiers disponibles | **Medio**: código y claves que mantener y rotar | Sobre-dimensionado para el volumen; más superficie que puede romperse en pausas |

### Decisión (D-14)

**Web3Forms**, plan gratuito: sin cuenta atada a un backend, honeypot + hCaptcha
incluidos (Turnstile quedaría detrás de su plan Pro), reenvía a cualquier email. **Formspree** queda solo como alternativa
documentada por si Web3Forms deja de servir. La **función serverless propia se
descarta** por sobre-ingeniería para un contacto de bajo volumen. El autor
descarta pagar por formularios por ahora.

### Verificación de CA-8

1. Completar el formulario con datos válidos desde un navegador limpio.
2. Confirmar que aparece `/contacto/gracias` (CA-8b).
3. Confirmar que el mensaje llega a la Gmail del autor vía
   `contacto@<dominio>` (CA-8a).
4. Enviar algo que dispare el honeypot y confirmar que se filtra.

### Estado del pendiente de RF-8

El "medio de recepción" quedó **resuelto** (D-6): `contacto@<dominio>` con
Cloudflare Email Routing → Gmail. Requiere que el dominio ya exista
(prerrequisito de kickoff). Enviar *con la identidad* `contacto@<dominio>`
(respuestas a los remitentes desde esa dirección) queda **fuera de scope**; si el
autor lo quisiera después: Zoho Mail (free) o Google Workspace (~6 USD/mes).

---

## 7. Cómo encajan las piezas

```
Autor edita Markdown  ──push──▶  Repositorio Git PÚBLICO  ──▶  Cloudflare Pages (build: Astro + Pagefind)
                                  (secretos NO en el repo:       │
                                   van como env vars, D-18)      │
                                          genera sitio estático (HTML/CSS/JS + índice de búsqueda)
                                          filtro de publicación: borrador !== true && fechaPublicacion <= ahora (3.2)
                                                          │
                                                          ▼
                                                  Cloudflare CDN
                                                          │
              ┌───────────────────────────────────────────┼───────────────────────────────┐
              ▼                                            ▼                               ▼
   Lector navega y busca                       Formulario de contacto (Web3Forms)    Analitica.astro (capa)
   (RF-1,2,3,4,6,7,9,11,13)                    POST ─▶ Web3Forms                      GoatCounter (→ Plausible)
                                               ─▶ contacto@<dominio>                 ─▶ panel por-URL + canal
                                               ─▶ Cloudflare Email Routing           (RF-10 / CA-10)
                                               ─▶ Gmail del autor (RF-8 / CA-8)
```

Todo lo que puede fallar durante una pausa larga (RF-12) es **externo y
reemplazable**: si Web3Forms cierra, se cambia el `action` (a Formspree u otro);
si la analítica cae, el sitio se sirve igual; el proveedor de analítica se cambia
editando un componente.

---

## 8. Licencia, repositorio y evolución futura

### 8.1 Licencia del contenido — CC BY 4.0 (D-17)

El **contenido** del blog (texto de los artículos, explicativos, análisis) se
publica bajo **Creative Commons Attribution 4.0 Internacional (CC BY 4.0)**:
cualquiera puede copiar, redistribuir, traducir y adaptar el material, incluso con
fines comerciales, **con atribución** al autor y enlace a la licencia.

Motivación en los requisitos: el objetivo principal de `REQUISITOS.md` es que el
blog sea **un recurso confiable y reutilizable**; permitir cita y traducción con
atribución amplía su alcance y su valor como pieza de presencia profesional
(objetivo secundario). CC BY es la variante más permisiva con atribución; se elige
sobre BY-SA para no imponer condiciones a quien reutilice.

Precisiones:

1. **Aplica al contenido, no al código.** El código del sitio (componentes Astro,
   estilos, configuración) **no** queda cubierto por esta decisión: puede llevar
   otra licencia (p. ej. MIT) o quedar sin licencia explícita. Definir la licencia
   del código es una decisión aparte, fuera del alcance de este documento.
2. **Dónde se declara:** un archivo **`LICENSE-CONTENT`** en la raíz con el texto/
   enlace de CC BY 4.0, un **aviso en el pie de página** de todo el sitio
   (`AvisoLicencia.astro`) y una **nota breve al final de cada artículo** ("Este
   texto está bajo CC BY 4.0. Podés reutilizarlo citando a \<autor\> y enlazando
   al original.").
3. **Imágenes y material de terceros NO quedan cubiertos.** Logos, capturas de
   informes oficiales (FBI, CISA, ENISA, proveedores), diagramas ajenos, etc. son
   de sus respectivos titulares y se usan como cita. La CC BY del autor cubre solo
   lo que produce el autor. **`CONTRIBUIR.md` debe incluir la regla:** toda imagen
   de terceros se cita con su fuente y, si corresponde, su licencia; ante la duda,
   no se incluye o se reemplaza por un diagrama propio.

### 8.2 Repositorio público y manejo de secretos (D-18)

El repositorio del blog es **público desde el inicio**. Beneficios en términos de
los requisitos:

- Deja abierta **sin fricción** la puerta a **giscus** (comentarios sobre GitHub
  Discussions, D-12): giscus requiere un repo público.
- Coherente con la temática (transparencia) y con el objetivo de visibilidad
  profesional: el repo es en sí una muestra de trabajo.
- Permite que terceros propongan correcciones (erratas, enlaces caídos) vía PR.

**Trade-off menor:** un repo público **expone los borradores y todo el historial
de commits**. Mitigaciones, a documentar en `CONTRIBUIR.md`:

- Los borradores reales se trabajan en **rama aparte** o con **`borrador: true`**
  (que además los mantiene fuera del build, 3.2). Aun así, son visibles para
  quien mire el repo: si un texto no debe verse hasta publicarse, va en rama no
  mergeada.
- **Ningún secreto se commitea.** Las access keys de **Web3Forms** y de
  **GoatCounter**, y cualquier **Deploy Hook** futuro, se configuran como
  **variables de entorno en Cloudflare Pages** (y como *secrets* de GitHub si
  algún día se usa GitHub Actions). El repo no contiene `.env` con valores
  reales; sí puede contener un `.env.example` con nombres de variables y sin
  valores.
- El historial de commits se escribe asumiendo que es público (sin datos
  personales de terceros, sin rutas internas sensibles).

### 8.3 Evolución futura (diferido explícito)

Nada de esto se implementa al día 1; queda registrado para no re-discutirlo y para
que la arquitectura actual no lo bloquee:

| Tema | Disparador para retomarlo | Implementación ya identificada |
|---|---|---|
| **Publicación programada automática** (D-19) | El autor necesita programar publicaciones sin dar push. | GitHub Actions con cron → Deploy Hook de Cloudflare Pages, o Cron Trigger de Workers. |
| **Analítica Plausible** (D-15) | El desglose de canales de GoatCounter se queda corto para RF-10. | Cambiar el script en `Analitica.astro` (capa D-7). |
| **Imágenes en Cloudflare R2** (D-16) | El repo o los builds se vuelven lentos por el peso de las imágenes. | Mover binarios a R2, reescribir rutas de imagen. Contenido Markdown intacto. |
| **Comentarios (giscus)** (D-12) | Existe comunidad que lo justifique (RF-14). | Widget giscus sobre GitHub Discussions del repo público (D-18). |
| **Newsletter (Buttondown)** (D-12) | Existe comunidad que lo justifique (RF-15). | Formulario embebido de Buttondown. Sin cambios estructurales. |
| **UI en inglés** (D-10) | Se decide traducir la interfaz, no solo artículos. | Agregar `src/i18n/en.ts` y activar el idioma. Estructura ya preparada. |
| **Envío con identidad `contacto@<dominio>`** | El autor quiere responder desde esa dirección. | Zoho Mail (free) o Google Workspace (~6 USD/mes). |

---

## 9. Preguntas abiertas para el autor

**No quedan preguntas abiertas.** Todas las de las rondas anteriores (P-1 a P-6)
se cerraron y están registradas como decisiones D-14 a D-19. No hay preguntas
bloqueantes ni pendientes menores.

**P-0 — RESUELTO (2026-09-05).** Nombre: **"El Que Se Las Sabe Todas"**. Dominio:
**elquelassabetodas.com** (comprado). Quedan fijados en consecuencia: la base de
las URLs canónicas y `hreflang` (RF-9), el dominio para los parámetros UTM
(RF-10), la casilla `contacto@elquelassabetodas.com` (D-6) y el aviso de
atribución de la licencia (D-17). El kickoff de implementación está habilitado.
Detalle del nombre y su proceso en `MARCA.md`.
