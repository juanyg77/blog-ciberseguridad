---
# PLANTILLA DE ARTÍCULO.
#
# Este archivo SÍ se carga (por eso tiene `borrador: true`: nunca se publica y no
# genera ninguna URL). Su único fin es servir de punto de partida y mantener la
# colección `articulos` no vacía mientras no haya artículos reales. Queda suelto
# en la raíz de articulos/ a propósito; los artículos reales van en carpeta.
#
# Para crear un artículo (contenido CO-LOCADO, ver CONTRIBUIR.md):
#  1. Creá la carpeta  src/content/articulos/<slug-canonico>/  (kebab-case).
#  2. Copiá este archivo adentro como  es.md  (o  es.mdx  si vas a usar
#     <BloqueOpinion>). El nombre del archivo es el idioma: es.md / en.md.
#  3. Poné las imágenes en esa misma carpeta (portada.webp, capturas…) y
#     referencialas con ruta corta:  ./portada.webp
#  4. Cambiá `borrador` a false, completá el frontmatter y borrá los campos
#     opcionales que no uses.  slugCanonico DEBE ser igual al nombre de la carpeta.
#  5. Escribí el cuerpo debajo del segundo "---".
# El build valida el frontmatter con Zod y la coherencia carpeta/frontmatter.
titulo: "Título del artículo (con el año del hecho entre paréntesis si es análisis de caso)"
slug: "plantilla-articulo"            # kebab-case; define la URL dentro de su nivel/idioma
slugCanonico: "plantilla-articulo"   # = nombre de la carpeta; une la versión es y en (RF-9)
idioma: "es"                         # es | en
nivel: "aprender"                    # aprender | profundizar  (RF-1; fuente de verdad para filtrar)
tipoArticulo: "explicativo"          # explicativo | analisis-caso | coyuntura
secciones: ["viajero-digital"]     # >= 1 slug existente en src/content/secciones/
autores: ["juan-garcia"]           # >= 1 slug existente en src/content/autores/
fechaPublicacion: 2026-01-01         # fecha futura = invisible hasta que llegue (zona America/Argentina/Cordoba)
# fechaActualizacion: 2026-02-01     # opcional; si difiere, se muestra "Actualizado en <mes año>"
resumen: "Dos o tres frases. Se usa en listados, en Open Graph y en el RSS. Máximo 400 caracteres."
# portada: "./portada.webp"          # opcional; imagen co-locada en la carpeta del artículo
# portadaAlt: "Qué muestra la portada"
tieneOpinion: false                  # true si el cuerpo incluye <BloqueOpinion>
borrador: true                       # PLANTILLA: dejalo en true. En un artículo real, false.
destacado: false                     # true = entra al carrusel de destacados de la home
fuentes: []                          # OBLIGATORIO (>= 1) si tipoArticulo == analisis-caso
tags: []                             # folksonomía libre para el buscador; no es navegación
---

Primer párrafo: abrí con una situación concreta, no con una definición.

## Un subtítulo

Cuerpo del artículo en Markdown.
