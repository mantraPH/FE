<template>
  <v-skeleton-loader
    :loading="loading"
    :transition="transition"
    :type="type">
  </v-skeleton-loader>
</template>
<script>
export default {
  name: 'Skeleton-Loading',
  props: {
    loading: {
      type: Boolean,
      default: false
    },

    transition: {
      type: String,
      default: 'Fade-transition'
    },

    type: {
      type: String,
      default: 'list-item-three-line'
    }
  }
}
</script>