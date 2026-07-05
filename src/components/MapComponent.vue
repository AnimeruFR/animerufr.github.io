<template>
  <div style="height: 100%; width: 100%; position: relative;">
    <div ref="mapDiv" style="height: 100%; width: 100%; background: #0a0a14;"></div>
    <div class="map-legend">
      <span><span class="dot dot-nation"></span> Nations</span>
      <span><span class="dot dot-lieu"></span> Lieux</span>
      <span class="map-hint">Cliquer sur un marqueur → fiche</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRouter } from 'vue-router'
import { RZ } from '../data/data.js'
import { useSpoiler } from '../composables/useSpoiler.js'

const mapDiv = ref(null)
const router = useRouter()
const { level, isSpoiler } = useSpoiler()
let L = null   // chargé dynamiquement côté client : leaflet touche `window` à l'import (crash SSG)
let map = null
let markersLayer = null

const popupHtml = (tag, name, desc, href) => `
  <div class="map-pop">
    <span class="map-pop-tag">${tag}</span>
    <h3>${name}</h3>
    <p>${desc}</p>
    <a class="map-pop-link" href="${href}">Voir la fiche →</a>
  </div>`

const pin = (kind, label) => L.divIcon({
  className: '',
  html: `<div class="map-pin map-pin-${kind}"><span class="map-pin-dot"></span><span class="map-pin-label">${label}</span></div>`,
  iconSize: [0, 0],
})

function buildMarkers() {
  if (!map) return
  if (markersLayer) markersLayer.remove()
  markersLayer = L.layerGroup().addTo(map)

  for (const n of RZ.nations) {
    L.marker(n.map, { icon: pin('nation', n.name), zIndexOffset: 100 })
      .bindPopup(popupHtml(n.tag, n.name, n.desc, '/monde#' + n.id), { maxWidth: 260 })
      .addTo(markersLayer)
  }
  // les lieux au-delà de la progression déclarée n'apparaissent pas sur la carte
  for (const l of RZ.locations) {
    if (isSpoiler(l.arc)) continue
    if (l.id === 'loc-vollachia') continue // doublon avec la nation Vollachia
    L.marker(l.map, { icon: pin('lieu', l.name) })
      .bindPopup(popupHtml(l.tag, l.name, l.desc, '/lieux#' + l.id), { maxWidth: 260 })
      .addTo(markersLayer)
  }
}

onMounted(async () => {
  if (typeof window === 'undefined') return
  const [leaflet] = await Promise.all([import('leaflet'), import('leaflet/dist/leaflet.css')])
  L = leaflet.default

  map = L.map(mapDiv.value, {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 3,
    zoomControl: true,
    attributionControl: false,
    maxBounds: [[-120, -120], [1120, 1120]],
  })
  L.imageOverlay('/assets/img/world_map.png', [[0, 0], [1000, 1000]]).addTo(map)
  map.setView([500, 500], 0)
  buildMarkers()

  // navigation SPA depuis les popups (le HTML de popup échappe à vue-router)
  map.on('popupopen', (e) => {
    const a = e.popup.getElement()?.querySelector('.map-pop-link')
    if (a) a.addEventListener('click', (ev) => {
      ev.preventDefault()
      router.push(a.getAttribute('href'))
    })
  })

  setTimeout(() => { if (map) map.invalidateSize() }, 400)
})

watch(level, buildMarkers)

onBeforeUnmount(() => {
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
.map-legend {
  position: absolute; right: 12px; bottom: 12px; z-index: 500;
  display: flex; gap: 14px; align-items: center;
  padding: 8px 14px; border-radius: 999px;
  background: rgba(9,10,20,.85); border: 1px solid var(--border);
  font-family: var(--disp); font-size: .6rem; letter-spacing: .12em; text-transform: uppercase;
  color: var(--ink-soft);
}
.map-legend .dot { display: inline-block; width: 9px; height: 9px; border-radius: 50%; margin-right: 5px; vertical-align: middle; }
.map-legend .dot-nation { background: var(--gold); box-shadow: 0 0 8px var(--gold); }
.map-legend .dot-lieu { background: var(--ice); box-shadow: 0 0 8px var(--ice); }
.map-hint { color: var(--ink-dim); }
@media (max-width: 640px) { .map-hint { display: none; } }
</style>
