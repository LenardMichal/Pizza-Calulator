<template>
  <div>
    <ul>
      <li 
        v-for='(pizza, index) in getPizzas'
        :key="'pizza' + index"
      >
      <table-area 
      :count="pizza.count"
      :field='calcField(pizza.radius)'
      />
      <table-price 
        :price="pizza.unitValue"
        :field='calcField(pizza.radius)'
      />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import PizzaTableArea from './PizzaTableArea.vue'
import PizzaTablePrice from './PizzaTablePrice.vue'

export default {
  components: {
    TableArea: PizzaTableArea,
    TablePrice: PizzaTablePrice,
  },
  computed:{
    ...mapGetters([
      'getPizzas'
    ])
  },
  methods:{
    calcField(radius){
      return Math.round((Math.PI * radius ** 2) * 100) / 100
    }
  }
}
</script>
