import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import { firebaseConfig } from './config/firebase'
import { store } from './store'
import './registerServiceWorker'

firebase.initializeApp(firebaseConfig)
const db = firebase.database()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
