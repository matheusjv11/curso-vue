import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('howMuchLetters', function (word) {
	word = word.split(' ')

	return word.map(function (singleWord) {
		return `${singleWord} (${singleWord.length}) `
	}).join('')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
