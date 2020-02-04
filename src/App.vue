<template>
  <v-app id="inspire">
    <Navigation v-if="$session.exists()"/>
    <v-content>
      <router-view />
      <ModalAlert />
      <SnackBar />
    </v-content>
  </v-app>
</template>
<script>
import Navigation from '@/components/layout/Navigation.vue'
export default {
  name: 'One-Health',
  components: {
    Navigation
  }
}
</script>
<style>
.table-top-border {
  border-top: 3px solid #1976d2;
}
.pointer {
  cursor: pointer;
}
.border-red .v-input__slot fieldset {
  border: 1px solid red !important;
}
.v-card__title {
  height: 10vh;
  background-color: #1976d2;
}
.v-card__title h3 {
  color: #ffff;
}
</style>