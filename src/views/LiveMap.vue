<template>
  <v-container fluid grid-list-xs pa-0>
    <MapTrain></MapTrain>
  </v-container>
</template>

<script>
import MapTrain from '../components/MapTrain.vue'

export default {
  components: {
    MapTrain
  }
}
</script>

<style lang="less" scoped>
#map {
  height: 90vh;
}
</style>
