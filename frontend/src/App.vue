<template>
  <div id="app">
    <appHeader />
    <router-view />
    <appFooter />
  </div>
</template>

<script>
import appHeader from './components/Header.vue'
import appFooter from './components/Footer.vue'
export default {
  components: {
    appHeader,
    appFooter
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>