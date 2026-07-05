# Re:Zero — Encyclopédie

Application web (SPA) dédiée à *Re:Zero kara Hajimeru Isekai Seikatsu* : personnages, monde & magie,
arcs, lieux, bestiaire, glossaire et galerie. Construite en **Vue 3** (build global, sans chaîne de
compilation), contenu en français, images hébergées en local.

## ▶️ Comment lancer l'application

### Option 1 — Le plus simple (double-clic)
Ouvre simplement **`index.html`** dans un navigateur (Chrome, Edge, Firefox…).
Tout fonctionne en `file://` : Vue est chargé depuis un CDN, les scripts et les images sont locaux.

### Option 2 — Recommandée (petit serveur local)
Un serveur HTTP évite toute restriction de navigateur et rend la navigation plus fluide.
Ouvre un terminal dans le dossier du projet, puis lance **l'une** de ces commandes :

```bash
# Avec Python (souvent déjà installé)
python -m http.server 8080

# Ou avec Node.js
npx serve
# ou
npx http-server -p 8080
```

Puis va sur **http://localhost:8080** dans ton navigateur.

### Option 3 — VS Code
Installe l'extension **« Live Server »**, clique droit sur `index.html` → *Open with Live Server*.

## 🗂️ Structure du projet
```
index.html          → coquille de l'app (charge Vue + les scripts)
css/app.css         → design (thèmes, mise en page wiki, effets)
js/data.js          → base de données (œuvre, arcs, monde, magie, lieux, glossaire…)
js/characters.js    → fiches des personnages
js/app.js           → application Vue (routage, composants, effets)
assets/img/         → toutes les images (locales, ~57 fichiers)
AMELIORATIONS.md    → idées d'améliorations / prompt réutilisable
```

## ✍️ Ajouter du contenu
- Nouveau personnage → ajouter un objet dans `js/characters.js` et déposer son image dans `assets/img/<id>.webp`.
- Nouveau lieu / terme / arc → éditer le tableau correspondant dans `js/data.js`.
Aucune autre modification n'est nécessaire : l'app se met à jour automatiquement.

## ✨ Fonctionnalités
Routage SPA · recherche instantanée · thèmes « par camp » · lightbox plein écran ·
transitions « sort » entre les pages · easter egg **Return by Death** (tape `death` ou maintiens `R`) ·
barre de progression · retour en haut · particules.

*Site fan non officiel — hommage à l'œuvre de Tappei Nagatsuki & Shinichirō Otsuka.*
