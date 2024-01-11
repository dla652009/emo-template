import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 路由
import { createI18n } from "vue-i18n";
import { createPinia } from "pinia"; // 状态管理器
import mountPrototype from "@/utils/prototype"; // 挂载自定义原型
import mountDirective from "@/directives/index"; // 挂载自定义指令
import "./styles/index.scss"; // 全局样式
import "virtual:uno.css"; // uno css
import 'element-plus/dist/index.css'

const app = createApp(App);
const pinia = createPinia();
const i18n = createI18n({
  locale: "zh-CN",
});

const global = app.config.globalProperties;

mountPrototype(global);
mountDirective(app);

app.use(router);
app.use(pinia);
app.use(i18n);
app.mount("#app");
