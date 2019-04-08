<template>
  <div>
    <label>
      {{ firstOption }}:
      <input
        v-model="value"
        type="radio"
        :name="name"
        :value="firstValue"
      />
    </label>
    <label>
      {{ secondOption }}:
      <input
        v-model="value"
        type="radio"
        :name="name"
        :value="secondValue"
      />
    </label>
  </div>
</template>
<script>
export default {
  props: {
    name:{
      required: true,
      type: String,
    },
    firstOption: {
      type: String,
      default: 'First Option'
    },
    secondOption: {
      type: String,
      default: 'Second Option'
    },
    firstValue: {
      type: [String, Boolean],
      default: true,
    },
    secondValue: {
      type: String,
      default: '',
    }
  },
  data(){
    return{
      value: this.firstValue
    }
  },
  watch: {
    value(){
      this.$emit('input-changed', this.value);
    }
  }
  
}
</script>
<style scoped>
  
</style>

