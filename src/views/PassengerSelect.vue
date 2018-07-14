<template>
  <v-container fluid grid-list-xs pa-0>
    <v-select
      v-model="starting_point"
      :items="stations"
      item-text="name"
      item-value="id"
      label="Current location"
      hint="Nearest station"
      solo
      persistent-hint
    ></v-select>
    <v-select
      v-model="destination"
      :items="stations"
      item-text="name"
      item-value="id"
      label="Destination"
      hint="Drop-off station"
      solo
      persistent-hint
    ></v-select>
    Price for beep card: <h3>{{ beep_card_price }} {{ starting_point }}</h3>
    <br/>
    Price for single ticket journey: <h3>{{ single_journey_price }} {{ destination }}</h3>
    <br/>
    <v-btn color="green accent-3" large>Let's Go!</v-btn>
  </v-container>
</template>

<script>

const stations = [
  {
    id: 'roosevelt',
    name: 'Roosevelt',
    coordinates: {
      lat: 0,
      long: 0
    }
  },
  {
    id: 'balintawak',
    name: 'Balintawak',
    coordinates: {
      lat: 0,
      long: 0
    }
  },
  {
    id: 'monumento',
    name: 'Monumento',
    coordinates: {
      lat: 0,
      long: 0
    }
  },
  {
    id: 'fifth_avenue',
    name: '5th Avenue',
    coordinates: {
      lat: 0,
      long: 0
    }
  }
]

export default {
  data: () => ({
    stations: stations,
    beep_card_price: 24,
    single_journey_price: 30,
    starting_point: '',
    destination: ''
  })
}
</script>
