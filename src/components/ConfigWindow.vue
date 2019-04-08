<template>
  <div>
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
    }
  },
  computed: {
    currencies(){
      return this.$store.getters.getCurrencies
    }
  }

  
}
</script>
