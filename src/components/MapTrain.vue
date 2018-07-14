<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet'
import { fetchTrains, fetchCoordinates } from '@/api'

const state = {
  map: null,
  // marker: null,
  tileLayer: null,
  layers: [],
  activeTrains: [],
  markers: []
}

export default {
  data () {
    return state
  },
  mounted () {
    fetchTrains().then((response) => {
      const trains = response
      this.activeTrains = trains.filter(train => train.status === 'OK' && train.operating)
      this.initMap()
    })
    // this.updateCoordinates()
  },
  methods: {
    initMap () {
      const center = [14.6054402, 120.982061]
      const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      const osmAttrib = 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      const tileLayer = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 16, attribution: osmAttrib})

      let map = L.map('map').setView(center, 12)
      tileLayer.addTo(map)
      this.markers = this.getTrainMarkers()
      this.markers.forEach(function (marker) {
        marker.markerObj.addTo(map).bindPopup(marker.popupText, { autoClose: false }).openPopup()
      })
    },
    getTrainMarkers () {
      let markerInfo = []
      if (this.activeTrains && this.activeTrains.length) {
        this.activeTrains.forEach(function (train, index) {
          markerInfo[index] = {
            markerObj: L.marker(train.coordinates),
            popupText: train.id.toString()
          }
        })
      }
      return markerInfo
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
