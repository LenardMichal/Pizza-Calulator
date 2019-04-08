<template>
  <div id="app">
    Free pizza calculator:
    <app-pizza-controls />
    <app-pizza-table />
    <app-config-window />
  </div>
</template>

<script>
import AppPizzaControls from './components/AppPizzaControls.vue'
import AppPizzaTable from './components/AppPizzaTable.vue'
import AppConfigWindow from './components/AppConfigWindow.vue'

export default {
  name: 'app',
  components: {
    AppPizzaControls,
    AppPizzaTable,
    AppConfigWindow,
  },
  computed: {
    pizza(){
      return this.$store.getters.getPizza
    }
  },
  methods: {
  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  
  
}
</style>
