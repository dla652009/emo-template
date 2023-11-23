import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 路由
import { createPinia } from "pinia"; // 状态管理器
import "./styles/index.scss"; // 全局样式
import {mountPrototype} from '@/utils/prototype'; // 挂载原型

const pinia = createPinia();
const app = createApp(App);
const global = app.config.globalProperties
mountPrototype(global)

app.use(router);
app.use(pinia);
app.mount("#app");

