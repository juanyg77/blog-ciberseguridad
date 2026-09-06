# Requisitos del proyecto

> Documento generado a partir de una entrevista de descubrimiento de producto.
> Fecha: 2026-09-02.

## Resumen

El proyecto es un **blog de ciberseguridad** con dos líneas de contenido claramente
diferenciadas:

- **Divulgación para público no técnico**: explicaciones en lenguaje simple sobre
  amenazas y hábitos de seguridad cotidianos (qué es el phishing y cómo evitarlo,
  estafas por SMS/mail, higiene digital básica). Pensado para que una persona sin
  conocimientos técnicos —por ejemplo un familiar preocupado que acaba de recibir
  un mensaje sospechoso— entienda qué le pasa y qué hacer.
- **Análisis técnicos de casos**: estudios de incidentes famosos y en general ya
  cerrados (Colonial Pipeline, WannaCry, ataques a infraestructura crítica y
  ataques "comunes"), explicando qué pasó, cómo ocurrió y qué se aprende. Queda la
  puerta abierta a analizar ocasionalmente algún caso reciente en el futuro, pero
  el foco inicial son casos ya cerrados y explicaciones atemporales.

**Objetivo principal**: que el blog sea un recurso **confiable y bien hecho**. El
autor asume que si el contenido es sólido, la visibilidad profesional (perfil
reconocible en el rubro, networking, interés de reclutadores) llega como
consecuencia. Esa visibilidad es un resultado deseado pero **secundario**: no debe
condicionar decisiones de producto.

**Autor y contexto**: el proyecto lo lleva adelante una sola persona, estudiante
de la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas
(TUDAI, IUA/UNDEF), a ~6 meses de recibirse, en proceso de reorientación
profesional hacia la ciberseguridad (inicio de la Licenciatura en Ciberseguridad
en la UGR; interés en blue team e infraestructura crítica). El blog funciona
además como bitácora de aprendizaje y como primera pieza de presencia profesional
pública, complementaria a LinkedIn. No tiene experiencia laboral formal en IT.

**Audiencias objetivo** (sin orden de prioridad estricto; las cuatro cuentan):

1. Familiar o persona no técnica que googlea una duda concreta tras recibir un
   mensaje/estafa ("¿es verdad este SMS de un paquete retenido?"). Es la audiencia
   más difícil de atraer, pero se la quiere servir igual.
2. Curioso que escuchó una noticia o vio un video y busca entender un caso
   ("¿qué pasó con Colonial Pipeline?") sin tecnicismos.
3. Contactos de LinkedIn del autor, a quienes se les comparte el enlace: tráfico
   asegurado.
4. Estudiante o colega técnico que busca un análisis detallado de un incidente.

## Requerimientos funcionales

- **RF-1 — Lectura de artículos por nivel**: el lector puede acceder a los
  artículos separados por nivel de audiencia (no técnico / técnico).
- **RF-2 — Lectura de artículos por categoría/sección**: además del nivel, los
  artículos se agrupan por temática/sección, y la estructura permite **agregar
  nuevas secciones a futuro** sin rehacer el sitio.
- **RF-3 — Ficha de artículo con distinción hecho/opinión**: cada artículo
  presenta el desarrollo basado en hechos y, cuando corresponde, un **bloque final
  claramente identificado como opinión/análisis del autor**, visualmente separado
  del resto.
- **RF-4 — Citado de fuentes**: cada artículo puede incluir y mostrar una lista de
  fuentes (preferentemente oficiales: informes, avisos de organismos, documentación
  del proveedor afectado).
- **RF-5 — Sección "Sobre mí / Sobre nosotros"**: página con el perfil del autor,
  su **nombre real y su foto visibles**, una breve biografía y enlaces externos
  (LinkedIn, GitHub, certificaciones). La sección está redactada de forma que
  admita **más de un autor/editor en el futuro** sin rediseño.
- **RF-6 — Autoría visible en cada artículo**: cada artículo muestra el nombre
  real (y foto) de quien lo escribió.
- **RF-7 — Compartir en redes**: desde cada artículo se puede compartir el enlace
  en redes sociales de forma directa (uno o dos clics).
