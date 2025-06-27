<template>
  <section
    id="testimonios"
    ref="aboutRef"
    :class="['about-section', isVisible ? 'animate__animated animate__fadeInUp' : '']"
  >
  <section class="testimonios-section">
    <h2 class="section-title">Testimonios</h2>
    <div class="testimonios-grid">
      <div
        v-for="(testimonio, index) in testimonios"
        :key="index"
        class="testimonio-card"
      >
        <p class="mensaje">“{{ testimonio.mensaje }}”</p>
        <div class="autor">
          <img :src="testimonio.foto" alt="Foto del cliente" />
          <div>
            <h4>{{ testimonio.nombre }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  </section>
</template>

<script setup>

import foto1 from '../assets/testimonio1.jpg'


const testimonios = [
  {
    nombre: 'Hunters',
    mensaje: '¡Superaste mis expectativas! Muchísimas gracias',
    foto: foto1
  },
  {
    nombre: 'Nahomi López',
    
    mensaje: 'Muchas gracias Levi, el video quedo lindo. ¡Sos el mejor fotógrafo!',
    foto: 'https://i.pravatar.cc/150?img=2'
  },
  {
    nombre: 'Andrés Arias',
   
    mensaje: '¡Excelente trabajo como siempre bro!',
    foto: 'https://i.pravatar.cc/150?img=3'
  },
  {
    nombre: 'Carlos Arias',
    
    mensaje: '¡Que fotonotas mi hermano! Te luciste',
    foto: 'https://i.pravatar.cc/150?img=4'
  },
  {
    nombre: 'Alejandro Arias',
   
    mensaje: 'Estuvieron super geniales. ¡Buenísimas!',
    foto: 'https://i.pravatar.cc/150?img=5'
  },
    {
    nombre: 'Cojute BC',
  
    mensaje: '¡Mis respetos para todo lo que has mejorado y avanzado!',
    foto: foto1
  }
];
</script>

<style scoped>
.testimonios-section {
  background-color: #111;
  color: #f0f0f0;
  padding: 80px 20px;
  text-align: center;
}

.section-title {
  font-size: 2.5em;
  margin-bottom: 50px;
  color: #fff;
}

.testimonios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonio-card {
  background-color: #1f1f1f;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.6);
}

.mensaje {
  font-style: italic;
  font-size: 1.1em;
  margin-bottom: 20px;
  color: #ccc;
}

.autor {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: auto;
}

.autor img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
}

.autor h4 {
  margin: 0;
  font-size: 1.1em;
  color: #f0f0f0;
}

.autor span {
  font-size: 0.9em;
  color: #aaa;
}

/* Estilo para centrar la segunda fila si son solo 2 testimonios */
@media (min-width: 768px) {
  .testimonios-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .testimonio-card:nth-child(4),
  .testimonio-card:nth-child(5) {
    grid-column: span 1;
    justify-self: center;
  }
}
</style>
