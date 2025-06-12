<template>
  <v-container class="image-collage-container" fluid>
    <v-row justify="center" class="text-center mb-10">
      <v-col cols="12">
        <h1 class="collage-title">Nuestra Galería Visual</h1>
        <p class="collage-description">Sumérgete en nuestra colección de momentos y capturas especiales. Cada imagen cuenta una historia.</p>
      </v-col>
    </v-row>

    <v-row justify="center" class="image-grid-row">
      <v-col
        v-for="(image, index) in images"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex"
      >
        <v-card class="image-card" elevation="8" hover>
          <v-img
            :src="image.src"
            :alt="image.alt"
            class="collage-image"
            aspect-ratio="1"
            cover
          >
            <v-overlay absolute opacity="0" class="d-flex align-end justify-center image-overlay">
              <span class="image-caption">{{ image.alt }}</span>
            </v-overlay>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ImageCollageView',
  data() {
    return {
      images: [
        // ¡IMPORTANTE! Reemplaza estas URLs con las URLs directas de tus imágenes.
        // Si usas Google Drive, asegúrate de que tengan permisos "Cualquier persona con el enlace puede ver".
        // Formato de Google Drive: https://drive.google.com/uc?export=view&id=TU_ID_DE_ARCHIVO
        { src: 'https://picsum.photos/id/237/400/400', alt: 'Perro en el parque' },
        { src: 'https://picsum.photos/id/238/400/400', alt: 'Montañas y lago' },
        { src: 'https://picsum.photos/id/239/400/400', alt: 'Calle de ciudad' },
        { src: 'https://picsum.photos/id/240/400/400', alt: 'Café y libro' },
        { src: 'https://picsum.photos/id/241/400/400', alt: 'Bosque otoñal' },
        { src: 'https://picsum.photos/id/242/400/400', alt: 'Playa al atardecer' },
        { src: 'https://picsum.photos/id/243/400/400', alt: 'Edificios altos' },
        { src: 'https://picsum.photos/id/244/400/400', alt: 'Campo de flores' },
        { src: 'https://picsum.photos/id/245/400/400', alt: 'Persona leyendo' },
        { src: 'https://picsum.photos/id/246/400/400', alt: 'Instrumentos musicales' },
        { src: 'https://picsum.photos/id/247/400/400', alt: 'Vista aérea' },
        { src: 'https://picsum.photos/id/248/400/400', alt: 'Comida apetitosa' },
        // Puedes añadir más imágenes aquí
      ],
    };
  },
};
</script>

<style scoped>
.image-collage-container {
  background-color: #000;
  color: #fff;
  padding: 60px 16px;
  font-family: sans-serif;
  min-height: 100vh;
}

.collage-title {
  font-size: 3.5em;
  margin-bottom: 10px;
  text-align: center;
  color: #f0f0f0;
}

.collage-description {
  font-size: 1.3em;
  margin-bottom: 50px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #b0b0b0;
}

.image-grid-row {
  max-width: 1400px; /* Ancho máximo para la cuadrícula */
  margin: 0 auto;
}

.image-card {
  border-radius: 12px !important;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  width: 100%;
  /* Define una altura fija o usa padding-bottom para mantener una relación de aspecto */
  /* padding-bottom: 100%; para una relación 1:1, pero v-img aspect-ratio ya lo hace */
}

.image-card:hover {
  transform: translateY(-5px) scale(1.02); /* Ligero levantamiento y escala */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6) !important; /* Sombra más fuerte */
}

.collage-image {
  /* v-img con `cover` y `aspect-ratio` ya maneja el ajuste de la imagen */
  transition: transform 0.3s ease;
}

.image-card:hover .collage-image {
  transform: scale(1.05); /* Zoom ligero de la imagen al pasar el ratón */
}

.image-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%) !important;
  opacity: 0; /* Oculto por defecto */
  transition: opacity 0.3s ease;
}

.image-card:hover .image-overlay {
  opacity: 1; /* Mostrar overlay al pasar el ratón */
}

.image-caption {
  color: #fff;
  font-size: 1.1em;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  padding: 10px;
  text-align: center;
}

/* Ajustes responsivos */
@media (max-width: 960px) { /* md breakpoint */
  .collage-title {
    font-size: 2.8em;
  }
  .collage-description {
    font-size: 1.1em;
  }
  .image-caption {
    font-size: 1em;
  }
}

@media (max-width: 600px) { /* sm breakpoint */
  .collage-title {
    font-size: 2.2em;
  }
  .collage-description {
    font-size: 1em;
  }
  .image-caption {
    font-size: 0.9em;
  }
  .image-collage-container {
    padding: 40px 10px;
  }
}
</style>