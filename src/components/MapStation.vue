<template>
  <div>
    <div id="map"></div>
    <div class="top-overlay">
      <slot name="top"></slot>
    </div>
    <div class="bottom-overlay">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'

export default {
  data () {
    return {
      map: null,
      marker: null,
      tileLayer: null,
      layers: []
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      const center = [14.6054402, 120.982061]
      const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      const osmAttrib = 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      const tileLayer = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 16, attribution: osmAttrib})
      this.marker = L.marker(center).bindPopup('Hello, world! Doroteo Jose reppin\'').openPopup()

      let map = L.map('map').setView(center, 12)
      tileLayer.addTo(map)
      this.marker.addTo(map)
    }
  }
}
</script>

<style lang="less" scoped>
#map {
  height: 85vh;
  z-index: 0;
}
.top-overlay {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}
.bottom-overlay {
  bottom: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
}
</style>
