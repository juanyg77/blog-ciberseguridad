# Evaluación de contenido — textos de identidad

**Fecha:** 2026-09-07 — 5ª pasada.
**Cubre:** tagline del masthead, nombres y descripciones de las secciones, rótulos "Modo humano / Modo nerd" y sus descripciones, y el footer del sitio.
**Fuera de alcance:** la página "Sobre mí" (tiene evaluador propio) y el contenido de los artículos.

## Cambios aplicados desde la pasada anterior

- **Footer, línea `pie.tagline` (`src/i18n/es.ts`):** se antepuso "Esto es " y "ciberseguridad" pasó a minúscula.
  - Antes: "Ciberseguridad explicada para mi abuela y para el ingeniero de la NASA. Porque acá nadie se las sabe todas."
  - Ahora: "Esto es ciberseguridad explicada para mi abuela y para el ingeniero de la NASA. Porque acá nadie se las sabe todas."
  - Objetivo declarado: romper la repetición palabra por palabra con el kicker del masthead ("Ciberseguridad explicada para…"), marcada como ítem 6 en la 4ª pasada.
- El resto de los textos (tagline del masthead, secciones, Modo humano/nerd, estructura del footer y su bloque legal) **no cambió** respecto de la 4ª pasada.

## Nota sobre las secciones

Las secciones son un catálogo dinámico (`src/content/secciones/`). Hoy hay **cuatro**: Ingeniería social, Infraestructura crítica, Higiene digital y **Viajero digital**. No hay una lista canónica de secciones en REQUISITOS.md ni en MARCA.md — REQUISITOS solo pide "al menos 2, extensibles sin rediseño" (RF-2 / CA-2). La lista de seis que circuló en el encargo original de este evaluador ("Cadena de suministro", "Vulnerabilidades conocidas", "Fraude financiero"…) no sale de ningún documento del proyecto; era una idea suelta. La decisión pendiente no es "reconciliar con una lista externa" sino **el autor definir qué secciones quiere hoy** (ver Prioridades).

---

## 1. Tagline del masthead

**Sin cambios desde la 4ª pasada.**

**Texto:** "Ciberseguridad explicada para el que cree que a él no le va a pasar"
Se renderiza bajo el nombre "EL QUE SE LAS SABE TODAS" en mono, mayúsculas, 10–11px, `text-tinta-tenue` (es un kicker chico y apagado, no un subtítulo con peso).

**1. ¿Genérico o con identidad propia?**
Mitad y mitad. El armazón "Ciberseguridad explicada para…" es la fórmula de arranque de cualquier blog de divulgación del rubro; es intercambiable. El remate "el que cree que a él no le va a pasar" sí aporta un punto de vista y engancha con el nombre del sitio (la persona sobreconfiada). Salva la frase de ser plenamente genérica, pero la primera mitad podría estar en cualquier lado.

**2. ¿Se entiende sin contexto previo?**
Se entiende el qué (ciberseguridad explicada) y el a quién (el que se cree a salvo). Lo que queda afuera: **no hay ninguna señal de la segunda línea del blog**, el análisis de casos. Un lector que llega buscando "qué pasó con Colonial Pipeline" no se siente interpelado. Tampoco aclara formato: ¿blog, newsletter, servicio? El nombre irónico + tagline exige que el lector agarre la ironía solo; si no la agarra, "El Que Se Las Sabe Todas" + "explicada para el que cree que no le va a pasar" puede leerse como soberbia.

**3. ¿Funciona para las 5 audiencias?**
- **Audiencia 1 (familiar que ya recibió una estafa):** parcial. "a él no le va a pasar" le habla al que todavía no fue víctima; el que está googleando asustado ya sabe que le puede pasar. El encuadre le queda un paso atrás.
- **Audiencia 2 (curioso de casos):** no le habla. Nada de casos, noticias ni incidentes.
- **Audiencia 3 (contacto de LinkedIn):** funciona.
- **Audiencia 4 (colega/estudiante técnico):** no le habla e incluso puede espantarlo: "explicada para el que cree que no le va a pasar" suena a contenido de principiante y sugiere que ahí no hay nada para él.
- **Audiencia 5 (reclutador):** lo lee como un eslogan con oficio de copy y con postura, lo cual suma algo. Pero no transmite competencia técnica ni criterio profesional; transmite gancho de marketing. Riesgo de que suene a tagline de proveedor de capacitación en concientización. Depende de que el reclutador procese la ironía del nombre.
- **Roce transversal:** "no le va a pasar" es encuadre de miedo ("te va a pasar"), y la meta-descripción del sitio promete "sin humo y sin alarmismo". Hay una pequeña contradicción de tono entre la promesa y el eslogan de portada.

