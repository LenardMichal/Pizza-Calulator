<template>
  <div class="configWindow">
    <button 
    @click="showWindow = !showWindow"
    class="configWindow--button"
    >
    COG
    </button>

    <div
    class='configWindow--window'
     v-if="showWindow"
     >

      <config-window
        class="configWindow--box"
        />
      <div class="configWindow--veil"
        @click="showWindow = false"
      >
        
      </div>
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
  .configWindow{
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  .configWindow--button{
    color: white;
    background-color: green;
    z-index: 20;

  }

  .configWindow--veil{
    background-color: rgba(30, 30, 30, 0.8);
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 18;
  }
  
  .configWindow--box{
    z-index: 20;
  }
</style>


