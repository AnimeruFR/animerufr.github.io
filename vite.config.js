import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'path'

export default defineConfig({
  // Déployé sous https://animerufr.github.io/ReZero/ (GitHub Pages, dépôt « ReZero »).
  // Pour un déploiement à la racine (dépôt renommé animerufr.github.io), mettre base: '/'.
  base: '/ReZero/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'sitemap.xml'],
      manifest: {
        name: 'Re:Zero — Encyclopédie',
        short_name: 'Re:Zero DB',
        description: 'L\'encyclopédie complète de Re:Zero kara Hajimeru Isekai Seikatsu',
        theme_color: '#06070d',
        background_color: '#06070d',
        icons: [
          {
            src: 'assets/img/hero.jpg', // Temporaire, il faudra une vraie icône 192x192
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: 'assets/img/hero.jpg', // Temporaire, il faudra une vraie icône 512x512
            sizes: '512x512',
            type: 'image/jpeg'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
