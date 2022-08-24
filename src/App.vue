<template>
  <div>
    <ControlPanel />
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import ControlPanel from "./components/ControlPanel.vue";

export default {
  components: {
    TodoList,
    ControlPanel,
  },
};
</script>

<style scoped></style>
