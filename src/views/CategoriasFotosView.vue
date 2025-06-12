<template>
  <v-container class="photography-gallery-container" fluid>
    <v-row justify="center" class="text-center mb-10">
      <v-col cols="12">
        <h1 class="gallery-title">Nuestras Fotografías</h1>
        <p class="gallery-description">Explora nuestras colecciones fotográficas por categorías. Haz clic para ver el portafolio completo de cada especialidad.</p>
      </v-col>
    </v-row>

    <v-row justify="center" class="gallery-cards-row">
      <v-col
        v-for="category in photoCategories"
        :key="category.name"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
      >
        <router-link :to="category.route" class="gallery-router-link">
          <v-card
            class="gallery-card"
            :class="category.class"
            :elevation="10"
            hover
          >
            <v-img
              :src="category.imageUrl"
              :alt="category.name"
              class="gallery-card-image"
              cover
              height="250px"
            >
              <v-overlay
                absolute
                opacity="0"
                class="d-flex align-center justify-center"
              >
                <div class="card-category-name">{{ category.name }}</div>
              </v-overlay>

              <v-overlay
                absolute
                opacity="0"
                class="d-flex align-center justify-center hover-overlay"
              >
                <span class="view-more-text">Ver Más</span>
              </v-overlay>
            </v-img>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// ¡Importante! Reemplaza estas rutas de importación o URLs con tus propias imágenes.
// La imagen de Google Drive se utiliza directamente en el data().
import placeholderImage1 from '../assets/foto7.jpg'; // Imagen de ejemplo 1
import placeholderImage2 from '../assets/foto8.jpg'; // Imagen de ejemplo 2

export default {
  name: 'PhotographyGallery',
  data() {
    return {
      photoCategories: [
        {
          name: 'Fotografía de Comida',
          route: '/ImageCollage',
          imageUrl: placeholderImage1, // Usa tu propia imagen para esta categoría
          class: 'gradient-pink',
        },
        {
          name: 'Fotografía Deportiva',
          route: '/fotografias/deportiva',
          imageUrl: placeholderImage2, // Usa tu propia imagen para esta categoría
          class: 'gradient-orange',
        },
        {
          name: 'Sesiones Generales',
          route: '/ImageCollage',
          // Aquí utilizamos la imagen directamente desde Google Drive
          imageUrl: 'https://drive.google.com/uc?export=view&id=1aplzGXcUb7r5q6ks4VOcF4L2ulOhBhR8',
          class: 'gradient-blue', // Nuevo gradiente para esta categoría
        },
        // Puedes añadir más categorías aquí siguiendo el mismo patrón:
        // {
        //   name: 'Fotos de los Arias',
        //   route: '/fotografias/fotos-de-los-arias',
        //   imageUrl: 'URL_DE_TU_IMAGEN_DE_LOS_ARIAS', // ¡No olvides tu imagen!
        //   class: 'gradient-green', // Otro gradiente si lo deseas
        // },
      ],
    };
  },
};
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
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #b0b0b0;
}

.gallery-cards-row {
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-router-link {
  text-decoration: none;
  width: 100%; /* Hace que el enlace ocupe todo el ancho de la columna */
  display: flex; /* Asegura que la tarjeta se extienda */
}

.gallery-card {
  border-radius: 12px !important;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  width: 100%; /* La tarjeta ocupa todo el ancho del enlace/columna */
  height: 100%; /* La tarjeta ocupa toda la altura de la columna */
  display: flex;
  flex-direction: column; /* Apila la imagen y el posible título interno */
}

.gallery-card:hover {
  transform: translateY(-8px) scale(1.03); /* Un levantamiento y escala más pronunciados al pasar el ratón */
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.7) !important; /* Sombra más fuerte */
}

/* Aplica los fondos degradados (reutilizados del Portfolio, puedes añadir nuevos si es necesario) */
.gradient-orange {
  background: linear-gradient(to right, #ff7e5f, #feb47b) !important;
}

.gradient-pink {
  background: linear-gradient(to right, #ee9ca7, #ffdde1) !important;
}

/* Nuevo gradiente para añadir variedad */
.gradient-blue {
  background: linear-gradient(to right, #6dd5ed, #2193b0) !important;
}
.gradient-green {
  background: linear-gradient(to right, #83a4d4, #b6fbff) !important;
}


.gallery-card-image {
  /* La propiedad `cover` de Vuetify ya maneja object-fit: cover */
  transition: transform 0.3s ease;
}

.gallery-card:hover .gallery-card-image {
  transform: scale(1.08); /* La imagen se agranda más al pasar el ratón */
}

/* Overlays para el texto */
.card-category-name {
  color: #fff;
  font-size: 2.2em; /* Texto más grande para el nombre de la categoría */
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  pointer-events: none; /* Permite que los clics pasen al enlace de la tarjeta */
  padding: 10px;
  text-align: center;
}

.hover-overlay {
  background-color: rgba(0, 0, 0, 0) !important; /* Empieza transparente */
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.gallery-card:hover .hover-overlay {
  background-color: rgba(0, 0, 0, 0.7) !important; /* Fondo más oscuro al pasar el ratón */
}

.view-more-text {
  color: #fff;
  font-size: 1.8em; /* Texto ligeramente más grande para "Ver Más" */
  font-weight: bold;
  opacity: 0; /* Oculto por defecto */
  transition: opacity 0.3s ease;
}

.gallery-card:hover .view-more-text {
  opacity: 1; /* Muestra el texto al pasar el ratón */
}

/* Ajustes responsivos */
@media (max-width: 960px) { /* Para pantallas medianas (md) */
  .gallery-title {
    font-size: 2.8em;
  }
  .gallery-description {
    font-size: 1.1em;
  }
  .card-category-name {
    font-size: 1.8em;
  }
  .view-more-text {
    font-size: 1.4em;
  }
  .gallery-card-image {
    height: 200px; /* Ajusta la altura para pantallas medianas */
  }
}

@media (max-width: 600px) { /* Para pantallas pequeñas (sm) */
  .gallery-title {
    font-size: 2.2em;
  }
  .gallery-description {
    font-size: 1em;
  }
  .card-category-name {
    font-size: 1.5em;
  }
  .view-more-text {
    font-size: 1.2em;
  }
  .gallery-card-image {
    height: 180px; /* Ajusta la altura para pantallas pequeñas */
  }
  .photography-gallery-container {
    padding: 40px 10px;
  }
}
</style>