import Vue from 'vue'
import Router from 'vue-router'
import Base from './layouts/Base.vue'
import BaseLite from './layouts/BaseLite.vue'
import BaseAdmin from './layouts/BaseAdmin.vue'
import PassengerSelect from './views/PassengerSelect.vue'
import LiveMap from './views/LiveMap.vue'
import PassengerSchedule from './views/PassengerSchedule.vue'
import About from './views/About.vue'
import NotFound from './components/404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Base,
      children: [
        {
          path: '',
          component: PassengerSelect
        },
        {
          path: '/live',
          component: LiveMap
        },
        {
          path: '/schedules',
          component: PassengerSchedule
        },
        {
          path: 'about',
          component: About
        }
      ]
    },
    {
      path: '/login',
      component: BaseLite
    },
    {
      path: '/admin',
      component: BaseAdmin
    },
    {
      path: '*',
      component: BaseLite,
      children: [
        {
          path: '*',
          component: NotFound
        }
      ]
    }
  ]
})
