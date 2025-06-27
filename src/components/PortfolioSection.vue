<template>

  <section id="portfolio">
  <v-container class="portfolio-container" fluid>
    <v-row justify="center" class="text-center">
      <v-col cols="12">
        <h1 class="portfolio-title">Portfolio</h1>
        <p class="portfolio-description">
          Explora mi trabajo a través de diferentes categorías y descubre cómo puedo ayudarte a crear contenido visual impactante.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
  <v-col
    v-for="cat in categories"
    :key="cat.name"
    cols="12"
    md="10"
    xl="10"
    class="mb-6"
  >
    <router-link :to="cat.route" class="router-link-wrapper">
      <v-card
        class="portfolio-main-card"
        :class="cat.class"
        :elevation="10"
        hover
      >
        <div class="image-overlay-wrapper">
  <v-img
    :src="cat.imageUrl"
    :alt="cat.name + ' image'"
    class="portfolio-main-image"
    cover
  ></v-img>
  <div class="overlay-text">
    <h2 class="main-portfolio-text">{{ cat.name }}</h2>
  </div>
</div>

      </v-card>
    </router-link>
  </v-col>
</v-row>

  </v-container>
  </section>
</template>


<script>
import photographyImage from '../assets/fotoportaf.jpg';
import videoImage from '../assets/fotovideo.jpg';
import droneImage from '../assets/drone.jpg';

export default {
  name: 'Portfolio',
  data() {
    return {
      categories: [
        {
          name: 'Fotografías',
          route: '/Cfotografias',
          imageUrl: photographyImage,
          class: 'gradient-orange'
        },
       {
    name: 'Videos',
    route: '/Cvideos',
    imageUrl: videoImage,
    class: 'gradient-pink'
  },
        {
          name: 'Drone',
          route: '/Cdrone',
          imageUrl: droneImage,
          class: 'gradient-orange'
        }
      ]
    };
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
  height: 500px;
  border-radius: 10px !important;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
}

.portfolio-main-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6) !important;
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
  background-color: rgba(0, 0, 0, 0.4); /* Sombra oscura */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: background-color 0.3s ease;
}

.portfolio-main-card:hover .overlay-text {
  background-color: rgba(0, 0, 0, 0.6);
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
  position: relative;
  /* `object-fit: cover;` is now handled by Vuetify's `cover` prop on v-img */
  transition: transform 0.3s ease; /* Smooth transition for hover */
}

/* Specific hover effect for the image to make it slightly wider */
.portfolio-main-card:hover .portfolio-main-image {
  transform: scale(1.03); /* Slightly enlarge the image itself */
}

/* --- New Styles for Overlays --- */

/* Always visible "Portafolio" text */
.main-portfolio-text {
  color: #fff;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  
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

    z-index: 10;
  position: relative;
    font-size: 2em; /* Smaller text on small screens */
  }
}
</style>