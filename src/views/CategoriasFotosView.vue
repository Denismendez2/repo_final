<template>
  <v-container class="photography-gallery-container" fluid>
    <v-row justify="center" class="text-center mb-10">
      <v-col cols="12">
        <h1 class="gallery-title">Nuestras Fotografías</h1>
        <p class="gallery-description">
          Explora nuestras colecciones fotográficas por categorías. Haz clic para ver el portafolio completo de cada especialidad.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" class="gallery-cards-row">
      <v-col
        v-for="category in photoCategories"
        :key="category.name"
        cols="12"
        class="d-flex justify-center"
      >
        <router-link :to="category.route" class="gallery-router-link">
          <v-card
            class="gallery-card"
            :elevation="10"
            hover
          >
            <div class="image-overlay-wrapper">
              <v-img
                :src="category.imageUrl"
                :alt="category.name"
                class="gallery-card-image"
              ></v-img>
              <div class="overlay-text">
                <div class="card-category-name">{{ category.name }}</div>
                <div class="view-more-text">Ver Más</div>
              </div>
            </div>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PhotographyGallery',
  data() {
    return {
      photoCategories: [
        {
          name: 'Hermanos Arias',
          route: '/fotografias/hermanosarias',
          imageUrl: 'https://ik.imagekit.io/levimendozaph/Hermanos%20Arias/_MG_5916.jpg?tr=w-1200,h-800,rt-auto'
        },
        {
          name: 'Deportivas',
          route: '/fotografias/deportivas',
          imageUrl: 'https://ik.imagekit.io/levimendozaph/Home%20images/_MG_0287.jpg?tr=w-1200,h-600,rt-auto'
        },
        {
          name: 'Eventos',
          route: '/fotografias/eventos',
          imageUrl: 'https://ik.imagekit.io/levimendozaph/Eventos/_MG_3886.jpg?tr=w-1200,h-600,rt-auto'
        },
        {
          name: 'Hunters',
          route: '/fotografias/hunters',
          imageUrl: 'https://ik.imagekit.io/levimendozaph/Hunters/_MG_5671.jpg?tr=w-1200,h-600,rt-auto'
        },
        {
          name: 'Sesiones Generales',
          route: '/fotografias/sesionesgenerales',
          imageUrl: 'https://ik.imagekit.io/levimendozaph/Sesiones%20generales/_MG_5322.jpg?tr=w-1200,h-600,rt-auto'
        }
      ]
    }
  }
}
</script>

<style scoped>
.photography-gallery-container {
  background-color: #000;
  color: #fff;
  padding: 60px 16px;
  font-family: sans-serif;
  min-height: 100vh;
}

.gallery-title {
  font-size: 3.5em;
  margin-bottom: 10px;
  text-align: center;
  color: #f0f0f0;
}

.gallery-description {
  font-size: 1.3em;
  margin-bottom: 50px;
  max-width: 900px;
  margin: 0 auto 50px auto;
  text-align: center;
  color: #b0b0b0;
}

.gallery-router-link {
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
}

.gallery-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  width: 100%;
  max-width: 80%;
  margin: auto;
  background: transparent !important;
}

.gallery-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.7);
}

.gallery-card-image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: contain;
  transition: transform 0.3s ease;
  filter: brightness(0.95);
}

@media (max-width: 960px) {
  .gallery-card-image {
    aspect-ratio: auto;
    height: 280px;
    object-fit: cover;
  }
}

@media (max-width: 600px) {
  .gallery-card-image {
    height: 200px;
  }
}

.gallery-card:hover .gallery-card-image {
  transform: scale(1.08);
}

.image-overlay-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.overlay-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: background-color 0.3s ease;
}

.gallery-card:hover .overlay-text {
  background-color: rgba(0, 0, 0, 0.7);
}

.card-category-name {
  color: #fff;
  font-size: 2.2em;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  text-align: center;
  margin-bottom: 10px;
}

.view-more-text {
  color: #fff;
  font-size: 1.3em;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-card:hover .view-more-text {
  opacity: 1;
}
</style>