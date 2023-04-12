import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
  const allPiniaStores = new Map();

  return { allPiniaStores };
});
