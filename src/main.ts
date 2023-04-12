import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { useGlobalStore } from "./stores/globalStore";
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);

pinia.use(({ store: piniaStore }) => {
  const globalStore = useGlobalStore();

  if (!globalStore.allPiniaStores.has(piniaStore.$id)) {
    // eslint-disable-next-line no-console
    console.log("piniaStore.$id", piniaStore.$id);
    globalStore.allPiniaStores.set(piniaStore.$id, piniaStore);
  }

  const { $dispose } = piniaStore;
  piniaStore.$dispose = () => {
    $dispose();
    globalStore.allPiniaStores.delete(piniaStore.$id);
  };
});

app.mount("#app");
