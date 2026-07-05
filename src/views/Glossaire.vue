<template>
  <div class="page wrap">
    <span class="eyebrow">{{ t('nav.glossaire') }}</span>
    <h1 class="ttl">Le <span class="accent">Glossaire</span></h1>
    <p class="sub">Termes, Objets magiques, et Organisations clés.</p>

    <!-- Navigation interne Glossaire -->
    <div class="view-toggle" style="margin: 20px 0;">
      <button :class="{active: currentTab === 'terms'}" @click="currentTab = 'terms'">Termes Généraux</button>
      <button :class="{active: currentTab === 'objects'}" @click="currentTab = 'objects'">Objets & Artefacts</button>
      <button :class="{active: currentTab === 'orgs'}" @click="currentTab = 'orgs'">Organisations</button>
    </div>

    <!-- Termes -->
    <div v-show="currentTab === 'terms'" class="grid cols2" style="margin-top:24px">
      <div v-for="t in RZ.terms" :key="t.t" class="card reveal" style="border-left: 3px solid var(--ice)">
        <SpoilerGate :arc="t.arc || 0">
          <h3>{{ t.t }}</h3>
          <p style="margin-top:10px; font-size:0.95rem; line-height:1.5">{{ t.d }}</p>
        </SpoilerGate>
      </div>
    </div>

    <!-- Objets -->
    <div v-show="currentTab === 'objects'" class="grid cols2" style="margin-top:24px">
      <div v-for="o in RZ.objects" :key="o.name" class="card reveal" style="border-left: 3px solid var(--gold)">
        <SpoilerGate :arc="o.arc || 0">
          <h3>{{ o.name }}</h3>
          <p style="margin-top:10px; font-size:0.95rem; line-height:1.5">{{ o.d }}</p>
        </SpoilerGate>
      </div>
    </div>

    <!-- Organisations -->
    <div v-show="currentTab === 'orgs'" class="grid cols2" style="margin-top:24px">
      <div v-for="org in RZ.orgs" :key="org.name" class="card reveal" style="border-left: 3px solid #ff7ea8">
        <SpoilerGate :arc="org.arc || 0">
          <h3>{{ org.name }}</h3>
          <p style="margin-top:10px; font-size:0.95rem; line-height:1.5">{{ org.d }}</p>
        </SpoilerGate>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RZ } from '../data/data.js'
import SpoilerGate from '../components/SpoilerGate.vue'

const { t } = useI18n()
const currentTab = ref('terms')
/* objets & organisations : désormais dans data.js (RZ.objects / RZ.orgs) */
</script>

<style scoped>
.view-toggle {
  display: flex; gap: 10px;
}
.view-toggle button {
  background: var(--panel);
  border: 1px solid var(--border);
  color: var(--ink);
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}
.view-toggle button:hover, .view-toggle button.active {
  background: var(--gold);
  border-color: var(--gold);
  color: #000;
}
</style>
