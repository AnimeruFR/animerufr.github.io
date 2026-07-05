<template>
  <Teleport to="body">
    <div v-if="open" class="spick-backdrop" @click.self="close">
      <div class="spick" role="dialog" aria-modal="true" aria-labelledby="spick-title">
        <button class="spick-x" aria-label="Fermer" @click="close">✕</button>
        <span class="eyebrow">Protection anti-spoiler</span>
        <h2 id="spick-title">Où en es-tu dans <span class="accent">Re:Zero</span> ?</h2>
        <p class="spick-sub">Tout contenu au-delà de l'arc choisi sera flouté dans l'encyclopédie.
          Sans choix de ta part, tout ce qui dépasse l'anime déjà diffusé (saisons 1-3) reste masqué.
          Modifiable à tout moment via le bouclier <span class="spick-shield-demo">✦</span> de la barre de navigation.</p>
        <div class="spick-list">
          <button v-for="o in options" :key="o.value" class="spick-opt"
            :class="{active: chosen && level === o.value, all: o.value === SPOILER_MAX}"
            @click="setLevel(o.value)">
            <span class="spick-lbl">{{ o.label }}</span>
            <span class="spick-media">{{ o.media }}</span>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'
import { useSpoiler, SPOILER_MAX } from '../composables/useSpoiler.js'

const { level, chosen, pickerOpen, setLevel, options } = useSpoiler()
const open = computed(() => pickerOpen.value)
const close = () => {
  pickerOpen.value = false
  // refus sans choix : ne plus redemander durant cette session de navigation
  if (!chosen.value && typeof window !== 'undefined') sessionStorage.setItem('rz-spoiler-dismissed', '1')
}
</script>
