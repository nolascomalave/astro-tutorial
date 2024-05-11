import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://nolastro.netlify.app/',
  vite: {
    css: {
      transformer: "sass"
    }
  },
  integrations: [preact()]
});