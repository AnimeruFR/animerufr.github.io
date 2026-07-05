<template>
  <div class="page wrap">
    <span class="eyebrow">{{ t('nav.lieux') }}</span>
    <h1 class="ttl">Les <span class="accent">Lieux</span></h1>
    <p class="sub">Villes, domaines et territoires clés de l'univers de Re:Zero.</p>

    <div class="grid cols2" style="margin-top:24px">
      <div v-for="l in RZ.locations" :key="l.name" :id="l.id" class="card reveal best-card">
        <SpoilerGate :arc="l.arc || 0">
          <img v-if="l.img" :src="asset('assets/img/' + l.img + '.webp')" :alt="l.name" class="best-img" loading="lazy" decoding="async" />
          <span class="num">{{ l.tag }}</span>
          <h3>{{ l.name }}</h3>
          <p class="best-desc" v-html="l.desc"></p>
        </SpoilerGate>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RZ } from '../data/data.js'
import SpoilerGate from '../components/SpoilerGate.vue'
import { asset } from '../assets.js'

const { t } = useI18n()
</script>
