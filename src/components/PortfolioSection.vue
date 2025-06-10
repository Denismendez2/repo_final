<template>
  <v-container fluid class="portfolio-container px-0">
    <v-row justify="center" class="mb-8">
      <v-col cols="12" class="text-center">
        <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 font-weight-bold mb-4">Portfolio</h1>
        <p class="text-body-1 text-sm-body-1 text-md-h6 text-lg-h5 text-white-50">
          Explora mi trabajo a través de diferentes categorías y descubre cómo puedo
          ayudarte a crear contenido visual impactante.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="auto">
        <v-btn-toggle v-model="selectedMediaType" mandatory group class="media-type-toggle">
          <v-btn value="fotografias" class="toggle-btn">Fotografías</v-btn>
          <v-btn value="videos" class="toggle-btn">Videos</v-btn>
          <v-btn value="drone" class="toggle-btn">Drone</v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-12">
      <v-col cols="auto">
        <v-item-group v-model="selectedCategory" selected-class="selected-chip">
          <v-chip-group mandatory>
            <v-chip
              v-for="category in filteredCategories"
              :key="category.value"
              :value="category.value"
              filter
              variant="outlined"
              size="large"
              class="category-chip"
              label
            >
              {{ category.text }}
            </v-chip>
          </v-chip-group>
        </v-item-group>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col
        v-for="i in 2"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        class="d-flex justify-center"
      >
        <v-card class="portfolio-item-card" :style="cardGradient(i)">
          <v-icon size="96" class="portfolio-item-icon">mdi-account</v-icon>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedMediaType = ref('fotografias');
const selectedCategory = ref('deportiva');

const categories = {
  fotografias: [
    { text: 'Fotos de los Arias', value: 'fotos_arias' },
    { text: 'Sesiones generales', value: 'sesiones_generales' },
    { text: 'Comida', value: 'comida' },
    { text: 'Deportiva', value: 'deportiva' },
  ],
  videos: [
    { text: 'Videos Corporativos', value: 'videos_corporativos' },
    { text: 'Eventos', value: 'eventos_video' },
    { text: 'Animación', value: 'animacion' },
  ],
  drone: [
    { text: 'Tomas Aéreas', value: 'tomas_aereas' },
    { text: 'Inspección', value: 'inspeccion' },
  ],
};

const filteredCategories = computed(() => {
  return categories[selectedMediaType.value] || [];
});

const cardGradient = (index) => {
  if (index === 1) {
    return {
      background: 'linear-gradient(to top right, #4A2B8D, #673AB7)', // Purple tones
    };
  } else {
    return {
      background: 'linear-gradient(to top right, #3F51B5, #2196F3)', // Blue tones
    };
  }
};
</script>

<style scoped>
.portfolio-container {
  background-color: #000000; /* Fondo oscuro similar a la imagen */
  color: white;
  padding: 40px 0; /* Padding vertical general */
}

h1 {
  color: white;
}

p {
  color: rgba(255, 255, 255, 0.7); /* Color de texto más claro */
}

/* Estilos para los botones de tipo de medio (Fotografías, Videos, Drone) */
.media-type-toggle .v-btn {
  background-color: transparent !important;
  color: rgba(255, 255, 255, 0.7) !important;
  border-radius: 20px;
  text-transform: none;
  font-weight: 500;
  padding: 0 20px; /* Ajuste de padding */
  height: 44px; /* Altura uniforme */
}

.media-type-toggle .v-btn.v-btn--active {
  background-color: #673AB7 !important; /* Color de fondo para el activo */
  color: white !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* Estilos para los chips de categoría */
.category-chip {
  color: white !important;
  border-color: rgba(255, 255, 255, 0.3) !important;
  background-color: transparent !important;
  border-radius: 20px;
  margin: 4px; /* Espacio entre chips */
  text-transform: none;
}

.category-chip.selected-chip {
  background-color: #673AB7 !important; /* Color de fondo para el chip seleccionado */
  border-color: #673AB7 !important;
  font-weight: 600;
}

/* Estilos para las tarjetas de portfolio */
.portfolio-item-card {
  width: 100%;
  max-width: 400px; /* Ancho máximo para las tarjetas */
  height: 300px; /* Altura fija para las tarjetas */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.portfolio-item-icon {
  color: rgba(255, 255, 255, 0.8);
}

/* Media queries para responsividad */
@media (max-width: 600px) {
  .media-type-toggle .v-btn {
    padding: 0 12px;
    font-size: 0.8rem;
    height: 38px;
  }

  .category-chip {
    font-size: 0.8rem;
    padding: 0 10px;
    height: 32px;
  }
  .portfolio-item-card {
    height: 250px;
  }
  .portfolio-item-icon {
    font-size: 72px !important;
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .portfolio-item-card {
    height: 280px;
  }
  .portfolio-item-icon {
    font-size: 80px !important;
  }
}
</style>