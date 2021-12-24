<template>
  <v-layout>
      <Stock v-for="stock in stocks" :key="stock.id"/>
  </v-layout>
</template>

<script>
import Stock from './Stock.vue'

export default {
    components: { Stock },
    data() {
        return {
            stocks: [
                { id: 1, name:'BMW', price: 110 },
                { id: 1, name:'Google', price: 200 },
                { id: 1, name:'Apple', price: 280 },
                { id: 1, name:'Twitter', price: 83 },
            ]
        }
    }
}
</script>

<style>

</style>