<template>
  <div class='radioComponent'>
    <label class='radioComponent__label'>
      {{ firstOption }}:
      <input
        class="radioComponent__input"
        v-model="value"
        type="radio"
        :name="name"
        :value="firstValue"
        ref="firstInput"
        
      />
    </label>
    <label class='radioComponent__label'>
      {{ secondOption }}:
      <input
        v-model="value"
        type="radio"
        :name="name"
        :value="secondValue"
        ref="secondInput"
        class="radioComponent__input"
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
        element.parentElement.classList.add('radioComponent__label--active');
      }else{
        element.parentElement.classList.remove('radioComponent__label--active');
      }
    }
  }
  
  
}
</script>
<style lang='less' scoped>
  @import '../styles/main.less';
 
  .radioComponent{
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
  }
  .radioComponent__label{
    background-color: @second-color;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin: 5px;
    width: auto; 
  }

 
  .radioComponent__input{
    opacity: 0;
    
  }
  .radioComponent__label--active{
    background-color: @comp-color !important;
  }
</style>

