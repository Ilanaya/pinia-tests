<script setup lang="ts">
import { getActivePinia } from "pinia";
import TheWelcome from "../components/TheWelcome.vue";
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();
counterStore.count++;

const getStoreById = (id: string) => {
  //@ts-expect-error _s is internal
  return getActivePinia()?._s.get(id);
};
const foundStore = getStoreById("counter");
console.log("foundStore", foundStore);
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
