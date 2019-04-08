<template>
  <div>
    <label>
      {{ firstOption }}:
      <input
        v-model="value"
        type="radio"
        :name="name"
        :value="firstValue"
        ref="firstInput"
        
      />
    </label>
    <label>
      {{ secondOption }}:
      <input
        v-model="value"
        type="radio"
        :name="name"
        :value="secondValue"
        ref="secondInput"
        
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
      
    },
  
  },
  mounted(){
      this.styleLabel(this.$refs.firstInput);
      this.styleLabel(this.$refs.secondInput);
      
  },
  updated(){
    this.styleLabel(this.$refs.firstInput);
    this.styleLabel(this.$refs.secondInput);
  },
  methods: {
    styleLabel(element){
      if(element.checked){
        element.parentElement.classList.add('active');
      }else{
        element.parentElement.classList.remove('active');
      }
    }
  }
  
  
}
</script>
<style scoped>
  label{
    background-color: deepskyblue;
    padding: 10px;
    border-radius: 10px;
    margin: 5px;
    z-index: 16;
    
  }
  input{
    opacity: 0;
    
  }
  .active{
    background-color: red;
  }
</style>

