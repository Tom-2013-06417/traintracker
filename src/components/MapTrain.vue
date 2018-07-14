<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet'
import { fetchActiveTrains } from '@/api'

const state = {
  map: null,
  tileLayer: null,
  layers: [],
  activeTrains: [],
  markerInfo: [],
  markers: []
}

export default {
  data () {
    return state
  },
  mounted () {
    fetchActiveTrains().then((response) => {
      this.activeTrains = response
      this.initMap()
    })
    this.updateMarkers()
  },
  methods: {
    initMap () {
      const center = [14.6054402, 120.982061]
      const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      const osmAttrib = 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      const tileLayer = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 16, attribution: osmAttrib})

      this.map = L.map('map').setView(center, 12)
      tileLayer.addTo(this.map)

      this.loadMarkers()
    },
    fetchMarkerInfo () {
      if (this.activeTrains && this.activeTrains.length) {
        this.markerInfo = this.activeTrains.map(function (train) {
          return {
            coordinates: train.coordinates,
            trainId: train.id,
            popupText: train.id.toString()
          }
        })
      }
    },
    makeMarkers () {
      this.markers = this.markerInfo.map(function (markerInfo) {
        const marker = L.marker(markerInfo.coordinates).bindPopup(markerInfo.popupText, { autoClose: false })
        marker.trainId = markerInfo.trainId
        return marker
      })
    },
    addMarkersToMap () {
      let map = this.map
      this.markers.forEach(function (marker) {
        marker.addTo(map).openPopup()
      })
      this.map = map
    },
    loadMarkers () {
      this.fetchMarkerInfo()
      this.makeMarkers()
      this.addMarkersToMap()
    },
    updateMarkers () {
      setInterval(() => {
        fetchActiveTrains().then((response) => {
          this.activeTrains = response
        }).then(() => {
          this.deleteMarkers()
          this.loadMarkers()
        })
      }, 2000)
    },
    deleteMarkers () {
      let map = this.map
      this.markers.forEach(function (marker) {
        map.removeLayer(marker)
      })
      this.map = map
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
