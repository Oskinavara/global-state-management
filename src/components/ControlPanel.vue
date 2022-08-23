<template>
  <div class="control-panel">
    <input v-model="itemName" type="text" />
    <button @click="addItem">Add item</button>
  </div>
</template>

<script>
export default {
  name: 'ControlPanel',
  data() {
    return {
      itemName: '',
    };
  },
  methods: {
    addItem() {
      this.$emit('add-item', this.itemName);
    },
  },
};
</script>

<style scoped>
.control-panel {
  display: flex;
  align-items: center;
}
</style>
