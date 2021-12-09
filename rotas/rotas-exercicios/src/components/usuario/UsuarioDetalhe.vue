<template >
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <hr>
        <p><strong>Código:</strong> {{ id }}</p>
        <!-- :to="`/usuario/${route.params.id}/editar`" -->
        <router-link tag="button" primario :to="{
            name: 'editarUsuario', 
            params: {id: $route.params.id},
            query: {completo: true, lingua: 'pt'}
            }">
            Editar
        </router-link>
    </div>
</template>
<script>
export default {
    /*     data() {
        return {
            id: this.$route.params.id
        }
    },
    watch: {
        $route(to, from) {
            this.id = to.params.id
        }
    }, */
    props: ['id'],
}
</script>
<style >
    
</style>