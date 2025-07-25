<template>
  <v-app-bar app flat dark class="elegant-navbar">
    <!-- Logo -->
    <div class="logo-container" @click="navigateAndScroll('home')" role="button">
      <v-img 
        :src="logo" 
        max-width="500"
        contain
        min-width="360"
        min-height="220"
        alt="Logo"
        @error="handleImageError"
      />
      <span v-if="!logoLoaded" class="logo-placeholder">MY LOGO</span>
    </div>

    <!-- Mobile menu button aligned right -->
    <v-app-bar-nav-icon
      class="menu-icon d-sm-none"
      @click="toggleMobileMenu"
      style="margin-left: auto"
    />

    <!-- Desktop menu -->
    <nav class="desktop-menu d-none d-sm-flex">
      <a href="#" class="nav-item" @click.prevent="navigateAndScroll('home')">Inicio</a>
      <a href="#" class="nav-item" @click.prevent="navigateAndScroll('about')">Sobre mí</a>

      <div class="nav-item portfolio" @click.stop="togglePortfolioMenu" ref="submenuRef">
        <span>Portafolio <v-icon small>{{ showSubmenu ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon></span>
        <div class="submenu" v-show="showSubmenu" @click.stop>
          <router-link to="/Cfotografias" class="submenu-item">Imágenes</router-link>
          <router-link to="/Cvideos" class="submenu-item">Videos</router-link>
          <router-link to="/Cdrone" class="submenu-item">Dron</router-link>
        </div>
      </div>

      <a href="#" class="nav-item" @click.prevent="navigateAndScroll('testimonios')">Testimoniales</a>
      <a href="#" class="nav-item" @click.prevent="navigateAndScroll('contacto')">Contáctanos</a>
    </nav>

    <!-- Mobile Centered Overlay Menu -->
    <div v-if="mobileMenuOpen" class="mobile-overlay" @click.self="mobileMenuOpen = false">
      <div class="menu-center">
        <div class="close-btn" @click="mobileMenuOpen = false">
          <v-icon>mdi-close</v-icon>
        </div>
        <div class="menu-links">
          <div class="menu-link" @click="navigateAndScroll('home')">Inicio</div>
          <div class="menu-link" @click="navigateAndScroll('about')">Sobre mí</div>
          <div class="menu-link" @click="togglePortfolioMobileMenu">
            Portafolio <v-icon small>{{ showPortfolioMobile ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </div>
          <div v-if="showPortfolioMobile" class="submenu-links">
            <router-link to="/Cfotografias" class="menu-sublink" @click="mobileMenuOpen = false">Imágenes</router-link>
            <router-link to="/Cvideos" class="menu-sublink" @click="mobileMenuOpen = false">Videos</router-link>
            <router-link to="/Cdrone" class="menu-sublink" @click="mobileMenuOpen = false">Dron</router-link>
          </div>
          <div class="menu-link" @click="navigateAndScroll('testimonios')">Testimoniales</div>
          <div class="menu-link" @click="navigateAndScroll('contacto')">Contáctanos</div>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const logo = ref('')
const logoLoaded = ref(false)
try {
  logo.value = new URL('../assets/logo.png', import.meta.url).href
  logoLoaded.value = true
} catch (e) {
  console.error("Could not load logo image:", e)
  logoLoaded.value = false
}

const router = useRouter()
const mobileMenuOpen = ref(false)
const showSubmenu = ref(false)
const showPortfolioMobile = ref(false)
const submenuRef = ref(null)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  showPortfolioMobile.value = false
}

const togglePortfolioMenu = () => {
  showSubmenu.value = !showSubmenu.value
}

const togglePortfolioMobileMenu = () => {
  showPortfolioMobile.value = !showPortfolioMobile.value
}

const handleImageError = () => {
  console.error("Failed to load logo image")
  logoLoaded.value = false
}

const navigateAndScroll = async (id) => {
  mobileMenuOpen.value = false
  showSubmenu.value = false
  if (router.currentRoute.value.path !== '/') {
    await router.push('/')
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
/* Base Styles */
.elegant-navbar {
  background-color: rgba(0, 0, 0, 0.6) !important;
  backdrop-filter: blur(10px);
  height: 80px;
  position: relative;
  z-index: 1000;
}

.elegant-navbar :deep(.v-toolbar__content) {
  overflow: visible !important;
  padding: 0 20px !important;
  height: 100% !important;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
}

/* Logo Styles */
.logo-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  transition: transform 0.3s ease;
  z-index: 1001;
}

.logo-placeholder {
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 8px 16px;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
}

/* Desktop Menu Styles */
.desktop-menu {
  display: flex;
  gap: 30px;
  align-items: center;
  font-weight: 500;
  margin: 0 auto;
}

.nav-item {
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  padding: 4px 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-item::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  left: 0;
  bottom: 0;
  background-color: #ffffff;
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
  top: calc(100% + 8px);
  left: 0;
  background: rgba(0, 0, 0, 0.96);
  padding: 12px 18px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 160px;
  z-index: 9999;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.1);
}

.submenu-item {
  color: white;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.submenu-item:hover {
  color: #e0e0e0;
  padding-left: 4px;
}

/* Mobile Menu Styles */
.menu-icon {
  color: white !important;
  z-index: 1001;
}

.mobile-fullscreen-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
}

.mobile-menu-content {
  background: rgba(0, 0, 0, 0.9);
  border-radius: 16px;
  padding: 40px;
  width: 85%;
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
}

.mobile-menu-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-menu-item {
  color: white;
  font-size: 1.3rem;
  padding: 10px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.mobile-menu-item:hover {
  color: #e0e0e0;
  transform: scale(1.05);
}

.portfolio-mobile-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 0;
  margin-top: -10px;
  animation: slideDown 0.3s ease;
}

.portfolio-mobile-item {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  text-decoration: none;
  text-align: center;
  padding: 8px 0;
  transition: all 0.3s ease;
}

.portfolio-mobile-item:hover {
  color: white;
  transform: scale(1.05);
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.menu-center {
  text-align: center;
  color: white;
  max-width: 90vw;
}

.menu-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.5rem;
}

.menu-link {
  cursor: pointer;
  transition: transform 0.2s;
}

.menu-link:hover {
  transform: scale(1.05);
  color: #e0e0e0;
}

.submenu-links {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.2rem;
}

.menu-sublink {
  color: #ccc;
  text-decoration: none;
}

.menu-sublink:hover {
  color: #fff;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}







/* Responsive Adjustments */
@media (max-width: 960px) {
  .desktop-menu {
    gap: 20px;
  }
  .nav-item {
    font-size: 1rem;
  }
}

@media (max-width: 599px) {
  .logo-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .elegant-navbar :deep(.v-toolbar__content) {
    padding: 0 10px !important;
  }
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideDown {
  from { 
    opacity: 0;
    transform: translateY(-10px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
</style>