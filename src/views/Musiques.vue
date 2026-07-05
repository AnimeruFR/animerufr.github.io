<template>
  <div class="page wrap">
    <span class="eyebrow">La bande-son</span>
    <h1 class="ttl">Les <span class="accent">Musiques</span></h1>
    <p class="sub">Openings, endings et insert songs des quatre saisons — de « Redo » à « Recollect ».</p>

    <div class="card composer-card reveal">
      <span class="num">Bande originale</span>
      <h3>{{ music.composer.name }}</h3>
      <p>{{ music.composer.note }}</p>
    </div>

    <section v-for="se in music.seasons" :key="se.s" class="reveal" style="margin-top: 34px">
      <h2 class="sec-h">{{ se.label }} <span class="m-year">· {{ se.year }}</span></h2>
      <div class="grid cols2" style="margin-top: 14px">
        <div v-for="song in se.songs" :key="song.t" class="card song-card" :class="{op: song.type.startsWith('Opening'), insert: song.type.startsWith('Insert')}">
          <span class="num">{{ song.type }}<template v-if="song.eps"> · {{ song.eps }}</template></span>
          <h3>{{ song.t }}</h3>
          <p class="song-by">{{ song.by }}</p>
        </div>
      </div>
    </section>

    <p class="m-src">Openings/endings vérifiés via les annonces officielles (Anime News Network) recensées par Wikipédia.</p>
  </div>
</template>

<script setup>
import { music } from '../data/music.js'
</script>

<style scoped>
.composer-card { border-left: 3px solid var(--gold); max-width: 720px; margin-top: 18px; }
.m-year { color: var(--ink-dim); font-size: .8em; }
.song-card { border-left: 3px solid var(--ice); }
.song-card.op { border-left-color: var(--violet); }
.song-card.insert { border-left-color: var(--gold); }
.song-by { color: var(--ink-soft); font-style: italic; }
.m-src { margin-top: 34px; color: var(--ink-dim); font-size: .85rem; font-style: italic; }
</style>
