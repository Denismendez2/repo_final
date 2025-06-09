<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-card-title class="text-h5">Página Acerca de</v-card-title>
      <v-card-text>
        <p>Esta es la página "Acerca de" de tu aplicación.</p>
      </v-card-text>
      <v-card-actions>
        <router-link to="/" class="text-decoration-none">
          <v-btn color="secondary" flat>
            Volver al Inicio
          </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
// No necesitas lógica adicional por ahora
</script>