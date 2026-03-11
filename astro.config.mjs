import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://joao-zip.github.io',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
