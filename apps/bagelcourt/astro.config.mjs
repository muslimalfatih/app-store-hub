// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bagelcourt.muslimalfatih.dev',
  output: 'static',
  // Canonical URLs have no trailing slash: src/pages/privacy.astro -> dist/privacy.html -> /privacy
  trailingSlash: 'never',
  build: { format: 'file' },
});
