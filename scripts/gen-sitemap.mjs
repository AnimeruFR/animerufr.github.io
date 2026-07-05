/* Génère public/sitemap.xml à partir des routes statiques + données
   (une URL par personnage et par arc). Lancé en prebuild.
   L'URL de base vient de src/site.js (SITE_URL). */
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

import { SITE_URL } from '../src/site.js'
import { characters } from '../src/data/characters.js'
import { RZ } from '../src/data/data.js'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const staticPaths = [
  '/', '/oeuvre', '/personnages', '/monde', '/arcs', '/episodes', '/musiques',
  '/lieux', '/bestiaire', '/glossaire', '/galerie', '/routes-if', '/quiz',
]
const charPaths = characters.map(c => `/personnage/${c.id}`)
const arcPaths = RZ.arcs.map(a => `/arc/${a.n}`)

const all = [...staticPaths, ...charPaths, ...arcPaths]
const today = new Date().toISOString().slice(0, 10)

const url = (p) => {
  const priority = p === '/' ? '1.0' : p.split('/').length > 2 ? '0.6' : '0.8'
  return `  <url><loc>${SITE_URL}${p}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Généré par scripts/gen-sitemap.mjs — base = SITE_URL dans src/site.js -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map(url).join('\n')}
</urlset>
`
writeFileSync(resolve(ROOT, 'public/sitemap.xml'), xml)
writeFileSync(resolve(ROOT, 'public/robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
console.log(`sitemap.xml : ${all.length} URL (${charPaths.length} personnages, ${arcPaths.length} arcs) — base ${SITE_URL}`)
