// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// PENDENTE: trocar pelo domínio real do 2B Studio antes de publicar.
const SITE_URL = process.env.SITE_URL ?? 'https://2bstudio.example';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'always' },
});
