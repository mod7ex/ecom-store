// import "tailwindcss/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Block from "./layouts/Block.vue";
import Box from "./layouts/Box.vue";

const app = createApp(App);

app.component("Block", Block);
app.component("Box", Box);
app.use(store);
app.use(router);
app.mount("#app");
