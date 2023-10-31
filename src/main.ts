import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";

import { ElPopover } from "element-plus";
const components = [ElPopover];
const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});

createApp(App).mount("#app");
