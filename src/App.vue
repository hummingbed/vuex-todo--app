<template>
  
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <TodosComponent />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodosComponent from './components/TodosComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TodosComponent
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
