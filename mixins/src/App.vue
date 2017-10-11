<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <active></active>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Active from './components/Active'

export default {
  name: 'app',
  components: {
    Hello,
    Active
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
