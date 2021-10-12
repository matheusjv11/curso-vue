new Vue({
	el: '#desafio',
	data: {
		efeito: false,
		classeDinamica: 'destaque',
		classe4: '',
		hasBG: false,
		bgColor5: '',
		progressWidth: 1
	},
	methods: {
		iniciarEfeito() {
			this.efeito = !this.efeito
		},
		iniciarProgresso() {
			setInterval(() => {
				if(this.progressWidth != 100)
					this.progressWidth += 1
			}, 100);
		},
		setPerigo(e) {
			if(e.target.value == 'true'){
				this.hasBG = true
			} else if (e.target.value == 'false'){
				this.hasBG = false
			}
		}
	}
})
