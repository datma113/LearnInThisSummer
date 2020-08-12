<template>
  <div id="app">
    <img src="./assets/logo.png">
    <compHeader></compHeader>
    <compFooter></compFooter>
  </div>
  
</template>

<script>

import compHeader from './Components/compHeaders'
import compFooter from './Components/compFooter'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    components: {
      compHeader,
      compFooter
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
