<template>
  <div class="page wrap">
    <span class="eyebrow">{{ t('nav.galerie') }}</span>
    <h1 class="ttl"><span class="accent">Galerie</span> d'Illustrations</h1>
    <p class="sub">Illustrations officielles, chara-designs et concepts arts.</p>
    
    <div class="masonry" style="margin-top: 30px">
      <div v-for="(img, i) in images" :key="i" class="masonry-item reveal" @click="openLightbox(img)">
        <img :src="img.src" :alt="img.alt" loading="lazy" />
        <div class="overlay"><span>{{ img.alt }}</span></div>
      </div>
    </div>

    <!-- Lightbox -->
    <div v-if="lightboxOpen" class="lightbox" @click="lightboxOpen = false">
      <div class="lb-content" @click.stop>
        <button class="lb-close" @click="lightboxOpen = false">✕</button>
        <img :src="currentImg.src" :alt="currentImg.alt" />
        <p class="lb-caption">{{ currentImg.alt }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { asset } from '../assets.js'

const { t } = useI18n()

const images = ref([
  { src: '/assets/img/key-subaru-emilia.jpg', alt: 'Visuel Clé - Subaru & Emilia' },
  { src: '/assets/img/hero.jpg', alt: 'Visuel Clé - Saison 2' },
  { src: '/assets/img/cover-vol1.webp', alt: 'Couverture Light Novel Vol. 1' },
  { src: '/assets/img/emilia.webp', alt: 'Emilia Chara Design' },
  { src: '/assets/img/rem.webp', alt: 'Rem Chara Design' },
  { src: '/assets/img/subaru.webp', alt: 'Subaru Chara Design' },
  { src: '/assets/img/echidna.webp', alt: 'Echidna Chara Design' },
  { src: '/assets/img/satella.webp', alt: 'Satella' },
  { src: '/assets/img/beatrice.webp', alt: 'Beatrice' },
  { src: '/assets/img/loc-sanctuary.webp', alt: 'Le Sanctuaire' },
  { src: '/assets/img/loc-capital.webp', alt: 'Capitale Royale' },
  { src: '/assets/img/loc-pristella.webp', alt: 'Pristella, la cité aquatique' },
  { src: '/assets/img/world_map.png', alt: 'Carte du Continent' },
].map(i => ({ ...i, src: asset(i.src) })))

const lightboxOpen = ref(false)
const currentImg = ref(null)

const openLightbox = (img) => {
  currentImg.value = img
  lightboxOpen.value = true
}
</script>

<style scoped>
.masonry {
  column-count: 3;
  column-gap: 20px;
}
@media (max-width: 900px) { .masonry { column-count: 2; } }
@media (max-width: 600px) { .masonry { column-count: 1; } }

.masonry-item {
  break-inside: avoid;
  margin-bottom: 20px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.masonry-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
}
.masonry-item img {
  width: 100%;
  display: block;
}
.masonry-item .overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  padding: 20px 15px 15px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
}
.masonry-item:hover .overlay {
  opacity: 1;
}

.lightbox {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.lb-content {
  position: relative;
  max-width: 100%;
  max-height: 100%;
}
.lb-content img {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
}
.lb-caption {
  text-align: center;
  color: #fff;
  margin-top: 10px;
  font-family: 'Cinzel', serif;
  font-size: 1.2rem;
}
.lb-close {
  position: absolute;
  top: -40px; right: -20px;
  background: none; border: none;
  color: #fff; font-size: 2rem; cursor: pointer;
}
</style>
