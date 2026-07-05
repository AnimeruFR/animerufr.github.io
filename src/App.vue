<template>
  <div id="app-root">
    <a href="#main" class="skip-link">Aller au contenu</a>
    <!-- Le fond animé ou statique peut être géré ici -->
    <div class="atmos" :style="{backgroundImage: isHome ? 'none' : atmosBg}"></div>

    <nav class="nav" :class="{scrolled}" aria-label="Navigation principale">
      <div class="brand" role="link" tabindex="0" aria-label="Accueil" @click="goHome" @keydown.enter="goHome"><span class="sigil"></span><span><span class="re">Re:</span><span class="zero">Zero</span></span></div>
      <div id="main-menu" class="menu" :class="{open:menuOpen}">
        <router-link v-for="n in NAV" :key="n.k" :to="n.h" :class="{active: $route.name === n.k || (n.k === 'personnages' && $route.name === 'personnage')}" @click="menuOpen = false">{{ n.label }}</router-link>
      </div>
      <div class="nav-tools">
        <div class="search-wrap">
          <input class="nav-search" v-model="q" placeholder="Rechercher…" aria-label="Rechercher"
            @keydown.enter="goFirstResult" @keydown.esc="q = ''" />
          <div v-if="q.trim().length >= 2" class="search-panel">
            <template v-if="searchResults.length">
              <a v-for="r in searchResults" :key="r.to + r.label" class="search-item" @click="goResult(r)">
                <span class="si-kind">{{ r.kind }}</span>
                <span class="si-label">{{ r.label }}</span>
                <span v-if="r.sub" class="si-sub">{{ r.sub }}</span>
              </a>
            </template>
            <div v-else class="search-empty">Aucun résultat.</div>
            <div v-if="searchHidden > 0" class="search-masked">
              {{ searchHidden }} résultat{{ searchHidden > 1 ? 's' : '' }} masqué{{ searchHidden > 1 ? 's' : '' }} par le mode spoiler
            </div>
          </div>
        </div>
        <button class="spoiler-btn" :title="'Mode spoiler : ' + levelLabel" aria-label="Régler le mode spoiler"
          @click="pickerOpen = true">✦ <span class="sp-lvl">{{ levelLabel }}</span></button>
        <div class="theme-pick" :class="{open:themeOpen}">
          <button class="theme-btn" aria-label="Thème par camp" @click.stop="themeOpen = !themeOpen"></button>
          <div class="theme-menu" role="menu">
            <button v-for="t in THEMES" :key="t" class="swatch" :class="{active:theme===t}"
              :title="THEME_LABELS[t] || t" :aria-label="'Thème ' + (THEME_LABELS[t] || t)" :aria-pressed="theme===t ? 'true' : 'false'"
              :style="{background:'linear-gradient(135deg,'+TC[t][0]+','+TC[t][1]+')'}" @click="setTheme(t)"></button>
          </div>
        </div>
        <button class="burger" :class="{open:menuOpen}" :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-label="Menu" aria-controls="main-menu" @click="menuOpen = !menuOpen"><span></span><span></span><span></span></button>
      </div>
    </nav>

    <main id="main" tabindex="-1">
      <router-view />
    </main>

    <SpoilerPicker />

    <footer class="footer">
      <div class="brand" style="justify-content:center" @click="goHome"><span class="sigil"></span><span><span class="re">Re:</span><span class="zero">Zero</span></span></div>
      <p style="margin-top:12px">Encyclopédie fan non officielle — hommage à l'œuvre de Tappei Nagatsuki & Shinichirō Otsuka.</p>
      <p class="src">Sources : <a href="https://rezero.fandom.com/wiki/Re:Zero_Wiki" target="_blank" rel="noopener">Re:Zero Wiki</a> · <a href="https://rezerowebnovelfr.wordpress.com" target="_blank" rel="noopener">rezerowebnovelfr</a></p>
      <div class="easter" @click="rbd()">✦ Si tu lis ceci… reviens de la mort ✦</div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { RZ } from './data/data.js'
import { characters } from './data/characters.js'
import { seasons, episodes } from './data/episodes.js'
import { music } from './data/music.js'
import { useSpoiler } from './composables/useSpoiler.js'
import SpoilerPicker from './components/SpoilerPicker.vue'
import { useHead } from '@unhead/vue'
import { arcsDetail } from './data/arcs-detail.js'
import { SITE_URL, SITE_NAME, DEFAULT_DESC, DEFAULT_OG_IMAGE } from './site.js'
import { asset } from './assets.js'

const router = useRouter()
const route = useRoute()
const { chosen, pickerOpen, isSpoiler, levelLabel } = useSpoiler()

