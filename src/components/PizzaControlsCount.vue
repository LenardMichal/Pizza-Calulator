<template>
  <label class="inputCount__label">
  How many:
  <select
    class="inputCount__select"
    v-model="count"
    >
    <option
      class='inputCount__option'
      v-for="n in 10"
      :key="n"
      :value="n"
    >
    {{ n }}
    </option>
  </select>
  ?
  </label>
</template>

<script>
export default {
  computed: {
    count: {
      get(){
        return 1;
      },
      set(value){
        this.$store.dispatch('setCount', value);
      }
    }
  },
  mounted(){
    this.count = 1;
  }
  
}
</script>
<style scoped lang="less">
  .inputCount__label{
    font-size: 1.5rem;
    padding: 5px;
  }
  .inputCount__select{
    font-size: inherit;
    text-align: center
  }
</style>
