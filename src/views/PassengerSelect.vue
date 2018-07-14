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

const stations = [
  {
    id: 'roosevelt',
    name: 'Roosevelt',
    order: 0,
    coordinates: {
      lat: 0,
      long: 0
    }
  },
  {
    id: 'balintawak',
    name: 'Balintawak',
    order: 1,
    coordinates: {
      lat: 0,
      long: 0
    }
  },
  {
    id: 'monumento',
    name: 'Monumento',
    order: 2,
    coordinates: {
      lat: 0,
      long: 0
    }
  },
  {
    id: 'fifth_avenue',
    name: '5th Avenue',
    order: 3,
    coordinates: {
      lat: 0,
      long: 0
    }
  }
]

const fareMatrixForBeep = [
  [11, 13, 15, 16],
  [13, 11, 13, 15],
  [15, 13, 11, 12],
  [16, 15, 12, 11]
]

const fareMatrixForSingleJourney = [
  [0, 15, 15, 20],
  [15, 0, 15, 15],
  [15, 15, 0, 15],
  [20, 15, 15, 0]
]

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
