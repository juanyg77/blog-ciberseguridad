---
# PLANTILLA DE AVISO (RF-11 / CA-12).
#
# Un "aviso" es una comunicación al lector (p. ej. "me tomo una pausa"), NO un
# artículo. Con `activo: true` aparece como banner en la home (el más reciente
# activo). Con `activo: false` no se muestra en ningún lado.
#
# Esta plantilla queda con `activo: false` a propósito: no se muestra, pero
# mantiene la colección `avisos` no vacía. La página /aviso/plantilla-aviso NO se
# genera (está filtrada en src/pages/aviso/[aviso].astro).
#
# Para publicar un aviso: copiá este archivo con un nombre descriptivo en
# kebab-case (p. ej. pausa-2027-enero.md) y poné `activo: true`.
titulo: "Título breve del aviso"
fecha: 2026-01-01
activo: false
---

Cuerpo del aviso en Markdown. Un par de párrafos como mucho: qué pasa, hasta
cuándo, y que el sitio sigue disponible mientras tanto.
