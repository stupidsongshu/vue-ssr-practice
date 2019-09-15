import { createApp } from './main'

const { app, router, store } = createApp()

// window.onload = function() {
//   app.$mount('#app')
// }

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  app.$mount('#app')
})
