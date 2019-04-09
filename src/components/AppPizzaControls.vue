<template>
  <div class="controls">
     <button
        class="controls--button"
        @click='appendToArray(getPizza)'>
        Add
     </button>
     <input-radius class="controls--inputRadius"/>
     <input-price class="controls--inputPrice"/>
     <input-count class="controls--inputCount" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import PizzaControlsInputRadius from './PizzaControlsInputRadius.vue'
import PizzaControlsInputPrice from './PizzaControlsInputPrice.vue'
import PizzaControlsCount from './PizzaControlsCount.vue'
export default {
  components: {
    InputRadius: PizzaControlsInputRadius,
    InputPrice: PizzaControlsInputPrice,
    InputCount: PizzaControlsCount,
  },
  methods: {
    ...mapActions([
      'appendToArray'
    ])
  },
  computed: { 
    ...mapGetters([
      'getPizza'
    ])
  }
}
</script>
<style scoped>
  .controls{
    height: auto;
    position: absolute;
    top: 80px;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    width: 100vw;
    left: 0;
    
  }
  .controls--button{
   background-color: var(--second-color);
   color: white;
   padding: 10px;
   font-weight: 600;
   border-radius: 15px;
   grid-row: 4/5;
  }

  .controls--inputCount{
    grid-row: 1/2;
  }
  .controls--inputRadius{
    grid-row: 2/3
  }
  .controls--inputPrice{
    grid-row: 3/4
  }

</style>

