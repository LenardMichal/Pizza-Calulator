<template>
  <div>
     <button @click='appendToArray(getPizza)'>Add</button>
     <input-radius />
     <input-price />
     <input-count />
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
