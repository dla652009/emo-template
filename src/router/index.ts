// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from "vue-router";
import { redirectRouter } from "@/settings/index";
const routes: any = [
  {
    path: "/", // 重定向
    redirect: () => {
      return { path: `/${redirectRouter}` };
    },
  },
  {
    path: "/hi",
    name: "hi",
    component: () => import("@/pages/hi.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/layouts/404.vue"),
  },
  {
    path: "/:currentPath(.*)*", // 路由未匹配到，进入这个
    redirect: () => {
      return { path: "/404" };
    },
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
