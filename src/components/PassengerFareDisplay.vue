<template>
  <v-card>
    <v-layout row align-center justify-center>
      <v-flex xs6 text-xs-center>
        <v-card>
          <div class="display-1 pt-1 pb-0">
            {{ getBeepFare }}
          </div>
          <v-card-text class="caption py-1">
            Stored value
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 text-xs-center>
        <v-card>
          <div class="display-1 pt-1 pb-0">
            {{ getSingleJourneyFare }}
          </div>
          <v-card-text class="caption py-1">
            Single journey
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
    <v-btn
      @click="$emit('ok')"
      color="light-blue accent-3"
      block
      large
      :disabled="!startStation || !endStation"
      >Let's Go!
    </v-btn>
  </v-card>
</template>

<script>
import {
  stations,
  fareMatrixForBeep,
  fareMatrixForSingleJourney
} from '../api'

export default {
  props: ['startStation', 'endStation'],
  computed: {
    getBeepFare () {
      if (!this.startStation || !this.endStation) {
        return
      }
      const startStationOrder = stations.find(station => { return station.id === this.startStation }).order
      const endStationOrder = stations.find(station => { return station.id === this.endStation }).order

      return fareMatrixForBeep[startStationOrder][endStationOrder]
    },
    getSingleJourneyFare () {
      if (!this.startStation || !this.endStation) {
        return
      }
      const startStationOrder = stations.find(station => { return station.id === this.startStation }).order
      const endStationOrder = stations.find(station => { return station.id === this.endStation }).order

      return fareMatrixForSingleJourney[startStationOrder][endStationOrder]
    }
  }
}
</script>
