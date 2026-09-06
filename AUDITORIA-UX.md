# Auditoría UX/UI — 2026-09-06 (segunda pasada, sobre commit f8765da)

**Método:** navegador headless — Google Chrome vía Playwright (`channel: chrome`) —
con capturas a pantalla completa, estilos computados, medición de áreas de toque y
de scroll horizontal, y pruebas de interacción (scroll de la tira de secciones,
consulta real en el buscador, apertura/cierre del menú). Se auditó el `astro dev`
(localhost:4321) y un **build de producción servido con `astro preview`**
(localhost:4322), necesario para verificar el buscador/Pagefind.
**Anchos:** 375px y 768px. **Modos:** claro y oscuro (forzados con
`localStorage.setItem('tema', …)` antes de cargar).

**Estado general:** los 3 críticos y todos los "molesto/cosmético" de la primera
auditoría quedaron **resueltos**. No hay scroll horizontal en ninguna página a
ningún ancho. El buscador funciona en producción. Quedan un hallazgo NUEVO menor
introducido por el arreglo de enlaces y algunos detalles cosméticos.

**Páginas revisadas (código HTTP, prod):**

| Ruta | HTTP |
|---|---|
| `/` | 200 |
| `/no-tecnico` | 200 |
| `/tecnico` | 200 |
| `/secciones` | 200 |
| `/seccion/fraude-financiero`, `/seccion/ingenieria-social` | 200 |
| `/sobre` | 200 |
| `/contacto` | 200 |
| `/contacto/gracias` | 200 |
| `/buscar` | 200 (prod: input real y resultados OK; dev: mensaje neutro de "no disponible") |
| `/recientes` | 200 |
| `/es/no-tecnico/que-es-el-phishing` | 200 |
| `/es/tecnico/colonial-pipeline-analisis` | 200 |
| `/es/tecnico/stuxnet` | 200 |
| `/aviso/pausa-2026-marzo` | 200 |
| ruta inexistente (página 404) | 404 |

Sin errores de JS ni recursos 404 en ninguna página (prod). Sin imágenes rotas.

---

## Crítico

Ninguno pendiente. (Ver "Resueltos" al final para C-1, C-2 y C-3.)

---

## Molesto

