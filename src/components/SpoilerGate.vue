<template>
  <component :is="inline ? 'span' : 'div'" v-if="gated" class="sgate" :class="{inline}"
    role="button" tabindex="0" :aria-label="'Contenu masqué (spoiler arc ' + arc + ') — activer pour révéler'"
    @click.stop.prevent="revealed = true" @keydown.enter.prevent="revealed = true" @keydown.space.prevent="revealed = true">
    <component :is="inline ? 'span' : 'div'" class="sgate-blur" aria-hidden="true"><slot /></component>
    <span class="sgate-veil">
      <span class="sgate-rune">✦</span>
      <span class="sgate-txt">Spoiler · Arc {{ arc }}</span>
      <span v-if="!inline" class="sgate-hint">Cliquer pour révéler</span>
    </span>
  </component>
  <slot v-else />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSpoiler } from '../composables/useSpoiler.js'

const props = defineProps({
  arc: { type: Number, default: 0 },   // 0 / absent = jamais masqué
  inline: { type: Boolean, default: false },
})
const { isSpoiler } = useSpoiler()
const revealed = ref(false)
const gated = computed(() => isSpoiler(props.arc) && !revealed.value)
</script>
