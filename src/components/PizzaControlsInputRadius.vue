<template>
  <div class='inputRadius'>
    <stupid-radio 
      class="inputRadius__radio"
      name="radius"
      firstOption="Diameter"
      secondOption="Radius"
      @input-changed="setDiameterStatus($event)"
    />
    <label class="inputRadius__label">
    Size:
    <input 
      class="inputRadius__input"
      v-model="radius"
      type="number"
    />
    {{ unitType }}
    </label>
  </div>
</template>

<script>
import StupidRadio from './StupidRadio.vue';

export default {
  components: {
    StupidRadio,
  },
  computed: {
      radius: {
        get(){
          return this.$store.getters.getPizzaRadius;
        },
        set(value){
          this.$store.dispatch('setRadius', value);      
        }
      },
      unitType(){
        return this.$store.getters.getUnitType;
      }
  },
  methods: {
    setDiameterStatus(bool){
      this.$store.commit('setDiameter', bool)
    },
  }
}
</script>

<style lang='less' scoped>
   @import '../styles/main.less';
   .inputRadius{
    .componentMain()
  }
  .inputRadius__label{
    .componentLabel()    
  }
  .inputRadius__radio{
    .componentRadio()
  }
  .inputRadius__input{
    .componentInput()
  }
</style>
