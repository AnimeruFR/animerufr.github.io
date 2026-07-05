<template>
  <div class="page wrap">
    <span class="eyebrow">L'anime en détail</span>
    <h1 class="ttl">Les <span class="accent">Épisodes</span></h1>
    <p class="sub">{{ totalAired }} épisodes diffusés sur quatre saisons (White Fox). Titres français officiels de Crunchyroll ; les titres au-delà de ta progression restent floutés.</p>

    <section v-for="se in seasonList" :key="se.s" class="season-block reveal">
      <h2 class="sec-h">{{ se.label }} <span class="season-year">· {{ se.year }}</span></h2>
      <p class="season-detail">{{ se.detail }}</p>

      <SpoilerGate :arc="seasonMinArc(se.s)">
        <div class="ep-table" role="table" :aria-label="'Épisodes de la ' + se.label">
          <div class="ep-row ep-head" role="row">
            <span role="columnheader">N°</span>
            <span role="columnheader">Titre français</span>
            <span role="columnheader">Titre original</span>
            <span role="columnheader">Diffusion</span>
          </div>
          <div v-for="e in episodes[se.s]" :key="e.abs" class="ep-row" role="row">
            <span class="ep-num" role="cell">{{ e.n }}<small v-if="se.s > 1"> ({{ e.abs }})</small></span>
            <!-- gate par ligne uniquement si la saison est mixte (S1 : arcs 1-3) ;
                 sinon la barrière du bloc suffit — évite le double flou -->
            <span class="ep-fr" role="cell">
              <SpoilerGate v-if="!isSpoiler(seasonMinArc(se.s)) && isSpoiler(e.arc)" :arc="e.arc" inline>{{ e.fr || '— titre FR à venir —' }}</SpoilerGate>
              <template v-else>{{ e.fr || '— titre FR à venir —' }}</template>
            </span>
            <span class="ep-jp" role="cell">
              <SpoilerGate v-if="!isSpoiler(seasonMinArc(se.s)) && isSpoiler(e.arc)" :arc="e.arc" inline>{{ e.romaji }}</SpoilerGate>
              <template v-else>{{ e.romaji }}</template>
              <small v-if="e.kanji">{{ e.kanji }}</small>
            </span>
            <span class="ep-date" role="cell">{{ e.date }}</span>
          </div>
          <p v-if="se.total > episodes[se.s].length" class="ep-more">
            {{ episodes[se.s].length }} épisodes diffusés sur {{ se.total }} annoncés — diffusion hebdomadaire en cours.
          </p>
        </div>
      </SpoilerGate>
    </section>

    <p class="ep-src">Sources : Wikipédia (listes d'épisodes) & Crunchyroll pour les titres français.</p>
  </div>
</template>

<script setup>
import { seasons, episodes } from '../data/episodes.js'
import { useSpoiler } from '../composables/useSpoiler.js'
import SpoilerGate from '../components/SpoilerGate.vue'

const { isSpoiler } = useSpoiler()
const seasonList = seasons
const totalAired = Object.values(episodes).reduce((n, eps) => n + eps.length, 0)
/* saison entièrement au-delà de la progression → une seule barrière pour tout le bloc */
const seasonMinArc = (s) => (s === 1 ? 1 : s === 2 ? 4 : s === 3 ? 5 : 6)
</script>

<style scoped>
.season-block { margin-top: 18px; }
.season-year { color: var(--ink-dim); font-size: .8em; }
.season-detail { color: var(--ink-soft); font-style: italic; margin: 4px 0 14px; }
.ep-table {
  border: 1px solid var(--border); border-radius: 11px; overflow: hidden;
  background: linear-gradient(180deg, var(--panel), rgba(16,19,36,.35));
}
.ep-row {
  display: grid; grid-template-columns: 64px 1.2fr 1.2fr 130px; gap: 14px;
  padding: 10px 18px; border-top: 1px solid var(--border); align-items: baseline;
}
.ep-row:first-child { border-top: none; }
.ep-head {
  font-family: var(--disp); font-size: .62rem; letter-spacing: .18em; text-transform: uppercase;
  color: var(--violet); background: rgba(139,92,246,.07);
}
.ep-num { font-family: var(--disp); color: var(--ice); }
.ep-num small { color: var(--ink-dim); font-size: .72em; }
.ep-fr { color: var(--ink); }
.ep-jp { color: var(--ink-soft); font-size: .95rem; }
.ep-jp small { display: block; color: var(--ink-dim); font-size: .8em; }
.ep-date { color: var(--ink-dim); font-size: .88rem; }
.ep-more { padding: 12px 18px; margin: 0; color: var(--ink-dim); font-style: italic; border-top: 1px solid var(--border); }
.ep-src { margin-top: 34px; color: var(--ink-dim); font-size: .85rem; font-style: italic; }
@media (max-width: 760px) {
  .ep-row { grid-template-columns: 40px 1fr; }
  .ep-jp, .ep-date { grid-column: 2; }
  .ep-head span:nth-child(n+3) { display: none; }
}
</style>
