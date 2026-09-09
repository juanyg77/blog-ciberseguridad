# Evaluación de contenido — textos de identidad

**Fecha:** 2026-09-09 — 22ª pasada.
**Cubre:** tagline del masthead (VIGENTE desde la 22ª pasada: "De la estafa que te llega por SMS…"), nombres y descripciones de las secciones, rótulos de nivel (VIGENTE desde la 19ª pasada: "Aprender / Profundizar") y sus descripciones, y el footer del sitio.
**Fuera de alcance:** la página "Sobre mí" (tiene evaluador propio) y el contenido de los artículos.

## Cambios aplicados desde la pasada anterior

- **BLOQUE 1 — nuevo `sitio.tagline` APLICADO al código** (verificado en `src/i18n/es.ts` y
  `src/components/Cabecera.astro`). Deja de ser propuesta: es el texto vigente. Con los dos
  ajustes pedidos en la 21ª pasada sobre la 2.ª propuesta:
  - `sitio.tagline` (kicker visible del masthead, en todas las páginas): **"De la estafa que te
    llega por SMS al ataque que dejó a media región haciendo cola por combustible."**
    — (1) "un país sin combustible" → "media región haciendo cola por combustible" (consecuencia
    verificable de Colonial Pipeline, sin la sobreafirmación); (2) se eliminó el remate "En dos
    niveles".
  - **Separación de campos:** `sitio.descripcion` (invisible: `<meta>` por defecto + feed RSS)
    pasó a un texto estable y sin voz —"Ciberseguridad en dos niveles: las amenazas de todos los
    días explicadas desde cero, y el análisis técnico de los grandes incidentes. Sin humo y sin
    alarmismo."— y ya no coincide con el tagline.
  - **Tratamiento del kicker aflojado** en `Cabecera.astro`: se sacaron `uppercase`, `font-mono`
    y el tracking ancho; ahora es `text-xs` sans, `text-tinta-tenue`, `leading-snug`, `max-w-md`
    (~2 líneas).
  - `MARCA.md` §3.5 actualizado (nota de iteración + tabla de los dos campos).
  Se reevalúa **solo el bloque 1**, consolidando las pasadas 20ª y 21ª en una evaluación única
  del texto vigente. Los bloques 2, 3 y 4 quedan intactos, sin re-auditar.

### (Pasada anterior — 21ª) Cambios evaluados

- **BLOQUE 1 — 2.ª PROPUESTA de nuevo tagline, NO aplicada entonces.** "De la estafa que te llega
  por SMS al ataque que dejó a un país sin combustible. En dos niveles." Veredicto: avance neto
  real (cerraba la línea de casos invisible, el dedo a la audiencia 1 y el "a él" masculino), no
  adoptable tal cual por dos pendientes ("un país sin combustible" sobreafirmaba; "En dos niveles"
  críptico). Ambos resueltos en la 22ª.

### (Pasada anterior — 20ª) Cambios aplicados

- **BLOQUE 1 — 1.ª PROPUESTA de nuevo tagline del masthead, NO aplicada.** Se evaluó **"De por
  qué esa app 'gratis' te puede costar cara, a por qué un truco de hace 3000 años sigue vaciando
  cuentas."** Veredicto: no adoptable / movimiento lateral (angostaba el blog a fraude financiero;
  la 2.ª mitad era un acertijo sin resolver). Se reevaluó solo el bloque 1.

### (Pasada anterior — 19ª) Cambios aplicados

- **BLOQUE 3 — la propuesta "Aprender / Profundizar" se APLICÓ al código** (verificado en el
  build). Deja de ser propuesta: es el texto vigente. En concreto:
  - Rótulos de nivel: "Modo humano" / "Modo nerd" → **"Aprender" / "Profundizar"** en la nav, en
    el badge de la ficha, en las dos puertas de la home y como título de las páginas de listado.
    El campo `nivel` pasó a `aprender | profundizar`; las rutas a `/aprender` y `/profundizar`
    (con redirect desde `/no-tecnico` y `/tecnico`).
  - Descripciones de nivel (`nivel.descripcion`, `src/i18n/es.ts`):
    - **Aprender:** "Amenazas y estafas del día a día —en casa, en el trabajo, de viaje—: cómo
      funcionan y qué hacer, explicado desde cero." — **recupera "estafa" y "qué hacer"** que el
      mockup había perdido (cierra el retroceso anotado en la Prioridad 4).
    - **Profundizar:** "Incidentes que marcaron a la industria y al mundo, sus consecuencias, y
      cómo pasaron —con el nivel técnico que cada caso merece. De vez en cuando, algo de
      actualidad."
  - CTAs de la home: "Empezar por acá" / "Ver los análisis".
  - **H1 de la home** (`home.heroH1`, reemplaza el kicker "Primera vez acá"): **"Todo lo que
    usás tiene un punto débil. El riesgo más grande no es tenerlo — es ignorarlo."** — es
    **H1-C**, el candidato que la 18ª pasada rankeó 1º.
  - Badge de la ficha: "Aprender" (nivel) · "Viajero digital" (sección, como texto, no enlace,
    porque la navegación por sección está oculta).
  - `MARCA.md` §3.3 actualizado a "Aprender / Profundizar".
- Se reevalúa **solo el bloque 3**, ahora como texto vigente, consolidando lo que quedó de las
  pasadas 13ª, 16ª, 17ª y 18ª. Los bloques 1, 2 y 4 quedan intactos, sin re-auditar.

## Nota sobre las secciones

Las secciones son un catálogo dinámico (`src/content/secciones/`). Hoy hay **una sola**:
**Viajero digital**. El autor fijó como regla de gobierno el **crecimiento orgánico**: una
sección nace cuando ya hay contenido publicado que la llena, y **mientras haya una sola, la
navegación por sección se oculta entera** (menú, vitrina de la home, `/secciones`, rutas
`/seccion/[x]`); el artículo conserva su etiqueta de sección como texto. Desde la 15ª pasada
esto **está alineado con REQUISITOS**: RF-2 y CA-2 se reescribieron para pedir exactamente ese
comportamiento (la nav aparece sola al llegar a la 2ª sección), así que ya **no hay
incumplimiento de CA-2**. La lista de seis que circuló en el encargo original de este evaluador
("Cadena de suministro", "Vulnerabilidades conocidas", "Fraude financiero"…) no sale de ningún
documento del proyecto; era una idea suelta.

---

## 1. Tagline del masthead — VIGENTE desde la 22ª pasada

**Texto VIGENTE (aplicado al código; `src/i18n/es.ts`):**

> **"De la estafa que te llega por SMS al ataque que dejó a media región haciendo cola por combustible."**

`sitio.tagline`. Se renderiza bajo "EL QUE SE LAS SABE TODAS" en la cabecera de **todas** las
páginas. **Tratamiento nuevo** (`src/components/Cabecera.astro`): `text-xs`, sans —se sacaron
`font-mono`, `uppercase` y el tracking ancho—, `text-tinta-tenue`, `leading-snug`, dentro de
`max-w-md` → entra en ~2 líneas. Ya no es un kicker en versalitas mono; es un subtítulo chico y
apagado.

**Separación de campos (aplicada):** `sitio.descripcion` —invisible: `<meta description>` por
defecto + descripción del feed RSS— dejó de coincidir con el tagline. Ahora es un texto estable
y sin voz: "Ciberseguridad en dos niveles: las amenazas de todos los días explicadas desde cero,
y el análisis técnico de los grandes incidentes. Sin humo y sin alarmismo."

Esta evaluación consolida las pasadas 20ª (1.ª propuesta —"…app 'gratis'… un truco de hace 3000
años…"—, descartada por angostar a fraude financiero) y 21ª (2.ª propuesta —"…un país sin
combustible. En dos niveles."—, avance con dos pendientes) en una evaluación única del texto hoy
vigente. **Referencia velada:** "el ataque que dejó a media región haciendo cola por combustible"
= Colonial Pipeline, 2021, sin nombrarlo.

**Los 5 problemas del tagline anterior (referencia):** (1) no daba ninguna señal de la línea de
análisis de casos; (2) "no le va a pasar" era encuadre de miedo y rozaba "sin humo y sin
alarmismo"; (3) "el que cree que a él no le va a pasar" le pegaba el dedo a la audiencia 1;
(4) "a él" en masculino; (5) para el reclutador sonaba a eslogan de marketing.

### Las 3 preguntas

**1. ¿Genérico o con identidad propia?**
Con identidad, por descripción antes que por juego. La estructura "De [lo cotidiano] a [el gran
incidente]" es un recurso de copy corriente, pero los dos polos concretos —una estafa por SMS y
un ciberataque que deja a una región haciendo cola en las estaciones de servicio— no son
intercambiables con el tagline de otro blog del rubro: nombran las dos líneas reales de
contenido. Registro de índice, más sobrio que "el que cree que a él no le va a pasar". Dos
anotaciones, ambas decisiones y no defectos:
- **El tagline ya no engancha con el nombre del sitio.** El anterior lo hacía ("el que cree que a
  él no le va a pasar" ↔ "El Que Se Las Sabe Todas"); este no evoca al sobreconfiado del nombre.
  El footer carga ese guiño ("los que creen saber").
- "media región" es una unidad imprecisa a propósito (¿región de qué? un lector no estadounidense
  solo capta "una zona grande"). Para un tagline, preferible impreciso a inflado.

**2. ¿Se entiende sin contexto previo?**
Sí, mejor que cualquiera de las versiones anteriores.
- Primera mitad ("la estafa que te llega por SMS"): clara y reconocible al instante. Nombra el
  vector más común (smishing) sin jerga y sin acusar —"te llega", no "vos caíste".
- Segunda mitad ("el ataque que dejó a media región haciendo cola por combustible"): se parsea de
  inmediato —"hubo un ciberataque que dejó a mucha gente sin poder cargar nafta"— sin necesidad
  de identificar Colonial Pipeline. Reconocer el caso es enriquecimiento opcional, no requisito de
  comprensión. **Por primera vez el masthead señala la línea de análisis de incidentes.**
- **Sin remate colgado.** El arco "De X a Y" comunica el rango solo; al sacar "En dos niveles" la
  frase cierra como fragmento completo (sin verbo, como un título) y no queda nada pidiendo
  resolución. La noción "dos niveles" pasó al campo invisible (`descripcion`), que es donde hay
  lugar para explicarla.

**3. ¿Funciona para las 5 audiencias?**
- **Audiencia 1 (familiar tras una estafa):** "la estafa que te llega por SMS" nombra su
  escenario exacto sin acusarla. No dice "qué hacer", pero la reconoce desde la portada.
- **Audiencia 2 (curioso de casos):** por primera vez el tagline le habla — "el ataque que dejó a
  media región haciendo cola por combustible" es literalmente el gancho "escuché una noticia / vi
  un video sobre un caso". Gap cerrado en la portada. (El "esto es para vos" explícito sigue
  faltando más adentro, pero eso es arquitectura de contenido —los casos son un *nivel*, no una
  *sección*— y vive en la Prioridad 1.)
