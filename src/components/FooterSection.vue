<template>
  <footer class="footer">
    <v-container>
      <v-row class="footer-top" justify="space-between">
        <v-col cols="12" md="4" class="footer-brand">
          <h2 class="brand-name">LP Photographer</h2>
          <p class="brand-description">
            Capturando momentos desde una nueva perspectiva. Calidad, creatividad y pasión en cada toma.
          </p>
        </v-col>

        <v-col cols="12" md="4" class="footer-links">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="#" @click.prevent="navigateAndScroll('home')">Inicio</a></li>
            <li><a href="#" @click.prevent="navigateAndScroll('about')">Sobre mí</a></li>
            <li><a href="#" @click.prevent="navigateAndScroll('portfolio')">Portafolio</a></li>
            <li><a href="#" @click.prevent="navigateAndScroll('testimonios')">Testimoniales</a></li>
            <li><a href="#" @click.prevent="navigateAndScroll('contacto')">Contáctanos</a></li>
          </ul>
        </v-col>

        <v-col cols="12" md="4" class="footer-contact">
          <h3>Sígueme</h3>
          <div class="social-icons">
            <a href="https://instagram.com/" target="_blank" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://tiktok.com/" target="_blank" aria-label="TikTok">
              <i class="fab fa-tiktok"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p>Email: contacto@lp-photographer.com</p>
          <p>Tel: +503 1234 5678</p>
          <p>San Salvador, El Salvador</p>
        </v-col>
      </v-row>

      <v-divider class="my-6" color="grey darken-2"></v-divider>

      <v-row justify="center">
        <p class="footer-copy">&copy; {{ new Date().getFullYear() }} LP Photographer. Todos los derechos reservados.</p>
      </v-row>
    </v-container>
  </footer>
</template>

<script setup>
function navigateAndScroll(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.footer {
  background: #111;
  color: #e0e0e0;
  padding: 60px 20px 30px;
  font-family: 'Helvetica Neue', sans-serif;
}

.footer-top {
  margin-bottom: 40px;
}

.footer-brand h2 {
  font-size: 2em;
  margin-bottom: 10px;
  color: #ffffff;
}

.brand-description {
  color: #b0b0b0;
  font-size: 1em;
  line-height: 1.6;
}

.footer-links h3,
.footer-contact h3 {
  font-size: 1.3em;
  margin-bottom: 12px;
  color: #ffffff;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: #b0b0b0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ffffff;
}

.footer-contact p {
  margin: 6px 0;
  font-size: 0.95em;
}

.footer-copy {
  text-align: center;
  font-size: 0.9em;
  color: #777;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.social-icons a {
  color: #e0e0e0;
  font-size: 1.5em;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ffffff;
}
</style>
