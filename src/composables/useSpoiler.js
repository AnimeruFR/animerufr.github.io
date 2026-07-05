/* =====================================================================
   Mode spoiler — l'utilisateur déclare jusqu'où il a vu/lu ;
   tout contenu tagué d'un arc supérieur est flouté ou masqué.
   État singleton partagé par toute l'application.
   ===================================================================== */
import { ref, computed } from 'vue'

export const SPOILER_MAX = 99
const STORAGE_KEY = 'rz-spoiler-arc'

export const SPOILER_OPTIONS = [
  { value: 1,  label: 'Arc 1 — L\'arrivée à Lugnica',   media: 'Anime S1 · ép. 1-3' },
  { value: 2,  label: 'Arc 2 — Le manoir Roswaal',      media: 'Anime S1 · ép. 4-11' },
  { value: 3,  label: 'Arc 3 — Retour à la capitale',   media: 'Anime S1 · ép. 12-25' },
  { value: 4,  label: 'Arc 4 — Le Sanctuaire',          media: 'Anime S2' },
  { value: 5,  label: 'Arc 5 — Pristella',              media: 'Anime S3' },
  { value: 6,  label: 'Arc 6 — La Tour de Pleiades',    media: 'Anime S4 (2026) · LN' },
  { value: 7,  label: 'Arc 7 — L\'Empire de Vollachia', media: 'Light novel · Web' },
  { value: 8,  label: 'Arc 8 — La guerre impériale',    media: 'Web novel' },
  { value: 9,  label: 'Arc 9 — La fin du diptyque',     media: 'Web novel' },
  { value: SPOILER_MAX, label: 'Tout vu, tout lu', media: 'Aucun masquage' },
]

/* Tant que l'utilisateur n'a pas choisi, on protège par défaut tout ce qui
   dépasse l'anime déjà diffusé en entier (S1-S3 = arcs 1-5) : les personnages
   et événements du web novel / LN restent floutés d'office. */
export const SPOILER_DEFAULT = 5
const level = ref(SPOILER_DEFAULT)  // arc de progression déclaré
const chosen = ref(false)           // l'utilisateur a-t-il déjà choisi ?
const pickerOpen = ref(false)

// Lecture synchrone côté client (guard SSR/SSG) : évite tout flash de spoiler.
if (typeof window !== 'undefined') {
  const saved = parseInt(localStorage.getItem(STORAGE_KEY), 10)
  if (!Number.isNaN(saved)) { level.value = saved; chosen.value = true }
}

export function useSpoiler() {
  const setLevel = (v) => {
    level.value = v
    chosen.value = true
    pickerOpen.value = false
    if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, String(v))
  }
  /* Un contenu tagué `arc` est-il au-delà de la progression ? */
  const isSpoiler = (arc) => !!arc && arc > level.value
  const levelLabel = computed(() => {
    const o = SPOILER_OPTIONS.find(o => o.value === level.value)
    return o ? (o.value === SPOILER_MAX ? 'Tout' : 'Arc ' + o.value) : 'Arc ' + level.value
  })
  return { level, chosen, pickerOpen, setLevel, isSpoiler, levelLabel, options: SPOILER_OPTIONS }
}
