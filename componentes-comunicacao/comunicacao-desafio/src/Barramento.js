import Vue from 'vue'

export default new Vue({
    methods: {
        setUsuario(usuario) {
            this.$emit('changeUser', usuario)
        },
        getUsuario(callback) {
            this.$on('changeUser', callback)
        }
    }
})