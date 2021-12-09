<template >
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Completo: </strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>lingua: </strong> {{ $route.query.lingua }}</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>