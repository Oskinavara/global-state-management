import { defineStore } from "pinia";

export default defineStore("main", {
  state: () => ({
    items: [
      { name: "Read the book", id: 1 },
      { name: "Buy dog food", id: 2 },
      { name: "Walk the dogs", id: 3 },
    ],
  }),
  actions: {
    addItem(name) {
      this.items.push({ name, id: Math.floor(Math.random() * 100) });
    },
    removeItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
});
