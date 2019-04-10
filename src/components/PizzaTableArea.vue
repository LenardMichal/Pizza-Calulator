<template>
  <div>
    <p>Field of one pizza:{{ field }}{{ unitType }}
      <span style="vertical-align: super">2</span>
    </p>
    <p v-if="moreThanOne">
      Summary Field {{ Math.round(count * field  * 100) / 100}}{{ unitType }}
      <span style="vertical-align: super">2</span>
    </p>
  </div>
</template>
<script>
export default {
  props:{
    field:{
      required: true,
      type: Number,
    },
    count:{
      type: Number,
    }
  },
  computed: {
    moreThanOne(){
      if (this.count > 1){
        return true
      }
      return false
    },
    unitType(){
      return this.$store.getters.getUnitType;
    }

  }
}
</script>
<style lang="less" scoped>
  p{
    margin: 0;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
  }
</style>
