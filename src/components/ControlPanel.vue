<template>
  <div class="control-panel">
    <input v-model="itemName" type="text" />
    <button @click="addItem(itemName)">Add item</button>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import store from "../store";

export default {
  name: "ControlPanel",
  data() {
    return {
      itemName: "",
    };
  },
  methods: {
    ...mapActions(store, ["addItem"]),
  },
};
</script>

<style scoped>
.control-panel {
  display: flex;
  align-items: center;
}
</style>
