<template>
  <div>
    <ControlPanel @add-item="addItem" />
    <TodoList @remove-item="removeItem" :items="items" />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import ControlPanel from './components/ControlPanel.vue';

export default {
  components: {
    TodoList,
    ControlPanel,
  },
  data() {
    return {
      items: [
        { name: 'Read the book', id: 1 },
        { name: 'Buy dog food', id: 2 },
        { name: 'Walk the dogs', id: 3 },
      ],
    };
  },
  methods: {
    addItem(name) {
      this.items.push({ name, id: Math.floor(Math.random() * 100) });
    },
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id)
    }
  },
};
</script>

<style scoped></style>
