// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://il-tuo-dominio.com', // ← aggiorna con il tuo dominio
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), sitemap()]
})
