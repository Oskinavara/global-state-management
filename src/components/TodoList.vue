<template>
  <ul class="todo-list">
    <TodoItem v-for="item in items" :key="item.id" :item="item" />
  </ul>
  <button @click="addNewItem">Add new item</button>
</template>

<script>
import { mapStores, mapWritableState } from "pinia";
import store from "../store";
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  computed: {
    // ...mapStores(store), gives access to "mainStore" variable
    // ("main" comes from store ID found in store declaration file)
    ...mapWritableState(store, ["items"]),
  },
  methods: {
    addNewItem() {
      this.items.push({ name: "Hello", id: 100 });
    },
  },
};
</script>

<style lang="scss" scoped></style>