/* ---------- SEO : titre + description + Open Graph par page (C2) ---------- */
const TITLES = {
  home: null, oeuvre: "L'Œuvre", personnages: 'Personnages', monde: 'Monde & Magie',
  arcs: 'Les Arcs', episodes: 'Épisodes', musiques: 'Musiques', lieux: 'Lieux',
  bestiaire: 'Bestiaire', glossaire: 'Glossaire', galerie: 'Galerie', 'routes-if': 'Routes IF', quiz: 'Quiz',
}
const pageMeta = computed(() => {
  const n = route.name
  let label = TITLES[n] || null
  if (n === 'personnage') { const c = characters.find(x => x.id === route.params.id); label = c ? c.name : 'Personnage' }
  else if (n === 'arc') { const a = RZ.arcs.find(x => x.n === parseInt(route.params.n, 10)); label = a ? `Arc ${a.n} — ${a.title}` : 'Arc' }
  const title = label ? `${label} · ${SITE_NAME}` : SITE_NAME
  let desc = DEFAULT_DESC
  if (n === 'personnage') { const c = characters.find(x => x.id === route.params.id); if (c) desc = (c.lead || '').replace(/<[^>]+>/g, '').slice(0, 180) }
  else if (n === 'arc') { const d = arcsDetail[parseInt(route.params.n, 10)]; if (d) desc = d.resume.slice(0, 180) }
  return { title, desc, url: SITE_URL + route.path }
})
useHead({
  title: () => pageMeta.value.title,
  meta: [
    { name: 'description', content: () => pageMeta.value.desc },
    { property: 'og:title', content: () => pageMeta.value.title },
    { property: 'og:description', content: () => pageMeta.value.desc },
    { property: 'og:url', content: () => pageMeta.value.url },
    { property: 'og:image', content: SITE_URL + DEFAULT_OG_IMAGE },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'canonical', href: () => pageMeta.value.url }],
})

const NAV = [
  { h: '/', k: 'home', label: 'Accueil' },
  { h: '/oeuvre', k: 'oeuvre', label: "L'Œuvre" },
  { h: '/personnages', k: 'personnages', label: 'Personnages' },
  { h: '/monde', k: 'monde', label: 'Monde & Magie' },
  { h: '/arcs', k: 'arcs', label: 'Arcs' },
  { h: '/episodes', k: 'episodes', label: 'Épisodes' },
  { h: '/musiques', k: 'musiques', label: 'Musiques' },
  { h: '/lieux', k: 'lieux', label: 'Lieux' },
  { h: '/bestiaire', k: 'bestiaire', label: 'Bestiaire' },
  { h: '/glossaire', k: 'glossaire', label: 'Glossaire' },
  { h: '/galerie', k: 'galerie', label: 'Galerie' },
  { h: '/routes-if', k: 'routes-if', label: 'Routes IF' },
  { h: '/quiz', k: 'quiz', label: 'Quiz' }
]

const ATMOS = { home:"bg-r2dj7j", oeuvre:"bg-r2dj7j", personnages:"bg-5d5zv8", personnage:"bg-5d5zv8",
  monde:"bg-we27dq", arcs:"bg-dpdmwj", arc:"bg-dpdmwj", episodes:"bg-dpdmwj", musiques:"bg-vq3pgm", lieux:"bg-k9jm5q", bestiaire:"bg-6lwx1q",
  glossaire:"bg-vq3pgm", galerie:"bg-5d5zv8", "routes-if":"bg-6qp5gx", quiz:"bg-6qp5gx" }
const THEMES = ["satella","emilia","rem","ram","roswaal","beatrice","reinhard","subaru",
  "vollachia","culte","kararagi","gusteko","clair"]
const TC = { satella:["#8b5cf6","#7fd8ff"], emilia:["#74d4ff","#cdeeff"], rem:["#5b8eff","#a9c8ff"],
  ram:["#ff7ea8","#ffd0e0"], roswaal:["#a877ff","#e7c873"], beatrice:["#e7c873","#ffe9a8"],
  reinhard:["#e7c873","#ff9b7a"], subaru:["#e9384b","#b59bff"],
  vollachia:["#c62f39","#e7c873"], culte:["#5da85a","#c9c2d6"], kararagi:["#2bbf9e","#e7c873"],
  gusteko:["#9fc9e8","#eaf6ff"], clair:["#f2eff8","#6d3fd4"] }
const THEME_LABELS = { satella:"Satella (défaut)", emilia:"Emilia", rem:"Rem", ram:"Ram", roswaal:"Roswaal",
  beatrice:"Beatrice", reinhard:"Reinhard", subaru:"Subaru", vollachia:"Vollachia", culte:"Culte des Sorcières",
  kararagi:"Kararagi", gusteko:"Gusteko", clair:"Mode clair" }

