<template>
  <div class="page wrap">
    <span class="eyebrow">{{ t('nav.routesIf') }}</span>
    <h1 class="ttl">Les <span class="accent">Routes IF</span></h1>
    <p class="sub">Histoires alternatives où Subaru a pris une décision différente lors d'un point de bascule crucial.</p>
    
    <div class="grid" style="gap:22px;max-width:880px;margin-top:24px">
      <div v-for="r in routes" :key="r.tag" class="card reveal if-card">
        <SpoilerGate :arc="r.spoiler || 0">
          <span class="num">{{ r.tag }}</span>
          <h3>{{ r.title }}</h3>
          <p class="divergence"><strong>Point de divergence :</strong> {{ r.divergence }}</p>
          <p>{{ r.desc }}</p>
          <div class="if-details" v-if="r.details">
            <h4>Résumé Détaillé</h4>
            <p>{{ r.details }}</p>
          </div>
        </SpoilerGate>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SpoilerGate from '../components/SpoilerGate.vue'

const { t } = useI18n()

/* spoiler = arc dont la connaissance est nécessaire pour lire la route sans se gâcher l'histoire principale */
const routes = ref([
  {
    tag:"怠惰 · Sloth IF (Rem IF)", spoiler:3,
    title:"La voie de la Paresse", 
    divergence: "Arc 3 - Subaru décide de fuir Kararagi avec Rem au lieu de retourner au domaine Mathers.",
    desc:"Une vie paisible où Subaru et Rem se marient, ont deux enfants (Rigel et Spica) et vivent tranquillement à Kararagi.",
    details: "Abandonnant Emilia à son sort funeste, Subaru fuit la souffrance. Bien qu'il trouve le bonheur familial, le poids de la culpabilité reste un murmure silencieux. Les autres membres du camp d'Emilia périssent."
  },
  {
    tag:"強欲 · Greed IF (Kasaneru)", spoiler:4,
    title:"Le thé d'Echidna", 
    divergence: "Arc 4 - Subaru accepte le contrat d'Echidna lors de la Tea Party.",
    desc:"Subaru devient l'outil parfait d'Echidna, abusant du 'Return by Death' pour atteindre le résultat optimal, au prix de son humanité.",
    details: "Il meurt des centaines de millions de fois pour résoudre chaque problème mineur. Ses alliés sont sauvés physiquement mais brisés psychologiquement (Emilia devient dépendante de lui, Garfiel un tueur sanguinaire, Reinhard son chevalier désabusé)."
  },
  {
    tag:"傲慢 · Pride IF (Ayamatsu)", spoiler:3,
    title:"La voie de l'Orgueil", 
    divergence: "Arc 1 - Subaru ne demande pas l'aide de Reinhard dans l'allée.",
    desc:"Subaru meurt 88 fois pour tuer Elsa seul, devient fou, rejoint le Culte des Sorcières en tant qu'Archevêque de l'Orgueil.",
    details: "Son seul but est de faire d'Emilia la souveraine. Pour cela, il brûle le royaume, assassine tous les autres candidats et Chevaliers (sauf Reinhard qu'il brise mentalement), puis se fait tuer par Emilia pour faire d'elle une héroïne."
  },
  {
    tag:"憤怒 · Wrath IF (Oboreru)", spoiler:3,
    title:"La voie de la Colère", 
    divergence: "Arc 2 - Subaru ne saute pas de la falaise, mais s'enfuit du manoir par peur.",
    desc:"Traumatisé par les meurtres de Rem, Subaru devient paranoïaque et fonde la plus grande organisation criminelle de Kararagi (Les Pléiades).",
    details: "Il ne voit plus le monde qu'en noir et blanc (alliés ou ennemis). Il enferme Emilia par protection. Finalement, ses alliés finissent par l'assassiner."
  },
  {
    tag:"暴食 · Gluttony IF (Tsugihagu)", spoiler:6,
    title:"La voie de la Gourmandise", 
    divergence: "Arc 6 - Subaru, amnésique, rejette l'idée de redevenir 'Natsuki Subaru'.",
    desc:"Pour découvrir qui était vraiment ce héros tant aimé, il décide d'assassiner tous ses amis et alliés pour lire leurs Livres des Morts.",
    details: "Il voyage avec Shaula, traquant et assassinant ses anciens compagnons un par un (Beatrice, Garfiel, Julius) afin de reconstituer l'être parfait qu'ils décrivaient."
  }
])
</script>

<style scoped>
.if-card {
  border-left: 4px solid var(--gold);
}
.divergence {
  font-size: 0.85rem;
  color: var(--gold);
  margin-bottom: 10px;
  background: rgba(231,200,115,0.1);
  padding: 5px 10px;
  border-radius: 4px;
}
.if-details {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dashed rgba(255,255,255,0.2);
}
.if-details h4 {
  font-size: 0.9rem;
  color: #a877ff; /* Purple for witchy IF vibe */
  margin: 0 0 5px 0;
}
</style>
