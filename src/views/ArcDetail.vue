<template>
  <div class="page wrap" v-if="arc">
    <div style="margin-bottom: 24px;">
      <router-link to="/arcs" class="back-link">&larr; Tous les arcs</router-link>
    </div>

    <!-- Barrière anti-spoiler pleine page -->
    <div v-if="blocked" class="arc-block">
      <div class="cb-rune">✦</div>
      <h2>Attention, spoiler</h2>
      <p>Cette page détaille l'<strong>arc {{ arc.n }}</strong>, au-delà de ta progression actuelle ({{ levelLabel }}).</p>
      <div class="cb-actions">
        <button class="btn" @click="pageRevealed = true">Afficher quand même</button>
        <button class="btn ghost" @click="pickerOpen = true">Changer ma progression</button>
        <router-link to="/arcs" class="btn ghost">Retour</router-link>
      </div>
    </div>

    <div v-else class="detail-grid">
      <div class="arc-main">
        <span class="eyebrow">Arc {{ arc.n }} · {{ arc.status }} — {{ arc.romaji }}</span>
        <h1 id="sec-apercu" class="ttl">{{ arc.title }}</h1>
        <p class="sub">{{ arc.summary }}</p>

        <!-- Correspondances -->
        <div class="grid corresp-grid" style="margin: 26px 0 8px">
          <div class="stat-card"><span class="stat-lbl">Web novel</span><span class="stat-val">{{ detail.corresp.web }}</span></div>
          <div class="stat-card"><span class="stat-lbl">Light novel</span><span class="stat-val">{{ detail.corresp.ln }}</span></div>
          <div class="stat-card" v-if="detail.corresp.anime"><span class="stat-lbl">Anime</span><span class="stat-val">{{ detail.corresp.anime }}</span></div>
          <div class="stat-card" v-if="detail.corresp.manga"><span class="stat-lbl">Manga</span><span class="stat-val">{{ detail.corresp.manga }}</span></div>
        </div>

        <h2 class="sec-h" id="sec-resume">Résumé</h2>
        <p class="lead">{{ detail.resume }}</p>

        <h2 class="sec-h" id="sec-deroule">Le déroulé</h2>
        <div class="tl">
          <div v-for="(st, i) in detail.stages" :key="i" class="tl-i" :id="'sec-etape-' + i">
            <span class="y">Étape {{ i + 1 }}</span>
            <h3>{{ st.t }}</h3>
            <p v-html="st.html"></p>
          </div>
        </div>

        <template v-if="detail.diffWebLn && detail.diffWebLn.length">
          <h2 class="sec-h" id="sec-diff-web">Web novel ↔ light novel</h2>
          <ul class="diff-list">
            <li v-for="(d, i) in detail.diffWebLn" :key="i">{{ d }}</li>
          </ul>
        </template>

        <template v-if="detail.diffAnime">
          <h2 class="sec-h" id="sec-diff-anime">Différences avec l'anime</h2>
          <p>{{ detail.diffAnime }}</p>
        </template>

        <!-- Navigation entre arcs -->
        <div class="arc-nav">
          <router-link v-if="arc.n > 1" :to="'/arc/' + (arc.n - 1)" class="btn ghost">&larr; Arc {{ arc.n - 1 }}</router-link>
          <span v-else></span>
          <router-link v-if="arc.n < 10" :to="'/arc/' + (arc.n + 1)" class="btn ghost">Arc {{ arc.n + 1 }} &rarr;</router-link>
        </div>

        <p class="arc-src">Sources : Re:Zero Wiki (Arc {{ arc.n }}) · Wikipédia FR (correspondances) · rezerowebnovelfr.</p>
      </div>

      <TocSidebar :items="tocItems" class="toc-col" />
    </div>
  </div>
  <div v-else class="page wrap" style="text-align:center; padding: 100px 0;">
    <h2>Arc introuvable.</h2>
    <router-link to="/arcs" style="color:#bdecff">Retour aux arcs</router-link>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { RZ } from '../data/data.js'
import { arcsDetail } from '../data/arcs-detail.js'
import { useSpoiler } from '../composables/useSpoiler.js'
import TocSidebar from '../components/TocSidebar.vue'

const route = useRoute()
const { isSpoiler, levelLabel, pickerOpen } = useSpoiler()

const n = computed(() => parseInt(route.params.n, 10))
const arc = computed(() => RZ.arcs.find(a => a.n === n.value))
const detail = computed(() => arcsDetail[n.value])

const pageRevealed = ref(false)
watch(n, () => { pageRevealed.value = false })
const blocked = computed(() => !!arc.value && isSpoiler(arc.value.n) && !pageRevealed.value)

const tocItems = computed(() => {
  if (!detail.value || blocked.value) return []
  const items = [
    { id: 'sec-apercu', label: 'Aperçu' },
    { id: 'sec-resume', label: 'Résumé' },
    { id: 'sec-deroule', label: 'Le déroulé' },
  ]
  detail.value.stages.forEach((st, i) => items.push({ id: 'sec-etape-' + i, label: st.t }))
  if (detail.value.diffWebLn && detail.value.diffWebLn.length) items.push({ id: 'sec-diff-web', label: 'Web ↔ LN' })
  if (detail.value.diffAnime) items.push({ id: 'sec-diff-anime', label: 'Différences anime' })
  return items
})
</script>

<style scoped>
.detail-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 48px; align-items: start; }
.toc-col { display: none; }
@media (min-width: 1240px) {
  .detail-grid { grid-template-columns: minmax(0, 1fr) 210px; }
  .toc-col { display: block; }
}
.arc-main { max-width: 880px; }
.corresp-grid { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; }
.stat-card { background: var(--panel); border: 1px solid var(--border); border-radius: 8px; padding: 14px 16px; display: flex; flex-direction: column; gap: 6px; }
.stat-lbl { font-size: .72rem; text-transform: uppercase; letter-spacing: .1em; color: var(--ink-dim); }
.stat-val { font-size: 1rem; font-weight: 500; }
.diff-list { padding-left: 22px; color: var(--ink-soft); }
.diff-list li { margin-bottom: 10px; }
.arc-nav { display: flex; justify-content: space-between; gap: 12px; margin-top: 46px; }
.arc-src { margin-top: 30px; color: var(--ink-dim); font-size: .85rem; font-style: italic; }
.arc-block { max-width: 620px; margin: 60px auto; text-align: center; padding: 60px 40px; border: 1px solid var(--border); border-radius: 14px; background: linear-gradient(180deg, var(--panel), rgba(16,19,36,.35)); }
.arc-block .cb-rune { font-size: 2.4rem; color: var(--violet); text-shadow: 0 0 24px var(--ring); margin-bottom: 12px; animation: spin 14s linear infinite; display: inline-block; }
.arc-block h2 { font-size: 1.8rem; margin-bottom: 14px; }
.arc-block p { color: var(--ink-soft); }
.cb-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 28px; }
</style>
