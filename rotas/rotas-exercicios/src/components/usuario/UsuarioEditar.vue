<template >
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Completo: </strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>lingua: </strong> {{ $route.query.lingua }}</p>
                <hr>
        <button primario @click="confirmou = true">Confirmar</button>
        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>
<script>
export default {
    beforeRouteEnter(to, from, next) {
        console.log('Entrei em editar')
        next()
    },
    data() {
        return {
            confirmou: false
        }
    },
    beforeRouteLeave(to, from, next) {
        if(this.confirmou){
            next();
        } else {
            if(confirm('Tem certeza?')) {
                next()
            } else {
                next(false)
            }
        }
    },
}
</script>
<style >
    #rodape{
        margin-top: 1000px;
    }
</style>