<template>
  <v-container fluid grid-list-xs pa-0>
    <v-layout row fill-height>
      <v-flex xs12>
        <Map></Map>
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
import Map from '../components/Map.vue'
import PassengerInput from '../components/PassengerInput.vue'

export default {
  components: {
    Map,
    PassengerInput
  }
}
</script>

<style lang="less" scoped>
#map {
  height: 50vh;
}
</style>
