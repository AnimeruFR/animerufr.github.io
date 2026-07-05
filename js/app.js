/* =====================================================================
   RE:ZERO — Encyclopédie · application Vue 3 (build global, sans bundler)
   ===================================================================== */
const { createApp } = Vue;

/* ---------- cercle magique (SVG décoratif + transition) ---------- */
function magicCircle(c1, c2) {
  c1 = c1 || "#8b5cf6"; c2 = c2 || "#7fd8ff";
  const runes = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛋᛏᛒᛖᛗᛚᛜᛞᛟ";
  let rt = "", ticks = "";
  for (let i = 0; i < 28; i++) { const a = i / 28 * 360; rt += `<text x="200" y="34" font-size="13" fill="${c2}" opacity=".85" transform="rotate(${a} 200 200)" text-anchor="middle" font-family="Cinzel,serif">${runes[Math.floor(Math.random()*runes.length)]}</text>`; }
  for (let i = 0; i < 72; i++) { const a = i / 72 * 360, l = i % 6 === 0 ? 12 : 6; ticks += `<line x1="200" y1="62" x2="200" y2="${62+l}" stroke="${c1}" stroke-width="1" opacity=".6" transform="rotate(${a} 200 200)"/>`; }
  return `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <g stroke="${c1}" fill="none" stroke-width="1.4">
      <circle cx="200" cy="200" r="190" opacity=".5"/><circle cx="200" cy="200" r="170" opacity=".7"/>
      <circle cx="200" cy="200" r="120" opacity=".6"/><circle cx="200" cy="200" r="92" opacity=".5" stroke="${c2}"/>
      <circle cx="200" cy="200" r="58" opacity=".7" stroke="${c2}"/></g>
    ${ticks}
    <g stroke="${c2}" fill="none" stroke-width="1.2" opacity=".85"><polygon points="200,52 328,290 72,290"/><polygon points="200,348 72,110 328,110"/></g>
    <g stroke="${c1}" fill="none" stroke-width="1" opacity=".7"><polygon points="200,82 305,260 95,260"/><polygon points="200,318 95,140 305,140"/></g>
    ${rt}<circle cx="200" cy="200" r="14" fill="${c2}" opacity=".9"/><circle cx="200" cy="200" r="26" fill="none" stroke="${c1}" stroke-width="1.2"/></svg>`;
}

