import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import  Contador from './Contador.vue'

Vue.config.productionTip = false

Vue.component('app-contador', Contador)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
