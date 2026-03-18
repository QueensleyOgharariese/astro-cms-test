// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap'; // ← commentato temporaneamente

export default defineConfig({
  site: 'https://jovial-trifle-e7b055.netlify.app',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    // sitemap(), // ← commentato temporaneamente
  ],
});