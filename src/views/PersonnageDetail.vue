<template>
  <div class="page wrap char-detail-page" v-if="char">
    <div style="margin-bottom: 24px;">
      <router-link to="/personnages" style="color: var(--ink-soft); text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; display: inline-flex; align-items: center; gap: 8px;">
        <span style="font-size: 1.2rem;">&larr;</span> Retour aux personnages
      </router-link>
    </div>

    <!-- Barrière anti-spoiler pleine page -->
    <div v-if="blocked" class="char-block">
      <div class="cb-rune">✦</div>
      <h2>Attention, spoiler</h2>
      <p>Ce personnage apparaît à l'<strong>arc {{ char.arc }}</strong>, au-delà de ta progression actuelle ({{ levelLabel }}).</p>
      <div class="cb-actions">
        <button class="btn" @click="pageRevealed = true">Afficher quand même</button>
        <button class="btn ghost" @click="pickerOpen = true">Changer ma progression</button>
        <router-link to="/personnages" class="btn ghost">Retour</router-link>
      </div>
    </div>

    <!-- Bannière artwork large -->
    <header v-if="!blocked" class="char-banner" :style="{'--c': char.color || 'var(--violet)'}">
      <div class="char-banner-bg" :style="{backgroundImage: `url(/assets/img/${char.id}.webp)`}"></div>
      <div class="char-banner-veil"></div>
      <div class="char-banner-inner">
        <span class="eyebrow" :style="{color: char.color || '#bdecff'}">{{ char.epi || char.group }}</span>
        <h1 id="sec-apercu" class="char-banner-name">{{ char.name }}</h1>
        <span v-if="char.kanji" class="char-banner-kanji">{{ char.kanji }}</span>
      </div>
    </header>

    <div v-if="!blocked" class="detail-grid">
      <!-- Portrait -->
      <div class="media portrait-col">
        <div class="img-wrap" :style="{'--hc': char.color || '#fff', 'box-shadow': '0 0 40px ' + (char.color || '#fff') + '33'}">
          <img :src="'/assets/img/' + char.id + '.webp'" :alt="'Portrait de ' + char.name"
            decoding="async" fetchpriority="high" style="width:100%; height:auto; border-radius:12px; display:block;"
            @error="$event.target.src='/assets/img/hero.jpg'" />
          <div class="char-badge" v-if="char.role" :style="{backgroundColor: char.color || '#fff'}">{{ char.role }}</div>
        </div>
      </div>

      <!-- Infos -->
      <div class="info">
        <!-- Onglets Fiche / Galerie -->
        <div v-if="hasGallery" class="char-tabs" role="tablist" aria-label="Sections de la fiche">
          <button class="char-tab" role="tab" :aria-selected="tab === 'fiche'" :class="{active: tab === 'fiche'}" @click="tab = 'fiche'">Fiche</button>
          <button class="char-tab" role="tab" :aria-selected="tab === 'galerie'" :class="{active: tab === 'galerie'}" @click="tab = 'galerie'">Galerie ({{ galleryImgs.length }})</button>
        </div>

        <!-- Onglet GALERIE -->
        <div v-if="tab === 'galerie'" class="char-gallery">
          <div class="char-gallery-grid">
            <button v-for="(g, i) in galleryImgs" :key="g" class="cg-item img-wait" :aria-label="'Agrandir l’image ' + (i + 1) + ' de ' + char.name" @click="openLightbox(i)">
              <img :src="'/assets/img/' + g + '.webp'" class="lazy-img" :alt="char.name + ' — illustration ' + (i + 1)"
                loading="lazy" decoding="async" @load="$event.target.classList.add('loaded'); $event.target.parentElement.classList.remove('img-wait')">
            </button>
          </div>
          <p class="cg-src">Illustrations issues de Re:Zero Wiki (Fandom), hébergées localement.</p>
        </div>

        <!-- Onglet FICHE -->
        <template v-else>
        <blockquote v-if="char.quote" style="font-size: 1.2rem; font-style: italic; color: var(--ink-soft); border-left: 3px solid; padding-left: 20px; margin-bottom: 40px;" :style="{'border-color': char.color || '#bdecff'}">
          « {{ char.quote }} »
        </blockquote>

        <p class="lead" style="font-size: 1.15rem; line-height: 1.8; margin-bottom: 40px;" v-html="char.lead"></p>

        <!-- Stats Grid -->
        <div class="grid cols2" style="gap: 16px; margin-bottom: 40px;">
          <div class="stat-card" v-if="char.race">
            <span class="stat-lbl">Race</span>
            <span class="stat-val">{{ char.race }}</span>
          </div>
          <div class="stat-card" v-if="char.age">
            <span class="stat-lbl">Âge</span>
            <span class="stat-val">{{ char.age }}</span>
          </div>
          <div class="stat-card" v-if="char.aff">
            <span class="stat-lbl">Affiliation</span>
            <span class="stat-val">{{ char.aff }}</span>
          </div>
          <div class="stat-card" v-if="char.status">
            <span class="stat-lbl">Statut</span>
            <span class="stat-val">{{ char.status }}</span>
          </div>
          <div class="stat-card" v-if="char.va">
            <span class="stat-lbl">Voix (Seiyū)</span>
            <span class="stat-val">{{ char.va }}</span>
          </div>
          <div class="stat-card" v-if="char.vf">
            <span class="stat-lbl">Voix (VF)</span>
            <span class="stat-val">{{ char.vf }}</span>
          </div>
          <div class="stat-card" v-if="char.arc">
            <span class="stat-lbl">Première apparition</span>
            <span class="stat-val">Arc {{ char.arc }}</span>
          </div>
        </div>

        <div v-if="char.abilities && char.abilities.length > 0" style="margin-bottom: 40px;">
          <h3 id="sec-capacites" style="font-size: 1.5rem; margin-bottom: 16px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-soft);">Capacités & Magie</h3>
          <ul style="list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 12px;">
            <li v-for="(ab, i) in char.abilities" :key="i" style="background: var(--panel); padding: 8px 16px; border-radius: 20px; border: 1px solid var(--border); font-size: 0.9rem;">
              <SpoilerGate v-if="abArc(ab)" :arc="abArc(ab)" inline>{{ abLabel(ab) }}</SpoilerGate>
              <template v-else>{{ abLabel(ab) }}</template>
            </li>
          </ul>
        </div>

        <!-- Sections détaillées -->
        <div v-for="(sec, idx) in char.sections" :key="idx" style="margin-bottom: 40px;">
          <h3 class="sec-h" :id="'sec-' + idx" style="font-size: 1.8rem; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);" :style="{borderColor: char.color ? (char.color+'40') : ''}">
            {{ sec.h }}
          </h3>
          <SpoilerGate v-if="sec.spoiler" :arc="sec.spoiler">
            <div class="text-content" style="line-height: 1.7; color: var(--ink-soft);" v-html="sec.html"></div>
          </SpoilerGate>
          <div v-else class="text-content" style="line-height: 1.7; color: var(--ink-soft);" v-html="sec.html"></div>
        </div>

        <!-- Fiches liées -->
        <div v-if="relatedChars.length" style="margin-bottom: 40px;">
          <h3 id="sec-liees" style="font-size: 1.5rem; margin-bottom: 16px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-soft);">Fiches liées</h3>
          <div class="related">
            <router-link v-for="r in relatedChars" :key="r.id" :to="'/personnage/' + r.id">{{ r.name }}</router-link>
          </div>
        </div>
        </template>
      </div>

      <!-- Sommaire latéral (masqué en mode galerie) -->
      <TocSidebar v-if="tab === 'fiche'" :items="tocItems" class="toc-col" />
    </div>

    <!-- Lightbox galerie -->
    <div v-if="lightboxIdx !== null" class="cg-lightbox" @click="lightboxIdx = null">
      <button class="cg-lb-close" aria-label="Fermer" @click="lightboxIdx = null">✕</button>
      <button class="cg-lb-nav cg-lb-prev" aria-label="Précédente" @click.stop="lbStep(-1)">‹</button>
      <img :src="'/assets/img/' + galleryImgs[lightboxIdx] + '.webp'" :alt="char.name + ' — illustration ' + (lightboxIdx + 1)" @click.stop>
      <button class="cg-lb-nav cg-lb-next" aria-label="Suivante" @click.stop="lbStep(1)">›</button>
      <span class="cg-lb-count">{{ lightboxIdx + 1 }} / {{ galleryImgs.length }}</span>
    </div>
  </div>
  <div v-else class="page wrap" style="text-align:center; padding: 100px 0;">
    <h2>Personnage introuvable.</h2>
    <router-link to="/personnages" style="color: #bdecff;">Retour à la liste</router-link>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { characters } from '../data/characters.js'