### M-N1 · Enlaces secundarios quedaron sin ninguna señal de que son tocables — NUEVO (efecto colateral del arreglo C-2)
- **Página:** pie de todas las páginas; cabecera de artículo (`/es/tecnico/...`, `/es/no-tecnico/...`)
- **Ancho:** 375px y 768px
- **Modo:** ambos
- **Problema:** al hacer que un `<a>` "pelado" herede el color del texto, varios
  enlaces utilitarios quedaron con **exactamente el mismo color que el texto plano
  que los rodea, sin subrayado y sin borde**. Verificado con estilos computados:
  - Pie: "RSS" y "Contenido bajo CC BY 4.0" → `rgb(139,139,150)` (tinta-tenue),
    `text-decoration: none`, igual que el texto "Lo escribe Juan Ignacio García…".
  - Cabecera de artículo: el nombre de sección del breadcrumb ("Infraestructura
    crítica") → tinta-tenue, sin subrayado, indistinguible de la etiqueta de
    nivel que va al lado.
  Como en touch no hay `:hover`, no hay forma de saber que se puede tocar. Los
  CTAs importantes ("← Volver al listado", "Ver todas →", etc.) sí conservan
  color acento + subrayado, así que el impacto es acotado a enlaces secundarios.
- **Idea de solución:** darle a los enlaces utilitarios una señal persistente
  (subrayado tenue siempre visible, o el color acento como antes pero sólo en
  esos), sin volver al "todo azul".

### M-N2 · Flechas del carrusel con área de toque chica — NUEVO (menor)
- **Página:** `/` (carrusel de destacados)
- **Ancho:** 768px (las flechas están ocultas `< 640px`)
- **Modo:** ambos
- **Problema:** los botones `←` / `→` del carrusel miden ~28×26px, por debajo de
  los 44px recomendados. A 768px (tablet táctil) son incómodos. El carrusel
  también se desliza con el dedo, así que son un control secundario.
- **Idea de solución:** subir el `padding` / tamaño mínimo de esos botones a 44px.

---

## Cosmético

### K-N1 · Las portadas de los artículos (fixtures) se ven como rectángulos oscuros, sobre todo en modo claro
- **Página:** `/` (carrusel), y donde se muestre portada
- **Ancho:** ambos
- **Modo:** claro (más evidente) y oscuro
- **Problema:** las imágenes de portada de los fixtures son placeholders muy
  oscuros; en modo claro son bloques casi negros sobre el fondo crema y parece
  que la imagen no cargó. No se pudo evaluar con imágenes reales.

### K-N2 · Ruptura fea del path monoespaciado en `/secciones` móvil
- **Página:** `/secciones`
- **Ancho:** 375px
- **Modo:** ambos
- **Problema:** bajo el título del panel, el texto `/seccion/ingenieria-social`
  corta a mitad de palabra ("…INGENIERIA-" / "SOCIAL"). Detalle menor.

### K-N3 · La tira de secciones no tiene indicador de scroll en pantalla no táctil
- **Página:** `/secciones`
- **Ancho:** 768px
- **Modo:** ambos
- **Problema:** la barra de secciones oculta el scrollbar; en una ventana de
  escritorio de ~768px de ancho hay que saber que se scrollea con shift+rueda. Se
  ve el borde del chip siguiente asomando, que ya funciona como pista. En táctil
  (el caso real a 768px) no es problema.

---

## Sin verificar

### SV-1 · Envío real del formulario de contacto
- El entorno no tiene `PUBLIC_WEB3FORMS_ACCESS_KEY` ni `PUBLIC_TURNSTILE_SITE_KEY`,
  así que `/contacto` sigue mostrando el banner "Falta configurar
  PUBLIC_WEB3FORMS_ACCESS_KEY" y el form postea con `access_key=PENDIENTE`. No se
  pudo verificar un envío exitoso, el widget de Turnstile ni la redirección a
  `/contacto/gracias` (esa página, por sí sola, renderiza bien).

### SV-2 · Enlaces dentro del texto de un artículo (`.contenido a`)
- Ningún artículo de contenido tiene enlaces inline en el cuerpo, así que no se
  pudo ver uno renderizado. La regla CSS `.contenido a { color: var(--color-acento);
  border-bottom: 1px solid currentColor }` está bien apuntada; queda pendiente
  confirmarlo con un artículo que tenga enlaces en prosa.

### SV-3 · iOS Safari real
- Sólo se probó en Chrome headless. Los `font-size` de inputs son ≥16px en el
  marcado (no debería haber zoom en iOS); la interacción real de Safari
  (`overflow-x: clip` + `position: sticky`, `-webkit-overflow-scrolling`) no se
  verificó en dispositivo.

### SV-4 · Superposición flotante en las capturas
- Varias capturas muestran una "píldora" flotante con íconos que NO forma parte
  del sitio (overlay del propio Chrome headless / prompt de traducción).
  Confirmado con `elementFromPoint` que en esa posición sólo hay contenido del
  sitio. No es un defecto de la página.

---

## Resueltos desde la auditoría anterior

### C-1 · `/secciones` — desborde y secciones inalcanzables — RESUELTO
- A 375px y 768px: `scrollWidth == clientWidth` (cero scroll horizontal de página).
- La tira de secciones ahora es un contenedor `overflow-x: auto` real: se
  verificó por script que scrollea dentro del viewport y que **el 6º chip
  ("Fraude financiero") queda visible al scrollear la tira**. Los 6 chips son
  alcanzables.
- El panel derecho de artículos hace wrap normal: el borde derecho del párrafo
  de resumen queda en 351px a 375px de viewport (antes se estiraba a ~1068px).
  Esto cierra también **M-3**.
- Arreglo aplicado: `grid-cols-1` explícito en móvil + `min-w-0` en el `<nav>` de
  la tira y en el `<div>` de paneles.

### C-2 · Color de enlaces — "demasiado azul" — RESUELTO (con salvedad M-N1)
- Verificado con estilos computados en `/`, `/secciones`, `/sobre` y artículo,
  en claro y oscuro:
  - **En TINTA (no azul):** logo del masthead, navegación inline, ítems del menú
    móvil, títulos de tarjeta de artículo, nombres de sección de la vidriera,
    "RSS" y licencia del pie.
  - **En ACENTO (correcto):** CTAs de la home ("Empezar por lo básico →",
    "Ir a los análisis →"), "Ver todas las secciones →", "Todos los artículos →",
    "Leer el aviso completo →", "← Volver al listado", "← Inicio", "← Volver al
    inicio", "CC BY 4.0" de la nota de licencia del artículo, fuentes citadas
    (`ListaFuentes`, p. ej. "FBI Statement on Compromise…"), ítem de navegación
    **activo** (aria-current).
  - No se detectó ningún CTA ni enlace de fuente que se haya quedado en gris por
    error.
  - Salvedad: el arreglo dejó a un puñado de enlaces secundarios sin señal visual
    → ver **M-N1**.
- Arreglo aplicado: `a { color: inherit }` dentro de `@layer base`; el acento
  queda en `.contenido a` (fuera de capa) y en clases `text-acento` explícitas.

### C-3 · Buscador `/buscar` no funcionaba — RESUELTO
- En el build de producción + `astro preview`: aparece el input de búsqueda
  (`font-size: 16px`, sin zoom en iOS) y una consulta real por "phishing"
  devuelve 3 resultados con títulos correctos ("Qué es el phishing y por qué
  picamos", "¿Filtraron tu correo?…", etc.).
- En `astro dev` (sin índice Pagefind) muestra un mensaje neutro: "El buscador no
  está disponible en este momento." (antes le hablaba al lector de `npm run build`).
- Arreglo aplicado: carga de `pagefind-ui.js` con `<script src>` + init con
  `window.PagefindUI`, en vez de `import()` de un módulo que no exportaba nada.

### M-1 · Bordes de inputs invisibles en oscuro — RESUELTO
- El borde de los inputs pasó de `#2b2b33` (≈1,36:1 sobre el fondo) a `#4a4a55`
  (`--color-borde-fuerte`, ≈2,17:1). En la captura los campos ahora se distinguen
  con claridad. (Nota cosmética: 2,17:1 sigue un poco por debajo del 3:1 ideal
  para bordes de control de WCAG 1.4.11, pero ya es perfectamente visible.)

### M-2 · Áreas de toque del pie — RESUELTO
- A 375px: íconos LinkedIn/GitHub = 44×44px; "RSS" = 41×44px; "Contenido bajo
  CC BY 4.0" = 175×44px. Todos con alto ≥44px.

### M-4 · Hover "pegado" en touch — RESUELTO
- El `a:hover` global está envuelto en `@media (hover: hover)`.

### M-5 · Menú móvil: cierre "al tocar fuera" — RESUELTO (documentación)
- El comentario de `Cabecera.astro` ya no promete cierre por toque fuera. El menú
  cierra por el botón "Cerrar", por tocar un enlace y con Escape; bloquea el
  scroll del fondo (`menu-lock`); el panel es full-screen y 100% opaco. Verificado
  que abre y cierra bien a 375px.

### K-1 · Texto del toggle de tema — RESUELTO
- Ahora dice "Modo claro" / "Modo oscuro" (acción), con `aria-label` "Cambiar a
  modo claro/oscuro". Se entiende qué hace.

### K-3 · Wrapping de titulares en 375px — RESUELTO
- `text-wrap: balance` sólo en `h1/h2`; `h3/h4` (títulos de tarjeta) usan
  `text-wrap: pretty`, con cortes menos irregulares.

---

## Revisión de "bloques" de la página (pedida)

Todos revisados a 375px y 768px, claro y oscuro. Sin problemas de alineación,
fondo ni separación:

- **Tarjetas de artículo (listados):** título en tinta, resumen en tinta-suave,
  meta en tinta-tenue, separador `border-top` por tarjeta. Jerarquía clara.
- **Bloque "Primera vez acá / dos puertas" (home):** dos columnas con borde
  izquierdo (acento en la primera, borde neutro en la segunda), sin fondo. En
  móvil apilan bien. CTA en acento con subrayado. OK.
- **`AvisoDestacado` (home y `/aviso/...`):** fondo `--color-superficie` (apenas
  distinto del papel) + borde izquierdo acento + fecha/etiqueta en acento. Se
  separa bien del contenido en ambos modos.
- **`BloqueOpinion` (artículo):** borde izquierdo acento, rótulo "OPINIÓN /
  ANÁLISIS DEL AUTOR" en acento, bajada tenue y cuerpo en serif con buen
  contraste. Bien diferenciado del cuerpo del artículo.
- **`ListaFuentes` / `AvisoLicencia` / `CredencialesAutor`:** enlaces en acento,
  contraste OK.
- **Vidriera de secciones (home) y panel de `/secciones`:** títulos en tinta,
  descripciones legibles, contadores en tinta-tenue. Nada desalineado.
