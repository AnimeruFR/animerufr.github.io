<template>
  <div class="page wrap">
    <span class="eyebrow">{{ t('nav.galerie') }}</span>
    <h1 class="ttl"><span class="accent">Galerie</span> d'Illustrations</h1>
    <p class="sub">{{ images.length }} illustrations : portraits, artworks, lieux et visuels clés. Le mode spoiler filtre ce qui dépasse ta progression.</p>

    <div class="view-toggle" style="margin: 22px 0;">
      <button v-for="f in filters" :key="f.k" :class="{active: filter === f.k}" @click="filter = f.k">{{ f.label }}</button>
    </div>

    <div class="masonry" style="margin-top: 20px">
      <div v-for="(img, i) in images" :key="img.src + i" class="masonry-item reveal img-wait" @click="openLightbox(i)">
        <img :src="img.src" :alt="img.alt" class="lazy-img" loading="lazy" decoding="async"
          @load="$event.target.classList.add('loaded'); $event.target.parentElement.classList.remove('img-wait')" />
        <div class="overlay"><span>{{ img.alt }}</span></div>
      </div>
    </div>

    <!-- Lightbox -->
    <div v-if="lbIdx !== null" class="lightbox" @click="lbIdx = null">
      <button class="lb-close" aria-label="Fermer" @click="lbIdx = null">✕</button>
      <button class="lb-nav lb-prev" aria-label="Précédente" @click.stop="step(-1)">‹</button>
      <div class="lb-content" @click.stop>
        <img :src="images[lbIdx].src" :alt="images[lbIdx].alt" />
        <p class="lb-caption">{{ images[lbIdx].alt }}</p>
      </div>
      <button class="lb-nav lb-next" aria-label="Suivante" @click.stop="step(1)">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { characters } from '../data/characters.js'
import { gallery } from '../data/gallery.js'
import { RZ } from '../data/data.js'
import { useSpoiler } from '../composables/useSpoiler.js'
import { asset } from '../assets.js'

const { t } = useI18n()
const { isSpoiler } = useSpoiler()

const filters = [
  { k: 'all', label: 'Tout' },
  { k: 'perso', label: 'Personnages' },
  { k: 'lieux', label: 'Lieux & carte' },
  { k: 'visuels', label: 'Visuels clés' },
]
const filter = ref('all')

const allImages = computed(() => {
  const imgs = [
    { src: '/assets/img/key-subaru-emilia.jpg', alt: 'Visuel clé — Subaru & Emilia', cat: 'visuels' },
    { src: '/assets/img/hero.jpg', alt: 'Visuel clé — Saison 2', cat: 'visuels' },
    { src: '/assets/img/key-roster.png', alt: 'Casting de Re:Zero', cat: 'visuels' },
    { src: '/assets/img/key-dvd1.png', alt: 'Visuel promotionnel', cat: 'visuels' },
    { src: '/assets/img/cover-vol1.webp', alt: 'Couverture — Light Novel vol. 1', cat: 'visuels' },
    { src: '/assets/img/world_map.png', alt: 'Carte du continent', cat: 'lieux' },
  ]
  // personnages : portrait + galerie (hors progression exclue)
  for (const c of characters) {
    if (isSpoiler(c.arc)) continue
    imgs.push({ src: `/assets/img/${c.id}.webp`, alt: c.name, cat: 'perso' })
    for (const g of gallery[c.id] || []) imgs.push({ src: `/assets/img/${g}.webp`, alt: c.name, cat: 'perso' })
  }
  // lieux
  for (const l of RZ.locations)
    if (l.img && !isSpoiler(l.arc)) imgs.push({ src: `/assets/img/${l.img}.webp`, alt: l.name, cat: 'lieux' })
  return imgs.map(i => ({ ...i, src: asset(i.src) }))
})
const images = computed(() => filter.value === 'all' ? allImages.value : allImages.value.filter(i => i.cat === filter.value))

const lbIdx = ref(null)
const openLightbox = (i) => { lbIdx.value = i }
const step = (d) => { const n = images.value.length; lbIdx.value = (lbIdx.value + d + n) % n }
const onKey = (e) => {
  if (lbIdx.value === null) return
  if (e.key === 'Escape') lbIdx.value = null
  else if (e.key === 'ArrowRight') step(1)
  else if (e.key === 'ArrowLeft') step(-1)
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.view-toggle { display: flex; gap: 10px; flex-wrap: wrap; }
.view-toggle button {
  background: var(--panel); border: 1px solid var(--border); color: var(--ink);
  padding: 8px 16px; border-radius: 20px; cursor: pointer; font-family: 'Inter', sans-serif; transition: all .3s ease;
}
.view-toggle button:hover, .view-toggle button.active { background: var(--gold); border-color: var(--gold); color: #000; }

.masonry { columns: 4 240px; column-gap: 16px; }
@media (max-width: 900px) { .masonry { columns: 3 200px; } }
@media (max-width: 600px) { .masonry { columns: 2 150px; } }

.masonry-item {
  break-inside: avoid; margin-bottom: 16px; position: relative; border-radius: 10px; overflow: hidden;
  cursor: zoom-in; border: 1px solid var(--border); transition: transform .3s ease, box-shadow .3s ease;
}
.masonry-item:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
.masonry-item img { width: 100%; display: block; }
.masonry-item .overlay {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.85)); padding: 22px 14px 12px;
  color: #fff; opacity: 0; transition: opacity .3s ease; font-family: 'Cinzel', serif; font-size: 0.82rem;
}
.masonry-item:hover .overlay { opacity: 1; }

.lightbox { position: fixed; inset: 0; background: rgba(3,3,8,.94); backdrop-filter: blur(6px); z-index: 1000;
  display: flex; align-items: center; justify-content: center; padding: 20px; }
.lb-content { position: relative; max-width: 100%; max-height: 100%; text-align: center; }
.lb-content img { max-width: 88vw; max-height: 84vh; object-fit: contain; border-radius: 8px; border: 1px solid var(--ring); }
.lb-caption { color: #fff; margin-top: 12px; font-family: 'Cinzel', serif; font-size: 1.1rem; }
.lb-close { position: absolute; top: 18px; right: 26px; background: none; border: none; color: #fff; font-size: 1.9rem; cursor: pointer; }
.lb-nav { position: absolute; top: 50%; transform: translateY(-50%); background: none; border: none; color: rgba(255,255,255,.75); font-size: 3rem; cursor: pointer; padding: 0 18px; transition: color .2s; }
.lb-nav:hover { color: #fff; } .lb-prev { left: 8px; } .lb-next { right: 8px; }
</style>
