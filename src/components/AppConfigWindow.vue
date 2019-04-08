<template>
  <div>
    <button @click="showWindow = !showWindow">ShowConfig</button>
    <div
     v-if="showWindow"
     >
      <config-window @close-window="showWindow = false"/>
    </div>
  </div>
</template>
<script>
import ConfigWindow from './ConfigWindow.vue'

export default {
  components: {
    ConfigWindow,
  },
  data(){
    return{
      showWindow: false
    }
  },
  beforeCreate(){
    let saveStatus = localStorage.getItem('shouldLoadSettings');
    
    if(saveStatus === 'true'){
      this.$store.dispatch('setUnitType', localStorage.getItem('unit'))
      this.$store.dispatch('setCurrencyType', localStorage.getItem('currency'))
    }
  }
}
</script>
<style scoped>
  div{
    position: absolute;
    top: 5px;
    right: 5px;
  }
  
  button{
    color: white;
    background-color: green;
  }
  
</style>


