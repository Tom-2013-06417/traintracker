<template>
  <v-card>
    <v-card-media>
      <v-container
        fluid
        pa-2
      >
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <v-select
              v-model="startStation"
              :items="stations"
              item-text="name"
              item-value="id"
              label="Current station"
            ></v-select>
            <v-select
              v-model="endStation"
              :items="stations"
              item-text="name"
              item-value="id"
              label="Drop-off station"
            ></v-select>
            {{ getTotalTravelTime(startStation, endStation) }} min
            Price for beep card: <h3>{{ getBeepFare(startStation, endStation) }}</h3>
            <br/>
            Price for single ticket journey: <h3>{{ getSingleJourneyFare(startStation, endStation) }}</h3>
            <br/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="green accent-3" large>Let's Go!</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  stations,
  fareMatrixForBeep,
  fareMatrixForSingleJourney
} from '../api'

export default {
  data: () => ({
    stations: stations,
    startStation: '',
    endStation: ''
  }),
  methods: {
    getBeepFare (startStation, endStation) {
      if (!startStation || !endStation) {
        return
      }
      const startStationOrder = stations.find(station => { return station.id === startStation }).order
      const endStationOrder = stations.find(station => { return station.id === endStation }).order

      return fareMatrixForBeep[startStationOrder][endStationOrder]
    },
    getSingleJourneyFare (startStation, endStation) {
      if (!startStation || !endStation) {
        return
      }
      const startStationOrder = stations.find(station => { return station.id === startStation }).order
      const endStationOrder = stations.find(station => { return station.id === endStation }).order

      return fareMatrixForSingleJourney[startStationOrder][endStationOrder]
    },
    getTotalTravelTime (startStation, endStation) {
      if (!startStation || !endStation) {
        return
      }
      const startStationOrder = stations.find(station => { return station.id === startStation }).order
      const endStationOrder = stations.find(station => { return station.id === endStation }).order

      const stationsInTravel = stations.filter(station => {
        return startStationOrder < endStationOrder
          ? station.order >= startStationOrder && station.order < endStationOrder
          : station.order >= endStationOrder && station.order < startStationOrder
      })

      const totalTravelTime = stationsInTravel.reduce(
        (accumulator, station) => accumulator + station.minutesToNextStation, 0
      )
      return totalTravelTime
    }
  }
}
</script>
