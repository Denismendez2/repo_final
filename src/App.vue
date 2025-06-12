<template>
  <v-app>
    <Menu />
    <v-main>
      <router-view to="/" />
    </v-main>
  </v-app>
</template>

<script setup>
import Menu from './components/MenuComponent.vue'
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
