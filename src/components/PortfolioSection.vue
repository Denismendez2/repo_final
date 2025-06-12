<template>
  <v-container class="portfolio-container" fluid>
    <v-row justify="center" class="text-center">
      <v-col cols="12">
        <h1 class="portfolio-title">Portfolio</h1>
        <p class="portfolio-description">Explora mi trabajo a través de diferentes categorías y descubre cómo puedo ayudarte a crear contenido visual impactante.</p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" sm="auto">
        <v-btn-toggle
          v-model="activeCategory"
          mandatory
          group
          dark
        >
          <v-btn
            v-for="cat in categories"
            :key="cat.name"
            :value="cat.name"
            class="category-btn"
            :class="{ 'active-category-btn': activeCategory === cat.name }"
            @click="setActiveCategory(cat.name)"
          >
            {{ cat.name }}
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" xl="4">
        <router-link :to="currentCategoryRoute" class="router-link-wrapper">
          <v-card
            class="portfolio-main-card"
            :class="currentCategoryClass"
            :elevation="10"
            hover
          >
            <v-img
              :src="currentCategoryImageUrl"
              :alt="activeCategory + ' category image'"
              class="portfolio-main-image"
              cover >
              <v-overlay
                absolute
                opacity="0" class="d-flex align-center justify-center"
              >
                <div class="main-portfolio-text">Portafolio</div>
              </v-overlay>

              <v-overlay
                absolute
                opacity="0" class="d-flex align-center justify-center hover-overlay"
              >
                <span class="view-details-text">Ver Contenido</span>
              </v-overlay>
            </v-img>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Make sure to import your images.
import photographyImage from '../assets/fotoportaf.jpg'; // Example image for photography
import videoImage from '../assets/fotovideo.jpg'; // Example image for videos
import droneImage from '../assets/drone.jpg'; // Example image for drone

export default {
  name: 'Portfolio',
  data() {
    return {
      activeCategory: 'Fotografías', // Default active category
      categories: [
        { name: 'Fotografías', route: '/fotografias', imageUrl: photographyImage, class: 'gradient-orange' },
        { name: 'Videos', route: '/videos', imageUrl: videoImage, class: 'gradient-pink' },
        { name: 'Drone', route: '/drone', imageUrl: droneImage, class: 'gradient-orange' }
      ],
     
    
    };
  },
  computed: {
    currentCategoryData() {
      return this.categories.find(cat => cat.name === this.activeCategory);
    },
    currentCategoryRoute() {
      return this.currentCategoryData ? this.currentCategoryData.route : '/';
    },
    currentCategoryImageUrl() {
      return this.currentCategoryData ? this.currentCategoryData.imageUrl : '';
    },
    currentCategoryClass() {
      return this.currentCategoryData ? this.currentCategoryData.class : '';
    }
  },
  methods: {
    setActiveCategory(category) {
      this.activeCategory = category;
    },
    setActivePhotographySubcategory(subcategory) {
      this.activePhotographySubcategory = subcategory;
    },
  }
};
</script>

<style scoped>
/* Overall container and text styles */
.portfolio-container {
  background-color: #000;
  color: #fff;
  padding: 40px 16px; /* Added horizontal padding for smaller screens */
  font-family: sans-serif;
}

.portfolio-title {
  font-size: 3em;
  margin-bottom: 10px;
  text-align: center;
}

.portfolio-description {
  font-size: 1.2em;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

/* Category and Subcategory Buttons */
.category-btn,
.subcategory-btn {
  background-color: transparent !important;
  color: #fff !important;
  border: 1px solid #333 !important;
  padding: 10px 20px !important;
  border-radius: 20px !important;
  font-size: 1.1em !important;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease !important;
  text-transform: none !important; /* Prevent Vuetify from making text uppercase */
}

.active-category-btn,
.category-btn:hover:not(.active-category-btn) {
  background-color: #333 !important;
  border-color: #fff !important;
}

.subcategory-btn {
  background-color: #222 !important;
  border-color: #444 !important;
}

.active-subcategory-btn,
.subcategory-btn:hover:not(.active-subcategory-btn) {
  background-color: #fff !important;
  color: #000 !important;
}


/* Main Portfolio Card and Image */
.router-link-wrapper {
  text-decoration: none; /* Remove underline from router-link */
  display: block; /* Ensures card takes full width of col */
  width: 100%; /* Important for responsiveness within v-col */
}

.portfolio-main-card {
  border-radius: 10px !important;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Removed width from transition */
  cursor: pointer;
  height: 400px; /* Fixed height for consistency */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4) !important;
}

.portfolio-main-card:hover {
  transform: translateY(-5px) scale(1.02); /* Slight lift and scale */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6) !important; /* Stronger shadow */
}

/* Apply gradient backgrounds */
.gradient-orange {
  background: linear-gradient(to right, #ff7e5f, #feb47b) !important;
}

.gradient-pink {
  background: linear-gradient(to right, #ee9ca7, #ffdde1) !important;
}

.portfolio-main-image {
  width: 100%;
  height: 100%;
  /* `object-fit: cover;` is now handled by Vuetify's `cover` prop on v-img */
  transition: transform 0.3s ease; /* Smooth transition for hover */
}

/* Specific hover effect for the image to make it slightly wider */
.portfolio-main-card:hover .portfolio-main-image {
  transform: scale(1.05); /* Slightly enlarge the image itself */
}

/* --- New Styles for Overlays --- */

/* Always visible "Portafolio" text */
.main-portfolio-text {
  color: #fff;
  font-size: 3em; /* Adjust size as needed */
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add shadow for readability */
  pointer-events: none; /* Allows clicks to pass through to the router-link */
}

/* Hover overlay for "Ver Contenido" */
.hover-overlay {
  background-color: rgba(0, 0, 0, 0) !important; /* Start fully transparent */
  transition: background-color 0.3s ease, opacity 0.3s ease; /* Smooth transition */
}

.portfolio-main-card:hover .hover-overlay {
  background-color: rgba(0, 0, 0, 0.6) !important; /* Darker background on hover */
}

.view-details-text {
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
  opacity: 0; /* Hidden by default */
  transition: opacity 0.3s ease;
}

.portfolio-main-card:hover .view-details-text {
  opacity: 1; /* Show text on hover */
}

/* Responsive adjustments */
@media (max-width: 600px) { /* For extra small screens */
  .portfolio-title {
    font-size: 2.2em;
  }
  .portfolio-description {
    font-size: 1em;
  }
  .category-btn, .subcategory-btn {
    font-size: 0.9em !important;
    padding: 8px 15px !important;
  }
  .portfolio-main-card {
    height: 300px; /* Adjust height for smaller screens */
  }
  .main-portfolio-text {
    font-size: 2em; /* Smaller text on small screens */
  }
}
</style>