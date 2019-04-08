<template>
  <div class='configWindow'
  ref="configWindow">
    <stupid-radio 
      name="units"
      firstOption="cm"
      firstValue="cm"
      secondOption="inch"
      secondValue="inch"
      @input-changed="setUnitType($event), saveOption($event)"
    />
    <currency-button
    v-for="currency in currencies"
    :key="currency"
    :entity="currency"
     />
     <save-check />
  </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
import StupidRadio from './StupidRadio.vue'
import CurrencyButton from './CurrencyButton.vue'
import CheckSaveConfiguration from './CheckSaveConfiguration.vue'
import { setTimeout } from 'timers';
export default {
  components:{
    StupidRadio,
    CurrencyButton,
    SaveCheck: CheckSaveConfiguration,
  },
  methods: {
    ...mapActions(['setUnitType', 'setCurrencyType']),
    saveOption(unit){
      localStorage.setItem('unit', unit)
    },
    closeWindow(e){
     //Getter for all components child
      const configWindow = this.$refs.configWindow;
      const allElements = [configWindow];
      for (let child of configWindow.childNodes){
        allElements.push(child);
      }
      allElements.forEach((el) => {
        if(e.target != el){
          this.$emit('close-window');
          window.removeEventListener('click', this.closeWindow);
        }
      })
      
    }
    
  },
  computed: {
    currencies(){
      return this.$store.getters.getCurrencies
    }
  },
  mounted(){
    //Timeot to prevent auto closing of window
    setTimeout( () => {
      window.addEventListener('click', this.closeWindow);
    }, 1000/60)
  }

  
}
</script>
<style scoped>
  .configWindow{
    position: absolute;
    border: 1px black solid;
    width: 200px;
    height: auto;
    background-color: darkgray;
    top: 12px;
    right: 0;
  }
</style>

