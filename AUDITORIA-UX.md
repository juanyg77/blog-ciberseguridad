# Auditoría UX/UI — 2026-09-06

**Método:** navegador headless (Google Chrome vía Playwright, `channel: chrome`) con
capturas a pantalla completa y extracción de estilos computados, tamaños de área
de toque y medición de scroll horizontal. Se auditó tanto el `astro dev`
(localhost:4321) como un **build de producción servido con `astro preview`**
(localhost:4322), porque el buscador y el índice Pagefind sólo existen tras el build.
**Anchos:** 375px y 768px. **Modos:** claro y oscuro (forzados con
`localStorage.setItem('tema', …)` antes de cargar).

**Páginas revisadas (código HTTP):**

| Ruta | HTTP |
|---|---|
| `/` | 200 |
| `/no-tecnico` | 200 |
| `/tecnico` | 200 |
| `/secciones` | 200 |
| `/seccion/ingenieria-social`, `/seccion/fraude-financiero` | 200 |
| `/sobre` | 200 |
| `/contacto` | 200 |
| `/contacto/gracias` | 200 |
| `/buscar` | 200 (dev: `/pagefind/*` 404; prod: 200 pero la UI no arranca — ver C-3) |
| `/recientes` | 200 |
| `/es/no-tecnico/que-es-el-phishing` | 200 |
| `/es/tecnico/colonial-pipeline-analisis` | 200 |
| `/es/tecnico/stuxnet` | 200 |
| `/aviso/pausa-2026-marzo` | 200 |
| ruta inexistente (página 404) | 404 |

---

## Crítico

### C-1 · El filtro de `/secciones` se desborda y deja 4 de 6 secciones inalcanzables en móvil
- **Página:** `/secciones`
- **Ancho:** ambos (375px y 768px)
- **Modo:** ambos
- **Problema:** la tira de secciones (los "chips" con contador) mide ~1116px de
  ancho a 375px y ~1108px a 768px. Como `body { overflow-x: clip }` corta el
  excedente sin permitir scroll, el usuario **no puede deslizar** para llegar a
  los chips que quedan fuera de pantalla: a 375px sólo se ven "Ingeniería social"
  e "Infraestructura crítica"; "Higiene digital", "Cadena de suministro",
  "Vulnerabilidades conocidas" y "Fraude financiero" quedan a la derecha,
  recortadas e inaccesibles. Además el panel derecho de artículos se estira a
  ~1068px: los resúmenes se muestran como una sola línea larguísima que también
  se corta. El filtro JS funciona (al hacer click en un chip visible cambia el
  panel), pero no se puede llegar a los chips ocultos.
- **Causa observada:** en el layout de una sola columna (por debajo de `lg`), el
  `<nav>` que contiene la tira `scroll-x-limpio` con enlaces `whitespace-nowrap`
  es un ítem de grid sin contención de ancho (`min-width: auto`), así que en vez
  de scrollear dentro del viewport, expande la pista del grid y con ella toda la
  página.
- **Idea de solución:** dar contención de ancho a los ítems del grid en móvil
  (p. ej. `min-w-0` sobre el `<nav>` y sobre el `<div>` de paneles, y/o
  `grid-cols-1` explícito en el breakpoint base) para que la tira
  `overflow-x: auto` scrollee dentro de los 375px en lugar de estirar el layout.
  Confirmar que quede cero scroll horizontal a 375 y 768.

### C-2 · La regla global `a { color: … }` pinta de azul acento todos los enlaces del sitio
- **Página:** todas
- **Ancho:** ambos
- **Modo:** ambos
- **Problema:** en `src/styles/global.css` la regla `a { color: var(--color-acento) }`
  está fuera de capas (`@layer`), por lo que en Tailwind v4 le gana a las
  utilidades `text-tinta` / `text-tinta-suave` / `text-tinta-tenue` que sí están
  en capa. Resultado verificado con estilos computados: los títulos de las
  tarjetas de artículo (`class="text-tinta hover:text-acento"`), los ítems de
  navegación, los ítems del menú móvil, los nombres de sección, los enlaces
  "Ver todas →", el logo del masthead y los enlaces del pie se renderizan todos
  en color acento en lugar de tinta. La página queda inundada de azul y se
  pierde la jerarquía: no se distingue un enlace de prosa real de un título o de
  un ítem de menú. Es la sobrecarga de azul que ya venía marcando el autor. El
  contraste sigue cumpliendo AA (oscuro ~7,2:1; claro ~6,25:1), así que no es
  ilegible, pero el sistema visual "un solo acento, usado con cuentagotas" está
  roto en todo el sitio.
