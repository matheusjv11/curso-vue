import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, biding, vnode) {

		let atraso = 0

		if (biding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {
			if (biding.arg === 'fundo') {
				el.style.backgroundColor = biding.value
			} else {
				el.style.color = biding.value
			}
		}, atraso)
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
