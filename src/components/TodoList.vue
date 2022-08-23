<template>
  <ul class="todo-list">
    <TodoItem v-for="item in items" :key="item.id" :item="item" @remove-item="removeItem($event)" />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeItem(id) {
      this.$emit('remove-item', id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
