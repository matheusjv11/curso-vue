export default {
    computed: {
		commaSetterMixin() {
			return this.wordMixin.replaceAll(' ', ',')
		},
		howMuchLettersMixin() {
			this.wordMixin2 = this.wordMixin2.split(' ')

			return this.wordMixin2.map(function (singleWordMixin) {
				return `${singleWordMixin} (${singleWordMixin.length}) `
			}).join('')
		}
	},
	data() {
		return {
			wordMixin: 'Eu sou o Matheus Almeida',
			wordMixin2: 'Pedro é legal'
		}
	},
}