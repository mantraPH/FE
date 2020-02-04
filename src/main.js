/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@/components/Global'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueSession from 'vue-session'
import axios from 'axios'
import { API_PROD, API_DEV, URL_API } from '@/constant'
import { MixinsGlobal } from './mixins/MixinsGlobal'

Vue.mixin({ mixins: [MixinsGlobal] })
Vue.use(VueSession, { persist: true })

Vue.prototype.$API_URL = URL_API
Vue.prototype.$baseUrl = process.env.NODE_ENV === 'development'
? API_DEV
: API_PROD

let session = Vue.prototype.$session
router.beforeEach((to, from, next) => {
  let token = session.get('token')
  let requireAuth = to.meta.hasOwnProperty('requireAuth') && to.meta.requireAuth === false
  ? to.meta.requireAuth
  : true

  if (!requireAuth) {
    if (!requireAuth && token) {
      next('/stores')
      return
    }
    next()
    return
  }
  if (!session.exists()) {
    next('/')
    return
  }
  
  axios.defaults.headers.common['token'] = session.get('token')
  store.dispatch('API_POST', { url: '/ApiSession/checkSessionToken' })
    .then(response => {
      let data = response.data
      session.set('token', data.token)
      next()
    }).catch(() => {
      session.destroy()
      next('/')
    })
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
