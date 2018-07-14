<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet'
import { fetchActiveTrains, stations, fetchStationById } from '@/api'

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
    this.updateTrainMarkers()
  },
  methods: {
    initMap () {
      const center = [14.6054402, 120.982061]
      const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      const osmAttrib = 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      const tileLayer = new L.TileLayer(osmUrl, {minZoom: 13, maxZoom: 20, attribution: osmAttrib})

      this.map = L.map('map').setView(center, 12)
      tileLayer.addTo(this.map)

      const userStationId = this.$store.getters.startStation
      fetchStationById(userStationId).then((response) => {
        const userCoordinates = [response.coordinates.lat, response.coordinates.long]
        const popupText = 'You are at ' + response.name
        let userMarker = L.marker(userCoordinates).bindPopup(popupText, { autoClose: false })
        userMarker.markerType = 'user'
        userMarker.addTo(this.map)
        userMarker.openPopup()
      })

      this.loadTrainMarkers()
    },
    fetchMarkerInfo () {
      if (this.activeTrains && this.activeTrains.length) {
        this.markerInfo = this.activeTrains.map(function (train) {
          return {
            coordinates: train.coordinates,
            trainId: train.id,
            currentStation: train.current_station
          }
        })
      }
    },
    makeTrainMarkers () {
      const userStation = this.$store.getters.startStation
      this.markers = this.markerInfo.map((markerInfo) => {
        const remainingTime = this.getRemainingTravelTime(markerInfo.currentStation, userStation)
        const marker = L.marker(markerInfo.coordinates)
        if (remainingTime) {
          const popupText = remainingTime + ' mins away'
          marker.bindPopup(popupText, { autoClose: false })
        }
        marker.markerType = 'train'
        marker.trainId = markerInfo.trainId

        return marker
      })
    },
    addMarkersToMap () {
      this.markers.forEach((marker) => {
        marker.addTo(this.map).openPopup()
      })
    },
    loadTrainMarkers () {
      this.fetchMarkerInfo()
      this.makeTrainMarkers()
      this.addMarkersToMap()
    },
    updateTrainMarkers () {
      setInterval(() => {
        fetchActiveTrains().then((response) => {
          this.activeTrains = response
        }).then(() => {
          this.deleteTrainMarkers()
          this.loadTrainMarkers()
        })
      }, 2000)
    },
    deleteTrainMarkers () {
      this.markers.forEach((marker) => {
        if (marker.markerType === 'train') {
          this.map.removeLayer(marker)
        }
      })
    },
    getRemainingTravelTime (currentStation, userStation) {
      if (!currentStation || !userStation) {
        return
      }
      const currentStationOrder = stations.find(station => { return station.id === currentStation }).order
      const userStationOrder = stations.find(station => { return station.id === userStation }).order

      const stationsInTravel = stations.filter(station => {
        return currentStationOrder < userStationOrder
          ? station.order >= currentStationOrder && station.order < userStationOrder
          : station.order >= userStationOrder && station.order < currentStationOrder
      })

      const remainingTravelTime = stationsInTravel.reduce(
        (accumulator, station) => accumulator + station.minutesToNextStation, 0
      )
      return remainingTravelTime
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
