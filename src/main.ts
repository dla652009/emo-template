import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 路由
import { createPinia } from "pinia"; // 状态管理器
import mountPrototype from "@/utils/prototype"; // 挂载自定义原型
import mountDirective from '@/directives/index'; // 挂载自定义指令
import "./styles/index.scss"; // 全局样式

const app = createApp(App);
const pinia = createPinia();
const global = app.config.globalProperties;

mountPrototype(global);
mountDirective(app);

app.use(router);
app.use(pinia);
app.mount("#app");
