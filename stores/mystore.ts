import { defineStore } from 'pinia';

export const useMyStore = defineStore('test', {
  state: () => ({
    message: 'Hello World!',
    count: 0
  }),
  actions: {
    welcome(newCount: number) {
      this.count = newCount;
    },
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    }
  }
});
