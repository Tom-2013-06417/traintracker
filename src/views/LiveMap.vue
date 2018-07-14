<template>
  <v-container fluid grid-list-xs pa-0>
    <div id="map"></div>
  </v-container>
</template>

<script>
import L from 'leaflet'
import { fetchTrains } from '@/api'

export default {
  data () {
    return {
      map: null,
      tileLayer: null,
      layers: []
    }
  },
  beforeMount () {
    fetchTrains().then((response) => {
      this.trains = response
    })
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      const center = [14.6054402, 120.982061]
      const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      const osmAttrib = 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      const tileLayer = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib})
      const marker = L.marker(center).bindPopup('Hello, world! Doroteo Jose reppin\'').openPopup()

      let map = L.map('map').setView(center, 12)
      tileLayer.addTo(map)
      marker.addTo(map)
    }
  }
}
</script>

<style lang="less" scoped>
#map {
  height: 100vh;
}
</style>
