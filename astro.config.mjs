// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['sharp']
    }
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },

  adapter: cloudflare(),
  integrations: [svelte()]
});