- **RF-8 — Formulario de contacto**: existe un formulario de contacto directo cuyo
  destino es el autor. (PENDIENTE DE DEFINIR: casilla/medio de recepción de los
  mensajes.)
- **RF-9 — Preparación multi-idioma**: el contenido se publica **solo en español**
  en esta etapa, pero la **estructura técnica del sitio debe estar preparada desde
  el día 1** para incorporar una versión en inglés **por artículo** (opcional, no
  todos los artículos la tendrán), sin necesidad de rehacer la arquitectura de
  contenidos ni la navegación.
- **RF-10 — Analítica de lectores**: el autor puede consultar, por artículo, la
  **cantidad de visitas** y **de dónde provienen los lectores** (fuente/canal de
  tráfico: buscador, redes, enlace directo, referencias). No alcanza con una
  métrica global genérica del sitio.
- **RF-11 — Aviso de pausa**: el autor puede publicar una entrada de tipo "aviso"
  (por ejemplo, "me tomo una pausa") que quede visible como comunicación al lector.
- **RF-12 — Funcionamiento autónomo**: el sitio sigue disponible y navegable sin
  intervención aunque no se publique contenido nuevo durante meses.
- **RF-13 — Buscador interno** *(deseable, no día 1)*: cuando el volumen de
  artículos lo justifique, el lector puede buscar un tema dentro del sitio.
- **RF-14 — Comentarios** *(futuro, condicionado a que exista comunidad)*: los
  lectores pueden comentar los artículos.
- **RF-15 — Suscripción por correo / newsletter** *(futuro, condicionado a que
  exista comunidad)*: los lectores pueden suscribirse para recibir los nuevos
  artículos por mail.

## Fuera de scope

- **Tutoriales, guías paso a paso, walkthroughs de herramientas o de técnicas de
  hacking**: explícitamente fuera. El autor está empezando (nivel Security+ en
  curso) y no quiere enseñar lo que todavía no domina. No se descarta para un
  futuro lejano, pero no forma parte de este proyecto.
- **Servicios / contratación desde el sitio** (asesorías, charlas, consultoría):
  fuera por ahora; el autor considera que aún no tiene la trayectoria para
  ofrecerlo. Posible reevaluación futura, eventualmente canalizado a través del
  formulario de contacto.
- **Contenido en video o podcast**: fuera.
- **Foro o comunidad**: fuera en esta etapa; es una aspiración a futuro.
- **Cobertura de actualidad semanal** (estar al día con brechas y CVE del
  momento): el blog **no asume ningún compromiso** de cobertura periódica de
  novedades. Se permite alguna nota puntual de coyuntura solo si el autor la
  encuentra interesante, sin periodicidad ni obligación.
- **Traducción completa del sitio al inglés**: fuera del alcance inicial. El foco
  de audiencia es LATAM. Solo se prepara la estructura (RF-9); la traducción
  efectiva de artículos es posterior y selectiva.
- **Extensión mínima obligatoria por artículo**: no se define un mínimo rígido
  (más allá de que un artículo no puede ser dos frases); tampoco se busca la
  extensión máxima. Criterio: suficiente para ser correcto, sin aburrir.

## Criterios de aceptación

Los criterios están redactados para responderse con **sí/no** al probar el sitio.
Los umbrales numéricos de adopción (CA-9 a CA-11) son metas iniciales y
**ajustables**; el autor es consciente de que el arranque puede ser lento.

- **CA-1**: Desde la página principal, un lector puede llegar a la lista de
  artículos "no técnicos" y a la de "técnicos" en **1 clic** cada una.
- **CA-2**: Existen al menos **2 secciones temáticas** navegables y agregar una
  tercera sección no requiere cambios de diseño ni de navegación (se documenta el
  procedimiento).
- **CA-3**: En un artículo que incluye opinión, el bloque de opinión del autor
  está **visualmente diferenciado** (título o recuadro propio) y un lector que
  hojea el artículo puede identificar sin leerlo entero qué parte es opinión.
