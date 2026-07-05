<template>
  <div class="page wrap">
    <span class="eyebrow">{{ t('nav.oeuvre') }}</span>
    <h1 class="ttl">Re:Zero, l'<span class="accent">œuvre</span></h1>
    <div class="split" style="margin-top:26px">
      <div class="reveal"><p class="lead" v-html="RZ.work?.intro"></p><p v-html="RZ.work?.novel"></p><p v-html="RZ.work?.anime"></p></div>
      <div class="media reveal"><img :src="asset('assets/img/cover-vol1.webp')" alt="Light novel volume 1" loading="lazy"></div>
    </div>
    
    <h2 class="sec-h reveal">Les trois versions</h2>
    <p class="reveal" style="color:var(--ink-soft)">Re:Zero existe sur trois supports qui ne racontent pas tout à fait la même histoire. Le détail des divergences figure sur chaque <router-link to="/arcs" style="color:var(--ice)">page d'arc</router-link>.</p>
    <div class="grid cols3 reveal" style="margin-top:14px">
      <div v-for="(m,i) in RZ.work?.media" :key="i" class="card" style="border-left:3px solid var(--violet)">
        <span class="num">{{ m.tag }}</span>
        <h3 style="font-size:1.15rem">{{ m.n }}</h3>
        <p v-html="m.d"></p>
      </div>
    </div>

    <h2 class="sec-h reveal">Frise Chronologique Interactive</h2>
    <div class="timeline-container reveal" style="margin-top: 20px;">
      <div class="tl-filters">
        <button :class="{active: filter === 'all'}" @click="filter = 'all'">Tout</button>
        <button :class="{active: filter === 'novel'}" @click="filter = 'novel'">Light Novel</button>
        <button :class="{active: filter === 'anime'}" @click="filter = 'anime'">Anime</button>
      </div>
      <div class="tl interactive-tl">
        <div v-for="(e,i) in filteredTimeline" :key="i" class="tl-i interactive-tl-i">
          <span class="y">{{ e.y }}</span>
          <div class="tl-content">
            <h3>{{ e.h }}</h3>
            <p>{{ e.p }}</p>
          </div>
        </div>
      </div>
    </div>

    <h2 class="sec-h reveal">Fiche technique</h2>
    <div class="grid cols3 reveal">
      <div class="card" v-for="(s,i) in RZ.work?.staff" :key="i"><span class="num">{{ s.r }}</span><h3 style="font-size:1.1rem">{{ s.n }}</h3></div>
    </div>
    
    <h2 class="sec-h reveal">Musiques & génériques</h2>
    <div class="audio-player reveal" style="margin-bottom: 20px; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; display: flex; align-items: center; gap: 20px;">
      <button class="btn blood" @click="togglePlay" style="width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; padding: 0;">
        {{ isPlaying ? '⏸' : '▶' }}
      </button>
      <div>
        <h3 style="margin:0; font-family: 'Cinzel', serif; color: var(--gold)">Redo - Konomi Suzuki</h3>
        <p style="margin: 5px 0 0 0; opacity: 0.7; font-size: 0.9rem;">Opening 1</p>
      </div>
      <div style="flex: 1; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; margin-left: 20px;">
        <div :style="{width: progress + '%', height: '100%', background: 'var(--gold)', borderRadius: '2px', transition: 'width 0.1s linear'}"></div>
      </div>
    </div>
    
    <div class="grid cols4 reveal">
      <a v-for="(o,i) in RZ.work?.ost" :key="i" class="card" :href="'https://www.youtube.com/results?search_query='+o.q" target="_blank" rel="noopener">
        <span class="num">{{ o.tag }}</span><h3>{{ o.t }}</h3><p>{{ o.by }}</p><p style="color:var(--ice);font-size:.8rem;letter-spacing:.1em">▶ ÉCOUTER</p></a>
    </div>
    <p class="reveal" style="margin-top:14px"><router-link to="/musiques" style="color:var(--ice)">→ Toutes les musiques, saison par saison</router-link></p>

    <h2 class="sec-h reveal">Réception</h2>
    <div class="stats reveal" style="margin-top:18px">
      <div class="stat" v-for="(r,i) in RZ.work?.reception" :key="i">
        <div class="n" style="font-size:clamp(1.5rem,3.4vw,2.4rem)">{{ r.n }}</div>
        <div class="l">{{ r.l }}</div>
        <p style="color:var(--ink-soft);font-size:.85rem;margin-top:8px">{{ r.d }}</p>
      </div>
    </div>
    <p class="lead reveal" style="margin-top:26px">{{ RZ.work?.impact }}</p>

    <h2 class="sec-h reveal">Doublage</h2>
    <p class="reveal" style="color:var(--ink-soft)">{{ RZ.work?.dub?.note }}</p>
    <div class="dub-table reveal">
      <div class="dub-row dub-head">
        <span>Personnage</span><span>Seiyū (VO)</span><span>Voix françaises</span>
      </div>
      <div v-for="(c,i) in RZ.work?.dub?.cast" :key="i" class="dub-row">
        <span class="dub-role">{{ c.role }}</span><span>{{ c.va }}</span><span>{{ c.vf }}</span>
      </div>
    </div>

    <h2 class="sec-h reveal">Le ciel étoilé des noms</h2>
    <p class="reveal" style="color:var(--ink-soft)">Subaru, Betelgeuse, Regulus, Sirius… les noms de Re:Zero forment une carte du ciel. Petit relevé astronomique :</p>
    <div class="grid cols2 reveal" style="margin-top:14px">
      <div v-for="(s,i) in RZ.work?.stars" :key="i" class="card" style="border-left:3px solid var(--ice)">
        <SpoilerGate :arc="s.arc || 0">
          <span class="num">{{ s.star }}</span>
          <h3 style="font-size:1.1rem">{{ s.name }}</h3>
          <p style="font-size:.95rem">{{ s.d }}</p>
        </SpoilerGate>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RZ } from '../data/data.js'
