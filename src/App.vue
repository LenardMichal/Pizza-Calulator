<template>
  <div id="app">
    <the-header />
    <app-pizza-controls />
    <app-pizza-table />
    <app-config-window />
  </div>
</template>

<script>
import AppPizzaControls from './components/AppPizzaControls.vue'
import AppPizzaTable from './components/AppPizzaTable.vue'
import AppConfigWindow from './components/AppConfigWindow.vue'
import TheHeader from './components/TheHeader.vue'
export default {
  name: 'app',
  components: {
    AppPizzaControls,
    AppPizzaTable,
    AppConfigWindow,
    TheHeader,
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
  :root{
    --main-color: #00B25C;
    --main-color-light: #36D88A;
    --second-color: #0A67A3;
    --second-color-light: #65A6D1;
    --comp-color: #FF7140;
  }
  


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
