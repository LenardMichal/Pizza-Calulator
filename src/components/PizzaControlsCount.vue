<template>
  <label>
  How many:
  <select
    v-model="count"
    >
    <option
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
