<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title class="font-weight-bold text-h5">
      <router-link to="/" class="text-decoration-none white--text">
        Mi Marca
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text to="/">Inicio</v-btn>
      <v-btn text to="/servicios">Servicios</v-btn>
      <v-btn text to="/portafolio">Portafolio</v-btn>
      <v-btn text to="/contacto">Contacto</v-btn>
    </v-toolbar-items>

    <div class="hidden-md-and-up">
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/">
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>
          <v-list-item to="/servicios">
            <v-list-item-title>Servicios</v-list-item-title>
          </v-list-item>
          <v-list-item to="/portafolio">
            <v-list-item-title>Portafolio</v-list-item-title>
          </v-list-item>
          <v-list-item to="/contacto">
            <v-list-item-title>Contacto</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheAppBar',
};
</script>

<style scoped>
.v-toolbar-title a {
  text-decoration: none;
  color: inherit;
}
</style>