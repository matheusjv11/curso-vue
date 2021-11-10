<template>
    <div class="citacao">
        <slot name="autor"></slot>
        <slot name="texto"></slot>
    </div>
</template>

<script>
export default {
    activated() {
        console.log("Activate")
    },
    deactivated() {
        console.log("Deactivate")
    },
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
