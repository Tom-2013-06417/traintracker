<template>
  <v-container fluid grid-list-xs pa-0>
    <v-select
      v-model="startStation"
      :items="stations"
      item-text="name"
      item-value="id"
      label="Current location"
      hint="Nearest station"
      solo
      persistent-hint
    ></v-select>
    <v-select
      v-model="endStation"
      :items="stations"
      item-text="name"
      item-value="id"
      label="Destination"
      hint="Drop-off station"
      solo
      persistent-hint
    ></v-select>
    Price for beep card: <h3>{{ getBeepFare(startStation, endStation) }}</h3>
    <br/>
    Price for single ticket journey: <h3>{{ getSingleJourneyFare(startStation, endStation) }}</h3>
    <br/>
    <v-btn color="green accent-3" large>Let's Go!</v-btn>
  </v-container>
</template>

<script>
import {
  stations,
  fareMatrixForBeep,
  fareMatrixForSingleJourney
} from '../api'

const getBeepFare = (startStation, endStation) => {
  if (!startStation || !endStation) {
    return
  }
  const startStationOrder = stations.find(station => { return station.id === startStation }).order
  const endStationOrder = stations.find(station => { return station.id === endStation }).order
  return fareMatrixForBeep[startStationOrder][endStationOrder]
}

const getSingleJourneyFare = (startStation, endStation) => {
  if (!startStation || !endStation) {
    return
  }
  const startStationOrder = stations.find(station => { return station.id === startStation }).order
  const endStationOrder = stations.find(station => { return station.id === endStation }).order
  return fareMatrixForSingleJourney[startStationOrder][endStationOrder]
}

export default {
  data: () => ({
    stations: stations,
    startStation: '',
    endStation: ''
  }),
  methods: {
    getBeepFare,
    getSingleJourneyFare
  }
}
</script>
