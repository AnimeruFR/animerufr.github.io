<template>
  <div class="page wrap">
    <span class="eyebrow">{{ t('nav.bestiaire') }}</span>
    <h1 class="ttl">Le <span class="accent">Bestiaire</span></h1>
    <p class="sub">Créatures, Bêtes Démoniaques (Mabeasts), Esprits et Dragons peuplant le monde de Re:Zero.</p>

    <!-- Navigation interne Bestiaire -->
    <div class="view-toggle" style="margin: 20px 0;">
      <button :class="{active: currentTab === 'mabeasts'}" @click="currentTab = 'mabeasts'">Bêtes Démoniaques</button>
      <button :class="{active: currentTab === 'dragons'}" @click="currentTab = 'dragons'">Dragons</button>
      <button :class="{active: currentTab === 'spirits'}" @click="currentTab = 'spirits'">Esprits</button>
    </div>
    
    <!-- Mabeasts -->
    <div v-show="currentTab === 'mabeasts'" class="grid cols2" style="margin-top:24px">
      <div v-for="b in mabeasts" :key="b.name" class="card reveal best-card">
        <SpoilerGate :arc="b.arc || 0">
          <img v-if="b.img" :src="asset(b.img)" :alt="b.name" class="best-img" loading="lazy" decoding="async" />
          <span class="num">{{ b.creator }}</span>
          <h3>{{ b.name }}</h3>
          <p class="best-desc">{{ b.desc }}</p>
        </SpoilerGate>
      </div>
    </div>

    <!-- Dragons -->
    <div v-show="currentTab === 'dragons'" class="grid cols2" style="margin-top:24px">
      <div v-for="d in dragons" :key="d.name" class="card reveal best-card dragon-card">
        <SpoilerGate :arc="d.arc || 0">
          <span class="num">Dragon</span>
          <h3>{{ d.name }}</h3>
          <p class="best-desc">{{ d.desc }}</p>
        </SpoilerGate>
      </div>
    </div>

    <!-- Esprits -->
    <div v-show="currentTab === 'spirits'" class="grid cols2" style="margin-top:24px">
      <div v-for="s in spirits" :key="s.name" class="card reveal best-card spirit-card">
        <SpoilerGate :arc="s.arc || 0">
          <span class="num">{{ s.type }}</span>
          <h3>{{ s.name }}</h3>
          <p class="best-desc">{{ s.desc }}</p>
        </SpoilerGate>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SpoilerGate from '../components/SpoilerGate.vue'
import { asset } from '../assets.js'

const { t } = useI18n()
const currentTab = ref('mabeasts')

/* arc = premier arc où la créature (ou l'information de sa description) est révélée */
const mabeasts = ref([
  { arc: 3, name: "La Baleine Blanche (Hakugei)", creator: "Créée par Daphne (Gourmandise)", img: "/assets/img/beast-whale.webp", desc: "Un gigantesque cétacé volant qui efface l'existence de ses victimes avec son 'Brouillard d'Effacement'. Vaincue par l'alliance Crusch/Anastasia/Subaru." },
  { arc: 4, name: "Le Grand Lapin (Oousagi)", creator: "Créé par Daphne (Gourmandise)", img: "/assets/img/beast-rabbit.webp", desc: "Une horde infinie de petits lapins blancs affamés par le mana, capables de se cloner de manière exponentielle. Vaincus au Sanctuaire." },
  { arc: 4, name: "Le Serpent Noir (Kurohebi)", creator: "Créé par Daphne (Gourmandise)", img: "/assets/img/beast-serpent.webp", desc: "Une calamité aveugle dont le passage corrompt le sol et l'eau de maladies incurables. A détruit la forêt d'Elior." },
  { arc: 2, name: "Ulgarm", creator: "Bêtes mineures", desc: "Des chiens démoniaques de la forêt de la famille Mathers qui maudissent leurs victimes en les mordant." },
  { arc: 4, name: "Guiltylowe", creator: "Bêtes de l'ombre", desc: "Mabeast ressemblant à un lion noir géant terrifiant, extrêmement agile." }
])

const dragons = ref([
  { name: "Volcanica (Le Dragon Divin)", desc: "L'entité légendaire qui a scellé Satella et conclu un pacte de protection avec le roi Farsale Lugunica." },
  { arc: 5, name: "Valgren", desc: "Le 'Dragon Maléfique' qui a ravagé l'Empire de Vollachia avant d'être tué." },
  { name: "Dragons de Terre (Ground Dragons)", desc: "Créatures montures communes (ex: Patrasche), divisées en plusieurs races (Diana, Farsale, etc.)." }
])

const spirits = ref([
  { arc: 2, name: "Puck", type: "Grand Esprit", desc: "L'Esprit Artificiel du Feu, familièrement appelé 'Père' par Emilia. Sa vraie forme est la 'Bête de la Fin'." },
  { arc: 4, name: "Beatrice", type: "Grand Esprit", desc: "Esprit Artificiel créé par Echidna, ancienne gardienne de la Bibliothèque Interdite, désormais l'esprit contractant de Subaru." },
  { arc: 4, name: "Melakuera", type: "Grand Esprit", desc: "L'Arbitre du Feu, détruit par Puck." },
  { name: "Odglass", type: "Grand Esprit", desc: "L'esprit tutélaire qui veille sur la nation froide de Gusteko." },
  { name: "Quasi-Esprits", type: "Esprits Mineurs", desc: "Formes primitives d'esprits flottants (souvent vus autour de Subaru et Emilia), comme les esprits de feu de Julius." }
])
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
.best-card {
  position: relative;
  overflow: hidden;
}
.best-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
  border-bottom: 2px solid var(--gold);
}
.best-desc {
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--ink-soft);
  margin-top: 10px;
}
.dragon-card { border-top: 3px solid #ff4d4d; }
.spirit-card { border-top: 3px solid #74d4ff; }
</style>
