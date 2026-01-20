// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jasperkooij.com',

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['sharp']
    }
  },

  adapter: cloudflare(),
  integrations: [svelte(), sitemap()]
});