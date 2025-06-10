<template>
  <v-app>
    <Menu />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import Menu from './components/MenuComponent.vue'
</script>
