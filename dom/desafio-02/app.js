new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Você clicou aqui')
        },
        getKeyUp(val) {
            this.valor = val
        }
    }
})