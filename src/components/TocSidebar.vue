<template>
  <nav v-if="items.length > 1" class="toc" aria-label="Sommaire de l'article">
    <div class="toc-title">Sommaire</div>
    <a v-for="it in items" :key="it.id" :href="'#' + it.id" class="toc-link"
      :class="{active: activeId === it.id}" @click.prevent="go(it.id)">{{ it.label }}</a>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  items: { type: Array, default: () => [] }, // [{ id, label }]
})
const activeId = ref('')
let observer = null
const visibleIds = new Set()

const go = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(history.state, '', '#' + id)
  activeId.value = id
}

const observe = () => {
  if (typeof window === 'undefined') return
  if (observer) observer.disconnect()
  visibleIds.clear()
  observer = new IntersectionObserver((entries) => {
    for (const en of entries) en.isIntersecting ? visibleIds.add(en.target.id) : visibleIds.delete(en.target.id)
    // section active = la première (dans l'ordre du sommaire) présente dans la zone haute du viewport
    const first = props.items.find(it => visibleIds.has(it.id))
    if (first) activeId.value = first.id
  }, { rootMargin: '-80px 0px -55% 0px', threshold: 0 })
  props.items.forEach(it => {
    const el = document.getElementById(it.id)
    if (el) observer.observe(el)
  })
}

onMounted(async () => {
  await nextTick()
  observe()
  // lien profond : #ancre présente au chargement
  const hash = decodeURIComponent(location.hash.slice(1))
  if (hash && props.items.some(it => it.id === hash)) setTimeout(() => go(hash), 150)
})
watch(() => props.items, async () => { await nextTick(); observe() }, { deep: true })
onUnmounted(() => { if (observer) observer.disconnect() })
</script>
