<template>
  <v-container class="image-collage-container" fluid>
    <v-row justify="center" class="text-center mb-10">
      <v-col cols="12">
        <h1 class="collage-title">Nuestra Galería Visual</h1>
        <p class="collage-description">
          Sumérgete en nuestra colección de momentos y capturas especiales. Cada imagen cuenta una historia.
        </p>
      </v-col>
    </v-row>

    <!-- Layout para FOTOS -->
    <div v-if="category !== 'videos'" class="masonry-grid">
      <div
        class="masonry-item"
        v-for="(image, index) in images"
        :key="index"
        @click="openLightbox(index)"
      >
        <img
          v-if="image.type !== 'video' && image.type !== 'iframe'"
          :src="image.src"
          :alt="image.alt"
          class="masonry-image"
        />
      </div>
    </div>

    <!-- Layout para VIDEOS e IFRAMES -->
    <v-row v-else dense>
      <v-col
        v-for="(image, index) in images"
        :key="index"
        :cols="12"
        :md="image.ratio < 1 ? 4 : 8"
        :lg="image.ratio < 1 ? 3 : 6"
        class="mb-4"
      >
        <div
          class="media-container"
          :class="{ vertical: image.ratio < 1 }"
          :style="{ aspectRatio: image.ratio }"
          @click="openLightbox(index)"
        >
          <template v-if="image.type === 'iframe'">
            <iframe
              :src="image.src"
              :title="image.alt"
              class="media-iframe"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </template>
          <template v-else>
            <video
              :src="image.src"
              :poster="image.poster"
              class="media-video"
              playsinline
              muted
            ></video>
          </template>
        </div>
      </v-col>
    </v-row>

    <!-- Lightbox -->
    <div v-if="lightboxVisible" class="lightbox-overlay" @click.self="closeLightbox">
      <button class="lightbox-button left" @click.stop="prevImage">&#10094;</button>

      <div class="lightbox-content">
        <template v-if="selectedImage.type === 'video'">
          <video
            :src="selectedImage.src"
            :poster="selectedImage.poster"
            class="lightbox-video"
            :class="{ vertical: selectedImage.ratio < 1 }"
            controls
            autoplay
            playsinline
          ></video>
        </template>
        <template v-else-if="selectedImage.type === 'iframe'">
          <iframe
            :src="selectedImage.src"
            :title="selectedImage.alt"
            class="lightbox-video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </template>
        <template v-else>
          <img
            :src="selectedImage.src"
            :alt="selectedImage.alt"
            class="lightbox-image"
          />
        </template>
      </div>

      <button class="lightbox-button right" @click.stop="nextImage">&#10095;</button>
    </div>

    <!-- Scroll to top button -->
    <button
      class="scroll-to-top-button"
      :class="{ show: showScrollToTopButton }"
      @click="scrollToTop"
    >
      ↑
    </button>
  </v-container>
</template>

<script>
import imageData from '../data/portfolioImagenes';

export default {
  name: 'ImageCollageView',
  data() {
    return {
      lightboxVisible: false,
      selectedIndex: 0,
      images: [],
      showScrollToTopButton: false,
      category: '', // 'fotografias', 'videos', etc.
    };
  },
  computed: {
    selectedImage() {
      return this.images[this.selectedIndex] || {};
    },
  },
  watch: {
    '$route.params': {
      immediate: true,
      deep: true,
      handler(newParams) {
  let category = newParams.category || this.$route.name || 'fotografias';

  // Si la ruta es 'dron', entonces queremos usar el layout de videos
  if (this.$route.name === 'dron') {
    category = 'videos';
  }

  const dataKey = this.$route.name === 'dron' ? 'dron' : category;
  const categoryData = imageData[dataKey];

  this.category = category;

  const subcategory = newParams.subcategory;

  if (Array.isArray(categoryData)) {
    this.images = categoryData;
  } else if (subcategory && categoryData && categoryData[subcategory]) {
    this.images = categoryData[subcategory];
  } else {
    this.images = [];
  }
}

    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    openLightbox(index) {
      this.selectedIndex = index;
      this.lightboxVisible = true;
    },
    closeLightbox() {
      this.lightboxVisible = false;
    },
    nextImage() {
      this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    },
    prevImage() {
      this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    handleScroll() {
      this.showScrollToTopButton = window.scrollY > 300;
    },
  },
};
</script>



<style scoped>

.media-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}


.image-collage-container {
  background-color: #000;
  color: #fff;
  padding: 60px 16px;
  font-family: sans-serif;
  min-height: 100vh;
}

/* Titles */
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
  margin: 0 auto;
  text-align: center;
  color: #b0b0b0;
}

/* Masonry Grid */
.masonry-grid {
  column-count: 3;
  column-gap: 1rem;
}
.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
  cursor: pointer;
}
.masonry-image,
.media-container {
  width: 100%;
  display: block;
  border-radius: 12px;
  transition: transform 0.3s ease;
}
.masonry-image:hover,
.media-video:hover {
  transform: scale(1.03);
}

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.88);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
}
.lightbox-image,
.lightbox-video {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  object-fit: contain;
}
.lightbox-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  font-size: 2.5em;
  padding: 0 20px;
  cursor: pointer;
  z-index: 10000;
  transition: background 0.2s ease;
}
.lightbox-button:hover {
  background: rgba(255, 255, 255, 0.3);
}
.lightbox-button.left {
  left: 20px;
}
.lightbox-button.right {
  right: 20px;
}

/* Video container */
.media-container {
  aspect-ratio: 1;
  background-color: #000;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}
.media-container.vertical {
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.media-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Scroll to Top Button */
.scroll-to-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
  opacity: 0;
  transform: translateY(100px);
}
.scroll-to-top-button.show {
  opacity: 1;
  transform: translateY(0);
}
.scroll-to-top-button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}


/* Disenio Iframe */

.media-container {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, #1f1f1f, #2c2c2c);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.media-container:hover {
  transform: scale(1.02);
  box-shadow: 0 16px 32px rgba(255, 255, 255, 0.15);
}

.media-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0; /* No necesitas borde interno si ya está dentro del contenedor redondeado */
  object-fit: cover;
  transition: filter 0.3s ease;
}

.media-container:hover .media-iframe {
  filter: brightness(1.05);
}





/* Responsive */
@media (max-width: 1200px) {
  .masonry-grid {
    column-count: 3;
  }
}
@media (max-width: 900px) {
  .masonry-grid {
    column-count: 2;
  }
}
@media (max-width: 600px) {
  .masonry-grid {
    column-count: 2;
    column-gap: 0.5rem;
  }
  .masonry-item {
    margin-bottom: 0.5rem;
  }
  .collage-title {
    font-size: 2.2em;
  }
  .collage-description {
    font-size: 1em;
  }
}
</style>
