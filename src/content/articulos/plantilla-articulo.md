---
# PLANTILLA DE ARTÍCULO.
#
# Este archivo SÍ se carga (por eso tiene `borrador: true`: nunca se publica y no
# genera ninguna URL). Su único fin es servir de punto de partida y mantener la
# colección `articulos` no vacía mientras no haya artículos reales.
#
# Para crear un artículo:
#  1. Copialo a  src/content/articulos/es/no-tecnico/  o  .../es/tecnico/
#     con el nombre en kebab-case:  mi-slug.md   (o .mdx si vas a usar <BloqueOpinion>).
#  2. Cambiá `borrador` a false, completá el frontmatter y borrá los campos
#     opcionales que no uses.
#  3. Escribí el cuerpo debajo del segundo "---".
# El build valida el frontmatter con Zod. Detalle completo en CONTRIBUIR.md.
titulo: "Título del artículo (con el año del hecho entre paréntesis si es análisis de caso)"
slug: "plantilla-articulo"            # kebab-case; define la URL dentro de su nivel
slugCanonico: "plantilla-articulo"   # mismo valor para la versión es y en (RF-9)
idioma: "es"                         # es | en
nivel: "no-tecnico"                  # no-tecnico | tecnico  (RF-1; fuente de verdad para filtrar)
tipoArticulo: "explicativo"          # explicativo | analisis-caso | coyuntura
secciones: ["ingenieria-social"]    # >= 1 slug existente en src/content/secciones/
autores: ["juan-garcia"]           # >= 1 slug existente en src/content/autores/
fechaPublicacion: 2026-01-01         # fecha futura = invisible hasta que llegue (zona America/Argentina/Cordoba)
# fechaActualizacion: 2026-02-01     # opcional; si difiere, se muestra "Actualizado en <mes año>"
resumen: "Dos o tres frases. Se usa en listados, en Open Graph y en el RSS. Máximo 400 caracteres."
# portada: "../../../../assets/images/articulos/mi-slug/portada.webp"  # opcional; ruta relativa (4 niveles: es/<nivel>/<archivo>)
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
