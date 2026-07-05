/* Chemin d'asset respectant le `base` de Vite (racine ou sous-chemin GitHub
   Pages). import.meta.env.BASE_URL vaut '/' en dev/racine, '/ReZero/' sous
   sous-chemin. À utiliser pour tout chemin d'image/audio construit à l'exécution
   (les chemins littéraux `/assets/...` NE sont PAS réécrits par Vite). */
export const asset = (p) => import.meta.env.BASE_URL + String(p).replace(/^\//, '')
