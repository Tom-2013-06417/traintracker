import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    startStation: '',
    endStation: ''
  },
  mutations: {
    setStartStation (state, payload) {
      state.startStation = payload
    },
    setEndStation (state, payload) {
      state.endStation = payload
    }
  },
  getters: {
    startStation (state) {
      return state.startStation
    },
    endStation (state) {
      return state.endStation
    }
  }
})
