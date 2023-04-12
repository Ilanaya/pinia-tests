import { ref } from "vue";
import { defineStore } from "pinia";

export const useHelloStore = defineStore("hello", () => {
  const hello = ref("hello");

  return { hello };
});
