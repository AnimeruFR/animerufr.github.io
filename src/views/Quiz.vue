<template>
  <div class="page wrap">
    <span class="eyebrow">Teste tes connaissances</span>
    <h1 class="ttl">Le <span class="accent">Quiz</span></h1>
    <p class="sub">Deux épreuves : un quiz de culture Re:Zero et un test « quel personnage es-tu ? ». Les questions au-delà de ta progression ({{ levelLabel }}) sont écartées.</p>

    <div class="view-toggle" style="margin: 22px 0;">
      <button :class="{active: mode === 'knowledge'}" @click="setMode('knowledge')">Connaissances</button>
      <button :class="{active: mode === 'personality'}" @click="setMode('personality')">Quel personnage es-tu ?</button>
    </div>

    <!-- ================= QUIZ DE CONNAISSANCES ================= -->
    <div v-if="mode === 'knowledge'" class="quiz-card">
      <template v-if="!kDone">
        <div class="quiz-progress">
          <span>Question {{ kIndex + 1 }} / {{ kPool.length }}</span>
          <span>Score : {{ kScore }}</span>
        </div>
        <div class="quiz-bar"><div class="quiz-bar-fill" :style="{width: ((kIndex) / kPool.length * 100) + '%'}"></div></div>

        <h2 class="quiz-q">{{ current.q }}</h2>
        <div class="quiz-options">
          <button v-for="(opt, i) in current.a" :key="i" class="quiz-opt"
            :class="answerClass(i)" :disabled="answered" @click="answer(i)">
            {{ opt }}
          </button>
        </div>

        <div v-if="answered" class="quiz-why">
          <strong>{{ picked === current.c ? '✓ Exact !' : '✗ Raté.' }}</strong> {{ current.why }}
          <div style="margin-top:14px">
            <button class="btn" @click="next">{{ kIndex + 1 < kPool.length ? 'Question suivante' : 'Voir mon score' }}</button>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="quiz-result">
          <div class="quiz-score-big">{{ kScore }} / {{ kPool.length }}</div>
          <h2>{{ verdict }}</h2>
          <p>{{ verdictSub }}</p>
          <button class="btn" style="margin-top:18px" @click="restartKnowledge">Rejouer</button>
        </div>
      </template>
    </div>

    <!-- ================= TEST DE PERSONNALITÉ ================= -->
    <div v-else class="quiz-card">
      <template v-if="!pResult">
        <div class="quiz-progress"><span>Question {{ pIndex + 1 }} / {{ personalityQuestions.length }}</span></div>
        <div class="quiz-bar"><div class="quiz-bar-fill" :style="{width: (pIndex / personalityQuestions.length * 100) + '%'}"></div></div>

        <h2 class="quiz-q">{{ personalityQuestions[pIndex].q }}</h2>
        <div class="quiz-options">
          <button v-for="(opt, i) in personalityQuestions[pIndex].a" :key="i" class="quiz-opt" @click="pAnswer(opt)">
            {{ opt.t }}
          </button>
        </div>
      </template>

      <template v-else>
        <div class="quiz-result">
          <span class="eyebrow">Tu es…</span>
          <router-link :to="'/personnage/' + pResult.id" class="pres-portrait" :style="{'--c': pResult.color}">
            <img :src="'/assets/img/' + pResult.id + '.webp'" :alt="pResult.name" @error="$event.target.src='/assets/img/hero.jpg'">
          </router-link>
          <h2 class="pres-name" :style="{color: pResult.color}">{{ pResult.name }}</h2>
          <p class="pres-epi">{{ pResult.epi }}</p>
          <p class="pres-lead" v-html="pResult.lead"></p>
          <div class="quiz-actions">
            <router-link :to="'/personnage/' + pResult.id" class="btn">Voir la fiche complète</router-link>
            <button class="btn ghost" @click="restartPersonality">Refaire le test</button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { knowledge, knowledgeStars, personalityQuestions } from '../data/quiz.js'
import { characters } from '../data/characters.js'
import { useSpoiler } from '../composables/useSpoiler.js'

const { isSpoiler, levelLabel } = useSpoiler()
const mode = ref('knowledge')

/* ---- mélange déterministe par session (pas de saut visuel entre rendus) ---- */
const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

/* ---- QUIZ DE CONNAISSANCES ---- */
const kPool = ref([])
const kIndex = ref(0)
const kScore = ref(0)
const picked = ref(null)
const answered = computed(() => picked.value !== null)
const kDone = ref(false)

// mélange aussi les options (la bonne réponse n'est plus toujours en 1re position)
const shuffleOptions = (q) => {
  const order = shuffle(q.a.map((_, i) => i))
  return { ...q, a: order.map(i => q.a[i]), c: order.indexOf(q.c) }
}
const buildKnowledge = () => {
  // trivia stellaire toujours dispo + questions d'intrigue dans la progression
  const pool = [...knowledgeStars, ...knowledge].filter(q => !isSpoiler(q.arc))
  kPool.value = shuffle(pool).slice(0, 12).map(shuffleOptions)
  kIndex.value = 0; kScore.value = 0; picked.value = null; kDone.value = false
}
buildKnowledge()

