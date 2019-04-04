<template>
  <div>
    <button @click='_increment'>Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement',
    ]),
    _increment(){
      this.$store.dispatch('increment')
    }
  }
}
</script>
