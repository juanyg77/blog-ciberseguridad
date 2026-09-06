// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio canónico del sitio. Configurable por variable de entorno.
const SITE = process.env.PUBLIC_SITE_URL || 'https://elquelassabetodas.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap({
      // Fuera del sitemap: 404, la confirmación del formulario y los avisos
      // (todas son noindex). Los borradores/artículos con fecha futura ya no
      // generan página, así que quedan excluidos de por sí.
      filter: (page) =>
        !/\/404\/?$/.test(page) &&
        !page.includes('/contacto/gracias') &&
        !/\/aviso\//.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
