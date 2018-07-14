<template>
  <v-container fluid grid-list-xs pa-0>
    <Map></Map>
  </v-container>
</template>

<script>
import Map from '../components/Map.vue'

export default {
  components: {
    Map
  }
}
</script>

<style lang="less" scoped>
#map {
  height: 90vh;
}
</style>
