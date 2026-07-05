<template>
  <div class="page wrap">
    <span class="eyebrow">Le casting de Lugnica & au-delà</span>
    <h1 class="ttl">Les <span class="accent">Personnages</span></h1>
    <p class="sub">{{ chars.length }} fiches encyclopédiques. Explorez la base de données ou le graphe des relations.</p>
    
    <div class="view-toggle" style="margin: 20px 0;">
      <button :class="{active: viewMode === 'grid'}" @click="viewMode = 'grid'">Grille</button>
      <button :class="{active: viewMode === 'graph'}" @click="initGraph">Graphe des Relations</button>
    </div>

    <!-- Mode Grille -->
    <div v-if="viewMode === 'grid'">
      <template v-for="g in groups" :key="g.id">
        <h2 class="group-h">{{ g.label }}</h2>
        <div class="ent-grid">
          <template v-for="c in charsOf(g.id)" :key="c.id">
            <div v-if="isMasked(c)" class="ent ent-masked reveal" :class="{'img-wait': !loaded[c.id]}" role="button" tabindex="0"
              :aria-label="'Personnage masqué (arc ' + c.arc + ') — activer pour révéler'"
              @click="revealed[c.id] = true" @keydown.enter="revealed[c.id] = true">
              <img :src="asset('assets/img/' + c.id + '.webp')" class="lazy-img" :class="{loaded: loaded[c.id]}"
                alt="" aria-hidden="true" loading="lazy" decoding="async" @load="loaded[c.id] = true">
              <div class="veil"></div>
              <div class="mask-meta">
                <div class="mask-rune">✦</div>
                <h3>???</h3>
                <div class="mask-hint">Apparaît à l'arc {{ c.arc }}<br>Cliquer pour révéler</div>
              </div>
            </div>
            <router-link v-else :to="'/personnage/'+c.id" class="ent reveal" :class="{'img-wait': !loaded[c.id]}" :style="{'--c':c.color}"
              @mouseenter="prefetchDetail" @focus="prefetchDetail">
              <img :src="asset('assets/img/' + c.id + '.webp')" class="lazy-img" :class="{loaded: loaded[c.id]}"
                :alt="c.name" loading="lazy" decoding="async" @load="loaded[c.id] = true">
              <div class="veil"></div><div class="aura"></div>
              <div class="meta"><div class="role">{{ c.role }}</div><h3>{{ c.name }}</h3></div>
            </router-link>
          </template>
        </div>
      </template>
    </div>

    <!-- Mode Graphe -->
    <div v-show="viewMode === 'graph'" class="graph-container reveal" style="height: 600px; background: rgba(0,0,0,0.5); border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; position: relative;">
      <div id="d3-graph" style="width: 100%; height: 100%;"></div>
      <div class="graph-tooltip" v-if="tooltip" :style="{top: tooltip.y + 'px', left: tooltip.x + 'px'}">
        <h4>{{ tooltip.data.name }}</h4>
        <p>{{ tooltip.data.role }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { groups, characters } from '../data/characters.js'
import * as d3 from 'd3'
import { useRouter } from 'vue-router'
import { useSpoiler } from '../composables/useSpoiler.js'
import { asset } from '../assets.js'

const router = useRouter()
const { level, isSpoiler } = useSpoiler()

const chars = ref(characters)
const viewMode = ref('grid')
const tooltip = ref(null)
const revealed = ref({})            // cartes dévoilées individuellement
const loaded = ref({})              // portraits chargés (fondu + fin du skeleton)
const isMasked = (c) => isSpoiler(c.arc) && !revealed.value[c.id]

// précharge une seule fois le chunk de la fiche détail au survol/focus d'une vignette
let detailPrefetched = false
const prefetchDetail = () => {
  if (detailPrefetched) return
  detailPrefetched = true
  const comp = router.resolve({ name: 'personnage', params: { id: 'subaru' } }).matched[0]?.components?.default
  if (typeof comp === 'function') comp()
}

/* les éléments .reveal recréés (toggle grille/graphe, dévoilement, changement de
   progression) doivent être ré-observés par l'IntersectionObserver des effets */
const rescan = async () => {
  await nextTick()
  if (typeof window !== 'undefined' && window.__fx) window.__fx.scan()
}
watch([viewMode, level, revealed], rescan, { deep: true })

const charsOf = (gid) => characters.filter(c => c.group === gid)

// D3 Graph Logic
const graphInitialized = ref(false)

const initGraph = async () => {
  viewMode.value = 'graph'
  if (graphInitialized.value) return

  await nextTick()
  const container = document.getElementById('d3-graph')
  const width = container.clientWidth
  const height = container.clientHeight

  // Prepare data — le graphe ne montre que les personnages dans la progression déclarée
  const visible = characters.filter(c => !isSpoiler(c.arc))
  const nodes = visible.map(c => ({ id: c.id, name: c.name, color: c.color, role: c.role }))

  // Create some dummy links based on groups
  const links = []
  visible.forEach(c => {
    if (c.related) {
      c.related.forEach(rid => {
        if (nodes.find(n => n.id === rid)) {
          links.push({ source: c.id, target: rid })
        }
      })
    }
  })

  // If no explicit relations, link to subaru as central node
  if (links.length === 0) {
    visible.forEach(c => {
      if (c.id !== 'subaru' && c.group === 'principaux') links.push({ source: 'subaru', target: c.id })
      if (c.group === 'roswaal' && c.id !== 'roswaal') links.push({ source: 'roswaal', target: c.id })
      if (c.group === 'royale') links.push({ source: 'emilia', target: c.id })
    })
  }

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(100))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, height / 2))

  const svg = d3.select("#d3-graph").append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(d3.zoom().on("zoom", (event) => {
      g.attr("transform", event.transform)
    }))

  const g = svg.append("g")

  const link = g.append("g")
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke", "rgba(255,255,255,0.2)")
    .attr("stroke-width", 1.5)

  const node = g.append("g")
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", 15)
    .attr("fill", d => d.color || "#fff")
    .attr("stroke", "#fff")
    .attr("stroke-width", 2)
    .call(drag(simulation))
    .on("mouseover", (event, d) => {
      tooltip.value = { x: event.pageX + 10, y: event.pageY - 10, data: d }
    })
    .on("mouseout", () => { tooltip.value = null })
    .on("click", (event, d) => {
      router.push('/personnage/' + d.id)
    })

  const labels = g.append("g")
    .selectAll("text")
    .data(nodes)
    .join("text")
    .text(d => d.name.split(' ')[0])
    .attr("font-size", 10)
    .attr("fill", "#fff")
    .attr("dx", 20)
    .attr("dy", 4)
    .attr("font-family", "Inter")

  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y)

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)

    labels
      .attr("x", d => d.x)
      .attr("y", d => d.y)
  })

  function drag(simulation) {
    return d3.drag()
      .on("start", event => {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        event.subject.fx = event.subject.x
        event.subject.fy = event.subject.y
      })
      .on("drag", event => {
        event.subject.fx = event.x
        event.subject.fy = event.y
      })
      .on("end", event => {
        if (!event.active) simulation.alphaTarget(0)
        event.subject.fx = null
        event.subject.fy = null
      })
  }

  graphInitialized.value = true
}

// changement de progression → on reconstruit le graphe avec les personnages visibles
watch(level, () => {
  if (!graphInitialized.value) return
  const container = document.getElementById('d3-graph')
  if (container) container.innerHTML = ''
  graphInitialized.value = false
  if (viewMode.value === 'graph') initGraph()
})
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
.graph-tooltip {
  position: absolute;
  background: rgba(0,0,0,0.9);
  padding: 10px;
  border-radius: 4px;
  border: 1px solid var(--gold);
  pointer-events: none;
  z-index: 10;
  color: #fff;
  font-family: 'Inter', sans-serif;
}
.graph-tooltip h4 { margin: 0 0 5px 0; color: var(--gold); }
.graph-tooltip p { margin: 0; font-size: 0.8rem; opacity: 0.8; }
</style>
