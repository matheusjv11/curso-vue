import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import  Contadores from './Contadores.vue'

Vue.config.productionTip = false

Vue.component('app-contadores', Contadores)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