- **Audiencia 3 (contacto de LinkedIn):** teaser con rango y voz. Sin objeción.
- **Audiencia 4 (colega / estudiante técnico):** la mención de un ataque a infraestructura
  gestiona su interés. Con "media región haciendo cola por combustible" —consecuencia observable y
  verificable, no "un país sin combustible"— ya no hay una sobreafirmación que la haga torcer la
  nariz. La redacción sigue siendo de cara al público general (no promete método ni profundidad);
  eso lo cubren las descripciones de nivel y el contenido.
- **Audiencia 5 (reclutador):** describe alcance en vez de prometer valor; se lee como un blog con
  rango, no como eslogan. Al corregir la sobreafirmación factual desaparece el riesgo de que se
  leyera como hipérbole y restara al efecto "criterio". Neutro-positivo.

**¿Repite la tesis del H1?** No. El H1 ("Todo lo que usás tiene un punto débil. El riesgo más
grande no es tenerlo — es ignorarlo.") es principio abstracto; el tagline es índice concreto de
contenido. Sin redundancia.

### Los pendientes de la 21ª pasada — estado

| Pendiente (21ª) | Estado con el texto vigente |
|---|---|
| (i) "un país sin combustible" sobreafirmaba la consecuencia real de Colonial Pipeline (desabastecimiento regional y compras de pánico, no un país sin nafta) → rozaba el efectismo; lo notaban las audiencias 4 y 5 | **Resuelto.** "media región haciendo cola por combustible" describe una consecuencia observable y verificable —las colas en las estaciones del sureste de EE. UU. fueron el recuerdo público del caso—, sin inflar. Queda la elección de ilustrar con la imagen vívida (las colas) en vez de la seca (la operadora pagó el rescate; 6 días de parada): es copy legítimo, no efectismo, porque ya no agrega un dato falso. Mención única, no bloqueante. |
| (ii) "En dos niveles" — remate subespecificado en un kicker permanente; ecoaba el eje "nivel" que el bloque 3 dejó atrás | **Resuelto por eliminación.** El arco "de X a Y" comunica el rango sin el remate; la frase cierra limpia. La noción "dos niveles" quedó en `sitio.descripcion` (invisible), que es donde corresponde. |
| (iii, secundario) formato/largo: ~100 car. + dos oraciones con punto en slot mono-mayúsculas-10px → 3–4 líneas | **Resuelto.** El tratamiento nuevo baja la frase a ~2 líneas de subtítulo apagado, y ahora es **una sola** oración con un solo punto; el slot dejó de ser un micro-rótulo. Residuo mínimo: ~98 caracteres siguen siendo largo para un tagline que aparece en todas las páginas, pero con este tratamiento no molesta. |

### La separación tagline / `descripcion`

`sitio.descripcion` cubre bien el rol de RSS + `<meta>` por defecto: nombra el tema
("Ciberseguridad"), explicita los dos niveles, incluye "sin humo y sin alarmismo" y es
autocontenida. Es —por diseño— genérica y sin voz, que es el registro correcto para una
meta-descripción (tiene que ser clara y completa, no ingeniosa). Sin objeción. Nota lateral:
queda muy cerca de `metaHome` ("Blog de ciberseguridad en dos niveles: explicaciones desde cero
sobre estafas y amenazas comunes, y análisis técnicos de incidentes reales. Sin humo y sin
alarmismo."); son slots distintos (home vs. resto + feed) y la redundancia es tolerable, pero si
el autor quiere una sola fuente de verdad para ese texto, es candidato a unificar. Prioridad
mínima.

### Veredicto del bloque 1 (22ª pasada) — CERRADO / publicable

El tagline vigente **no tiene ningún error objetivo** (nada agramatical; ningún dato falso
—"media región haciendo cola por combustible" es una descripción verificable de Colonial
Pipeline—; ningún link roto).

**Cierra los 5 problemas del tagline anterior:** (1) la línea de casos —por primera vez visible
desde el masthead—; (2) el encuadre de miedo (describe escenarios y una consecuencia sistémica,
sin amenaza personal ni adversario personificado); (3) el dedo a la audiencia 1; (4) el "a él"
masculino; (5) el tono de eslogan ante el reclutador. **Cierra los tres pendientes de la 21ª**
(sobreafirmación factual, remate críptico, formato/largo). **Resuelve la separación
tagline/descripción.**

Las observaciones que quedan vivas son **todas decisiones de estilo/tono, no bloqueantes — el
texto ya es publicable tal como está:**
- el tagline no engancha con el nombre del sitio (lo carga el footer);
- ilustra la línea de casos con un solo tipo de incidente (infraestructura/energía) — foco
  declarado del autor; riesgo chico de que se lea como "el blog solo trata ataques a
  infraestructura";
- "media región" es una unidad imprecisa por diseño;
- ~98 caracteres es largo para un tagline omnipresente;
- `descripcion` y `metaHome` casi se repiten.
Ninguna requiere otra vuelta. **La Prioridad 2 (el tagline del masthead) queda CERRADA.**

---

## 2. Nombres y descripciones de las secciones

**Sin cambios desde la 15ª pasada** — se implementó el umbral: con una sola sección, la navegación por sección se oculta entera.

**Texto vigente (única sección):**
- **Viajero digital** — "Seguridad cuando estás fuera de casa: el WiFi de aeropuertos y hoteles, los puertos de carga públicos, el celular y la notebook en tránsito, y qué mirar con tus cuentas en otro país."
- Cuerpo del `.md`: "Aeropuertos, hoteles, cafés: fuera de tu red de siempre, el riesgo cambia. Acá va qué tener en cuenta cuando viajás con tus dispositivos."

**Dónde se renderiza HOY:** en ningún lado como navegación. La home no muestra "Explorar por
sección", la nav global no muestra "Secciones", `/secciones` redirige a la home, `/seccion/viajero-digital`
no existe. El único lugar donde el lector va a ver el string "Viajero digital" es en la línea de
metadatos de la ficha del artículo, **como texto plano** (no enlace), y solo cuando haya un
artículo publicado (hoy no hay ninguno).

### El texto puntual de "Viajero digital"

**1. ¿Genérico o con identidad propia?**
Sin cambios respecto de la 14ª pasada. "Viajero digital" no es un término textual de la industria; roza el cliché "nómade digital" pero es evocativo y propio. La descripción es concreta, da ejemplos ("el WiFi de aeropuertos y hoteles", "qué mirar con tus cuentas en otro país") y mantiene la voz del blog. Como pieza aislada, está del lado de la identidad, no del genérico.

**2. ¿Se entiende sin contexto previo?**
Ahora sí, y sin ruido alrededor. El desajuste que marcaba la 14ª pasada —la intro de `/secciones`
en plural ("Los ejes temáticos del blog. Elegí uno para ver sus artículos; la lista se filtra sin
recargar"), el link "Ver todas las secciones →", el layout de dos columnas con un ítem sticky y
contador "(1)"— **ya no se renderiza para nadie**: la página redirige antes de pintar nada. El
string de la intro sigue en `es.ts` pero está muerto (no referenciado en render mientras haya <2
secciones). **El error objetivo "copy en plural describiendo una interacción inexistente" queda
resuelto** por eliminación de la superficie.
Queda un residuo mínimo: en la ficha del artículo, "Viajero digital" aparece como palabra suelta
sin enlace en la línea "Explicativo · Modo humano · Viajero digital". Se lee como etiqueta de
categoría (que es lo que es); es levemente huérfana (por qué está ahí, por qué no es clickeable)
pero no es un error ni una contradicción. Prioridad mínima, y hoy invisible porque no hay artículos.

**3. ¿Funciona para las 5 audiencias?**
El eje que hoy orienta al lector sobre de qué trata el blog es el de **nivel** (las dos puertas de
la home con sus descripciones) + tagline + footer, no el de sección. Con eso:
- **Audiencia 1 (víctima de estafa):** la puerta "Modo humano" abre con "Cómo funcionan las amenazas y estafas más comunes, y qué hacer, contado desde cero" — la nombra. Ya no se topa con una página "Secciones" cuya única entrada es sobre viajes. Neto: mejor que en la 14ª pasada.
- **Audiencia 2 (curioso de casos):** la puerta "Modo nerd" abre con "Análisis técnicos de incidentes reales" — hay señal de que se analizan casos, aunque soldada a la etiqueta de tecnicidad (eso es la Prioridad 2, sin cambios). Ya no hay una taxonomía visible que le diga "el blog trata de seguridad en viajes".
- **Audiencia 3 (contacto de LinkedIn):** neutro.
- **Audiencia 4 (colega/estudiante técnico):** neutro respecto del bloque 2. La ausencia de secciones no le quita nada que hoy exista; la profundidad la tiene que leer del contenido, que aún no está.
- **Audiencia 5 (reclutador):** **este es el cambio grande.** Ya no ve una página "Secciones" con exactamente una sección montada sobre una UI de filtro para varias. Ve un sitio chico con dos niveles de lectura y (por ahora) poco o nada publicado. Eso se lee como **etapa temprana y honesta**, no como scaffold con demo data a medio borrar. Y "Viajero digital" ya no es "la única cara de la taxonomía" comunicando un blog para turistas: es a lo sumo una etiqueta en la ficha de un artículo futuro. La mala primera impresión que la 14ª pasada marcaba como el golpe más fuerte **queda neutralizada.**

### Frentes nuevos que abre ocultar la navegación por sección

- **(a) `/secciones` como stub de redirección si alguien la tipea.** Borde inofensivo. La ruta
  no está enlazada en ningún lado, lleva `noindex`, y solo la alcanza quien la tipea a mano, tiene
  un bookmark viejo o un buscador que la indexó antes. El único reparo menor: el fallback estático
  de Astro es una pantalla casi en blanco con texto boilerplate en inglés ("Redirecting from
  /secciones to /") y ~2s de espera antes del salto. Feo para el que caiga ahí, pero es un
  volumen de tráfico despreciable y no es texto de identidad. Prioridad mínima; si molesta, es
  tema de UX/routing, no de contenido.
- **(b) ¿El visitante pierde orientación sobre de qué trata el blog?** Marginal. Las descripciones
  de sección eran la señal más concreta de "qué temas cubrimos", y hoy no están. Pero con una sola
  sección y cero artículos no había nada real para navegar, y la orientación la sostienen el
  tagline, el footer y las dos descripciones de nivel de la home, que entre las dos cubren
  "amenazas y estafas cotidianas" y "análisis de incidentes". No hay un hueco que el lector note.
- **(c) Para el reclutador, ¿"sin secciones" se lee como incompleto o como chico y honesto?**
  Como chico y honesto — **siempre que la ocultación sea total y limpia**, que es el caso: no
  quedó ningún "Secciones (1)", ningún "Ver todas las secciones" apuntando a plural, ninguna
  columna vacía. Un sitio de etapa temprana sin una taxonomía inflada artificialmente es una
  señal de criterio, no de obra sin terminar. (El riesgo que sí persiste para esta audiencia es
  ajeno al bloque 2: hoy no hay ningún artículo publicado.)

### Qué de la vieja Prioridad 1 (14ª pasada) resuelve este cambio y qué no

| Componente de la vieja Prioridad 1 | Estado |
|---|---|
| (a) desajuste **objetivo** copy/render — plural + "elegí uno / se filtra" con una sola sección, contador "(1)", layout de dos columnas a medio armar | **Resuelto por eliminación de la superficie.** Nada de eso se renderiza mientras haya <2 secciones. |
| (b) primera impresión: página "Secciones" con una sección sobre UI de filtro para varias → "sitio sin terminar" | **Resuelto.** La página ya no existe para el lector. |
| (c) "Viajero digital" como única cara de la taxonomía → "blog para turistas" | **Resuelto en lo sustancial.** Ya no es la cara de nada; queda como etiqueta de ficha (residuo mínimo, hoy invisible). |
| (d) el sitio por debajo del "al menos 2" de CA-2 | **Resuelto por cambio de spec.** RF-2 y CA-2 se reescribieron para endosar el crecimiento orgánico y la ocultación hasta la 2ª sección. Decisión de gobierno defendible. |

### Sub-problemas que siguen pospuestos (sin cambios)

| Sub-problema | Estado |
|---|---|
| (b) coherencia de ejes a futuro (amenaza vs. hábito/contexto) | **Pospuesto, sin cambios.** El criterio "crecimiento orgánico" fija *cuándo* nace una sección, no *cuál es el eje*. Reaparece intacto al crear la 2ª. → Prioridad 2 de esta pasada. |
| (c) falta un cajón con el vocabulario de la audiencia 1 ("estafa/fraude") | **Sin cambios.** No existe ni el proxy "Ingeniería social". El primer artículo (juice jacking) ancló la sección más angosta posible. Pendiente natural del crecimiento orgánico. → Prioridad 4 de esta pasada. |

**Los otros 3 nombres (Ingeniería social, Infraestructura crítica, Higiene digital) siguen sin existir** — la observación de la 4ª pasada sobre nombres opacos como etiqueta suelta sigue **dormida**; recurrirá si se recrean secciones con nombres de jerga.

---

## 3. Rótulos de nivel — VIGENTE desde la 19ª pasada: "Aprender" / "Profundizar"

**Aplicado al código en la 19ª pasada** (verificado en el build). Esta sección consolida las
pasadas 13ª (mockup "No sé nada / Algo sé", descartado), 16ª (2.ª propuesta "Aprender /
Profundizar" declarada adoptable), 17ª (H1 de quiz a tesis) y 18ª (comparación de tres H1, ganó
H1-C) en una evaluación única del estado actual. Reemplaza a "Modo humano" / "Modo nerd", que
fue el texto vigente hasta la 18ª pasada.

**Texto vigente:**
1. Rótulos de nivel = dos **acciones**: **"Aprender"** y **"Profundizar"**. En la nav
   (Inicio · Aprender · Profundizar · …), en las dos puertas de la home, como **badge** de la
   ficha ("Explicativo · Aprender · Viajero digital") y como título de las páginas de listado
   `/aprender` y `/profundizar`.
2. Descripciones de nivel (`nivel.descripcion`; se renderizan en la home y en los listados):
   - **Aprender:** "Amenazas y estafas del día a día —en casa, en el trabajo, de viaje—: cómo
     funcionan y qué hacer, explicado desde cero." CTA "Empezar por acá →".
   - **Profundizar:** "Incidentes que marcaron a la industria y al mundo, sus consecuencias, y
     cómo pasaron —con el nivel técnico que cada caso merece. De vez en cuando, algo de
     actualidad." CTA "Ver los análisis →".
3. **H1 de la home** (`home.heroH1`): "Todo lo que usás tiene un punto débil. El riesgo más
   grande no es tenerlo — es ignorarlo." Reemplaza el kicker "Primera vez acá". Es **H1-C**, el
   candidato mejor rankeado de la 18ª pasada.
4. Modelo de datos y rutas: el campo `nivel` pasó a `aprender | profundizar`; rutas `/aprender`
   y `/profundizar` con redirect desde `/no-tecnico` y `/tecnico`. **El rótulo y la ruta ahora
   coinciden** — se cierra el desajuste cosmético que arrastraban "Modo humano" → `/no-tecnico`
   y "Modo nerd" → `/tecnico`.

### Comparación con las dos referencias descartadas

| | "Modo humano / nerd" (hasta la 18ª) | "No sé nada / Algo sé" (descartado, 13ª) | "Aprender / Profundizar" (VIGENTE) |
|---|---|---|---|
| Naturaleza del rótulo | modo / interruptor | autoetiqueta de conocimiento (oración) | acción / destino (infinitivo) |
| Parsea como etiqueta suelta (nav, badge) | ambiguo pero sí | no (son oraciones) | **sí** ("Aprender" limpio; "Profundizar" solo, algo vago) |
| Choca con "no hacer sentir tonto" (MARCA 1.2/1.3) | no | sí ("No sé nada" para clickear) | **no** (nadie se autoetiqueta) |
| Minimiza el contenido técnico (audiencia 5) | "nerd" resta seriedad | "Algo sé" = "sé poco" | **no** ("Profundizar" es digno) |
| Coherencia con el tricolon del footer | ortogonal | choca (2 vs 3 en el eje "saber") | **ortogonal** (eje "acción", no eje "saber") |

### Las 3 preguntas

**1. ¿Genérico o con identidad propia?**
Los **rótulos** son genéricos. "Aprender / Profundizar" es el par "camino de iniciación / camino
avanzado" que usa cualquier plataforma de cursos, documentación de producto o blog de divulgación
("Getting started / Deep dive"). Como etiquetas sueltas son intercambiables — no hay nada que las
ancle a *este* blog y no evocan para nada al sobreconfiado del nombre. "Modo nerd" tenía una
pizca de carácter que se pierde, pero costaba seriedad (ver pregunta 3, audiencia 5); el canje es
neto a favor. La identidad vive en el **envoltorio**: el **H1** —ahora una tesis, "El riesgo más
grande no es tenerlo — es ignorarlo"— engancha de forma implícita con la tesis de la
sobreconfianza del nombre y del masthead ("el que cree que a él no le va a pasar"); y las
**descripciones** ("en casa, en el trabajo, de viaje", "De vez en cuando, algo de actualidad")
están en la voz del blog y son concretas. **Respuesta directa: envoltorio (H1 + descripciones)
propio; etiquetas genéricas, taxonomía de nivel con otro nombre.** No es peor que "Modo
humano/nerd" en esto; es parejo, con la ventaja de que estas etiquetas sí funcionan sueltas.

**2. ¿Se entiende sin contexto previo?**
En el hero, con H1 + descripciones + CTAs: sí. Fuera del hero, también, con dos matices:
- "Aprender" solo en la nav o como badge: claro, se lee "lo básico / explicado desde cero".
- "Profundizar" solo en la nav: **algo vago** — "profundizar ¿en qué?". Se infiere "la sección
  densa / los análisis", pero no lo dice. Equivalente en vaguedad a "Modo nerd", con más
  dignidad. No está roto.
- Badge "Explicativo · Aprender · Viajero digital" en la ficha, sin el H1 a la vista: "Aprender"
  parsea como etiqueta de categoría ("artículo explicativo / de nivel inicial"). Rareza menor: es
  un verbo como tag donde se esperaría un sustantivo ("Básico", "Introducción"), y aislado podría
  leerse un instante como botón de acción; el estilo de píldora lo desambigua. El choque de dos
  ejes con el punto del medio (tipo · nivel · sección) es preexistente, no lo introduce este
  cambio.

**3. ¿Funciona para las 5 audiencias?**
- **Audiencia 1 (asustada tras una estafa):** **funciona, y el retroceso que arrastraba la
  propuesta quedó revertido.** La puerta "Aprender" + "Empezar por acá →" es una invitación a una
  acción, no un pedido de autoetiquetarse como ignorante ("No sé nada"). Y la descripción
  **recupera el léxico exacto de esta audiencia**: "Amenazas y **estafas** del día a día… cómo
  funcionan y **qué hacer**, explicado desde cero" — el mockup había tirado "estafa" y "qué
  hacer"; la versión aplicada los trae de vuelta y suma el anclaje concreto "en casa, en el
  trabajo, de viaje". Alguien que googlea "me llegó un SMS raro de un paquete" se siente
  interpelado. El H1 (H1-C) no le pega el dedo: "es ignorarlo" es una afirmación general, y quien
  acaba de ser víctima y ahora se informa **no** está ignorando, así que la frase lo valida
  implícitamente; además no usa la palabra "miedo".
- **Audiencia 2 (curioso de casos, sin tecnicismos):** **ablandado fuerte, pero la llave no queda
  del todo entregada.**
  - A favor: la descripción de "Profundizar" **abre con relato, no con tecnicidad**: "Incidentes
    que marcaron a la industria y al mundo, sus consecuencias, y cómo pasaron". "Técnico" queda
    degradado a una cláusula subordinada. Contra el viejo "Análisis técnicos de incidentes
    reales" (que arrancaba con "técnicos"), es una mejora real: a la audiencia 2 este arranque sí
    le habla.
  - En contra: "**con el nivel técnico que cada caso merece**" está escrito desde el punto de
    vista del autor ("yo calibro"), no desde el de la audiencia 2 ("vos vas a entender esto").
    Contiene "nivel técnico" de forma prominente y no dice en ningún lado "no necesitás saber de
    tecnología". Sumado a que "**Profundizar**" connota esfuerzo/inmersión, que es justo lo que
    una visita casual ("escuché una noticia") puede no tener ganas de hacer. **El sub-problema de
    fondo persiste: los casos están soldados al nivel "Profundizar", no son una sección propia**
    → se absorbe en la Prioridad 1 nueva de esta pasada (ex-Prioridad 2). Ningún rótulo lo
    arregla.
  - Detalle menor: "marcaron a **la industria**" es encuadre de adentro; la audiencia 2 no piensa
    en esos términos. "marcaron al mundo" le alcanza.
- **Audiencia 3 (contacto de LinkedIn):** neutro-a-favor. El quiz que la 13ª pasada marcaba como
  recibimiento raro ("¿Sabés de ciberseguridad?" cuando venís a ver el trabajo del autor)
  desapareció: el H1 es una tesis con postura editorial. Rótulos neutros.
- **Audiencia 4 (colega / estudiante técnico):** **el agujero de la 13ª pasada quedó cerrado.**
  "Profundizar" + "con el nivel técnico que cada caso merece" + "Ver los análisis →" leen como
  "acá está el trabajo serio". No minimiza (a diferencia de "Algo sé") y no es condescendiente.
  El H1-C ("el riesgo más grande no es tenerlo, es ignorarlo") es un principio real de gestión de
  riesgo y lee con criterio. Matiz de tono menor: "Profundizar" encuadra la lectura como "vos
  venís a hacerte más profundo", lo que a un senior puede sonarle dirigido a alguien que sube de
  nivel más que a un par. No es un hueco.
- **Audiencia 5 (reclutador):** **mejora neta.** El trabajo de análisis queda archivado bajo
  "**Profundizar**", no bajo "nerd" ni bajo "sé un poco": se saca el costo de "nerd" **sin** meter
  el costo de minimización de "Algo sé". "Incidentes que marcaron a la industria y al mundo"
  señala peso. Los rótulos son genéricos pero no suenan amateur; neutros para esta audiencia. El
  **H1-C** es el que mejor transmite criterio de los tres candidatos comparados en la 18ª pasada:
  suena a posición razonada sobre el riesgo, no a aforismo de copy. Una home que abre con una
  postura clara se lee mejor que una que toma examen.

### El H1 vigente (H1-C) — cierre de la comparación de la 18ª pasada

Se adoptó **H1-C**, el candidato #1 del ranking de la 18ª pasada: "Todo lo que usás tiene un
punto débil. El riesgo más grande no es tenerlo — es ignorarlo."
- **No es error objetivo:** oración completa, gramatical, sin dato falso ni contradicción de
  sentido ni link roto.
- **No nombra "ciberseguridad":** cubierto por el masthead ("Ciberseguridad explicada para…") en
  el mismo viewport y por `<title>` / `metaHome`. Línea de registro, no bloquea.
- **Respeta "sin humo y sin alarmismo"** (`sitio.metaHome`): no usa la palabra "miedo" y no
  personifica un adversario. **Al elegir H1-C en vez de H1-A, el roce de "ignorarlo sí [da
  miedo]" con "sin alarmismo" que la 17ª y la 18ª pasada anotaban desaparece.** El H1-C lee un
  poco más como criterio de gestión de riesgo (el riesgo no gestionado es el problema) que como
  eslogan — leve ventaja para las audiencias 4 y 5.
- **Único residuo, no bloqueante:** la primera frase ("Todo lo que usás tiene un punto débil") es
  el lugar común del rubro ("no existe el 100% seguro" / "todo se puede hackear"). Toda la
  identidad viaja en la segunda frase. Es la misma nota que dejaron la 17ª y la 18ª pasada; no es
  un problema nuevo, no requiere otra vuelta. Riesgo de lectura parcial ("punto débil" solo, sin
  la segunda frase): real pero chico — la afirmación se resuelve en la misma línea, sin fold ni
  clic.
- Los otros dos candidatos quedan como registro: **H1-A** ("Conocerlo no da miedo, ignorarlo
  sí.") era adoptable pero metía "miedo" en el hero; **H1-B** ("Los hackers buscan
  vulnerabilidades todos los días…") no debía adoptarse — el más genérico, el que peor respetaba
  "sin alarmismo", y "alguien que **decidió** ignorar el riesgo" culpabilizaba a la audiencia 1.
  El autor eligió el mejor de los tres.

### Desajuste rótulo / ruta — CERRADO

En la propuesta esto era cosmético y preexistente ("Modo humano" ya apuntaba a `/no-tecnico`).
**Con la aplicación, las rutas pasaron a `/aprender` y `/profundizar`: rótulo y URL coinciden.**
Un reclutador que mira la barra de direcciones, o alguien que comparte el link, ve una URL que
describe lo mismo que el rótulo de cara al lector. El desajuste desaparece por completo.

### Coherencia con el footer y con "De vez en cuando, algo de actualidad"

- **Footer** ("Explicando ciberseguridad para los que no saben, para los que creen saber, y para
  los que realmente saben."): "Aprender / Profundizar" están en el eje **acción**, no en el eje
  **saber**, así que son **ortogonales** al tricolon — **no reabre el eje "saber" arriba de las
  puertas** y desaparece la inconsistencia "2 puertas vs 3 niveles" que habría introducido el eje
  saber/no-saber del mockup descartado. El H1, al ser una tesis y no una pregunta sobre el saber,
  tampoco lo reabre. "creen saber" —el guiño irónico al nombre— sigue sin expresarse en la nav,
  pero eso tampoco lo resolvía el texto anterior; no es un retroceso.
- **"De vez en cuando, algo de actualidad":** **coherente** con REQUISITOS ya aflojado ("Fuera de
  scope": la nota de coyuntura se publica sin periodicidad fija y una pausa no se lee como
  incumplimiento). La formulación casual, sin compromiso de frecuencia, calza con ese texto. Sin
  objeción.

### Qué de la ex-Prioridad 1 cerró este cambio y qué se movió

| Sub-problema de la ex-Prioridad 1 | Estado |
|---|---|
| (a) audiencia 2 sin puerta | **Ablandado fuerte, NO cerrado — se absorbe entero en la Prioridad 1 nueva (ex-P2: los casos no son sección).** La descripción de "Profundizar" abre con relato, no con "técnicos" — mejora real. Pero "con el nivel técnico que cada caso merece" está escrito desde el autor y no dice "esto es para vos"; y los casos siguen siendo un *nivel*, no una *sección*. Eso no lo arregla ningún rótulo. |
| (b) "Modo" implicaba un interruptor inexistente | **Cerrado.** "Aprender / Profundizar" son destinos/acciones, no un toggle sobre el mismo contenido; el campo `nivel` y las rutas también dejaron de decir "modo". |
| (c) "nerd" restaba seriedad ante el reclutador | **Cerrado, sin canje.** "Profundizar" es digno y no minimiza. A diferencia de "Algo sé", no se cambia un costo por otro. |
| (d) rótulo ambiguo suelto (nav, badge) | **Cerrado para "Aprender"; casi cerrado para "Profundizar"** (vaguedad leve "¿profundizar en qué?", no ambigüedad). Los infinitivos parsean como etiqueta y badge, y calzan con "Buscar" en la nav. |
| descripciones genéricas | **Reescritas y en voz.** La de "Profundizar" es concreta. La de "Aprender" recupera el léxico de la audiencia 1 ("estafa", "qué hacer"). |
| desajuste rótulo / ruta | **Cerrado.** Rutas `/aprender` y `/profundizar`; rótulo y URL coinciden. |

### Veredicto del bloque 3 — CERRADO / publicable

El texto vigente **no tiene ningún error objetivo** (no hay gramática rota, dato falso,
contradicción de sentido ni link roto). Cierra los sub-problemas (b), (c) y (d) de la
ex-Prioridad 1, cierra el desajuste rótulo/ruta, disuelve la inconsistencia con el footer,
**revierte el retroceso de copy de "estafa / qué hacer"** (ex-anexo de la Prioridad 4), y adopta
el H1 mejor rankeado (H1-C), que deja el bloque sin residuo de tono sobre el H1 salvo el lugar
común de su primera frase.

**La ex-Prioridad 1 ("rótulos de nivel como eje de navegación") queda CERRADA.** Su único
residual —la audiencia 2 no recibe un "esto es para vos" explícito porque los casos son un
*nivel* y no una *sección*— **se absorbe entero en la Prioridad 1 nueva** (ex-Prioridad 2: los
ejes de sección / los casos no son sección); no es un problema de rótulo.

Las observaciones que quedan vivas sobre el bloque 3 son **todas decisiones de estilo, no
bloqueantes — el texto ya es publicable tal como está:**
- (i) "Aprender / Profundizar" son etiquetas genéricas (la identidad la cargan el H1 y las
  descripciones);
- (ii) "Profundizar" solo en la nav es algo vago;
- (iii) "marcaron a la industria" es encuadre de adentro para la audiencia 2 (menor);
- (iv) la primera frase del H1 es un lugar común del rubro.
Ninguna requiere otra vuelta salvo que el autor quiera pulir esos puntos deliberadamente.

---

## 4. Footer del sitio

**Sin cambios desde la 12ª pasada.** (Reevaluado en la 12ª pasada — iteración 4 de `pie.tagline`, cierre de la línea.)

**Textos renderizados:**
- Bloque 1 (prominente): "Lo escribe Juan Ignacio García · Alta Gracia, Córdoba, Argentina" — **"Explicando ciberseguridad para los que no saben, para los que creen saber, y para los que realmente saben."** — links "Sobre mí" / "Contacto" + iconos LinkedIn/GitHub.
- Bloque 2 (`text-xs`, apagado, tras un borde): "RSS" · "Podés compartir este contenido citando la fuente (licencia CC BY 4.0)" (enlazado) · año.

### Paralelismo del tricolon: cerrado

1. **"los que no saben" / "los que creen saber" / "los que realmente saben".** Los tres miembros arrancan ahora con el mismo "los que" y giran sobre el verbo "saber". El tropiezo que marcaba la 11ª pasada ("quienes" en el primer tiempo, que rompía el molde de los otros dos) está resuelto: el molde es uniforme y el tricolon cierra con cadencia pareja. Queda una asimetría interna menor y deliberada —"no saben" y "realmente saben" son presente de indicativo, "creen saber" es perífrasis— pero es la que produce el contraste de sentido (saber vs. creer que se sabe); no es defecto. **Prioridad 5 de la 11ª pasada: resuelta.**

### Punto final: consistencia con el masthead (decisión de estilo, no error)

2. **La línea ahora lleva punto; el masthead no.** En la 11ª pasada la observación era que la ausencia de punto era coherente con el masthead ("Ciberseguridad explicada para el que cree que a él no le va a pasar", sin punto). Al agregar el punto, footer y masthead dejan de ser consistentes en ese detalle: dos piezas de identidad de la misma familia, una puntúa el fragmento y la otra no. **No es error objetivo** —un tagline-fragmento se escribe con o sin punto y ambas son defendibles— pero es una inconsistencia de criterio tipográfico entre las dos piezas. Si el autor quiere paridad, la vía es que las dos lleven punto o ninguna. Prioridad mínima, no bloquea. **(Nota 22ª pasada: el nuevo `sitio.tagline` sí lleva punto final —una sola oración, un solo punto—, así que masthead y footer quedaron alineados en este detalle. La observación pierde vigencia.)**

### Coma antes de "y" en la enumeración

3. **"…los que creen saber, y para los que realmente saben."** La coma antes de "y" no es la norma por defecto en español, pero la RAE la admite en enumeraciones de miembros largos o para marcar una pausa de sentido, que es el caso (cierra un tricolon). No es error; es una elección de puntuación defensible. Se anota para el registro, sin acción.

**1. ¿Genérico o con identidad propia?**
Sin cambio de fondo respecto de la 11ª pasada: "Explicando ciberseguridad para…" sigue siendo un frame de divulgador genérico, y la identidad queda concentrada en el guiño implícito "los que creen saber" → "El Que Se Las Sabe Todas". El retoque de esta pasada es de pulido (paralelismo + punto), no mueve la aguja de identidad. Más limpio y profesional, con la identidad colgando de un hilo fino y no explícito (ver Prioridad 6).

**2. ¿Se entiende sin contexto previo?**
Sí. Nombra el tema ("ciberseguridad") y a quién (tres niveles de conocimiento). Autocontenida, no necesita el nombre del sitio a la vista para cerrar. Sin cambios respecto de la 11ª pasada.

**3. ¿Funciona para las 5 audiencias?**
Sin cambios de sustancia respecto de la 11ª pasada:
- **Audiencia 1 (familiar / no técnica):** "para los que no saben" es directo y sin la condescendencia de "hasta mi abuela". Entiende que hay contenido a su nivel.
- **Audiencia 2 (curioso de casos):** el pie nombra "ciberseguridad" pero no dice que se analizan casos/incidentes — mismo hueco que el masthead → Prioridad 3, no ítem propio del footer.
- **Audiencia 3 (contacto de LinkedIn):** funciona; registro medido.
- **Audiencia 4 (colega / estudiante técnico):** "para los que realmente saben" la incluye y valida explícitamente; el pinchazo se posa en "los que creen saber", categoría en la que el lector ubica a otro, no a sí mismo. Sigue sin prometer método, fuentes ni cronología —gestualiza el nivel, no lo demuestra—, mismo matiz que el masthead, menor.
- **Audiencia 5 (reclutador):** con el paralelismo unificado desaparece el pequeño ding de prolijidad que marcaba la 11ª pasada. Se lee como enunciado de posicionamiento, correcto y prolijo. Persiste que es un claim genérico de "para todos los niveles" y que el guiño de identidad puede no registrar (Prioridad 6). Net: la frase insignia ya no tiene nada que un lector atento lea como descuido.

### Qué se resolvió / qué sigue

- **Paralelismo del tricolon ("quienes" vs "los que"):** **resuelto** — los tres miembros comparten molde. Era la Prioridad 5 y el único retoque que la 11ª pasada recomendaba antes de fijar la línea.
- **Punto final:** nuevo detalle. No es error; era una inconsistencia de criterio tipográfico con el masthead (que no puntuaba). **Con el nuevo tagline de la 22ª pasada —que sí lleva punto— la inconsistencia desaparece.** Decisión de estilo, prioridad mínima.
- **Pérdida del callback "nadie se las sabe todas" / de la autoironía:** sigue como estaba — decisión de tono/identidad, consecuencia directa de sacar la caricatura. Prioridad mínima, no requiere otra vuelta (Prioridad 6).
- **Línea de casos no nombrada en el pie:** sigue, mismo hueco del masthead (Prioridad 3), no ítem propio del footer.
- **Ítems previos** (participio sin referente, eco footer/masthead "Ciberseguridad explicada para…", condescendencia "hasta mi abuela", pinchazo "ingenieros de la NASA", primera oración con dos "para" de función distinta): resueltos en las pasadas 10 y 11, sin recaída.
- **Bloque 2 (RSS + licencia + año), "Lo escribe" en singular, "2026" huérfano:** sin cambios.

**Veredicto de publicabilidad del footer — cierre:** el footer **no tiene ningún error objetivo** (no hay gramática rota, dato falso, participio colgado ni link roto), y el único retoque que quedaba pendiente de la 11ª pasada —el paralelismo del tricolon— **está aplicado.** La línea está **cerrada y publicable como está.** Las observaciones que quedan vivas son todas decisiones de estilo, no bloqueantes: (a) el punto final rompía la paridad tipográfica con el masthead (**ya no: el nuevo tagline también puntúa**); (b) la identidad del pie depende de un solo guiño implícito al nombre, sin ancla explícita. Ninguna requiere otra vuelta salvo que el autor quiera abrir esos puntos deliberadamente.

**Otras observaciones del footer (sin cambios):**
- **Bloque 2 mezcla tres cosas no relacionadas** en una línea a `text-xs`: RSS (prestación para el lector), licencia (legal) y año (metadata). RSS quedó sepultado en el estrato legal. Para la audiencia 4, principal usuaria de RSS, quedó findable pero deshidratado. Costo menor.
- "**Lo escribe Juan Ignacio García**" en singular presente: la arquitectura contempla sumar co-autores sin rediseño (RF-5). Ajuste de copy futuro, no urgente.
- "**2026**" solo, sin "©" ni nombre al lado, queda un poco huérfano. Inocuo.

---

## Prioridades

Ordenadas de mayor a menor por daño a la identidad/claridad, cantidad de audiencias afectadas y si es decisión de fondo o ajuste de superficie.

> **La vieja Prioridad 1 (14ª pasada) — "la UI de taxonomía se publicó con una sola sección visible" — quedó CERRADA en la 15ª pasada.** El umbral `MIN_SECCIONES_NAVEGABLES = 2` oculta toda la superficie de navegación por sección mientras haya <2 secciones. Detalle en el bloque 2.

> **La Prioridad 1 de las pasadas 15ª–18ª — "rótulos de nivel como eje de navegación" — queda CERRADA en la 19ª pasada.** Se aplicó "Aprender / Profundizar" al código: cierra (b) el toggle inexistente, (c) "nerd" resta seriedad y (d) el rótulo ambiguo suelto; cierra también el desajuste rótulo/ruta (rutas `/aprender` y `/profundizar`); y adopta el H1-C, que no reabre ningún reproche de fondo. El único residual —(a) la audiencia 2 no recibe un "esto es para vos" porque los casos son un *nivel* y no una *sección*— **se absorbe entero en la Prioridad 1 nueva (ex-Prioridad 2)**. Detalle en el bloque 3.

> **La Prioridad 2 (viva desde la 4ª pasada) — "el tagline del masthead no cubre la línea de casos y roza el alarmismo" — queda CERRADA en la 22ª pasada.** Se aplicó al código el nuevo `sitio.tagline`: **"De la estafa que te llega por SMS al ataque que dejó a media región haciendo cola por combustible."** Cierra los 5 problemas del tagline anterior —(1) la línea de casos, por primera vez visible desde el masthead; (2) el encuadre de miedo; (3) el dedo a la audiencia 1; (4) el "a él" masculino; (5) el tono de eslogan ante el reclutador— y los 3 pendientes de la 21ª: "un país sin combustible" sobreafirmaba → "media región haciendo cola por combustible" (consecuencia verificable de Colonial Pipeline); "En dos niveles" críptico → eliminado; formato/largo → tratamiento aflojado (sans, `text-xs`, ~2 líneas). Se separó `sitio.descripcion` (RSS/meta) como texto estable sin voz. Lo que queda son decisiones de estilo no bloqueantes (el tagline no engancha con el nombre; ilustra los casos con un solo tipo de incidente). Detalle en el bloque 1.

1. **Secciones: la coherencia de ejes a futuro no está garantizada por el criterio "crecimiento orgánico", y los casos siguen siendo un *nivel* y no una *sección*.**
   Problema: el autor fijó *cuándo* nace una sección (cuando hay contenido que la llena), no *cuál es el eje de clasificación*. El solapamiento amenaza vs. hábito/contexto que tenían las 4 secciones semilla (p. ej. Higiene digital vs. Viajero digital) no se manifiesta hoy con una sola, pero reaparece intacto al crear la #2 — y se decidirá ad hoc, artículo por artículo, sin modelo previo que lo guíe. **Absorbe el residual (a) de la ex-Prioridad de rótulos:** la audiencia 2 (curioso de casos, sin tecnicismos) recibe una puerta mucho más amable con "Aprender / Profundizar" ("Incidentes que marcaron a la industria y al mundo…"), pero todavía no un "esto es para vos" explícito, porque los casos siguen siendo el *nivel* "Profundizar" —calibrado por tecnicidad, "con el nivel técnico que cada caso merece"— y no una *sección* de casos accesible. Eso no lo arregla ningún rótulo. **Nota (22ª pasada):** el nuevo tagline del masthead ya le señala a la audiencia 2, desde la portada, que el blog analiza casos ("el ataque que dejó a media región haciendo cola por combustible"); lo que sigue faltando es el "esto es para vos" más adentro, en la puerta / sección.
   Audiencias: 1 y 2 (predecir dónde buscar, y —para la 2— entrar a los casos sin sentir que necesita saber de tecnología); 5 (percepción de orden) — latente hoy, activo apenas haya 2+ secciones o cuando se decida si los casos merecen su propio cajón.
   **Decisión de fondo.** No urgente mientras haya una sola sección.

2. **Secciones: sigue sin haber un cajón con el vocabulario de la audiencia 1 ("estafa", "fraude", "me estafaron").**
   Problema: antes ese contenido caía —mal— en "Ingeniería social"; hoy no existe ni ese proxy. El primer artículo publicado (juice jacking) ancló la sección más angosta posible ("Viajero digital") en vez de una de "amenazas cotidianas". Pendiente natural del crecimiento orgánico —se cierra cuando se escriba contenido de estafas y nazca su sección—, pero hoy la taxonomía (cuando reaparezca) le dirá a la audiencia 1 "no hay nada para vos". **Nota (19ª pasada): el anexo de copy de este ítem quedó CERRADO.** La descripción de "Aprender" aplicada —"Amenazas y estafas del día a día… cómo funcionan y qué hacer, explicado desde cero"— **recupera** "estafa" y "qué hacer" que el mockup había perdido; el léxico de la audiencia 1 vuelve a tener lugar en una descripción de nivel. Lo que queda es solo el problema de fondo (la *sección* de estafas).
   Audiencias: 1 (fuerte).
   **Decisión de fondo** (qué sección abrir primero), ligada al ritmo de publicación.

3. **Bloque 2 del footer mezcla RSS con lo legal y lo entierra.**
   Problema: RSS es una prestación para el lector y quedó a `text-xs` en el estrato legal/metadata, junto a licencia y año. La audiencia 4 (principal usuaria de RSS) lo encuentra pero deshidratado.
   Audiencias: 4.
   **Ajuste de copy / layout**, prioridad baja.

4. **Footer: pérdida del callback al nombre en `pie.tagline`.**
   Problema: al sacar "Porque acá nadie se las sabe todas" desaparece el ancla explícita al nombre del sitio y el gesto de autoironía/humildad que incluía al autor. El enganche con "El Que Se Las Sabe Todas" queda colgado de un solo guiño implícito ("los que creen saber"); si el lector no lo agarra, el pie se lee genérico ("explico para todos los niveles"). **Nota (22ª pasada):** el nuevo tagline del masthead tampoco engancha con el nombre, así que el guiño del footer es hoy el único ancla explícita al nombre en los textos de identidad. Sigue siendo decisión de estilo, no error.
   Audiencias: transversal (identidad), 5 (menos distintivo).
   **Decisión de tono / identidad.** Consecuencia directa de sacar la caricatura de la vieja Prioridad 6; misma tensión de fondo con otras palabras → **aceptable como decisión de estilo, prioridad mínima, no requiere otra vuelta** salvo que el autor quiera recuperar un guiño más explícito al nombre.

5. **"Lo escribe Juan Ignacio García" en singular.**
   Problema: la arquitectura quiere tolerar co-autores sin rediseño (RF-5); esta cadena habría que cambiarla si aparece un segundo autor.
   Audiencias: ninguna hoy; deuda futura.
   **Ajuste de copy**, sin urgencia.

### Ítem que quedó dormido con la poda

- **Nombres de sección opacos como etiqueta suelta** (ex-Prioridad 4, 4ª pasada): "Ingeniería social" e "Infraestructura crítica" —opacos sin su descripción en nav, breadcrumb y tarjetas— **ya no existen**. "Viajero digital", la única sección viva, no es opaca (y hoy ni siquiera se muestra como nav). La observación queda **dormida** y recurrirá si se recrean secciones con nombres de jerga de industria.

### El ranking tras aplicar el bloque 3 (19ª pasada)

Al aplicar "Aprender / Profundizar" + H1-C, la Prioridad 1 de las pasadas 15ª–18ª ("rótulos de
nivel") **se disuelve** y todo el ranking se corre un lugar hacia arriba:
- **(b), (c), (d) del bloque de rótulos: cerrados.** Desajuste rótulo/ruta: cerrado. Retroceso
  de "estafa/qué hacer": revertido.
- El residual **(a)** —"la audiencia 2 no recibe un 'esto es para vos' y los casos siguen atados
  al nivel técnico"— **se absorbe en la Prioridad 1 nueva** (los casos no son sección).
- El **H1** ya no es nota abierta: se adoptó H1-C, el mejor rankeado; su único residuo (primera
  frase = lugar común) es de estilo, no entra al ranking.
- **Ranking resultante:** **1.** ejes de secciones / los casos no son sección · **2.** el tagline
  no cubre casos + roza alarmismo (circunscripto al masthead) · **3.** cajón con el vocabulario
  de la audiencia 1 (anexo de copy cerrado; queda el fondo) · **4.** bloque 2 del footer mezcla
  RSS con lo legal · **5.** callback al nombre en el footer · **6.** "Lo escribe" en singular.

### Registro de ítems resueltos

- **6ª pasada:** eco footer/kicker ("ciberseguridad explicada para…" repetida en pie y masthead) + "Esto es" deíctico sin antecedente.
- **7ª pasada:** asimetría y condescendencia del footer ("que la entienda hasta mi abuela" como piso de comprensión / "el ingeniero de la NASA" como hipérbole de credencial). La contradicción "novedades / bitácora vs. REQUISITOS" dejó de existir al aflojarse la sección "Fuera de scope".
- **8ª pasada:** separación parcial de "casos" respecto de la bitácora personal en el footer (pasó a ítem propio "casos técnicos a fondo").
- **9ª pasada:** el footer volvió a su versión original; se descartaron las iteraciones de las pasadas 4-8 sobre `pie.tagline`. Con la reversión se cerró por desaparición el residuo de expectativa de cadencia y se reabrieron dos ítems ("Explicada" sin referente + el pie no nombra el tema; caricatura "mi abuela / ingeniero de la NASA").
- **10ª pasada:** `pie.tagline` iteración 2. Cerrado el error objetivo de la 9ª pasada (participio sin referente + el pie no nombra el tema): "Ciberseguridad" al frente aporta el referente y nombra el tema. Se reabrió como consecuencia directa el eco con el masthead ("Ciberseguridad explicada para…"), encuadrado como decisión de estilo de prioridad mínima.
- **11ª pasada:** `pie.tagline` iteración 3 ("Explicando ciberseguridad para quienes no saben, para los que creen saber, y para los que realmente saben"). **Cerrados:** el eco footer/masthead (por eliminación: arranque en gerundio distinto del masthead); la condescendencia "hasta mi abuela" (→ "quienes no saben", neutro); el pinchazo "ingenieros de la NASA" a la audiencia 4 (→ "los que realmente saben" la valida); la primera oración larga con dos "para" de función distinta (→ tricolon con tres "para" en paralelo). **La vieja Prioridad 6 (registro y ritmo del footer, con su caricatura) queda cerrada.** **Nuevo, vivo:** paralelismo del tricolon "quienes" vs "los que" (ajuste de copy cuasi-objetivo, entonces Prioridad 5). **Nuevo, no bloqueante:** pérdida del callback al nombre y de la autoironía al sacar "Porque acá nadie se las sabe todas" (decisión de tono, consecuencia directa de sacar la caricatura, entonces Prioridad 7).
- **12ª pasada:** `pie.tagline` iteración 4 — texto final: "Explicando ciberseguridad para los que no saben, para los que creen saber, y para los que realmente saben." **Cerrado:** el paralelismo del tricolon (era la Prioridad 5): los tres miembros arrancan con "los que", molde uniforme. Era el único retoque recomendado en la 11ª pasada. **Nuevo, no bloqueante:** se agregó punto final; el masthead no lo lleva → inconsistencia de criterio tipográfico entre las dos piezas, decisión de estilo (se agrupa con la Prioridad 6). **Veredicto de cierre:** el footer no tiene ningún error objetivo y está publicable como está. Las observaciones que quedan (punto vs. masthead; identidad colgada de un guiño implícito) son todas de estilo, no bloqueantes.
- **13ª pasada:** evaluada la **1.ª PROPUESTA del bloque 3** (mockup `niveles-saber.html`): "No sé nada / Algo sé" bajo el H1 "¿Sabés de ciberseguridad?", más nav y badge. **Veredicto:** no resuelve la Prioridad 1 — cierra (b) "Modo"=interruptor y el literal de (c) "nerd", ablanda (a) audiencia 2, regresa (d) rótulo suelto (ahora son oraciones que no parsean como tag/badge), y abre cinco frentes nuevos. La **dirección** (eje saber/no saber) es válida y es la de la marca; la **ejecución** de este mockup la desaprovecha. **Este mockup quedó descartado.**
- **14ª pasada:** **BLOQUE 2** — poda a una sola sección ("Viajero digital"), regla de crecimiento orgánico. **Resuelto:** sub-problema (a) de la vieja Prioridad 2. **Dormido:** la vieja Prioridad 4 (nombres de sección opacos). **Pospuesto, no resuelto:** (b) coherencia de ejes. **Sigue pendiente:** (c) cajón con el vocabulario de la audiencia 1. **Nuevo, vivo:** la UI de secciones quedó publicada con una sola sección (nueva Prioridad 1).
- **15ª pasada:** **BLOQUE 2** — implementado el umbral `MIN_SECCIONES_NAVEGABLES = 2` (`src/lib/secciones.ts`). RF-2 y CA-2 reescritos en REQUISITOS.md. **CERRADA la Prioridad 1 de la 14ª pasada.** **Residuo mínimo, no rankeado:** "Viajero digital" como texto plano huérfano en la ficha del artículo y el stub de redirección de `/secciones`. **Sin cambios:** coherencia de ejes a futuro y cajón con vocabulario de la audiencia 1 siguen pospuestos. Con la Prioridad 1 cerrada, los rótulos de nivel suben a Prioridad 1.
- **16ª pasada:** evaluada la **2.ª PROPUESTA del bloque 3** (mockup `niveles-aprender-profundizar.html`): rótulos de nivel = dos acciones, **"Aprender" / "Profundizar"**, con las descripciones de nivel reescritas, bajo el H1 "¿Sabés de ciberseguridad?", en nav y badge. **Veredicto: sin catástrofe ni error objetivo — ADOPTABLE.** Cierra (b), (c) y (d); ablanda fuerte (a); disuelve la inconsistencia con el footer. **Residuales, no bloqueantes:** la audiencia 2 no recibe un "esto es para vos" explícito; la descripción de "Aprender" tira "estafa" y "qué hacer" (→ Prioridad 4); el H1 sigue flojo para audiencias 1 y 5.
- **17ª pasada:** **BLOQUE 3** — cambió **solo el H1** del mockup: de **"¿Sabés de ciberseguridad?"** (quiz) a **"Todo lo que usás tiene un punto débil. Conocerlo no da miedo, ignorarlo sí."** (tesis). **Cerrado:** el reproche de fondo del H1-quiz y la nota de "emparejamiento H1↔puertas aflojado". **Mejora el recibimiento** para audiencias 1, 3 y 5. **Residuales, todos decisión de tono:** (i) "Todo lo que usás tiene un punto débil" es un lugar común; (ii) "ignorarlo sí [da miedo]" roza "sin alarmismo"; (iii) el H1 pierde la palabra "ciberseguridad" (cubierta por el masthead).
- **18ª pasada:** **BLOQUE 3** — comparados **tres candidatos para el H1**. **RANKING: 1º H1-C · 2º H1-A · 3º H1-B.** — **H1-C:** conserva el giro con postura pero suelta "miedo"; el que mejor respeta "sin alarmismo", el que no le pega el dedo a la audiencia 1, el que más lee como criterio. **Adoptable tal cual.** — **H1-A:** casi empatado; gana en ritmo, pierde por "miedo" en el hero. — **H1-B:** **no debía adoptarse** — el más genérico, el que peor respeta "sin alarmismo", "decidió ignorar el riesgo" culpabiliza a la audiencia 1.
- **19ª pasada:** **BLOQUE 3** — la 2.ª propuesta **se aplicó al código**: "Aprender / Profundizar" en nav/badge/puertas/listados, campo `nivel` a `aprender | profundizar`, rutas `/aprender` y `/profundizar` (redirects desde las viejas), descripciones de nivel con "estafa/qué hacer" **recuperado** en "Aprender", CTAs "Empezar por acá" / "Ver los análisis", **H1-C** en `home.heroH1` reemplazando el kicker "Primera vez acá", badge "Aprender" + "Viajero digital" como texto, MARCA §3.3 actualizado. **CERRADA la Prioridad 1 de las pasadas 15ª–18ª ("rótulos de nivel"):** (b), (c), (d) cerrados; desajuste rótulo/ruta cerrado; H1-C adoptado sin reproche de fondo; el residual (a) —audiencia 2 sin "esto es para vos", casos como nivel y no sección— se absorbe entero en la Prioridad 1 nueva (ex-P2). **CERRADO el anexo de copy de la Prioridad 4:** la descripción de "Aprender" recupera el léxico de la audiencia 1. El bloque 3 **no tiene ningún error objetivo** y es **publicable / cerrado**; lo que queda (etiquetas genéricas, "Profundizar" solo algo vago, "marcaron a la industria", primera frase del H1) son decisiones de estilo no bloqueantes. Ranking resultante: **1.** ejes de secciones / casos no son sección · **2.** tagline no cubre casos + alarmismo (circunscripto al masthead) · **3.** cajón vocabulario audiencia 1 (fondo) · **4.** RSS en el footer · **5.** callback al nombre · **6.** "Lo escribe" singular.
- **20ª pasada:** **BLOQUE 1** — evaluada una **1.ª PROPUESTA de nuevo tagline del masthead, NO aplicada:** "De por qué esa app 'gratis' te puede costar cara, a por qué un truco de hace 3000 años sigue vaciando cuentas." (el campo `sitio.descripcion` — RSS/meta — se separaría y fijaría aparte, fuera de esta evaluación). **De los 5 problemas del tagline vigente cierra 2:** (3) el dedo a la audiencia 1 y (4) el "a él" masculino; ablanda apenas (5) el tono de marketing. **No cierra:** (1) la falta de la línea de casos —los dos polos de "De X a Y" son explicativos de amenazas cotidianas, ninguno señala incidentes— ni (2) el roce con "sin alarmismo", que se transforma en dread de plata ("vaciando cuentas"). **Introduce 2 problemas nuevos:** (i) ambas mitades hablan de dinero → angosta el alcance aparente a fraude financiero (deja afuera infra crítica, privacidad, viajes), contra la nota del plan; (ii) "un truco de hace 3000 años" es un acertijo que no resuelve en un kicker permanente y sin contexto — opaco para las audiencias 1, 2, 3 y 5 (decisión de tono cuya ubicación la hace misfire). Además: ~107 caracteres no entran en el slot mono-mayúsculas-10px sin envolver a 4+ líneas. Sin error objetivo duro. **Veredicto: no adoptable tal cual — movimiento lateral; la dirección es correcta, el string necesita trabajo.** La Prioridad 2 (tagline) se mantiene en su lugar, ahora con la nota de la propuesta evaluada.
- **21ª pasada:** **BLOQUE 1** — evaluada la **2.ª PROPUESTA de nuevo tagline del masthead, NO aplicada:** "De la estafa que te llega por SMS al ataque que dejó a un país sin combustible. En dos niveles." **De los 5 problemas del tagline vigente cierra 3-4:** (1) la línea de casos invisible —**por primera vez el masthead la señala**—, (3) el dedo a la audiencia 1, (4) el "a él" masculino; mejora (5) el tono de marketing; ablanda mucho (2) el alarmismo (se va el miedo dirigido al lector). **Se fue** el angostamiento a fraude financiero; las dos mitades cubren las dos líneas reales del blog (cotidiano ↔ grandes incidentes) y quedan bien balanceadas. **Pendiente:** (i) "un país sin combustible" sobreafirma la consecuencia real de Colonial Pipeline; (ii) "En dos niveles" es un remate subespecificado en un kicker permanente; (iii) ~100 car. + dos oraciones con punto no entran limpio en el slot mono-mayúsculas-10px. Sin error objetivo duro. **Veredicto: avance neto real —no movimiento lateral—; ya supera al tagline vigente en el balance; no adoptable tal cual por un margen chico** (resolver (i) y (ii)). La Prioridad 2 se mantiene en su lugar (la propuesta no está aplicada), ahora anotada con esta 2.ª evaluación.
- **22ª pasada:** **BLOQUE 1** — el nuevo `sitio.tagline` **se aplicó al código** con los dos ajustes de la 21ª: **"De la estafa que te llega por SMS al ataque que dejó a media región haciendo cola por combustible."** "un país sin combustible" → "media región haciendo cola por combustible" (consecuencia verificable de Colonial Pipeline, sin sobreafirmar); remate "En dos niveles" eliminado; `sitio.descripcion` (RSS/meta) separado como texto estable sin voz; tratamiento del kicker aflojado en `Cabecera.astro` (sans, `text-xs`, sin mayúsculas ni tracking, ~2 líneas); MARCA §3.5 actualizado. **CERRADA la Prioridad 2 (el tagline del masthead), viva desde la 4ª pasada.** Cierra los 5 problemas del tagline anterior y los 3 pendientes de la 21ª; resuelve la separación tagline/descripción; y de paso alinea el punto final con el footer (era una nota abierta del bloque 4). El bloque 1 **no tiene ningún error objetivo** y es **publicable / cerrado**; lo que queda (no engancha con el nombre; ilustra los casos con un solo tipo de incidente; ~98 car. es largo; `descripcion`≈`metaHome`) son decisiones de estilo no bloqueantes. Ranking resultante: **1.** ejes de secciones / casos no son sección · **2.** cajón vocabulario audiencia 1 (fondo) · **3.** RSS en el footer · **4.** callback al nombre · **5.** "Lo escribe" singular.

### Veredicto de la 15ª pasada

El cambio **cierra la que era la Prioridad 1** y no abre ningún frente de contenido nuevo: los
dos residuos (etiqueta de ficha en texto plano, stub de redirección) son de prioridad mínima y
uno de ellos es de UX, no de este evaluador. El bloque 2, en su estado actual (una sola sección,
navegación oculta), **no tiene ningún error objetivo pendiente** y es coherente con REQUISITOS
tras la reescritura de RF-2/CA-2. Lo que queda sobre secciones (coherencia de ejes, cajón de
estafas) es **decisión de fondo latente** que solo se activa cuando nazca la 2ª sección; no
bloquea nada hoy. El foco de la próxima iteración vuelve al **bloque 3** (rótulos de nivel), que
pasa a ser la Prioridad 1.

### Veredicto de la 16ª pasada

La 2.ª propuesta del bloque 3 ("Aprender / Profundizar") **es adoptable: no hay catástrofe ni
error objetivo.** Es un avance neto claro sobre el texto vigente y sobre el mockup descartado —
cierra tres de los cuatro sub-problemas de la Prioridad 1, ablanda fuerte el cuarto, y no
reintroduce ninguno de los costos del mockup anterior. Lo que queda son tres cosas, todas por
debajo del umbral de "error grave": (1) la descripción de "Aprender" deja afuera "estafa" y "qué
hacer"; (2) la audiencia 2 recibe una puerta más amable pero no un "esto es para vos" (Prioridad
2); (3) el H1 "¿Sabés de ciberseguridad?" sigue flojo (decisión de tono).

### Veredicto de la 17ª pasada

El autor abrió el H1 y lo cambió de quiz a tesis. **El cambio es una mejora y no introduce ningún
error objetivo.** Cierra el único reproche de fondo que quedaba vivo sobre el bloque 3 (el
H1-quiz) y disuelve la nota de "emparejamiento H1↔puertas aflojado" de la 16ª. Las tres
observaciones que quedan sobre el H1 son **todas decisiones de estilo, no bloqueantes.**

### Veredicto de la 18ª pasada

Se compararon tres candidatos para el H1 de la home. **Ninguno es un error objetivo**; la
elección es de identidad y de tono. **Ranking: 1º H1-C, 2º H1-A, 3º H1-B.** H1-C es el mejor y
adoptable tal cual; H1-A también adoptable (mete "miedo" en el hero); H1-B **no debía
adoptarse.** Si se adopta H1-C, el roce del H1 con "sin alarmismo" que anota la Prioridad 3
desaparece y esa prioridad queda circunscripta al masthead.

### Veredicto de la 19ª pasada

El autor **aplicó al código** la 2.ª propuesta del bloque 3 más el H1-C — la combinación mejor
rankeada de las pasadas 16ª a 18ª. **El texto vigente no tiene ningún error objetivo.** Cierra:
(b) el toggle inexistente, (c) "nerd" resta seriedad, (d) el rótulo ambiguo suelto, el desajuste
rótulo/ruta (rutas `/aprender` y `/profundizar`), y —al elegir H1-C, no H1-A ni H1-B— cualquier
reproche de fondo sobre el H1 y su roce con "sin alarmismo". **Revierte** además el retroceso de
copy de "estafa / qué hacer" en la descripción de "Aprender".

**La Prioridad 1 de las pasadas 15ª–18ª queda CERRADA.** Su único residual —(a) la audiencia 2
no recibe un "esto es para vos" explícito porque los casos son un *nivel* y no una *sección*— **se
absorbe entero en la Prioridad 1 nueva (ex-Prioridad 2: los ejes de sección / los casos no son
sección)**; es un problema de arquitectura de contenido, no de rótulo.

**El anexo de copy de la Prioridad 4 (recuperar "estafa / qué hacer") queda CERRADO;** el núcleo
de esa prioridad —abrir una *sección* con el vocabulario de la audiencia 1— sigue vivo, ligado al
ritmo de publicación (ahora Prioridad 3).

**Veredicto del bloque 3: publicable / cerrado.** Las observaciones que quedan son todas
decisiones de estilo, no bloqueantes: "Aprender / Profundizar" son etiquetas genéricas (la
identidad la cargan el H1 y las descripciones), "Profundizar" solo en la nav es algo vago,
"marcaron a la industria" es encuadre de adentro para la audiencia 2, y la primera frase del H1
("Todo lo que usás tiene un punto débil") es un lugar común del rubro. Ninguna requiere otra
vuelta. El foco pasa a la Prioridad 1 (los casos como sección vs. como nivel) y a la Prioridad 2
(el tagline del masthead).

### Veredicto de la 20ª pasada

Se evaluó una **1.ª PROPUESTA de nuevo tagline del masthead** (bloque 1), no aplicada al código:
"De por qué esa app 'gratis' te puede costar cara, a por qué un truco de hace 3000 años sigue
vaciando cuentas." El campo `sitio.descripcion` (RSS + meta) se separaría y fijaría aparte —
fuera de esta evaluación.

**La propuesta no es adoptable tal cual — es un movimiento lateral.** Cierra dos de los cinco
problemas del tagline vigente (el dedo a la audiencia 1; "a él" masculino) y ablanda apenas el
tono de marketing ante el reclutador. Pero:
- **no cierra** la falta de señal de la línea de análisis de casos: los dos polos de "De X a Y"
  son explicativos de amenazas cotidianas, ninguno dice "acá se analizan los grandes incidentes";
- **no cierra** el roce con "sin humo y sin alarmismo": lo transforma de encuadre por negación
  ("no le va a pasar") a dread de pérdida de plata ("vaciando cuentas");
- **introduce** un angostamiento del alcance aparente del blog a fraude financiero ("costar cara"
  + "vaciando cuentas"), dejando afuera infraestructura crítica, privacidad y viajes — en contra
  de la amplitud real del blog y de la nota del propio plan;
- **introduce** un acertijo ("un truco de hace 3000 años" = el troyano, sin nombrarlo) que no se
  resuelve en un kicker que aparece suelto en todas las páginas y sin contenido al lado: opaco
  para las audiencias 1, 2, 3 y 5. La intriga es decisión de tono, pero la ubicación la hace
  misfire;
- **no entra en el slot:** ~107 caracteres en mono, mayúsculas, 10–11px con tracking ancho,
  dentro de `max-w-md` → 4+ líneas de kicker apagado, mucho peso visual, y la estructura de coma
  se amontona en mayúsculas.

No hay error objetivo duro (nada agramatical ni falso; "hace 3000 años" es un redondeo
defendible del caballo de Troya). **La dirección es correcta** —describir el contenido por su
rango en vez de retar al lector— y conviene conservarla; el string concreto necesita trabajo
antes de reemplazar al vigente: quitar el doble encuadre monetario, que una de las dos mitades
hable de la línea de casos, y resolver o acortar la referencia velada para que quepa en el slot.
La Prioridad 2 (el tagline del masthead) se mantiene en su lugar, ahora anotada con esta
propuesta y su veredicto.

### Veredicto de la 21ª pasada

Se evaluó una **2.ª PROPUESTA de nuevo tagline del masthead** (bloque 1), no aplicada al código:
"De la estafa que te llega por SMS al ataque que dejó a un país sin combustible. En dos niveles."
Reemplaza en la evaluación a la 1.ª propuesta (20ª pasada), que quedó como movimiento lateral.

**Esta vez es un avance neto real, no lateral.** La 1.ª propuesta arreglaba 2 problemas y rompía
2; esta **cierra el reparo de fondo del tagline vigente —(1) la línea de análisis de casos, por
primera vez visible desde el masthead ("el ataque que dejó a un país sin combustible")— y cierra
(3) el dedo a la audiencia 1 y (4) el "a él" masculino, mejora (5) el tono ante el reclutador y
ablanda mucho (2) el alarmismo** (se va el miedo dirigido al lector). Se fue el angostamiento a
fraude financiero: las dos mitades por fin cubren las dos líneas reales del blog y quedan
balanceadas (mitad 1 → audiencia 1; mitad 2 → audiencias 2 y 4).

**No adoptable tal cual, pero por un margen chico.** Dos puntos a resolver antes de fijar la
frase:
1. **"un país sin combustible"** sobreafirma la consecuencia real de Colonial Pipeline
   (desabastecimiento y compras de pánico en una región de EE. UU. durante días, no un país sin
   nafta). Tal cual, roza el efectismo que "sin humo" promete evitar; las audiencias 4 y 5 lo
   notan. Ajuste del autor; acá solo se marca.
2. **"En dos niveles"** es un remate subespecificado en un kicker que aparece en todas las
   páginas sin la home a la vista — misma nota de "'nivel' / 'modo' ambiguo" de pasadas
   anteriores, y ecoa el eje que el bloque 3 dejó atrás ("Aprender / Profundizar").
El desajuste de formato/largo (~100 car. + dos oraciones con punto en el slot mono-mayúsculas-10px
→ 3–4 líneas) es un tercer punto, secundario.

No hay error objetivo duro (nada agramatical ni dato falso verificable en la frase aislada).
**La propuesta ya supera al tagline vigente en el balance** —cosa que la 1.ª no lograba—; los
dos ajustes de arriba la dejarían lista. La Prioridad 2 (el tagline del masthead) se mantiene en
su lugar porque la propuesta no está aplicada, ahora anotada con esta 2.ª evaluación y su
veredicto.

### Veredicto de la 22ª pasada

El autor **aplicó al código** el nuevo `sitio.tagline` con los dos ajustes pedidos en la 21ª
pasada, separó `sitio.descripcion` (RSS + meta) como texto estable aparte y aflojó el
tratamiento visual del kicker.

**El tagline vigente no tiene ningún error objetivo.** "media región haciendo cola por
combustible" es una descripción verificable de Colonial Pipeline (2021) —las colas en las
estaciones del sureste de EE. UU. fueron el recuerdo público del caso—; ya no hay la
sobreafirmación de "un país sin combustible". Al eliminar "En dos niveles" la frase cierra como
fragmento completo, sin remate colgado ni eco con "Aprender / Profundizar". El tratamiento nuevo
(sans, `text-xs`, sin mayúsculas, `leading-snug`, `max-w-md`) baja la frase a ~2 líneas de
subtítulo apagado y el slot deja de ser un micro-rótulo mono.

**Cierra los 5 problemas del tagline anterior** (línea de casos invisible, encuadre de miedo,
dedo a la audiencia 1, "a él" masculino, tono de eslogan) **y los 3 pendientes de la 21ª**
(sobreafirmación factual, remate críptico, formato/largo). `sitio.descripcion` cubre bien el rol
de RSS/meta: clara, completa y sin voz —el registro correcto para una meta-descripción.

**La Prioridad 2 (el tagline del masthead), viva desde la 4ª pasada, queda CERRADA.** Las
observaciones que quedan son de estilo, no bloqueantes — el texto ya es publicable tal como está:
el tagline no engancha con el nombre del sitio (lo carga el footer); ilustra la línea de casos
con un solo tipo de incidente (foco declarado del autor); ~98 caracteres es largo para un tagline
omnipresente; `sitio.descripcion` y `metaHome` casi se repiten (candidato a unificar). Ninguna
requiere otra vuelta.

Con el bloque 1 cerrado, el ranking se corre: **1.** ejes de secciones / los casos no son sección
(decisión de fondo, latente hasta la 2ª sección) · **2.** cajón con el vocabulario de la
audiencia 1 (decisión de fondo, ligada al ritmo de publicación) · **3.** bloque 2 del footer
mezcla RSS con lo legal (ajuste de layout) · **4.** callback al nombre en el footer (decisión de
estilo) · **5.** "Lo escribe" en singular (deuda futura). **Los bloques 2, 3 y 4 no se
re-auditaron en esta pasada.**
