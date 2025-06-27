<template>
  <section
    id="about"
    ref="aboutRef"
    :class="['about-section', isVisible ? 'animate__animated animate__fadeInUp' : '']"
  >
    <div class="about-content-wrapper">
      <div class="about-left">
        <div class="about-media">
          <img src="../assets/fotoabout.jpg" alt="Sobre mí" class="about-image" />

          <!-- Redes sociales -->
          <div class="social-links">
            <a href="https://instagram.com/tu_usuario" target="_blank" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://tiktok.com/@tu_usuario" target="_blank" class="social-icon">
              <i class="fab fa-tiktok"></i>
            </a>
            <a href="https://linkedin.com/in/tu_usuario" target="_blank" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="about-right">
        <h2 class="section-title">Sobre mí</h2>
        <p class="description">
          Soy un fotógrafo y videógrafo apasionado con más de 10 años de experiencia...
        </p>
        <p class="description">
          Mi objetivo es transformar tus ideas en imágenes...
        </p>
        <div class="details-grid">
          <div class="specialties">
            <h3>Especialidades</h3>
            <ul>
              <li><span class="icon">&#10003;</span>Fotografía de eventos</li>
              <li><span class="icon">&#10003;</span>Retratos profesionales</li>
              <li><span class="icon">&#10003;</span>Videografía comercial</li>
              <li><span class="icon">&#10003;</span>Fotografía deportiva</li>
            </ul>
          </div>
          <div class="equipment">
            <h3>Equipamiento</h3>
            <ul>
              <li><span class="icon">&#128247;</span>Cámaras profesionales</li>
              <li><span class="icon">&#128746;</span>Drones de última generación</li>
              <li><span class="icon">&#128187;</span>Equipo de video 4K</li>
              <li><span class="icon">&#128161;</span>Iluminación profesional</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const aboutRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.3 }
  )

  if (aboutRef.value) {
    observer.observe(aboutRef.value)
  }
})
</script>


<style scoped>
@keyframes smoothFadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-section.fade-in-up {
  animation: smoothFadeUp 1s ease forwards;
}



.about-section {
  background-color: #0d0d0d;
  color: #f0f0f0;
  padding: 80px 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.about-content-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 60px;
}

.about-left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  max-width: 100%;
  max-height: 100%;
}

.about-right {
  flex: 2;
  display: flex;
  flex-direction: column;
}

.about-media {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-title {
  font-size: 2.8em;
  color: #f0f0f0;
  margin-bottom: 30px;
  text-align: left;
}

.description {
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #b0b0b0;
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 30px;
}

.specialties h3,
.equipment h3 {
  font-size: 1.4em;
  color: #f0f0f0;
  margin-bottom: 15px;
}

.specialties ul,
.equipment ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.specialties li,
.equipment li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1em;
  color: #b0b0b0;
}

.icon {
  margin-right: 10px;
  font-size: 1.2em;
  color: #4CAF50;
}

.equipment .icon {
  color: #64B5F6;
}
.social-links {
  margin: 24px 0 0;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.social-icon {
  font-size: 1.6rem;
  color: white;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
  color: #bbbbbb;
}

.about-section {
  background: linear-gradient(to bottom, #111, #0d0d0d);
}


.social-link.ig { background-color: #E1306C; }
.social-link.tiktok { background-color: #000000; }
.social-link.linkedin { background-color: #0077B5; }


@media (max-width: 992px) {
  .about-content-wrapper {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }

  .about-left {
    width: 100%;
  }

  .about-image {
    max-height: 400px;
    border-radius: 12px;
  }

  .section-title {
    text-align: center;
  }

  .details-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 600px) {
  .about-section {
    padding: 60px 15px;
  }

  .section-title {
    font-size: 2.2em;
  }

  .description {
    font-size: 0.95em;
  }

  .specialties h3,
  .equipment h3 {
    font-size: 1.2em;
  }
}
</style>
