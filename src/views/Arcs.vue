<template>
  <div class="page wrap">
    <span class="eyebrow">{{ t('nav.arcs') }}</span>
    <h1 class="ttl">Les <span class="accent">Arcs</span></h1>
    <p class="sub">Dix arcs déjà écrits — chaque arc dispose de sa page détaillée : déroulé, correspondances web novel / light novel / anime et différences d'adaptation.</p>

    <div class="grid" style="gap:22px;max-width:880px;margin-top:24px">
      <div v-for="a in RZ.arcs" :key="a.n" class="card reveal" :style="a.n===10?{borderColor:'rgba(231,200,115,.4)'}:{}">
        <SpoilerGate :arc="a.n">
          <span class="num" :style="a.n===10?{color:'var(--gold)'}:{}">Arc {{ a.n }} · {{ a.status }} <span style="opacity:.6">— {{ a.romaji }}</span></span>
          <h3>{{ a.title }}</h3>
          <p>{{ a.summary }}</p>
          <router-link :to="'/arc/' + a.n" class="btn-arc">Page détaillée de l'arc {{ a.n }} &rarr;</router-link>
        </SpoilerGate>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RZ } from '../data/data.js'
import SpoilerGate from '../components/SpoilerGate.vue'

const { t } = useI18n()
</script>

<style scoped>
.btn-arc {
  display: inline-block;
  background: transparent;
  border: 1px solid var(--gold);
  color: var(--gold);
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}
.btn-arc:hover {
  background: var(--gold);
  color: #000;
}
</style>
