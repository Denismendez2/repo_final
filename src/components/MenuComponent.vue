<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-sm-none" />
    <v-toolbar-title>Mi App</v-toolbar-title>
    <v-spacer />

    <!-- Menú en pantallas grandes -->
    <div class="d-none d-sm-flex">
      <router-link to="/" class="nav-link">
        <v-btn text>Inicio</v-btn>
      </router-link>
      <router-link to="/about" class="nav-link">
        <v-btn text>Acerca de</v-btn>
      </router-link>
    </div>
  </v-app-bar>

  <!-- Drawer para móviles -->
  <v-navigation-drawer v-model="drawer" app temporary class="d-sm-none">
    <v-list dense>
      <v-list-item to="/" @click="drawer = false" router>
        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>
      <v-list-item to="/about" @click="drawer = false" router>
        <v-list-item-title>Acerca de</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: white;
}
</style>
