<template>
  <div class="inputPrice">
    <stupid-radio
    class="inputPrice__radio"
    name='price'
    firstOption="Unit"
    secondOption="Total"
    @input-changed="setPizzaCost($event)"
    />
    <label class="inputPrice__label">
    Price:
    <input 
      class="inputPrice__input"
      v-model.number="price"
      type="number"
      min='0'
      step="0.01"
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
<style lang='less' scoped>
  @import '../styles/main.less';

  .inputPrice{
    .componentMain()
  }
  .inputPrice__label{
    .componentLabel()
    
  }
  .inputPrice__radio{
    .componentRadio()
  }
  .inputPrice__input{
    .componentInput()
  }
  
</style>