---

## 2. Nombres y descripciones de las secciones

**Sin cambios desde la 4ª pasada.**

**Textos (nombre — descripción):**
- **Ingeniería social** — "Cómo se manipula a las personas para que entreguen datos, dinero o accesos: phishing, pretexto, estafas telefónicas y por mensaje."
- **Infraestructura crítica** — "Ataques a los sistemas que sostienen la vida cotidiana: energía, agua, combustible, salud, transporte. Dónde la seguridad informática se cruza con el mundo físico."
- **Higiene digital** — "Los hábitos que bajan el riesgo sin volverte loco: contraseñas, segundo factor, actualizaciones, copias de respaldo, qué apps tienen acceso a qué."
- **Viajero digital** — "Seguridad cuando estás fuera de casa: el WiFi de aeropuertos y hoteles, los puertos de carga públicos, el celular y la notebook en tránsito, y qué mirar con tus cuentas en otro país."
(Cada `.md` tiene además una o dos frases de cuerpo con voz propia — p. ej. "Todo ataque que empieza por convencer a alguien —y no por romper una máquina— entra acá. Es la puerta más usada y la más barata.")

**1. ¿Genérico o con identidad propia?**
Los **nombres** son taxonomía de manual: "Ingeniería social", "Infraestructura crítica" e "Higiene digital" son términos textuales de la industria, intercambiables con cualquier blog. "Viajero digital" es algo más propio. Las **descripciones** sí tienen identidad: son concretas, dan ejemplos ("energía, agua, combustible, salud, transporte"), y mantienen una voz consistente ("sin volverte loco", "el WiFi de aeropuertos y hoteles"). El cuerpo de cada sección refuerza esa voz. Resumen: nombres genéricos, descripciones con carácter.

**2. ¿Se entiende sin contexto previo?**
Con la descripción a la vista (home, `/secciones`, página de la sección), sí, sin ambigüedad. **El nombre solo no alcanza** donde aparece sin descripción: nav, breadcrumb del artículo ("En Ingeniería social"), rótulo en `TarjetaArticulo`. Para un lector no técnico, "Ingeniería social" e "Infraestructura crítica" son opacos sueltos.
Problema de fondo: las cuatro secciones **no comparten un eje**. Dos son tipo-de-amenaza (Ingeniería social, Infraestructura crítica) y dos son tipo-de-hábito/contexto (Higiene digital, Viajero digital). Eso genera solapamiento real: el artículo publicado sobre puertos USB en aeropuertos cae tanto en "Viajero digital" como en "Higiene digital", y el lector no tiene forma de predecir dónde buscar.

**3. ¿Funciona para las 5 audiencias?**
- **Audiencia 1 (víctima de estafa):** acá está el hueco más grave. Ninguna sección usa su vocabulario: no hay "Estafas", "Fraude", "Me estafaron". Lo que googlea ("me llegó un SMS de un paquete retenido", "transferí plata a un falso banco") vive bajo "Ingeniería social", una etiqueta que esa persona no va a clickear.
- **Audiencia 2 (curioso de casos):** "Infraestructura crítica" le sirve para Colonial Pipeline / WannaCry. Bien. Pero si el caso que escuchó no es de infraestructura (una filtración, un ransomware a una empresa), no hay dónde meterlo.
- **Audiencia 3:** sin problema.
- **Audiencia 4 (técnico):** las descripciones no le señalan profundidad; describen el tema, no el nivel de análisis. Nada acá le dice "vas a encontrar timeline, causa raíz y fuentes".
- **Audiencia 5 (reclutador):** las descripciones están bien escritas y son concretas, eso suma. Pero la taxonomía mezclada (amenaza + hábito en la misma grilla) puede leerse como falta de un modelo mental ordenado. Es un costo menor frente al beneficio de que las descripciones no son humo.

---

## 3. Rótulos "Modo humano" / "Modo nerd" y sus descripciones

**Sin cambios desde la 4ª pasada.**

