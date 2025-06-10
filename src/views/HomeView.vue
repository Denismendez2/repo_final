<template>
  <div>
    <HeroSection />
    <AboutSection />
    <!-- Nueva sección de contenido adicional para hacer la vista más larga -->
    <section class="additional-content">
      <h2>Nuestros Servicios</h2>
      <p>
        Ofrecemos una amplia gama de servicios fotográficos y de videografía para cubrir
        todas tus necesidades creativas. Desde eventos corporativos hasta retratos personales,
        nuestro equipo está listo para capturar la esencia de cada momento.
      </p>
      <div class="services-grid">
        <div class="service-item">
          <h3>Fotografía de Bodas</h3>
          <p>Capturamos cada emoción y detalle de tu día especial con un estilo único y atemporal.</p>
        </div>
        <div class="service-item">
          <h3>Videos Promocionales</h3>
          <p>Creamos contenido de video dinámico y atractivo para potenciar la presencia de tu marca.</p>
        </div>
        <div class="service-item">
          <h3>Sesiones Familiares</h3>
          <p>Momentos preciosos e inolvidables de tu familia, capturados con calidez y naturalidad.</p>
        </div>
        <div class="service-item">
          <h3>Fotografía de Producto</h3>
          <p>Imágenes nítidas y profesionales que realzan la calidad y atractivo de tus productos.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
</script>

<style scoped>
div {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.additional-content {
  background-color: #1a1a1a;
  color: #f0f0f0;
  padding: 80px 20px;
  text-align: center;
}

.additional-content h2 {
  font-size: 2.5em;
  margin-bottom: 40px;
}

.additional-content p {
  font-size: 1.1em;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 50px auto;
  color: #b0b0b0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.service-item {
  background-color: #2b2b2b;
  padding: 30px;
  border-radius: 8px;
  text-align: left;
  transition: transform 0.3s ease;
}

.service-item:hover {
  transform: translateY(-5px);
}

.service-item h3 {
  font-size: 1.5em;
  color: #f0f0f0;
  margin-bottom: 15px;
}

.service-item p {
  font-size: 0.95em;
  color: #b0b0b0;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .additional-content {
    padding: 60px 15px;
  }

  .additional-content h2 {
    font-size: 2em;
  }

  .additional-content p {
    font-size: 1em;
  }
}
</style>
