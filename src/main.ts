import { createApp } from "vue";
import App from "./App.vue";
import "@s/index.scss"; // 全局样式
import router from "./router"; // 路由
import { createPinia } from "pinia"; // 状态管理器

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
