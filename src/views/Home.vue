<template>
  <div>
    <header class="hero">
      <div class="hero-bg"></div>
      <div class="hero-circle" ref="hc1"></div><div class="hero-circle r" ref="hc2"></div>
      <div class="hero-in">
        <p class="hero-kicker">Re:ゼロから始める異世界生活</p>
        <h1>Re<span class="c">:</span><span class="g">Zero</span></h1>
        <p class="hero-tag">« Re:Vivre dans un autre monde à partir de zéro. » L'encyclopédie de l'anime et du light novel.</p>
        <div class="hero-cta">
          <router-link to="/personnages" class="btn">Les personnages</router-link>
          <router-link to="/oeuvre" class="btn ghost">Découvrir l'œuvre</router-link>
          <a class="btn blood" @click="rbd()">Return by Death</a>
        </div>
      </div>
    </header>
    <section class="page wrap">
      <div class="split">
        <div class="reveal">
          <span class="eyebrow">L'œuvre</span>
          <h2 class="ttl">Une autre vie,<br>recommencée depuis zéro</h2>
          <p class="lead" v-html="RZ.work.intro"></p>
          <router-link to="/oeuvre" class="btn" style="margin-top:14px">En savoir plus</router-link>
        </div>
        <div class="media reveal"><img src="/assets/img/key-subaru-emilia.jpg" alt="Subaru & Emilia" loading="lazy"></div>
      </div>
      <div class="stats reveal" style="margin-top:70px">
        <div class="stat"><div class="n">2016</div><div class="l">Première saison</div></div>
        <div class="stat"><div class="n">4</div><div class="l">Saisons animées</div></div>
        <div class="stat"><div class="n">10</div><div class="l">Arcs écrits</div></div>
        <div class="stat"><div class="n">∞</div><div class="l">Morts de Subaru</div></div>
      </div>
      <h2 class="sec-h reveal">Explorer l'encyclopédie</h2>
      <div class="grid cols3 reveal" style="margin-top:14px">
        <router-link to="/personnages" class="card"><span class="num">Casting</span><h3>Personnages</h3><p>Fiches détaillées : race, camp, pouvoir, statut et biographie.</p></router-link>
        <router-link to="/monde" class="card"><span class="num">Lore</span><h3>Monde & Magie</h3><p>Les quatre nations, le système de mana, les Bénédictions et le Culte des Sorcières.</p></router-link>
        <router-link to="/arcs" class="card"><span class="num">Récit</span><h3>Les 10 Arcs</h3><p>Du premier jour à Lugnica jusqu'au pays des Rois-Lions.</p></router-link>
        <router-link to="/lieux" class="card"><span class="num">Atlas</span><h3>Lieux</h3><p>La capitale, le Sanctuaire, Pristella, la Tour de Pleiades, Vollachia…</p></router-link>
        <router-link to="/bestiaire" class="card"><span class="num">Faune</span><h3>Bestiaire</h3><p>Les Trois Grands Fléaux et les créatures du mana.</p></router-link>
        <router-link to="/galerie" class="card"><span class="num">Visuels</span><h3>Galerie</h3><p>Illustrations officielles en plein écran.</p></router-link>
      </div>
    </section>
    <section class="quote-block wrap"><div class="reveal">
      <blockquote>« Je t'aime, du fond du cœur, <span class="hl">Emilia</span>. »</blockquote><cite>— Natsuki Subaru</cite>
    </div></section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RZ } from '../data/data.js'
import { fillCircles } from '../fx.js'

const rbd = () => {
  if (typeof window !== 'undefined' && window.__fx) window.__fx.rbd()
}

onMounted(() => {
  fillCircles()
})
</script>
