/* =====================================================================
   RE:ZERO — musiques de l'anime (génériques & insert songs vérifiés)
   Sources : Wikipédia EN « Re:Zero season 1-4 » (annonces ANN citées),
   Re:Zero Wiki (Wishing) — vérifié le 3 juillet 2026.
   Seuls les épisodes explicitement sourcés sont indiqués.
   ===================================================================== */
export const music = {
  composer: {
    name: "Kenichirō Suehiro",
    note: "Compositeur de la bande originale des quatre saisons — des nappes " +
      "angoissantes du Return by Death aux thèmes héroïques des batailles. " +
      "La direction musicale accompagne la série depuis 2016 chez White Fox.",
  },
  seasons: [
    {
      s: 1, label: "Saison 1", year: "2016",
      songs: [
        { type: "Opening 1", t: "Redo", by: "Konomi Suzuki" },
        { type: "Opening 2", t: "Paradisus-Paradoxum", by: "MYTH & ROID" },
        { type: "Ending 1", t: "STYX HELIX", by: "MYTH & ROID" },
        { type: "Ending 2", t: "Stay Alive", by: "Emilia (Rie Takahashi)" },
        { type: "Ending spécial", t: "STRAIGHT BET", by: "MYTH & ROID", eps: "ép. 7" },
        { type: "Ending spécial", t: "theater D", by: "MYTH & ROID", eps: "ép. 14" },
        { type: "Insert song", t: "Wishing", by: "Rem (Inori Minase)", eps: "ép. 18" },
      ],
    },
    {
      s: 2, label: "Saison 2", year: "2020-2021",
      songs: [
        { type: "Opening · 1re partie", t: "Realize", by: "Konomi Suzuki" },
        { type: "Ending · 1re partie", t: "Memento", by: "nonoc" },
        { type: "Opening · 2de partie", t: "Long shot", by: "Mayu Maeshima" },
        { type: "Ending · 2de partie", t: "Believe in you", by: "nonoc" },
      ],
    },
    {
      s: 3, label: "Saison 3", year: "2024-2025",
      songs: [
        { type: "Opening", t: "Reweave", by: "Konomi Suzuki", eps: "toute la saison" },
        { type: "Ending", t: "Nox Lux", by: "MYTH & ROID", eps: "toute la saison" },
      ],
    },
    {
      s: 4, label: "Saison 4", year: "2026 — en cours",
      songs: [
        { type: "Opening", t: "Recollect", by: "Konomi Suzuki & Ashnikko" },
        { type: "Ending", t: "Ender Ember", by: "MYTH & ROID × TK from Ling tosite sigure" },
      ],
    },
  ],
}
