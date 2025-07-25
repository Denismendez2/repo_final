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
            <a href="https://www.instagram.com/levimendoza_photographer?igsh=ZmMyZmZnYnRlZWs3" target="_blank" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@levimendoza_photographer?_t=ZM-8yJf1sHOWTl&_r=1" target="_blank" class="social-icon">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="about-right">
        <h2 class="section-title">Sobre mí</h2>
        <p class="description">
          Soy fotógrafo y videógrafo con gran experiencia en distintos estilos y técnicas. Me encanta cuidar cada detalle, desde cada toma hasta la edición, mi principal objetivo es que cada cliente se sienta satisfecho y feliz con el resultado.
        </p>
       
        <div class="details-grid">
          <div class="specialties">
            <h3>Habilidades</h3>
            <ul>
              <li><span class="icon">&#10003;</span>Atención al detalle</li>
              <li><span class="icon">&#10003;</span>Comunicaciones</li>
              <li><span class="icon">&#10003;</span>Creatividad</li>
              <li><span class="icon">&#10003;</span>Puntualidad</li>
              <li><span class="icon">&#10003;</span>Trabajo en equipo</li>
              <li><span class="icon">&#10003;</span>Empatía</li>
            </ul>
          </div>
          <div class="equipment">
            <h3>Equipamiento</h3>
            <ul>
              <li><span class="icon">&#128247;</span>Cámara: CANON 70D</li>
              <li><span class="icon">&#128641;</span>Dron: DJI Mini 2</li>
              <li><span class="icon">&#128187;</span>Micrófonos: Hollyland Lark M2S</li>
              <li><span class="icon">&#128161;</span> Estabilizador: DJI RSC-2</li>
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
