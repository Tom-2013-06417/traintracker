<template>
  <v-container fluid grid-list-xs pa-0>
    <v-layout row fill-height>
      <v-flex xs12>
        <MapStation></MapStation>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs6>
        <PassengerInput></PassengerInput>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MapStation from '../components/MapStation.vue'
import PassengerInput from '../components/PassengerInput.vue'

export default {
  components: {
    MapStation,
    PassengerInput
  }
}
</script>

<style lang="less" scoped>
#map {
  height: 50vh;
}
</style>
