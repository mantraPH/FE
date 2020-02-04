import Vue from 'vue'
import Router from 'vue-router'
import Application from '@/components/Application.vue'
import Login from './children/login'
import Stores from './children/stores'
import Products from './children/products'
import Clients from './children/clients'
import Users from './children/users'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/Login',
    component: Application,
    children: [
      Login,
      Stores,
      Products,
      Clients,
      Users
    ]
  }]
})

export default router