import SpoilerGate from '../components/SpoilerGate.vue'
import { asset } from '../assets.js'

const { t } = useI18n()

// Timeline logic
const filter = ref('all')
const timeline = ref(RZ.work?.timeline || [
  { y: '2012', h: 'Web Novel', p: 'Début de la publication sur Shōsetsuka ni Narō.', type: 'novel' },
  { y: '2014', h: 'Light Novel', p: 'Premier volume publié par Media Factory.', type: 'novel' },
  { y: '2016', h: 'Anime S1', p: 'Diffusion de la première saison (25 épisodes).', type: 'anime' },
  { y: '2018', h: 'Memory Snow', p: 'Premier OAV.', type: 'anime' },
  { y: '2019', h: 'Frozen Bond', p: 'Deuxième OAV (préquelle sur Emilia).', type: 'anime' },
  { y: '2020', h: 'Anime S2', p: 'Diffusion de la deuxième saison (Partie 1 & 2).', type: 'anime' },
  { y: '2024', h: 'Anime S3', p: 'Diffusion de la troisième saison annoncée.', type: 'anime' }
])

const filteredTimeline = computed(() => {
  if (filter.value === 'all') return timeline.value
  return timeline.value.filter(item => item.type === filter.value)
})

// Audio player logic
const isPlaying = ref(false)
const progress = ref(0)
let timer = null

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    timer = setInterval(() => {
      progress.value += 1
      if (progress.value >= 100) {
        progress.value = 0
        isPlaying.value = false
        clearInterval(timer)
      }
    }, 1000) // Fake 100s track
  } else {
    clearInterval(timer)
  }
}
</script>

<style scoped>
.tl-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}
.tl-filters button {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}
.tl-filters button:hover, .tl-filters button.active {
  background: var(--gold);
  border-color: var(--gold);
  color: #000;
}

.interactive-tl {
  position: relative;
  border-left: 2px solid rgba(231,200,115,0.3);
  padding-left: 30px;
  margin-left: 20px;
}
.interactive-tl-i {
  position: relative;
  margin-bottom: 30px;
  opacity: 0;
  animation: fadeUp 0.5s forwards;
}
@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}
.interactive-tl-i .y {
  position: absolute;
  left: -80px;
  top: 0;
  font-family: 'Cinzel', serif;
  color: var(--gold);
  font-weight: bold;
  background: #06070d;
  padding: 5px;
}
.interactive-tl-i::before {
  content: '';
  position: absolute;
  left: -35px;
  top: 8px;
  width: 10px;
  height: 10px;
  background: var(--gold);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--gold);
}
.tl-content {
  background: rgba(255,255,255,0.03);
  padding: 15px 20px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.05);
  transition: transform 0.3s ease;
}
.tl-content:hover {
  transform: translateX(5px);
  background: rgba(255,255,255,0.06);
}
.dub-table {
  margin-top: 16px;
  border: 1px solid var(--border);
  border-radius: 11px;
  overflow: hidden;
  background: linear-gradient(180deg, var(--panel), rgba(16,19,36,.35));
  max-width: 880px;
}
.dub-row {
  display: grid;
  grid-template-columns: 1.1fr 1fr 1.4fr;
  gap: 14px;
  padding: 10px 18px;
  border-top: 1px solid var(--border);
  align-items: baseline;
}
.dub-row:first-child { border-top: none; }
.dub-head {
  font-family: var(--disp);
  font-size: .62rem;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--violet);
  background: rgba(139,92,246,.07);
}
.dub-role { color: var(--ice); }
@media (max-width: 640px) {
  .dub-row { grid-template-columns: 1fr; gap: 2px; }
  .dub-head span:nth-child(n+2) { display: none; }
}
</style>