import { gallery } from '../data/gallery.js'
import { useSpoiler } from '../composables/useSpoiler.js'
import SpoilerGate from '../components/SpoilerGate.vue'
import TocSidebar from '../components/TocSidebar.vue'

const route = useRoute()
const { isSpoiler, levelLabel, pickerOpen } = useSpoiler()

const char = computed(() => {
  return characters.find(c => c.id === route.params.id)
})

/* ---- galerie (onglet + lightbox) ---- */
const tab = ref('fiche')
const galleryImgs = computed(() => (char.value && gallery[char.value.id]) || [])
const hasGallery = computed(() => galleryImgs.value.length > 0)
const lightboxIdx = ref(null)
const openLightbox = (i) => { lightboxIdx.value = i }
const lbStep = (d) => {
  const n = galleryImgs.value.length
  lightboxIdx.value = (lightboxIdx.value + d + n) % n
}
watch(() => route.params.id, () => { tab.value = 'fiche'; lightboxIdx.value = null })
const onKey = (e) => {
  if (lightboxIdx.value === null) return
  if (e.key === 'Escape') lightboxIdx.value = null
  else if (e.key === 'ArrowRight') lbStep(1)
  else if (e.key === 'ArrowLeft') lbStep(-1)
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))

/* barrière pleine page si le personnage apparaît au-delà de la progression */
const pageRevealed = ref(false)
watch(() => route.params.id, () => { pageRevealed.value = false })
const blocked = computed(() => !!char.value && isSpoiler(char.value.arc) && !pageRevealed.value)

