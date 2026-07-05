/* =====================================================================
   Tests d'intégrité des données de l'encyclopédie (C7).
   Garde-fous pour tous les futurs ajouts de contenu : unicité des ids,
   intégrité référentielle, fichiers images présents, plages d'arcs.
   ===================================================================== */
import { describe, it, expect } from 'vitest'
import { existsSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

import { characters, groups } from '../src/data/characters.js'
import { RZ } from '../src/data/data.js'
import { seasons, episodes } from '../src/data/episodes.js'
import { arcsDetail } from '../src/data/arcs-detail.js'
import { music } from '../src/data/music.js'
import { knowledge, knowledgeStars, personalityQuestions } from '../src/data/quiz.js'
import { gallery } from '../src/data/gallery.js'
import { SPOILER_OPTIONS, SPOILER_MAX, SPOILER_DEFAULT } from '../src/composables/useSpoiler.js'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const IMG = (f) => resolve(ROOT, 'public/assets/img', f)
const ARC_MIN = 1, ARC_MAX = 10

/* ------------------------------------------------------- personnages */
describe('characters.js', () => {
  const ids = characters.map(c => c.id)
  const groupIds = groups.map(g => g.id)

  it('ids uniques', () => {
    const dupes = ids.filter((x, i) => ids.indexOf(x) !== i)
    expect(dupes).toEqual([])
  })

  it('champs obligatoires et groupe valide', () => {
    for (const c of characters) {
      expect(c.id, c.id).toMatch(/^[a-z0-9-]+$/)
      expect(c.name, c.id).toBeTruthy()
      expect(c.lead, c.id).toBeTruthy()
      expect(groupIds, `groupe de ${c.id}`).toContain(c.group)
    }
  })

  it('arc de première apparition dans [1, 10]', () => {
    for (const c of characters) {
      expect(c.arc, `arc de ${c.id}`).toBeGreaterThanOrEqual(ARC_MIN)
      expect(c.arc, `arc de ${c.id}`).toBeLessThanOrEqual(ARC_MAX)
    }
  })

  it('related pointe vers des ids existants', () => {
    for (const c of characters)
      for (const r of c.related || [])
        expect(ids, `${c.id} -> ${r}`).toContain(r)
  })

  it('portrait webp présent et > 2 Ko pour chaque fiche', () => {
    for (const c of characters) {
      const f = IMG(`${c.id}.webp`)
      expect(existsSync(f), `image manquante : ${c.id}.webp`).toBe(true)
      expect(statSync(f).size, `image trop légère : ${c.id}.webp`).toBeGreaterThan(2048)
    }
  })

  it('sections : titres non vides, spoiler dans [arc du perso, 10]', () => {
    for (const c of characters)
      for (const s of c.sections || []) {
        expect(s.h, c.id).toBeTruthy()
        expect(s.html, `${c.id} / ${s.h}`).toBeTruthy()
        if (s.spoiler != null) {
          expect(s.spoiler, `${c.id} / ${s.h}`).toBeGreaterThanOrEqual(c.arc)
          expect(s.spoiler, `${c.id} / ${s.h}`).toBeLessThanOrEqual(ARC_MAX)
        }
      }
  })

  it('capacités : chaînes ou objets {t, arc} valides', () => {
    for (const c of characters)
      for (const ab of c.abilities || []) {
        if (typeof ab === 'string') { expect(ab, c.id).toBeTruthy(); continue }
        expect(ab.t, c.id).toBeTruthy()
        expect(ab.arc, c.id).toBeGreaterThanOrEqual(ARC_MIN)
        expect(ab.arc, c.id).toBeLessThanOrEqual(ARC_MAX)
      }
  })
})

/* ------------------------------------------------------------ data.js */
describe('data.js', () => {
  it('10 arcs numérotés de 1 à 10', () => {
    expect(RZ.arcs.map(a => a.n)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    for (const a of RZ.arcs) {
      expect(a.title, `arc ${a.n}`).toBeTruthy()
      expect(a.summary, `arc ${a.n}`).toBeTruthy()
    }
  })

  it('4 nations avec ancre et coordonnées carte', () => {
    expect(RZ.nations).toHaveLength(4)
    for (const n of RZ.nations) {
      expect(n.id).toMatch(/^nation-/)
      expect(n.map).toHaveLength(2)
    }
  })

  it('lieux : ancre unique, coordonnées dans [0, 1000], image existante si déclarée', () => {
    const locIds = RZ.locations.map(l => l.id)
    expect(new Set(locIds).size).toBe(locIds.length)
    for (const l of RZ.locations) {
      expect(l.id, l.name).toMatch(/^loc-/)
      for (const coord of l.map) {
        expect(coord, l.name).toBeGreaterThanOrEqual(0)
        expect(coord, l.name).toBeLessThanOrEqual(1000)
      }
      if (l.img) expect(existsSync(IMG(`${l.img}.webp`)), `image de ${l.name}`).toBe(true)
    }
  })

  it('objets et organisations : nom + description', () => {
    for (const list of [RZ.objects, RZ.orgs])
      for (const o of list) {
        expect(o.name).toBeTruthy()
        expect(o.d, o.name).toBeTruthy()
        if (o.arc != null) {
          expect(o.arc, o.name).toBeGreaterThanOrEqual(ARC_MIN)
          expect(o.arc, o.name).toBeLessThanOrEqual(ARC_MAX)
        }
      }
  })

  it('culte : 7 péchés, sorcières et bestiaire non vides', () => {
    expect(RZ.cult.archbishops).toHaveLength(7)
    expect(RZ.cult.witches.length).toBeGreaterThan(0)
    expect(RZ.beasts.length).toBeGreaterThan(0)
    expect(RZ.terms.length).toBeGreaterThan(0)
  })

  it('réception, doublage et étoiles présents (A7-A9)', () => {
    expect(RZ.work.reception.length).toBeGreaterThanOrEqual(3)
    expect(RZ.work.dub.cast.length).toBeGreaterThanOrEqual(10)
    expect(RZ.work.stars.length).toBeGreaterThanOrEqual(8)
  })
})

/* --------------------------------------------------------- épisodes */
describe('episodes.js', () => {
  it('saisons terminées complètes : S1=25, S2=25, S3=16', () => {
    expect(episodes[1]).toHaveLength(25)
    expect(episodes[2]).toHaveLength(25)
    expect(episodes[3]).toHaveLength(16)
    expect(episodes[4].length).toBeGreaterThan(0)
  })

  it('numérotation absolue continue et sans trous', () => {
    const abs = seasons.flatMap(se => episodes[se.s].map(e => e.abs))
    expect(abs).toEqual(abs.map((_, i) => i + 1))
  })

  it('chaque épisode a un titre (FR ou romaji), un arc valide et une date', () => {
    for (const se of seasons)
      for (const e of episodes[se.s]) {
        expect(e.fr || e.romaji, `S${se.s}E${e.n}`).toBeTruthy()
        expect(e.arc, `S${se.s}E${e.n}`).toBeGreaterThanOrEqual(ARC_MIN)
        expect(e.arc, `S${se.s}E${e.n}`).toBeLessThanOrEqual(6)
        expect(e.date, `S${se.s}E${e.n}`).toBeTruthy()
      }
  })
})

/* ---------------------------------------------------- sous-pages arcs */
describe('arcs-detail.js', () => {
  it('une page par arc (1-10), avec correspondances et déroulé', () => {
    for (let n = 1; n <= 10; n++) {
      const d = arcsDetail[n]
      expect(d, `arc ${n}`).toBeTruthy()
      expect(d.corresp.web, `arc ${n}`).toBeTruthy()
      expect(d.corresp.ln, `arc ${n}`).toBeTruthy()
      expect(d.resume, `arc ${n}`).toBeTruthy()
      expect(d.stages.length, `arc ${n}`).toBeGreaterThanOrEqual(3)
      for (const s of d.stages) {
        expect(s.t, `arc ${n}`).toBeTruthy()
        expect(s.html, `arc ${n} / ${s.t}`).toBeTruthy()
      }
    }
  })

  it('les arcs adaptés en anime (1-6) déclarent leur correspondance anime', () => {
    for (let n = 1; n <= 6; n++) expect(arcsDetail[n].corresp.anime, `arc ${n}`).toBeTruthy()
  })
})

/* ----------------------------------------------------------- musiques */
describe('music.js', () => {
  it('4 saisons, chaque chanson a un titre et un interprète', () => {
    expect(music.seasons).toHaveLength(4)
    for (const se of music.seasons)
      for (const s of se.songs) {
        expect(s.t, se.label).toBeTruthy()
        expect(s.by, `${se.label} / ${s.t}`).toBeTruthy()
        expect(s.type, `${se.label} / ${s.t}`).toBeTruthy()
      }
  })
})

/* --------------------------------------------------------------- quiz */
describe('quiz.js', () => {
  const charIds = new Set(characters.map(c => c.id))

  it('questions de connaissance : 4 options, index correct valide, arc valide', () => {
    for (const q of [...knowledge, ...knowledgeStars]) {
      expect(q.a, q.q).toHaveLength(4)
      expect(q.c, q.q).toBeGreaterThanOrEqual(0)
      expect(q.c, q.q).toBeLessThan(4)
      expect(q.why, q.q).toBeTruthy()
      expect(q.arc, q.q).toBeGreaterThanOrEqual(ARC_MIN)
      expect(q.arc, q.q).toBeLessThanOrEqual(ARC_MAX)
    }
  })

  it('test de personnalité : pondérations vers des ids de personnages existants', () => {
    for (const q of personalityQuestions) {
      expect(q.a.length, q.q).toBeGreaterThanOrEqual(2)
      for (const opt of q.a) {
        expect(opt.t, q.q).toBeTruthy()
        for (const id of Object.keys(opt.w))
          expect(charIds, `${q.q} -> ${id}`).toContain(id)
      }
    }
  })

  it('chaque personnage-résultat est atteignable dès la progression par défaut', () => {
    const byId = Object.fromEntries(characters.map(c => [c.id, c.arc]))
    const targets = new Set(personalityQuestions.flatMap(q => q.a.flatMap(o => Object.keys(o.w))))
    for (const id of targets)
      expect(byId[id], `résultat ${id} au-delà de l'anime`).toBeLessThanOrEqual(SPOILER_DEFAULT)
  })
})

/* ------------------------------------------------------------ galerie */
describe('gallery.js', () => {
  const charIds = new Set(characters.map(c => c.id))

  it('chaque clé de galerie est un personnage existant, avec ≥2 images présentes >2 Ko', () => {
    for (const [id, imgs] of Object.entries(gallery)) {
      expect(charIds, id).toContain(id)
      expect(imgs.length, id).toBeGreaterThanOrEqual(2)
      for (const g of imgs) {
        const f = IMG(`${g}.webp`)
        expect(existsSync(f), `image galerie manquante : ${g}`).toBe(true)
        expect(statSync(f).size, `image galerie trop légère : ${g}`).toBeGreaterThan(2048)
      }
    }
  })
})

/* ------------------------------------------------------- mode spoiler */
describe('useSpoiler', () => {
  it('les options couvrent les arcs 1-9 + « tout »', () => {
    const values = SPOILER_OPTIONS.map(o => o.value)
    expect(values).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, SPOILER_MAX])
  })
  it('le défaut protège tout ce qui dépasse l\'anime intégralement diffusé', () => {
    expect(SPOILER_DEFAULT).toBe(5)
  })
})
