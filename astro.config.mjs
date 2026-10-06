import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hafidzrdwn.dev',
  integrations: [sitemap()],
  compressHTML: true,
});
