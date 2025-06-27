<template>
  <v-app-bar app flat dark class="elegant-navbar">
    <v-app-bar-nav-icon
      class="d-sm-none"
      @click="drawer = !drawer"
    />

    <!-- Logo -->
    <div class="logo-container">
      <v-img :src="logo" max-width="140" contain />
    </div>

    <v-spacer />

    <!-- Desktop Menu -->
    <nav class="desktop-menu d-none d-sm-flex">

      <a href="#" class="nav-item" @click.prevent="navigateAndScroll('home')">Inicio</a>
      <a href="#" class="nav-item" @click.prevent="navigateAndScroll('about')">About Us</a>

<div
  class="nav-item portfolio ml-4"
  @click.prevent="scrollAndTogglePortfolio"
  ref="submenuRef"
>
  <span>Portafolio</span>
  <div class="submenu" v-if="showSubmenu">
    <router-link to="/Cfotografias" class="submenu-item">Imágenes</router-link>
    <router-link to="/Cvideos" class="submenu-item">Videos</router-link>
    <router-link to="/Cdrone" class="submenu-item">Dron</router-link>
  </div>
</div>


<a href="#" class="nav-item" @click.prevent="navigateAndScroll('testimonios')">Testimoniales</a>
<a href="#" class="nav-item" @click.prevent="navigateAndScroll('contacto')">Contáctanos</a>

    </nav>
  </v-app-bar>

  <!-- Mobile Drawer Overlay -->
  <transition name="fade">
    <div v-if="drawer" class="drawer-overlay" @click.self="drawer = false">
      <div class="mobile-nav">
  <router-link to="/#home" class="nav-item">Inicio</router-link>
  <router-link to="/#about" class="nav-item">About Us</router-link>
  <router-link to="/#contacto" class="nav-item">Contáctanos</router-link>
  <div class="mobile-submenu">
  <div class="clickable" @click="showSubmenuMobile = !showSubmenuMobile">
    Portafolio
  </div>
  <div v-if="showSubmenuMobile" class="submenu-list">
    <router-link to="/Cfotografias" @click="drawer = false">Imágenes</router-link>
    <router-link to="/portfolio/videos" @click="drawer = false">Videos</router-link>
    <router-link to="/portfolio/dron" @click="drawer = false">Dron</router-link>
  </div>
</div>

</div>

    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import logo from '../assets/logo.png'

const router = useRouter()
const drawer = ref(false)
const showSubmenu = ref(false)
const showSubmenuMobile = ref(false)
const submenuRef = ref(null)

const scrollAndTogglePortfolio = async () => {
  const portfolioEl = document.getElementById('portfolio')
  if (portfolioEl) {
    portfolioEl.scrollIntoView({ behavior: 'smooth' })
  }
  showSubmenu.value = !showSubmenu.value
}


const navigateAndScroll = async (id) => {
  if (router.currentRoute.value.path !== '/') {
    await router.push('/')
    // Espera a que se cargue el DOM en HomeView
    requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    })
  } else {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

function handleClickOutside(event) {
  if (submenuRef.value && !submenuRef.value.contains(event.target)) {
    showSubmenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>


<style scoped>

::v-deep(.v-toolbar__content) {
  overflow: visible !important;
  position: relative;
  z-index: 11;
}



.v-application, .v-main {
  overflow: visible !important;
}

.elegant-navbar {
  background-color: rgba(0, 0, 0, 0.6) !important;
  backdrop-filter: blur(10px);
  height: 72px;
  padding: 0 36px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.desktop-menu {
  display: flex;
  gap: 40px;
  align-items: center;
  font-weight: 500;
  margin: 4em;
  position: relative; /* ✅ Esto es importante */
  z-index: 10;         /* ✅ Mayor que el app-bar si fuera necesario */
}


.nav-item {
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  padding: 4px 8px;
  margin-left: 20px;
  transition: color 0.3s ease;
}

.nav-item::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  left: 0;
  bottom: 0;
  background-color: #e0e0e0;
  transition: width 0.3s ease;
}

.nav-item:hover::after {
  width: 100%;
}

.nav-item:hover {
  color: #e0e0e0;
}

.portfolio {
  position: relative;
}

.submenu {
  position: absolute;
  top: 100%; /* justo debajo del botón */
  left: 0;
  background: rgba(0, 0, 0, 0.96);
  padding: 12px 18px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 160px;
  z-index: 9999; /* ✅ Altísimo para que no quede detrás del app-bar */
}


.submenu-item {
  color: white;
  font-size: 1rem;
  text-decoration: none;
  transition: 0.2s;
}
.submenu-item:hover {
  color: #e0e0e0;
}


.sub-submenu {
  margin-top: 8px;
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-left: 2px solid #444;
}
.sub-submenu a {
  color: #ccc;
  font-size: 0.95rem;
  text-decoration: none;
}
.sub-submenu a:hover {
  color: #FFD700;
}

/* Mobile Menu */
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.mobile-nav a,
.mobile-submenu > .clickable {
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
}
.mobile-nav a:hover,
.clickable:hover {
  color: #FFD700;
}
.submenu-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}
.sub-submenu a {
  font-size: 1.2rem;
  color: #ccc;
  text-decoration: none;
}
.submenu-list a {
  font-size: 1.3rem;
  color: white;
  transition: 0.2s;
  text-align: center;
}
.submenu-list a:hover {
  color: #e0e0e0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
