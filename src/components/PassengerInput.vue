<template>
  <v-card>
    <v-container
      fluid
      pa-2
    >
      <v-layout fill-height>
        <v-flex xs12 align-end flexbox>
          <v-select
            :items="stations"
            v-model="startStation"
            @input="$emit('getStartStation', startStation)"
            item-text="name"
            item-value="id"
            label="Current station"
          ></v-select>
          <v-divider></v-divider>
          <v-select
            :items="stations"
            v-model="endStation"
            @input="$emit('getEndStation', endStation)"
            item-text="name"
            item-value="id"
            label="Drop-off station"
          ></v-select>
          <div class="text-xs-right">
            {{ getTotalTravelTime(startStation, endStation) }} min
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { stations } from '../api'

const state = {
  stations,
  startStation: '',
  endStation: ''
}

export default {
  data: () => (state),
  methods: {
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
