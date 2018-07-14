<template>
  <v-container fluid grid-list-xs pa-0>
    <v-layout row fill-height>
      <v-flex xs12>
        <MapStation>

          <v-layout row align-center justify-center slot="top">
            <v-flex xs12 md4>
              <PassengerInput
                @getStartStation="setStartStation"
                @getEndStation="setEndStation"
              ></PassengerInput>
            </v-flex>
          </v-layout>

          <v-layout row align-center justify-center slot="bottom">
            <v-flex xs12 md4>
              <PassengerFareDisplay
                :startStation="startStation"
                :endStation="endStation"
              ></PassengerFareDisplay>
            </v-flex>
          </v-layout>

        </MapStation>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MapStation from '../components/MapStation.vue'
import PassengerInput from '../components/PassengerInput.vue'
import PassengerFareDisplay from '../components/PassengerFareDisplay.vue'

const state = {
  startStation: '',
  endStation: ''
}

export default {
  data () {
    return state
  },
  components: {
    MapStation,
    PassengerInput,
    PassengerFareDisplay
  },
  methods: {
    setStartStation (station) {
      this.startStation = station
    },
    setEndStation (station) {
      this.endStation = station
    }
  }
}
</script>

<style lang="less" scoped>
#map {
  height: 50vh;
}
</style>
