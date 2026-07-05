import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { routes } from './router'

import fr from './locales/fr.js'
import en from './locales/en.js'
import jp from './locales/jp.js'
import { initFx } from './fx.js'
import { characters } from './data/characters.js'
import { RZ } from './data/data.js'

import '../css/app.css'

// Pré-rend TOUTES les routes (statiques + une par personnage et par arc) : chaque
// page devient un vrai fichier HTML → liens directs fonctionnels sur GitHub Pages
// (pas de 404 au rafraîchissement) et meilleur référencement.
export const includedRoutes = (paths) => [
  ...paths.filter(p => !p.includes(':')),
  ...characters.map(c => `/personnage/${c.id}`),
  ...RZ.arcs.map(a => `/arc/${a.n}`),
]

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL, scrollBehavior(to) { return to.hash ? false : { top: 0 } } },
  ({ app, router, routes, isClient, initialState }) => {
    // scroll vers les ancres (#loc-*, #nation-*, #sec-*) — géré à la main car le
    // scrollBehavior `el:` est neutralisé par la pile vite-ssg/router
    if (isClient) {
      router.afterEach((to) => {
        if (!to.hash) return
        setTimeout(() => {
          const el = document.querySelector(to.hash)
          // pas de behavior explicite : le `scroll-behavior:smooth` CSS s'applique,
          // et les environnements en mouvement réduit sautent directement à l'ancre
          if (el) el.scrollIntoView({ block: 'start' })
        }, 200)
      })
    }
    const i18n = createI18n({
      legacy: false,
      locale: 'fr',
      fallbackLocale: 'en',
      messages: { fr, en, jp }
    })
    app.use(i18n)

    if (isClient) {
      initFx()
    }
  },
)
