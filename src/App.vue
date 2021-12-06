<template>
  <div>
    <HelloWorld msg="Welcome to vue and jest Test driven development (TDD)" />
    <Accordion />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Accordion from './components/Accordion.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Accordion,
  },
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
