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

<style scoped>
  .currencyButton{
    background-color: var(--second-color);
    color: white;
    padding: 5px;
    font-size: 1.2rem;
  }

  .currencyButton--active{
    background-color: var(--comp-color);
  }
</style>
