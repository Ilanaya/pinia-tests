<script setup lang="ts">
import { useHelloStore } from "../stores/helloStore";
import { useGlobalStore } from "../stores/globalStore";
const helloStore = useHelloStore();
const global = useGlobalStore();
helloStore.hello = "newHello";

// eslint-disable-next-line no-console
console.log("global.allPiniaStores", global.allPiniaStores);
// eslint-disable-next-line no-console
console.log(
  'global.allPiniaStores.get("counter")',
  global.allPiniaStores.get("counter")
);
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