- **Idea de solución:** acotar el color base de `a` a la prosa (`.contenido a`)
  o mover esa regla a `@layer base` para que las utilidades de color ganen, de
  modo que sólo los enlaces marcados como acento queden azules y el resto herede
  tinta.

### C-3 · El buscador (`/buscar`) nunca funciona, ni siquiera en el build de producción
- **Página:** `/buscar`
- **Ancho:** ambos
- **Modo:** ambos
- **Problema:** verificado con `astro build` + `astro preview`: el input de
  búsqueda nunca aparece y el usuario ve siempre el mensaje para desarrolladores
  "El buscador se genera durante el build del sitio. Corré `npm run build`…".
  `Buscador.astro` hace `import('/pagefind/pagefind-ui.js').then(({ PagefindUI }) => …)`,
  pero ese archivo es un IIFE que asigna `window.PagefindUI` y **no exporta
  nada**; el `PagefindUI` desestructurado es `undefined`, `new undefined()`
  lanza, y cae en el `catch` que muestra el mensaje de dev. `/pagefind/pagefind-ui.js`
  responde 200 tras el build: el problema es cómo se carga, no que falte.
- **Idea de solución:** cargar `pagefind-ui.js` con una etiqueta `<script src>`
  (patrón oficial del "Default UI") y usar `window.PagefindUI`, en lugar de
  desestructurar un import ESM. Ajustar también el mensaje de fallback para que
  no le hable al lector final de `npm run build`.

---

## Molesto