const current = computed(() => kPool.value[kIndex.value])
const answer = (i) => {
  if (answered.value) return
  picked.value = i
  if (i === current.value.c) kScore.value++
}
const answerClass = (i) => {
  if (!answered.value) return ''
  if (i === current.value.c) return 'is-correct'
  if (i === picked.value) return 'is-wrong'
  return 'is-dim'
}
const next = () => {
  if (kIndex.value + 1 < kPool.value.length) { kIndex.value++; picked.value = null }
  else kDone.value = true
}
const restartKnowledge = buildKnowledge

const ratio = computed(() => kPool.value.length ? kScore.value / kPool.value.length : 0)
const verdict = computed(() =>
  ratio.value === 1 ? "Sage de la Tour de Pleiades" :
  ratio.value >= 0.75 ? "Chevalier accompli" :
  ratio.value >= 0.5 ? "Aspirant courageux" :
  ratio.value >= 0.25 ? "Nouveau venu à Lugnica" : "Retour depuis zéro")
const verdictSub = computed(() =>
  ratio.value >= 0.75 ? "Ton savoir force le respect du royaume." :
  ratio.value >= 0.5 ? "Encore quelques boucles et tu maîtriseras tout." :
  "Chaque échec est une leçon — recommence, comme Subaru.")

/* ---- TEST DE PERSONNALITÉ ---- */
const pIndex = ref(0)
const scores = ref({})
const pResult = ref(null)

const pAnswer = (opt) => {
  for (const [id, w] of Object.entries(opt.w)) scores.value[id] = (scores.value[id] || 0) + w
  if (pIndex.value + 1 < personalityQuestions.length) pIndex.value++
  else computeResult()
}
const computeResult = () => {
  // n'attribue qu'un personnage présent dans la progression déclarée
  const available = characters.filter(c => !isSpoiler(c.arc))
  const ranked = Object.entries(scores.value)
    .filter(([id]) => available.some(c => c.id === id))
    .sort((a, b) => b[1] - a[1])
  const winnerId = ranked[0]?.[0] || 'subaru'
  pResult.value = characters.find(c => c.id === winnerId)
}
const restartPersonality = () => { pIndex.value = 0; scores.value = {}; pResult.value = null }

const setMode = (m) => { mode.value = m }
</script>

<style scoped>
.view-toggle { display: flex; gap: 10px; flex-wrap: wrap; }
.view-toggle button {
  background: var(--panel); border: 1px solid var(--border); color: var(--ink);
  padding: 8px 16px; border-radius: 20px; cursor: pointer; font-family: 'Inter', sans-serif; transition: all .3s ease;
}
.view-toggle button:hover, .view-toggle button.active { background: var(--gold); border-color: var(--gold); color: #000; }

.quiz-card {
  max-width: 720px; border: 1px solid var(--border); border-radius: 14px; padding: 30px 32px;
  background: linear-gradient(180deg, var(--panel), var(--panel-2));
}
.quiz-progress { display: flex; justify-content: space-between; font-family: var(--disp);
  font-size: .68rem; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-dim); }
.quiz-bar { height: 4px; border-radius: 999px; background: var(--border); margin: 10px 0 24px; overflow: hidden; }
.quiz-bar-fill { height: 100%; background: linear-gradient(90deg, var(--violet), var(--ice)); transition: width .4s; }
.quiz-q { font-size: 1.5rem; margin-bottom: 22px; line-height: 1.3; }
.quiz-options { display: flex; flex-direction: column; gap: 12px; }
.quiz-opt {
  text-align: left; padding: 14px 18px; border-radius: 10px; border: 1px solid var(--border);
  background: var(--panel); color: var(--ink); font-family: var(--serif); font-size: 1.05rem; cursor: pointer;
  transition: border-color .25s, background .25s, transform .2s;
}
.quiz-opt:not(:disabled):hover { border-color: var(--ring); background: rgba(139,92,246,.12); transform: translateX(4px); }
.quiz-opt.is-correct { border-color: #45c980; background: rgba(69,201,128,.16); color: var(--ink); }
.quiz-opt.is-wrong { border-color: var(--blood); background: rgba(224,36,58,.14); }
.quiz-opt.is-dim { opacity: .5; }
.quiz-opt:disabled { cursor: default; }
.quiz-why { margin-top: 22px; padding: 16px 18px; border-radius: 10px;
  background: rgba(139,92,246,.08); border-left: 3px solid var(--violet); color: var(--ink-soft); line-height: 1.55; }
.quiz-why strong { color: var(--ink); }

.quiz-result { text-align: center; padding: 20px 0; }
.quiz-score-big { font-family: var(--disp); font-size: clamp(3rem, 9vw, 4.5rem); color: var(--ice);
  text-shadow: 0 0 26px rgba(127,216,255,.3); }
.quiz-result h2 { font-size: 1.8rem; margin: 8px 0 6px; }
.quiz-result p { color: var(--ink-soft); }

.pres-portrait { display: block; width: 190px; aspect-ratio: 3/4; margin: 18px auto 8px;
  border-radius: 12px; overflow: hidden; border: 1px solid var(--border);
  box-shadow: 0 0 40px color-mix(in srgb, var(--c, var(--violet)) 30%, transparent); }
.pres-portrait img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.pres-name { font-size: 2.2rem; margin: 6px 0 2px; }
.pres-epi { font-style: italic; color: var(--ink-soft); margin-bottom: 14px; }
.pres-lead { max-width: 560px; margin: 0 auto; color: var(--ink-soft); line-height: 1.7; }
.quiz-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 24px; }
</style>
