/**
 * Diccionario de cadenas de interfaz — español.
 * ARQUITECTURA.md D-10 / patrón 3: todas las cadenas de UI viven acá desde el
 * día 1, aunque solo exista español. Activar la UI en inglés más adelante =
 * crear `src/i18n/en.ts` con las mismas claves y encender el idioma. No se
 * rehace nada.
 *
 * Regla: ningún texto de interfaz se escribe suelto en componentes o páginas.
 * Todo pasa por `t()` (ver `src/i18n/index.ts`).
 */
const es = {
  sitio: {
    nombre: 'El Que Se Las Sabe Todas',
    descripcion:
      'Ciberseguridad explicada para el que cree que a él no le va a pasar',
    tagline: 'Ciberseguridad explicada para el que cree que a él no le va a pasar',
    metaHome:
      'Blog de ciberseguridad en dos niveles: explicaciones desde cero sobre estafas y amenazas comunes, y análisis técnicos de incidentes reales. Sin humo y sin alarmismo.',
  },
  nav: {
    inicio: 'Inicio',
    // Etiquetas visibles del "nivel" de RF-1. El campo interno sigue siendo
    // `nivel: no-tecnico | tecnico` y los slugs de ruta no cambian.
    noTecnico: 'Modo humano',
    tecnico: 'Modo nerd',
    secciones: 'Secciones',
    sobre: 'Sobre mí',
    contacto: 'Contacto',
    buscar: 'Buscar',
    recientes: 'Lo último',
    saltarAlContenido: 'Saltar al contenido',
    menu: 'Menú',
    cerrar: 'Cerrar',
    abrirMenu: 'Abrir el menú de navegación',
  },
  tema: {
    // Texto del toggle = ACCIÓN (lo que pasás a ser al tocarlo), no el estado
    // actual. En oscuro el botón dice "Modo claro".
    claro: 'Modo claro',
    oscuro: 'Modo oscuro',
    alternar: 'Cambiar tema',
  },
  articulo: {
    porNivel: { 'no-tecnico': 'Modo humano', tecnico: 'Modo nerd' },
    porTipo: {
      'analisis-caso': 'Análisis de caso',
      explicativo: 'Explicativo',
      coyuntura: 'Coyuntura',
    },
    publicado: 'Publicado el',
    actualizado: 'Actualizado en',
    lectura: 'Lectura de {min} min',
    porAutor: 'Por',
    enSeccion: 'En',
    fuentes: 'Fuentes',
    fuentesIntro: 'Material consultado para este artículo:',
    opinionTitulo: 'Opinión / análisis del autor',
    opinionAclaracion:
      'Lo que sigue es la interpretación del autor, separada de los hechos verificables de arriba.',
    compartir: 'Compartir',
    compartirEn: 'Compartir en {red}',
    copiarEnlace: 'Copiar enlace',
    copiado: 'Copiado',
    volverAlListado: 'Volver al listado',
    sinResultados: 'Todavía no hay artículos publicados en esta vista.',
    tambienEnIdioma: 'Este artículo también está disponible en {idioma}.',
    idioma: { es: 'español', en: 'inglés' },
    tiempoRelativo: {
      hoy: 'hoy',
      ayer: 'ayer',
      haceDias: 'hace {n} días',
      haceMeses: 'hace {n} meses',
      haceAnios: 'hace {n} años',
    },
  },
  aviso: {
    etiqueta: 'Aviso',
    verMas: 'Leer el aviso completo',
  },
  carrusel: {
    region: 'Artículos destacados',
    anterior: 'Ver anteriores',
    siguiente: 'Ver siguientes',
  },
  // Descripción canónica de cada nivel (RF-1). Se usa en la home y en las
  // páginas de listado /no-tecnico y /tecnico.
  nivel: {
    descripcion: {
      'no-tecnico':
        'Cómo funcionan las amenazas y estafas más comunes, y qué hacer, contado desde cero.',
      tecnico:
        'Análisis técnicos de incidentes reales: cómo pasaron, qué salió mal y qué se puede aprender.',
    },
  },
  home: {
    destacados: 'Destacados',
    primeraVez: 'Primera vez acá',
    puertaNoTecnicoTitulo: 'Modo humano',
    puertaNoTecnicoCta: 'Empezar por lo básico',
    puertaTecnicoTitulo: 'Modo nerd',
    puertaTecnicoCta: 'Ir a los análisis',
    ultimo: 'Lo último',
    todosLosArticulos: 'Todos los artículos',
    explorarSecciones: 'Explorar por sección',
    verTodasLasSecciones: 'Ver todas las secciones',
  },
  secciones: {
    titulo: 'Secciones',
    intro:
      'Los ejes temáticos del blog. Elegí uno para ver sus artículos; la lista se filtra sin recargar.',
    todas: 'Todas',
    conteo: '{n} artículo(s)',
    vacia: 'Todavía no hay artículos en esta sección.',
    verSeccion: 'Ver la página de esta sección',
  },
  buscador: {
    titulo: 'Buscar en el sitio',
    metaDescripcion:
      'Buscá un tema, un caso o una amenaza dentro del blog: phishing, ransomware, estafas por mensaje, análisis de incidentes y más.',
    placeholder: 'Buscá un tema, un caso, una amenaza…',
    ayuda: 'Buscá en todos los artículos publicados del sitio.',
  },
  contacto: {
    titulo: 'Contacto',
    intro:
      'Una corrección, una duda, una propuesta de colaboración: escribime y me llega directo.',
    nombre: 'Tu nombre',
    email: 'Tu correo',
    asunto: 'Asunto',
    mensaje: 'Mensaje',
    enviar: 'Enviar mensaje',
    requerido: 'Campo obligatorio',
    graciasTitulo: 'Mensaje enviado',
    graciasTexto:
      'Gracias por escribir. Te respondo apenas pueda al correo que dejaste.',
    graciasVolver: 'Volver al inicio',
    errorEnvio:
      'No se pudo enviar el mensaje. Probá de nuevo en un rato o escribime por otro canal.',
    captchaFalta: 'Resolvé el captcha antes de enviar.',
    otroCanal: 'También podés escribir directo a',
    casilla: 'contacto@elquelassabetodas.com',
  },
  autor: {
    credenciales: 'Credenciales verificables',
    enlaces: 'Enlaces',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    escritoPor: 'Escrito por',
  },
  licencia: {
    nota: 'Este texto está bajo licencia CC BY 4.0. Podés reutilizarlo citando a {autor} y enlazando al original.',
    pie: 'Podés compartir este contenido citando la fuente (licencia CC BY 4.0)',
    imagenesTerceros:
      'Las imágenes de terceros no están cubiertas por esta licencia y se citan aparte.',
  },
  pie: {
    hechoPor: 'Lo escribe {autor} · Alta Gracia, Córdoba, Argentina',
    tagline:
      'Explicaciones simples para que las entienda hasta mi abuela, y contenido técnico para el ingeniero de la NASA. Porque acá nadie se las sabe todas.',
    rss: 'RSS',
  },
  error404: {
    titulo: 'Esta página no existe',
    texto: 'Puede que el enlace esté mal o que el artículo todavía no esté publicado.',
    volver: 'Ir al inicio',
  },
} as const;

export default es;
export type Diccionario = typeof es;
