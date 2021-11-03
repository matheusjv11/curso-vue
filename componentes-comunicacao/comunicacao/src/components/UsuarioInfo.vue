<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFn">Reiniciar nome (callback)</button>
        <p>{{ idade }}</p>
    </div>
</template>

<script>
import barramento from '@/Barramento'

export default {
    props: {
        nome: {
            type: String,
            required: true,
            // default: "Anônimo",
            default: function() {
                return 'Some name created by this function'
            }
        },
        reiniciarFn: Function,
        idade: Number

    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            const antigo = this.nome
            this.nome = 'Pedro'
            // o $emit funciona como uma função global, que, quando chamado, retorna os dados em questão
            this.$emit('nomeMudou', {
                novo: this.nome,
                antigo: antigo
            })
        }
    },
    created() {
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
