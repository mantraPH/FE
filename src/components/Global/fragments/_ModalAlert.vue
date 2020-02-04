<template>
  <v-row justify="center">
    <v-dialog v-model="MODAL.toggle" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">{{ MODAL.title }}</v-card-title>
        <v-card-text>{{ MODAL.message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" 
           @click="MODAL_CLOSE">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
/* eslint-disable no-console */
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Modal-Alert',
  computed: {
    ...mapGetters({
      MODAL: 'MODAL'
    })
  },

  methods: {
    ...mapMutations({
      MODAL_CLOSE: 'MODAL_CLOSE'
    })
  }
}
</script>
<style scoped>
.headline {
  color: red;
}
</style>