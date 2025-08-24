<template>
  <v-container class="video-gallery-container" fluid>
    <v-row justify="center" class="text-center mb-10">
      <v-col cols="12">
        <h1 class="gallery-title">Nuestros Videos</h1>
        <p class="gallery-description">
          Descubre nuestras producciones audiovisuales, clasificadas por tipo de contenido.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" class="gallery-cards-row">
      <v-col
        v-for="videoCategory in videoCategories"
        :key="videoCategory.name"
        cols="12"
        class="d-flex justify-center"
      >
        <router-link :to="videoCategory.route" class="gallery-router-link">
          <v-card
            class="gallery-card"
            :elevation="10"
            hover
          >
            <div class="image-overlay-wrapper">
              <v-img
                :src="videoCategory.imageUrl"
                :alt="videoCategory.name"
                class="gallery-card-image"
                cover
                height="1200px"
              ></v-img>
              <div class="overlay-text">
                <div class="card-category-name">{{ videoCategory.name }}</div>
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
  name: 'CategoriasVideosView',
  data() {
    return {
      videoCategories: [
        {
          name: 'Hermanos Arias',
          route: '/videos/hermanosarias',
          imageUrl: 'https://ik.imagekit.io/levimendozaph/Hermanos%20Arias/_MG_7974.jpg?updatedAt=1750143234854'
        },
        {
          name: 'Videos Largos',
          route: '/videos/largaduracion',
          imageUrl: 'https://ik.imagekit.io/levimendozaph/Sesiones%20generales/_MG_5032.jpg?updatedAt=1750183509997'
        }
      ]
    }
  }
}
</script>

<style scoped>
.video-gallery-container {
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
  transition: transform 0.3s ease;
  width: 100%;
  height: 100%;
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

/* Responsive ajustes */
@media (max-width: 960px) {
  .gallery-title {
    font-size: 2.8em;
  }
  .gallery-description {
    font-size: 1.1em;
  }
  .card-category-name {
    font-size: 1.8em;
  }
  .gallery-card-image {
    height: 280px;
  }
}

@media (max-width: 600px) {
  .gallery-title {
    font-size: 2.2em;
  }
  .gallery-description {
    font-size: 1em;
  }
  .card-category-name {
    font-size: 1.5em;
  }
  .gallery-card-image {
    height: 200px;
  }
  .video-gallery-container {
    padding: 40px 10px;
  }
}
</style>