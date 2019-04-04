<template>
  <div id="app">
    <app-counter />
    <app-show-counter />
  </div>
</template>

<script>
import AppCounter from './components/AppCounter.vue'
import AppShowCounter from './components/AppShowCounter.vue';

export default {
  name: 'app',
  components: {
    AppCounter,
    AppShowCounter,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
