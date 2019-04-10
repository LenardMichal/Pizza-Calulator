<template>
  <div>
    And you get for 1 <span v-html='currencyType'></span>: {{ calcEffiency(field, price) }}{{ unitType }}
    <span style="vertical-align: super">2</span>
    
  </div>
</template>
<script>
export default {
  props:{
    field:{
      required: true,
      type: Number,
    },
    price:{
      required: true,
      type: Number,
    }
  },
  methods:{
    calcEffiency(field, price){
      return Math.round((field / price) * 100) / 100
    }
  },
  computed:{
    currencyType(){
      return this.$store.getters.getCurrencyType;
    },
    unitType(){
      return this.$store.getters.getUnitType;
    }
  }
}
</script>
<style lang="less" scoped>
  div{
    padding-bottom: 5px;
  }
</style>
