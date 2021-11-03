<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <button @click="alterarIdade">opa</button>
        <p>{{ idade }}</p>
    </div>
</template>

<script>
import barramento from '@/Barramento'

export default {
    props: ['idade'],
    methods: {
        alterarIdade() {
            this.idade += 1
            barramento.alterarIdade(this.idade)
        }
    }
}

</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
