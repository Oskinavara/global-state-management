<template>
  <li class="todo-list-item">
    <span>{{ item.name }}</span>
    <button @click="removeItem"><img src="../assets/bin.png" alt="" /></button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeItem() {
      this.$emit('remove-item', this.item.id);
    },
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