**Textos:**
- Rótulos: "Modo humano" / "Modo nerd" (reemplazan "No técnico" / "Técnico"). Aparecen en nav, en las puertas de la home, y como tag suelto en tarjetas y en la ficha del artículo ("Explicativo · Modo humano").
- Descripción `no-tecnico`: "Cómo funcionan las amenazas y estafas más comunes, y qué hacer, contado desde cero."
- Descripción `tecnico`: "Análisis técnicos de incidentes reales: cómo pasaron, qué salió mal y qué se puede aprender."

**1. ¿Genérico o con identidad propia?**
Los rótulos tienen identidad: "Modo humano / Modo nerd" es una elección con voz, muy por encima del insípido "No técnico / Técnico". Pero "Modo nerd" es un lugar común de internet (miles de sitios tienen "modo nerd" / "nerd mode"); "Modo humano" es lo más fresco del par. Las **descripciones** son bastante genéricas: "Análisis técnicos de incidentes reales: cómo pasaron, qué salió mal y qué se puede aprender" es literalmente lo que diría cualquier blog de análisis de incidentes. "contado desde cero" tiene una pizca de voz.

**2. ¿Se entiende sin contexto previo?**
"Modo humano" es ambiguo. En un sitio que además tiene una sección sobre "manipular a las personas", "humano" puede leerse como "el factor humano" o incluso "escrito por humanos (no IA)". Necesita la descripción al lado para desambiguar, y como **tag suelto** en la ficha del artículo ("Explicativo · Modo humano") va sin descripción.
Además la palabra "Modo" implica algo que se conmuta sobre el mismo contenido. Pero según las propias descripciones **no son dos versiones del mismo tema**: "Modo humano" = amenazas y estafas comunes; "Modo nerd" = análisis de incidentes. Son dos líneas de contenido distintas, no dos niveles de lo mismo. Llamarlas "Modo" sugiere un interruptor que no existe.

**3. ¿Funciona para las 5 audiencias?**
- **Audiencia 1:** "Modo humano" es acogedor, bien. Con la descripción entiende que ahí está su respuesta.
- **Audiencia 2 (curioso de casos):** acá se rompe. El curioso quiere entender un caso **sin tecnicismos**. El análisis de casos vive en "Modo nerd", rotulado como el lado técnico y descrito como "Análisis técnicos". "Modo humano" es "estafas comunes", no casos. Esta audiencia queda entre dos sillas: la puerta que le corresponde por tema está etiquetada como la que no es para ella.
- **Audiencia 3:** sin problema.
- **Audiencia 4 (técnico):** "Modo nerd" en general lo abraza; riesgo bajo. Pero la descripción no le promete rigor (metodología, línea de tiempo, fuentes); es plana.
- **Audiencia 5 (reclutador):** es la apuesta más arriesgada del sitio. En lectura generosa: marca con voz, confianza, juego. En lectura desconfiada: el trabajo serio —justo el que impresionaría a un reclutador— queda archivado bajo la palabra "nerd", y la descripción que lo acompaña es competente pero anodina. El rótulo puede estar restándole seriedad percibida al contenido que más la necesita.

---

## 4. Footer del sitio

**Textos renderizados:**
- Bloque 1 (prominente): "Lo escribe Juan Ignacio García · Alta Gracia, Córdoba, Argentina" — "Esto es ciberseguridad explicada para mi abuela y para el ingeniero de la NASA. Porque acá nadie se las sabe todas." — links "Sobre mí" / "Contacto" + iconos LinkedIn/GitHub.
- Bloque 2 (`text-xs`, apagado, tras un borde): "RSS" · "Podés compartir este contenido citando la fuente (licencia CC BY 4.0)" (enlazado) · "2026".

### Qué se resolvió

- **Opacidad de la sigla CC BY (audiencias 1 y 2):** resuelto en la 2ª pasada. "Podés compartir este contenido citando la fuente" carga el significado en lenguaje llano.
- **Lista plana sin jerarquía:** resuelto en lo estructural en la 3ª pasada (corte en dos bloques con color, tamaño y borde separador).
- **"Explicada" como participio sin referente + el footer no nombraba el tema:** resuelto en la 4ª pasada al anteponer "Ciberseguridad".
- **Repetición palabra por palabra con el kicker del masthead (ítem 6 de la 4ª pasada):** **parcialmente resuelto en esta 5ª pasada.** Con "Esto es " delante y "ciberseguridad" en minúscula, el footer ya no arranca con la misma cadena literal que el kicker ("Ciberseguridad explicada para…"). La lectura de "copia-pega" se debilita. **Pero el eco no desaparece:** la fórmula más genérica del sitio, "ciberseguridad explicada para…", sigue apareciendo dos veces en la misma página, ahora solo desfasada por dos palabras de arranque. Un lector atento sigue registrando la rima. Queda como residual de baja prioridad (ver ítem 6 reformulado).

