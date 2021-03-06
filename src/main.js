// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import { createRouter } from './router'
import { createStore } from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

export function createApp () {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    // el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    // render: h => h(App)
  })
  return { app, router, store }
}
