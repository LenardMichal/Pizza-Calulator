<template>
  <button
    class="currencyButton"
    @click="setValue(entity)"
    :class='activeCurrency'
    > 
    <span v-html="entity"></span>
  </button>  
</template>

<script>
export default {
  props:{
    entity:{
      required: true,
      type: String
    }
  },
  methods:{
    setValue(currency){
      localStorage.setItem('currency', this.entity)
      
      this.$store.dispatch('setCurrencyType', currency);
    }
  },
  computed:{
    activeCurrency(){
      if (this.$store.getters.getCurrencyType === this.entity){
        return 'currencyButton--active'
      }else{
        return ''
      }
    },
  },
}
</script>

<style scoped lang='less'>
  @import '../styles/main.less';
  .currencyButton{
    background-color: @second-color;
    color: white;
    padding: 5px;
    font-size: 1.2rem;
    border: 0;
    margin: 4px;
    border-radius: 4px;
  }

  .currencyButton--active{
    background-color: @comp-color;
  }
</style>
