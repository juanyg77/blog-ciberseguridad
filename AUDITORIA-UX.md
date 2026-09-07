# Auditoría UX/UI — 2026-09-07

**Método:** navegador headless real (Chromium/Microsoft Edge vía Playwright) con
capturas de pantalla completas y medición de estilos computados, tamaños de área
de toque y scroll horizontal (`scrollWidth - clientWidth`). Se auditó primero el
`astro dev` y después un `npm run build` + `astro preview` para poder ejercitar el
buscador (Pagefind, que solo existe tras el build) y el captcha del formulario.

**Anchos:** 375px y 768px. **Modos:** claro y oscuro (forzados con
`localStorage.setItem('tema', …)` antes de cargar).

**Páginas revisadas (código HTTP):**

| Página | HTTP |
|---|---|
| `/` | 200 |
| `/no-tecnico` | 200 |
| `/tecnico` | 200 (listado vacío, mensaje correcto) |
| `/secciones` | 200 |
| `/seccion/higiene-digital` | 200 |
| `/seccion/infraestructura-critica` | 200 |
| `/seccion/viajero-digital` | 200 |
| `/sobre` | 200 |
| `/contacto` | 200 |
| `/contacto/gracias` | 200 |
| `/buscar` | 200 (funcional solo en el build) |
| `/recientes` | 200 |
| `/es/no-tecnico/juice-jacking-puertos-usb-aeropuertos` | 200 |
| ruta inexistente (404) | 404 |

Interacciones ejercitadas: menú móvil (abrir/cerrar), toggle de tema, filtro de
`/secciones` (isla JS), buscador con consulta real, área de compartir del
artículo, formulario de contacto con el widget de hCaptcha.

---

## Crítico

Ninguno.

No se encontró scroll horizontal en ninguna página, ancho ni modo. No se encontró
texto ilegible por contraste, controles táctiles rotos, contenido tapado ni
layout que se rompa.

## Molesto

Ninguno que supere el umbral de "fricción real que un usuario nota".

---

## Notas de verificación

- **Contraste del acento:** verificado sobre fondo real. Oscuro `#4da3ff` sobre
  `#111114` ≈ 7.2:1; claro `#1c5875` sobre `#ece6da` ≈ 6.2:1. Ambos pasan WCAG AA.
  El texto de cuerpo y los grises secundarios quedan muy por encima del mínimo.
- **Sin scroll horizontal:** confirmado en las 13 páginas × 375/768 × claro/oscuro.
- **Inputs del formulario:** `font-size` 16px, alto ≥ 44px — no dispara zoom en iOS.
- **Menú móvil:** panel `fixed inset-0` con fondo 100% opaco (papel/oscuro), filas
  de 52px, cierra por enlace, botón "Cerrar" y tecla Escape, y bloquea el scroll
  del fondo. Sin observaciones.
- **Buscador:** en `astro dev` muestra "El buscador no está disponible en este
  momento" (comportamiento esperado: el índice de Pagefind se genera en el build).
  En el build funciona: devuelve resultados, subresultados y sin desbordes.
- **Formulario de contacto:** el widget de hCaptcha ("Soy humano") carga y se
  muestra entre el textarea y el botón de enviar (en localhost aparece el aviso
  "localhost detected" propio de hCaptcha; en el dominio real no aplica).

## Sin verificar

### SV-1 · Carrusel de destacados
- **Qué no se pudo comprobar y por qué:** no hay ningún artículo con
  `destacado: true`, así que el componente `CarruselDestacados` no se renderiza en
  ninguna página. No se pudo evaluar su comportamiento táctil ni su colapso en
  móvil con contenido real.

### SV-2 · Banner de aviso en la home
- **Qué no se pudo comprobar y por qué:** no hay avisos con `activo: true` (solo la
  plantilla), por lo que el banner de aviso y las páginas `/aviso/[aviso]` no se
  generan. No se pudo evaluar su presentación en móvil.
