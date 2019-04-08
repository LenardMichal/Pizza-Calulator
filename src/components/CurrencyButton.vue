<template>
  <button @click="setValue(entity)"> 
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
  }
}
</script>

<style>

</style>
