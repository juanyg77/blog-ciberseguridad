import { defineCollection, reference } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

/*
  Esquemas de contenido (ARQUITECTURA.md sección 3 + patrón 1 "content-as-data /
  schema validado"). El build RECHAZA frontmatter inválido con mensaje claro:
  ésa es la red de seguridad del "un solo autor sin revisor".

  Colecciones: articulos · avisos · autores · secciones.
*/

const NIVELES = ['no-tecnico', 'tecnico'] as const;
const TIPOS_ARTICULO = ['analisis-caso', 'explicativo', 'coyuntura'] as const;
const IDIOMAS = ['es', 'en'] as const;

// --- Fuentes (RF-4 / CA-4) -------------------------------------------------
const fuente = z.object({
  titulo: z.string().min(1),
  url: z.string().url(),
  organismo: z.string().min(1),
  fecha: z.coerce.date().optional(),
});

// --- articulos -----------------------------------------------------------
const articulos = defineCollection({
  // `[!_]*` ignora archivos y carpetas que empiezan con "_" (notas / borradores
  // locales). `plantilla-articulo.md` SÍ se carga pero es `borrador: true`.
  loader: glob({ pattern: '**/[!_]*.{md,mdx}', base: './src/content/articulos' }),
  schema: ({ image }) =>
    z
      .object({
        titulo: z.string().min(1),
        // slug de la URL dentro de su nivel/idioma (organización humana en carpetas)
        slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug en kebab-case'),
        // RF-9: une la versión es y en del mismo artículo
        slugCanonico: z
          .string()
          .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slugCanonico en kebab-case'),
        idioma: z.enum(IDIOMAS),
        nivel: z.enum(NIVELES), // RF-1
        tipoArticulo: z.enum(TIPOS_ARTICULO),
        secciones: z.array(reference('secciones')).min(1), // RF-2
        autores: z.array(reference('autores')).min(1), // RF-5 / RF-6
        // 3.1 / 3.2: orden, RSS, "recientes" y filtro de visibilidad (<= ahora,
        // zona America/Argentina/Cordoba — ver src/lib/articulos.ts)
        fechaPublicacion: z.coerce.date(),
        // 3.1: opcional. Si existe y difiere, se muestra "Actualizado en <mes año>"
        fechaActualizacion: z.coerce.date().optional(),
        resumen: z.string().min(1).max(400),
        // 3.3: imagen en src/assets/images/... optimizada en build. En el
        // frontmatter, ruta relativa al archivo (ver CONTRIBUIR.md).
        portada: image().optional(),
        portadaAlt: z.string().optional(),
        tieneOpinion: z.boolean().default(false), // RF-3
        borrador: z.boolean().default(false), // 3.2: true = NUNCA se publica
        destacado: z.boolean().default(false),
        fuentes: z.array(fuente).default([]),
        tags: z.array(z.string()).default([]),
      })
      .refine(
        (d) => d.tipoArticulo !== 'analisis-caso' || d.fuentes.length >= 1,
        {
          message:
            'Un artículo tipo "analisis-caso" necesita al menos una fuente (RF-4 / CA-4).',
          path: ['fuentes'],
        },
      )
      .refine(
        (d) =>
          !d.fechaActualizacion ||
          d.fechaActualizacion.getTime() >= d.fechaPublicacion.getTime(),
        {
          message: 'fechaActualizacion no puede ser anterior a fechaPublicacion.',
          path: ['fechaActualizacion'],
        },
      ),
});

// --- avisos (RF-11 / CA-12) — NO son artículos --------------------------
const avisos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/avisos' }),
  schema: z.object({
    titulo: z.string().min(1),
    fecha: z.coerce.date(),
    activo: z.boolean().default(false),
  }),
});

// --- autores (RF-5 / RF-6) — multi-autor desde el día 1 -----------------
const credencial = z.object({
  nombre: z.string().min(1),
  emisor: z.string().min(1),
  url: z.string().url().optional(),
  fecha: z.coerce.date().optional(),
});

const autores = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.md', // ignora _plantilla-autor.md
    base: './src/content/autores',
  }),
  schema: ({ image }) =>
    z.object({
    nombre: z.string().min(1), // nombre real (RF-5)
    rol: z.string().min(1),
    foto: image(), // RF-5: foto visible. src/assets/images/autores/...
    fotoAlt: z.string().optional(),
    bio: z.string().min(1),
    enlaces: z.object({
      linkedin: z.string().url(),
      github: z.string().url(),
      web: z.string().url().optional(),
    }),
    credenciales: z.array(credencial).default([]), // D-11: vacío al día 1
    activo: z.boolean().default(true),
  }),
});

// --- secciones (RF-2 / CA-2) — catálogo como DATO ----------------------
const secciones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/secciones' }),
  schema: z.object({
    nombre: z.string().min(1),
    descripcion: z.string().min(1),
    // orden opcional para la navegación; a falta de él, alfabético
    orden: z.number().optional(),
  }),
});

export const collections = { articulos, avisos, autores, secciones };
