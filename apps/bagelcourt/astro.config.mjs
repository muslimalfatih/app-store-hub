// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bagelcourt.muslimalfatih.dev',
  output: 'static',
  // Canonical URLs have no trailing slash: src/pages/privacy.astro -> dist/privacy.html -> /privacy
  trailingSlash: 'never',
  build: { format: 'file' },
  // React renders components to static HTML; only `client:*` islands ship JS.
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