- **CA-4**: Un artículo de análisis de caso muestra una sección de **fuentes** con
  al menos un enlace a una fuente oficial.
- **CA-5**: La sección "Sobre mí / Sobre nosotros" muestra **nombre real + foto +
  bio + enlaces** a LinkedIn y GitHub, y todos los enlaces abren el destino
  correcto.
- **CA-6**: Cada artículo publicado muestra el **nombre del autor** de forma
  visible.
- **CA-7**: Desde cualquier artículo, compartirlo en al menos **2 redes** se logra
  en **≤ 2 clics** y el enlace compartido abre el artículo correcto con su título.
- **CA-8**: El formulario de contacto, completado con datos válidos, hace llegar
  el mensaje al autor (verificado con un envío de prueba) y el remitente ve una
  confirmación de envío.
- **CA-9**: Se puede publicar un artículo **solo en español** y el sitio funciona
  con normalidad; y se puede agregar una versión en inglés a **un** artículo
  concreto **sin** modificar la estructura del sitio ni la de los demás artículos
  (verificado con un artículo de prueba bilingüe).
- **CA-10**: El panel de analítica permite ver, para un artículo específico, su
  número de **visitas** y un desglose de **canales de origen** del tráfico, con
  datos correspondientes a ese artículo y no solo al sitio completo.
- **CA-11**: Con el sitio sin publicaciones nuevas durante un período prolongado,
  todas las páginas existentes siguen cargando y navegándose sin error.
- **CA-12**: El autor puede publicar una entrada de "aviso de pausa" y esta queda
  visible para el lector como una comunicación (no como un artículo de contenido
  más).
- **CA-13** *(meta de proceso, medible mensualmente)*: durante los primeros 3
  meses, el autor logra publicar en promedio **al menos 1 artículo por semana**
  (contando ambas líneas de contenido).
- **CA-14** *(meta de adopción a 6 meses, ajustable)*: al menos **1 artículo**
  recibe visitas provenientes de **buscadores** (tráfico orgánico), lo que indica
  que el contenido es encontrable por fuera del círculo de contactos directos.
- **CA-15** *(meta de adopción a 12 meses, ajustable)*: el autor puede señalar al
  menos **1 contacto o conversación de networking** (mensaje de un reclutador,
  invitación, consulta de un colega) atribuible a que la persona leyó el blog.

## Mantenimiento

- **Responsable**: una sola persona (el autor) se encarga de escribir, revisar y
  publicar. No hay segundo editor ni revisor en esta etapa.
- **Frecuencia objetivo**: aproximadamente **1 artículo no técnico + 1 técnico por
  semana**, con flexibilidad. Estimación de esfuerzo por pieza: un explicativo no
  técnico (p. ej. "qué es el phishing") puede resolverse en ~2 horas; un análisis
  de caso técnico grande lleva del orden de 2 a 3 días de trabajo.
- **Carga de contenido**: manual, por el autor.
- **Continuidad**: el sitio debe seguir operativo sin mantenimiento durante pausas
  largas (parciales, cuestiones personales). Al autor le incomoda que el blog
  "se note quieto"; la mitigación acordada es publicar un **aviso de pausa**
  (RF-11 / CA-12) cuando anticipe una interrupción prolongada.
- **Evolución del equipo**: se contempla la posibilidad de **sumar editores/autores
  colaboradores** más adelante si aparece alguien interesado; por eso la sección
  de autoría y "Sobre nosotros" debe tolerar múltiples personas sin rediseño.

## Pendiente de definir

- **Nombre del blog / marca**: no hay un nombre decidido. (El nombre "Capa 8"
  figuraba como provisorio en trabajo previo; el autor no lo da por confirmado.)
- **Dominio**: sin definir. Independientemente del nombre del dominio, el nombre
  real y la foto del autor van visibles en el sitio.
- **Medio de recepción del formulario de contacto** (casilla de correo u otro).
- **Contenido concreto de "Sobre mí"**: alcance de la bio, si incluye CV
  descargable, qué certificaciones se listan.
- **Umbrales definitivos de los criterios de adopción** (CA-13 a CA-15): se
  revisarán con datos reales una vez el blog esté online.
