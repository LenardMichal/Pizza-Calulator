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
import { mapActions } from 'vuex'
import StupidRadio from './StupidRadio.vue'
import CurrencyButton from './CurrencyButton.vue'
import CheckSaveConfiguration from './CheckSaveConfiguration.vue'

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
  },
  computed: {
    currencies(){
      return this.$store.getters.getCurrencies
    },
  },
  
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

