<template>
  <AddTodoComponent />
  <TodosComponent />
</template>

<script>
import TodosComponent from "./components/TodosComponent.vue";
import AddTodoComponent from "./components/AddTodoComponent.vue";

export default {
  name: "App",
  components: {
    TodosComponent,
    AddTodoComponent,
  },
};
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