const scrolled = ref(false)
const menuOpen = ref(false)
const themeOpen = ref(false)
const theme = ref(typeof window !== 'undefined' ? (localStorage.getItem("rz-theme") || "satella") : "satella")
const q = ref("")

/* ---------- recherche globale (respecte le mode spoiler) ---------- */
const norm = (s) => (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "") // sans accents
const searchIndex = computed(() => {
  const idx = []
  for (const c of characters)
    idx.push({ kind: "Personnage", label: c.name, sub: c.epi || c.role, to: "/personnage/" + c.id, arc: c.arc,
      key: norm(c.name + " " + (c.epi || "") + " " + (c.role || "") + " " + (c.kanji || "")) })
  for (const a of RZ.arcs)
    idx.push({ kind: "Arc", label: `Arc ${a.n} — ${a.title}`, sub: a.status, to: "/arc/" + a.n, arc: a.n,
      key: norm(a.title + " " + a.romaji + " arc " + a.n) })
  for (const l of RZ.locations)
    idx.push({ kind: "Lieu", label: l.name, sub: l.tag, to: "/lieux", arc: l.arc, key: norm(l.name + " " + l.tag) })
  for (const t of RZ.terms)
    idx.push({ kind: "Glossaire", label: t.t, sub: null, to: "/glossaire", arc: t.arc, key: norm(t.t) })
  for (const o of RZ.objects)
    idx.push({ kind: "Objet", label: o.name, sub: null, to: "/glossaire", arc: o.arc, key: norm(o.name) })
  for (const o of RZ.orgs)
    idx.push({ kind: "Organisation", label: o.name, sub: null, to: "/glossaire", arc: o.arc, key: norm(o.name) })
  idx.push({ kind: "Interactif", label: "Quiz & test de personnalité", sub: "Teste tes connaissances", to: "/quiz", key: norm("quiz test personnalité quel personnage connaissances") })
  for (const b of RZ.beasts)
    idx.push({ kind: "Bestiaire", label: b.name, sub: b.tag, to: "/bestiaire", arc: b.arc, key: norm(b.name + " " + b.tag) })
  for (const se of seasons)
    for (const e of episodes[se.s])
      idx.push({ kind: "Épisode", label: `Ép. ${e.abs} — ${e.fr || e.romaji}`, sub: se.label, to: "/episodes", arc: e.arc,
        key: norm((e.fr || "") + " " + e.romaji + " episode " + e.abs) })
  for (const se of music.seasons)
    for (const song of se.songs)
      idx.push({ kind: "Musique", label: song.t, sub: song.by + " · " + se.label, to: "/musiques",
        key: norm(song.t + " " + song.by) })
  return idx
})
const searchState = computed(() => {
  const needle = norm(q.value.trim())
  if (needle.length < 2) return { visible: [], hidden: 0 }
  const hits = searchIndex.value.filter(it => it.key.includes(needle))
  const visible = hits.filter(it => !isSpoiler(it.arc))
  return { visible: visible.slice(0, 8), hidden: hits.length - visible.length }
})
const searchResults = computed(() => searchState.value.visible)
const searchHidden = computed(() => searchState.value.hidden)
const goResult = (r) => { q.value = ""; menuOpen.value = false; router.push(r.to) }
const goFirstResult = () => { if (searchResults.value.length) goResult(searchResults.value[0]) }

onMounted(() => {
  if (typeof window !== 'undefined' && window.__fx) {
    setTimeout(window.__fx.scan, 100)
  }
})

watch(() => route.path, () => {
  q.value = ""
  if (typeof window !== 'undefined' && window.__fx) {
    window.__fx.spell()
    setTimeout(window.__fx.scan, 100)
  }
})

const rbd = () => {
  if (typeof window !== 'undefined' && window.__fx) window.__fx.rbd()
}

const isHome = computed(() => route.name === 'home')
const atmosBg = computed(() => {
  const k = ATMOS[route.name] || "bg-r2dj7j"
  return `url(${asset('assets/img/' + k + '.jpg')})`
})

const goHome = () => {
  router.push('/')
}

const setTheme = (t) => {
  theme.value = t
  themeOpen.value = false
  if (typeof window !== 'undefined') {
    if (t === "satella") document.documentElement.removeAttribute("data-theme")
    else document.documentElement.setAttribute("data-theme", t)
    localStorage.setItem("rz-theme", t)
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  setTheme(theme.value)
  window.addEventListener("scroll", handleScroll, { passive:true })
  // premier lancement : proposer de régler la protection anti-spoiler
  // (pas de harcèlement : un refus vaut pour toute la session de navigation)
  if (!chosen.value && !sessionStorage.getItem('rz-spoiler-dismissed')) pickerOpen.value = true
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style>
/* Les styles globaux sont dans css/app.css, mais si on a besoin on peut les mettre ici */
</style>
