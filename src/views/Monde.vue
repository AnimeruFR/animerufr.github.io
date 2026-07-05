<template>
  <div class="page wrap" style="max-width: 1200px">
    <span class="eyebrow">{{ t('nav.monde') }}</span>
    <h1 class="ttl">Monde & <span class="accent">Magie</span></h1>
    
    <h2 class="sec-h reveal">Carte Interactive du Continent</h2>
    <div class="map-container reveal" style="height: clamp(360px, 62vh, 600px); border-radius: 12px; overflow: hidden; margin-top: 24px; border: 1px solid var(--border);">
      <MapComponent />
    </div>

    <h2 class="sec-h reveal">Les quatre nations</h2>
    <div class="grid cols2 reveal" style="margin-top:16px">
      <div v-for="n in RZ.nations" :key="n.id" :id="n.id" class="card">
        <span class="num">{{ n.tag }}</span><h3>{{ n.name }}</h3><p>{{ n.desc }}</p>
      </div>
    </div>

    <div style="margin-top: 40px">
      <h2 class="sec-h reveal">La magie</h2>
      <p class="lead reveal" v-html="RZ.magic?.gate"></p>
      <div class="grid cols3 reveal" style="margin-top:16px">
        <div v-for="(a,i) in RZ.magic?.attributes" :key="i" class="card"><span class="num">{{ a.spell }}</span><h3>{{ a.name }}</h3><p>{{ a.desc }}</p></div>
      </div>
      
      <h2 class="sec-h reveal">Le Culte des Sorcières & les Archevêques</h2>
      <p class="lead reveal" v-html="RZ.cult?.intro"></p>
      <div class="grid cols3 reveal" style="margin-top:16px">
        <div v-for="(a,i) in RZ.cult?.archbishops" :key="i" class="card">
          <SpoilerGate :arc="a.arc || 0">
            <span class="num">{{ a.sin }}</span><h3>{{ a.holder }}</h3><p>{{ a.auth }}</p>
          </SpoilerGate>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RZ } from '../data/data.js'
import MapComponent from '../components/MapComponent.vue'
import SpoilerGate from '../components/SpoilerGate.vue'

const { t } = useI18n()
</script>