### Observaciones que siguen / nuevas

**Sobre la línea "Esto es ciberseguridad explicada para mi abuela y para el ingeniero de la NASA. Porque acá nadie se las sabe todas."**

**1. ¿Genérico o con identidad propia?**
Identidad media-alta, sin cambios de fondo respecto de la 4ª pasada. "para mi abuela y para el ingeniero de la NASA" sigue siendo la parte con voz (armada con dos clichés localizados: "explicáselo a tu abuela" / "rocket scientist"); "nadie se las sabe todas" sigue siendo la llave irónica del nombre del sitio. El nuevo arranque "Esto es…" no agrega identidad: es un deíctico presentacional que cualquier sitio podría usar. Neutro en este eje, con un matiz negativo: "Esto es X" es una construcción de relleno, no una frase de marca.

**2. ¿Se entiende sin contexto previo?**
Sí, en lo esencial. La frase nombra el tema, el arco de público y la actitud sin depender del kicker. **Ambigüedad nueva, menor:** "Esto" no tiene antecedente explícito. Al pie de una página profunda, el lector tiene que inferir que "esto" = el sitio / el blog. Se resuelve solo por contexto (está en el footer, junto al nombre del autor y los links), pero es un pronombre suelto apuntando a nada concreto. La dependencia vieja sigue: "nadie se las sabe todas" necesita el nombre del sitio a la vista para leerse como ironía; el nombre está en la página, así que es menor.

**3. ¿Funciona para las 5 audiencias?**
- **Audiencia 1:** "explicada para mi abuela" — cálido, inclusivo. El "Esto es" delante no le quita calidez porque el gancho concreto viene enseguida. Neutro.
- **Audiencia 2 (curioso de casos):** sin cambio. El footer sigue sin mencionar casos ni incidentes. No le habla. Misma carencia que el tagline del masthead, no un defecto propio del footer.
- **Audiencia 3:** funciona; el tono conversacional de "Esto es…" no molesta.
- **Audiencia 4 (técnico):** "el ingeniero de la NASA" sigue haciendo el gesto de "acá hay profundidad para vos". Sigue siendo hipérbole: la audiencia real son estudiantes y colegas.
- **Audiencia 5 (reclutador):** el cambio corta en dos direcciones. A favor: la 4ª pasada notó que arrancar con el sustantivo abstracto "Ciberseguridad" dejaba el footer un poco rígido / institucional; "Esto es…" lo afloja y lo devuelve a un registro de blog personal. En contra: "Esto es ciberseguridad explicada para…" es un arranque de copy débil —el deíctico de relleno es justo lo que un redactor con oficio recortaría—. Un reclutador que escanea puede leerlo como frase sin pulir. El saldo es chico y probablemente parejo; no mejora ni empeora la percepción de competencia de forma relevante. Sin cambio en el punto de fondo: "acá nadie se las sabe todas", leído literal, puede sonar a que el autor se declara sin autoridad (ítem 5).

**Otras observaciones del footer (sin cambios):**
- **Bloque 2 mezcla tres cosas no relacionadas** en una línea a `text-xs`: RSS (prestación para el lector / suscripción), licencia (legal) y año (metadata). RSS es lo más "de lector" de los tres y quedó sepultado en el estrato legal. Para la audiencia 4, principal usuaria de RSS, quedó findable pero deshidratado. Costo menor.
- "**Lo escribe Juan Ignacio García**" en singular presente: la arquitectura contempla sumar co-autores sin rediseño (RF-5). Esta cadena habría que tocarla. Ajuste de copy futuro, no urgente.
- "**2026**" solo, sin "©" ni nombre al lado, queda un poco huérfano. Inocuo.

---

## Prioridades

Ordenadas de mayor a menor por daño a la identidad/claridad, cantidad de audiencias afectadas y si es decisión de fondo o ajuste de superficie.

