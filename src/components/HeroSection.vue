<template>
  <section id="home">
  <section class="hero-wrapper">
    <div class="carousel-container">
  <img
    v-for="(image, index) in carouselImages"
    :key="image.url"
    :src="image.url"
    class="carousel-image"
    :class="{ active: index === currentIndex }"
    alt="Imagen de carrusel"
  />
</div>


    <div class="overlay-content">
      <h1 class="main-title">Capturando Momentos, Creando Arte</h1>
      <p class="subtitle">
        Fotografía y videografía profesional para transformar tus ideas en realidad visual
      </p>
      <div class="hero-buttons">
        <button class="btn-hero primary" @click.prevent="navigateAndScroll('portfolio')">Ver Portafolio</button>
        <button class="btn-hero secondary" @click="scrollToSection('contacto')">Contactar</button>
      </div>
    </div>
  </section>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      currentIndex: 0,
      carouselImages: [
        { url: 'https://ik.imagekit.io/levimendozaph/Hunters/_MG_5661.jpg' },
        { url: 'https://ik.imagekit.io/levimendozaph/Sesiones%20generales/_MG_5404.jpg' },
        { url: 'https://ik.imagekit.io/levimendozaph/Eventos/_MG_4065.jpg' },
        { url: 'https://ik.imagekit.io/levimendozaph/Deportes/_MG_0393.jpg' }
      ]
    };
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
    }, 10000); // transición cada 10s
  },
  methods: {
    scrollToSection(id) {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    },navigateAndScroll(id) {
  this.$router.push({ hash: `#${id}` }).then(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
}

  }
};
</script>

<style scoped>
.hero-wrapper {
  position: relative;
  width: 100%;
  height: 100dvh; /* Altura visible exacta */
  overflow: hidden;
}

.carousel-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.carousel-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transition: opacity 2.5s ease-in-out; /* suave fade */
  z-index: 0;
}

.carousel-image.active {
  opacity: 1;
  z-index: 1;
}


/* Transición elegante */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.overlay-content {
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
  padding: 2rem;
  top: 50%;
  transform: translateY(-50%);
  max-width: 850px;
  margin: 0 auto;
  background-color: rgba(0,0,0,0.4);
  backdrop-filter: blur(4px);
  border-radius: 1rem;
}

.main-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn-hero {
  padding: 0.8rem 1.6rem;
  border: none;
  font-size: 1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.3s ease all;
}

.btn-hero.primary {
  background: white;
  color: #111;
}
.btn-hero.primary:hover {
  background: #ddd;
}

.btn-hero.secondary {
  background: transparent;
  border: 2px solid white;
  color: white;
}
.btn-hero.secondary:hover {
  background: white;
  color: #111;
}

/* Responsive */
@media (max-width: 768px) {
  .main-title {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  .overlay-content {
    padding: 1rem;
  }
}
</style>
