// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from "vue-router";
import {redirectRouter} from '@/settings/index';
const routes: any = [
  {
    path: "/", // 重定向
    redirect: (_: any) => {
      return { path: `/${redirectRouter}` };
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@v/login/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@v/home/index.vue"),
  },
  {
    path: "/:currentPath(.*)*", // 路由未匹配到，进入这个
    redirect: (_: any) => {
      return { path: "/404" };
    },
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
