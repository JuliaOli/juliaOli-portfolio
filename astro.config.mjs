// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://seu-usuario.github.io',
  base: '/juliaOli-portfolio/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});