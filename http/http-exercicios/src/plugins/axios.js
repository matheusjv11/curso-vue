import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-5ee3b-default-rtdb.firebaseio.com/'
        })

        // Podemos criar várias instancias do axios com base path diferentes
        Vue.prototype.$http2 = axios.create({
            baseURL: 'https://google.com/'
        })

        // Before getting any response
        Vue.prototype.$http.interceptors.request.use(config => {

            return config
        })

        // When the serve responses
        Vue.prototype.$http.interceptors.response.use(resp => {
            const array = []

            for(let chave in resp.data) {
                array.push({id: chave, ...resp.data[chave]})
            }
            console.log(array)
            return resp
        })
    }
})