1. **"Modo humano / Modo nerd" como eje de navegación.**
   Problema: (a) la audiencia 2 (curioso de casos, sin tecnicismos) queda sin puerta: el análisis de casos vive en "Modo nerd", rotulado como el lado técnico; (b) "Modo" implica un interruptor sobre el mismo contenido, pero son dos líneas de contenido distintas; (c) "Modo nerd" puede estar restándole seriedad percibida al contenido que impresionaría a un reclutador; (d) "Modo humano" es ambiguo suelto. Las descripciones asociadas son genéricas.
   Audiencias: 2 (fuerte), 4 y 5 (moderado), 1 (leve).
   **Decisión de fondo.**

2. **Taxonomía de secciones + definir la lista real + falta de puerta en el idioma de la víctima.**
   Problema: (a) el autor todavía no fijó qué secciones quiere: hoy hay 4 semilla que puso el agente desarrollador, y no hay lista canónica en ningún doc; (b) las 4 mezclan dos ejes (tipo-de-amenaza vs. hábito/contexto), lo que genera solapamiento real (Higiene digital vs. Viajero digital); (c) no hay ninguna sección con el vocabulario de la audiencia 1 ("estafa", "fraude", "me estafaron"): eso queda absorbido en "Ingeniería social".
   Audiencias: 1 (fuerte), 2 (moderado), 5 (percepción de orden).
   **Decisión de fondo.**

3. **El tagline del masthead no cubre la línea de análisis de casos y roza el alarmismo.**
   Problema: "Ciberseguridad explicada para el que cree que a él no le va a pasar" no da ninguna señal de que el blog también analiza incidentes; deja afuera a la audiencia 2 y 4 desde la portada. Además "no le va a pasar" es encuadre de miedo y contradice la promesa "sin humo y sin alarmismo" de la meta-descripción.
   Audiencias: 2 y 4 (no se sienten aludidos), 5 (lo lee como eslogan de marketing, no como criterio).
   **Decisión de fondo** en cuanto al alcance de qué debe abarcar el tagline; **ajuste de copy** en cuanto al tono de miedo.

4. **Nombres de sección opacos como etiqueta suelta.**
   Problema: "Ingeniería social" e "Infraestructura crítica" son claros con su descripción al lado, pero aparecen sin descripción en nav, breadcrumb ("En Ingeniería social") y tarjetas, donde el lector no técnico no los decodifica.
   Audiencias: 1 y 2.
   **Ajuste de copy** (o decisión menor de mostrar un rótulo más llano en esos lugares).

5. **"Porque acá nadie se las sabe todas" vs. cómo lo lee un reclutador.**
   Problema: la humildad es buena para la marca y complementa el nombre, pero leída literal y sin el nombre a la vista puede sonar a que el autor se declara sin autoridad. Es una apuesta de tono, defendible, pero conviene decidirla a conciencia. Aparece tanto en el footer como en el concepto general de marca. No la tocó el cambio de esta pasada.
   Audiencias: 5.
   **Decisión de fondo** (apuesta de tono), prioridad baja porque es coherente con todo el concepto de marca.

6. **Eco residual footer/kicker + "Esto es" como arranque de relleno.**
   Estado: el ítem 6 de la 4ª pasada (repetición palabra por palabra footer/kicker) quedó **parcialmente resuelto**. "Esto es " + minúscula rompe la cadena literal idéntica, pero la fórmula genérica "ciberseguridad explicada para…" sigue apareciendo dos veces en la misma página, solo desfasada dos palabras. Además el arreglo introdujo un costo chico: "Esto es…" es un deíctico presentacional de relleno ("esto" sin antecedente claro al pie de página) y un arranque de copy débil que un reclutador puede leer como frase sin pulir. El footer sigue sin nombrar la línea de análisis de casos (misma carencia que el tagline del masthead).
   Audiencias: 5 (percepción de pulido), 2 (sigue sin verse representada en el pie).
   **Ajuste de copy**, prioridad baja.

7. **Bloque 2 del footer mezcla RSS con lo legal y lo entierra.**
   Problema: RSS es una prestación para el lector y quedó a `text-xs` en el estrato legal/metadata, junto a licencia y año. La audiencia 4 (principal usuaria de RSS) lo encuentra pero deshidratado.
   Audiencias: 4.
   **Ajuste de copy / layout**, prioridad baja.

8. **"Lo escribe Juan Ignacio García" en singular.**
   Problema: la arquitectura quiere tolerar co-autores sin rediseño (RF-5); esta cadena habría que cambiarla si aparece un segundo autor.
   Audiencias: ninguna hoy; deuda futura.
   **Ajuste de copy**, sin urgencia.
