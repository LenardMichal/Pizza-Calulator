<template>
  <div class='radioComponent'>
    <label class='radioComponent__label'>
      {{ firstOption }}
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
      {{ secondOption }}
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
    grid-template-columns: 50% 50%;
  }
  .radioComponent__label{
    background-color: @comp-color;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin: 5px;
    text-align: center;
    width: 70%;
    &:hover{
      background-color: @comp-color
    }
    
  }
 

  .radioComponent__input{
    opacity: 0;
    position: relative;
    left:-40px;
    
  }
  .radioComponent__label--active{
    background-color: @second-color !important;
    box-shadow: 4px 4px 2px 2px black;
    
    &:hover{
      background-color: lighten(@second-color, 10%) !important;
    }
  }
</style>

