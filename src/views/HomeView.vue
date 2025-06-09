<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-card-title class="text-h5">Página de Inicio</v-card-title>
      <v-card-text>
        <p>Bienvenido a tu aplicación Vue + Vuetify + Vite con Router.</p>
      </v-card-text>
      <v-card-actions>
        <router-link to="/about" class="text-decoration-none">
          <v-btn color="primary" flat>
            Ir a Acerca de
          </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>

</script>