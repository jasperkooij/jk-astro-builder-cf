// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ['sharp']
    }
  },

  adapter: cloudflare(),
  integrations: [svelte(), tailwind({ applyBaseStyles: false })]
});