<template>
  <v-snackbar
    v-model="SNACKBAR.toggle"
    :color="SNACKBAR.color"
    :timeout="SNACKBAR.timeout"
    :top="SNACKBAR.top === 'top'">
    <v-icon color="white"
      large>
    {{ SNACKBAR.icon }}
    </v-icon>
    <span class="ml-n5">{{ SNACKBAR.text }}</span>
    <v-btn dark text
      @click="SNACKBAR_CLOSE">
      <v-icon color="white">mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Snack-Bar',
  computed: {
    ...mapGetters({
      SNACKBAR: 'SNACKBAR'
    })
  },
  methods: {
    ...mapMutations({
      SNACKBAR_CLOSE: 'SNACKBAR_CLOSE'
    })
  }
}
</script>