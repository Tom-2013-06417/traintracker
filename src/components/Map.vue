<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet'
import { fetchTrains, fetchCoordinates } from '@/api'

export default {
  data () {
    return {
      map: null,
      marker: null,
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
    this.updateCoordinates()
  },
  methods: {
    initMap () {
      const center = [14.6054402, 120.982061]
      const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      const osmAttrib = 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      const tileLayer = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 16, attribution: osmAttrib})
      const marker = L.marker(center).bindPopup('Hello, world! Doroteo Jose reppin\'').openPopup()

      let map = L.map('map').setView(center, 12)
      tileLayer.addTo(map)
      marker.addTo(map)
    },
    updateCoordinates () {
      setInterval(() => {
        fetchCoordinates().then((response) => {
          this.marker.setLatLng(response)
        })
      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
#map {
  height: 90vh;
  z-index: 0;
}
</style>
