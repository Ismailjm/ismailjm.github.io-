// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ieljamiy.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
