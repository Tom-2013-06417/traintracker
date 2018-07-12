import Vue from 'vue'
import Router from 'vue-router'
import Base from './layouts/Base.vue'
import BaseLite from './layouts/BaseLite.vue'
import BaseAdmin from './layouts/BaseAdmin.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Base,
      children: [
        {
          path: '',
          component: Home
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
    }
  ]
})
