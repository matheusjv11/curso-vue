new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },
    computed: {
        resultado() {
            if (this.valor != 37)
                return "Valor diferente"
            return "Valor igual"
        }
    }
});