<template>
  <div class="configWindow">
    <button 
    @click="showWindow = !showWindow"
    class="configWindow--button"
    >
    <icon-cog 
    stroke='#fff'
    fill="#fff"
    />
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
import IconCog from './IconCog.vue'

export default {
  components: {
    ConfigWindow,
    IconCog,
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
<style scoped lang='less'>
@import '../styles/main.less';
  .configWindow{
    position: absolute;
    top: 80px;
    right: 10px;

  }
  
  .configWindow--button{
    background-color: lighten(@second-color, 20%);
    z-index: 20;
    height: 25px;
    width: 25px;
    box-sizing: content-box;
    border-radius: 5px;
    border: 0;
    padding: 5px;

    &:hover{
      background-color: @main-color-light;
    }
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
    position: absolute;
    top: 34px;
    left: -166px;
  }
</style>


