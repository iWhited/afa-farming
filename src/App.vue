<template>
  <div id="app">
    <Staking hello="coucou" />
  </div>
</template>

<script>
import Staking from './components/Staking.vue'

export default {
  name: 'App',
  components: {
    Staking
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
