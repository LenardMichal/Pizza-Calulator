<template>
  <div class="controls">
     <button
        class="controls__button"
        @click='appendToArray(getPizza)'>
        Add
     </button>
     <button
      class='controls__button--clear'
      @click='clearArray()'
      >
      Clear
      </button>
     <input-radius class="controls__inputRadius"/>
     <input-price class="controls__inputPrice"/>
     <input-count class="controls__inputCount" />
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
      'appendToArray',
      'clearArray'
    ])
  },
  computed: { 
    ...mapGetters([
      'getPizza'
    ])
  }
}
</script>
<style scoped lang='less'>
  @import '../styles/main.less';

  .controls{
    height: auto;
    position: absolute;
    top: 80px;
    display: grid;
    grid-template-rows: auto repeat(3, 1fr);
    grid-template-columns: 60% 40%;
    width: 100vw;
    left: 0;
    
  }
  .controls__button{
   background-color: @second-color;
   color: white;
   padding: 10px;
   font-weight: 600;
   border-radius: 15px;
   grid-row: ~'4/5';
   grid-column: ~'1/2';
   &:hover{
     background-color: @second-color-light;
   }
  }
  .controls__button--clear{
    .controls__button();
    grid-row: ~'4/5';
    grid-column: ~'2/3';
    background-color: darken(@comp-color, 30%);
  }

  .controls__inputCount{
    grid-column: ~'1/3';
    grid-row: ~'1/2';
  }
  .controls__inputRadius{
    grid-row: ~'2/3';
    grid-column: ~'1/3';
  }
  .controls__inputPrice{
    grid-row: ~'3/4';
    grid-column: ~'1/3';
  }

</style>