### M-1 · Los campos del formulario de contacto casi no se ven en modo oscuro
- **Página:** `/contacto` (y, en menor medida, botones del carrusel y de compartir)
- **Ancho:** ambos
- **Modo:** oscuro (en claro se ven algo mejor)
- **Problema:** los inputs usan `border-borde` (#2b2b33 sobre #111114 ≈ 1,36:1),
  muy por debajo del 3:1 recomendado para bordes de controles. Hasta que uno no
  enfoca el campo (ahí sí aparece el borde acento), cuesta ver dónde empieza y
  termina cada campo; el formulario se lee como una lista de etiquetas sueltas.
- **Idea de solución:** usar `--color-borde-fuerte` para el borde de los inputs
  en reposo, o subir el contraste del token `--color-borde` en oscuro.

### M-2 · Áreas de toque chicas en el pie
- **Página:** todas (pie de página)
- **Ancho:** 375px
- **Modo:** ambos
- **Problema:** los enlaces sólo-ícono de LinkedIn/GitHub del pie tienen 44px de
  alto (por `toque-comodo`) pero ~20px de ancho. Los enlaces "RSS" y "Contenido
  bajo CC BY 4.0" no son `toque-comodo` (~18–20px de alto) y están cerca entre
  sí. En móvil es fácil errar el toque.
- **Idea de solución:** dar padding horizontal / `min-width: 44px` a los íconos y
  aumentar la separación vertical entre los enlaces del pie.

### M-3 · En `/secciones`, los resúmenes del panel derecho se estiran y se cortan
- **Página:** `/secciones`
- **Ancho:** 375px y 768px
- **Modo:** ambos
- **Problema:** misma raíz que C-1: además de la tira, el `<div>` de paneles se
  estira a ~1068px, así que los resúmenes de artículo se muestran en una sola
  línea larga que termina recortada por `overflow-x: clip`.
- **Idea de solución:** al contener el ancho del grid (ver C-1), aplicar también
  `min-w-0` al contenedor de paneles para que las tarjetas hagan wrap normal.

### M-4 · Hover de enlace "pegado" en pantallas táctiles
- **Página:** todas
- **Ancho:** ambos
- **Modo:** ambos
- **Problema:** `a:hover` sólo cambia el color (a `--color-acento-fuerte`), sin
  otra señal. En touch, el último enlace tocado queda con el color de hover hasta
  que se toca otra cosa, lo que en un sitio ya muy azul (ver C-2) suma ruido.
- **Idea de solución:** envolver el hover en `@media (hover: hover)` y/o
  diferenciar el estado con subrayado en vez de sólo color.

### M-5 · El menú móvil no cierra al tocar fuera (aunque el comentario dice que sí)
- **Página:** todas (cabecera, `< sm`)
- **Ancho:** 375px
- **Modo:** ambos
- **Problema:** el `<script>` de `Cabecera.astro` sólo cierra el menú al hacer
  click en un enlace, en el botón "Cerrar" o con Escape; no hay handler de
  "tocar fuera" pese a que el comentario del componente lo promete. El panel es
  full-screen opaco, así que el impacto real es bajo (no hay un "afuera"
  visible), pero conviene alinear comportamiento y documentación. Lo verificado
  que sí funciona: abre/cierra con el botón, bloquea el scroll del fondo
  (`menu-lock`), fondo 100% opaco (#111114), Escape cierra.
- **Idea de solución:** o se agrega el cierre por toque en el backdrop, o se
  corrige el comentario.

---

## Cosmético

### K-1 · El toggle de tema es algo ambiguo
- **Página:** todas
- **Modo:** ambos
- **Problema:** en oscuro muestra sol + "Claro"; no queda 100% claro si "Claro"
  es el estado actual o el destino. El ícono ayuda a resolverlo.
- **Idea de solución:** texto tipo "Modo claro" / "Modo oscuro" como acción, o un
  switch con estados visibles.

### K-2 · Las portadas del carrusel se ven como rectángulos casi vacíos
- **Página:** `/` (carrusel de destacados)
- **Ancho:** ambos
- **Modo:** ambos
- **Problema:** las imágenes de fixture son placeholders muy oscuros (una regla
  de color fina + el título); de un vistazo el carrusel parece que no cargó las
  imágenes. No se pudo evaluar con imágenes reales.

### K-3 · Wrapping de titulares algo desparejo en 375px
- **Página:** listados (tarjetas de artículo)
- **Ancho:** 375px
- **Problema:** `text-wrap: balance` genera algunos títulos de 3 líneas con
  cortes irregulares. Legible, sólo estético.

---

## Sin verificar

### SV-1 · Envío real del formulario de contacto
- El entorno no tiene `PUBLIC_WEB3FORMS_ACCESS_KEY` ni `PUBLIC_TURNSTILE_SITE_KEY`,
  así que `/contacto` muestra un banner visible ("Falta configurar
  PUBLIC_WEB3FORMS_ACCESS_KEY") y el form postea con `access_key=PENDIENTE`. No se
  pudo probar un envío exitoso, el widget de Turnstile, ni la redirección a
  `/contacto/gracias` (la página `/contacto/gracias` en sí renderiza bien por
  separado). Si se despliega sin esas variables, el lector ve ese banver y el
  formulario no envía.

### SV-2 · Comportamiento en iOS Safari real
- Sólo se probó en Chrome headless. En el marcado los inputs tienen
  `font-size: 1rem` (no debería haber zoom al enfocar en iOS) y se usa
  `overflow-x: clip` + `position: sticky`, pero la interacción real de Safari
  (clip + sticky, `-webkit-overflow-scrolling`, barras de UI) no se verificó en
  dispositivo.

### SV-3 · Buscador en `astro dev`
- En `astro dev` los assets `/pagefind/*` dan 404 (esperado: el índice se crea en
  el build). Se auditó el build de producción en su lugar; ahí el problema es
  otro y está descrito en C-3.

### SV-4 · Superposición flotante en las capturas
- Varias capturas muestran una "píldora" flotante con íconos que NO forma parte
  del sitio (es un overlay del propio Chrome headless / prompt de traducción).
  Se confirmó con `elementFromPoint` que en esa posición sólo hay contenido del
  sitio. No es un defecto de la página.

### SV-5 · Foco de teclado y navegación con flechas del carrusel
- No se auditó de forma exhaustiva la visibilidad del anillo de foco en todos los
  controles ni el scroll con flechas del carrusel en dispositivo.
