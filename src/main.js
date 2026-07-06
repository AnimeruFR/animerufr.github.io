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

// Le JS s'exécute : on active le masquage des .reveal pour l'animation d'apparition.
// (Si ce module ne se charge pas, .has-js est absent → contenu visible = fail-safe.)
if (typeof document !== 'undefined') document.documentElement.classList.add('has-js')

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
