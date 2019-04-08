<template>
  <div>
    <stupid-radio
    name='price'
    firstOption="Unit"
    secondOption="Total"
    @input-changed="setPizzaCost($event)"
    />
    <label>
    Price:
    <input 
      v-model="price"
      type="number"
    />
    <span v-html="currencyType"></span>
    </label>
  </div>
</template>

<script>
import StupidRadio from './StupidRadio.vue'
export default {
  components: {
    StupidRadio,
  },
  methods:{
    setPizzaCost(bool){
      this.$store.commit('setPizzaCost', bool);
    }
  },
  computed:{
    price:{
      get(){
        return this.$store.getters.getPizzaUnitValue;
      },
      set(value){
        this.$store.dispatch('setUnitValue', value)
      }
    },
    currencyType(){
      return this.$store.getters.getCurrencyType
    }
  }
}
</script>
