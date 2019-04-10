<template>
  <div class='pizzaTable'>
    <ol class="pizzaTable__list" >
      <li 
        class="pizzaTable__list--item"
        v-for='(pizza, index) in getPizzas'
        :key="'pizza' + index"
        :class="evenStyling(index)"
      >
        <table-area
          class="pizzaTable__list--area"
          :count="pizza.count"
          :field='calcField(pizza.radius)'
        />
        <table-price 
          class="pizzaTable__list--price"
          :price="pizza.unitValue"
          :field='calcField(pizza.radius)'
        />
      </li>
    </ol>
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
    ]),
    
  },
  methods:{
    calcField(radius){
      return Math.round((Math.PI * radius ** 2) * 100) / 100
    },
    evenStyling(index){
      if((index + 1) % 2 === 0){
        return 'evenElement'
      }else{
        return ''
      }
    }
  }

}
</script>
<style scoped lang="less">
  @import '../styles/main.less';
  .pizzaTable{
    position: absolute;
    top: 350px;
    left: 0;
    
  }
  .pizzaTable__list{
   background-color: rgb(165, 165, 165);
  }

  .pizzaTable__list--item{
    background-color: @second-color;
    width: 100vw;
    color: white;
    margin: 0;
    font-size: 1.2rem;
  }

  .evenElement{
    background-color: @comp-color;
  }

</style>
