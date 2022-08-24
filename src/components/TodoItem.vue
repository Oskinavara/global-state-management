<template>
  <li class="todo-list-item">
    <span>{{ item.name }}</span>
    <button @click="removeItem(item.id)">
      <img src="../assets/bin.png" alt="" />
    </button>
  </li>
</template>

<script>
import { mapActions } from "pinia";
import store from "../store";
export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(store, ["removeItem"]),
  },
};
</script>

<style scoped>
.todo-list-item {
  display: flex;
  align-items: center;
  padding: 12px;
}
span {
  font-size: 24px;
}
img {
  width: 24px;
}
</style>