function parseHash() {
  const h = (location.hash || "#/").replace(/^#/, "");
  const parts = h.split("/").filter(Boolean); // ['personnage','emilia']
  return { name: parts[0] || "home", param: parts[1] || null, full: location.hash || "#/" };
}

const NAV = [
  { h: "#/", k: "home", label: "Accueil" },
  { h: "#/oeuvre", k: "oeuvre", label: "L'Œuvre" },
  { h: "#/personnages", k: "personnages", label: "Personnages" },
  { h: "#/monde", k: "monde", label: "Monde & Magie" },
  { h: "#/arcs", k: "arcs", label: "Arcs" },
  { h: "#/lieux", k: "lieux", label: "Lieux" },
  { h: "#/bestiaire", k: "bestiaire", label: "Bestiaire" },
  { h: "#/glossaire", k: "glossaire", label: "Glossaire" },
  { h: "#/galerie", k: "galerie", label: "Galerie" },
  { h: "#/routes-if", k: "routes-if", label: "Routes IF" },
];
const ATMOS = { home:"bg-r2dj7j", oeuvre:"bg-r2dj7j", personnages:"bg-5d5zv8", personnage:"bg-5d5zv8",
  monde:"bg-we27dq", arcs:"bg-dpdmwj", lieux:"bg-k9jm5q", bestiaire:"bg-6lwx1q",
  glossaire:"bg-vq3pgm", galerie:"bg-5d5zv8", "routes-if":"bg-6qp5gx" };
const THEMES = ["satella","emilia","rem","ram","roswaal","beatrice","reinhard","subaru"];
const TC = { satella:["#8b5cf6","#7fd8ff"], emilia:["#74d4ff","#cdeeff"], rem:["#5b8eff","#a9c8ff"],
  ram:["#ff7ea8","#ffd0e0"], roswaal:["#a877ff","#e7c873"], beatrice:["#e7c873","#ffe9a8"],
  reinhard:["#e7c873","#ff9b7a"], subaru:["#e9384b","#b59bff"] };

const app = createApp({
  data() {
    return { route: parseHash(), q: "", menuOpen: false, scrolled: false,
      theme: localStorage.getItem("rz-theme") || "satella", themeOpen: false,
      THEMES, TC, NAV, RZ };
  },
  computed: {
    chars() { return RZ.characters; },
    atmosBg() { const k = ATMOS[this.route.name] || "bg-r2dj7j"; return `url(assets/img/${k}.jpg)`; },
    character() { return RZ.characters.find(c => c.id === this.route.param) || null; },
    results() {
      const q = this.norm(this.q.trim());
      if (q.length < 2) return null;
      const r = [];
      RZ.characters.forEach(c => { if (this.norm(c.name + " " + c.role + " " + c.epi).includes(q)) r.push({ t:"personnage", id:c.id, name:c.name, sub:c.role }); });
      RZ.locations.forEach(l => { if (this.norm(l.name).includes(q)) r.push({ t:"lieu", to:"#/lieux", name:l.name, sub:"Lieu" }); });
      RZ.terms.forEach(t => { if (this.norm(t.t).includes(q)) r.push({ t:"terme", to:"#/glossaire", name:t.t, sub:"Glossaire" }); });
      RZ.arcs.forEach(a => { if (this.norm("arc " + a.n + " " + a.title).includes(q)) r.push({ t:"arc", to:"#/arcs", name:"Arc " + a.n + " — " + a.title, sub:"Arc" }); });
      return r.slice(0, 12);
    },
  },
  methods: {
    norm(s){ return (s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(); },
    img(id){ return `assets/img/${id}.webp`; },
    charsOf(g){ return RZ.characters.filter(c => c.group === g); },
    go(h){
      this.menuOpen = false; this.themeOpen = false;
      if (h === this.route.full) { window.scrollTo({top:0,behavior:"smooth"}); return; }
      if (window.__fx) window.__fx.spell();
      setTimeout(() => { location.hash = h; }, 470);
    },
    openChar(id){ this.q=""; this.go("#/personnage/" + id); },
    setTheme(t){ this.theme = t; this.themeOpen=false;
      if (t === "satella") document.documentElement.removeAttribute("data-theme");
      else document.documentElement.setAttribute("data-theme", t);
      localStorage.setItem("rz-theme", t); },
    share(){ const d={title:document.title,url:location.href};
      if (navigator.share) navigator.share(d).catch(()=>{});
      else navigator.clipboard && navigator.clipboard.writeText(location.href); },
    rbd(){ if (window.__fx) window.__fx.rbd(); },
  },
  mounted(){
    this.setTheme(this.theme);
    window.addEventListener("hashchange", () => {
      this.route = parseHash(); this.q="";
      window.scrollTo(0,0);
      this.$nextTick(() => window.__fx && window.__fx.scan());
    });
    window.addEventListener("scroll", () => { this.scrolled = window.scrollY > 40; }, { passive:true });
    this.$nextTick(() => window.__fx && window.__fx.scan());
  },
  template: `
<div>
  <div class="atmos" :style="{backgroundImage: route.name==='home' ? 'none' : atmosBg}"></div>

  <nav class="nav" :class="{scrolled}">
    <div class="brand" @click="go('#/')"><span class="sigil"></span><span><span class="re">Re:</span><span class="zero">Zero</span></span></div>
    <div class="menu" :class="{open:menuOpen}">
      <a v-for="n in NAV" :key="n.k" :class="{active: route.name===n.k || (n.k==='personnages' && route.name==='personnage')}" @click="go(n.h)">{{ n.label }}</a>
    </div>
    <div class="nav-tools">
      <input class="nav-search" v-model="q" placeholder="Rechercher…" aria-label="Rechercher" />
      <div class="theme-pick" :class="{open:themeOpen}">
        <button class="theme-btn" aria-label="Thème par camp" @click.stop="themeOpen=!themeOpen"></button>
        <div class="theme-menu">
          <button v-for="t in THEMES" :key="t" class="swatch" :class="{active:theme===t}" :title="t"
            :style="{background:'linear-gradient(135deg,'+TC[t][0]+','+TC[t][1]+')'}" @click="setTheme(t)"></button>
        </div>
      </div>
      <div class="burger" @click="menuOpen=!menuOpen"><span></span><span></span><span></span></div>
    </div>
  </nav>

  <main>
    <!-- ====== RECHERCHE ====== -->
    <section v-if="results" class="page wrap">
      <span class="eyebrow">Recherche</span>
      <h1 class="ttl">Résultats pour « <span class="accent">{{ q }}</span> »</h1>
      <div v-if="results.length" class="grid cols2" style="margin-top:26px">
        <a v-for="(r,i) in results" :key="i" class="card" @click="r.t==='personnage'?openChar(r.id):go(r.to)">
          <span class="num">{{ r.sub }}</span><h3>{{ r.name }}</h3></a>
      </div>
      <p v-else class="lead" style="margin-top:20px">Aucun résultat. Essaie « Emilia », « Return », « Pristella »…</p>
    </section>

    <!-- ====== HOME ====== -->
    <template v-else-if="route.name==='home'">
      <header class="hero">
        <div class="hero-bg"></div>
        <div class="hero-circle" ref="hc1"></div><div class="hero-circle r" ref="hc2"></div>
        <div class="hero-in">
          <p class="hero-kicker">Re:ゼロから始める異世界生活</p>
          <h1>Re<span class="c">:</span><span class="g">Zero</span></h1>
          <p class="hero-tag">« Re:Vivre dans un autre monde à partir de zéro. » L'encyclopédie de l'anime et du light novel.</p>
          <div class="hero-cta">
            <a class="btn" @click="go('#/personnages')">Les personnages</a>
            <a class="btn ghost" @click="go('#/oeuvre')">Découvrir l'œuvre</a>
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
            <a class="btn" style="margin-top:14px" @click="go('#/oeuvre')">En savoir plus</a>
          </div>
          <div class="media reveal"><img src="assets/img/key-subaru-emilia.jpg" alt="Subaru & Emilia" loading="lazy"></div>
        </div>
        <div class="stats reveal" style="margin-top:70px">
          <div class="stat"><div class="n">2016</div><div class="l">Première saison</div></div>
          <div class="stat"><div class="n">3</div><div class="l">Saisons animées</div></div>
          <div class="stat"><div class="n">10</div><div class="l">Arcs écrits</div></div>
          <div class="stat"><div class="n">∞</div><div class="l">Morts de Subaru</div></div>
        </div>
        <h2 class="sec-h reveal">Explorer l'encyclopédie</h2>
        <div class="grid cols3 reveal" style="margin-top:14px">
          <a class="card" @click="go('#/personnages')"><span class="num">Casting</span><h3>Personnages</h3><p>{{ chars.length }} fiches détaillées : race, camp, pouvoir, statut et biographie.</p></a>
          <a class="card" @click="go('#/monde')"><span class="num">Lore</span><h3>Monde & Magie</h3><p>Les quatre nations, le système de mana, les Bénédictions et le Culte des Sorcières.</p></a>
          <a class="card" @click="go('#/arcs')"><span class="num">Récit</span><h3>Les 10 Arcs</h3><p>Du premier jour à Lugnica jusqu'au pays des Rois-Lions.</p></a>
          <a class="card" @click="go('#/lieux')"><span class="num">Atlas</span><h3>Lieux</h3><p>La capitale, le Sanctuaire, Pristella, la Tour de Pleiades, Vollachia…</p></a>
          <a class="card" @click="go('#/bestiaire')"><span class="num">Faune</span><h3>Bestiaire</h3><p>Les Trois Grands Fléaux et les créatures du mana.</p></a>
          <a class="card" @click="go('#/galerie')"><span class="num">Visuels</span><h3>Galerie</h3><p>Illustrations officielles en plein écran.</p></a>
        </div>
      </section>
      <section class="quote-block wrap"><div class="reveal">
        <blockquote>« Je t'aime, du fond du cœur, <span class="hl">Emilia</span>. »</blockquote><cite>— Natsuki Subaru</cite>
      </div></section>
    </template>

    <!-- ====== PERSONNAGES (index) ====== -->
    <section v-else-if="route.name==='personnages'" class="page wrap">
      <span class="eyebrow">Le casting de Lugnica & au-delà</span>
      <h1 class="ttl">Les <span class="accent">Personnages</span></h1>
      <p class="sub">{{ chars.length }} fiches encyclopédiques. Clique pour ouvrir la biographie complète.</p>
      <template v-for="g in RZ.groups" :key="g.id">
        <h2 class="group-h">{{ g.label }}</h2>
        <div class="ent-grid">
          <div v-for="c in charsOf(g.id)" :key="c.id" class="ent reveal" :style="{'--c':c.color}" @click="openChar(c.id)">
            <img :src="img(c.id)" :alt="c.name" loading="lazy">
            <div class="veil"></div><div class="aura"></div>
            <div class="meta"><div class="role">{{ c.role }}</div><h3>{{ c.name }}</h3></div>
          </div>
        </div>
      </template>
    </section>

    <!-- ====== PERSONNAGE (fiche) ====== -->
    <section v-else-if="route.name==='personnage' && character" class="page wrap" :style="{'--c':character.color}">
      <span class="back-link" @click="go('#/personnages')">← Tous les personnages</span>
      <div class="article">
        <div class="body">
          <div class="art-head">
            <div class="kanji">{{ character.kanji }}</div>
            <h1>{{ character.name }}</h1>
            <div class="epi">{{ character.epi }}</div>
          </div>
          <p class="lead" v-html="character.lead"></p>
          <blockquote v-if="character.quote" class="quote-pull">« {{ character.quote }} »</blockquote>
          <template v-for="(s,i) in character.sections" :key="i">
            <h2>{{ s.h }}</h2><div v-html="s.html"></div>
          </template>
          <div v-if="character.related && character.related.length">
            <h2>Voir aussi</h2>
            <div class="related"><a v-for="rid in character.related" :key="rid" @click="openChar(rid)">{{ (chars.find(x=>x.id===rid)||{}).name || rid }}</a></div>
          </div>
        </div>
        <aside>
          <div class="infobox">
            <div class="ib-img" :style="{backgroundImage:'url('+img(character.id)+')'}" :data-full="img(character.id)"></div>
            <div class="ib-name"><h3>{{ character.name }}</h3><div class="k">{{ character.kanji }}</div></div>
            <dl>
              <div><dt>Rôle</dt><dd>{{ character.role }}</dd></div>
              <div><dt>Race</dt><dd>{{ character.race }}</dd></div>
              <div v-if="character.age"><dt>Âge</dt><dd>{{ character.age }}</dd></div>
              <div><dt>Affiliation</dt><dd>{{ character.aff }}</dd></div>
              <div><dt>Statut</dt><dd>{{ character.status }}</dd></div>
              <div v-if="character.va"><dt>Voix (JP)</dt><dd>{{ character.va }}</dd></div>
              <div v-if="character.abilities && character.abilities.length"><dt>Pouvoirs</dt><dd>{{ character.abilities.join(' · ') }}</dd></div>
            </dl>
          </div>
        </aside>
      </div>
    </section>

    <!-- ====== ŒUVRE ====== -->
    <section v-else-if="route.name==='oeuvre'" class="page wrap">
      <span class="eyebrow">L'œuvre originale</span>
      <h1 class="ttl">Re:Zero, l'<span class="accent">œuvre</span></h1>
      <div class="split" style="margin-top:26px">
        <div class="reveal"><p class="lead" v-html="RZ.work.intro"></p><p v-html="RZ.work.novel"></p><p v-html="RZ.work.anime"></p></div>
        <div class="media reveal"><img src="assets/img/cover-vol1.webp" alt="Light novel volume 1" loading="lazy"></div>
      </div>
      <h2 class="sec-h reveal">Fiche technique</h2>
      <div class="grid cols3 reveal">
        <div class="card" v-for="(s,i) in RZ.work.staff" :key="i"><span class="num">{{ s.r }}</span><h3 style="font-size:1.1rem">{{ s.n }}</h3></div>
      </div>
      <h2 class="sec-h reveal">Musiques & génériques</h2>
      <div class="grid cols4 reveal">
        <a v-for="(o,i) in RZ.work.ost" :key="i" class="card" :href="'https://www.youtube.com/results?search_query='+o.q" target="_blank" rel="noopener">
          <span class="num">{{ o.tag }}</span><h3>{{ o.t }}</h3><p>{{ o.by }}</p><p style="color:var(--ice);font-size:.8rem;letter-spacing:.1em">▶ ÉCOUTER</p></a>
      </div>
      <h2 class="sec-h reveal">Films & OAV</h2>
      <div class="grid cols3 reveal">
        <div v-for="(f,i) in RZ.work.films" :key="i" class="card"><span class="num">{{ f.y }}</span><h3>{{ f.t }}</h3><p>{{ f.d }}</p></div>
      </div>
      <h2 class="sec-h reveal">Chronologie</h2>
      <div class="tl reveal"><div v-for="(e,i) in RZ.work.timeline" :key="i" class="tl-i"><span class="y">{{ e.y }}</span><h3>{{ e.h }}</h3><p>{{ e.p }}</p></div></div>
    </section>

    <!-- ====== MONDE & MAGIE ====== -->
    <section v-else-if="route.name==='monde'" class="page wrap">
      <span class="eyebrow">Le royaume de Lugnica & le continent</span>
      <h1 class="ttl">Monde & <span class="accent">Magie</span></h1>
      <h2 class="sec-h reveal">Les Quatre Grandes Nations</h2>
      <div class="grid cols4 reveal">
        <div v-for="(n,i) in RZ.nations" :key="i" class="card"><span class="num">{{ n.tag }}</span><h3>{{ n.name }}</h3><p>{{ n.desc }}</p></div>
      </div>
      <h2 class="sec-h reveal">La magie</h2>
      <p class="lead reveal" v-html="RZ.magic.gate"></p>
      <div class="grid cols3 reveal" style="margin-top:16px">
        <div v-for="(a,i) in RZ.magic.attributes" :key="i" class="card"><span class="num">{{ a.spell }}</span><h3>{{ a.name }}</h3><p>{{ a.desc }}</p></div>
      </div>
      <h2 class="sec-h reveal">Les Bénédictions Divines</h2>
      <div class="grid cols4 reveal">
        <div v-for="(b,i) in RZ.magic.blessings" :key="i" class="card"><span class="num">{{ b.type }}</span><h3 style="font-size:1.1rem">{{ b.name }}</h3><p>{{ b.desc }}</p></div>
      </div>
      <h2 class="sec-h reveal">Le Culte des Sorcières & les Archevêques</h2>
      <p class="lead reveal" v-html="RZ.cult.intro"></p>
      <div class="grid cols3 reveal" style="margin-top:16px">
        <div v-for="(a,i) in RZ.cult.archbishops" :key="i" class="card"><span class="num">{{ a.sin }}</span><h3>{{ a.holder }}</h3><p>{{ a.auth }}</p></div>
      </div>
      <h2 class="sec-h reveal">Les sept Sorcières des Péchés</h2>
      <div class="grid cols3 reveal">
        <div v-for="(w,i) in RZ.cult.witches" :key="i" class="card"><h3 style="font-size:1.1rem">{{ w.name }}</h3><p>{{ w.desc }}</p></div>
      </div>
    </section>

    <!-- ====== ARCS ====== -->
    <section v-else-if="route.name==='arcs'" class="page wrap">
      <span class="eyebrow">Le voyage complet</span>
      <h1 class="ttl">Les <span class="accent">Arcs</span></h1>
      <p class="sub">Dix arcs déjà écrits — la carte du périple de Subaru, du premier cri au présent.</p>
      <div class="grid" style="gap:22px;max-width:880px;margin-top:24px">
        <div v-for="a in RZ.arcs" :key="a.n" class="card reveal" :style="a.n===10?{borderColor:'rgba(231,200,115,.4)'}:{}">
          <span class="num" :style="a.n===10?{color:'var(--gold)'}:{}">Arc {{ a.n }} · {{ a.status }} <span style="opacity:.6">— {{ a.romaji }}</span></span>
          <h3>{{ a.title }}</h3><p>{{ a.summary }}</p><p style="margin-top:.6rem">{{ a.detail }}</p>
        </div>
      </div>
    </section>

    <!-- ====== LIEUX ====== -->
    <section v-else-if="route.name==='lieux'" class="page wrap">
      <span class="eyebrow">Atlas du continent</span><h1 class="ttl">Les <span class="accent">Lieux</span></h1>
      <div class="place-grid reveal" style="margin-top:24px">
        <div v-for="(l,i) in RZ.locations" :key="i" class="place">
          <div class="pimg" :style="{backgroundImage: l.img ? 'url(assets/img/'+l.img+'.webp)' : 'linear-gradient(160deg,#1a1430,#0a0b16)'}" :data-full="l.img?('assets/img/'+l.img+'.webp'):''"></div>
          <div class="pbody"><span class="tag">{{ l.tag }}</span><h3>{{ l.name }}</h3><p>{{ l.desc }}</p></div>
        </div>
      </div>
    </section>

    <!-- ====== BESTIAIRE ====== -->
    <section v-else-if="route.name==='bestiaire'" class="page wrap">
      <span class="eyebrow">Créatures du mana</span><h1 class="ttl">Le <span class="accent">Bestiaire</span></h1>
      <div class="place-grid reveal" style="margin-top:24px">
        <div v-for="(b,i) in RZ.beasts" :key="i" class="place">
          <div class="pimg" :style="{backgroundImage: b.img ? 'url(assets/img/'+b.img+'.webp)' : 'radial-gradient(circle at 50% 35%,rgba(139,92,246,.28),transparent 60%),linear-gradient(160deg,#180f2a,#0a0b16)'}" :data-full="b.img?('assets/img/'+b.img+'.webp'):''"></div>
          <div class="pbody"><span class="tag">{{ b.tag }}</span><h3>{{ b.name }}</h3><p>{{ b.desc }}</p></div>
        </div>
      </div>
    </section>

    <!-- ====== GLOSSAIRE ====== -->
    <section v-else-if="route.name==='glossaire'" class="page wrap">
      <span class="eyebrow">Lexique de l'isekai</span><h1 class="ttl"><span class="accent">Glossaire</span></h1>
      <div class="glossary reveal" style="margin-top:24px">
        <div v-for="(t,i) in RZ.terms" :key="i" class="term"><h3>{{ t.t }}</h3><p>{{ t.d }}</p></div>
      </div>
    </section>

    <!-- ====== GALERIE ====== -->
    <section v-else-if="route.name==='galerie'" class="page wrap">
      <span class="eyebrow">Illustrations officielles</span><h1 class="ttl">La <span class="accent">Galerie</span></h1>
      <p class="sub">Clique sur une image pour l'afficher en plein écran.</p>
      <div class="gallery reveal" style="margin-top:24px">
        <img v-for="(c,i) in chars" :key="i" :src="img(c.id)" :data-full="img(c.id)" :alt="c.name" loading="lazy">
      </div>
    </section>

    <!-- ====== ROUTES IF ====== -->
    <section v-else-if="route.name==='routes-if'" class="page wrap">
      <span class="eyebrow">Les timelines alternatives</span><h1 class="ttl">Routes <span class="accent">IF</span></h1>
      <p class="sub">Récits « et si… » officiels où Subaru a fait l'autre choix.</p>
      <div class="grid cols3 reveal" style="margin-top:24px">
        <div v-for="(r,i) in RZ.ifroutes" :key="i" class="card"><span class="num">{{ r.tag }}</span><h3>{{ r.title }}</h3><p>{{ r.desc }}</p></div>
      </div>
    </section>

    <!-- ====== 404 ====== -->
    <section v-else class="page wrap" style="text-align:center">
      <h1 class="ttl">Page introuvable</h1><p class="sub" style="margin:0 auto">Cette page s'est perdue dans une boucle temporelle.</p>
      <a class="btn" style="margin-top:20px" @click="go('#/')">Retour à l'accueil</a>
    </section>
  </main>

  <footer class="footer">
    <div class="brand" style="justify-content:center" @click="go('#/')"><span class="sigil"></span><span><span class="re">Re:</span><span class="zero">Zero</span></span></div>
    <p style="margin-top:12px">Encyclopédie fan non officielle — hommage à l'œuvre de Tappei Nagatsuki & Shinichirō Otsuka.</p>
    <p class="src">Sources : <a href="https://rezero.fandom.com/wiki/Re:Zero_Wiki" target="_blank" rel="noopener">Re:Zero Wiki</a> · <a href="https://rezerowebnovelfr.wordpress.com" target="_blank" rel="noopener">rezerowebnovelfr</a></p>
    <div style="margin-top:14px"><a class="btn ghost" @click="share()">Partager</a></div>
    <div class="easter" @click="rbd()">✦ Si tu lis ceci… reviens de la mort ✦</div>
  </footer>
</div>`,
});

const vm = app.mount("#app");

/* fill hero circles after mount + on route change */
function fillCircles(){
  document.querySelectorAll(".hero-circle").forEach((el,i)=>{ if(!el.dataset.f){ el.innerHTML = magicCircle(i?"#7fd8ff":"#8b5cf6", i?"#8b5cf6":"#7fd8ff"); el.dataset.f=1; } });
}

/* ===================== EFFECTS (hors Vue) ===================== */
(function(){
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* particules */
  const cv = document.createElement("canvas"); cv.id="particles"; document.body.appendChild(cv);
  const ctx = cv.getContext("2d"); let W,H,parts=[];
  const pal=["#b89bff","#8b5cf6","#7fd8ff"];
  function rs(){ W=cv.width=innerWidth; H=cv.height=innerHeight; } rs(); addEventListener("resize",rs);
  for(let i=0;i<(innerWidth<700?42:80);i++) parts.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2.2+.6,vx:(Math.random()-.5)*.3,vy:Math.random()*.5+.15,a:Math.random()*.6+.2,c:pal[(Math.random()*3)|0],s:Math.random()*6,sw:Math.random()*.02+.005});
  let bursts=[];
  function tick(){ if(document.hidden){requestAnimationFrame(tick);return;} ctx.clearRect(0,0,W,H);
    for(const p of parts){ p.s+=p.sw; p.x+=p.vx+Math.sin(p.s)*.4; p.y+=p.vy; if(p.y>H+10){p.y=-10;p.x=Math.random()*W;} if(p.x>W+10)p.x=-10; if(p.x<-10)p.x=W+10;
      ctx.globalAlpha=p.a; ctx.fillStyle=p.c; ctx.shadowColor=p.c; ctx.shadowBlur=8; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,7); ctx.fill(); }
    for(let i=bursts.length-1;i>=0;i--){ const b=bursts[i]; b.x+=b.vx;b.y+=b.vy;b.vx*=.95;b.vy*=.95;b.a-=.02; if(b.a<=0){bursts.splice(i,1);continue;} ctx.globalAlpha=b.a;ctx.fillStyle=b.c;ctx.shadowColor=b.c;ctx.shadowBlur=12;ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,7);ctx.fill(); }
    ctx.globalAlpha=1;ctx.shadowBlur=0; requestAnimationFrame(tick); }
  if(!reduce) tick();
  function burst(){ for(let i=0;i<60;i++) bursts.push({x:W/2,y:H/2,vx:(Math.random()-.5)*14,vy:(Math.random()-.5)*14,r:Math.random()*3+1,a:1,c:pal[(Math.random()*3)|0]}); }

  /* transition "sort" */
  const spell=document.createElement("div"); spell.id="spell"; spell.innerHTML='<div class="g"></div><div class="incant" style="position:absolute;bottom:14%;left:0;right:0;text-align:center;font-family:Cinzel,serif;letter-spacing:.5em;text-transform:uppercase;color:#bdecff;font-size:1.1rem;text-shadow:0 0 24px rgba(127,216,255,.6);opacity:0;transition:opacity .4s"></div>';
  document.body.appendChild(spell);
  const sg=spell.querySelector(".g"); sg.innerHTML=magicCircle();
  const incant=spell.querySelector(".incant");
  const words=["Ul Goa","El Huma","Fula","El Minya","Al Shamak","Cor Leonis","Vita"];
  function playSpell(){ if(reduce) return;
    spell.classList.add("on"); incant.textContent="— "+words[(Math.random()*words.length)|0]+" —"; incant.style.opacity=1;
    sg.style.transition="none"; sg.style.transform="scale(.2) rotate(-120deg)"; sg.style.opacity=0;
    requestAnimationFrame(()=>{ sg.style.transition="transform .5s cubic-bezier(.2,.8,.2,1),opacity .4s"; sg.style.transform="scale(1) rotate(0)"; sg.style.opacity=1; });
    setTimeout(burst,430);
    setTimeout(()=>{ spell.classList.remove("on"); incant.style.opacity=0; }, 760);
  }

  /* Return by Death */
  const rbd=document.createElement("div"); rbd.id="rbd"; rbd.innerHTML='<div class="hand">🖐</div><div class="h">死に戻り<br><span style="font-size:.4em;letter-spacing:.3em">RETURN BY DEATH</span></div>'; document.body.appendChild(rbd);
  let rbdBusy=false;
  function playRbd(){ if(rbdBusy) return; rbdBusy=true; rbd.classList.add("on");
    try{ const AC=window.AudioContext||window.webkitAudioContext; const ac=new AC(); if(ac.state==="suspended")ac.resume(); const now=ac.currentTime; const m=ac.createGain(); m.gain.value=.9; m.connect(ac.destination);
      const nb=ac.createBuffer(1,ac.sampleRate*2,ac.sampleRate); const nd=nb.getChannelData(0); for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
      (()=>{const o=ac.createOscillator(),g=ac.createGain();o.type="sine";o.frequency.setValueAtTime(150,now);o.frequency.exponentialRampToValueAtTime(28,now+.6);g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(.9,now+.02);g.gain.exponentialRampToValueAtTime(.0001,now+.7);o.connect(g);g.connect(m);o.start(now);o.stop(now+.75);})();
      [.55,.9,1.45].forEach(t=>{const s=now+t,o=ac.createOscillator(),g=ac.createGain();o.type="sine";o.frequency.setValueAtTime(75,s);o.frequency.exponentialRampToValueAtTime(38,s+.18);g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(.85,s+.04);g.gain.exponentialRampToValueAtTime(.0001,s+.32);o.connect(g);g.connect(m);o.start(s);o.stop(s+.34);});
      (()=>{const t=now+2.2,o=ac.createOscillator(),g=ac.createGain(),lp=ac.createBiquadFilter();o.type="sawtooth";o.frequency.setValueAtTime(60,t);o.frequency.exponentialRampToValueAtTime(1600,t+1.4);lp.type="lowpass";lp.frequency.setValueAtTime(400,t);lp.frequency.exponentialRampToValueAtTime(5000,t+1.4);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.22,t+.3);g.gain.exponentialRampToValueAtTime(.0001,t+1.5);o.connect(lp);lp.connect(g);g.connect(m);o.start(t);o.stop(t+1.55);})();
      setTimeout(()=>{try{ac.close();}catch(e){}},4500);
    }catch(e){}
    setTimeout(()=>{ rbd.classList.remove("on"); rbdBusy=false; }, 4300);
  }
  let seq="",hold=null;
  addEventListener("keydown",e=>{ if(e.key&&e.key.length===1){seq=(seq+e.key.toLowerCase()).slice(-5); if(seq==="death"){playRbd();seq="";}} if((e.key==="r"||e.key==="R")&&!hold&&!e.repeat) hold=setTimeout(playRbd,1400); });
  addEventListener("keyup",e=>{ if(e.key==="r"||e.key==="R"){clearTimeout(hold);hold=null;} });

  /* lightbox (délégation) */
  const lb=document.createElement("div"); lb.id="lightbox"; lb.innerHTML='<button class="x" aria-label="Fermer">✕</button><img alt="">'; document.body.appendChild(lb);
  const lbi=lb.querySelector("img");
  lb.querySelector(".x").addEventListener("click",()=>lb.classList.remove("on"));
  lb.addEventListener("click",e=>{ if(e.target===lb) lb.classList.remove("on"); });
  addEventListener("keydown",e=>{ if(e.key==="Escape") lb.classList.remove("on"); });
  document.addEventListener("click",e=>{
    const im=e.target.closest("img[data-full],[data-full]");
    if(im && im.getAttribute("data-full")){ lbi.src=im.getAttribute("data-full"); lb.classList.add("on"); return; }
    const g=e.target.closest(".gallery img, .ib-img"); // ib-img has data-full handled above
  });

  /* progress + back-to-top + cursor */
  const pr=document.createElement("div"); pr.id="progress"; document.body.appendChild(pr);
  const tt=document.createElement("button"); tt.id="totop"; tt.innerHTML="↑"; tt.setAttribute("aria-label","Haut"); document.body.appendChild(tt);
  tt.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
  addEventListener("scroll",()=>{ const h=document.documentElement,mx=h.scrollHeight-h.clientHeight; pr.style.width=(mx>0?h.scrollTop/mx*100:0)+"%"; tt.classList.toggle("on",h.scrollTop>600); },{passive:true});
  if(!reduce && matchMedia("(pointer:fine)").matches){ let last=0; addEventListener("mousemove",e=>{ const n=performance.now(); if(n-last<30)return; last=n; const s=document.createElement("div"); s.className="cursor-spark"; s.style.left=e.clientX+"px"; s.style.top=e.clientY+"px"; const c=pal[(Math.random()*3)|0]; s.style.background="radial-gradient(circle,"+c+",transparent)"; document.body.appendChild(s); s.animate([{transform:"translate(0,0) scale(1)",opacity:.9},{transform:"translate("+((Math.random()-.5)*30)+"px,"+((Math.random()-.5)*30+10)+"px) scale(0)",opacity:0}],{duration:680,easing:"ease-out"}).onfinish=()=>s.remove(); }); }

  /* reveal scan (réutilisable à chaque changement de page) */
  let io;
  function scan(){ fillCircles(); if(!io) io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target);}}),{threshold:.12});
    document.querySelectorAll(".reveal:not(.in)").forEach(el=>io.observe(el)); }

  window.__fx = { spell:playSpell, rbd:playRbd, scan };
  setTimeout(scan, 60);
})();