/* capacités : chaîne simple ou { t, arc } si elle spoile un arc ultérieur */
const abLabel = (ab) => typeof ab === 'string' ? ab : ab.t
const abArc = (ab) => typeof ab === 'string' ? null : ab.arc

const relatedChars = computed(() => {
  if (!char.value || !char.value.related) return []
  return char.value.related
    .map(id => characters.find(c => c.id === id))
    .filter(c => c && !isSpoiler(c.arc))
})

const tocItems = computed(() => {
  if (!char.value || blocked.value) return []
  const items = [{ id: 'sec-apercu', label: 'Aperçu' }]
  if (char.value.abilities && char.value.abilities.length) items.push({ id: 'sec-capacites', label: 'Capacités & Magie' })
  ;(char.value.sections || []).forEach((s, i) => items.push({ id: 'sec-' + i, label: s.h }))
  if (relatedChars.value.length) items.push({ id: 'sec-liees', label: 'Fiches liées' })
  return items
})
</script>

<style scoped>
.char-banner {
  position: relative;
  height: clamp(200px, 34vw, 300px);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 40px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}
.char-banner-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center 22%;
  transform: scale(1.08);
  filter: saturate(1.05);
}
.char-banner-veil {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(6,7,13,.92) 0%, rgba(6,7,13,.55) 45%, transparent 80%),
    linear-gradient(0deg, rgba(6,7,13,.9), transparent 55%),
    radial-gradient(120% 100% at 100% 0%, color-mix(in srgb, var(--c) 30%, transparent), transparent 60%);
}
.char-banner-inner {
  position: absolute;
  left: clamp(20px, 4vw, 46px);
  bottom: clamp(18px, 3vw, 34px);
  right: 20px;
}
.char-banner-name {
  font-size: clamp(2.2rem, 6vw, 4rem);
  line-height: 1.05;
  margin: 4px 0 2px;
  text-shadow: 0 2px 20px rgba(0,0,0,.7);
}
.char-banner-kanji {
  font-family: serif;
  color: rgba(255,255,255,.6);
  font-size: clamp(1rem, 2.4vw, 1.6rem);
  letter-spacing: 4px;
}
.detail-grid {
  display: grid;
  grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
  gap: 48px;
  align-items: start;
}
/* onglets Fiche / Galerie */
.char-tabs { display: flex; gap: 10px; margin-bottom: 28px; border-bottom: 1px solid var(--border); }
.char-tab {
  background: none; border: none; cursor: pointer; padding: 10px 6px; margin-bottom: -1px;
  font-family: var(--disp); font-size: .78rem; letter-spacing: .12em; text-transform: uppercase;
  color: var(--ink-dim); border-bottom: 2px solid transparent; transition: color .25s, border-color .25s;
}
.char-tab:hover { color: var(--ink-soft); }
.char-tab.active { color: var(--ink); border-bottom-color: var(--violet); }
.char-gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 14px; }
.cg-item {
  padding: 0; border: 1px solid var(--border); border-radius: 10px; overflow: hidden; cursor: zoom-in;
  background: var(--panel-solid); aspect-ratio: 4/3; transition: transform .3s, box-shadow .3s, border-color .3s;
}
.cg-item:hover { transform: translateY(-4px); border-color: var(--ring); box-shadow: var(--shadow); }
.cg-item img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
.cg-src { margin-top: 18px; color: var(--ink-dim); font-size: .82rem; font-style: italic; }
/* lightbox */
.cg-lightbox {
  position: fixed; inset: 0; z-index: 10001; background: rgba(3,3,8,.94); backdrop-filter: blur(6px);
  display: grid; place-items: center; padding: 28px; animation: fade .25s ease;
}
.cg-lightbox img { max-width: 90vw; max-height: 86vh; border-radius: 10px; border: 1px solid var(--ring); box-shadow: 0 30px 90px rgba(0,0,0,.75); }
.cg-lb-close { position: absolute; top: 18px; right: 26px; font-size: 1.9rem; background: none; border: none; color: #fff; cursor: pointer; }
.cg-lb-nav { position: absolute; top: 50%; transform: translateY(-50%); font-size: 3rem; background: none; border: none; color: rgba(255,255,255,.75); cursor: pointer; padding: 0 18px; transition: color .2s; }
.cg-lb-nav:hover { color: #fff; }
.cg-lb-prev { left: 8px; } .cg-lb-next { right: 8px; }
.cg-lb-count { position: absolute; bottom: 20px; left: 0; right: 0; text-align: center; font-family: var(--disp); letter-spacing: .2em; color: rgba(255,255,255,.7); font-size: .8rem; }
.portrait-col { position: sticky; top: 120px; }
.toc-col { display: none; }
@media (min-width: 1240px) {
  .detail-grid { grid-template-columns: minmax(240px, 300px) minmax(0, 1fr) 210px; }
  .toc-col { display: block; }
}
.img-wrap {
  position: relative;
  border-radius: 12px;
  padding: 8px;
  background: var(--panel);
  border: 1px solid var(--border);
}
.char-badge {
  position: absolute;
  top: 24px;
  right: -12px;
  padding: 6px 16px;
  border-radius: 4px;
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}
.stat-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.stat-lbl {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-dim);
}
.stat-val {
  font-size: 1.1rem;
  font-weight: 500;
}
.text-content :deep(strong) {
  color: var(--ink);
  font-weight: 600;
}
.text-content :deep(em) {
  color: var(--ink);
}
/* barrière pleine page */
.char-block {
  max-width: 620px;
  margin: 60px auto;
  text-align: center;
  padding: 60px 40px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: linear-gradient(180deg, var(--panel), rgba(16,19,36,.35));
}
.char-block .cb-rune {
  font-size: 2.4rem;
  color: var(--violet);
  text-shadow: 0 0 24px var(--ring);
  margin-bottom: 12px;
  animation: spin 14s linear infinite;
  display: inline-block;
}
.char-block h2 { font-size: 1.8rem; margin-bottom: 14px; }
.char-block p { color: var(--ink-soft); }
.cb-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 28px; }
@media (max-width: 900px) {
  .detail-grid { grid-template-columns: 1fr; gap: 40px; }
  .portrait-col { position: static; max-width: 380px; }
}
</style>
