import { createApp } from 'vue'
import App from './App.vue'

// --- 1. Vuetify ---
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Importa los iconos de Material Design
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // Configura iconos por defecto
  },
})

// --- 2. Vue Router ---
import router from './router' // Asegúrate de que 'src/router/index.js' exista

// --- 3. Pinia (RECOMENDADO) ---
// La línea que causaba el error ha sido corregida para apuntar directamente al archivo index.js
import pinia from './stores/index.js' // ¡Importación corregida!

import '@fortawesome/fontawesome-free/css/all.min.css'

// --- Opcional: Vuex (si no usas Pinia) ---
// import store from './store/index.js' // Si usas Vuex, asegúrate también de la ruta explícita
// Si usas Vuex, recuerda comentar .use(pinia) y descomentar .use(store)

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia) // Usa Pinia aquí
  // .use(store) // Descomenta esta línea y comenta .use(pinia) si usas Vuex
  .mount('#app')