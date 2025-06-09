<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Mi App Vue con Vuetify, Router y Pinia</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/" class="text-decoration-none text-white">
        <v-btn text>Inicio</v-btn>
      </router-link>
      <router-link to="/about" class="text-decoration-none text-white">
        <v-btn text>Acerca de</v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view /> </v-main>
  </v-app>
</template>

<script setup>
// No necesitas lógica adicional en App.vue por ahora
</script>

<style>
/* Estilos para asegurar que los router-link se vean bien en la app-bar */
.text-white {
  color: white !important;
}
.text-decoration-none {
  text-decoration: none !important;
}
</style>